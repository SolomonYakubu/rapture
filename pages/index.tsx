import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import Header from "../components/Header";

import { Zoom, Bounce, Fade, Roll } from "react-reveal";
import ai from "../public/images/ai.webp";
import about2 from "../public/images/about.webp";
import why from "../public/images/why.webp";
import logo from "../public/images/logo.webp";
import logo2 from "../public/images/logo.webp";
import bg2 from "../public/images/about.webp";
import bg1 from "../public/images/bg1.jpg";

import dot from "../public/images/dot.webp";

// import Rapture Raptor  from "../public/images/Rapture Raptor .jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesBg from "../components/particles";
import p1 from "../public/images/p1.png";
import p3 from "../public/images/p3.png";
import p4 from "../public/images/p4.png";
import p5 from "../public/images/p5.png";
import p6 from "../public/images/p6.png";
import p7 from "../public/images/p7.png";
import p8 from "../public/images/p8.png";
import p10 from "../public/images/p10.png";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
import { BiBot } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRobot, FaRegLaughWink, FaGamepad } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import {
  GiReceiveMoney,
  GiTakeMyMoney,
  GiCampfire,
  GiRoad,
} from "react-icons/gi";
import { BiDna } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";

import { BsShopWindow, BsCloudSunFill } from "react-icons/bs";
import { MdPool, MdWaterfallChart, MdSwapVert } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb";
import "react-vertical-timeline-component/style.min.css";

