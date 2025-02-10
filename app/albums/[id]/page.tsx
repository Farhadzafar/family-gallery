import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This is a placeholder for your album data. In a real application, you would fetch this from an API or database.
const albums = [
  {
    id: 1,
    name: "Family Vacation 2023",
    coverImage: "/placeholder.svg?height=300&width=300",
    images: [
      { id: 1, src: "/placeholder.svg?height=400&width=300", alt: "Beach sunset" },
      { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Family dinner" },
      { id: 3, src: "/placeholder.svg?height=400&width=300", alt: "Mountain hike" },
      { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "City tour" },
    ],
  },
  {
    id: 2,
    name: "Birthday Party",
    coverImage: "/placeholder.svg?height=300&width=300",
    images: [
      { id: 5, src: "/placeholder.svg?height=400&width=300", alt: "Birthday cake" },
      { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Opening presents" },
    ],
  },
  {
    id: 3,
    name: "Christmas 2022",
    coverImage: "/placeholder.svg?height=300&width=300",
    images: [
      { id: 7, src: "/placeholder.svg?height=400&width=300", alt: "Christmas tree" },
      { id: 8, src: "/placeholder.svg?height=300&width=400", alt: "Family photo" },
      { id: 9, src: "/placeholder.svg?height=400&width=300", alt: "Opening gifts" },
    ],
  },
]

export default function AlbumPage({ params }: { params: { id: string } }) {
  const album = albums.find((a) => a.id === Number.parseInt(params.id))

  if (!album) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{album.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album.images.map((image) => (
            <Link href={`/image/${image.id}`} key={image.id} className="block">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

