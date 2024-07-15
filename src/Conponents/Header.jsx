
import { Link } from 'react-router-dom';

const Header = () => {
    const navigation =[
        {title: "Home", link:"/"},
        {title: "Services", link:"/services"},
        {title: "About", link:"/about"},
        {title: "Projects", link:"/projects"},
        {title: "Blog", link:"/blog"},
        {title: "Contact", link:"/contact"},
    ]
    return (
        <header className='bg-black text-gray-200 h-20 sticky top-0'>
            <div className=' max-w-screen-xl mx-auto h-full flex items-center justify-between'>
                <Link to={"/"} className='uppercase text-xl font-bold tracking-wide'>RouterTest</Link>
                <div className=' flex items-senter gap-x-7'>
                    {navigation.map(({title,link})=>(
                        <Link
                        to={link}
                        key={title} className='text-sm uppercase font-medium underline
                        underline-offset-2 decoration-[1px] cursor-pointer duration-200'>{title}
                        </Link>
                    ))}
                </div>
            </div>

        </header>
    );
};

export default Header;