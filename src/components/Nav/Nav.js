import './nav.css';

const Nav = () => {
    return ( 
        <nav className="main-nav">
            <div className="main-nav__top">
                <a href="/"><i className="fa fa-envelope-open"></i></a>
                <a href="/"><i className="fa fa-file-text"></i></a>
            </div>
            <div className="main-nav__bottom">
                <a href="/"><i className="fa fa-question-circle"></i></a>
                <a href="/"><i className="fa fa-user-circle"></i></a>
            </div>
        </nav>
     );
}
 
export default Nav;