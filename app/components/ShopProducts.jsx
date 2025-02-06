

import Image from "next/image";
const ShopProducts = () => {
    return (
      <section className="bg-white py-16 px-6 flex flex-col items-center">
        <div className="grid grid-cols-4 gap-8 max-w-7xl  w-[79%] sm:w-[80%]">
          {[
            "/product-1.png",
            "/product-2.png",
            "/product-3.png",
            "/product-4.png",
            "/product-5.png",
            "/product-6.png",
            "/product-7.png",
            "/product-8.png",
          ].map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-md  p-4"
            >
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={200}
                height={250}
                className="object-cover rounded-md mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <p className="text-black font-bold text-sm mb-2">
                $1.24 <span className="line-through text-gray-400">$2.58</span>
              </p>
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-[40px]">
          <div className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD] shadow-md flex items-center justify-center space-x-2">
            <div className="bg-[#F3F3F3] text-[#737373] font-extrabold py-6 px-8 border border-[#d5d5d5] rounded-l-md cursor-pointer">
              First
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              1
            </div>
            <div className="bg-[#1D4ED8] text-white py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              2
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              3
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-8 border border-[#d5d5d5] rounded-r-md shadow-md cursor-pointer">
              Next
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ShopProducts;
  