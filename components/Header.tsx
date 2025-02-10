"use client"

import { Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Family Gallery
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search images"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/albums" className="text-gray-600 hover:text-gray-900">
                    Albums
                  </Link>
                </li>
                <li>
                  <Link href="/upload" className="text-gray-600 hover:text-gray-900">
                    Upload
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/albums" className="block py-2 text-gray-600 hover:text-gray-900">
              Albums
            </Link>
            <Link href="/upload" className="block py-2 text-gray-600 hover:text-gray-900">
              Upload
            </Link>
          </nav>
          <div className="px-4 pb-4">
            <input
              type="text"
              placeholder="Search images"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      )}
    </header>
  )
}

