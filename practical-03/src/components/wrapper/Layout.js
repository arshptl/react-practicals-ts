import React from 'react'
import styled from "styled-components";

const StyledLayout = styled.div`
width: 90%;
max-width: 78em;
margin: 5em auto 5em auto;
flex: 1 0 auto;

@media(min-width: 62.5em){
    width: 80%;
}
`;

// This component wraps whole app
const layout = (props) => {
  return (
    <StyledLayout>{props.children}</StyledLayout>
  )
}

export default layout