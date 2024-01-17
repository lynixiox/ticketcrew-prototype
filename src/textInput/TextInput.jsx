import React, { useState } from "react";
import * as myStyled from "./TextInput.styles";
import { TextField } from "@mui/material";

const TextInput = ({
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

  return (
    <myStyled.baseContainer className="textInput" labelColor={labelColor} textColor={textColor} disabledTextColor={disabledTextColor} borderBottomColor={borderBottomColor}>
      {icon}
      <TextField key={key} id={id} label={label} value={value} onChange={onChange} onBlur={onBlur} type={isPassword ? "password" : "text"} onKeyPress={onKeyPress} data-testid={testid} multiline={isMultiLine} minRows={5} />
    </myStyled.baseContainer>
  );
};

export default TextInput;