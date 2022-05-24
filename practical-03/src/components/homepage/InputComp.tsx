import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
width: 100%;
padding: 0.8em;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
`;


type InputProps = {
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

class InputComp extends React.Component<InputProps> {
  render() {
    const { handleKeyPress, inputRef } = this.props;
    return (
      <StyledInput type="text" onKeyDown={handleKeyPress} ref={inputRef}
        placeholder="Add Task" autoFocus />
    )
  }
}

export default InputComp;