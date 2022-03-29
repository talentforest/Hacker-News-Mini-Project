import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const askStoriesUrl = `${baseUrl}askstories.json`;
export const showStoriesUrl = `${baseUrl}showstories.json`;
export const jobStoriesUrl = `${baseUrl}jobstories.json`;

export const getTopStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(topStoriesUrl)

  if (data) setStoryIds(data);
};

export const getNewStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(newStoriesUrl);

  if (data) setStoryIds(data);
};

export const getShowStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(showStoriesUrl);

  if (data) setStoryIds(data);
};

export const getAskStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(askStoriesUrl);

  if (data) setStoryIds(data);
};

export const getJobStoryIds = async (setStoryIds) => {
  const { data } = await axios.get(jobStoriesUrl);

  if (data) setStoryIds(data);
};

export const getStory = async (storyId, setStory) => {
  const { data } = await axios
    .get(`${storyUrl + storyId}.json`)

  if (data) setStory(data);
};

export const getCommentData = async (commentId, setCommentIds) => {
  const { data } = await axios
    .get(`${storyUrl + commentId}.json`);

  if (data) setCommentIds(data);
};

export const getUserSubmissions = async (submittedId, setStory) => {
  const { data } = await axios
    .get(`${storyUrl + submittedId}.json`)

  if (data) setStory(data);
};

export const getUserInfo = async (story, setUserData) => {
  const { data } = await axios
    .get(`${userUrl + story.by}.json`)

  if (data) setUserData(data)
};

export const getReplyData = async (replyId, setReplyIdData) => {
  const { data } = await axios
    .get(`${storyUrl + replyId}.json`)

  if (data) setReplyIdData(data);
};

export const getReplyReplyData = async (replyReplyId, setReplyReplyIdData) => {
  const { data } = await axios
    .get(`${storyUrl + replyReplyId}.json`)

  if (data) setReplyReplyIdData(data)
};

export const getCurrIdData = async (id, setStory) => {
  const { data } = await axios
    .get(`${storyUrl + id}.json`)

  if (data) setStory(data);
};



