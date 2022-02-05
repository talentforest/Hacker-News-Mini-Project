import axios from "axios";
import {
  selectFields,
  askSelectFields,
  showSelectFields,
  jobSelectFields,
  userSelectFields,
  bySelectFields,
  commentsSelectFields,
} from "../util/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const askStoriesUrl = `${baseUrl}askstories.json`;
export const showStoriesUrl = `${baseUrl}showstories.json`;
export const jobStoriesUrl = `${baseUrl}jobstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;
export const updateUrl = `${baseUrl}updates.json`;

// 스토리 아이디로 Top 데이터 가져오기
export const getTopStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);

  return result;
};
export const getTopStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));
  return result;
};

// username만 있는 by 객체를 만듦.
export const getUserName = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && bySelectFields(data));
  return result;
};

// 스토리 아이디로 New 데이터 가져오기
export const getNewStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
export const getNewStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};

// 스토리 아이디로 Ask 데이터 가져오기
export const getAskStoryIds = async () => {
  const result = await axios.get(askStoriesUrl).then(({ data }) => data);

  return result;
};
export const getAskStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && askSelectFields(data));

  return result;
};

// 스토리 아이디로 Show 데이터 가져오기
export const getShowStoryIds = async () => {
  const result = await axios.get(showStoriesUrl).then(({ data }) => data);

  return result;
};
export const getShowStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && showSelectFields(data));

  return result;
};

// 스토리 아이디로 Job 데이터 가져오기
export const getJobStoryIds = async () => {
  const result = await axios.get(jobStoriesUrl).then(({ data }) => data);
  return result;
};
export const getJobStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && jobSelectFields(data));
  console.log(result);
  return result;
};

// 코멘트 값 가져오기 스토리의 아이디값은 가져왔음.
export const getComment = async (commentId) => {
  const result = await axios
    .get(`${storyUrl + commentId}.json`)
    .then(({ data }) => data && commentsSelectFields(data));
  return result;
};
