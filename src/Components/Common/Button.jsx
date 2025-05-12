/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge"
export default function Button({
  children = "Click Me",
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button type={type} onClick={onClick} className={twMerge("bg-red-800 border-2 border-red-800 text-white px-3 py-1 cursor-pointer rounded-md font-medium", className)} {...props}>
      {children}
    </button >
  )
}
