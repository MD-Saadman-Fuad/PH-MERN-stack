import React from 'react';
import { useRef } from 'react';
const UnControlledField = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='email'  required/>
                <br />
                <input ref={passwordRef} type="password" name="password"  placeholder='password'  required/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledField;