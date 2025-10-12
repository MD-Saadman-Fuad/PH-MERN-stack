import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter Name'/>
                <br />
                <input type="email" name='email' placeholder='Enter Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;