import { useState, useEffect } from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import './ticketsList.css';
import mongoService from '../../services/mongoService';

const TicketsList = (props) => {

    const [users, setUsers] = useState([]);

    const {getAllTickets} = mongoService();

    useEffect(() => {
        getAllTickets()
            .then(firstLoad);
    }, [])

    const firstLoad = (users) => {
        setUsers(users)
    }

    // useEffect(() => {
    //     axios.get('http://localhost:3001/getUsers')
    //         .then(users => setUsers(users.data))
    //         .catch(err => console.log(err))
    // }, [])

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            const date = new Date(item.createdAt);
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
            

            return (              
                <li key={item._id} onClick={() => {props.onTicketSelected(item._id)}}>                
                    <input type="checkbox" />
                    <div className="ticket__container">
                        <div className="ticket__header">{item.question.length > 60 ? item.question.slice(0, 60): item.question}</div>
                        <div className="ticket__footer">
                            <div className="ticket__tags"><span>{item.tag}</span></div>
                            <div className="ticket__timer ticket__timer--new"><span>{formattedDate}</span></div>
                        </div>                                            
                    </div>
                </li>
            )
        });

        return (
            <ul>
                {items.reverse()}
            </ul>
        )
    }

    const items = renderItems(users)


    return ( 
        <div className="tickets">
            <SearchPanel />

            <div className="tickets__list">
                {items}
            </div>
        </div>
     );
}
 
export default TicketsList;