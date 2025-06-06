import {Restaurant} from '../types';
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from "./ui/card";
import { Dot } from "lucide-react";

type Props={restaurant:Restaurant}

export default function RestaurantInfo({restaurant}:Props) {
    return (
        <Card className="border-slate-400">
            <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tighter text-orange-500">
                    {restaurant.restauranteName}
                </CardTitle>
                <CardDescription>
                    {restaurant.city},{restaurant.country}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex">
                {
                    restaurant.cuisines.map((item,index)=>(
                        <span className="flex" key={index}>
                            <span>
                                {index<restaurant.cuisines.length-1&&<Dot/>}
                            </span>
                        </span>
                    ))
                }
            </CardContent>
        </Card>
    )
}
