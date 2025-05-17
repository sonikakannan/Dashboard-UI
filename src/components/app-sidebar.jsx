import React from "react"; 
import { RiFileList3Line, RiLink, RiChat3Line } from "react-icons/ri";
import { LuCircleDollarSign, LuNetwork } from "react-icons/lu";
import {
  MdOutlineStars,
  MdOutlineNotificationsActive,
  MdHelpOutline,
} from "react-icons/md";
import { IoLogoOctocat } from "react-icons/io5";
import { FaPlug, FaRegNewspaper } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { NavMain } from "../components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { useState } from "react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Articles",
      url: "/",
      icon: RiFileList3Line,
      isActive: true,
      items: [
        { title: "Create Article", url: "/articles/create" },
        { title: "Generated Articles", url: "/articles/generated" },
        { title: "Keyword Projects", url: "/articles/projects" },
        {
          title: "AI Keyword to Article",
          url: "/articles/ai-keyword-to-article",
        },
        {
          title: "Steal Competitor Keyword",
          url: "/articles/steal-competitor-keyword",
        },
        { title: "Import Keyword from GSC", url: "/articles/import-gsc" },
        { title: "Manual Keyword to Article", url: "/articles/manual" },
        { title: "Bulk Keyword to Article", url: "/articles/bulk" },
        { title: "Longtail Keyword to Article", url: "/articles/longtail" },
        { title: "Article Settings", url: "/articles/settings" },
      ],
    },
    { title: "Auto Blog", url: "/auto-blog", icon: FaRegNewspaper },
    { title: "Internal Links", url: "/internal-links", icon: LuNetwork },
    { title: "Free BackLinks", url: "/free-backlinks", icon: RiLink },
    { title: "Intergrations", url: "/integrations", icon: FaPlug },
    { title: "Subscription", url: "/subscription", icon: MdOutlineStars },
    { title: "Affiliate Program", url: "/affiliate", icon: LuCircleDollarSign },
    { title: "Help Center", url: "/help", icon: MdHelpOutline },
    { title: "Updates", url: "/updates", icon: MdOutlineNotificationsActive },
    { title: "Live Chat Support", url: "/chat-support", icon: RiChat3Line },
    { title: "Profile", url: "/profile", icon: IoLogoOctocat },
  ],
};

export function AppSidebar({ ...props }) {
  const [selectedDomain, setSelectedDomain] = useState("amazon.com");

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <h1 className="text-4xl font-extrabold text-center">abun</h1>

        {/* Domain Dropdown */}
        <div className="flex justify-center mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full w-full"
              >
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 w-4 h-4 rounded-full" />
                <span>{selectedDomain}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {["amazon.com", "flipkart.com", "ebay.com", "yourstore.com"].map(
                (domain) => (
                  <DropdownMenuItem
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                  >
                    {domain}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
