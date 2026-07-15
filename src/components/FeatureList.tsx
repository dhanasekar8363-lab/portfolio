interface FeatureListProps {
  features: string[];
}

export default function FeatureList({
  features,
}: FeatureListProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {features.map((feature) => (
            <div
              key={feature}
              className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>

                <h3 className="text-lg font-semibold">
                  {feature}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}