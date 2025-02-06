import Image from "next/image";

const EditorsPick = () => {
  return (
    <div className="w-full flex justify-center py-12 sm:py-10 bg-[#f7f7f7]">
  <div className="w-full max-w-[1050px] flex flex-col gap-10 bg-[#f7f7f7] p-6 md:p-10 rounded-lg">

    <div className="flex flex-col items-center gap-2">
      <h3 className="font-Montserrat font-semibold text-[24px] text-black">
        EDITOR’S PICK
      </h3>
      <p className="text-center text-[#737373] tracking-wider w-52 font-semibold sm:w-full font-Montserrat text-[14px] md:text-[16px] leading-[20px]">
        Problems trying to resolve the conflict between
      </p>
    </div>

    <div className="w-full grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr] gap-9">

      <div className="relative w-full h-[500px] md:h-[500px]">
        <Image
          src={'/mens.png'}
          alt="men"
          className="w-[325px] h-[500px] sm:h-full sm:w-full rounded-md"
          width={510}
          height={500}
        />
        <button className="absolute top-[85%] left-[50%] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
          MEN
        </button>
      </div>

      <div className="relative w-full md:h-[500px]">
        <Image
          src={'/womens.png'}
          alt="women"
          className="w-[325px] h-[500px] sm:h-full sm:w-full object-cover rounded-md"
          width={240}
          height={500}
        />
        <button className="absolute top-[85%] left-[50%] transform -translate-x-1/2 bg-white px-[48px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
          WOMEN
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 justify-center">
        <div className="relative w-[325px] sm:w-full md:h-[232px] mb-[3%]">
          <Image
            src={'/accessories.png'}
            alt="accessories"
            className="w-[325px] sm:w-full object-cover rounded-md"
            width={240}
            height={252}
          />
          <button className="absolute top-[75%] left-[50%] transform -translate-x-1/2 bg-white px-[24px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
            ACCESSORIES
          </button>
        </div>

        <div className="relative w-[325px] sm:w-full md:h-[232px] mt-[5%]">
          <Image
            src={'/kids.png'}
            alt="kids"
            className="w-[325px] sm:w-full object-cover rounded-md"
            width={240}
            height={252}
          />
          <button className="absolute top-[75%] left-[50%] transform -translate-x-1/2 bg-white px-[24px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
            KIDS
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default EditorsPick;
