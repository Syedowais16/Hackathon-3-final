import Image from "next/image"
// components/TopBar.tsx
export default function TopBar() {
  return (
    <div className="sm:block top-0 hidden max-w-full  h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full pt-1 px-1 md:px-3 lg:px-[24px]">
        <div className="flex gap-1 lg:gap-[10px]">
          <button className="flex items-center gap-2 lg:gap-[5px] p-[10px] text-white">
            <Image src={'/phone.png'} alt="phone" width={16} height={16} />
            <span className="font-semibold text-xs lg:text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[2px] lg:gap-[5px] p-1.5 lg:p-[10px] text-white rounded-[5px]">
            <Image src={'/email.png'} alt="mail" width={16} height={16} />
            <span className=" text-xs font-semibold lg:tracking-wider lg:text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        <h6 className=" lg:-ml-10 font-semibold  lg:tracking-wider text-xs lg:text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        <div className="flex gap-1 lg:gap-[10px] items-center">
          <h6 className=" text-xs hidden font-semibold lg:block lg:text-[14px] text-white">Follow Us &nbsp; : &nbsp;</h6>
          <div className="flex gap-[10px]">
            <Image src={'/instagramlogo.png'} alt="Instagram" width={16} height={16} />
            <Image src={'/youtubelogo.png'} alt="YouTube" width={16} height={16} />
            <Image src={'/facebooklogo.png'} alt="Facebook" width={16} height={16} />
            <Image src={'/twitterlogo.png'} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
