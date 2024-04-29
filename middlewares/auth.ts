import { Request, Response } from "express";
import { http } from "../constants/enum";

export const isLoggedIn = (req: Request, res: Response, next: any) => {
	try {
		const token = req.headers.authorization?.split("Bearer ")[0];
		if (!token) {
			return res
				.status(http.status.UNAUTHORIZED)
				.json({ message: http.message.UNAUTHORIZED });
		}
		next();
	} catch (error: any) {
		console.error(error);
		return res
			.status(http.status.UNAUTHORIZED)
			.json({ message: http.message.UNAUTHORIZED });
	}
};
