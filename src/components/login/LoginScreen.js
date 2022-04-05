import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext'

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Franco'
      }
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    });

  }
   
  return (
    <div
      className="container mt-5">
      
      <h1>LoginScreen</h1>
      <hr></hr>

      <button
        className="btn btn-primary"
        onClick={handlerLogin}>
        Login
      </button>
    </div>
  )
}
