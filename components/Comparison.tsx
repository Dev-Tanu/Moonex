import { Check, X } from "lucide-react";
import Image from "next/image";

const features = [
  "Point no one",
  "Point no two this",
  "Point no three this",
  "Point no four this",
  "Point no five this",
];

export function Comparison() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-neue-machina text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Why <span className="text-yellow-400">MoonEX</span> ?
          </h2>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
          <div className="w-full max-w-3xl border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm bg-white/10">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left font-neue-machina text-sm sm:text-lg p-2 sm:p-4 text-white">
                      Comparison
                    </th>
                    <th className="text-center p-2 sm:p-4">
                      <div
                        className="flex
                       flex-row justify-center items-center"
                      >
                        {" "}
                        {/* <Image
                          src={"/image.png"}
                          alt="uniswap"
                          height={58}
                          width={90}
                        /> */}
                        <Image
                          src={"/moonex.png"}
                          alt="uniswap"
                          height={45}
                          width={188}
                        />
                      </div>
                    </th>
                    <th className="text-center flex justify-center font-neue-machina text-sm sm:text-lg p-2 sm:p-4 text-white">
                      <Image
                        src={"/uniswap.png"}
                        alt="uniswap"
                        height={45}
                        width={178}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-t border-white/10">
                      <td className="p-2 sm:p-4 font-raleway text-sm sm:text-base text-white">
                        {feature}
                      </td>
                      <td className="text-center p-2 sm:p-4">
                        <Check className="inline-block h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                      </td>
                      <td className="text-center p-2 sm:p-4">
                        <X className="inline-block h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
