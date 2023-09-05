import { gql } from "apollo-server-express";

export const doctorSchema = gql`
	type Doctor {
		id: ID
		fullNames: String
		email: String
		password: String
		gender: String
		hospital: String
		district: String
		province: String
		role: String
		profile: String
	}
	type Query {
		doctor(id: ID!): Doctor
		doctors: [Doctor]
        filterDoctors(filters: DoctorFilterInput): [Doctor]
	}
    type Mutation {
        addDoctor(
            fullNames: String!
            email: String!
            password: String!
            gender: String!
            hospital: String!
            district: String!
            province: String!
            role: String!
            profile: String!
          ): Doctor
      }
      input DoctorFilterInput {
        district: String
        hospital: String
      }
`;
