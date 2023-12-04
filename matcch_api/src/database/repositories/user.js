import db from "#database/client.js";

export async function querySelectAllUsers() {
  const [rows] = await db.query(
    `
		SELECT 
			id,
			name,
			email,
			about,
			role,
			created_at
		FROM USER
		LIMIT 12;
	`,
  );
  return rows;
}

export async function queryInsertUser(data) {
  const { name, email, avatar, about, role, hash, salt } = data;

  await db.query(
    `
		INSERT INTO USER (name, email, avatar, about, role, hash, salt)
		VALUES (?,?,?,?,?,?,?);
	`,
    [name, email, avatar, about, role, hash, salt],
  );
}

/**
 * @param {number} id - The ID of user
 */
export async function querySelectUserById(id) {
  const [rows] = await db.query(
    `
			SELECT 
					u.id, 
					u.name, 
					u.email, 
					u.about, 
					u.role, 
					CASE 
							WHEN u.role = 'teacher' THEN t.available
							ELSE NULL
					END AS available,
					CASE 
							WHEN u.role = 'teacher' THEN JSON_ARRAYAGG(th.name)
							ELSE NULL
					END AS themes,
					CASE 
							WHEN u.role = 'teacher' THEN JSON_ARRAYAGG(tm.name)
							ELSE NULL
					END AS modalities,
					JSON_ARRAYAGG(tk.name) AS tracks
			FROM 
					USER AS u
					LEFT JOIN THEME_TEACHER AS tt ON tt.user_id = u.id
					LEFT JOIN THEME AS th ON th.id = tt.theme_id
					LEFT JOIN TRACK_USER AS tu ON tu.user_id = u.id
					LEFT JOIN TRACK AS tk ON tk.id = tu.track_id
					LEFT JOIN TEACHER AS t ON u.id = t.user_id
					LEFT JOIN TCC_MODALITY_TEACHER as tmt on tmt.user_id = u.id
					LEFT JOIN TCC_MODALITY as tm on tm.id = tmt.modality_id
			WHERE
					u.id = ?
			GROUP BY
					u.id, 
					u.name, 
					u.email, 
					u.about, 
					u.role, 
					CASE 
							WHEN u.role = 'teacher' THEN t.available
							ELSE NULL
					END
			LIMIT 1;
	`,
    [id],
  );
  return rows;
}

/**
 * @param {string} email - The email of user
 */
export async function querySelectUserByEmail(email) {
  const [rows] = await db.query(
    `
			SELECT 
					*
			FROM 
					USER AS u
			WHERE
					u.email = ?
			LIMIT 1;
	`,
    [email],
  );
  return rows[0];
}

export async function querySelectTeacher(data) {
  const { themes, tracks, modalities } = data;
  const selection = [];
  const queries = [];
  const placeholders = [];

  if (Array.isArray(themes) && themes.length > 0) {
    selection.push(`
			JSON_ARRAYAGG(th.name) as themes
		`);
    queries.push(`
			RIGHT JOIN THEME_TEACHER as tt on tt.user_id = u.id
			CROSS JOIN THEME as th on th.id IN (?) AND th.id = tt.theme_id -- ID of THEME
		`);
    placeholders.push(themes);
  }

  if (Array.isArray(tracks) && tracks.length > 0) {
    selection.push(`
			JSON_ARRAYAGG(tk.name) as tracks
		`);
    queries.push(`
			RIGHT JOIN TRACK_USER as tu on tu.user_id = u.id
			RIGHT JOIN TRACK as tk on tk.id IN (?) AND tk.id = tu.track_id -- ID of TRACK
		`);
    placeholders.push(tracks);
  }

  if (Array.isArray(modalities) && modalities.length > 0) {
    selection.push(`
			JSON_ARRAYAGG(tm.name) as modalities
		`);
    queries.push(`
			RIGHT JOIN TCC_MODALITY_TEACHER as tmt on tmt.user_id = u.id
			RIGHT JOIN TCC_MODALITY as tm on tm.id IN (?) AND tm.id = tmt.modality_id -- ID of MODALITY
		`);
    placeholders.push(modalities);
  }

  const [rows] = await db.query(
    `
		SELECT 
			u.id, 
			u.name, 
			u.email, 
			u.about, 
			u.role, 
			t.available, 
			${selection.join(",")}
		FROM 
			USER as u CROSS 
			JOIN TEACHER as t on u.id = t.user_id 
			${queries.join(" ")}
		WHERE 
			u.role = 'teacher'
		GROUP BY u.id, u.name, u.email, u.about, t.available
		LIMIT 12;
	`,
    placeholders,
  );
  return rows;
}
