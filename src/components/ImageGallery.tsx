import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({
  images,
  title,
}: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((current + 1) % images.length);

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-8">

        <div className="relative bg-gray-100 rounded-3xl p-10">

          <button
            onClick={previous}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-12 h-12"
          >
            ←
          </button>

          <img
            src={images[current]}
            alt={title}
            className="mx-auto max-h-[700px] object-contain rounded-2xl"
          />

          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-12 h-12"
          >
            →
          </button>

        </div>

        <div className="flex gap-4 justify-center mt-8 flex-wrap">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer w-24 h-40 rounded-xl object-cover border-4 ${
                current === index
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}