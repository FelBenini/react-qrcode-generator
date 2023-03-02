import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

interface propsTypes {
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    color: Array<string>,
    setColor: React.Dispatch<React.SetStateAction<Array<string>>>,
    scale: number,
    setScale: React.Dispatch<React.SetStateAction<number>>,
}


const Form = ({ setUrl, color, setColor, scale, setScale }: propsTypes) => {
    const handleChange = (event: any) => {
        setScale(event.target.value as number);
    };
    return (
        <form>
            <input type="text" id='url' placeholder='Paste you URL here...' onChange={(e) => { setUrl(e.target.value) }} />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    id="demo-simple-select"
                    labelId="demo-simple-select-label"
                    value={scale}
                    onChange={handleChange}
                >
                    <MenuItem value={180}>Small</MenuItem>
                    <MenuItem value={240}>Regular</MenuItem>
                    <MenuItem value={380}>Large</MenuItem>
                </Select>
            </FormControl>
            <span id='colorTitle'>
                <h6>Color:</h6>
                <h6>Background:</h6>
            </span>
            <span className='colorWrapper'>
                    <input type="color" className='colorInput' value={color[0]} onChange={(e) => { setColor([e.target.value, color[1]]) }} />
                    <input type="color" name='color2' className='colorInput' value={color[1]} onChange={(e) => { setColor([color[0], e.target.value]) }} />
            </span>
        </form>
    )
}

export default Form