export default function HeroBanner() {
  return (
    <div className="relative w-full h-[700px]">
      <div
        className="absolute inset-0 w-full h-[716px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/herosection.jpg')`,
        }}
      ></div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="max-w-lg text-white">
          <p className="uppercase text-sm font-semibold tracking-wide">
            Summer 2020
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-3">
            New Collection
          </h1>

          <p className="mt-4 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>

          <a
            href="#"
            className="inline-block mt-6 bg-green-500 text-white px-8 py-3 text-sm font-bold uppercase rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
