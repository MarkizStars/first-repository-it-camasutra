import klad from './Navbar.module.css';


const Navbar = ()=>{
    return (
        <nav className={klad.nav}>
        <div className={klad.item}>
           <a href='#'> Profile</a>
        </div>
        <div className={klad.item}>
           <a href='#'> Messages</a>
        </div>
        <div className={klad.item}>
           <a href='#'> News</a>
        </div>
        <div className={klad.item}>
           <a href='#'> Music</a>
        </div>
        <div className={klad.item}>
           <a href='#'> Settings</a>
        </div>
     </nav>
    );
}
export default Navbar;
