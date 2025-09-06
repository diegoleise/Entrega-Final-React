
import { Navigate } from 'react-router-dom'


function RutasProtegidas({  isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


export default RutasProtegidas