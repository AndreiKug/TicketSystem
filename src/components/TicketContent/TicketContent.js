import {useState, useEffect} from 'react';
import mongoService from '../../services/mongoService';

import TicketPreview from '../TicketPreview/TicketPreview';
import TicketReply from '../TicketReply/TicketReply';

import './ticketContent.css';


const TicketContent = (props) => {

    const [ticket, setTicket] = useState(null);

    const {getOneTicket} = mongoService();

    useEffect(() => {
        updateTicket();
    }, [props.userID])

    const updateTicket = () => {
        const {userID} = props;
        if (!userID) return;

        getOneTicket(userID)
            .then(onTicketLoad);
    }

    const onTicketLoad = (ticket) => {
        setTicket(ticket);
    }

    const content = !props.userID ? <TicketPreview /> : <View ticket={ticket}/>

    return ( 
        <div className='ticket-content'>
            {content}  
        </div>

        // {props.userID}
     );
}

const View = ({ticket}) => {

    if (!ticket) {
        return;
    }

    const {name, email, tag, question, createdAt} = ticket;

    return (
        <>
            <div className="ticket-content__wrapper">
                <div className="ticket-content__header">
                    <a href="/">Ticket url</a>
                    <a href="/">Other tickets</a>
                </div>
                <div className="ticket-content__author">
                    <span className="author__name">{name}</span>
                    <span className="author__mail">{email}</span>
                </div>
                <div className="ticket-content__tags">
                    <span className="ticket-content__tag">{tag}</span>
                </div>
            </div>
            

            <div className="tickets-container">
                <div className="ticket-message__wrapper">
                    <div className="ticket-message__user">
                        <div className="ticket-message">
                            {question}
                        </div>
                        <div className="ticket-message__author">{name}</div>
                    </div>
                </div> 
                
                {/* <div className="ticket-message__wrapper admin">
                    <div className="ticket-message__admin">
                        <div className="ticket-message">
                            Добрый вечер! Для решения этой ситуации нужно нажать Alt+F4.
                        </div>
                        <div className="ticket-message__author">Admin</div>
                    </div>                            
                </div>
                
                <div className="ticket-message__wrapper">
                    <div className="ticket-message__user">
                        <div className="ticket-message">
                            Спасибо.
                        </div>
                        <div className="ticket-message__author">Николай Васенков</div>
                    </div>
                </div>  */}

                <TicketReply />
            </div>
        </>
    )
    
}

export default TicketContent;