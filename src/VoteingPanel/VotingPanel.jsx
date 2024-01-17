import React, { useState } from "react";
import * as styled from './VotingPanel.styles'
import ComboBox from "../combobox/ComboBox";
import TextInput from "../textInput/TextInput";
import CustomButton from "../button/CustomButton";


const VotingPanel = () => {

    const optionList = [
        {optionValue: "R1.50", optionName: "5 VOTE BUNDLE (R2 p/vote)"},
        {optionValue: "R2.50", optionName: "100 VOTE BUNDLE (R1.80 p/vote)"},
        {optionValue: "R3.50", optionName: "200 VOTE BUNDLE (R1.50 p/vote)"},
        {optionValue: "R4.50", optionName: "500 VOTE BUNDLE (R1 p/vote)"},
    ]

    const [selectedOption, setSelectedOption] = useState("")
    const [count, setCount] = useState(1);
    return(
        <>
            <styled.VotingPanelContainer>
                <styled.ContentContainer>
                    <styled.headingContainer>
                        Vote Now!
                    </styled.headingContainer>
                    <styled.componentContainer>
                        <styled.componentItem>
                            <ComboBox key="bundle" label="Select Bundle" width="50%" textColor="#fff" borderBottomColor="#fff" optionList={optionList} value={selectedOption} onChange={(event)=> setSelectedOption(event.target.value)}/>
                        </styled.componentItem>
                        <styled.componentItem>
                            <TextInput label="Amount" textColor="#fff" borderBottomColor="#fff"/>
                        </styled.componentItem>
                        <styled.componentItem>
                            <CustomButton label="Checkout" width="150px"/>
                        </styled.componentItem>
                    </styled.componentContainer>
                </styled.ContentContainer>
            </styled.VotingPanelContainer>
        </>
    )

}

export default VotingPanel;
