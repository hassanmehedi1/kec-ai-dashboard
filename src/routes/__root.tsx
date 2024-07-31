import { createRootRoute, Outlet } from "@tanstack/react-router";

// components
import { ModeToggle } from "@/components/shared/ModeToggle";
import Logo from "../assets/logo.png";
import { Button } from "@/components/ui/Button";
import { Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-3 flex gap-2 justify-between items-center">
        <div>
          <img className="w-[214px] h-[24px]" src={Logo} alt="" />
        </div>

        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="rounded-full border text-blue-800"
          >
            <Video className="mr-2 h-4 w-4" /> View All Camera
          </Button>

          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold uppercase">LogOut</h1>
          </div>

          <ModeToggle />
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
