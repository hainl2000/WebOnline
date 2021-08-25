import React from 'react'
import { FormContainer, FormWrapper, FormSuccessText, SuccessImage } from './Form.Elements'


function FormSuccess() {
    return (
        <div>
            <FormContainer>
                <FormWrapper>
                <SuccessImage src={require('../../images/svg-4.svg').default}></SuccessImage>
                </FormWrapper>
            </FormContainer>
        </div>
    )
}

export default FormSuccess
