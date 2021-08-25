import React, { useState } from 'react'
import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess'

const Login = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = () => setIsSubmitted(true)

    return (
        <div>
            {!isSubmitted ? <FormLogin loginSuccess={submitForm}/> : <FormSuccess/>}
        </div>
    )
}

export default Login