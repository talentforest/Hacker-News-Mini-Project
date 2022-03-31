import styled from "styled-components"

const OrangeTitle = ({ story }) => {
  console.log(story)
  return (
    <>
      <OrangeColor>
        {`${story?.title?.split(" ")[0]} ${story?.title?.split(" ")[1]} `}
      </OrangeColor> {`${story?.title?.slice(8)}`}
    </>
  )
}

const OrangeColor = styled.span`
  color: #ed702d;
`

export default OrangeTitle;
