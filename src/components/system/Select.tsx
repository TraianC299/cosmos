import React from 'react'


interface Props  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    children: React.ReactNode
    value: string | number
    setValue:  React.Dispatch<React.SetStateAction<any>>
    label: string
}

const Select = ({
    children,
    value,
    setValue,
    label,
    ...props
}:Props) => {
  return (
    <div className='flex afs jfs column'>
          <label htmlFor="speed">{label}</label>
          <select {...props}  value={value} onChange={(e)=>setValue(e.target.value)}>
            {children}
          </select>
        </div>
  )
}

export default Select