import styled from 'styled-components';
import { BsPlusLg } from "react-icons/bs";

const StyeldButtonDiv = styled.div`
position: relative;
width: 100%;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 50%;
  margin-left: -40px;
  top: 1em;
  width: 6.2em;
  height: 6.2em;
  border-radius: 50%;
  border: 0em none;
  background-color: var(--contrast-color);
  cursor: pointer;

  :hover{
    background-color: #24db8c;
  }

`;

// custom button component
const AddButton = (props) => {
  return (
    <StyeldButtonDiv>
      <StyledButton onClick={props.handleClick}><BsPlusLg style={{ color: 'white', fontSize: '25px' }} /></StyledButton>
    </StyeldButtonDiv>
  )
}

export default AddButton