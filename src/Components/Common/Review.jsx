

export default function Review() {
  return (
    <div className="flex flex-col gap-4 w-1/4 border-2 border-gray-100 shadow-md rounded-xl p-4">
      <h1 className="font-semibold">Best Platform!</h1>
      <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolorum vitae beatae maxime, molestias fuga ipsum repellat laborum eligendi iusto?</p>
      <div className="flex">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s" alt="" className="h-10 w-10 rounded-full"/>
        <div className="ml-2">
          <h2 className="font-medium">John Doe</h2>
          <p className="text-xs">Mumbai, India</p>
        </div>
      </div>
    </div>
  )
}
