const reviews = [
  {
    id: 1,
    name: "Sonia B.",
    city: "Tunis",
    rating: 5,
    comment:
      "Très satisfaite de la qualité des produits. Livraison rapide et excellent service."
  },
  {
    id: 2,
    name: "Amira K.",
    city: "Sfax",
    rating: 5,
    comment:
      "Les vêtements sont magnifiques et très confortables pour mon bébé."
  },
  {
    id: 3,
    name: "Mariem H.",
    city: "Sousse",
    rating: 5,
    comment:
      "Je recommande Baby-Shop. Les prix sont intéressants et le service est parfait."
  }
];

export default function Testimonials() {
  return (
    <section
      className="
      py-16
      bg-gradient-to-br
      from-pink-50
      via-white
      to-blue-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          text-gray-800
          "
        >
          💬 Avis de nos clients
        </h2>

        <p
          className="
          text-center
          text-gray-600
          mt-3
          mb-12
          "
        >
          Merci pour votre confiance ❤️
        </p>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-md
              hover:shadow-xl
              transition
              "
            >
              <div className="text-yellow-400 text-xl mb-4">
                {"⭐".repeat(review.rating)}
              </div>

              <p
                className="
                text-gray-600
                leading-7
                italic
                "
              >
                "{review.comment}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-gray-800">
                  {review.name}
                </h3>

                <span className="text-sm text-gray-500">
                  {review.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}