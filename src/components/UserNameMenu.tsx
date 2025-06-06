import { useAuth0 } from "@auth0/auth0-react"
import { ArrowRightFromLine, CircleUserRound } from "lucide-react"
import {
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuItem
} from "./ui/dropdown-menu"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export default function UserNameMenu() {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center px-3 font-bold hover:text-blue-900 gap-2">
        <CircleUserRound
          className="text-blue-900" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>

        <DropdownMenuItem>
          <Link to="/manage-restaurant"
            className="font-bold hover:text-blue-900"
          >Administar Productos</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/user-profile"
            className="font-bold hover:text-blue-900"
          >Perfil</Link>
        </DropdownMenuItem>

        <Separator></Separator>
        <DropdownMenuItem>
          <Button className="flex flex-1 font-bold bg-blue-900"
            onClick={() => logout()}
          ><ArrowRightFromLine />Salir</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
