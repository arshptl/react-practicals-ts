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

const getUserData = async (
  apiLink = process.env.REACT_APP_API_ENDPOINT_FIRST,
  id = 1
) => {
  const res = await fetch(apiLink);
  const json = await res.json();
  console.log(json);
  //   setUsers(json.data);
  //   setActive(id);
  await this.setState(() => {
    // ...this.state,
    // users: json.data,
    // active: id,
    return {
      users: json.data,
      active: id,
    };
  });
  return json.data;
};
class UsersPage extends React.Component {
  state = {
    showPopup: false,
    selectedUser: {},
    users: [],
    active: 1,
  };

  componentDidMount() {
    getUserData();
  }
  render() {
    // const [showPopup, setShowPopup] = useState(false);
    // const [selectedUser, setSelectedUser] = useState();
    // const [users, setUsers] = useState([]);
    // const [active, setActive] = useState(1);
    const { showPopup, selectedUser, users, active } = this.state;
    const apis = [
      { link: process.env.REACT_APP_API_ENDPOINT_FIRST, id: 1 },
      { link: process.env.REACT_APP_API_ENDPOINT_SECOND, id: 2 },
    ];

    // useEffect(() => {
    //   getUserData();
    // }, []);

    const closePopup = () => {
      // setShowPopup(false);
      this.setState({
        ...this.state,
        showPopup: false,
      });
    };

    const showPopupHandler = (item) => {
      //   setShowPopup(true);
      //     setSelectedUser(item);
      this.setState({
        ...this.state,
        setShowPopup: true,
        setSelectedUser: item,
      });
    };

    const handleButtonClick = (apiLink, id) => {
      getUserData(apiLink, id);
    };
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
                  showPopupHandler={showPopupHandler}
                  closePopup={closePopup}
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
                onClick={() => handleButtonClick(apis[0].link, 1)}
              >
                1
              </StyledButton>
              <StyledButton
                className="StyledButtons"
                active={active}
                buttonId={2}
                onClick={() => handleButtonClick(apis[1].link, 2)}
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
