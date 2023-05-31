import React from "react";

export default function DashboardCard({_className}: {_className: string}) {
  return (
    <>
      <div className={_className} >
        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
          <div className="relative h-full overflow-hidden bg-cover rounded-xl">
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
            <div className="relative z-10 flex flex-col flex-auto h-full p-4">
              <h5 className="pt-2 mb-6 font-bold ">Work with the rockets</h5>
              <p className="">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
              <a
                className="mt-auto mb-0 font-semibold leading-normal group text-sm"
                href="javascript:;"
              >
                Read More
                <i
                  className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
