import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();
    const [currentdate, setCurrentdate] = useState(" ");
    const [currentday, setCurrentday] = useState(" ");
    const [time, setTime] = useState(new Date());

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


    return (
        <>
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
                    <button className="w-24 h-10 text-sm font-bold text-white bg-yellow-700 rounded-md hover:bg-yellow-800 transition shadow-md" onClick={() => navigate("/signup")}>
                        Sign Up
                    </button>
                </div>
            </nav>

            <div className="p-10">
                <div className="flex justify-center font-bold text-[3rem]">About Us</div>

                <div className="flex justify-center items-center font-bold text-[2.5rem] gap-4 my-4">
                    <img src="/public/red-hibiscus.webp" alt="Red Hibiscus" className="w-[5rem]" />
                    <span>Durga Puja Committee Details</span>
                    <img src="/public/hibiscus-flower-isolated-path-included.webp" alt="Hibiscus" className="w-[5rem]" />
                </div>

                <div className="flex justify-center font-bold text-[2rem] text-center">
                    Organized by: Lakshmanpara Sarbojanin Durga Puja Committee
                </div>

                <div className="flex justify-center items-center font-bold text-[1.5rem] mt-4 gap-2 text-center">
                    <img src="/public/location.webp" alt="Location" className="w-[2rem]" />
                    <span>
                        Venue: Village - Rol (Lakshmanpara), Post - Rol, P.S - Indas, Dist - Bankura
                    </span>
                </div>

                <p className="text-[1.5rem] text-center mt-6 mx-40">
                    Durga Puja is not just a festival; it’s an emotion that binds the community together. Behind the celebration, a dedicated team works tirelessly to make the event grand, safe, and memorable. Meet our organizing committee for this year’s Durga Puja!
                </p>

                <div className="mt-10">
                    <div className="flex justify-center items-center font-bold text-[2.5rem] gap-4 mb-6">
                        <img src="/public/namaskar.webp" alt="Namaskar" className="w-[3rem]" />
                        <span>Core Committee Members</span>
                    </div>

                    {/* President */}
                    <div className="mb-8">
                        <div className="text-[2rem] font-bold mb-2">1. President</div>
                        <div className="ml-10 space-y-2">
                            <div className="flex items-center text-[1.5rem] font-bold">
                                Name:
                                <span className="ml-2 text-emerald-500">Mr. Annada Shankar Datta</span>
                            </div>
                            <div className="flex items-start text-[1.5rem] font-bold">
                                Role:
                                <span className="ml-2 text-emerald-500">Overall leadership and decision-making authority, supervises all departments.</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                                Contact:
                                <span className="ml-2 text-emerald-500">9735157562</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                                Email:
                                <span className="ml-2 text-emerald-500">prabhatkumardas1992@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Vice President */}
                    <div className="mb-8">
                        <div className="text-[2rem] font-bold mb-2">2. Vice President</div>
                        <div className="ml-10 space-y-2">
                            <div className="flex items-center text-[1.5rem] font-bold">
                                Name:
                                <span className="ml-2 text-emerald-500">Mr. Narendranath Soo</span>
                            </div>
                            <div className="flex items-start text-[1.5rem] font-bold">
                                Role:
                                <span className="ml-2 text-emerald-500">Responsible for logistical coordination and in charge of sponsor relations and public engagement.</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                                Contact:
                                <span className="ml-2 text-emerald-500">9609501734</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                                Email:
                                <span className="ml-2 text-emerald-500">narendranathsoo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {/*Genaral Secretory */}
                    <div className="mb-8">
                        <div className="text-[2rem] font-bold mb-2">3. General Secretary</div>
                        <div className="ml-10 space-y-2">
                            <div className="flex items-center text-[1.5rem] font-bold">
                                Name:
                                <span className="ml-2 text-emerald-500">Mr. Narendranath Soo</span>
                            </div>
                            <div className="flex items-start text-[1.5rem] font-bold">
                                Role:
                                <span className="ml-2 text-emerald-500">Day-to-day operations, schedules, event approvals.</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                                Contact:
                                <span className="ml-2 text-emerald-500">9609501734</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                                Email:
                                <span className="ml-2 text-emerald-500">narendranathsoo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {/*Joint Secretory */}
                    <div className="mb-8">
                        <div className="text-[2rem] font-bold mb-2">4. Joint Secretaries </div>
                        <div className="ml-10 space-y-2">
                            <div className="flex items-center text-[1.5rem] font-bold">
                                Name:
                                <span className="ml-2 text-emerald-500">Mr. Narendranath Soo</span>
                            </div>
                            <div className="flex items-start text-[1.5rem] font-bold">
                                Role:
                                <span className="ml-2 text-emerald-500">Cultural Event Management, Volunteer Coordination.</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                                Contact:
                                <span className="ml-2 text-emerald-500">9609501734</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                                Email:
                                <span className="ml-2 text-emerald-500">narendranathsoo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {/* Treasurer*/}
                    <div className="mb-8">
                        <div className="text-[2rem] font-bold mb-2">4.  Treasurer </div>
                        <div className="ml-10 space-y-2">
                            <div className="flex items-center text-[1.5rem] font-bold">
                                Name:
                                <span className="ml-2 text-emerald-500">Mr. Narendranath Soo</span>
                            </div>
                            <div className="flex items-start text-[1.5rem] font-bold">
                                Role:
                                <span className="ml-2 text-emerald-500">Manages budget, donations, and expense reports.</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                                Contact:
                                <span className="ml-2 text-emerald-500">9609501734</span>
                            </div>
                            <div className="flex items-center text-[1.5rem] font-bold">
                                <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                                Email:
                                <span className="ml-2 text-emerald-500">narendranathsoo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center font-bold text-[2.5rem] gap-4 mb-6">
                    <img src="/public/namaskar.webp" alt="Namaskar" className="w-[3rem]" />
                    <span>Sub-Committees & In-Charges</span>
                </div>
                {/* President */}
                <div className="mb-8">
                    <div className="text-[2rem] font-bold mb-2">1. Decoration Committee </div>
                    <div className="ml-10 space-y-2">
                        <div className="flex items-center text-[1.5rem] font-bold">
                            Lead:
                            <span className="ml-2 text-emerald-500">Mr. Annada Shankar Datta</span>
                        </div>
                        <div className="flex items-start text-[1.5rem] font-bold">
                            Responsibility:
                            <span className="ml-2 text-emerald-500">Mandap design, lighting, floral arrangements.</span>
                        </div>
                        <div className="flex items-center text-[1.5rem] font-bold">
                            <img src="/public/mobile.webp" alt="Phone" className="w-[2rem] mr-2" />
                            Contact:
                            <span className="ml-2 text-emerald-500">9735157562</span>
                        </div>
                        <div className="flex items-center text-[1.5rem] font-bold">
                            <img src="/public/email.webp" alt="Email" className="w-[2rem] mr-2" />
                            Email:
                            <span className="ml-2 text-emerald-500">prabhatkumardas1992@gmail.com</span>
                        </div>
                    </div>
                </div>
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
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
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

        </>
    )
}

export default AboutUs; 