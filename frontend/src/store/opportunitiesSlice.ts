import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOpportunities, getFollowedOpportunities, toggleFollow } from "../api/opportunities";

export interface Opportunity {
  id: number;
  code: string;
  title: string;
  type: string;
  is_followed: boolean;
  publish_date: string;
  close_date: string;
}

interface OpportunitiesState {
  list: Opportunity[];
  followed: Opportunity[];
}

const initialState: OpportunitiesState = {
  list: [],
  followed: [],
};

export const fetchOpportunities = createAsyncThunk("opportunities/fetch", getOpportunities);
export const fetchFollowed = createAsyncThunk("opportunities/fetchFollowed", getFollowedOpportunities);
export const updateFollowStatus = createAsyncThunk("opportunities/toggleFollow", async ({ id, isFollowed }: { id: number; isFollowed: boolean }) => {
  await toggleFollow(id, isFollowed);
  return { id, isFollowed };
});

const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOpportunities.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchFollowed.fulfilled, (state, action) => {
        state.followed = action.payload;
      })
      .addCase(updateFollowStatus.fulfilled, (state, action) => {
        const { id, isFollowed } = action.payload;
        state.list = state.list.map((op) => (op.id === id ? { ...op, is_followed: isFollowed } : op));
        if (isFollowed) {
          state.followed.push(state.list.find((op) => op.id === id)!);
        } else {
          state.followed = state.followed.filter((op) => op.id !== id);
        }
      });
  },
});

export default opportunitiesSlice.reducer;
