import axios from "axios";

const URL = "http://localhost:2300/api";

export const createStudy = async (data: {}, ID: string) => {
  try {
    return axios.post(`${URL}/create-study/${ID}`, data).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getStudy = async (studyID: string) => {
  try {
    return axios.get(`${URL}/get-study-detail/${studyID}`).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getStudyHistory = async (ID: string) => {
  try {
    return axios.get(`${URL}/get-history/${ID}`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getTopScholars = async () => {
  try {
    return axios.get(`${URL}/get-top-five`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setEndTime = async (ID: string) => {
  try {
    return axios.patch(`${URL}/update-end-time/${ID}`).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addTought = async (data: {}, studyID: string) => {
  try {
    return axios
      .post(`${URL}/add-student-learnt/${studyID}`, data)
      .then((res) => {
        console.log(res);

        return res.data?.data;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};
