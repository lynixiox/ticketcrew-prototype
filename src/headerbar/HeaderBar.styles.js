import styled from "@emotion/styled"

export const NavBar = styled.div `
background: rgba(0,0,0,0.8);
height: ${props => props.isMobile ? "80px" : "100px"};
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
width: 100vw;
top: 0;
z-index: 999;
position: absolute;
`

export const NavBarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 100px;
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
`
export const NavBarLogoContainer = styled.div `
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;

display: flex;
align-items: center;
justify-content: center;
${props => props.isMobile && `
    posistion : absolute;
`}

`
export const MenuIcon = styled.div`
    ${props => props.isMobile ?`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem
        cursor: pointer;
    `
        :
        `
        display: none;
        `
    }
`
export const NavBarLogo = styled.img `
${props => props.isMobile ?
    `
    height: 70px;
    margin-top: 20px;
    `
    :
    `
    margin-top: 5px;
    height: 90px;
    `
}

`

export const NavMenu = styled.div`

    ${props=> props.isMobile ? 
        `
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
        `
        :
        `
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        text-align: center;
        justify-content: end;
        `
    }

    ${props => props.isOpen && `
    background: rgba(31,31,31,0.9);
    backdrop-filter: blur(5px);
    left: 0;
    opacity: 1;
    transition: all 0.6s ease;
    z-index: 1;
    `}

`

export const NavIconsContainer = styled.div`
display: flex;
margin-left: ${props => props.isMobile && "50px"}
`

export const NavIcon = styled.div`
padding: 10px;
margin-top: 17px;
`