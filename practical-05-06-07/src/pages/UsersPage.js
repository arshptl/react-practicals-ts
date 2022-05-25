import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/users/Header";
import HoverCard from "../components/users/HoverCard";
import UserList from "../components/users/UserList";

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2em;
  min-width: 24em;
  max-width: 60em;

  .styledError {
    padding: 0.7em;
    margin-top: 0.5em;
    color: red;
    background-color: #ffe6e6;
  }

  .styledEmptyList {
    padding: 0.7em;
    margin-top: 0.5em;
    text-align: center;
    background-color: #e9fbf3;
    color: #24c27b;
  }

  @media (min-width: 37.5em) {
    width: 100%;
    padding: 2em;
  }

  @media (min-width: 62.5em) {
    width: 100%;
    padding: 3.25em;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const StyledButton = styled.button`
  padding: 0.6em 0.9em;
  background-color: ${(props) =>
    props.active === props.buttonId ? "#F5B23E" : "#ffeac4"};
  border: 0;
  cursor: pointer;

  :hover {
    background-color: #f5b23e;
    outline: 0.3em solid #ffeac4;
  }
`;

class UsersPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      selectedUser: {},
      users: [],
      active: 1,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.showPopupHandler = this.showPopupHandler.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  async getUserData(
    apiLink = process.env.REACT_APP_API_ENDPOINT_FIRST,
    id = 1
  ) {
    const res = await fetch(apiLink);
    const json = await res.json();
    return { userData: json.data, id: id };
  };


  async componentDidMount() {
    const { userData, id } = await this.getUserData();
    console.log(userData);
    console.log(id);
    this.setState({ users: userData, active: id });
  }

  async componentDidUpdate(prevState) {
    if (this.state.users !== prevState.users) {
      console.log("Todos changed");
    }
  }

  async getUserDataNew(apiLink = process.env.REACT_APP_API_ENDPOINT_FIRST, id = 1) {
    const res = await fetch(apiLink);
    const json = await res.json();
    console.log("In new getuserData", json.data);
    const data = json.data;
    console.log("in new button click", this)
    this.setState({
      users: data, active: id
    });
  }

  async handleButtonClick(apiLink, id) {
    this.getUserDataNew(apiLink, id);
  };

  closePopup() {
    console.log("in close popup");
    this.setState({
      ...this.state,
      showPopup: false,
    });
  }

  showPopupHandler(item) {
    this.setState({
      ...this.state,
      showPopup: true,
      selectedUser: item,
    });
  }

  render() {
    const { showPopup, selectedUser, users, active } = this.state;
    const apis = [
      { link: process.env.REACT_APP_API_ENDPOINT_FIRST, id: 1 },
      { link: process.env.REACT_APP_API_ENDPOINT_SECOND, id: 2 },
    ];

    console.log(this.state);

    return (
      <StyledDiv>
        {users.length === null ? (
          <div>There is a problem in API</div>
        ) : (
          <>
            <Header />
            {users.map((obj) => {
              return (
                <UserList
                  userData={obj}
                  showPopupHandler={this.showPopupHandler}
                  closePopup={this.closePopup}
                  key={obj.id}
                />
              );
            })}
            {showPopup && <HoverCard selectedUser={selectedUser} />}
            <StyledButtonDiv>
              <StyledButton
                className="StyledButtons"
                active={active}
                buttonId={1}
                onClick={() => this.handleButtonClick(apis[0].link, 1)}
              >
                1
              </StyledButton>
              <StyledButton
                className="StyledButtons"
                active={active}
                buttonId={2}
                onClick={() => this.handleButtonClick(apis[1].link, 2)}
              >
                2
              </StyledButton>
            </StyledButtonDiv>
          </>
        )}
      </StyledDiv>
    );
  }
}

export default UsersPage;
