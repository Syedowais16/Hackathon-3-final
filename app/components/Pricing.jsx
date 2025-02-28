import React from "react";
import Image from "next/image";
const Pricing = () => {
    return (
        <div className="bg-[#ffffff] w-full  py-10 flex justify-center">
            <div className="bg-white max-w-full px-4 lg:px-0">

                <div className="bg-white max-w-full mt-4 mx-auto text-center flex flex-col gap-6">
                    <h2 className="text-sm tracking-widest font-semibold text-gray-700 uppercase">Pricing</h2>
                    <h1 className=" text-2xl lg:text-6xl tracking-wide font-bold text-gray-800">Simple Pricing</h1>
                    <p className="text-sm text-gray-600 mt-2 flex justify-center gap-5"><span>Home</span> &gt; <span>Pricing</span></p>

                    <div className="max-w-full bg-[#fafafa] mt-5 lg:mt-20">
                        <h1 className="text-4xl font-semibold text-black">Pricing </h1>
                        <p className="text-gray-500 mt-2  m-auto">
                            Problems trying to resolve the conflict between <br /> the two major realms of
                            Classical physics: Newtonian mechanics
                        </p>

                        <div className="bg-[#fafafa]  flex justify-center items-center mt-10 gap-10">
                            <button className="px-4 py-2  text-slate-900 font-semibold rounded-full">Monthly</button>
                            <button className=" text-slate-900 font-semibold ">Yearly</button>
                            <span className="text-sm px-4 rounded-full py-2  bg-green-200 text-blue-500">Save 25%</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 m-auto  mt-10 w-[70%] sm:w-full">
                            <div className="bg-[#ffffff] border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10 rounded-lg px-6 text-slate-700 shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">Free</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">0<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>

                                </ul>
                            </div>

                            <div className="border  flex py-20 flex-col gap-10 sm:pt-20 rounded-lg p-6 bg-slate-800 text-white shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase ">STANDARD</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 sm:mt-4 flex justify-center">9.99<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>
                                </ul>
                            </div>

                            <div className="bg-[#ffffff] border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10 rounded-lg px-6 text-slate-700 shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">PREMIUM</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">19.99<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <section className="bg-gray-100 py-20 flex justify-center overflow-hidden">
                        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
                            <h3 className="text-center text-2xl mb-5 text-bold text-black">Trusted By Over 4000 Big Companies</h3>

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
                <div className="w-full bg-white py-10 flex justify-center">

                    <div className="max-w-[1440px] px-4 lg:px-0">
                        <div className="max-w-[1050px] mx-auto text-center pt-10">

                            <h1 className="text-4xl tracking-widest font-bold text-gray-800">Pricing FAQs</h1>
                            <p className="text-lg tracking-widest m-auto text-gray-600 mt-5 md:w-[500px]">
                                Problems trying to resolve the conflict between the two major realms of Classical physics
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 mt-10 lg:mt-28">
                                {[...Array(6)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start  bg-white p-4 rounded-lg shadow-sm"
                                    >
                                        <span className="text-blue-500 text-lg mr-5">&gt;</span>
                                        <div>
                                            <h3 className="font-semibold text-left text-gray-800 text-md">
                                                The quick fox jumps over the lazy dog
                                            </h3>
                                            <p className="text-sm text-left text-gray-600 mt-1">
                                                Met minim Mollie non deserunt Alamo est sit cliquey dolor do met sint. RELIT
                                                official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                                                nostrum met.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <p className="text-sm lg:text-2xl text-gray-600">
                                    Haven&quot;t got your answer? <span>Contact our support</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white max-w-[1440px] py-8 px-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-black">
                        Start your <br className="sm:hidden" />14 days free trial
                    </h1>
                    <p className="text-gray-500 text-center mb-6">
                        Met minim Mollie non desert Alamo est sit <br className="sm:hidden" />cliquey dolor do<br className=" hidden sm:block" /> met sent.
                        RELIT official <br className="sm:hidden" />consequent.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
                        Try it free now
                    </button>
                    <div className="flex justify-center gap-4 mt-6">
                        <a href="#" aria-label="Twitter">
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 2.98277C28.8766 3.48044 27.685 3.80711 26.4649 3.95191C27.7358 3.19019 28.7116 1.98398 29.1711 0.546797C27.963 1.26373 26.6412 1.76886 25.2628 2.04035C24.14 0.844219 22.5405 0.0966797 20.7702 0.0966797C17.3711 0.0966797 14.6152 2.85246 14.6152 6.25137C14.6152 6.73383 14.6696 7.20351 14.7745 7.6541C9.6593 7.39734 5.12414 4.94707 2.0884 1.22332C1.55871 2.13234 1.2552 3.18973 1.2552 4.31754C1.2552 6.45293 2.34188 8.33672 3.99328 9.44051C3.01588 9.40989 2.05998 9.14591 1.20539 8.67058C1.20504 8.69637 1.20504 8.72215 1.20504 8.74804C1.20504 11.7301 3.3266 14.2178 6.14215 14.7832C5.2358 15.0297 4.28511 15.0658 3.3627 14.8887C4.14586 17.3339 6.41895 19.1133 9.11215 19.1631C7.0057 20.8138 4.35176 21.7978 1.46824 21.7978C0.971367 21.7978 0.481523 21.7686 0 21.7118C2.72379 23.4581 5.95898 24.4771 9.43477 24.4771C20.7559 24.4771 26.9466 15.0984 26.9466 6.96515C26.9466 6.6982 26.9407 6.43277 26.9288 6.16887C28.1337 5.29779 29.1737 4.21888 30 2.98277Z" fill="#55ACEE" />
                            </svg>

                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z" fill="#395185" />
                                <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.69929 26.0003V14.3827H12.5989L13.1828 9.85515H8.69929V6.96437C8.69929 5.65351 9.0634 4.76019 10.9432 4.76019L13.3407 4.75914V0.709726C12.9259 0.654531 11.5028 0.53125 9.84715 0.53125C6.39035 0.53125 4.02387 2.64121 4.02387 6.51613V9.85515H0.114258V14.3827H4.02387V26.0003H8.69929Z" fill="white" />
                                </svg>
                            </svg>

                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9998 7.30838C10.7435 7.30838 7.30854 10.7434 7.30854 14.9996C7.30854 19.2559 10.7435 22.6909 14.9998 22.6909C19.2561 22.6909 22.6911 19.2559 22.6911 14.9996C22.6911 10.7434 19.2561 7.30838 14.9998 7.30838ZM14.9998 19.9984C12.2473 19.9984 10.001 17.7521 10.001 14.9996C10.001 12.2471 12.2473 10.0009 14.9998 10.0009C17.7523 10.0009 19.9986 12.2471 19.9986 14.9996C19.9986 17.7521 17.7523 19.9984 14.9998 19.9984ZM23.0061 5.20088C22.0123 5.20088 21.2098 6.00338 21.2098 6.99713C21.2098 7.99088 22.0123 8.79338 23.0061 8.79338C23.9998 8.79338 24.8023 7.99463 24.8023 6.99713C24.8026 6.76116 24.7563 6.52745 24.6662 6.30939C24.576 6.09132 24.4437 5.89319 24.2769 5.72633C24.11 5.55947 23.9119 5.42718 23.6938 5.33701C23.4757 5.24684 23.242 5.20059 23.0061 5.20088ZM29.9923 14.9996C29.9923 12.9296 30.0111 10.8784 29.8948 8.81213C29.7786 6.41213 29.2311 4.28213 27.4761 2.52713C25.7173 0.768381 23.5911 0.224631 21.1911 0.108381C19.1211 -0.00786902 17.0698 0.010881 15.0035 0.010881C12.9335 0.010881 10.8823 -0.00786902 8.81604 0.108381C6.41604 0.224631 4.28604 0.772131 2.53104 2.52713C0.772288 4.28588 0.228537 6.41213 0.112287 8.81213C-0.00396278 10.8821 0.0147873 12.9334 0.0147873 14.9996C0.0147873 17.0659 -0.00396278 19.1209 0.112287 21.1871C0.228537 23.5871 0.776038 25.7171 2.53104 27.4721C4.28979 29.2309 6.41604 29.7746 8.81604 29.8909C10.886 30.0071 12.9373 29.9884 15.0035 29.9884C17.0735 29.9884 19.1248 30.0071 21.1911 29.8909C23.5911 29.7746 25.7211 29.2271 27.4761 27.4721C29.2348 25.7134 29.7786 23.5871 29.8948 21.1871C30.0148 19.1209 29.9923 17.0696 29.9923 14.9996ZM26.6923 23.8421C26.4186 24.5246 26.0886 25.0346 25.5598 25.5596C25.0311 26.0884 24.5248 26.4184 23.8423 26.6921C21.8698 27.4759 17.1861 27.2996 14.9998 27.2996C12.8135 27.2996 8.12604 27.4759 6.15354 26.6959C5.47104 26.4221 4.96104 26.0921 4.43604 25.5634C3.90729 25.0346 3.57729 24.5284 3.30354 23.8459C2.52354 21.8696 2.69979 17.1859 2.69979 14.9996C2.69979 12.8134 2.52354 8.12588 3.30354 6.15338C3.57729 5.47088 3.90729 4.96088 4.43604 4.43588C4.96479 3.91088 5.47104 3.57713 6.15354 3.30338C8.12604 2.52338 12.8135 2.69963 14.9998 2.69963C17.1861 2.69963 21.8736 2.52338 23.8461 3.30338C24.5286 3.57713 25.0386 3.90713 25.5636 4.43588C26.0923 4.96463 26.4223 5.47088 26.6961 6.15338C27.4761 8.12588 27.2998 12.8134 27.2998 14.9996C27.2998 17.1859 27.4761 21.8696 26.6923 23.8421Z" fill="black" />
                            </svg>

                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_232_1232)">
                                    <path d="M25.5782 25.4624H21.1504V18.5282C21.1504 16.8747 21.1209 14.7461 18.8475 14.7461C16.5414 14.7461 16.1885 16.5477 16.1885 18.4078V25.4619H11.7609V11.2024H16.0114V13.1512H16.071C16.4963 12.4238 17.111 11.8254 17.8496 11.4198C18.5881 11.0142 19.4229 10.8165 20.2649 10.8477C24.7526 10.8477 25.58 13.7996 25.58 17.6398L25.5782 25.4624ZM6.76477 9.25338C5.34567 9.25361 4.19504 8.10334 4.19481 6.68423C4.19458 5.26513 5.34473 4.11451 6.76384 4.11427C8.18294 4.11392 9.33356 5.26419 9.3338 6.6833C9.33392 7.36478 9.06333 8.0184 8.58155 8.50038C8.09977 8.98236 7.44625 9.25322 6.76477 9.25338ZM8.9787 25.4625H4.54629V11.2024H8.97858V25.4624L8.9787 25.4625ZM27.7856 0.00217493H2.32139C1.11788 -0.0113659 0.130919 0.952719 0.116211 2.15622V27.7266C0.130452 28.9307 1.1173 29.8957 2.32127 29.8831H27.7856C28.9921 29.898 29.9828 28.933 29.9995 27.7266V2.15424C29.9823 0.9484 28.9915 -0.0155683 27.7856 0.000190493" fill="#0A66C2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_232_1232">
                                        <rect width="30" height="29.8833" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Pricing;
