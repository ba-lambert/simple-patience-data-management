import { gql } from "apollo-server-express";

export const types = gql `
type SignUp {
    id:ID,
    userName:String,
    email:String,
    password:String,
    profile:String
}
  type Query {
    hello: String
  }
type Mutation{
    signup(
        userName:String,
        email:String,
        password:String,
        profile:String
    ):SignUp,
    login(
        userName:String,
        email:String,
        password:String,
        profile:String
    ):SignUp
}
`