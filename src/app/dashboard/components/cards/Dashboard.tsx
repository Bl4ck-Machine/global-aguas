import React from "react";

export default function DashboardCard({_className, children}: {_className: string, children: React.ReactNode}) {
  return (
    <>
      <div className={_className} >
        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
          <div className="relative h-full overflow-hidden bg-cover rounded-xl">
            
            <div className="relative z-10 flex flex-col flex-auto h-full p-4">
              {
                children
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
