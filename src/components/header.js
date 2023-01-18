
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'actions/authAction';

const Header = ({ heading = "Zurich Digital" }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData = {} } = useSelector((state) => state?.googleUserDetails);

  const handleLogout = () => {
    dispatch(logoutAction())
    return navigate("/");
  }


  return <header id="topHeader">
    <div>{heading}</div>
    {Object.keys(userData)?.length > 0 && <button onClick={() => handleLogout()} >Logout</button>}

  </header>
}

export default Header;
