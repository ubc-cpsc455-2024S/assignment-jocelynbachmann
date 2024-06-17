import fs from 'fs-extra';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function getMembers() {
  try {
    const filePath = path.join(__dirname, '../members.json');
    const members = await fs.readJson(filePath);
    return members;
  } catch (err) {
    console.error("Error parsing JSON file: ", err);
    throw err;
  }
}

export default {
  getMembers,
}