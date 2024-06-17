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

export const addMember = createAsyncThunk('members/addMember', async (member) => {
  await axios.post(`http://localhost:4000/members/`, {
    id: member.id,
    name: member.name,
    age: member.age,
    description: member.description,
    image: member.image
  });

  return member;
});

export const removeMember = createAsyncThunk('members/removeMember', async (id) => {
  await axios.delete(`http://localhost:4000/members/${id}`);
  return id;
});

export const clearMembers = createAsyncThunk('members/clearMembers', async () => {
  await axios.delete('http://localhost:4000/members/');
});

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members.push(action.payload);
      })
      .addCase(addMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
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
      })
      .addCase(removeMember.fulfilled, (state, action) => {
        state.members = state.members.filter(member => member.id !== action.payload);
      })
      .addCase(removeMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(clearMembers.fulfilled, (state) => {
        state.members = [];
      })
      .addCase(clearMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// export const { } = membersSlice.actions;

export default membersSlice.reducer;
