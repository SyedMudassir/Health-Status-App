import { useState, useEffect } from "react"
import { fetchAllUser } from "../../config/firebase";

function Dashboard() {
    const [users,setUsers] = useState([])
    const [ loading, setLoading ] = useState(true)
    useEffect(()=>{
        fetchAllUser().then(res=>{
            setUsers(res)
            setLoading(false)
        })
    },[])
    return(
        <div className='form'>
             <h3>Dashboard</h3>
          
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Health Status</th>
                        <th>Disease
                        </th>
                    </tr>
                </thead>  
                {loading && <img width="100%" height="100%" src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />}  
                {users.map(item=>{
         return(
             <tbody>
            <tr>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.healthStatus}</td>
            <td>{item.disease}</td>
            </tr>
            </tbody>
         )
     })}
            </table>
    </div>
    )
}
export default Dashboard