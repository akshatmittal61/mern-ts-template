import mongoose from "mongoose";
import { dbUri } from "../config";

declare global {
	// eslint-disable-next-line no-var
	var isConnected: boolean;
}

export class DatabaseManager {
	constructor(private uri: string) {
		this.uri = uri;
	}

	public async connect() {
		if (global.isConnected) {
			console.info("Using existing database connection");
			return;
		}

		const db = await mongoose
			.connect(this.uri)
			.then((db) => {
				console.info("Connected to MongoDB");
				return db;
			})
			.catch((err) => {
				console.error(`Error connecting to MongoDB: ${err}`);
				return err;
			});

		global.isConnected = db.connections[0].readyState === 1;
	}
}

export const db = new DatabaseManager(dbUri);
