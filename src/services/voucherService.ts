import axios from 'axios';
import { Types } from './models';
import { baseUrl_voucher as baseUrl, stage } from "./config";
export const getVoucherList = async () => {
      return await axios.get(`${baseUrl}/${stage}/voucher`)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const getVoucher = async (id: string | number) => {
      return await axios.get(`${baseUrl}/${stage}/voucher/${id}`)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const deleteVoucher = async (id: string | number) => {
      return await axios.delete(`${baseUrl}/${stage}/voucher/${id}`)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const updateVoucher = async (id: string | number, params: Types.Voucher) => {
      return await axios.put(`${baseUrl}/${stage}/voucher/${id}`, params)
            .then((response) => response.data).catch((e) => console.log(e));
}
export const createVoucher = async (params: Types.Voucher) => {
      return await axios.post(`${baseUrl}/${stage}/voucher`, params)
            .then((response) => response.data).catch((e) => console.log(e));
}
