import { Restaurant } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Dot } from "lucide-react";

type Props = { restaurant: Restaurant }

export default function RestaurantInfo({ restaurant }: Props) {
    return (
        <Card className="border-slate-400">
            <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tighter text-blue-900">
                    {restaurant.restauranteName}
                </CardTitle>
                <CardDescription>
                    {restaurant.city},{restaurant.country}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 text-blue-900">
                {restaurant.cuisines.map((item, index) => (
                    <span className="flex items-center" key={index}>
                        <span>{item}</span>
                        {index < restaurant.cuisines.length - 1 && <Dot className="w-4 h-4 mx-1" />}
                    </span>
                ))}
            </CardContent>
        </Card>
    )
}
