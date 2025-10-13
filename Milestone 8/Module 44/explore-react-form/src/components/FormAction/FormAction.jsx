import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) => {
        // formData.preventDefault();
        console.log(formData.get('name'));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default FormAction;