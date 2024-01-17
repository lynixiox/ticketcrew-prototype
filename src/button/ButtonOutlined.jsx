import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// TAKE NOTE ---  If you set labelColor or borderColor that color will overide the isDark for that option.

const ButtonOutlined = ({ isDark = false, onClick, label, width = "100px", fontSize = "0.875rem", id, isSelected = false, labelColor = "", borderColor = "" }) => {
  const StyledButton = styled(Button)`
    ${labelColor !== "" ?
      `color: ${labelColor};`
      :
      `color: ${isDark ? "#000" : "#fff"};`
    }
    
    background: ${isSelected ? "#f00b" : "transparent"};

    ${borderColor !== "" ?
      `border: 1px solid ${borderColor};`
      :
      `border: 1px solid ${isDark ? "#000c" : "#fffc"};`
    }

font - weight: 500;
line - height: 1.75;
width: ${width};
padding: 0;
margin: 3px;
min - height: 26px;
height: fit - content;
font - size: ${fontSize};

   

    &&:hover {
  background - color: ${isDark ? "#0001" : "#fff1"};
  border: 1px solid ${isDark ? "#000e" : "#fffe"};
}
`;

  return <StyledButton id={id} name={label} onClick={onClick} >{label}</StyledButton>

};

export default ButtonOutlined;