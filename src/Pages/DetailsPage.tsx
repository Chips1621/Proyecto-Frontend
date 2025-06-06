import { useParams } from "react-router";
import { useGetRestaurantById } from "@/api/RestaurantApi";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import LoadingButton from "@/components/LoadingButton";
import RestaurantInfo from "@/components/RestaurantInfo";
import MenuItemCard from "@/components/MenuItemCard";
import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import OrderSummary from "@/components/OrderSummary";
import { MenuItem } from "@/types";
import CheckOutButton from "@/components/CheckOutButton";
import { UserFormData } from '../forms/user-profile-form/UserProfileForm';

export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
}

export default function DetailPage() {
    const { restaurantId } = useParams();
    const { data: restaurante, isLoading } = useGetRestaurantById(restaurantId);

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem('cartItems-' + restaurantId);
        return storedCartItems ? JSON.parse(storedCartItems) : []
    });

    const addToCart = (menuItem: MenuItem) => {
        setCartItems((prevCartItems: CartItem[]) => {
            //Verificar si existe
            const existingCartItem = prevCartItems.find(
                (cartItem) => cartItem._id === menuItem._id
            );
            //Actualizar si existe
            let updateCartItems;
            if (existingCartItem) {
                updateCartItems = prevCartItems.map((cartItem) =>
                    cartItem._id === menuItem._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            //Agregar si no se encuentra
            updateCartItems = [
                ...prevCartItems, {
                    _id: menuItem._id,
                    name: menuItem.name,
                    price: menuItem.price,
                    quantity: 1,
                }
            ]
            //guardar carrito
            sessionStorage.setItem(
                'cartItems-' + restaurantId, JSON.stringify(updateCartItems)
            )
            return updateCartItems;
        })
    }

    const removeFromCart = (cartItem: CartItem) => {
        setCartItems((prevCartItems) => {
            const updateCartItems = prevCartItems.filter(
                (item) => cartItem._id !== item._id
            );
            //actualizar carrito
            sessionStorage.setItem(
                'cartItems-' + restaurantId, JSON.stringify(updateCartItems)
            )

            return updateCartItems;
        })
    }

    const onCheckOut = async (UserFormData: UserFormData) => {
        console.log(UserFormData)
    }

    if (isLoading || !restaurante) {
        return (<LoadingButton />)

    }
    return (
        <div className="flex flex-col gap-10">
            <AspectRatio ratio={16 / 5}>
                <img src={restaurante.imageUrl}
                    className="rounded-md object-cover h-full w-full" />
            </AspectRatio>
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <RestaurantInfo restaurant={restaurante} />
                    <span className="text-2xl font-bold tracking-tight">Menu</span>
                    {restaurante.menuItems.map((menuItem, key) =>
                        <MenuItemCard MenuItem={menuItem} key={key}
                            addToCart={() => addToCart(menuItem)}
                        />
                    )}
                </div>
                <div>
                    <Card>
                        <OrderSummary
                            restaurant={restaurante}
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                        />
                        <CardFooter>
                            <CheckOutButton
                                disabled={cartItems.length === 0}
                                onCheckOut={onCheckOut}
                            />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}