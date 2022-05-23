import styled from 'styled-components';

const StyledInput = styled.input`
width: 100%;
padding: 0.8em;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
`;

const InputComp = (props) => {
  return (
    <StyledInput type="text" onKeyDown={props.handleKeyPress} ref={props.inputRef}
      placeholder="Add Task" autoFocus />
  )
}

export default InputComp;