import { NavLink } from "react-router-dom";
import imag from "../images/омис_autorization.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Autorization({ students }) {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [access, setAccess] = useState('');
  const dispatch = useDispatch()

  const nameInputHandler = (props) => {
    setNameInput(props);
  };

  const passwordInputHandler = (props) => {
    console.log(props)
    setPasswordInput(props);
  };
  
  useEffect(() => {dispatch({ type: 'USER_UPDATE', payload: access })}, [access])
  
  const loginHandler = () => {
    let person = students.find((pers) => pers.name === nameInput && pers.password === Number(passwordInput));
    if(typeof(person) !== 'undefined'){
      setAccess(person);
    }
  };

  return (
    <section class="h-screen">
      <div class="h-full">
        {/* Left column container with background */}
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src={imag} alt="icon" class="w-full" />
          </div>

          {/* Right column container */}
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              {/* <!-- Email input --> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Name"
                  onChange={(e) => nameInputHandler(e.target.value)}
                />
                {nameInput !== "" ? (
                  <></>
                ) : (
                  <label
                    for="exampleFormControlInput2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Name
                  </label>
                )}
              </div>

              {/* <!-- Password input --> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                  type="password"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  onChange={(e) => passwordInputHandler(e.target.value)}
                />
                {passwordInput !== "" ? (
                  <></>
                ) : (
                  <label
                    for="exampleFormControlInput2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                )}
              </div>

              {/* <!-- Login button --> */}
              <div class="text-center lg:text-left">
                <NavLink
                  to={ typeof(access) !== "string" ? "/Profile" : "/"}
                  type="button"
                  class="inline-block rounded bg-green-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={loginHandler}
                >
                  Login
                </NavLink>

                {/* <!-- Register link --> */}
                <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <NavLink
                    to="RegistrationPage"
                    class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
