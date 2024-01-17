import { Checkbox, ListItemText, FormControl, InputLabel, MenuItem, Select, Input } from '@mui/material'
import React from 'react'
import * as styled from './ComboBox.styles';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,

//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

/**
 * 
 * @param {*} props 
 * @param {String} description This is the placeholder/description
 * @param {String} inputValue This is the value of the selected input
 * @param {object} optionList This is an Array of {optionvalue: '', optionName: ''}
 * @param {function} onChange Function to handle the on change event.
 * @returns {object} Returns a ComboBox object
 */
const ComboBoxMultiSelect = (props) => {
    const {
        name = "demo-simple-select-label",
        id = "TempId",
        label = '',
        onBlur = () => { },
        value = [],
        optionList = [{ optionValue: '', optionName: "There are no items" }],
        onChange

    } = props;

    // const classes = useStyles();

    return (
        <styled.ComboBox>
            <FormControl className={"formControl"}>
                <InputLabel name={name}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    name={name}
                    id={id}
                    multiple
                    value={value}
                    renderValue={(selected) => selected.join(', ')}
                    input={<Input />}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    {optionList.map((item) => {
                        return (
                            <MenuItem value={item.optionValue}>
                                <Checkbox checked={optionList.indexOf(item) > -1} />
                                <ListItemText primary={item.optionName} />
                            </MenuItem>
                        )

                    })}

                </Select>
            </FormControl >
        </styled.ComboBox>

    )
}

export default ComboBoxMultiSelect
