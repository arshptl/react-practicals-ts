import React from 'react'
import styled from 'styled-components';
import { getFullName } from '../../static/helpers/helperFunctions';

const StyledInfoDiv = styled.div`
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 0.8s;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    left: 35%;
    bottom: 35%;
    width: 17em;
    background-color: white;
    border-radius: 2em;
    padding: 2em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    .styledImage{
        img{
        width: 7em;
        height: 7em;
        border-radius: 50%;
    }

    }
    .username{
        margin: 0.2em 0;
        font-weight: 600;

    }

    .email{
        font-size: 0.9rem;
    }

    .plan{
        margin: 0.2em 0;
        font-weight: 600;
    }

    .button{
        background-color: #F5B23E;
        border: 1px solid #F5B23E;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        outline: none;
        outline: 0;
        padding: 0.6em 2.4em;
        margin: 0.5em 0;
        text-align: center;
        transform: translateY(0);
        transition: transform 150ms, box-shadow 150ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

@media(min-width: 37.5em) {
    left: 45%;
    bottom: 25%;
}

@media(min-width: 62.5em) {
    left: 65%;
    bottom: 35%;
}
`;

const StyledStats = styled.div`
width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;

    .dividerLine{
        background-color: lightgray;
        height: 2.6em;
        width: 0.06em;
        border-radius: 10px;
        margin: 0 1em;
    }

    .statsNum{
        font-weight: 600;
        font-size: 1.5em;
    }

    .statsTitle{
        font-size: 0.7em;
        text-align: start;
        color: gray;
    }

`;

const StyledProgress = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 0.7em 0;
  width: 100%;
  text-align: center;

  .progressHeading{
      text-align: start;
      margin-bottom: 0.2em;
      font-size: 0.9em;
      font-weight: 600;
  }

  .progress2 {
  padding: 0em;
  border-radius: 30px;
  background: #ffeac4;  
}

.progress-bar2 {
  height: 0.3em;
  border-radius: 30px;
  background-image: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar2 {
  width: 65%; 
  background-color: #F5B23E;  
  animation: progressAnimation 6s;
}

`;

const HoverCard = ({ selectedUser }) => {
    return (
        <StyledInfoDiv>
            <div className='styledImage'>
                <img
                    src={selectedUser.avatar}
                    alt={selectedUser.username} />
            </div>
            <div className='username'>{getFullName(selectedUser.first_name + selectedUser.last_name)} </div>
            <div className='email'>{selectedUser.email}</div>
            <div className='plan'>Your Plan: Standard</div>
            <button className='button'>Active User</button>
            <StyledProgress>
                <div className='progressHeading'>Plan uses</div>
                <div className="progress2 progress-moved">
                    <div className="progress-bar2" >
                    </div>
                </div>
            </StyledProgress>
            <StyledStats>
                <div>
                    <div className='statsNum'>4567</div>
                    <div className='statsTitle'>Clicks reviewed</div>
                </div>
                <div className='dividerLine'></div>
                <div>
                    <div className='statsNum'>3456</div>
                    <div className='statsTitle'>Monthly clicks</div>
                </div>
            </StyledStats>

        </StyledInfoDiv>
    )
};

export default HoverCard