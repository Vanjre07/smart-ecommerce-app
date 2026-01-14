import api from "./axiosConfig";

export const getProducts = () => api.get("/products");
