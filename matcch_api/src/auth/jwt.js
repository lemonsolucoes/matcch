import jsonwebtoken from "jsonwebtoken";
import fs from "node:fs";
import path from "node:path";

import { getPathName } from "#src/utils.js";

const pathToKey = path.join(getPathName().__dirname, "..", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MYSQL user ID
 */
export function issueJWT(user) {
  const id = user.id;
  const expiresIn = "1d";
  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}
