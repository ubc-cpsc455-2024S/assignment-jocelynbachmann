import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: "Mario",
      age: 30,
      description: "Mario is a mustached Italian plumber who lives in the Mushroom Kingdom. Mario and his brother, Luigi, are plumbers who originally worked in Brooklyn, New York City. Mario is known for being kind, cheerful, playful, daredevil, courageous, and headstrong and is also eager and cocky in certain occasions. ",
      image: "https://pngimg.com/d/mario_PNG54.png"
    },
    {
      id: 2,
      name: "Luigi",
      age: 30,
      description: "Luigi is Mario's younger twin brother. While Mario is everyone's favorite superstar, Luigi is not nearly as well known among the citizens of the Mushroom Kingdom. Luigi is portrayed as timid, cowardice, worrisome, and self-conscious in many of his appearances, especially since Luigi's Mansion.",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a394efc-d4bd-466a-aa96-0c444ab1cffb/dh39znr-eee424fc-3d92-4a03-b39f-4736a173c5bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMzk0ZWZjLWQ0YmQtNDY2YS1hYTk2LTBjNDQ0YWIxY2ZmYlwvZGgzOXpuci1lZWU0MjRmYy0zZDkyLTRhMDMtYjM5Zi00NzM2YTE3M2M1YmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iqi0XIs6cwmjxKAiRRTWKAZYcaOwddJPyIYwoiao1Tk"
    },
    {
      id: 3,
      name: "Princess Peach",
      age: 28,
      description: "Princess Peach is the ruler of the Mushroom Kingdom, making her debut in Super Mario Bros., and the tritagonist of the Mario franchise. She is sweet, kind, optimistic, friendly, and experienced.",
      image: "https://i.pinimg.com/originals/02/4f/5d/024f5d09af65610089fdb9ca3f5738e4.png"
    },
    {
      id: 4,
      name: "Bowser",
      age: 29,
      description: "Bowser is the main antagonist of Nintendo's Mario franchise and is the archenemy of Mario. Bowser most commonly kidnaps Princess Peach, with whom he has unrequited love for, so he can make her his queen. He is the leader of the Koopa race.",
      image: "https://ssb.wiki.gallery/images/thumb/7/71/Bowser.png/1200px-Bowser.png"
    }
  ],
};

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
