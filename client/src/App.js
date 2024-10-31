
import { Route, Routes , Navigate} from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';

const ProtectedRoutes = ({children}) => {
  const isLoggedIn = localStorage.getItem('user:token') != null || true;
  
  if(!isLoggedIn) {
    return <Navigate to={'/users/sign_in'}/>
  }else if (isLoggedIn && ['/sign_in','sign_up'].includes[window.location.pathname]){
    return <Navigate to={'/'}/>
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route path="/" element = {
        <ProtectedRoutes>
          <Dashboard/>
        </ProtectedRoutes>
      } />
      <Route path="/users/sign_up" element = {
        <ProtectedRoutes>
        <Form isSignInPage = {true}/>
        </ProtectedRoutes>
        } />

      <Route path="/users/sign_up" element = {
        <ProtectedRoutes>
        <Form isSignInPage = {false}/>
        </ProtectedRoutes>
        
        } />
      
    </Routes>
    // <div className="bg-[#e1edff] h-screen flex justify-center item-center">
    // {/* {<Form/> } */}
    // <Dashboard/>
    // </div>
  );
}

export default App;
