import React from "react";
import * as styled from "./NavItem.styles"
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setMenuOpenState } from "../../redux/isMobile";

const NavItem = (props) => {

    const {
        destination = "/",
        text = "null"
        
    } = props

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const isOpen = useSelector(state => state.isMobileState.menuOpen);

    const handleOnClick = () => {
        // dispatch(setMenuOpenState(!isOpen));
        // navigate(destination)    
    }

    const isMobile =false;
    return (
        <styled.NavItemContainer isMobile={isMobile} onClick={handleOnClick}>
            <styled.NavItemText isMobile={isMobile
            }>{text}</styled.NavItemText>
        </styled.NavItemContainer>
    ) 
}

export default NavItem