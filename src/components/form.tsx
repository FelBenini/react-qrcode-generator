import React from 'react'

interface propsTypes {
    setUrl: React.Dispatch<React.SetStateAction<string>>
}


const Form = ({setUrl}: propsTypes) => {
  return (
    <form>
        <input type="text" onChange={(e) => {setUrl(e.target.value)}}/>
    </form>
  )
}

export default Form