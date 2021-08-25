import React, { useState, useEffect } from 'react'
import validation from './validation'
import axios from 'axios'
import {
    FormContainer,
    FormWrapper,
    FormHeading,
    FormItems,
    FormInput,
    FormError,
    FormSpan,
    FormLinkLogin,
    FormButton,
    CloseButon
} from './Form.Elements'

const FormSignUp = ({submitForm}) => {


    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setErrors(validation(values))
        setIsCorrect(true)
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const [errors, setErrors] = useState({})

    const [isCorrect, setIsCorrect] = useState(false)

    const [createSuccess, setCreateSuccess] = useState(true)

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isCorrect){

            let request = {
                username: values.username,
                email: values.email,
                password: values.password 
            }
    
            axios.post('http://localhost:8000/register', request)
            .then(resp => {
                console.log(resp);
              if(resp.data.status === 1){submitForm(true)}
              else{
                    setCreateSuccess(false)
                }
            }).catch( err => {
                setCreateSuccess(false)
            })
        }
    }, [errors]);

    return (
        <FormContainer>
            <FormWrapper>
                <CloseButon to="/">X</CloseButon>
                <FormHeading>Create Account</FormHeading>
                <form>
                    <FormItems>
                        <FormInput 
                        type="text"  
                        name="username"
                        placeholder="User Name"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <FormError>{errors.username}</FormError>}
                    </FormItems>
                    <FormItems>
                        <FormInput
                        type="email" 
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.username && <FormError>{errors.email}</FormError>}
                    </FormItems>
                    <FormItems>
                        <FormInput 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <FormError>{errors.password}</FormError>}
                    </FormItems>
                    <FormItems>
                        <FormInput 
                        type="password"  
                        name="password2"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <FormError>{errors.password2}</FormError>}
                    </FormItems>
                    <FormItems>
                        {!createSuccess ? (<FormError>Create Account Unsuccessfull!</FormError>) : (null)}
                    </FormItems>
                    <FormButton
                    onClick={handleFormSubmit}
                    >
                        Sign Up 
                    </FormButton>
                    <FormSpan>Already have an account? Login<FormLinkLogin to="/login"> here</FormLinkLogin>
                    </FormSpan>
                </form>
            </FormWrapper>
        </FormContainer>
    )
}

export default FormSignUp