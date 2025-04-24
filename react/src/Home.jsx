
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const images = [
    '/public/public/Body-Background-img.webp?text=Slide+1',
    '/public/Slide Image/(UMA TELECOM-9933321847) (9).webp?text=Slide+2',
    '/public/Slide Image/maa durga.webp?text=Slide+3',
    '/public/Slide Image/maa durga1.jpg?text=Slide+4',
    '/public/Slide Image/maa durga2.jpeg?text=Slide+5',
    '/public/Slide Image/maa durga3.jpg?text=Slide+6',

];



function Home() {
    const [index, setIndex] = useState(0);
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

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, []);


    function getRandomColor() {
        const r = Math.floor(Math.random() * 500);
        const g = Math.floor(Math.random() * 500);
        const b = Math.floor(Math.random() * 500);

        return `rgb(${r}, ${g}, ${b})`;
    }
    function changeBackgroundColor() {
        document.getElementById("head1").style.backgroundColor = getRandomColor();
        document.getElementById("head2").style.backgroundColor = getRandomColor();
        document.getElementById("date").style.backgroundColor = getRandomColor();
        document.getElementById("day").style.backgroundColor = getRandomColor();
        document.getElementById("time").style.backgroundColor = getRandomColor();



    }

    setInterval(changeBackgroundColor, 1000)



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


            <Home1 />





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


    function Home1() {

        return (
            <>

                <div className="absolute  w-[8rem] rounded-xl shadow-xl shadow-red-500 flex justify-center items-center">
                    <img
                        src="/public/bg.jpg"
                        alt="Decorative background"
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>
                <div className="flex flex-col items-center mt-[2rem]  gap-4 text-white text-lg font-bold w-full px-4">
                    {/* Main Heading */}
                    <h1
                        id="head1"
                        className="text-[2.5rem] h-auto text-center p-6 flex justify-center items-center flex-wrap"
                    >
                        Welcome to Lakshmanpara Serbojanin Durga Mondir
                    </h1>

                    {/* Subheading / Address */}
                    <h2
                        id="head2"
                        className="relative h-auto mt-[4rem] text-zinc-800 text-[2rem] w-full max-w-4xl bg-white shadow-md rounded-md px-6 py-3 text-center"
                    >
                        Vill - Rol Lakshmanpara, P.O - Rol, P.S - Indas, Dist - Bankura.
                    </h2>
                </div>


                <div className="flex flex-col items-center mt-8">
                    {/* Slides Container */}
                    <div className="flex w-full h-[50rem] overflow-hidden">
                        <img
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Update Bar */}
                    <div className="flex w-full h-[5rem] mt-4 bg-cyan-500 shadow-xl shadow-zinc-500 rounded-lg justify-center items-center">
                        <span className="text-[2.5rem] text-brown-500">Latest Update</span>
                    </div>
                </div>
                <div className="flex justify-center mt-8 bg-zinc-200 w-full">
                    <div className="border-[0.2rem] rounded-[2%] shadow-lg w-[45rem] h-auto text-[2rem] bg-white p-4">
                        {/* Header */}
                        <div className="flex justify-center items-center text-yellow-800 bg-rose-500 h-[4rem] rounded-md font-bold mb-4 text-[2.5rem]">
                            Day Schedule
                        </div>

                        {/* Date Row */}
                        <div className="flex justify-between text-[2rem] text-zinc-700 px-4 mb-6">
                            <div id="date">{currentdate}</div>
                            <div id="day">{currentday}</div>
                            <div id="time">{time.toLocaleTimeString()}</div>
                        </div>

                        {/* Schedule Items */}
                        {[
                            { time: '09:00 AM', activity: 'Temple Open' },
                            { time: '10:00 AM', activity: 'Temple Morning Arati' },
                            { time: '12:00 NOON', activity: 'Temple Morning Close' },
                            { time: '04:00 PM', activity: 'Temple Evening Open' },
                            { time: '08:00 PM', activity: 'Temple Evening Arati' },
                            { time: '09:00 PM', activity: 'Temple Close' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center px-6 py-3 text-[1.7rem] ${index % 2 === 0 ? 'bg-zinc-100' : 'bg-zinc-200'
                                    }`}
                            >
                                <div className="text-zinc-600 font-semibold">{item.time}</div>
                                <div className="text-black">{item.activity}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 bg-zinc-200 w-full">

                <div className="events border-[0.2rem] rounded-[2%] shadow-lg w-[45rem] h-auto text-[2rem] bg-white p-4">
                    {/* Header */}
                    <div className="flex justify-center items-center text-orange-800 bg-rose-500 h-[4rem] font-bold text-[2.2rem] rounded-t-lg">
                        Events
                    </div>

                    {/* Scrollable Event List */}
                    <div className="overflow-y-auto p-4 space-y-6 text-[1.5rem] text-red-600 h-full">
                        {/* Shashthi */}
                        <div>
                            <p className="font-bold">Shashthi (October 09, 2024):</p>
                            <ul className="ml-6 list-disc">
                                <li>07:00 PM - Beli Baran</li>
                                <li>08:00 PM – Sankha Badan Competition</li>
                            </ul>
                        </div>

                        {/* Saptami */}
                        <div>
                            <p className="font-bold">Saptami (October 10, 2024):</p>
                            <ul className="ml-6 list-disc">
                                <li>09:00 AM – Drawing Competition</li>
                                <li>10:00 AM – Swimming Competition</li>
                                <li>12:00 PM – Cycle Racing Competition</li>
                                <li>07:00 PM – Candle Competition</li>
                            </ul>
                        </div>

                        {/* Ashtami */}
                        <div>
                            <p className="font-bold">Ashtami (October 11, 2024):</p>
                            <ul className="ml-6 list-disc">
                                <li>07:00 PM – Musical Chair Competition</li>
                                <li>08:00 PM – Passing the Ball Competition</li>
                                <li>09:00 PM – Dancing Competition</li>
                            </ul>
                        </div>

                        {/* Nabami */}
                        <div>
                            <p className="font-bold">Nabami (October 12, 2024):</p>
                            <ul className="ml-6 list-disc">
                                <li>07:00 PM – Natok: “Name”</li>
                                <li>08:00 PM – Natok: “Name”</li>
                                <li>09:00 PM – Natok: “Name”</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>




                <div className="mt-[2rem] flex justify-center w-full h-auto gap-x-[5rem]">
                    {/* News Section */}
                    <div className="news border-[0.2rem] rounded-md shadow-lg w-[45rem] h-[40rem] text-[2rem] flex flex-col">
                        <div className="flex justify-center items-center h-[4rem] bg-rose-500 font-bold rounded-t-md text-white">
                            News
                        </div>
                        <div className="p-4 text-center text-zinc-700">
                            <p className="mt-4">Latest updates will appear here.</p>
                            {/* You can add dynamic news items here */}
                        </div>
                    </div>

                    {/* Donation Section */}
                    <div className="donation border-[0.2rem] rounded-md shadow-lg w-[45rem] h-[40rem] text-[2rem] flex flex-col">
                        <div className="flex justify-center items-center h-[4rem] bg-rose-500 font-bold rounded-t-md text-white">
                            Donation
                        </div>
                        <div className="text-center bg-cyan-500 py-2 font-semibold text-white">
                            Account Details
                        </div>
                        <div className="p-6 flex flex-col gap-6 text-blue-600">
                            <div>Account Holder Name: <span className="font-bold">Lakshmanpara Durga Puja Committee</span></div>
                            <div>Account No.: <span className="font-bold">1234567890</span></div>
                            <div>Bank Name: <span className="font-bold">State Bank of India</span></div>
                            <div>IFSC: <span className="font-bold">SBIN0000001</span></div>
                        </div>
                    </div>
                </div>



            </>
        )
    }


}
export default Home;


