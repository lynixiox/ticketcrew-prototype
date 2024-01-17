import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import * as styled from "./ComboBox.styles";

const ComboBox = ({
  name,
  id,
  label = "",
  onBlur = () => { return; },
  value = "",
  optionList = [{ optionValue: "", optionName: "" }],
  onChange,
  labelColor = "grey",
  inputColor = "#fff",
  svgColor = "grey",
  borderBottomColor = "black",
  width = "100%",
  testid,
}) => {

  return (
    <styled.ComboBox className="comboBox" labelColor={labelColor} inputColor={inputColor} svgColor={svgColor} width={width} borderBottomColor={borderBottomColor}>
      <FormControl className={"formControl"}>
        <InputLabel name={name} >{label}</InputLabel>
        <Select labelId={label} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} data-testid={testid}>
          {
            Array.isArray(optionList) &&
            optionList?.map((item) => {
              return (<MenuItem key={item.optionValue} value={item.optionValue} id={item.optionName}>{item.optionName}</MenuItem>);
            })}
        </Select>
      </FormControl>
    </styled.ComboBox>
  );
};

export default ComboBox;
