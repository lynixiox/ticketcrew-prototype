import React, { useEffect, useState } from "react";
import * as styled from './VotingPanel.styles'
import ComboBox from "../combobox/ComboBox";
import TextInput from "../textInput/TextInput";
import CustomButton from "../button/CustomButton";
import LabelPlain from "../label/LabelPlain";


const VotingPanel = () => {

    const optionList = [
        {optionValue: "10", optionName: "5 VOTE BUNDLE (R2 p/vote)"},
        {optionValue: "180", optionName: "100 VOTE BUNDLE (R1.80 p/vote)"},
        {optionValue: "250", optionName: "200 VOTE BUNDLE (R1.50 p/vote)"},
        {optionValue: "500", optionName: "500 VOTE BUNDLE (R1 p/vote)"},
    ]

    const [selectedOption, setSelectedOption] = useState("")
    const [amount, setAmount] = useState("0")
    const [count, setCount] = useState("");
    const [isCheckout, setCheckout] = useState(false);
    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [email, setEmail] = useState("");


    return(
        <>
            <styled.VotingPanelContainer>
                <styled.ContentContainer>
                    <styled.headingContainer>
                        Vote Now!
                    </styled.headingContainer>
                    <styled.componentContainer>
                        {isCheckout ? 
                            //comment added//
                           <>
                                <styled.componentItem>
                                    <TextInput label="Name" textColor="#fff" borderBottomColor="#fff" value={Name} onChange={(event) => {setName(event.target.value)}}/>
                                </styled.componentItem>
                                <styled.componentItem>
                                    <TextInput label="Surname" textColor="#fff" borderBottomColor="#fff" value={Surname} onChange={(event) => {setSurname(event.target.value)}}/>
                                </styled.componentItem>
                                <styled.componentItem>
                                    <TextInput label="Email for Confirmation" textColor="#fff" borderBottomColor="#fff" value={email} onChange={(event) => {setEmail(event.target.value);}}/>
                                </styled.componentItem>
                                <styled.componentItem>
                       <CustomButton label="Confirm" width="150px" onClick={()=> {setCheckout(true)}}/>
                   </styled.componentItem>
                           </>
                        :
                        
                        <>
                        <styled.componentItem>
                       <ComboBox key="bundle" label="Select Bundle" width="50%" textColor="#fff" borderBottomColor="#fff" optionList={optionList} value={selectedOption} onChange={(event)=> {setSelectedOption(event.target.value); }}/>
                   </styled.componentItem>
                   <styled.componentItem>
                       <TextInput label="Quantity" textColor="#fff" borderBottomColor="#fff" value={count} onChange={(event) => {setCount(event.target.value); setAmount(selectedOption * event.target.value)}}/>
                   </styled.componentItem>
                   <styled.componentItem>
                       <LabelPlain value={"Total: R" + amount}/>
                   </styled.componentItem>
                   <styled.componentItem>
                       <CustomButton label="Checkout" width="150px" onClick={()=> {setCheckout(true)}}/>
                   </styled.componentItem>
</>
                        }

                    </styled.componentContainer>
                </styled.ContentContainer>
            </styled.VotingPanelContainer>
        </>
    )

}

export default VotingPanel;
