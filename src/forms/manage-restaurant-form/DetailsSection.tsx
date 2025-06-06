import {
  FormControl, FormDescription, FormField, FormItem, FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function DetailsSection() {
  const { control } = useFormContext()
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold"> Detalles</h2>
        <FormDescription>
          Detalles de la tienda
        </FormDescription>
      </div>
      <FormField control={control}
        name="restauranteName"
        render={(
          { field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField control={control}
          name="city"
          render={(
            { field }) => (
            <FormItem className="flex-1">
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField control={control}
          name="country"
          render={(
            { field }) => (
            <FormItem className="flex-1">
              <FormLabel>Encargada</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/*<div className="flex gap-4">
        <FormField control={control}
          name="deliveryPrice"
          render={(
            { field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel>Precio de entrega ($ pesos)</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white"
                  placeholder="100.00"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>*/}

      {/*<div className="flex gap-4">
        <FormField control={control}
          name="estimatedDeliveryTime"
          render={(
            { field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white"
                  placeholder="100.00"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>*/}

    </div>
  )
}
