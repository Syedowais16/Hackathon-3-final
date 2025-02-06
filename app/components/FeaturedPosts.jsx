import Image from "next/image";
import Link from "next/link";


export default function FeaturedPosts() {
  const posts = [
    {
      image: '/blog1.png', 
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: '/blog2.png',
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: '/blog3.png',
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-12 ">
        <p className="text-blue-500 text-sm font-semibold tracking-wider leading-10">
          Practice Advice
        </p>
        <h2 className=" font-bold text-gray-800 tracking-wider text-[40px]">
          Featured <br className="sm:hidden" /> Posts
        </h2>
        <p className="text-sm tracking-wider font-medium  text-gray-500  text-center m-auto">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className=" w-[78%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-20">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image} 
                alt={`Post ${index + 1}`}
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 bg-red-500 text-white text-sm font-semibold uppercase px-3 py-0.5 rounded">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs flex gap-4 text-gray-500 mb-1 tracking-widest"><span className="text-[#8EC2F2]">Google</span> Trending <span>New</span></p>
              <h3 className="text-xl font-semibold text-gray-700 ml-1 mt-3 tracking-wide">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-gray-500 ml-1 tracking-widest">{post.description}</p>
              <div className="mt-4 flex flex-col text-gray-500 text-sm">
                <div className="flex items-center justify-between space-x-2">
                  <span className="flex justify-between items-center text-xs mt-2 ">
                    <svg
                      className="h-4 w-4 mr-1 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="text-xs tracking-widest mt-2 ">{post.comments}</span>
                </div>
                <Link
                  href="#"
                  className="mt-7 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
