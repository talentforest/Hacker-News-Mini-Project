import { storyUrl } from "./hnApi";

export const selectFields = ({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
}) => ({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
});

export const askSelectFields = ({
  id,
  title,
  descendants,
  text,
  time,
  score,
  by,
  kids,
}) => ({
  id,
  title,
  descendants,
  text,
  time,
  score,
  by,
  kids,
});

export const showSelectFields = ({
  id,
  by,
  descendants,
  title,
  score,
  time,
  url,
}) => ({
  id,
  by,
  descendants,
  title,
  score,
  time,
  url,
});

export const jobSelectFields = ({ id, title, time, url, by, text }) => ({
  id,
  title,
  time,
  url,
  by,
  text,
});

export const userSelectFields = ({
  id,
  about,
  created,
  delay,
  karma,
  submitted,
}) => ({
  id,
  about,
  created,
  delay,
  karma,
  submitted,
});

export const commentsSelectFields = ({
  id,
  by,
  kids,
  parent,
  text,
  time,
  type,
  score,
  title,
}) => ({
  id,
  by,
  kids,
  parent,
  text,
  time,
  type,
  score,
  title,
});

export const bySelectFields = ({ by }) => ({
  by,
});

export const submissionFields = ({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
}) => ({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
});
