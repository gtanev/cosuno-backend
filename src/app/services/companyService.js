import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function findAll() {
  const companies = await fs.readFile(resolve(__dirname, '../../resources/companies.json'), 'utf-8');
  return JSON.parse(Buffer.from(companies).toString())
}

export default { findAll };
