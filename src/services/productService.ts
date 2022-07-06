import axios from 'axios';
import { Types } from './models';
import { baseUrl_product as baseUrl, stage } from "./config";
export const getProductList = async () => {
      return await axios.get(`${baseUrl}/${stage}/product`)
            .then((response) => response.data).catch((e) => console.log('111', e));
}
export const getProduct = async (id: string | number) => {
      return await axios.get(`${baseUrl}/${stage}/product/${id}`)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const deleteProduct = async (id: string | number) => {
      return await axios.delete(`${baseUrl}/${stage}/product/${id}`)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const updateProduct = async (id: string | number, params: Types.Product) => {
      return await axios.put(`${baseUrl}/${stage}/product/${id}`, params)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const createProduct = async (params: Types.Product) => {
      return await axios.post(`${baseUrl}/${stage}/product`, params)
            .then((response) => response.data).catch((e) => console.log(e));

}