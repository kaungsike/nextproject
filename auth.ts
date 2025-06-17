import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
    GitHub({
      authorization: {
        params: { prompt: "login" }, // 👈 this forces the GitHub login screen
      },
    }),
  ],
  callbacks: {
    async signIn({ user: { name, image, email }, profile }) {
      try {
        const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile?.id,
        });

        if (!existingUser) {
          await writeClient.create({
            _type: "author",
            name,
            email,
            username: profile?.login,
            image,
            bio: profile?.bio || "",
            id: profile?.id,
          });
        }

        return true; // ✅ Return true to allow sign-in
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // ❌ Block sign-in if error occurs
      }
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile.id,
        });
        token.id = user._id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id }); // attach id to session.user
      return session;
    },
  },
});
