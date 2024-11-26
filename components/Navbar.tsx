"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  return (
    <header className=" top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-yellow-400" />
              <span className="font-neue-machina text-xl font-bold text-white">MoonEX</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Connect Wallet
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-raleway text-sm font-semibold leading-6 text-white transition-colors hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Connect Wallet
          </Button>
        </div>
      </nav>
    </header>
  )
}

