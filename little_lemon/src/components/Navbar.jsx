import { navLinks } from "../constants"
import { useState } from "react";
import Logo from "../assets/icons/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <nav className="w-full flex py-6 justify-between items-center navbar border-b-[2px] border-black">
            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                <img src={Logo} alt='little-lemon' className='w-[124px] h-[32px] mr-10'/>
                {
                    navLinks.map((link, index) => (
                        <li key={link.id} className="font-markazi font-normal cursor-pointer text-[26px] text-black mr-10">
                            {
                                link.id[0] === '#' ? <a href={`${link.id}`}>{link.title}</a> : <Link to={`${link.id}`}>{link.title}</Link>
                            }
                        </li>
                    ))
                }
            </ul>

            <div className="flex sm:hidden">
                <img></img>
            </div>
        </nav>
    );
}

export default Navbar