const Home: NextPage = () => {
  const router = useRouter();

  const list = [
    ["Home", null],

    ["About", null],

    ["Tokenomics", null],
    // ["Roadmap", null],
    ["Uniswap", "https://app.uniswap.org"],
    ["Dextools", "https://www.dextools.io/app"],
  ];
  const roadmap = [
    {
      title: "Stranding",
      desc: [
        " Socials Creation",
        "Website v1 release",
        "Contract Deployment",
        "Stealth launch",
        "1 month LP Lock",
        "Renounce with 0/2 tax",
      ],
    },
    {
      title: "Survival",

      desc: [
        "Marketing and ads Campaigns",
        "Dextools update",
        "LP lock extend",
        "Whitepaper v1 release",
        "Listing on CoinGecko and CoinMarketCap",
        " Website v2",
        "Partnerships with Influencers",
      ],
    },
    {
      title: "Rescue",

      desc: [
        "Wilson Legacy release",
        "LP burn",
        "Marketing Expansion",
        "NFT release",
        "Listing on CEX",
        "Merch",
      ],
    },
  ];
  const moreFeatures = [
    {
      title: "Staking & Farming Dapp",
      icon: <BsCashCoin size={30} />,
    },
    {
      title: "Advance bot (hot wallet tracker)",
      icon: <FaRobot size={30} />,
    },
    {
      title: "Metaverse Game",
      icon: <FaGamepad size={30} />,
    },
    {
      title: "NFTS",
      icon: <FaRegLaughWink size={30} />,
    },
  ];
  const tokenomics = [
    { option: "Name", value: "Rapture Raptor" },

    { option: "Supply", value: "100,000,000" },
    { option: "Tax", value: "0/0" },

    { option: "Liquidity", value: "Locked" },
    { option: "Contract", value: "Renounced" },
  ];
  const reward = [
    {
      title: "Supply -  1 Million",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <FaCoins size={40} />,
    },
    {
      title: "Tax - 5/5",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <GiReceiveMoney size={40} />,
    },
    {
      title: "LP - 1%",

      desc: "1% fees is used to ensure that there are funds to support trading activity.",
      icon: <MdPool size={40} />,
    },
    {
      title: "Marketing - 4%",

      desc: "4% fees directly goes to marketing to support the token in a long run.",
      icon: <BsShopWindow size={40} />,
    },
  ];
  const features = [
    {
      title: "$Rapture Raptor Detective bot",
    },
    {
      title: "$Rapture Raptor Dapp's",
    },
    {
      title: "Staking ",
    },
    {
      title: "NFT'S",
    },
  ];
  const buy = [
    {
      title: "1",

      desc: "Download & setup MetaMask or TrustWallet",
    },
    {
      title: "2",

      desc: "Buy & send ETH to Metamask or Trust wallet",
    },
    {
      title: "3",

      desc: "Head over to Uniswap to buy your $Rapture Raptor ",
    },
    {
      title: "4",

      desc: "View Rapture Raptor  in your wallet and lastly HODL",
    },
  ];
  const about = [
    "register and add location(confirm before they own meme coins like Shiba, Doge etc.)",
    "Choose their own pets (+ beautiful NFT)",
    "Communicate and play together",

    "Grow and to make better their pets. More they active, more they can get $SHIMCO rewards   ",
  ];
  return (
    <div>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className=" md:h-[calc(100vh)] min-h-[calc(100vh)] mb-0 pb-0 w-full bg-inherit  md:py-0 bg-contain bg-no-repeat bg-top md:bg-right "
          // style={{ backgroundImage: "url('images/bg.webp')" }}
          id="Home"
        >
          {/* <ParticlesBg /> */}
          <div className="hero absolute w-full h-full z-10 bg-opacity-0 top-0 left-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="h-full flex relative flex-col-reverse overflow-y-hidden items-center justify-center md:justify-around md:flex-row  md:gap-2 md:items-center  w-full md:px-24 md:pt-8 md:pb-0 pt-24 pb-24 ">
            <div className="w-full md:w-1/2  md:block z-20 drop-shadow-2xl">
              <ExportedImage
                src={logo}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <div className="w-1/2 md:w-1/5 block left-0  absolute bottom-0 z-0 ">
              <ExportedImage
                src={dot}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <div className="md:flex flex-col justify-center z-20 items-start  md:pt-0  px-6 md:p-3 w-full md:w-3/4">
              <Bounce>
                <h3
                  className=" md:block font-extrabold text-6xl md:text-9xl py-4  text-white my-1  font-[Montserrat] bg-gradient-to-tr from-[#363F40] via-[#52473D] to-[#733527] md:text-left z-30 text-transparent bg-clip-text bg-cover"
                  // style={{ backgroundImage: "url('images/about.webp')" }}
                >
                  Rapture Raptor
                </h3>
                <p className=" md:text-2xl  text-xl font-semibold text-grey-400 text-white font-[Montserrat]   ">
                  Judgment day is upon us join us as the brave and willing
                  ascend to heaven and the jeets descend to the depths of hell
                </p>

                <div className="flex  md:flex-row  items-center justify-start  gap-2 md:mb-0 my-3 md:my-0 md:mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://uniswap.org")
                    }
                    className="flex items-center justify-between  skew-x-[-20deg]  gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all  text-white p-2 md:p-5 px-5  w-fit  border-none  "
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://www.dextools.io/app")
                    }
                    className="flex items-center justify-between skew-x-[-20deg] gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-r from-blue-300 to-blue-600 hover:scale-105 transition-all  text-white p-2 md:p-5 px-5 w-fit  border-none"
                  >
                    View Chart
                  </button>
                </div>
              </Bounce>
              {/* <div
                className="text-gray-200 text-center gap-2 flex items-center cursor-copy bg-bg1 w-fit bg-opacity-40 my-3 p-1 text-sm font-bold rounded break-all"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3"
                  );
                }}
              >
                <FaCopy />
                0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3
              </div> */}
            </div>
          </div>
        </section>
        {/* <div className="break-all text-white font-bold text-center p-5 mt-7">
          <div className="flex flex-col mb-3">
            <h3 className="text-center text-4xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
              Contract Address
            </h3>
            <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
          </div>
          <br />
          0xd5888e622023d41a37569Cb65eccC3218B775089
        </div> */}
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-[#020873] bg-opacity-5"
          id="About"
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <div className="flex flex-col mb-7">
            <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
              About us
            </h3>
            <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:px-12 justify-center relative  md:gap-10">
            {/* <Zoom>
              <div className="w-full md:w-2/5 ">
                <ExportedImage
                  src={about2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div>
            </Zoom> */}
            <div className="w-full md:w-1/3 block  z-0 ">
              <ExportedImage
                src={bg2}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <Zoom>
              <div className="flex flex-col items-center  py-5 md:w-1/2  transition-all duration-500 h-full md:hover:border-none">
                <h4 className="  md:text-left    font-semibold text-white">
                  We where all given 10 commandments to guide us through this
                  life did your abide or did you sin?
                  <br />
                  <br />
                  10. Thall shall not jeet <br /> 9. To rek thy neighbour is to
                  sin
                  <br /> 8. Shill thy bag
                  <br /> 7. Foward all buys <br />
                  6. Hold thy floor
                  <br /> 5. To ask wen is to sin
                  <br /> 4. Thall shall respect all
                  <br /> 3. Like/retweet
                  <br /> 2. Patience is a virtue
                  <br /> 1. Dont be a bitch
                  <br />
                  <br />
                  We all knew it was coming it is now the question is answered
                  have you made the right choices in this life will you be
                  granted everlasting gains are we all gonna make it?
                  <br />
                  <br />
                  All will be answered with the soon pray you are not sent to
                  the fiery pits of hell with the jeets heavens gates are
                  opening Jesus rapture shall redeem the chosen and banish the
                  sinful.
                  <br />
                  <br />
                  <br /> For we must all appear before the judgment seat of
                  Christ, so that each of us may receive what is due us for the
                  things done while in the body, whether good or bad.
                  <br />
                  <i>~ Corithians 5:10</i>
                </h4>
              </div>
            </Zoom>
            {/* <h3 className="text-center text-3xl md:text-5xl mt-7  w-fit p-1 font-extrabold  text-red-500  font-[Montserrat]">
              Features
            </h3>

            <div className="flex flex-col md:flex-row   justify-center w-full items-center gap-5 md:gap-6 my-5 ">
              {features.map((item, index) => (
                <Zoom key={index}>
                  <div className="p-1 bg-gradient-to-t w-full  from-primary to-secondary rounded-lg">
                    <div className="group px-8   h-fit  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 rounded-lg">
                      <h3 className=" font-[Montserrat]  z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-red-500 self-center ">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div> */}
          </div>
        </section>
        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id=""
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade top>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white ">
                Developments
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {moreFeatures.map((item, index) => (
                  <Zoom key={index}>
                    <div className="group p-8 md:py-12 w-full md:w-1/3 border-l-4 border-blue-700 border-solid flex flex-col justify-center items-center bg-bg1 bg-opacity-80 hover:shadow-2xl transition-all duration-700 hover:shadow-primary rounded-lg">
                      <div className="block p-4 mb-3 w-20 rounded-full  bg-bg2 bg-opacity-40 self-center text-white">
                        {item.icon}
                      </div>

                      <h3 className="   z-10 md:text-lg  font-extrabold my-3 text-center border-gray-300 text-white self-center ">
                        {item.title}
                      </h3>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="px-6 md:px-20 py-16 md:py-24 w-full bg-inherit"
          id=""
        >
          <Fade >
            <h3 className="text-center w-full text-2xl md:text-3xl mb-7   p-1 font-extrabold  text-white  font-[Montserrat]">
              Rapture Raptor  Developments
            </h3>
          </Fade>
          <div className="flex flex-col md:flex-row justify-center gap-4  flex-wrap items-start w-full py-7 text-zinc-50">
            {moreFeatures.map((item, index) => (
              <div
                key={index}
                className="lg:w-[20%] md:w-2/5  p-2 border-zinc-700 border-l border-solid rounded-lg border-opacity-40  px-6 group"
              >
                <div className=" my-3 text-zinc-400 border-zinc-400  group-hover:text-primary rounded-full group-hover:border-primary border-4 shadow-lg group-hover:shadow-primary border-solid w-fit p-2 transition-all duration-700">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-lg font-bold mb-3 font-[Montserrat]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </section> */}
        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id="Tokenomics"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
                Tokenomics
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            <div className="flex p-2 flex-col items-center md:w-2/3">
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center justify-center flex-row gap-2 flex-wrap">
                  {tokenomics.map((item, index) => (
                    <Zoom key={index}>
                      <h3 className="flex text-white items-end  justify-end bg-bg2 p-3 gap-6  bg-opacity-90 w-fit border-b-4 border-solid border-blue-700">
                        <span className="text-center  flex flex-col items-center   break-all">
                          <span className="font-bold  text-xl ">
                            {item.option}
                          </span>{" "}
                          {item.value}
                        </span>
                      </h3>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col   flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {reward.map((item, index) => (
                  <Zoom key={index}>
                    <div className="p-1 bg-gradient-to-t w-full  from-primary to-secondary rounded-lg">
                      <div className="group px-8   h-fit  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 rounded-lg">
                        <h3 className=" font-[Montserrat]  z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-red-500 self-center ">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* <section
          className="p-6 md:p-12 py-16 w-full bg-gradient-to-r from-bg2 to-bg1  flex flex-col items-center bg-cover bg-right md:bg-fixed relative "
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-2xl md:text-3xl mb-10  text-center w-full  font-extrabold  text-zinc-50 font-[Montserrat]">
              Roadmap
            </h3>
          </Fade>

          <div className="flex flex-col justify-center w-full md:w-[60%]  md:items-end items-center  md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="group  md:px-8 w-full  md:w-1/2 md:even:self-start md:my-4   flex flex-col items-center justify-start bg-opacity-60 md:pl-9 border-l border-dashed border-gray-100 md:even:border-l-0 md:even:border-r relative before:h-5 before:w-5 before:rounded-full before:bg-secondary before:absolute before:top-0 even:before:right-[97%]  odd:before:left-[-10px]  md:even:before:right-[-10px]">
                  <div className=" ml-5 mb-5 md:mb-0 md:ml-0  p-2 w-11/12 md:w-fit  ">
                    <h3 className="z-10  text-xl font-[Montserrat]  md:text-2xl  font-bold mt-3 text-left  text-zinc-200 ">
                      {item.title}
                    </h3>

                    <div className=" text-lg  text-zinc-200 z-10  p-3  md:px-0 md:p-0">
                      {item.desc.map((item, index) => (
                        <div
                          className="my-1 flex items-center gap-1"
                          key={index}
                        >
                          <span className="  text-zinc-3s00 text-sm">
                            - {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section> */}
        {/* <section
          className="p-6 md:p-12 py-12 w-full bg-bg2 flex flex-col items-center bg-cover bg-right md:bg-fixed"
          id="Roadmap"
 
        >
          <Fade>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
                Roadmap
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>

          <div className="flex flex-col md:flex-row justify-center w-full md:items-start items-start gap-5 md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="  group py-3 px-5 md:pb-12 w-full  md:h-80  flex flex-col items-center justify-center md:justify-start bg-opacity-60">
                  <h3 className=" z-10   text-xl  font-extrabold my-3 text-center  w-fit text-blue-700">
                    {item.title}
                  </h3>
                

                  <div className=" text-sm  text-white z-10">
                    {item.desc.map((item, index) => (
                      <div
                        className="my-1 flex items-center justify-center text-center gap-1"
                        key={index}
                      >
                        <span className=" w-[95%]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section> */}
        <section
          className="bg-black bg-opacity-40 w-full  flex flex-col justify-center items-center w-full"
          id="Partners"
        >
          <Fade>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
                Our Partners
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full gap-10 py-5">
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage src={p1} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage src={p3} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage src={p4} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage src={p5} alt="" layout="responsive" className="" />
            </div>
            {/* <div className=" w-2/3 md:w-1/4   block">
            <ExportedImage src={p6} alt="" layout="responsive" className="" />
          </div> */}
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage src={p7} alt="" layout="responsive" className="" />
            </div>
            {/* <div className=" w-2/3 md:w-1/4   block">
            <ExportedImage src={p8} alt="" layout="responsive" className="" />
          </div> */}
            <div className=" w-2/3 md:w-1/4   block">
              <ExportedImage
                src={p10}
                alt=""
                layout="responsive"
                className=""
              />
            </div>
          </div>
        </section>
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-[#020873] bg-opacity-5"
          id=""
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <Fade>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   font-[Montserrat]">
                Join Us!
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>
          <div className="flex w-full flex-col items-center md:px-12 justify-center relative  md:gap-10">
            <Zoom>
              {/* <div className="w-full md:w-1/3 ">
                <ExportedImage
                  src={bg2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div> */}
              <h4 className=" md:text-lg text-center    text-xs font-semibold text-white md:w-1/2">
                <br />
                {`Joining our Telegram and Twitter channels is a great way to stay updated on the latest news and developments related to our project. By following us on these social media platforms, you will be among the first to know about new updates, announcements, and events.`}
                <br />
                <br />
                {`Joining our Telegram and Twitter channels is a must for anyone
                who is interested in our project and wants to stay informed and
                engaged. So don't miss out - follow us today!`}
              </h4>
            </Zoom>

            <Zoom>
              <div className="flex flex-col items-center  py-3 w-full  transition-all duration-500  md:hover:border-none">
                <div className="flex  md:flex-row  items-center justify-center w-full  gap-2 md:mb-0 md:my-0 md:mt-6">
                  <button
                    onClick={() => (window.location.href = "https://t.me")}
                    className="flex items-center justify-between  skew-x-[-20deg]  gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all  text-white p-2 md:p-5 px-5  w-fit  border-none   "
                  >
                    Telegram <TbBrandTelegram size={30} />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://twitter.com")
                    }
                    className="flex items-center justify-between skew-x-[-20deg] gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-r from-blue-300 to-blue-600 hover:scale-105 transition-all  text-white p-2 md:p-5 px-5 w-fit  border-none "
                  >
                    Twitter <TbBrandTwitter size={30} />
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </section>

        <section className="  w-full bg-bg2 bg-opacity-40" id="">
          <div className=" w-full py-10 px-6 md:px-48">
            <div className="flex flex-col md:flex-row items-start w-full md:gap-3 gap-4 justify-around">
              <div className="flex items-center">
                <div className="block w-24 md:w-48">
                  <ExportedImage
                    src={logo}
                    alt="logo"
                    layout="responsive"
                    className=""
                  />
                </div>
              </div>
              <Fade>
                <ul className="  flex flex-col items-start justify-start ">
                  <p className="text-blue-700 text-lg font-bold">Links</p>
                  {list.map(
                    ([name, link], index) =>
                      (link === null && (
                        <Link
                          className={`mt-2 pl-2 text-white  m-1 text-center pr-5   `}
                          key={index}
                          activeClass="none"
                          to={`${name}`}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {name}
                        </Link>
                      )) || (
                        <a
                          className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                          key={index}
                          href={`${link}`}
                        >
                          {name}
                        </a>
                      )
                  )}
                </ul>
              </Fade>
              <Fade>
                <ul className="  flex flex-col items-start justify-start ">
                  <p className="text-blue-700 text-lg font-bold">Contact</p>
                  <a
                    className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                    href="https://t.me"
                  >
                    Telegram
                  </a>
                  <a
                    className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                    href="https://twitter.com"
                  >
                    Twitter
                  </a>
                </ul>
                {/* <ul>
                  <p className="text-red-500 text-lg font-bold">E-Mail</p>
                  <a
                    className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                    href="mailto:Rapture Raptortoken@gmail.com"
                  >
                    Rapture Raptortoken@gmail.com
                  </a>
                </ul> */}
              </Fade>
            </div>
          </div>
        </section>
        <section className=" text-sm bg-bg2 text-center p-1 text-white">
          Copyright © {new Date().getFullYear()} Rapture Raptor. All Rights
          Reserved.
        </section>
      </Layout>
    </div>
  );
};

export default Home;
