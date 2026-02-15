import { useEffect, useRef, useState } from "react";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hamburger from "hamburger-react";

import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
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
  const videoRef = useRef();
  const [playbackRate, setPlaybackRate] = useState(0.7);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    videoRef.current.addEventListener("timeupdate", function () {
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
        <source src="/c2.mp4" type="video/mp4" />
      </video>

      <Image
        src="https://www.cotopay.in/img/CotopayLogo-white.png"
        width={120}
        height={120}
        alt="logo"
        className="absolute top-0 m-20 text-white text-4xl"
      ></Image>
      <div className="absolute right-0 top-0 mt-16 mr-20 text-white text-4xl border-2 p-2 bg-transparent">
        <Hamburger direction="right" size={23} />
      </div>
      {visible && (
        <div className="absolute bottom-0 left-1/2 -translate-1/2 bg-gray-400/10 px-4 py-4 -mb-6 text-sm border animate-fadeUp">
          <p>Hi there</p>
          <p>
            Need Help?{" "}
            <span className="text-[#FEC288] hover:underline cursor-pointer">
              Contact Us
            </span>
          </p>
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-1 justify-between items-center">
        <div
          className={`text-[114px] leading-28 tracking-tight  text-center ${neuton.className} [word-spacing:--spacing(-1)] `}
        >
          crafted for <br />
          <span className="inline w-fill"> businesses </span>
        </div>
        <p
          className={`mx-auto mt-6 max-w-4xl font-medium w-[68%] text-center text-xl leading-relaxed text-white/95 dark:text-white/90 ${poppins.className}`}
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
