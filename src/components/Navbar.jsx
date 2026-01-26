import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { X, Menu } from "lucide-react"

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },]

export default function Navbar() {

  const navElements = navItems.map((item, i) => 
    <li key={i} className="cursor-pointer lg:text-[24px] md:text-[20px]"><a href={item.href} className="relative"> {item.name} </a></li>
  )
  return (
    <nav id="navbar">
      <div className="w-[100%] bg-background p-6 border-b-4 z-1">
        <ul className="flex justify-between max-w-150 mx-auto font-medium">
          {navElements}
        </ul>
      </div>
    </nav>
  )
}
