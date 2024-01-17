import React from "react";
import * as styled from './HomePage.styles'
import VotingPanel from "./VoteingPanel/VotingPanel";
import ParticlesBackground from "./particles/Particles-background";
import imageURL from './images/Thashil2.png'

const HomePage = () => {
    return (
        <>
            <ParticlesBackground/>
            <styled.HomePageContainer>
                 <styled.ContentContainer>
                    <styled.imageContainer>
                        <styled.conestantImage src={imageURL}/>
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