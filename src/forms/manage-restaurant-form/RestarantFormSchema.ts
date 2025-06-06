import { z } from "zod";

export const formSchema = z.object({
    restaurantName: z.string({
        required_error: 'Nombre requerido'
    }),

    citi: z.string({
        required_error: 'Ciudad requerido'
    }),

    country: z.string({
        required_error: 'Nombre requerido'
    }),

    DeliveryPrice: z.coerce.number({
        required_error: 'Precio de entrega requerido',
        invalid_type_error: 'Debe ser numero valido'
    }),

    estimatedDeliveryTime: z.coerce.number({
        required_error: 'Precio de entrega requerido',
        invalid_type_error: 'Debe ser numero valido'
    }),

    MenuItem: z.array(
        z.object({
            name: z.string({ required_error: "Nombre requerido" }).min(1, { message: "Debe tener al menos un caracter" }),
            price:z.coerce.number({ required_error: "Precio requerido" }).min(1, { message: "Precio debe ser valido" })
        })
    ),
    imageFile:z.instanceof(File,{message:'Imagen requerida'})
});