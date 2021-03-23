import React, { useState } from 'react'

export default function Register() {

    const [values, setValues] = useState({
        avatar: '',
        email: '',
        password: ''
    });

    const handleFile = async (event) => {
        const file = event.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        
        const resp = await fetch('http://localhost:7000/upload', {
            method: 'POST',
            body: fd
        });
        const result = await resp.json();
        setValues({ ...values, avatar: result.fileURL });
    };

    const handleEmail = (event) => {
        const val = event.target.value;
        setValues({ ...values, email: val });
    };

    const handlePassword = (event) => {
        const val = event.target.value;
        setValues({ ...values, password: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" name="file" onChange={handleFile} />
                </div>
                <div>
                    <label htmlFor="">Adresse email</label>
                    <input type="email" onChange={handleEmail} value={values.email} />
                </div>

                <div>
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" onChange={handlePassword} value={values.password}/>
                </div>

                <div>
                    <button>Enregistrer</button>
                </div>
            </form>
        </div>
    )
}
