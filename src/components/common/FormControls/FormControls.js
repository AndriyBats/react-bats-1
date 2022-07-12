import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

export const  FormControl = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl+ " "+ (hasError ? styles.error : "") }>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} =props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} =props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export const createField = (type, name, component, placeholder, validate) => <div>
    <Field
        type={type}
        name={name}
        component={component}
        placeholder={placeholder}
        validate={validate}
    />
</div>