import React, { useState } from 'react';


const Header = () => {

    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT ME", link: "/about" },
        { name: "PORTFOLIO", link: "/portfolio" },
        { name: "CONTACT", link: "/contact" },

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md lg:shadow-none w-full sticky">
            <div className="lg:flex items-center justify-between 
           
             py-4 lg:px-10 px-7">
                <div>
                    {/* <img src={logo} width="100px" height="100px" alt={logo} /> */}
                    <h2 className="text-white font-sans lg:text-black lg:hover:text-red-600 font-bold duration-500 ml-20" >MAHARUN NESSA MEEM</h2>

                    <div
                        onClick={() => setOpen(!open)}
                        className="text-4xl absolute right-8 top-6 text-red-600 cursor-pointer lg:hidden"
                    >
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-4xl absolute right-8 top-6 text-red-600 cursor-pointer lg:hidden"
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`lg:flex lg:items-center md:pb-0 pb-7 absolute lg:static bg-red-600 lg:bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-4 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"
                        }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="ml-3 lg:ml-5 font-bold text-lg lg:my-0 my-7"
                        >
                            <a
                                href={link.link}
                                className="text-white font-sans lg:text-black lg:hover:text-red-600 hover:text-2xl duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Header;