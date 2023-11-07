import { getCart } from "@/db/cart"
import CartEntry from "./cartEntry"

const Cart = async () => {

    const cart = await getCart()
    return (
        <div>
            <h1>Your Cart</h1>
            {cart?.items.map(cartItem => (
                <CartEntry cartItem={cartItem} key={cartItem.id} />
            ))}
        </div>
    )
}

export default Cart