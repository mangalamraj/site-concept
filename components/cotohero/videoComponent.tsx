import { useEffect, useRef, useState } from "react";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hamburger from "hamburger-react";

import Image from "next/image";
import { Button } from "../ui/button";
import { Cross, MoveRight, X } from "lucide-react";
import TrustedBy from "../trustedBy/trustedBy";

const neuton = Merriweather({
  subsets: ["latin"],
  weight: ["800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playbackRate, setPlaybackRate] = useState(0.7);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!videoRef?.current) {
      return;
    }
    videoRef?.current?.addEventListener("timeupdate", function () {
      if (this.currentTime >= 4) {
        this.pause();
      }
    });
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div className="relative w-screen h-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        className=" object-cover w-screen h-screen top-0 left-0 -z-1 opacity-65"
      >
        <source src="/c3.mp4" type="video/mp4" />
      </video>

      <Image
        src="https://www.cotopay.in/img/CotopayLogo-white.png"
        width={120}
        height={120}
        alt="logo"
        className="absolute top-0 2xl:m-20 ml-4 mt-10 xl:m-16 text-white text-4xl"
      ></Image>
      <div className="absolute right-0 top-0 mt-4 2xl:mt-16 xl:m-12 mr-4 xl:mr-20 text-white text-4xl border-2 p-2 bg-transparent">
        <Hamburger direction="right" size={23} />
      </div>
      {visible && (
        <div className="absolute bottom-0 left-1/2 -translate-1/2 bg-gray-400/10 px-6 pt-2 xl:pt-4 pb-4 xl:pb-6 -mb-8 xl:-mb-6 text-sm border animate-fadeUp">
          <div className="w-full flex justify-end ">
            <X
              size={14}
              className="hover:opacity-75 cursor-pointer"
              onClick={() => {
                setVisible(false);
              }}
            />
          </div>
          <p>Hi there</p>
          <p>
            Need Help?{" "}
            <span className="text-[#FEC288] hover:underline cursor-pointer">
              Contact Us
            </span>
          </p>
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-1 justify-between items-center w-full">
        <div
          className={`2xl:text-[114px] xl:text-[104px] text-4xl xl:leading-28 tracking-tight  text-center ${neuton.className} [word-spacing:--spacing(-1)] `}
        >
          crafted for <br />
          <span className="inline w-fill"> businesses </span>
        </div>
        <p
          className={`mx-auto xl:mt-6 xl:max-w-4xl font-medium w-[80%] text-center xl:text-lg 2xl:text-xl text-sm leading-relaxed text-white/95 dark:text-white/90 ${poppins.className}`}
        >
          Seamlessly issue, manage, and track your business expenses with
          CotoPay’s UPI vouchers powered by e-RUPI.
        </p>
        <div className="md: mt-10">
          <Button
            variant={"outline"}
            className="rounded-none p-6 flex justify-center items-center text-gray-200 cursor-pointer border-[#FEC288]"
          >
            Download Cotopay <MoveRight className="mt-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
