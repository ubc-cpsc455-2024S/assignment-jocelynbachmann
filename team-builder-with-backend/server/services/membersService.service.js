import fs from 'fs-extra';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = path.join(__dirname, '../members.json');
const initialMembers = await fs.readJson(filePath);

let members = initialMembers;

async function getMembers() {
  try {
    return members;
  } catch (err) {
    console.error("Error parsing JSON file: ", err);
    throw err;
  }
}

async function createMember(member) {
  try {
    members.push(member);
  } catch (err) {
    console.error("Error adding member: ", err);
    throw err;
  }
}

async function editMember(id, updatedFields) {
  try {
    members = members.map(member => {
      if (member.id == id) {
        return {...member, ...updatedFields};
      }
      return member;
    });
  } catch (err) {
    console.error("Error editing member: ", err);
    throw err;
  }
}

async function deleteMember(id) {
  members = members.filter(member => member.id != id);
}

async function clearMembers() {
  members = [];
}

export default {
  getMembers,
  createMember,
  editMember,
  deleteMember,
  clearMembers,
}