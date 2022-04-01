import styled from "styled-components"
import { maxChar } from 'util'

const OrangeTitle = ({ story }) => {
  return (
    <>
      <OrangeColor>
        {`${story?.title?.split(" ")[0]} ${story?.title?.split(" ")[1]} `}
      </OrangeColor>
      {maxChar(story?.title?.slice(8), 60)}
    </>
  )
}

const OrangeColor = styled.span`
  color: #ed702d;
`

export default OrangeTitle;
