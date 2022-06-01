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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Prabhat",
    lastName: "Singh",
    username: "prabhatsingh",
    password: "prabhatsingh007",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "starkTech",
    password: "IamIronman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Rogers",
    username: "captianAmerica",
    password: "steverogers",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Thor",
    lastName: "OdinSon",
    username: "thorOdinson",
    password: "strongestAvenger",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Parker",
    username: "friendlyneighbour",
    password: "petertingle",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
