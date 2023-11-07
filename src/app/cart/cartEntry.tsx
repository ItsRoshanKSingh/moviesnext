"use client"

import { cartItemWithMovie } from "@/db/cart"
import Image from 'next/image'
import Link from "next/link"


interface cartEntryType {
    cartItem: cartItemWithMovie
}

const CartEntry = ({
    cartItem: { movie, quantity }

}: cartEntryType) => {

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <Image src={`${movie.imageUrl}`} alt="" height={200} width={200}></Image>
            </div>
            <div>
                <Link href={`/movie/${movie.id}`}>
                    {movie.name}
                </Link>
                <div>Price: 5$</div>
                <div>Total Price: {quantity * 5}</div>
            </div>
            <div className="divide"></div>
        </div>
    )
}

export default CartEntry