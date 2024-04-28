import express, { Request, Response } from "express";

const app = express();

app.get("/api/health", (_: Request, res: Response) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.listen(4000, () => {
	console.info("Server is listening at http://localhost:4000");
});
