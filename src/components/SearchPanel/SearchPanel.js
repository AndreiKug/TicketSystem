import './searchPanel.css'

const SearchPanel = () => {
    return ( 
        <div className="tickets__search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
     );
}
 
export default SearchPanel;