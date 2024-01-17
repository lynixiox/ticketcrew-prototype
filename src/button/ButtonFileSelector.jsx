import * as styled from "./ButtonFileSelector.styles";

const ButtonFileSelector = (props) => {
  const { isDark, label, width = "100px", fontSize = "0.875rem", handleOnChange = () => { } } = props

  return (
    <styled.baseLayout isDark={isDark} width={width} fontSize={fontSize} >
      <label for="selectFiles">{label}</label>
      <input id="selectFiles" type="file" multiple={true} onChange={(event) => handleOnChange(event)} />
    </styled.baseLayout>

  )
}

export default ButtonFileSelector