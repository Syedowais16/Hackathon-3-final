
import Image from "next/image";

const SingleProduct = () => {
    return (
        <div className="w-full bg-[#fafafa]">
            <div className="max-w-[1050px] h-[92px] mx-auto px-4 flex items-center">
                <div className="flex items-center gap-[15px] justify-center sm:justify-start mt-2 sm:mt-0 text-center sm:text-left w-full">
                    <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                        Home
                    </div>
                    <Image src="/right.png" alt="arrow" width={8.26} height={6} />
                    <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                        Shop
                    </h6>
                </div>
            </div>
            <div className="pb-[3%] container mx-auto px-4  flex flex-col lg:flex-row gap-8 font-Montserrat">
                <div className="flex-1 lg:w-[600px] mx-auto">
                    <div className="relative">
                        <Image
                            src={'/singleproductmain.jpg'}
                            alt="Product Image"
                            className="rounded-lg"
                            width={600}
                            height={400}
                        />
                        <button className="absolute top-1/2 left-2 transform -translate-y-1/2  rounded-full p-2">
                            <Image
                                src={'/arrowleft.png'}
                                alt="arrow 1"

                                width={23}
                                height={47}
                            />
                        </button>
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2  rounded-full p-2">
                            <Image
                                src={'/arrowright.png'}
                                alt="arrow 1"

                                width={23}
                                height={47}
                            />
                        </button>
                    </div>

                    <div className="flex mt-4 gap-4 justify-start lg:justify-start">
                        <Image
                            src={'/singleproductsecond.jpg'}
                            alt="Thumbnail 1"
                            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                            width={100}
                            height={100}
                        />
                        <Image
                            src={'/singleproductthird.jpg'}
                            alt="Thumbnail 2"
                            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>

                <div className="flex-1 lg:w-[600px] mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Floating Phone
                    </h1>
                    <div className="flex items-center mt-2">
                        <span className="flex items-center text-yellow-400">
                            <Image src={'/starrating.png'} alt="star" width={24} height={24} />
                            <Image src={'/starrating.png'} alt="star" width={24} height={24} />
                            <Image src={'/starrating.png'} alt="star" width={24} height={24} />
                            <Image src={'/starrating.png'} alt="star" width={24} height={24} />
                            <Image src={'/starhollow.png'} alt="starr" width={24} height={24} />

                        </span>
                        <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
                    </div>

                    <p className="text-xl font-Montserrat font-semibold text-black mt-4">
                        $1,139.33
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Availability:{" "}
                        <span className="text-[#23A6F0] font-medium">In Stock</span>
                    </p>

                    <p className="text-gray-700 mt-4">
                        Met minim Mollie non desert<br className="sm:hidden" /> Alamo est sit cliquey dolor <br className=" hidden sm:block" />
                        do <br className="sm:hidden" />met sent. RELIT official consequent<br className="sm:hidden" /> door ENIM RELIT Mollie. <br className=" hidden sm:block" />
                        Excitation <br className="sm:hidden" />venial consequent sent nostrum met.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
                            Select Options
                        </button>
                        <div className="flex items-center gap-4">
                            <Image src={'/heart.png'} alt="heart" width={24} height={24} />
                            <Image src={'/cart.png'} alt="cart" width={24} height={24} />
                            <Image src={'/wishlist.png'} alt="eye" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffffff]  w-full px-4 sm:px-8 py-12  ">
                <div className="flex justify-around sm:justify-center gap-8 mb-4 sm:mb-8 ">
                    <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] underline">
                        Description
                    </span>
                    <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] ">
                        Additional Information
                    </span>
                    <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] flex items-center">
                        Reviews
                        <h1 className="text-sm leading-[24px] text-[#23856D] ml-2">(0)</h1>
                    </span>
                </div>
                <hr className="border-t border-gray-300 w-[80%] mx-auto" />
            </div>
            <div className="pb-[3%] bg-[#ffffff] flex  items-center  max-w-full gap-7 m-auto ">
                <div className="sm:w-1/3 bg-white flex  justify-center gap-5">
                    <div className="text-center ">
                        <div className="  bg-white flex items-center justify-center shadow-md ">
                            <Image
                                src={"/unsplash1.png"}
                                alt="Interior Design"
                                width={332}
                                height={392}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="justify-center sm:w-2/3 px-6  flex flex-col sm:flex-row gap-11">
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-4">the quick fox jumps over</h1>
                        <p className="text-gray-700">
                            Met minim Mollie non desert Alamo est sit
                            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
                            official <br className=" hidden sm:block" /> consequent door ENIM
                            RELIT Mollie.
                            <br className="sm:block hidden" /> Excitation venial consequent sent
                            nostrum
                            <br className="sm:block hidden" /> met.
                        </p>
                        <p className="text-gray-700">
                            Met minim Mollie non desert Alamo est sit
                            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
                            official <br className=" hidden sm:block" /> consequent door ENIM
                            RELIT Mollie.
                            <br className="sm:block hidden" /> Excitation venial consequent sent
                            nostrum
                            <br className="sm:block hidden" /> met.
                        </p>
                        <p className="text-gray-700">
                            Met minim Mollie non desert Alamo est sit
                            <br className="sm:block hidden" /> cliquey dolor do met sent. RELIT
                            official <br className=" hidden sm:block" /> consequent door ENIM
                            RELIT Mollie.
                            <br className="sm:block hidden" /> Excitation venial consequent sent
                            nostrum
                            <br className="sm:block hidden" /> met.
                        </p>
                    </div>


                    <div className="space-y-4 ">
                        <h2 className="text-black text-2xl font-bold mb-4">the quick fox jumps over</h2>
                        <ul className=" text-gray-700 space-y-3">
                            <li className="flex items-center ">
                                <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                dog
                            </li>
                        </ul>


                        <div className="space-y-2 ">
                            <h2 className="text-black text-2xl font-bold mb-4">the quick fox jumps over</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                    dog
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                    dog
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-xl font-bold text-gray-700">&gt;</span> the quick fox jumps over the lazy
                                    dog
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-[#fafafa] py-10 lg:pt-10 pb-20">
                <div className="w-full max-w-[1124px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12  sm:px-4">
                    <div className="ml-[1%] flex flex-col items-center gap-2">
                        <h3 className="font-Montserrat sm:text-start  font-bold text-2xl md:text-[24px] text-center sm:w-full tracking-tight text-[#252B42]">
                            BESTSELLER PRODUCTS
                        </h3>
                    </div>
                    <hr className="border-t border-gray-300 w-full mx-auto mt-[-5%] mb-[-4%]" />
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-20 gap-4">
                        {[
                            "/single1.png",
                            "/single2.png",
                            "/single3.png",
                            "/single4.png",
                            "/single5.png",
                            "/single6.png",
                            "/single1.png",
                            "/single2.png",
                        ].map((pic, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-[#FFFFFF] rounded-md mx-auto  shadow-sm"
                            >
                                <div className="w-full h-auto">
                                    <Image
                                        src={pic}
                                        alt={`picture${index + 1}`}
                                        className="rounded-md object-cover"
                                        width={239}
                                        height={427}
                                    />
                                </div>
                                <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
                                    <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                                        Graphic Design
                                    </h5>
                                    <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                                        English Department
                                    </p>
                                    <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                                        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                                            $16.48
                                        </h5>
                                        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                                            $6.48
                                        </h5>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <section className="bg-gray-100 py-20 flex justify-center overflow-hidden">
                        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
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
        </div>

    );
};

export default SingleProduct;
