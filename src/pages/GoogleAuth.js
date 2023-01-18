import {
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

const clientId = '330388201219-q1dr10okh8v67tiasdn6d61pigg5q0tv.apps.googleusercontent.com';

const GoogleAuth = () => {

  const [user, setUser] = useState({})


  useEffect(() => {
    setUser(user)
  }, [user])

  const handleLogout = () => setUser({})
  const handleOnSuccess = (credential) => {
    const decodedValue = jwt_decode(credential)
    setUser(decodedValue)
  }

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        {Object.keys(user)?.length === 0 && <GoogleLogin
          onSuccess={({ credential }) => handleOnSuccess(credential)}
          onError={() => {
            console.log('Login Failed');
          }}
        />}

        {user?.name?.length > 0 && <button onClick={() => handleLogout()}>Logout</button>}

      </GoogleOAuthProvider>

      <hr />

      {user && <>
        {user?.picture?.length > 0 && <img src={user.picture} alt="user image" />}
        {user?.name?.length > 0 && <h1>Name - {user.name}</h1>}
      </>}

    </div>
  );
}

export default GoogleAuth;
