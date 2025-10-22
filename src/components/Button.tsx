import React from 'react'

interface ButtonProp{
text:string,
width:string | "200px",
heigth:string | "100px",
}

const  Button:React.FC<ButtonProp> =({text,width,heigth})=>{
    console.log(width)
  return (
    <div className='bg-blue-600 cursor-pointer text-white font-bold' style={{width:width, height:heigth}}>
        <button type='submit'>{text}</button>
    </div>

    
)
}

export default Button