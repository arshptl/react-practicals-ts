import React from "react";
import styled from "styled-components";

const StyledList = styled.div<{completed: boolean}>`
  display: flex;
  justify-content: space-between;
  /* gap: 2em; */
  margin-bottom: 3em;

  .listTitle {
    color: ${(props) => (props.completed ? "lightgray" : "black")};
    width: 88%;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    margin-right: 1em;
    font: inherit;
    color: lightgray;
    width: 1.6em;
    height: 1.6em;
    border: 0.15em solid lightgray;
    border-radius: 50%;
    transform: translateY(-0.075em);
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    border-color: gray;
    box-shadow: inset 1em 1em var(--contrast-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:checked {
    color: var(--contrast-color);
    border: 0.2em solid var(--contrast-color);
  }
`;

interface listProps {
  obj: {
    id: number;
    title: string | undefined;
    isDone: boolean;
    createdAt: Date;
  };
  handleCompletedTask: (obj: { id: number }) => void;
}

interface styleProps {
  completed: boolean;
}

// List component(single task)
class ListComp extends React.Component<listProps, styleProps> {
  render() {
    const { obj, handleCompletedTask } = this.props;
    return (
      <StyledList completed={obj.isDone}>
        <div className="listTitle">{obj.title}</div>
        <input
          type="checkbox"
          onClick={() => handleCompletedTask(obj)}
          checked={obj.isDone}
        ></input>
      </StyledList>
    );
  }
}

export default ListComp;
