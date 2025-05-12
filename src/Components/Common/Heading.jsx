/* eslint-disable react/prop-types */
export default function Heading({ heading, className, ...props }) {
  return (
    <>
      <div className={`mb-10 flex justify-center items-center ${className}`} {...props}>
        <span className="text-center font-medium inline-block after:flex after:justify-center after:items-center after:self-center after:content-[''] after:w-4/5 after:h-1 after:bg-red-800">{heading}</span>
      </div>
      <div>
      </div>
    </>
  )
}
