import { useAuth0 } from '@auth0/auth0-react'
import { useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import LoadingButton from "./LoadingButton";
import { Dialog, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import UserProfileForm, { UserFormData } from '../forms/user-profile-form/UserProfileForm';
import { useUser } from "@/api/UserApi";

type Props = {
    onCheckOut: (useFormData: UserFormData) => void;
    disabled: boolean;
}
export default function CheckOutButton({ onCheckOut, disabled }: Props) {
    const {
        isAuthenticated, isLoading: isAuthLoading,
        loginWithRedirect,
    } = useAuth0();

    const { getUser: getUser, /*isLoading: isGetUserLoading*/ } = useUser();
    const { pathname } = useLocation();
    const onLogin = async () => {
        await loginWithRedirect({
            appState: { returnTo: pathname, }
        })
    }

    if (!isAuthenticated) {
        return <Button className='flex-1 bg-blue-900' onClick={onLogin}>
            Inicia Sesion
        </Button>
    }

    if (isAuthLoading || !getUser) {
        return (<LoadingButton />)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={disabled} className="flex flex-1 text-white text-blue-900">
                    Comprar
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[700px] bg-gray-50 md:min-w[400px]">
                <DialogHeader>
                    <DialogTitle>Datos del pedido</DialogTitle>
                    <DialogDescription>Edita o Confirma tu pedido</DialogDescription>
                </DialogHeader>
                <UserProfileForm
                    getUser={getUser}
                    onSave={onCheckOut} 
                    //isLoading={isGetUserLoading}
                />
            </DialogContent>
        </Dialog>
    )
}
