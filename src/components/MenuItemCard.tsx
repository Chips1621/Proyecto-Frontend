import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { MenuItem } from '../types';

type Props={
    MenuItem:MenuItem;
    addToCart:()=>void;
}
export default function MenuItemCard({MenuItem, addToCart}:Props) {
    return (
        <Card className="cursor-pointer" onClick={addToCart}>
            <CardHeader>
                <CardTitle>{MenuItem.name}</CardTitle>
            </CardHeader>
            <CardContent>
                ${(MenuItem.price)}
            </CardContent>
        </Card>
    )
}
