import React from 'react'
import styled from "styled-components";

const StyledLayout = styled.div`
width: 95%;
max-width: 78em;
margin: 5em auto 5em auto;
flex: 1 0 auto;

@media(min-width: 62.5em){
    width: 80%;
}
`;

// This component wraps the whole app
class Layout extends React.Component {
  render() {
    return (
      <StyledLayout>{this.props.children}</StyledLayout>
    )
  }
}

export default Layout