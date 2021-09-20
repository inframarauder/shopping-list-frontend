import axios from "axios";

const BASE_URL = "https://1cr364qhz4.execute-api.ap-south-1.amazonaws.com/prod";

const api = axios.create({
	baseURL: BASE_URL,
});

const Api = {
	listItems: (params) => api.get("/list", { params }),
	updateItem: (id, body) => api.put(`/update/${id}`, body),
};

export default Api;
