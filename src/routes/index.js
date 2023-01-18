// React Router
import {
  Route,
  Routes
} from 'react-router-dom';

// 404 Route
import NoMatch from './notFound';

// Pages
import Login from 'pages/Login';
import UserDetails from 'pages/UserDetails';

const RoutesPage = () => {
  return <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route exact path="/user-details" element={<UserDetails />}></Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
}

export default RoutesPage;
