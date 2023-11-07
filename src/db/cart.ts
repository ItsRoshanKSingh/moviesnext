import { Prisma } from '@prisma/client';
import { cookies } from 'next/dist/client/components/headers';
import prisma from "./prisma";

export type CartWithMovie = Prisma.CartGetPayload<{
    include: { items: { include: { movie: true } } }
}>

export type cartItemWithMovie = Prisma.CartItemGetPayload<{
    include: { movie: true }
}>

export type ShoppingCart = CartWithMovie & {
    size: number
    subtotal: number
}

export async function createCart(): Promise<ShoppingCart> {
    const newCart = await prisma.cart.create({
        data: {}
    })

    cookies().set("loaclCart", newCart.id)

    return {
        ...newCart,
        size: 0,
        subtotal: 0,
        items: []
    }
}

export async function getCart(): Promise<ShoppingCart | null> {
    const localCartId = cookies().get("loaclCart")?.value

    const cart = localCartId ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { movie: true } } }
    }) :
        null

    if (!cart) return null

    return {
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart.items.reduce((acc, item) => acc + item.quantity * 5, 0)
    }
}