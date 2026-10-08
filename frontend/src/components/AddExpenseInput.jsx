import { useState } from "react"

function AddExpenseInput({ groupId, onAdded }) {
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    async function handleAdd() {
        const res = await fetch(`http://localhost:3000/api/expense/${groupId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ amount: Number(amount), description }),
        })
        if (res.ok) {
            setAmount("")
            setDescription("")
            onAdded()
        }
    }

    return (
        <div>
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What for?" />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
export default AddExpenseInput