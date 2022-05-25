import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { authActions } from '../store/slices/authSlice';


const StyledSnackBar = styled.div`
padding: 1em;
background-color: #ffefd9;
margin-bottom: 3em;
display: flex;
flex-direction: column;
gap: 1em;
position: absolute;
left: 0;
top: 0;

button{
  padding: 0.7em 0.8em;
  background-color: #F5B23E;
  border: 1px solid #F5B23E;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

span{
  color: #F5B23E;
}

@media (min-width: 37.5em){

  div, button{
    margin: 0 2em;
  }
  padding: 0.6em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

`;


const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 1em;
  margin-top: 11em;


  @media (min-width: 37.5em){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledImageDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #ffefd9;
padding: 2em;

img{
  width: 10em;
  height: 10em;
  margin: 0 auto;
  border-radius: 10em;
}

.styledName{
  font-size: 2em;
  margin: 0 auto;
  font-weight: 500;
  margin-top: 0.7em;
  color: #1a0e00;
}

.btn{
    background-color: #F5B23E;
    border: 1px solid #F5B23E;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    padding: 0.6em 2.4em;
    margin: 0 auto;
    margin-top: 0.7em;
    text-align: center;
    transform: translateY(0);
    transition: transform 150ms, box-shadow 150ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

@media (min-width: 37.5em){
      img{
        width: 12em;
        height: 12em;
      }

      .styledName{
        font-size: 2em;
      }
  }

  @media (min-width: 50.5em){
      width: 50%;

      .styledName{
        font-size: 2.5em;
      }

      img{
        width: 15em;
        height: 15em;
      }
  }

`;

const StyledUserInfo = styled.div`
  width: 100%;

  @media (min-width: 37.5em){
   width: 50%;
  }

  @media (min-width: 50.5em){
    width: 35%;
}

`;

const Styledtitle = styled.div`
font-size: 2em;
color: #ffa733;

@media (min-width: 37.5em){
   font-size: 2em;
}

@media (min-width: 50.5em){
  font-size: 2em;
}

`;

const StyledValue = styled.div`
font-size: 1.3em;
margin-bottom: 1em;
`;

// This page will be rendered after user signed up successfully
// Will display the user information
const Home = () => {
  const userData = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();
  console.log(userData);

  const handleLogout = () => {
    dispatch(
      authActions.logout()
    )
  }

  return (
    <>
      <StyledSnackBar>
        <div>
          Hello <span>{userData.name}</span>, you are registered with the email id - <span>{userData.email}</span> and phone number - <span>{userData.phoneNo}</span>
        </div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </StyledSnackBar>
      <StyledProfileDiv>

        <StyledImageDiv>
          <img alt={userData.name} src={userData.avatar} />
          <div className='styledName'>{userData.name}</div>
          <button className='btn' onClick={handleLogout}>Logout</button>
        </StyledImageDiv>

        <StyledUserInfo>
          <Styledtitle>Phone Number</Styledtitle>
          <StyledValue>{userData.phoneNo}</StyledValue>

          <Styledtitle>Email</Styledtitle>
          <StyledValue>{userData.email}</StyledValue>

          <Styledtitle>Password</Styledtitle>
          <StyledValue>{userData.password}</StyledValue>

        </StyledUserInfo>

      </StyledProfileDiv>
    </>
  )
}

export default Home