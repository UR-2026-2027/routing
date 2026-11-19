import { useParams, useLocation } from 'react-router-dom'

function Client() {
    const location = useLocation();

    const client = location.state?.client;

    return (
        <div>
            <h1>Client Page</h1>
            <p>Client ID: {client.id}</p>
            <p>Client Name: {client.imie} {client.nazwisko}</p>
            <p>Client Age: {client.wiek}</p>
            <p>Client Date of Birth: {client.dataUrodzenia}</p>
            <p>Client PESEL: {client.pesel}</p>
            <p>Client Phone Number: {client.numerTelefonu}</p>
        </div>
    )
}

export default Client