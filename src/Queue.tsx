import { useState } from 'react'

function Queue() {
    const [ticket, setTicket] = useState("")
    const [queue, setQueue] = useState([])
    const [curr, setCurr] = useState("")

    const addTicket = () => {
        if (!ticket) return

        setQueue(prev => [...prev, ticket]);
        setTicket("");
    }

    const serveCustomer = () => {
        if (queue.length === 0) return
        setCurr(queue[0])
        setQueue(prev => prev.slice(1))
    }
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
                <div>
                    <h1>Ticket Support</h1>
                    <div>
                        <input type="text" value={ticket} placeholder='Enter Customer Name' onChange={(e) => setTicket(e.target.value)} />
                        <button onClick={addTicket}>Add Ticket</button>
                        <button onClick={serveCustomer}>Serve</button>
                    </div>
                    <h3>Waiting Customers</h3>
                    <div>
                        {
                            queue.map((ticket, index) => (
                                <li key={index}>{ticket}</li>
                            ))
                        }
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h3>Current Customer</h3>
                    <div style={{ border: "1px solid black", height: "100px", width: "200px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <h4>{curr}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queue