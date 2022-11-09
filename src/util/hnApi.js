import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export const getTopStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(`${baseUrl}topstories.json`);

  if (data) setStoryIds(data);
};

export const getNewStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(`${baseUrl}newstories.json`);

  if (data) setStoryIds(data);
};

export const getShowStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(`${baseUrl}showstories.json`);

  if (data) setStoryIds(data);
};

export const getAskStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(`${baseUrl}askstories.json`);

  if (data) setStoryIds(data);
};

export const getJobStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(`${baseUrl}jobstories.json`);

  if (data) setStoryIds(data);
};

export const getData = async (id, setData) => {
  const { data } = await axios.get(`${storyUrl + id}.json`);
  if (data) setData(data);
};

export const getUserData = async (by, setUserData) => {
  const { data } = await axios.get(`${userUrl + by}.json`);
  if (data) setUserData(data);
};
