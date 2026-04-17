
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUser,
    faXmark, 
    faBars, 
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";



import { PosMenuItem  } from "@/constans/posSideMenu";
import { PosSideProps } from "@/types/posSideProps";

export default function PosSidebar ({isOpen, toggle}: PosSideProps) {

    
    return(
       <div className={`grid grid-rows-8 top-0 left-0 h-full fixed rounded-r-2xl bg-gray-50 shadow-2xl transform transition-all duration-700 delay-75 ${isOpen? "w-60" : "w-24"}`}>
            <button className="row-span-1 "><FontAwesomeIcon icon={isOpen? faXmark : faBars} onClick={toggle}/></button>
            <ul className={`flex flex-col px-2 justify-center space-y-10 list-none row-span-5`}>
                {PosMenuItem.map((menu, index) =>
                    <li key={index}>
                        <Link href={menu.href} className={`flex gap-2 transform transition-all  duration-700  ml-5  ${isOpen? "justify-start" : "justify-center"}`} ><FontAwesomeIcon icon={menu.icon} />
                            <span className={`transition-all transform duration-700 delay-300 ${isOpen? "opacity-100 ml-2 " : "opacity-0 w-0 overflow-hidden"}`}>{menu.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
            <div className="px-2 row-span-1 ">
                <Link href={"#"} className={`flex gap-2 transform transition-all  duration-700  ml-5  ${isOpen? "justify-start" : "justify-center"}`}>
                    <FontAwesomeIcon icon={faUser}/><span className={`transition-all transform duration-700 delay-300 ${isOpen? "opacity-100 ml-2 " : "opacity-0 w-0 overflow-hidden"}`}>User</span>
                </Link>
            </div>
       </div>
    )
}