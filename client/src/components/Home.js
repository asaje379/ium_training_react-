import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory();

    return (
        <div>
            <h1>
                Bienvenue
            </h1>

            <button>Se connecter</button>
            <button onClick={_ => {
                history.push('/register');
            }}>Créer un compte</button>
        </div>
    )
}
