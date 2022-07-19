import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li className={location.pathname === '/creations'? 'activeSidebarMenu' : ''}><Link  to='/creations'>Creations</Link></li>
        <li className={location.pathname === '/invitation'? 'activeSidebarMenu' : ''} ><Link to='/invitation'>Invitation</Link></li>
        <li className={location.pathname === '/court'? 'activeSidebarMenu' : ''} ><Link to='/court'>Court</Link></li>
        <li className={location.pathname === '/wallet'? 'activeSidebarMenu' : ''} ><Link to='/wallet'>Wallet</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;