
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="bg-[#ffffff] relative flex flex-col gap-8">
            <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-full lg:h-[321px]">
                    <div className="flex flex-col items-center lg:items-start gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
                        <h5 className="text-[14px]  font-semibold text-[#252B42] tracking-[0.1px] text-center hidden sm:block">
                            ABOUT COMPANY
                        </h5>
                        <h1 className="text-[30px] sm:text-[30px] sm:justify-center font-semibold lg:text-[58px]  text-[#252B42] tracking-[0.2px] text-center lg:text-left">
                            ABOUT US
                        </h1>
                        <h4 className="text-[12px] font-normal  sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px] text-center lg:text-left">

                            We know how large <br className="sm:hidden" />
                            objects will act, but things <br className="sm:hidden" />
                            on a small scale just do <br className="sm:hidden" />
                            not act that way.
                        </h4>
                        <div className="flex flex-row items-center justify-center lg:justify-start gap-[10px] w-[195px] h-[52px]">
                            <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
                                <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
                                    Get Quote Now
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  flex justify-center">
                        <Image
                            src={"/aboutsectionbackground.png"}
                            alt="girl"
                            className=" w-full h-[auto] lg:h-[612px]"
                            width={1000}
                            height={612}
                        />
                    </div>
                </div>
            </div>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="justify-center mb-10 grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left">
                        <span className="text-left flex  flex-col">
                            <h2 className="text-sm text-red-600 font-semibold  ">
                                Problems trying
                            </h2>
                            <h3 className="text-2xl font-bold mb-4 text-black w-[70%]">
                                Met minim Mollie non<br className="sm:hidden" /> desert
                                Alamo est sit <br className="sm:hidden" />cliquey dolor do met
                                <br className="sm:hidden" /> sent.
                            </h3>
                        </span>
                        <p className="text-gray-600">
                            Problems trying to resolve the conflict between<br className="sm:hidden" />the two major realms
                            of <br className="hidden sm:block" />Classical physics:<br className="sm:hidden" /> Newtonian mechanics.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
                        <div className="text-center">
                            <h4 className="text-4xl font-bold text-gray-800">15K</h4>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold text-gray-800">150K</h4>
                            <p className="text-gray-600">Monthly Visitors</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold text-gray-800">15</h4>
                            <p className="text-gray-600">Countries Worldwide</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold text-gray-800">100+</h4>
                            <p className="text-gray-600">Top Partners</p>
                        </div>
                    </div>



                    <div className="relative">
                        <Image
                            src="/mountain.png"
                            alt="Mountains"
                            className="rounded-lg shadow-lg w-full"
                            width={1000}
                            height={100}
                        />
                        <button
                            className="absolute inset-0 flex items-center justify-center text-white bg-opacity-75 rounded-lg focus:outline-none"
                            aria-label="Play Video"
                        >
                            <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="92.6" height="92.6" rx="46.3" fill="#23A6F0" />
                                <g clipPath="url(#clip0_10053_170)">
                                    <path
                                        d="M54.5396 47.7028L39.4282 56.7265C38.1458 57.4915 36.5 56.5652 36.5 55.0229V36.9757C36.5 35.4359 38.1434 34.5071 39.4282 35.2746L54.5396 44.2982C54.8313 44.4696 55.0738 44.7173 55.2425 45.0163C55.4112 45.3153 55.5 45.6548 55.5 46.0005C55.5 46.3462 55.4112 46.6858 55.2425 46.9848C55.0738 47.2837 54.8313 47.5315 54.5396 47.7028Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10053_170">
                                        <rect
                                            width="19"
                                            height="23"
                                            fill="white"
                                            transform="translate(36.7998 34.7998)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <div>
                <section className="relative bg-white py-16">
                    <div className="container mx-auto flex flex-col items-center gap-16 px-4">
                        <div className="text-center max-w-lg">
                            <h2 className="text-4xl font-bold text-[#252B42]">
                                Meet Our Team
                            </h2>
                            <p className="text-base text-[#737373] mt-4">
                                Problems trying to resolve the conflict between the two major
                                realms of Classical physics: Newtonian mechanics
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
                                <div className="w-full h-[230px] relative">
                                    <Image
                                        src={"/team6.png"}
                                        alt="Team Member 1"
                                        className="object-cover w-full h-full"
                                        width={315}
                                        height={230}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
                                    <h6 className="text-sm font-semibold text-[#737373]">
                                        Software Engineer
                                    </h6>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <Image
                                            src={"/facebook.png"}
                                            alt="Facebook"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/instagram.png"}
                                            alt="Instagram"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/twitter.png"}
                                            alt="Twitter"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
                                <div className="w-full h-[230px] relative">
                                    <Image
                                        src={"/team7.png"}
                                        alt="Team Member 2"
                                        className="object-cover w-full h-full"
                                        width={315}
                                        height={230}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h5 className="text-xl font-bold text-[#252B42]">
                                        Jane Smith
                                    </h5>
                                    <h6 className="text-sm font-semibold text-[#737373]">
                                        Marketing Head
                                    </h6>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <Image
                                            src={"/facebook.png"}
                                            alt="Facebook"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/instagram.png"}
                                            alt="Instagram"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/twitter.png"}
                                            alt="Twitter"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
                                <div className="w-full h-[230px] relative">
                                    <Image
                                        src={"/team4.png"}
                                        alt="Team Member 3"
                                        className="object-cover w-full h-full"
                                        width={315}
                                        height={230}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h5 className="text-xl font-bold text-[#252B42]">
                                        Emily Rose
                                    </h5>
                                    <h6 className="text-sm font-semibold text-[#737373]">
                                        UI/UX Designer
                                    </h6>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <Image
                                            src={"/facebook.png"}
                                            alt="Facebook"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/instagram.png"}
                                            alt="Instagram"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                        <Image
                                            src={"/twitter.png"}
                                            alt="Twitter"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="bg-gray-100 py-20 flex justify-center">
                    <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Big<br className="sm:hidden" /> Companies<br className="sm:hidden" /> Are Here
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                                Problems trying to resolve the conflict<br className="sm:hidden" /> between the two major
                                realms of Classical <br className="sm:hidden" /> physics: Newtonian mechanics
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            <div className="flex justify-center">
                                <Image
                                    src="/company1.png"
                                    alt="Client 1 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/company2.png"
                                    alt="Client 2 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/company3.png"
                                    alt="Client 3 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/company4.png"
                                    alt="Client 4 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/company5.png"
                                    alt="Client 5 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/company6.png"
                                    alt="Client 6 Logo"
                                    className="h-12 w-auto"
                                    width={105}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className=" w-full h-auto sm:h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
                <div className="w-full sm:w-1/2 h-full bg-[#2A7CC7] px-4 sm:px-8 md:px-[50px] py-8 sm:py-16 flex flex-col justify-center items-center">
                    <div className="w-full sm:w-[438px] flex flex-col items-center text-center sm:text-left sm:items-start gap-[24px]">
                        <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
                        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-[50px] tracking-[0.2px]">
                            Now Lets grow Yours
                        </h2>
                        <p className="text-white text-sm font-semibold sm:text-base lg:text-sm text-[12px] lg:w-auto w-full sm:w-[350px] leading-[20px] tracking-[0.2px]">
                            The gradual accumulation of<br className=" sm:hidden" /> information about atomic and<br className=" sm:hidden" /> small-scale behavior during the<br className=" sm:hidden" /> first quarter of the 20th.
                        </p>
                        <button className=" w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                            <span className="text-white text-sm font-bold">Button</span>
                        </button>
                    </div>
                </div>
                <div className=" sm:w-1/2 h-full relative object-cover mt-8 sm:mt-0">
                    <Image
                        src="/unsplash2.png"
                        alt="Testimonial Background"
                        className="absolute w-full h-auto sm:w-[590px] sm:h-[640px] left-0 sm:left-[85px] inset-0 object-cover hidden sm:block"
                        width={1000}
                        height={1000}
                    />
                </div>
            </section>
        </div>

    );
};

export default AboutSection;


