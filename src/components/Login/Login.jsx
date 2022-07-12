import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import style from "./../common/FormControls/FormControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField(null, 'email', Input, 'Email', [required])}     
            {createField('password', 'password', Input, 'Password', [required])}
            {createField('checkbox', 'rememberMe', Input, null, null)}
            <div>
                remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate replace to="/profile"/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login})(Login);
