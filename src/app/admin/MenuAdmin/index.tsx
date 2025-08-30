"use client";

import clsx from "clsx";
import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const navClasses = clsx(
    "bg-slate-300 text-slate-800 rounded-lg",
    "flex flex-col sm:flex-row sm:flex-wrap mb-8",
    !isOpen && "overflow-hidden",
    !isOpen && "h-10",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex items-center gap-2 cursor-pointer",
    "transition hover:bg-slate-500",
    "h-10",
    "shrink-0",
    'rounded-lg'
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-300, italic, sm:hidden"
  );
  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon /> Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon /> Posts
      </Link>
       <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon /> Criar Post
      </Link>
    </nav>
  );
}
