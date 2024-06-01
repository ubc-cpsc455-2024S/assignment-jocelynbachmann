import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [],
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember(state, action) {
      state.members.push(action.payload);
    },
    deleteMember(state, action) {
      state.members = state.members.filter(member => member.id !== action.payload);
    },
  },
});

export const { addMember, deleteMember } = membersSlice.actions;

export default membersSlice.reducer;
