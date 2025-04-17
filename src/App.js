import { useState, useEffect } from 'react'; // <- Importa hooks
import { auth } from './firebase'; // <- Importa auth
import { onAuthStateChanged } from "firebase/auth";
import { Home } from './pages/Home'; // <- Importa Home
import { Auth } from './components/Auth'; // <- Importa Auth

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      {user ? <Home /> : <Auth />}
    </div>
  );
}

export default App; // <- Exporta como default