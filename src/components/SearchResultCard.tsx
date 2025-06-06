import { Restaurant } from "@/types"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { /*Banknote, Warehouse,*/ UserRound, Dot } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
    restaurant: Restaurant
}

console.log("tarjeta de resultados en SearchResultCard.tsx");
console.log("Tipo de cosina en div id=card-content");

export default function SearchResultCard({ restaurant }: Props) {
    return (
        <Link
            to={"/detail/" + restaurant._id}
            className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
        >
            <AspectRatio ratio={16 / 6}>
                <img src={restaurant.imageUrl}
                    className="rounded-md object-cover h-full w-half"
                />
            </AspectRatio>
            <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline text-blue-900">
                    {restaurant.restauranteName}
                </h3>
                <div id="card-content" className="grid md:grid-cols-2 gap2">
                    <div className="flex flex-row flex-wrap text-blue-900">
                        {
                            restaurant.cuisines.map((item, index) => (
                                <span className="flex" key={index}>
                                    <span>{item}</span>
                                    {
                                        index < restaurant.cuisines.length - 1 && <Dot />
                                    }
                                </span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        {/*<div className="flex items-center gap-1 text-blue-900">
                            <Warehouse />
                            {restaurant.estimatedDeliveryTime} Productos
                        </div>
                        <div className="flex items-center gap-1 text-blue-900">
                            <Banknote />
                            ${restaurant.deliveryPrice.toFixed(2)}
                        </div>*/}
                        <div className="flex items-center gap-1 text-blue-900">
                            <UserRound />
                            {restaurant.country} {/*Nobre o direccion de la tienda*/}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}