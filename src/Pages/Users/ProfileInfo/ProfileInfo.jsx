/* eslint-disable react/prop-types */
import { useState } from "react"
import { Heading, Button, Input } from "../../../Components/Common"
import { editIcon, addIcon, saveIcon } from "../../../assets/Icons"
export default function ProfileInfo({
  name = "Johnson Doe",
  email = "johnsondoe@gmail.com",
  phone = "9876543210",
  dob = "32-12-2028",
  gender = "Male"
}) {
  const [editable, setEditable] = useState(false)
  const [username, setUsername] = useState(name)
  const [userEmail, setUserEmail] = useState(email)
  const [userPhone, setUserPhone] = useState(phone)
  const [userDob, setUserDob] = useState(dob)
  const [userGender, setUserGender] = useState(gender)

  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setUserPhone(e.target.value)
  }
  const handleDobChange = (e) => {
    setUserDob(e.target.value)
  }
  const handleGenderChange = (e) => {
    setUserGender(e.target.value)
  }
  const handleEdit = () => {
    setEditable(true)
    setUsername(username)
    setUserEmail(userEmail)
    setUserPhone(userPhone)
    setUserDob(userDob)
    setUserGender(userGender)
  }
  const handleCancel = () => {
    setEditable(false)
    setUsername(username)
    setUserEmail(userEmail)
    setUserPhone(userPhone)
    setUserDob(userDob)
    setUserGender(userGender)
  }
  const handleSave = () => {
    setEditable(false)
  }
  return (
    <div className="m-10">
      <div id="profileHeader" className="text-white bg-black px-20 py-10 rounded-t-lg">
        <div id="profileContainer" className="flex items-center justify-start gap-10 w-full">
          <div id="profilePic" className="flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0C3PxoGAznAfruqe_A2iUk1PyJbjqWK2cQ&s" alt="" className="w-40 h-40 rounded-full border-4 border-black" />
          </div>
          <div id="profileDetailsContainer" className="flex flex-col gap-10">
            <div id="profileName" className="">
              {editable ? (
                <Input value={username} onChange={(e) => { handleNameChange(e) }} inputClassName="text-6xl font-semibold border-2 border-white rounded-md" />
              ) : (
                <h1 className="text-6xl font-semibold text-white">{username}</h1>
              )}
            </div>
            <div id="profileDetails" className="flex items-center gap-20">
              <div id="email" className="flex flex-col gap-1">
                <h1 className="text-md font-medium">Email</h1>
                {editable ? (
                  <Input value={userEmail} onChange={(e) => { handleEmailChange(e) }} inputClassName="text-md font-medium border-2 border-white rounded-md w-75" />
                ) : (
                  <span>{userEmail}</span>
                )}
              </div>
              <div id="phone" className="flex flex-col gap-1">
                <h1 className="text-md font-medium">Phone</h1>
                {editable ? (
                  <div className="flex items-center gap-1 text-md font-medium">
                    <span className="border-2 px-2 py-1 rounded-md">+91</span>
                    <span>-</span>
                    <Input value={userPhone} onChange={(e) => { handlePhoneChange(e) }} inputClassName="text-md font-medium border-2 border-white rounded-md w-35" />
                  </div>
                ) : (
                  <span>+91-{userPhone}</span>
                )}
              </div>
              <div id="profileDOB" className="flex flex-col gap-1">
                <h1 className="text-md font-medium">Date Of Birth</h1>
                <span>32-12-2028</span>
              </div>
              <div id="profileGender" className="flex flex-col gap-1">
                <h1 className="text-md font-medium">Gender</h1>
                {editable ? (
                  <select value={userGender} onChange={(e) => { handleGenderChange(e) }} className="text-md font-medium bg-black border-2 p-1 rounded-md">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Nonbinary">Nonbinary</option>
                  </select>
                ) : (
                  <span>{userGender}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="profileEditBtns" className="py-2 px-2 flex justify-end">
          {editable ? (
            <Button onClick={handleSave} className="bg-green-400 border-green-400 text-black flex justify-center items-center gap-1 text-md rounded-sm hover:scale-95 transition will-change-transform duration-400">
              <img src={saveIcon} alt="" className="w-4 h-4" />
              <span>Save</span>
            </Button>
          ) : (
            <Button onClick={handleEdit} className="flex justify-center items-center gap-1 text-md rounded-sm hover:scale-95 transition will-change-transform duration-400">
              <img src={editIcon} alt="" className="w-4 h-4" />
              <span>Edit</span>
            </Button>
          )}
        </div>
      </div>

      <div id="favorites" className="px-20 py-5">
        <Heading heading="Favorites Dishes/Cuisines" className="text-lg justify-start" />
        <div className="flex gap-2">
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center hover:border-red-800 hover:text-red-800 cursor-pointer">Mughlai</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Chinese</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Pizza</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Burger</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Cake</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Milk Shake</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Brownie</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Ice Cream</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Biryani</span>
          <span className="text-sm font-medium border-1 py-1 px-3 rounded-full flex justify-center items-center">Cake</span>
          <Button className="rounded-full flex gap-1 justify-between items-center hover:scale-95 transition will-change-transform duration-400">
            <img src={addIcon} alt="" className="w-3" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
