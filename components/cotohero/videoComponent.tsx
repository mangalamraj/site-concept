import { useEffect, useRef, useState } from "react";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import Hamburger from "hamburger-react";

import Image from "next/image";
import { Button } from "../ui/button";
import { Cross, MoveRight, X } from "lucide-react";
import TrustedBy from "../trustedBy/trustedBy";
import MenuOverlay from "../menuOverlay/menu";
import { TextAnimate } from "../ui/text-animate";

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
  const [hero, showHero] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const STOP_AT = 4; // seconds
    let stopped = false;

    const onTimeUpdate = () => {
      if (!stopped && video.currentTime >= STOP_AT) {
        video.pause(); // allowed ONCE
        stopped = true; // prevent future pauses
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
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
    <div className="w-full">
      <Image
        src="https://www.cotopay.in/img/CotopayLogo-white.png"
        width={120}
        height={120}
        alt="logo"
        className=" top-0 2xl:m-20 ml-4 mt-10 xl:m-16 text-white text-4xl z-40 fixed"
      ></Image>
      <div className="fixed right-0 top-0 mt-4 2xl:mt-16 xl:m-12 mr-4 xl:mr-20 text-white text-4xl border-2 p-2 bg-transparent z-40">
        <Hamburger
          direction="right"
          size={23}
          onToggle={(toggled) => showHero(!toggled)}
        />
      </div>
      {hero ? (
        <div className="relative w-screen h-screen">
          <video
            ref={videoRef}
            autoPlay
            playsInline // 🔑 critical for iOS
            muted
            className=" object-cover w-screen h-screen top-0 left-0 -z-1 opacity-65"
          >
            <source src="/c3.mp4" type="video/mp4" />
          </video>

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
            <TextAnimate
              animation="blurInUp"
              duration={0.6}
              once
              by="word"
              segmentClassName={`2xl:text-[114px] xl:text-[104px] text-4xl xl:leading-28 tracking-tight  text-center ${neuton.className} [word-spacing:--spacing(-1)] `}
            >
              crafted for
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              duration={0.6}
              delay={0.8}
              once
              by="word"
              className={`2xl:text-[114px] xl:text-[104px] text-4xl xl:leading-28 tracking-tight  text-center ${neuton.className} [word-spacing:--spacing(-1)] `}
            >
              businesses
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              duration={0.6}
              delay={1}
              once
              by="word"
              className={`mx-auto xl:mt-6 xl:max-w-4xl font-medium w-[80%] text-center xl:text-lg 2xl:text-xl text-sm leading-relaxed text-white/95 dark:text-white/90 ${poppins.className}`}
            >
              Seamlessly issue, manage, and track your business expenses with
              CotoPay’s UPI vouchers powered by e-RUPI.
            </TextAnimate>
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
      ) : (
        <MenuOverlay />
      )}
    </div>
  );
}
