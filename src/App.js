import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Creations from './components/Creations';
import Invitation from './components/Invitation';
import Court from './components/Court';
import Wallet from './components/Wallet';
import MainLayout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/creations" element={<MainLayout><Creations /></MainLayout>} />
          <Route path="/invitation" element={<MainLayout><Invitation /></MainLayout>} />
          <Route path="/court" element={<MainLayout><Court /></MainLayout>} />
          <Route path="/wallet" element={<MainLayout><Wallet /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
