import fs from "node:fs";
import path from "node:path";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { querySelectUserById } from "#database/repositories/user.js";
import { getPathName } from "#src/utils.js";

const pathToKey = path.join(getPathName().__dirname, "..", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

export const load = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
  };

  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const id = payload.sub;
        const user = await querySelectUserById(id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch {
        return done(err, false);
      }
    }),
  );
};
