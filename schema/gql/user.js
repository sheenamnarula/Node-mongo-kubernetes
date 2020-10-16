/*
 * @file: user.js
 * @description: Controllers regarding user services.
 * @date: 15.10.2020
 * @author:sheenam
 * */
import { addUser, getUser } from "../../controllers/user";

export const typeDefs = `
                            type User {
                                _id : String!
                                email : String!
                                fullName : String!
                            }
                            type Query {
                                getUser(userId : String!) : User
                            }
                            type Mutation {
                                addUser(email : String! , fullName : String!
                                    password : String! ) : User
                            }
                        `;
export const resolvers = {
  Query: {
    getUser
  },

  Mutation: {
    addUser
  }
};
