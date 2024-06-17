import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  members: [],
  status: 'idle', 
  error: null
}

export const fetchMembers = createAsyncThunk('members/fetchMembers', async () => {
  const res = await axios.get('http://localhost:4000/members');
  return res.data;
});

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
  extraReducers(builder) {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addMember, removeMember, clearMembers } = membersSlice.actions;

export default membersSlice.reducer;
