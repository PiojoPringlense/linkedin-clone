export interface User {
	name: string;
	email: string;
	id: string;
	avatar?: string;
}

export interface PostType {
	id: string;
	imageURL: string;
	likes: number;
	message: string;
	timestamp: Date;
	user: User;
	userId: string;
}
