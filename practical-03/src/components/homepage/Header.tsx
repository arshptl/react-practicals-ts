import React from 'react';
import styled from 'styled-components';
import { getDate } from '../../static/helpers/helperFunctions';

const StyledDateHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 3em;

.date{
    display: flex;
    gap: 0.2em;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1rem;
}

.year{
    font-size: 0.8rem;
}
`;

// header component, which displays date
class Header extends React.Component {
    render() {
        const dateTodayArray : string[] = getDate();
        return (
            <StyledDateHeader>
                <div className="date">
                    <div>
                        {dateTodayArray[2]}
                    </div>
                    <div className='year'>
                        <b>{dateTodayArray[1]}</b><br />
                        {dateTodayArray[3]}
                    </div>
                </div>
                <div>{dateTodayArray[0].toUpperCase()}</div>
            </StyledDateHeader>
        )
    }
}

export default Header