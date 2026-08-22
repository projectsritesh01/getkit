import api from "./api";

const submitCustomRequest = async (data) => {
  const response = await api.post(
    "/custom-requests",
    data
  );

  return response.data;
};

export default {
  submitCustomRequest
};