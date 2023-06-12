import React from "react";
import DashboardCard from "./components/cards/Dashboard";
import StatusCard from "./components/cards/StatusCard";

import { AiOutlineUsergroupAdd, AiOutlineFileDone } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { GiTruck } from "react-icons/gi";
import { LineChart } from "../components/line-chart/LineChart";
import { BarChart } from "../components/pychart/PyChart";

export default function Page() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap">
          <StatusCard
            _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            title="Adesões"
            total="590,00"
            amount="75"
          >
            <AiOutlineUsergroupAdd />
          </StatusCard>

          <StatusCard
            _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            title="Avaliações"
            total="590,00"
            amount="75"
          >
            <TbTargetArrow />
          </StatusCard>

          <StatusCard
            _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            title="Motoristas em serviço"
            total="590,00"
            amount="75"
          >
            <GiTruck />
          </StatusCard>

          <StatusCard
            _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            title="Viagens efectuadas"
            total="590,00"
            amount="75"
          >
            <AiOutlineFileDone />
          </StatusCard>
        </div>

        <div className="flex flex-wrap mt-6">
          <DashboardCard _className="w-full max-w-full px-3 lg:w-7/12 lg:flex-none mb-6">
            <h5 className="pt-2 mb-6 font-bold ">Zonas mais abastecidas</h5>
            <p className="">Gráfico</p>
          </DashboardCard>
          <DashboardCard _className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none mb-6">
            <h5 className="pt-2 mb-6 font-bold ">Estatística diária</h5>
            <p className="">
              Estatística diária é muito importante, pois possibita ver o
              tráfego de valores e estimativas do impacto da aplicação, é bom
              ter o controlo da aplicação, de modo que se tenha uma visão clara
              para uma atualização necessária.
            </p>
          </DashboardCard>

          <DashboardCard _className="w-full max-w-full px-3 lg:w-12/12 lg:flex-none mb-6">
            <h5 className="pt-2 mb-6 font-bold ">
              Estimativas de arrecadações
            </h5>
            <div className="bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 rounded-md mb-2">
              <LineChart />
            </div>
            <p>Ver mais</p>
          </DashboardCard>

          <DashboardCard _className="w-full max-w-full px-3 lg:w-12/12 lg:flex-none mb-6">
            <h5 className="pt-2 mb-6 font-bold ">Licenças</h5>
            <p className="">Gráfico</p>
            <BarChart />
          </DashboardCard>

          <DashboardCard _className="w-full max-w-full px-3 lg:w-12/12 lg:flex-none mb-6">
            <h5 className="pt-2 mb-6 font-bold ">
              Avaliação diária dos clientes
            </h5>
            <p className="">Gráfico</p>
          </DashboardCard>
        </div>
      </div>
    </>
  );
}
