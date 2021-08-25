import React from 'react'
import { Button } from '../../globalStyles'
import {
    FooterContainer,
    FooterSubcription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput
} from './Footer.Elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubcription>
                <FooterSubHeading>
                    Join  our exclusive membership to 
                    recevie the lastest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubcribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="emai" type="email" placeholder="Your Email"/>
                        <Button fontBig>Subcribe</Button>
                </Form>
            </FooterSubcription>
        </FooterContainer>
    )
}

export default Footer
