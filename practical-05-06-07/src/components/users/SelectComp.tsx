import React from 'react'
import styled from 'styled-components'

const StyledStatus = styled.div`
  select{
  font-size: 1rem;
  padding: 0.6em 0.7em;
  border-radius: 5px;
  border: 0;
  outline: 1px solid #c7cdd9;
  background-color: #f5f7fa;
  border-right: 16px solid transparent;
  cursor: pointer;
    }

  select:hover{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  }

  select:active {
  background-image: linear-gradient(var(--accentFg), var(--accentFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
  background-color: #f5f7fa;
}

select option { 
    line-height: 40px;
    padding: 30px;
}

`;

type PropsType = {
  title: string,
  role: Array<{
    id: string,
    role: string
  }>
}

class SelectComp extends React.Component<PropsType> {
  render() {
    const { title, role } = this.props;
    return (
      <StyledStatus>
        <select>
          {role.length > 0
            && role.map((item, i) => {
              return (
                <option selected={item.role === title} key={i} value={item.id}>{item.role}</option>
              )
            })}
        </select>
      </StyledStatus>
    )
  }
};

export default SelectComp