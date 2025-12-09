import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = __dirname;
const projectRootDir = join(srcDir, '..')

export {
    srcDir,
    projectRootDir,
}
