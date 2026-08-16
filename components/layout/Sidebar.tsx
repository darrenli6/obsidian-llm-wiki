"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DirectoryItem from "@/components/directory-item";
import type { DirectoryNode } from "@/lib/content";
import Link from "next/link";
import { FolderTree, Menu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchDialog from "../search-dialog";

interface SidebarProps {
  treeData: DirectoryNode[];
}

export default function Sidebar({ treeData }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (window.innerWidth < 768) setIsOpen(false);
  }, [pathname]);

  return (
    <div className="h-screen w-0 shrink-0 sticky top-0 md:w-auto">
      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-full shrink-0 z-40",
          "transition-all duration-300 ease-in-out",
          "overflow-hidden bg-background",
          isOpen ? "w-72 border-r" : "w-0 border-none"
        )}
      >
        <div
          className={cn(
            "p-5 pl-14 h-full flex flex-col mt-6",
            "transition-opacity duration-200 ease-in-out",
            isOpen ? "opacity-100" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <h3 className="text-xl font-medium mb-4 shrink-0">
            <Link href="/">Directory</Link>
          </h3>
          <div className="flex items-center gap-1">
            <SearchDialog />
          </div>
          {!isHomePage && (
            <Button className="mt-4" variant="secondary" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          )}
          <div className="space-y-1 flex-grow overflow-y-auto mt-4">
            {treeData.map((node) => (
              <DirectoryItem
                key={node.name + (node.slug?.join("-") ?? "")}
                node={node}
                level={0}
              />
            ))}
          </div>
        </div>
      </aside>
      {isOpen && (
        <button
          type="button"
          aria-label="Close Directory"
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[1px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="fixed left-0 top-2 z-50 flex w-10 flex-col items-center gap-1">
        <Button size="icon" variant={isOpen ? "secondary" : "ghost"} title={isOpen ? "Close Directory" : "Open Directory"} aria-label={isOpen ? "Close Directory" : "Open Directory"} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FolderTree className="size-4" /> : <Menu className="size-4" />}
        </Button>
        <Button size="icon" variant={pathname === "/graph" ? "secondary" : "ghost"} title="Knowledge Graph" asChild>
          <Link href="/graph"><Network className="size-4" /></Link>
        </Button>
      </div>
    </div>
  );
}
