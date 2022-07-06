// @ts-ignore
/* eslint-disable */
import { request } from "umi";
const stage = "dev";
const baseUrl = "https://re78p8yt87.execute-api.ap-east-1.amazonaws.com/";

/** 上传用户图像 */
export async function uploadUserAvatar(
  params: {
    id: string;
  },
  body: API.User,
  options?: { [key: string]: any }
) {
  const { id } = params;
  return request<any>(baseUrl + stage + "/user-avatar" + `/${id}`, {
    method: "POST",
    data: body,
    ...(options || {}),
  });
}

/** 创建用户 */
export async function createUser(
  body: API.User,
  options?: { [key: string]: any }
) {
  return request<any>(baseUrl + stage + "/user", {
    method: "POST",
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 */
export async function deleteUser(
  params: {
    userId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>(baseUrl + stage + "/user", {
    method: "DELETE",
    params: { ...params },
    ...(options || {}),
  });
}
/** 更新用户信息 */
export async function updateUser(
  params: {
    userId: string;
  },
  body: API.User,
  options?: { [key: string]: any }
) {
  return request<any>(baseUrl + stage + "/user", {
    method: "PUT",
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
/** 获取用户列表 */
export async function getUserList(options?: { [key: string]: any }) {
  return request<any>(baseUrl + stage + "/users", {
  });
}
/** 获取用户信息 */
export async function getUser(id: string, options?: { [key: string]: any }) {
  return request<any>(baseUrl + stage + "/user/" + id, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
