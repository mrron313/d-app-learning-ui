import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li><Link className={location.pathname === '/creations'? 'activeSidebarMenu' : ''} to='/creations'>Creations</Link></li>
        <li><Link className={location.pathname === '/invitation'? 'activeSidebarMenu' : ''} to='/invitation'>Invitation</Link></li>
        <li><Link className={location.pathname === '/court'? 'activeSidebarMenu' : ''} to='/court'>Court</Link></li>
        <li><Link className={location.pathname === '/wallet'? 'activeSidebarMenu' : ''} to='/wallet'>Wallet</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;