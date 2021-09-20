import axios from "axios";

const BASE_URL = "https://1cr364qhz4.execute-api.ap-south-1.amazonaws.com/prod";

const api = axios.create({
	baseURL: BASE_URL,
});

const Api = {
	listItems: (params) => api.get("/list", { params }),
	createItem: (body) => api.post("/create", body),
	updateItem: (id, body) => api.put(`/update/${id}`, body),
	deleteItem: (id) => api.delete(`/delete/${id}`),
};

export default Api;
