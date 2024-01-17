import React, { useEffect, useState } from "react";
import * as myStyled from "./TextInput.styles";
import { TextField } from "@mui/material";

const TableTextInput = ({
  id,
  rowId,
  columnName,
  isDark,
  label = '',
  labelColor = "grey",
  disabledTextColor = "#fff2",
  textColor = isDark ? "#000" : "#fff",
  borderBottomColor = "#5e0000",
  value = '',
  onKeyPress = () => { return; },
  onBlur = () => { return; },
  onChange = () => { return; },
  isPassword = false,
  isMultiLine = false,
  icon,
  key,
  testid
}) => {

  const [textValue, setTextValue] = useState(value);

  useEffect(() => {
    setTextValue(value);
  },[value])

  const handleChange = (evnt) => {
      setTextValue(evnt.target.value);
      if (typeof onChange === "function") {
          onChange(evnt.target.value, rowId, columnName);
      }
  }

  const handleOnBlur = (evnt) => {
      if (typeof onBlur === "function") {
          onBlur(evnt.target.value, rowId, columnName);
          console.log(evnt.target.value+" " + rowId +" "+  columnName);

      }
  }

  const hanldeKeyPress = (evnt) => {
      if (evnt.charCode === 13) {
          evnt.target.blur();  // handleOnBlur() will be called
      }

  }


  return (
    <myStyled.baseContainer className="textInput" labelColor={labelColor} textColor={textColor} disabledTextColor={disabledTextColor} borderBottomColor={borderBottomColor}>
      {icon}
      <TextField key={key} id={id} label={label} value={textValue} onChange={handleChange} onBlur={handleOnBlur} type={isPassword ? "password" : "text"} onKeyPress={hanldeKeyPress} data-testid={testid} multiline={isMultiLine} minRows={5} />
    </myStyled.baseContainer>
  );
};

export default TableTextInput;