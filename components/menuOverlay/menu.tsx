"use client";

import Image from "next/image";

const MenuOverlay = () => {
  return (
    <div className="aboslute inset-0 bg-black text-white z-50 overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-12 gap-10   md:px-6 md:px-20 mt-32 md:pt-10 pb-20">
        <div className="col-span-12 md:col-span-3 space-y-6">
          {["SOLUTIONS", "FEATURES", "ABOUT US", "FAQ", "INSIDER PERKS"].map(
            (item) => (
              <div
                key={item}
                className="text-lg md:text-xl tracking-[0.3em] text-gray-400
                           hover:text-white cursor-pointer
                           border-b border-white/10
                           py-4 px-2 hover:bg-zinc-900 transition"
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div className="hidden md:block md:col-span-9 space-y-12 ">
          <div className="relative overflow-hidden border border-white/10 ">
            <div
              className="relative h-[260px]
                         bg-[url('/b.jpg')]
                         bg-cover
                         bg-center
                         bg-no-repeat
                         flex items-center justify-center text-center"
            >
              <div className="w-full h-full absolute bg-black/40"></div>
              <p className="text-xl tracking-[0.3em] text-white z-1 font-semibold ">
                SEAMLESS CONTROL
                <br /> OVER ISSUANCE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                key: 1,
                title: "SOLUTIONS",
                desc: "purpose-based digital vouchers for business payouts",
              },
              {
                key: 2,

                title: "FEATURES",
                desc: "end-to-end issuance, tracking, and settlement",
              },
              {
                key: 3,

                title: "ABOUT US",
                desc: "built for enterprises, compliance, and scale",
              },
              {
                key: 4,

                title: "CAREERS",
                desc: "help shape the future of regulated digital payments",
              },
            ].map((card, index) => (
              <div key={index ?? index} className="space-y-3">
                <div className="relative h-36 border border-white/10 bg-white/5">
                  <Image
                    src={`/p${index + 1}.svg`}
                    alt="Product illustration"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm tracking-[0.25em] text-white">
                  {card.title}
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 space-y-6 max-w-4xl">
            <h3 className="text-2xl tracking-tight">
              Built for modern business payouts
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              Cotopay enables businesses to issue purpose-locked digital
              vouchers powered by e-RUPI. Designed for enterprise workflows, our
              platform offers real-time tracking, controlled redemption, and
              seamless integration with existing finance systems.
            </p>

            <p className="text-sm text-white/60 leading-relaxed">
              From employee benefits to customer incentives and vendor payments,
              Cotopay ensures compliance, transparency, and operational
              efficiency at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
