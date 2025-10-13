import React from 'react';
import UseInputField from '../../assets/Hooks/UseInputField';
const hookForm = () => {
    // const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted', email, password)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                
                <input defaultValue={email} onChange={emailOnChange} type="email" name="email" placeholder='email'  required/>
                <br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" name="password"  placeholder='password'  required/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default hookForm;