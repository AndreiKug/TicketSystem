import './ticketContent.css';

const TicketContent = () => {
    return ( 
        <div className="ticket-content">
        <div className="ticket-content__wrapper">
            <div className="ticket-content__header">
                <a href="/">Ticket url</a>
                <a href="/">Other tickets</a>
            </div>
            <div className="ticket-content__author">
                <span className="author__name">Николай Васенков</span>
                <span className="author__mail">testmail@yandex.ru</span>
            </div>
            <div className="ticket-content__tags">
                <span className="ticket-content__tag">Не запускается</span>
            </div>
        </div>
        

        <div className="tickets-container">
            <div className="ticket-message__wrapper">
                <div className="ticket-message__user">
                    <div className="ticket-message">
                        Здравствуйте! Скажите, пожалуйста, как можно убрать эту кнопку, она очень мешает.
                    </div>
                    <div className="ticket-message__author">Николай Васенков</div>
                </div>
            </div> 
            
            <div className="ticket-message__wrapper admin">
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
            </div> 
        </div>

        <div className="ticket-reply">
            <textarea name="reply" id="" rows="2" spellCheck="false" wrap="soft" placeholder="Enter your reply"></textarea>
            <a className="ticket-reply__button" href="/">Reply </a>
        </div>
        
    </div>
     );
}
 
export default TicketContent;