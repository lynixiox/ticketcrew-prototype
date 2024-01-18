import styled from "@emotion/styled";

export const HomePageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image : url('./images/future.jpg');
    background-size: cover;
    display:flex;
    flex-directions: column;
`
export const ContentContainer = styled.div` 
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 100px;
    backdrop-filter : blur(15px);
    flex-grow: 1;
    ${props => props.isMobile &&
        `
            flex-direction: column;
        `
    }

`

export const imageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${props => props.isMobile ? '100%' : '50%'};
`

export const conestantImage = styled.img`
    height: ${props => props.isMobile ? '80%' : '100%'};
`