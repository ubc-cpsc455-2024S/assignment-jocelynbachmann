import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState = {
  members: [],
  status: 'idle', 
  error: null
}

export const fetchMembers = createAsyncThunk('members/fetchMembers', async () => {
  const res = await axios.get(`${BASE_URL}/members`);
  return res.data;
});

export const addMember = createAsyncThunk('members/addMember', async (member) => {
  const newMember = await axios.post(`${BASE_URL}/members/`, member);
  return newMember.data;
});

export const updateMember = createAsyncThunk('members/updateMember', async (member) => {
  const updatedMember = await axios.patch(`${BASE_URL}/members/${member._id}`, member);
  return updatedMember.data;
});

export const removeMember = createAsyncThunk('members/removeMember', async (id) => {
  await axios.delete(`${BASE_URL}/members/${id}`);
  return id;
});

export const clearMembers = createAsyncThunk('members/clearMembers', async () => {
  await axios.delete(`${BASE_URL}/members/`);
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
      .addCase(updateMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.members.findIndex(member => member._id === action.payload._id);
        if (index !== -1) {
          state.members[index] = action.payload;
        }
      })
      .addCase(updateMember.rejected, (state, action) => {
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
        state.members = state.members.filter(member => member._id !== action.payload);
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