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
  try {
    return await memberQueries.deleteMember(id);
  } catch (err) {
    console.error("Error deleting member: ", err);
    throw err;
  } 
}

async function clearMembers() {
  try {
    return await memberQueries.deleteAllMembers();
  } catch (err) {
    console.error("Error clearing members: ", err);
    throw err;
  } 
}

export default {
  getMembers,
  createMember,
  editMember,
  deleteMember,
  clearMembers,
}