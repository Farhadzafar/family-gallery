import Image from "next/image";
import Link from "next/link";

// This is a placeholder for your image data. In a real application, you would fetch this from an API or database.
const images = [
  {
    id: 4,
    src: "/images/12.jpg",
    alt: "Family photo 4",
    width: 400,
    height: 350,
  },
  {
    id: 1,
    src: "/images/15.jpg",
    alt: "Family photo 1",
    width: 300,
    height: 400,
  },
  {
    id: 2,
    src: "/images/14.jpg",
    alt: "Family photo 2",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    src: "/images/13.jpg",
    alt: "Family photo 3",
    width: 300,
    height: 500,
  },

  {
    id: 5,
    src: "/images/11.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/10.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images/9.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/8.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images7.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/6.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images/5.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/4.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images/3.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/2.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images/1.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },

  {
    id: 5,
    src: "/images/11.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/10.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
  {
    id: 5,
    src: "/images/11.jpg",
    alt: "Family photo 5",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "/images/10.jpg",
    alt: "Family photo 6",
    width: 300,
    height: 400,
  },
];

export default function ImageGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Link href={`/image/${image.id}`} key={image.id}>
            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center">{image.alt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
