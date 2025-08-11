// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-serif bg-[#fdf6ec] text-[#4a3b2d]">
      {/* Header */}
      <header className="bg-[#5e4633] text-[#fffbea] py-10 px-5 text-center border-b-4 border-[#9b8c73]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Libgen ACM wala
        </h1>
        <p className="text-[#e0d6c2] text-base sm:text-lg">
          A quiet place to explore timeless reads
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-[#ede3d1] flex flex-col sm:flex-row sm:justify-center sm:gap-10 py-4 px-4 font-bold shadow-md space-y-2 sm:space-y-0">
        {["Home", "Collection", "Genres", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative text-[#5e4633] px-2 hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#708238] after:w-0 after:transition-all after:duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Featured Books */}
      <main className="max-w-6xl mx-auto px-5 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#5e4633]">
          Featured Titles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-8">
          {[
            {
              title: "Historia del rey transparente",
              author: "Rosa Montero",
              img: "/image/historia.jpg",
            },
            {
              title: "We Were Girls Once",
              author: "Aiwanose Odafen",
              img: "/image/wewere.jpeg",
            },
            {
              title: "A Mask, the Colour of the Sky (قناع بلون السماء)",
              author: "Basim Khandaqji",
              img: "/image/a mask.jpeg",
            },
            {
              title: "Ramcharitmanas",
              author: "Tulsidas",
              img: "/image/ramcharitmanas.jpeg",
            },
            {
              title: "ier (Greed)",
              author: "Elfriede Jelinek",
              img: "/image/greed.jpeg",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="bg-[#fff8f0] border border-[#e0d6c2] rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 text-center p-5"
            >
              <Image
                src={book.img}
                alt={book.title}
                width={200}
                height={250}
                className="w-full h-[250px] object-cover rounded-lg border-2 border-[#9b8c73] mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-[#3e2e1e] mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-[#6a5c45]">{book.author}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#5e4633] text-[#f3f0e8] text-center py-6 border-t-4 border-[#708238] mt-12 text-sm sm:text-base">
        <p>&copy; Libgen ACM Wala. Rooted in stories.</p>
      </footer>
    </div>
  );
}
