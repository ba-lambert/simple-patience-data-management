import { gql } from "apollo-server-express";

export const timeSchema = gql `
scalar Date
type TimePick {
    id:ID,
    doctorId:ID,
    timeRange:[Date],
}
type Query {
    getTimeSlots: [TimePick]
}

type Mutation{
    createTimeSlot(doctorId:String!,timeRange:[Date]):TimePick
}
`