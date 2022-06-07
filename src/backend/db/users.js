import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio:"I am just a test login account",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654254107/mysocialcircle/woman_lxnetv.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Prabhat",
    lastName: "Singh",
    username: "prabhatsingh",
    password: "prabhatsingh007",
    bio:"I am BCA graduate Learning Frontend Development from NeogCamp ",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654251663/mysocialcircle/prabhatsingh_nrephd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "starkTech",
    password: "IamIronman",
    bio:"You know who I am genius billionaire playboy philanthropist...",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/ironman1_kcpshz.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Rogers",
    username: "captianAmerica",
    password: "steverogers",
    bio:"I'm just a kid from Brooklyn...",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/captain1_dbvf9x.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Thor",
    lastName: "OdinSon",
    username: "thorOdinson",
    password: "strongestAvenger",
    bio:"I'm Thor Odinson , God of thunder ( Toofan ka neta)",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/thor1_vbiiso.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Parker",
    username: "friendlyneighbour",
    password: "petertingle",
    bio:"Secrets have a cost. They're not free. Not now, not ever.",
    avatarURL:"https://res.cloudinary.com/aprabhat/image/upload/v1654253874/mysocialcircle/spiderman1_sfnysl.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
