"use client"

import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Plus } from "lucide-react"

// This is a placeholder for your album data. In a real application, you would fetch this from an API or database.
const initialAlbums = [
  { id: 1, name: "Family Vacation 2023", coverImage: "/placeholder.svg?height=300&width=300", imageCount: 42 },
  { id: 2, name: "Birthday Party", coverImage: "/placeholder.svg?height=300&width=300", imageCount: 15 },
  { id: 3, name: "Christmas 2022", coverImage: "/placeholder.svg?height=300&width=300", imageCount: 30 },
]

export default function Albums() {
  const [albums, setAlbums] = useState(initialAlbums)
  const [newAlbumName, setNewAlbumName] = useState("")

  const handleCreateAlbum = (e: React.FormEvent) => {
    e.preventDefault()
    if (newAlbumName.trim()) {
      const newAlbum = {
        id: albums.length + 1,
        name: newAlbumName.trim(),
        coverImage: "/placeholder.svg?height=300&width=300",
        imageCount: 0,
      }
      setAlbums([...albums, newAlbum])
      setNewAlbumName("")
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Albums</h1>

        <form onSubmit={handleCreateAlbum} className="mb-8">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newAlbumName}
              onChange={(e) => setNewAlbumName(e.target.value)}
              placeholder="New album name"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Album
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <Link href={`/albums/${album.id}`} key={album.id} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square">
                  <Image src={album.coverImage || "/placeholder.svg"} alt={album.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{album.name}</h2>
                  <p className="text-gray-600">{album.imageCount} photos</p>
                </div>
              </div>
            </Link>
          ))}
          <button
            onClick={() => document.querySelector("input")?.focus()}
            className="flex items-center justify-center aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-50 transition-colors duration-300"
          >
            <Plus size={48} className="text-gray-400" />
          </button>
        </div>
      </div>
    </main>
  )
}

