import { getUserByEmail } from "@/lib/Prisma/users";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials || !credentials.email || !credentials.password) return null;
				const { user, error } = await getUserByEmail(credentials.email);
				if (error || !user) return null;
				const match = await bcrypt.compare(credentials.password, user.password);
				if (match) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/signin",
	},
	callbacks: {
		async jwt({ token, user, session }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (user) {
				token.avatar = user.avatar;
				token.id = user.id;
			}

			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token and user id from a provider.
			if (session && session.user) {
				session.user.avatar = token.avatar;
				session.user.id = token.id;
			}

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
