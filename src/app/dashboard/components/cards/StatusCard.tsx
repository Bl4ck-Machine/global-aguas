import React from "react";
import { StatusCard } from "./interfaces";

export default function StatusCard({ _className, title, total, amount, children }: StatusCard) {
  return (
    <>
      <div className={_className}>
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                    {title}
                  </p>
                  <h5 className="mb-0 font-bold">
                    ${total}
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                      +55%
                    </span>
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center  rounded-lg bg-gradient-to-tl from-orange-primary to-blue-500">
                  <i className="ni leading-none ni-money-coins text-xl relative top-3.5 text-primary text-white flex justify-center">
                    {children}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
