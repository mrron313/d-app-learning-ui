import { Link, useLocation } from "react-router-dom";
import MenuIcon1 from "../../assets/brick-icon.png";
import MenuIcon2 from "../../assets/book-icon.png";
import MenuIcon3 from "../../assets/envelope-icon.png";
import MenuIcon4 from "../../assets/bank-icon.png";
import MenuIcon5 from "../../assets/wallet-icon.png";

function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        {/* <li className={location.pathname === '/course'? 'activeSidebarMenu' : ''}><Link  to='/course'><img alt="menu-icon" src={MenuIcon1} /> Course </Link></li> */}
        <li className={location.pathname === '/creations'? 'activeSidebarMenu' : ''}>
          <Link  to='/creations'><img alt="menu-icon" src={MenuIcon2} /> <span>Creations</span> </Link>
        </li>
        <li className={location.pathname === '/invitation'? 'activeSidebarMenu' : ''} >
          <Link to='/invitation'><img alt="menu-icon" src={MenuIcon3} /><span>Invitation</span></Link>
        </li>
        <li className={location.pathname === '/litigation'? 'activeSidebarMenu' : ''} >
          <Link to='/litigation'><img alt="menu-icon" src={MenuIcon4} /> <span>Litigation</span></Link>
        </li>
        <li className={location.pathname === '/wallet'? 'activeSidebarMenu' : ''} >
          <Link to='/wallet'><img alt="menu-icon" src={MenuIcon5} />  <span>Wallet</span> </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;