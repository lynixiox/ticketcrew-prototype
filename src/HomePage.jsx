import React from "react";
import * as styled from './HomePage.styles'
import VotingPanel from "./VoteingPanel/VotingPanel";
import ParticlesBackground from "./particles/Particles-background";

const HomePage = () => {
    return (
        <>
            <ParticlesBackground/>
            <styled.HomePageContainer>
                 <styled.ContentContainer>
                    <styled.imageContainer>
                        <styled.conestantImage src="/images/Thashil2.png"/>
                    </styled.imageContainer>
                    <styled.imageContainer>
                        <VotingPanel/>
                    </styled.imageContainer>
                 </styled.ContentContainer>
            </styled.HomePageContainer>
        </>
    )
}

export default HomePage;