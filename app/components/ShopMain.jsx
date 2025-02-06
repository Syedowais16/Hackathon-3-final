import Image from "next/image";

const ShopMain = () => {
  return (
    <div className="w-full bg-[#fafafa] pt-[2%]">
      <div className="max-w-[1050px] mx-auto px-4 pb-[2%]">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start  text-center sm:text-left">
          <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            Shop
          </h2>
          
          <div className="flex items-center gap-[15px] justify-center sm:justify-start mt-2 sm:mt-0">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Image src="/right.png" alt="arrow" width={8.26} height={6} />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>
      <div className=" bg-[#FAFAFA] flex justify-center pb-[3%]">
      <div className=" w-full max-w-[1088px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          <div className="flex justify-center">
            <Image src="/shopcard1.png" alt="1" width={205} height={223} />
          </div>
          <div className="flex justify-center">
            <Image src="/shopcard2.png" alt="2" width={205} height={223} />
          </div>
          <div className="flex justify-center">
            <Image src="/shopcard3.png" alt="3" width={205} height={223} />
          </div>
          <div className="flex justify-center">
            <Image src="/shopcard4.png" alt="4" width={205} height={223} />
          </div>
          <div className="flex justify-center">
            <Image src="/shopcard5.png" alt="5" width={205} height={223} />
          </div>
        </div>
      </div>
    </div>
    <div className="md:h-[98px] max-w-full mx-auto bg-[#ffffff]">
      <div className="md:h-[98px] py-[24px] flex flex-col sm:flex-row justify-center sm:justify-between gap-[15px] sm:gap-[80px]">
        <div className="ml-[10%] mt-[1%] flex justify-center sm:justify-start text-center sm:text-left">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
        </div>

        <div className="flex justify-center gap-[15px] sm:justify-start">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] md:mt-3">
            Views:
          </h6>
          <Image src="/Shopframe.png" alt="frame" width={108} height={46} />
        </div>

        <div className="mr-[10%] flex justify-center gap-[15px] sm:justify-start mt-[10px] sm:mt-0">
          <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center">
            <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
              Popularity
            </p>
          </button>
          <button className="w-[94px] h-[50px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
              Filter
            </h6>
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ShopMain;
