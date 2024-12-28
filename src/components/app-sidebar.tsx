import * as React from "react";
import { FlaskConical, Bot, Command, Frame, LifeBuoy, Map, PieChart, Send, Globe, Calculator } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
    user: {
        name: "Leonardo Santos",
        email: "leo@leo.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Linguagens, Códigos e suas Tecnologias",
            url: "#",
            icon: Calculator,
            isActive: true,
            items: [
                {
                    title: "Português",
                    url: "#",
                },
                {
                    title: "Literatura",
                    url: "#",
                },
                {
                    title: "Artes",
                    url: "#",
                },
                {
                    title: "Educação Física",
                    url: "#",
                },
                {
                    title: "Tecnologias da Informação",
                    url: "#",
                },
                {
                    title: "Língua Estrangeira",
                    url: "#",
                },
            ],
        },
        {
            title: "Matemática e suas Tecnologias",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Aritmética",
                    url: "#",
                },
                {
                    title: "Álgebra",
                    url: "#",
                },
                {
                    title: "Geometria",
                    url: "#",
                },
                {
                    title: "Probabilidade e Estatística",
                    url: "#",
                },
                {
                    title: "Funções",
                    url: "#",
                },
                {
                    title: "Matemática Financeira",
                    url: "#",
                },
            ],
        },
        {
            title: "Ciências da Natureza e suas Tecnologias",
            url: "#",
            icon: FlaskConical,
            items: [
                {
                    title: "Química",
                    url: "#",
                },
                {
                    title: "Física",
                    url: "#",
                },
                {
                    title: "Biologia",
                    url: "#",
                },
                {
                    title: "Meio Ambiente",
                    url: "#",
                },
            ],
        },
        {
            title: "Ciências Humanas e suas Tecnologias",
            url: "#",
            icon: Globe,
            items: [
                {
                    title: "História",
                    url: "#",
                },
                {
                    title: "Geografia",
                    url: "#",
                },
                {
                    title: "Filosofia",
                    url: "#",
                },
                {
                    title: "Sociologia",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">ENEM - LMS</span>
                                    <span className="truncate text-xs">by devLeoFRS</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}