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
        description: "Solicitações",
        link: "/dashboard/solicitations",
        state: "solicitations"
    },
    {
        src: tableIcon,
        description: "Contas",
        link: "/dashboard/accounts",
        state: "accounts",
        icon: true
    },
    {
        src: tableIcon,
        description: "Licenças",
        link: "/dashboard/licenses",
        state: "licenses",
        icon: true
    },
    {
        src: tableIcon,
        description: "Motoristas",
        link: "/dashboard/drivers",
        state: "drivers"
    },
    {
        src: tableIcon,
        description: "Viagens",
        link: "/dashboard/travels",
        state: "travels"
    },
    {
        src: tableIcon,
        description: "Avaliações",
        link: "/dashboard/evaluations",
        state: "evaluations"
    },
    {
        src: tableIcon,
        description: "FeedBacks",
        link: "/dashboard/feedbacks",
        state: "feedbacks"
    }
]