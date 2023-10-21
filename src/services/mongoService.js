import axios from "axios";

const mongoService = () => {



    const getAllTickets = async () => {
        return await axios.get('http://localhost:3001/getUsers')
                    .then(res => res.data)
                    .catch(err => console.log(err))
}

    return {
        getAllTickets
    }
}
 
export default mongoService;