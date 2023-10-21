import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import TicketContent from '../TicketContent/TicketContent';
import TicketsList from '../TicketsList/TicketsList';

import './app.css';

function App() {


  return (
    <main className="main">
        <Nav />
        <section className="main-section">
            <Sidebar />
            <TicketsList />
            <TicketContent />
        </section>
    </main>
  );
}

export default App;
