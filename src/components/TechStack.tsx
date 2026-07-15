interface TechStackProps {
  tech: string[];
}

export default function TechStack({
  tech,
}: TechStackProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-12">

          Technology Stack

        </h2>

        <div className="flex flex-wrap gap-5">

          {tech.map((item) => (

            <div
              key={item}
              className="px-6 py-4 rounded-2xl bg-white shadow border hover:shadow-lg transition"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}