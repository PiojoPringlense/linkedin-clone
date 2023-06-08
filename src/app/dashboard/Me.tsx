"use client";
import { PermIdentityClientIcon } from "@/components/Icons";
import NavIcon from "@/components/NavIcon";
import { signOut } from "next-auth/react";
import React from "react";

type Props = { name: string; avatar: string | undefined };

export default function Me({ name, avatar }: Props) {
	return (
		<button onClick={() => signOut()}>
			<NavIcon text="Me">
				{avatar ? (
					<img src={avatar} alt={name} width={32} height={32} className="rounded-full" />
				) : (
					<PermIdentityClientIcon />
				)}
			</NavIcon>
		</button>
	);
}
