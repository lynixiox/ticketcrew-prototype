import * as styled from './CustomButton.styles';

const CustomButton = ({
  isDark,
  width = "100px",
  onClick = () => { },
  label = "Click Me",
  color = "primary",
  name = "",
  fontSize = "0.9rem"
}) => {



  return (
    <styled.baseLayout width={width} isDark={isDark} fontSize={fontSize}>
      <button onClick={onClick}>{label}</button>
    </styled.baseLayout>


  );
};

export default CustomButton;

