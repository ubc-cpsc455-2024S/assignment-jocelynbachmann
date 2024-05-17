let members = `[
  {
    "name": "Mario",
    "age": 30,
    "description": "Mario is a mustached Italian plumber who lives in the Mushroom Kingdom. Mario also sometimes rules his own land, Mario Land. Mario and his brother, Luigi, are plumbers who originally worked in Brooklyn, New York City. Mario is known for being kind, cheerful, playful, daredevil, courageous, and headstrong and is also eager and cocky in certain occasions. ",
    "image": "https://cdn.vox-cdn.com/thumbor/VlPF8UuUKoUHFtiebdDsQpW1zYs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9632107/mario.jpg"
  },
  {
    "name": "Luigi",
    "age": 30,
    "description": "Luigi is Mario's younger twin brother who first appeared as a palette swap of Mario in Mario Bros. for the Arcade (and later, for the NES). He wears green instead of red and is taller and slimmer than Mario. While Mario is everyone's favorite superstar, Luigi is not nearly as well known among the citizens of the Mushroom Kingdom. Luigi is portrayed as timid, cowardice, worrisome, and self-conscious in many of his appearances, especially since Luigi's Mansion.",
    "image": "https://i.pinimg.com/474x/65/c8/bd/65c8bd564d77603848994b97a8a7c7d1.jpg"
  },
  {
    "name": "Princess Peach",
    "age": 28,
    "description": "Princess Peach is the ruler of the Mushroom Kingdom, making her debut in Super Mario Bros., and the tritagonist of the Mario franchise. She is sweet, kind, optimistic, friendly, and experienced.",
    "image": "https://i.pinimg.com/736x/0c/a3/3c/0ca33cd50d8ec0a894f9aa061b501ff0.jpg"
  },
  {
    "name": "Bowser",
    "age": 29,
    "description": "Bowser is the main antagonist of Nintendo's Mario franchise and is the archenemy of Mario. Bowser most commonly kidnaps Princess Peach, with whom he has unrequited love for, so he can make her his queen. He is the leader of the Koopa race.",
    "image": "https://static.wikia.nocookie.net/nonhuman-video-game-flattenings/images/6/62/Bowser.jpg/revision/latest?cb=20160203233710"
  }
]`;

function handleFormSubmission(event) {
    event.preventDefault();

    console.log("members", members);
    membersArr = JSON.parse(members);

    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const age = form.age.value;
    const image = form.image.value;

    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Age:', age);
    console.log('Image URL:', image);

    membersArr.push({name, description, age, image});
    members = JSON.stringify(membersArr);
    console.log("members", members);

    form.name.value = null;
    form.description.value = null;
    form.age.value = null;
    form.image.value = null;
}

function showMembersCards() {
  const cardsContainer = document.getElementById('members-cards-container');
}