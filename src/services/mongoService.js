import axios from "axios";

const mongoService = () => {

    const getAllTickets = async () => {
        return await axios.get('http://localhost:3001/getUsers')
                    .then(res => res.data)
                    .catch(err => console.log(err))
    }

    const getOneTicket = async (id) => {
        return await axios.get(`http://localhost:3001/getUser/${id}`)
                    .then(res => res.data)
                    .catch(err => console.log(err))
    }


    return {
        getAllTickets,
        getOneTicket
    }
}
 
export default mongoService;