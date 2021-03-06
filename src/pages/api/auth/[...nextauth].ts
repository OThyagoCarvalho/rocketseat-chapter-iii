import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import  { fauna } from "../../../services/fauna";
import { query as q } from "faunadb"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      await fauna.query(
        q.Create(
          q.Collection('user'),
          { data: { email: user.email} }
        )
      )
      //TODO: Verify if user already exists in DB.
      //TODO: Try writing in DB or throws an error.
      
      return true;
    },
  },
})