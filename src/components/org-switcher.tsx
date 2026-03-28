"use client";

import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { IconCheck, IconPlus, IconStackFront } from "@tabler/icons-react";

export function OrgSwitcher() {
  const { isMobile, state } = useSidebar();
  const router = useRouter();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-primary flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg text-xl">
                🍽️
              </div>
              <div
                className={`grid flex-1 text-left text-sm leading-tight transition-all duration-200 ease-in-out ${
                  state === "collapsed"
                    ? "invisible max-w-0 overflow-hidden opacity-0"
                    : "visible max-w-full opacity-100"
                }`}
              >
                <span className="truncate font-medium">
                  Table{""}
                  <span className="truncate font-bold text-primary">Mate</span>
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  Connecting People Through Dining
                </span>
              </div>
              <Icons.chevronsUpDown
                className={`ml-auto transition-all duration-200 ease-in-out ${
                  state === "collapsed"
                    ? "invisible max-w-0 opacity-0"
                    : "visible max-w-full opacity-100"
                }`}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Hotels
            </DropdownMenuLabel>
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center overflow-hidden rounded-md border">
                <IconStackFront className="size-3.5 shrink-0" />
              </div>
              Blue Star
              <IconCheck className="ml-auto size-4" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={() => {
                router.push("/dashboard/workspaces");
              }}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <IconPlus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">
                Add Hotels
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
