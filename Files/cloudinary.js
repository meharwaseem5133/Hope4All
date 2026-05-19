import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, '../.env');
const dotenvResult = dotenv.config({ path: envPath, quiet: true });
if (dotenvResult.error && dotenvResult.error.code !== 'ENOENT') {
  console.warn(`dotenv warning: unable to load env file at ${envPath}.`, dotenvResult.error);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary as v2 };
export default { v2: cloudinary };
