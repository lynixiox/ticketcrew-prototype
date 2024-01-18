import React from "react";
import * as styled from './HomePage.styles'
import VotingPanel from "./VoteingPanel/VotingPanel";
import ParticlesBackground from "./particles/Particles-background";
import imageURL from './images/Thashil2.png'
import { useSelector } from "react-redux";

const HomePage = () => {

    const isMobile = useSelector(state => state.isMobileState.isMobile);
    
    return (
        <>
            <styled.HomePageContainer isMobile={isMobile}>
                 <styled.ContentContainer isMobile={isMobile}>
                    <styled.imageContainer isMobile={isMobile}>
                        <styled.conestantImage src={imageURL} isMobile={isMobile}/>
                    </styled.imageContainer>
                    <styled.imageContainer isMobile={isMobile}>
                        <VotingPanel/>
                    </styled.imageContainer>
                 </styled.ContentContainer>
            </styled.HomePageContainer>
        </>
    )
}

export default HomePage;