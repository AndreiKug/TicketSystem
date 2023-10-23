import { useState } from 'react';

import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import TicketContent from '../TicketContent/TicketContent';
import TicketsList from '../TicketsList/TicketsList';

import './app.css';

function App() {
    const [selectedTicket, setTicket] = useState(null);

    const onTicketSelected = (id) => {
        setTicket(id);
    }


  return (
    <main className="main">
        <Nav />
        <section className="main-section">
            <Sidebar />          
            <TicketsList onTicketSelected={onTicketSelected}/> 
            <TicketContent userID={selectedTicket}/>
        </section>
    </main>
  );
}

export default App;
