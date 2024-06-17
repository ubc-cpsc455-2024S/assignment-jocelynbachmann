import * as fs from "fs-extra";
import path from "path";

async function getMembers() {
  try {
    const members = await fs.readJSON(path.join(__dirname, '../members.json'));
    return members;
  } catch (err) {
    console.error("Error parsing JSON file: ", error);
    throw error;
  }
}

export default {
  getMembers,
}