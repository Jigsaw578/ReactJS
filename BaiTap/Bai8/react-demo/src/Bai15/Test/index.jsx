import React, { useState } from 'react';

export default function B15Test() {
    const [form, setForm] = useState({
        name: 'Hello',
        email: 'Test@gmail.com',
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(11, form);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name' >Name:</label>

                <input id='name' name='name' value={form.name} onChange={e => {
                    setForm({ ...form, name: e.target.value })
                }} />

                <label htmlFor='email'>Email:</label>

                <input id='email' name='email' value={form.email} onChange={e => {
                    setForm({ ...form, email: e.target.value })
                }} />


                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}