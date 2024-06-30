import Members from "../models/memberSchema.js"

const memberQueries = {
  getAllMembers: async function () {
    try {
      const members = await Members.find();
      return members;
    } catch (error) {
      console.error("Error fetching all members:", error);
      throw error;
    }
  },
  getMember: async function (id) {
    try {
      const member = await Members.findOne({ _id: id });
      return member
    } catch (error) {
      console.error(`Error fetching member with id ${id}:`, error);
      throw error;
    }
  }
}

export default memberQueries;