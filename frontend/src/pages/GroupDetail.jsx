import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import AddExpenseInput from "../components/AddExpenseInput" // fix this path to match your folder

function GroupDetail() {
    const { id } = useParams()
    const [expenses, setExpenses] = useState([])

   async function fetchExpenses() {
    const response = await fetch(`http://localhost:3000/api/expense/${id}`, { 
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    const data = await response.json()
    setExpenses(data.expenses) 
}

    useEffect(() => {
        fetchExpenses()
    }, [id])

    return (
        <div>
            <AddExpenseInput groupId={id} onAdded={fetchExpenses} />
        </div>
    )
}

export default GroupDetail