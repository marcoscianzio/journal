import React from 'react'
import { Link } from 'react-router-dom'
import { startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0){
            dispatch(setError("Name is required"));
            return false;
        } else if ( !validator.isEmail(email)){
            dispatch(setError("Email is not valid"));
            return false;
        }
        else if (password !== password2 || password.length < 5){
            dispatch(setError("Password must match and have at least 5 characters"));
            return false;
        }
        dispatch(removeError("Correct form"));
        return true;

    }

    return (
        <>
        <h3 className="auth__title">Registro</h3>
        <form className="auth__form animate__animated animate__fadeIn animate__faster" onSubmit={handleRegister}>
            <input 
                className="auth__input"
                type="text"
                autoComplete="off"
                placeholder="nombre"
                name="name"
                onChange={handleInputChange}
                value={name}
            />
            <input 
                className="auth__input"
                type="text"
                autoComplete="off"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
                value={email}
            />
            <input 
                className="auth__input"
                type="password"
                placeholder="contraseña"
                name="password"
                onChange={handleInputChange}
                value={password}
            />
            <input 
                className="auth__input"
                type="password"
                placeholder="repetir contraseña"
                name="password2"
                onChange={handleInputChange}
                value={password2}
            />
            <button
                className="btn"
                type="submit"
            >
                Registrarse
            </button>

            <hr />

            <Link
                className="auth__link" 
                to = "/auth/login"
            >
                Ya estas registrado? Inicia sesión
            </Link>

        </form>
    </>
    )
}

export default RegisterScreen
