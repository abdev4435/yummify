// eslint-disable react/prop-types
import { useForm } from "react-hook-form"
import { Input } from "../Common"
import { closeIcon } from "../../assets/Icons"
import { useUI } from "../../Context/UI/useUI"
import { forwardRef, useEffect, useRef } from "react"
// eslint-disable-next-line no-unused-vars
const AuthModal = forwardRef((props, ref) => {
  const { register, handleSubmit } = useForm()
  const { isModalOpen, closeModal, signUp, handleToggle } = useUI()
  const modalRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal()
      }
    }
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/60  z-1">
      <div className="absolute w-full h-screen z-1">
        <div className="flex justify-center items-center my-5">
          <form onSubmit={handleSubmit} className="flex justify-center items-center mt-20 flex-col rounded-2xl shadow-2xl border-rose-950 bg-white" ref={modalRef}>
            <div className="flex justify-center self-end items-center mr-4 mt-4">
              <img src={closeIcon} alt="close" className="w-6 cursor-pointer" onClick={closeModal} />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 px-15 py-10 pt-5">
              <h1 className="text-2xl font-medium">{signUp ? "Sign Up" : "Sign In"}</h1>
              <div className="flex flex-col gap-5">
                {signUp &&
                  <div className="flex gap-2">
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="First name"
                      {...register("firstName", { required: true })}
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Last name"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                }
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  className={signUp ? "w-full" : "w-80"}
                  {...register("email", { required: true })}
                />
                {signUp &&
                  <Input
                    label="Contact"
                    type="tel"
                    placeholder="Contact Number"
                    {...register("email", { required: true })}
                  />
                }
                {/* <div className={signUp ? "flex gap-2" : ""}>
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {signUp && <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                {...register("password", {
                  required: true,
                })}
              />}
              </div> */}
              </div>
              <div className="flex self-start items-center gap-1">
                <span className="text-md">{signUp ? "Already Have an Account?" : "Don't Have an Account?"}</span>
                <button onClick={handleToggle} className="text-rose-950 font-medium underline cursor-pointer">{signUp ? "SignIn" : "SignUp"}</button>
              </div>
              <button className="w-full mx-10 text-white text-lg bg-rose-950 py-2 rounded-3xl cursor-pointer">{signUp ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
});
AuthModal.displayName = "AuthModal";
export default AuthModal;