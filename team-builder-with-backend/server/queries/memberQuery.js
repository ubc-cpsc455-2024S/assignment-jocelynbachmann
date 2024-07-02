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
  },
  addMember: async function (memberData) {
    try {
      const newMember = new Members(memberData);
      const savedMember = await newMember.save();
      return savedMember;
    } catch (error) {
      console.error("Error saving new member:", error);
      throw error;
    }
  },
  updateMember: async function (memberID, memberData) {
    try {
      return await Members.findByIdAndUpdate(memberID, memberData, {new: true});
    } catch (error) {
      console.error(`Error updating member with id ${memberData._id}:`, error);
      throw error;
    }
  },
  deleteMember: async function (memberID) {
    try {
      return await Members.deleteOne({ _id: memberID });
    } catch (error) {
      console.error(`Error deleting member with id ${memberID}:`, error);
      throw error;
    }
  },
  deleteAllMembers: async function () {
    try {
      return await Members.deleteMany();
    } catch (error) {
      console.error("Error clearing members:", error);
      throw error;
    }
  }
}

export default memberQueries;