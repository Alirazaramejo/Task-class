
import Email from '../Email/Email';

function Header() {
   
    return (
        <div className='container mx-auto md:flex md:items-center md:justify-between py-5'>
            <ul className='flex justify-between text-white gap-10'>
                <li>
                    <h3 className="text-xl font-semibold">JANELLE BROWN</h3>
                </li>
                <li className='hidden md:block text-base font-medium border-b-2'>ABOUT</li> {/* Hide on medium screens and below */}
                <li className="hidden md:block text-base font-medium border-transparent border-b-2 hover:border-white">WORK</li> {/* Hide on medium screens and below */}
            </ul>
            <div className="hidden md:flex items-center gap-3"> {/* Hide on medium screens and below */}
                <h4 className="text-white font-medium">LET'S CONNECT</h4>
               <Email/>
            </div>
        </div>
    );
}

export default Header;

