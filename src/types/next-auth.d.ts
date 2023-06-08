import { Prisma } from "@prisma/client";
import NextAuth from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			name: string;
			email: string;
			id: string;
			avatar?: string;
		};
	}
	interface User extends Prisma.UserCreateInput {}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		name: string;
		email: string;
		sub: string;
		avatar: string;
		id: string;
		iat: number;
		exp: number;
		jti: string;
	}
}
