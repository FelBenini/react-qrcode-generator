import React from 'react'

interface propsTypes {
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    color: Array<string>,
    setColor: React.Dispatch<React.SetStateAction<Array<string>>>,
}


const Form = ({ setUrl, color, setColor }: propsTypes) => {
    return (
        <form>
            <input type="text" onChange={(e) => { setUrl(e.target.value) }} />
            <span className='colorWrapper'>
                <input type="color" className='colorInput' value={color[0]} onChange={(e) => { setColor([e.target.value, color[1]]) }} />
                <input type="color" className='colorInput' value={color[1]} onChange={(e) => { setColor([color[0], e.target.value]) }} />
            </span>
        </form>
    )
}

export default Form