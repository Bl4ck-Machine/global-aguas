import dashboardIcon from "../../../../../public/images/sidebar-icons-svg/dashboard.svg";

import tableIcon from "../../../../../public/images/sidebar-icons-svg/tables.svg";

export const sidebarMenu: Array<ISidebar> = [
    {
        src: dashboardIcon,
        description: "Painel Geral",
        link: "/dashboard",
        state: "dashboard"
    },
    {
        src: tableIcon,
        description: "Tabelas",
        link: "/dashboard/tables",
        state: "tables"
    }
]