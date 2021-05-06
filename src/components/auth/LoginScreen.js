import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector( state => state.ui );

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Inicio de sesión</h3>
            <form className="auth__form animate__animated animate__fadeIn animate__faster" onSubmit={handleLogin}>
                <input 
                    className="auth__input"
                    type="text"
                    autoComplete="off"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="btn"
                    type="submit"
                    disabled={loading}
                >
                    Iniciar sesión
                </button>

                <hr />
                <div className="auth__social-networks">
                    <p>Inicia sesión con tu cuenta de google</p>
                </div>
                <div className="google-btn" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Iniciar con Google</b>
                    </p>
                </div>

                <Link
                    className="auth__link" 
                    to = "/auth/register"
                >
                    Crear nueva cuenta
                </Link>

            </form>
        </>
    )
}

export default LoginScreen
