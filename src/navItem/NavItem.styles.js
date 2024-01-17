import styled from "@emotion/styled";

export const NavItemContainer = styled.div `
    
${props => props.isMobile ?

    `
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    `
    :
    `
        height: 100px;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid#C6924E;
        }
    `

}

`

export const NavItemText = styled.div `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover{
        color: #C6924E;
        cursor: pointer;
    }
`