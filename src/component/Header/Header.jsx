
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
           <header className='flex justify-between p-4 mx-4 items-center'>
           <h1 className='text-4xl font-bold border-b-2'>Knowledge Cafe</h1>
             <img src={profile } alt="" />
           </header>
      
        </div>
    );
};

export default Header;