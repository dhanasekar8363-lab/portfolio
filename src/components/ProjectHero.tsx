interface ProjectHeroProps {
  title: string;
  description: string;
  coverImage: string;
  tech: string[];
}

export default function ProjectHero({
  title,
  description,
  coverImage,
  tech,
}: ProjectHeroProps) {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-blue-600 font-semibold">
              Featured Project
            </span>

            <h1 className="text-6xl font-bold mt-5">
              {title}
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {tech.map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 bg-blue-50 rounded-full text-blue-600"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src={coverImage}
              alt={title}
              className="rounded-3xl shadow-2xl max-h-[700px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}