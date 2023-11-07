"use server"

import { createCart, getCart } from "@/db/cart";
import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementCart(movieId: string) {
    const cart = await getCart() ?? await createCart()

    const movieInCart = cart.items.find(
        (item) => item.movieId = movieId
    )

    if (movieInCart) {
        await prisma.cartItem.update({
            where: { id: movieInCart.id },
            data: { quantity: { increment: 1 } }
        })
    } else {
        await prisma.cartItem.create({
            data: {
                cartId: cart.id,
                movieId,
                quantity: 1,
            }
        })
    }

    revalidatePath("/movie/[id]")
}