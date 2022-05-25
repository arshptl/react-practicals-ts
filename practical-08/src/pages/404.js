import React from 'react';
import styled from 'styled-components';

const StyledNotFoundDiv = styled.div`
.titleText{
  font-size: 10em;
}
.desc{
  font-size: 3em;
}

`;

// 404 page for invalid path/url
const PageNotFound = () => {
  return (
    <StyledNotFoundDiv>
      <div className='titleText'>
        404
      </div>
      <div className='desc'>
        Page not found
      </div>
    </StyledNotFoundDiv>
  )
}

export default PageNotFound