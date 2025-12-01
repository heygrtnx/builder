"use client";

import * as React from "react";
import { Command, LifeBuoy, Send } from "lucide-react";

import { NavProjects } from "@/components/reusables/customUI/nav-projects";
import { NavSecondary } from "@/components/reusables/customUI/nav-secondary";
import { NavUser } from "@/components/reusables/customUI/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/vercel.svg",
	},

	navSecondary: [
		{
			title: "Support",
			url: `mailto:${process.env.NEXT_PUBLIC_SUPPORT_URL}`,
			icon: LifeBuoy,
		},
		{
			title: "Feedback",
			url: `mailto:${process.env.NEXT_PUBLIC_FEEDBACK_URL}`,
			icon: Send,
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
		},
		{
			name: "Sales & Marketing",
			url: "#",
		},
		{
			name: "Travel",
			url: "#",
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			variant="inset"
			{...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild>
							<a href="#">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{process.env.NEXT_PUBLIC_APP_NAME}</span>
									<span className="truncate text-xs">{process.env.NEXT_PUBLIC_SUB_TITLE}</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavProjects projects={data.projects} />
				<NavSecondary
					items={data.navSecondary}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
