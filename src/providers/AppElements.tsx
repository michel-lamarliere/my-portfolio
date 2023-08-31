"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToTopButton } from "@/components/buttons/ToTopButton/ToTopButton";
import { HomeButton } from "@/components/buttons/HomeButton/HomeButton";

export function AppElements() {
  return (
    <>
      <HomeButton />
      <ToTopButton />
      {/*<ScrollToTop />*/}
    </>
  );
}

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
