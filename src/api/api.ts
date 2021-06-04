import Axios from "axios";
import { Product } from "../modules/product/types";

const AxiosClient = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

const API = {
  product: {
    getById: async (productId: number): Promise<Product> =>
      AxiosClient.get<Product>(`/products/${productId}`).then(
        (response) => response.data
      ),
    getAll: async (): Promise<Product[]> =>
      AxiosClient.get<Product[]>(`/products`).then((response) => response.data),
  },
  // category: {
  //   getAll: () => {},
  // },
};

export { API };
