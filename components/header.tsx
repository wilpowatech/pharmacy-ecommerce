"use client";

import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart-provider";
import { CartSheet } from "@/components/cart-sheet";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">P</span>
            </div>
            <span className="text-xl font-bold text-primary">PharmaCare</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/?category=pain-relief"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Pain Relief
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Analgesics and anti-inflammatory medications
                        </p>
                      </Link>
                      <Link
                        href="/?category=vitamins"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Vitamins & Supplements
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Essential nutrients and dietary supplements
                        </p>
                      </Link>
                      <Link
                        href="/?category=cold-flu"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Cold & Flu
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cough, cold, and flu medications
                        </p>
                      </Link>
                      <Link
                        href="/?category=first-aid"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          First Aid
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Bandages, antiseptics, and wound care
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center gap-4 px-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search medications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/about" className="text-lg font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
                <Link href="/faq" className="text-lg font-medium">
                  FAQ
                </Link>
                <Link href="/shipping" className="text-lg font-medium">
                  Shipping Info
                </Link>
                <Link href="/support" className="text-lg font-medium">
                  Support
                </Link>
                <Link
                  href="/admin/login"
                  className="text-lg font-medium text-primary"
                >
                  Admin Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/admin/login" className="hidden md:block">
            <Button variant="ghost" size="sm">
              Admin Login
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
}
