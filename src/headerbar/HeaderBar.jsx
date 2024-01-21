import React, { useState } from "react";
import NavItem from "../navItem/NavItem";
import * as styled from './HeaderBar.styles'
// import logo from '../../images/Whyus_logo.png'
import Icons from "../icons/Icons";
import { setMenuOpenState } from "../redux/isMobile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setMenuOpenState } from "../../redux/isMobile";
const HeaderBar = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();        
    const isOpen = useSelector(state => state.isMobileState.menuOpen)
    const isMobile = useSelector(state => state.isMobileState.isMobile);
    const handleClick = (link) => {
    }

    const HandleMenuClick = () => {
        dispatch(setMenuOpenState(!isOpen));
        console.log(isOpen);

    }
    return (
    <>
    <styled.NavBar isMobile={isMobile}>
        <styled.NavBarContainer>
            <styled.NavBarLogoContainer isMobile={isMobile}>
                TicketCrew
            </styled.NavBarLogoContainer>
            <styled.MenuIcon isOpen={isOpen} isMobile={isMobile} onClick={()=> {HandleMenuClick()}}>
                {isOpen ? <Icons iconName="menuClosed" iconSize="1.5em"/> : <Icons iconName="menuOpen" iconSize="1.5em"/>}
            </styled.MenuIcon>
            <styled.NavMenu isMobile={isMobile} isOpen={isOpen}>
                <NavItem destination="/" text="Home"/>
                <NavItem destination="/about" text="About Us"/>
                <NavItem destination="/services" text="Services"/>
                <NavItem destination="/contact-us" text="Contact Us"/>
               
               <styled.NavIconsContainer isMobile={isMobile}> 
                    <styled.NavIcon>
                        <Icons onClick={handleClick} iconName="facebook" iconSize="1.2em" iconColor="white"/>
                    </styled.NavIcon>
                    <styled.NavIcon>
                        <Icons onClick={handleClick}iconName="instagram" iconSize="1.2em" iconColor="white"/>
                    </styled.NavIcon>
                </styled.NavIconsContainer>
            </styled.NavMenu>
        </styled.NavBarContainer>
    </styled.NavBar>

    </>)
}

export default HeaderBar