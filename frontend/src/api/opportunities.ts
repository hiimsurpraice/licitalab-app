import axios from "axios";

const API_URL = "http://localhost:3000/opportunities";

export const getOpportunities = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getFollowedOpportunities = async () => {
  const res = await axios.get(`${API_URL}/followed`);
  return res.data;
};

export const toggleFollow = async (id: number, isFollowed: boolean) => {
  await axios.patch(`${API_URL}/${id}/follow?value=${isFollowed}`);
};
