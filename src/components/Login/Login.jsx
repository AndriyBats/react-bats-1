import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import style from "./../common/FormControls/FormControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    component={Input}
                    placeholder={'Email'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type={'password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    placeholder={'Password'}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
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
