import Header from "@/components/Header"
import Image from "next/image"
import { notFound } from "next/navigation"

// This is a placeholder for your image data. In a real application, you would fetch this from an API or database.
const images = [
  { id: 1, src: "/placeholder.svg?height=400&width=300", alt: "Family photo 1", width: 300, height: 400 },
  { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Family photo 2", width: 400, height: 300 },
  { id: 3, src: "/placeholder.svg?height=500&width=300", alt: "Family photo 3", width: 300, height: 500 },
  { id: 4, src: "/placeholder.svg?height=350&width=400", alt: "Family photo 4", width: 400, height: 350 },
  { id: 5, src: "/placeholder.svg?height=450&width=300", alt: "Family photo 5", width: 300, height: 450 },
  { id: 6, src: "/placeholder.svg?height=400&width=300", alt: "Family photo 6", width: 300, height: 400 },
]

export default function ImagePage({ params }: { params: { id: string } }) {
  const image = images.find((img) => img.id === Number.parseInt(params.id))

  if (!image) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h1 className="text-2xl font-bold mt-4">{image.alt}</h1>
          <p className="text-gray-600 mt-2">
            Add more details about the image here, such as date taken, location, etc.
          </p>
        </div>
      </div>
    </main>
  )
}

