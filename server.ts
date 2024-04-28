import { PORT } from "./config";
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_: Request, res: Response) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.listen(PORT, () => {
	console.info(`Server is listening at http://localhost:${PORT}`);
});
