import React from 'react'
import styled from 'styled-components';
import landingImage from '../static/assets/landingImage.png';
import FormComp from '../components/signup/FormComp';

const StyledSignup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
margin: 0 auto;

@media(min-width: 37.5em) {
    width: 90%;
    align-items: stretch;
}

@media(min-width: 50em) {
    width: 70%;

    h1{
        font-size: 3em;
    }

}
`;

const StyledContentdiv = styled.div`
display: flex;
gap: 2em;
flex-direction: column-reverse;

@media(min-width: 37.5em) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    *{
        flex: 1 1 0;
    }

    img{
        width:9em;
        height: 30em;
    }
}
`;

// Displays this page when user hasn't been Signed up
const Signup = () => {
    return (
        <StyledSignup>
            <h1>SignUp</h1>
            <StyledContentdiv>
                <FormComp />
                <img alt="landingPageImage" src={landingImage} />
            </StyledContentdiv>
        </StyledSignup>
    )
}

export default Signup