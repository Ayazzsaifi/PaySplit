import Razorpay from "razorpay"


export const createOrder = async (req, res) => {
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    try {
        const amount = req.body.amount
        const orderPlace = await razorpay.orders.create({ amount: amount, currency: "INR", receipt: `receipt_${Date.now()}` })
        res.status(200).json({ orderPlace })
    }

    catch (e) {
        res.status(500).json({ error: "Internal server error" })
    }
}
