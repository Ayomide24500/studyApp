import axios from "axios";

const URL: string = "http://localhost:2300/api";

export const registerAPI = async (data: any) => {
  try {
    const res = await axios.post(`${URL}/create-student`, data);
    return res;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const loginAPI = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-student`, data).then((res: any) => {
      console.log(res);

      return res.data;
    });
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const verifyAPI = async (studentID: string, data: any) => {
  try {
    return await axios
      .get(`${URL}/verify-user/${studentID}`, { data })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const logoutAPI = async () => {
  try {
    return await axios
      .delete(`${URL}/logout`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const createStudys = async (studentID: string, data: any) => {
  try {
    const response = await axios.post(`${URL}/create-study/${studentID}`, data);
    console.log(response);

    return response;
  } catch (error) {
    return error;
  }
};
