import './sidebar.css';

const Sidebar = () => {
    return ( 
        <div className="issues-sidebar">
            <div className="issues-sidebar__my-issues">
                <ul>
                    <li>My Open Issues</li>
                    <li>My Closed Issues</li>
                </ul>
            </div>

            <div className="issues-sidebar__projects">
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidebar;