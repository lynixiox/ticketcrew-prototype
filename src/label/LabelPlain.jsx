import React from 'react';
import * as styled from './LabelPlain.styles';

const LabelPlain = ({
    isDark = false,
    label,
    labelColor = isDark ? "#000" : "#fff",
    textColor = isDark ? "#000" : "#fff",
    value,
    onKeyPress = () => { },
    onBlur = () => { },
    onChange = () => { },
    isPassword = false,
    icon,
    id = "text-input" }) => {


    return (

        <>
            {label ?
                <styled.baseContainer labelColor={labelColor} >
                    <label>{label}</label>
                </styled.baseContainer>

                : value ?
                    <styled.baseContainer labelColor={labelColor} noBottomMargin={true}>
                        <label>{value}</label>
                    </styled.baseContainer>
                    :
                    <></>
            }
        </>
    )
}

export default LabelPlain