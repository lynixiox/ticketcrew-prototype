import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"

const ButtonBlueBackground = (props) => {
  const { onClick, label, width = "100px", textAlign = "center" } = props
  const StyledButton = styled(Button)`
    color: grey;
    background: transparent;
    font-weight: 500;
    line-height: 1.75;
    width: ${width};
    padding: 0;
    margin: 3px;
    min-height: 26px;
    text-align: ${textAlign};
    border-radius: 3px;

    &&:hover {
      
      text-decoration: none;
      background-color: #d3dfff;
    } 
    
  
  `

  return <StyledButton onClick={onClick}><label style={{ width: "calc(100% - 20px)", padding: "0 10px" }}>{label}</label></StyledButton>

}

export default ButtonBlueBackground 