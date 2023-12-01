import path from "path";
import { fileURLToPath } from "url";

const getPathName = () => {
  const __filename = fileURLToPath(import.meta.url);
  return {
    __filename,
    __dirname: path.dirname(__filename),
  };
};

export { getPathName };
