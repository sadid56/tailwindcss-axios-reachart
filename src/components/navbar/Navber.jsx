import { useState } from "react";
import Link from "./link/link";
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';
const Navber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/contact', id: 3, name: 'Contact' },
        { path: '/products/:id', id: 4, name: 'Product Details' },
        { path: '*', id: 5, name: 'Not Found' },
      ];
      
    return ( 
        <nav className="bg-black text-white py-2">
           <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        }
           
           </div>
            <ul className={`md:flex absolute bg-black p-5 space-y-5 md:space-y-0 duration-1000 md:static
            ${open ? 'top-10' :'-top-60'}
            `}>
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>
        </nav>
     );
}
 
export default Navber;