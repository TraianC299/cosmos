import React from 'react'


interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    value: string | number
    setValue: (a:string) => void
    label: string
} 
const Input = ({
    value,
    setValue,
    label,
    ...props
}:Props) => {
  return (
    <div className='flex afs jfs column'>
          <label htmlFor="speed">{label}</label>
        <input {...props} className='m-0' value={value} onChange={(e)=>setValue(e.target.value)}></input>
        </div>
  )
}

export default Input