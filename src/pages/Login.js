import {
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import { loginAction } from 'actions/authAction';
import { showUserDetailsAction } from 'actions/showUserDetailsAction';
import { CLIENT_ID } from 'actions/types';

import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSuccess = (credential) => {
    const decodedValue = jwt_decode(credential)
    if (Object.keys(decodedValue)?.length > 0) {
      dispatch(loginAction())
      dispatch(showUserDetailsAction(decodedValue));
      return navigate("/user-details");
    }

  }

  return <>
    <div id="loginWrapper">
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <h1>Login Now</h1>
        <GoogleLogin
          onSuccess={({ credential }) => handleOnSuccess(credential)}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  </>
}

export default Login
