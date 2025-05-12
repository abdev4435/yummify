/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import clsx from 'clsx'
import React, { forwardRef, useId } from 'react'

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ children, type = 'text', placeholder, labelClassName, inputClassName, ...props }, ref) => {
  const id = useId()
  return (
    <div className='flex flex-col w-full'>
      {children && <label
        className={clsx("font-medium text-lg", labelClassName)}
        htmlFor={id}
      >
        {children}
      </label>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        id={id}
        className={clsx("border-2 px-2 py-1 rounded-md text-md", inputClassName)}
        {...props}
      />
    </div>
  )
})

export default Input
