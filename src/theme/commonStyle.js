import styled from "styled-components"

export const Tag = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 20px;
  padding: 5px 6px;
  background-color: #ed702d;
  font-size: 10px;
  color: #f5f5f5;
  border-radius: 20px;
  `;

export const WhiteTag = styled(Tag)`
  background-color: #efefef;
  color: #ed702d;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  height: 60px;
  padding: 6px 0 20px;
  color: ${(props) => props.theme.textColor};
`;

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;

export const PostsBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 158px 20px;
`;

export const BoxViewMode = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px 158px 20px;
`;

export const AskPostsBox = styled(PostsBox)`
  padding: 20px 0 158px;
`;

export const Site = styled.span`
display: flex;
align-items: center;
height: 32px;
margin-top: 5px;
font-size: 12px;
font-weight: 400;
color: #727272;
text-decoration: underline;
cursor: pointer;
`;

export const CommentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 20px 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  `
export const CommentText = styled.p` 
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  display: block;
  line-height: 20px;
  color: ${(props) => props.theme.commentColor};
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-bottom: 14px;
`;
