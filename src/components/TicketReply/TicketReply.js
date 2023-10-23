import './ticketReply.css';

const TicketReply = () => {
    return ( 
        <div className="ticket-reply">
            <textarea name="reply" id="" rows="2" spellCheck="false" wrap="soft" placeholder="Enter your reply"></textarea>
            <a className="ticket-reply__button" href="/">Reply </a>
        </div>
     );
}
 
export default TicketReply;