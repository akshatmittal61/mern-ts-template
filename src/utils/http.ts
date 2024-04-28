import axios from "axios";
import { backendBaseUrl } from "../constants/variables";

const http = axios.create({
	baseURL: backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default http;
