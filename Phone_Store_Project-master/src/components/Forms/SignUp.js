import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'

const SignUp = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = () => setIsSubmitted(true)

    return (
        <div>
            {!isSubmitted ? <FormSignUp submitForm={submitForm}/> : <FormSuccess/>}
        </div>
    )
}

export default SignUp
