import { ActionType } from "@/lib/types/action-type";
import axiosInstance from "./axios-instance";

export const fetchData = async (path: string) => {
  if (path.split("/").pop() == "undefined") {
    return null;
  } else {
    try {
      const response = await axiosInstance.get(`${path}`);
      return response?.data;
    } catch (e: any) {
      console.log(
        e?.response?.data?.message || e?.response?.data?.message?.message
      );
    }
  }
};

export const postData = async (path: string, value: any, type: ActionType) => {
  if (path.split("/").pop() == "undefined") {
    return null;
  } else {
    try {
      const response = await axiosInstance[type](`${path}`, value, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e: any) {
      console.log(
        e?.response?.data?.message || e?.response?.data?.message?.message
      );
    }
  }
};
