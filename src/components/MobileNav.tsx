import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"

export default function MobileNav() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-900" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {
                        isAuthenticated ? (
                            <span className="flex items-center font-bold gap-2">
                                <CircleUserRound className="text-blue-900" />
                                {user?.email}
                            </span>
                        ) : (
                            <span>Bienvenido</span>
                        )
                    }
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {
                        isAuthenticated ? (
                            <MobileNavLinks />
                        ) : (
                            <Button onClick={() => loginWithRedirect()}
                                className="flex-1 font-bold text-blue-900 bg-blue-500">LogIn</Button>
                        )
                    }
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}