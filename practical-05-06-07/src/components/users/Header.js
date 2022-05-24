import React from 'react'
import styled from 'styled-components';


const StyledHeader = styled.div`
display: none;
justify-content: flex-start;
font-size: 1.05em;
font-weight: 600;
padding: 0em 0 1em 0;

@media (min-width: 37.5em) {
display: flex;

.styledName{
    width: 45%;

}

.styledOthers{
    gap: 5%;
    display: flex;
    margin: 0em;
    justify-content: flex-start;
    width: 55%;
    *{
        flex-grow: 1;
        flex-basis: 0;
    }
}
}

@media (min-width: 62.5em) {
.styledOthers{
    width: 50%;
    *{
        flex-grow: 1;
        flex-basis: 0;
    }
}

.styledName{
    width: 35%;
}

}

`;

const StyledHeaderMobile = styled.div`
display: flex;
width: 100%;
font-weight: 600;
font-size: 1.5rem;
padding: 0.4em 0;

@media(min-width: 37.5em) {
    display: none;
}
`;

const Header = () => {
    return (
        <>
        <StyledHeader>
            <div className='styledName'>Name</div>
            <div className='styledOthers'>      
            <div>Status</div>
                    <div>Access</div>
                    <div></div>
            </div>
        </StyledHeader>
            <StyledHeaderMobile>
                Users List
            </StyledHeaderMobile>    
        </>
    )
}

export default React.memo(Header)