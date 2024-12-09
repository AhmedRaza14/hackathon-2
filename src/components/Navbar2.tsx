import React from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  

} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

const navItems: string[] = [
  'Plant pots',
  'Ceramics',
  'Tables',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cutlery'
];

export function Navbar2() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Logo and Actions */}
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl">Avion</span>
            </Link>
          </div>

          {/* Right side: Search and Cart Buttons */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <Input type="search" placeholder="Search..." className="w-full" />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start text-gray-400 hover:text-gray-500">
                    <User className="h-5 w-5 mr-2" />
                    <span></span>
                  </Button>
          </div>
        </div>

        {/* Second Row: Navigation Links */}
        <div className="flex items-center justify-center flex-wrap gap-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href="products"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
