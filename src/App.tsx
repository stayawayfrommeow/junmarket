import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';
import { useEffect } from 'react';

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090/');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/login' && !pb.authStore.isValid) {
      navigate('/login');
    }
  }, []);

  return <Outlet />;
}

export default App;
