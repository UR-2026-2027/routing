import { Link } from "react-router-dom";

function Home() {
    const clients = [
        { id: 1, imie: "Anna", nazwisko: "Nowak", wiek: 28, dataUrodzenia: "1998-03-12", pesel: "00000000001", numerTelefonu: "000000001" },
        { id: 2, imie: "Jan", nazwisko: "Kowalski", wiek: 34, dataUrodzenia: "1992-07-24", pesel: "00000000002", numerTelefonu: "000000002" },
        { id: 3, imie: "Maria", nazwisko: "Wisniewska", wiek: 41, dataUrodzenia: "1985-01-08", pesel: "00000000003", numerTelefonu: "000000003" },
        { id: 4, imie: "Piotr", nazwisko: "Wojcik", wiek: 22, dataUrodzenia: "2004-10-30", pesel: "00000000004", numerTelefonu: "000000004" },
        { id: 5, imie: "Zofia", nazwisko: "Kaminska", wiek: 56, dataUrodzenia: "1970-05-19", pesel: "00000000005", numerTelefonu: "000000005" },
        { id: 6, imie: "Tomasz", nazwisko: "Lewandowski", wiek: 30, dataUrodzenia: "1996-11-02", pesel: "00000000006", numerTelefonu: "000000006" },
        { id: 7, imie: "Agnieszka", nazwisko: "Zielinska", wiek: 19, dataUrodzenia: "2007-02-14", pesel: "00000000007", numerTelefonu: "000000007" },
        { id: 8, imie: "Michal", nazwisko: "Szymanski", wiek: 47, dataUrodzenia: "1979-08-03", pesel: "00000000008", numerTelefonu: "000000008" },
        { id: 9, imie: "Katarzyna", nazwisko: "Dabrowska", wiek: 25, dataUrodzenia: "2001-04-27", pesel: "00000000009", numerTelefonu: "000000009" },
        { id: 10, imie: "Pawel", nazwisko: "Kozlowski", wiek: 63, dataUrodzenia: "1963-09-11", pesel: "00000000010", numerTelefonu: "000000010" },
    ];

    return (
        <>
            <div>
                <h1>Home Page</h1>
                <p>Welcome to the home page!</p>
            </div>
            {clients.map(client => (
                <Link key={client.id} 
                to={"/client/" + client.id} 
                state={{ client: client }}>
                    <div>
                        <h2>{client.imie} {client.nazwisko}</h2>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Home