import * as React from "react";
import { FlaskConical, Command, Bot, Send, Globe, Calculator, Book } from "lucide-react";

import { NavMain } from "@/components/nav-main";
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
import ModalAi from "./modal-ai";

const data = {
    user: {
        name: "Leonardo Santos",
        email: "leo@leo.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Linguagens, Códigos e suas Tecnologias",
            url: "/student-home/linguagens-codigos-tecnologias",
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
            url: "/student-home/matematica-e-tecnologias",
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
            url: "/student-home/ciencias-da-natureza-e-tecnologias",
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
            url: "/student-home/ciencias-humanas-e-tecnologias",
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
            title: <ModalAi />,
            url: "#",
            icon: Bot,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
        {
            title: "Cronograma de estudos",
            url: "#",
            icon: Book,
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
                            <a href="/student-home">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">ENEM A.I - LMS</span>
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
