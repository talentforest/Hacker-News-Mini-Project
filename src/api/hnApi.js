import axios from "axios";
import { selectFields } from "../util/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const bestStoriesUrl = `${baseUrl}bestStories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const askStoriesUrl = `${baseUrl}askStories.json`;
export const showStoriesUrl = `${baseUrl}showStories.json`;
export const jobStoriesUrl = `${baseUrl}jobStories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;
export const updateUrl = `${baseUrl}updates.json`;
// story.by로 얻은 유저 아이디로 유저 정보 가져오기
// export const getUserIds = async () => {
//   const result = await axios.get(updateUrl).then(({ data }) => data);

//   return result;
// };

// 스토리 아이디 가져오기
export const getTopStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);

  return result;
};
// 스토리 아이디로 탑스토리 데이터 리스트 가져오기
export const getTopStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};
// 스토리 아이디 가져오기
export const getNewStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
// 스토리 아이디로 탑스토리 데이터 리스트 가져오기
export const getNewStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};
