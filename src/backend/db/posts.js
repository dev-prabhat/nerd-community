import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654254107/mysocialcircle/woman_lxnetv.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " et accusamus et iusto odio dignissimos.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654254107/mysocialcircle/woman_lxnetv.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Ohh I just fell asleep while watching Thor the Dark World",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Thor",
    lastName: "OdinSon",
    username: "thorOdinson",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/thor1_vbiiso.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I can do this all day , It is not just a dialogue but an emotion",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Steve",
    lastName: "Rogers",
    username: "captianAmerica",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/captain1_dbvf9x.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Keep reacting on JS code , so that I can became a good React Developer",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Prabhat",
    lastName: "Singh",
    username: "prabhatsingh",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654251663/mysocialcircle/prabhatsingh_nrephd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I'm a mechanic who try to bring peace in this world , if IYKYK",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    lastName: "Stark",
    username: "starkTech",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/ironman1_kcpshz.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Having a Love n Hate relationship with Javascript",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Prabhat",
    lastName: "Singh",
    username: "prabhatsingh",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654251663/mysocialcircle/prabhatsingh_nrephd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Doing write thing can make you good person but doing right thing at the right moment you became the leader.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Steve",
    lastName: "Rogers",
    username: "captianAmerica",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/captain1_dbvf9x.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I'm Thor God of thunder who get electric shocked by small chip , Thor : Ragnarok I'm talking about you",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Thor",
    lastName: "OdinSon",
    username: "thorOdinson",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/thor1_vbiiso.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Using my technology and not giving me credit is not funny",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    lastName: "Stark",
    username: "starkTech",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/ironman1_kcpshz.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
