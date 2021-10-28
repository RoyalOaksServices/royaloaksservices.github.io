import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { send } from 'emailjs-com';
import EmailFromUtils from '../utils/EmailForm'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { getCartTotal } from '../utils/Cart'

export default function EmailForm(props) {
    const { cartData } = props;
    const { service, template, user } = EmailFromUtils;
    const [showRequestMessage, setShowRequestMessage] = useState(false)
    const [requestErrorMessage, setShowRequestErrorMessage] = useState()
    const [userEmail, setEmail] = useState('')
    const [userName, setName] = useState('')
    const [userNumber, setNumber] = useState('')

    const handleSubmit = (data) => {
        const emailData = cartData.reduce((acc, item, index) => {
            acc[`service_${index+1}`] = item.title
            return acc
        }, {})

        const params = {
            ...emailData,
            userEmail,
            userName,
            userNumber,
            quoteTotal: getCartTotal(cartData)
        }

        send(service, template, params, user).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setShowRequestMessage(true);
         }, function(error) {
            setShowRequestErrorMessage(error)
            console.log('FAILED...', error);
         });
    }

    const RequestMessageComponent = () => {
        return <div style={{ padding: '8px' }}>Request sent! Please allow up to 48 hours for a reply!</div>
    }

    const RequestMessageErrorComponent = () => {
        return <div style={{ padding: '8px' }}>Something went wrong: {requestErrorMessage}</div>
    }

    const MessageComponent = () => {
        if (requestErrorMessage) {
            return <RequestMessageErrorComponent />
        } else if (showRequestMessage) {
            return <RequestMessageComponent />
        } else {
            return null
        }
    }
    
    return (
        <div>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
                action="mailto:royaloaksenterprise@gmail.com"
                method="post" 
                enctype="text/plain"
            >
                <TextValidator
                    label="Email"
                    placeholder='Enter email'
                    onChange={event => setEmail(event.target.value)}
                    name="email"
                    value={userEmail}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator 
                    label="Name"
                    placeholder='Enter your name'
                    onChange={event => setName(event.target.value)}
                    name="name"
                    value={userName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator 
                    label="Phone Number"
                    placeholder='Enter phone number'
                    onChange={event => setNumber(event.target.value)}
                    name="phone"
                    value={userNumber}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
            <MessageComponent />
        </div>
    );
}