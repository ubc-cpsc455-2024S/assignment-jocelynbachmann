import { createSlice } from '@reduxjs/toolkit';

// const initialState = get request

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember(state, action) {
      state.members.push(action.payload);
    },
    removeMember(state, action) {
      state.members = state.members.filter(member => member.id !== action.payload);
    },
    clearMembers(state) {
      state.members = [];
    }
  },
});

export const { addMember, removeMember, clearMembers } = membersSlice.actions;

export default membersSlice.reducer;
