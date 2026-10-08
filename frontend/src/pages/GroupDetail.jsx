function GroupDetail(){
    import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const { id } = useParams()
const [expenses, setExpenses] = useState([])

async function fetchExpenses() {
    // your existing "get expenses of a group" fetch goes here, then:
    // setExpenses(data.expenses)
}

useEffect(() => { fetchExpenses() }, [id])


<AddExpenseInput groupId={id} onAdded={fetchExpenses} />



return
}

export default GroupDetail