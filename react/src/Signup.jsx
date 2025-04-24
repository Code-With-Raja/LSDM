import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";




function Signup() {

    const navigate = useNavigate();
    const [currentdate, setCurrentdate] = useState(" ");
    const [currentday, setCurrentday] = useState(" ");
    const [time, setTime] = useState(new Date());
    const [message, setMessage] = useState("");

    useEffect(() => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[date.getDay()];

        setCurrentdate(formattedDate);
        setCurrentday(dayName);
    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date())


        }, 1000);

        return () => clearInterval(interval);



    }, []);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/signup", data);
            console.log("Saved:", response.data);
            setMessage("Signup Successfully")
            reset(); // Clear form after submission
        } catch (error) {
            console.error("Error:", error);
            setMessage("Somthing Wrong") 
        }
    };


    return (
        <div>

            <nav className="flex flex-wrap items-center justify-between w-full bg-blue-700 h-auto p-4 rounded-lg shadow-lg">
                {/* Left: Navigation Links */}
                <ul className="flex flex-wrap gap-6 text-white text-lg font-bold w-full md:w-auto justify-center md:justify-start">
                    <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
                    <li className="cursor-pointer" onClick={() => navigate("/aboutus")}>About Us</li>
                    <li className="cursor-pointer flex items-center gap-1" onClick={() => navigate("/contact")}>
                        Contact <i className="fas fa-caret-down"></i>
                    </li>
                </ul>

                {/* Middle: Social Icons */}
                <div className="flex gap-4 justify-center w-full md:w-auto mt-4 md:mt-0">
                    <a href="https://www.facebook.com/lakshmanparaserbojanindurgamandir" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-white hover:text-blue-400 transition" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@LAKSHMANPARASDM" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-white hover:text-red-500 transition" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/lakshmanparasdm/" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-white hover:text-pink-500 transition" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                    </a>
                </div>

                {/* Right: Auth Buttons */}
                <div className="flex flex-wrap gap-4 justify-center w-full md:w-auto mt-4 md:mt-0">
                    <svg className="w-6 h-6 cursor-pointer text-white hover:text-gray-300 transition" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z" />
                    </svg>
                    <button className="w-24 h-10 text-sm font-bold text-white bg-yellow-700 rounded-md hover:bg-yellow-800 transition shadow-md" onClick={() => navigate("/login")}>
                        Log In
                    </button>
                    <button className="w-24 h-10 text-sm font-bold text-white bg-yellow-700 rounded-md hover:bg-yellow-800 transition shadow-md">
                        Sign Up
                    </button>
                </div>
            </nav>



            <div className="flex justify-center items-center w-full min-h-[35rem] bg-zinc-200 mt-4 px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-2xl"
                >
                    <h1 className="text-center text-2xl font-bold text-zinc-800">Create Your Account</h1>

                    {isSubmitting && <div className="text-red-500 text-2xl">Loading...</div>}

                    {/* Name Fields */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex flex-col w-full md:w-[48%]">
                            <input
                                {...register("firstname", { required: { value: true, message: "This field is required" } })}
                                type="text"
                                className="p-2 border border-zinc-300 rounded-lg text-base"
                                placeholder="First Name"
                            />
                            {errors.firstname && (
                                <span className="text-red-600 font-bold text-sm">{errors.firstname.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col w-full md:w-[48%]">
                            <input
                                {...register("secondname", { required: { value: true, message: "This field is required" } })}
                                type="text"
                                className="p-2 border border-zinc-300 rounded-lg text-base"
                                placeholder="Second Name"
                            />
                            {errors.secondname && (
                                <span className="text-red-600 font-bold text-sm">{errors.secondname.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <input
                            {...register("email", { required: { value: true, message: "This field is required" } })}
                            type="text"
                            className="p-2 border border-zinc-300 rounded-lg text-base"
                            placeholder="Email address"
                        />
                        {errors.email && (
                            <span className="text-red-600 font-bold text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Password Fields */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex flex-col w-full md:w-[48%]">
                            <input
                                {...register("password", { required: { value: true, message: "This field is required" } })}
                                type="password"
                                className="p-2 border border-zinc-300 rounded-lg text-base"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <span className="text-red-600 font-bold text-sm">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col w-full md:w-[48%]">
                            <input
                                {...register("confirmpassword", { required: { value: true, message: "This field is required" } })}
                                type="password"
                                className="p-2 border border-zinc-300 rounded-lg text-base"
                                placeholder="Confirm Password"
                            />
                            {errors.confirmpassword && (
                                <span className="text-red-600 font-bold text-sm">{errors.confirmpassword.message}</span>
                            )}
                        </div>
                    </div>

                    <input
                        type="submit"
                        className="mt-2 bg-blue-500 text-white text-lg py-2 rounded-lg hover:bg-blue-600 transition"
                        disabled={isSubmitting}
                    />

                    <div className="font-bold text-[1rem] ">Already have a account? <span onClick={() => navigate("/login")} className="  text-red-700 text-[1.5rem] cursor-pointer ">Log In </span> </div>

                    {message && <p className="text-red-700 text-xl font-bold">{message}</p>}


                </form>
            </div>









            <footer className="flex flex-col w-full bg-yellow-500 p-8 mt-[1rem] ">

                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="text-blue-500 text-xl font-bold">{currentdate}</div>
                    <div className="text-blue-500 text-xl font-bold">{currentday}</div>
                    <div className="text-blue-500 text-xl font-bold">{time.toLocaleTimeString()}</div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full mt-8">
                    <div className="flex flex-col gap-2 text-blue-500 text-lg font-bold">
                        <h3 className="text-lime-600 text-2xl">Information</h3>
                        <a href="" onClick={() => navigate("/")}>Home</a>
                        <a href="">Services</a>
                        <a href="">Donation</a>
                        <a href="">Location Direction</a>
                        <a href="" onClick={() => navigate("/aboutus")}>About Us</a>
                        <a href="" onClick={() => navigate("/contact")}>Contact Us</a>
                    </div>

                    <div className="flex flex-col gap-2 text-blue-500 text-lg font-bold">
                        <h3 className="text-lime-600 text-2xl">Others</h3>
                        <a href="">FAQ's</a>
                        <a href="">Photo Gallery</a>
                        <a href="">Video Gallery</a>
                    </div>

                    <div className="flex flex-col gap-4 text-lime-700 text-2xl">
                        <h3 className="text-lime-600 text-2xl font-bold">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/lakshmanparaserbojanindurgamandir" target="_blank" rel="noreferrer">
                                <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@LAKSHMANPARASDM" target="_blank" rel="noreferrer">
                                <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/lakshmanparasdm/" target="_blank" rel="noreferrer">
                                <svg className="w-8 h-8" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

            </footer>






        </div>

    )



}

export default Signup; 