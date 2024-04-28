import { User } from "../types/user";
import http from "../utils/http";

export const getUserDetails = async (
	username: string
): Promise<{ message: string; data: User }> => {
	try {
		const res = await http.get(`/users/${username}`);
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
