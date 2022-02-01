export const selectFields = ({ id, by, time, title, score, url }) => ({
  id,
  by,
  time,
  title,
  score,
  url,
});

export const askSelectFields = ({ id, title }) => ({
  id,
  title,
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

export const jobSelectFields = ({ id, title, time, url }) => ({
  id,
  title,
  time,
  url,
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
