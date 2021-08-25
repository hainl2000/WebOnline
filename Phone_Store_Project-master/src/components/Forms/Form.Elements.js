import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
    background: #fff;
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const FormWrapper = styled.div`
    margin-top: 0;
    background-color: #101522;
    min-width: 500px;
    min-height: 600px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 5px;
`;

export const FormHeading = styled.h2`
    color: #4b59f7;
    text-align: center;
    margin: 30px 0px 30px 0px;
`;

export const FormItems = styled.div`
    margin: 15px;
    color: #969292;
    font-size: 16px;
`;

export const FormInput = styled.input`
    color: #fff;
    background-color: #101522;
    height: 32px;
    font-size: 20px;
    outline: none;
    width: 100%;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom: 2px solid #fff;
    margin-bottom: 15px;
`;

export const FormButton = styled.button`
    display: flex;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
    padding: 10px 60px;
    background: #4b59f7;
    margin: auto;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.1s;
`;

export const FormError = styled.p`
    color: red;
    font-size: 15px;
`;

export const CloseButon = styled(Link)`
    padding-left: 400px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`;

export const FormSpan = styled.span`
    padding-top: 20px;
    font-size: 20px;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    font-weight: 500;
`;

export const FormLinkLogin = styled(Link)`
    margin-left: 3px;
    text-decoration: none;
    color: #4b59f7;
    font-weight: 600;
`;

export const FormSuccessText = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    min-width: 370px;
    font-size: 50px;
    font-weight: 900;
    color: #4b59f7;
`;

export const SuccessImage = styled.img`
    max-width: 450px;
    display: flex;
    justify-content: center;
    padding-left: 30px;
    border: 0;
`;