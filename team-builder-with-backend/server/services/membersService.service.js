import memberQueries from '../queries/memberQuery.js'

async function getMembers() {
  try {
    return await memberQueries.getAllMembers();
  } catch (err) {
    console.error("Error fetching members: ", err);
    throw err;
  }
}

async function createMember(member) {
  try {
    return await memberQueries.addMember(member);
  } catch (err) {
    console.error("Error adding member: ", err);
    throw err;
  }
}

async function editMember(id, updatedFields) {
  try {
    return await memberQueries.updateMember(id, updatedFields);
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