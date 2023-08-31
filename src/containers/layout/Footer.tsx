"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import maltIcon from "@/assets/icons/malt.svg";

export function Footer() {
  return (
    <footer className="w-full h-footer-mobile bg-black md:h-footer-desktop">
      <div className="container-custom flex flex-col justify-center gap-4 h-full py-8">
        <div className="flex justify-evenly items-center md:justify-center md:gap-8 md:my-0 md:mx-auto">
          <a
            href="https://www.linkedin.com/in/michel-lamarliere/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={linkedinIcon}
              alt={"Linkedin"}
              className="flex self-center w-5 h-5"
            />
          </a>
          <a
            href="https://www.malt.fr/dashboard/freelancer"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={maltIcon}
              alt="Malt"
              className="flex self-center w-5 h-5"
            />
          </a>
          <a
            href="https://github.com/michel-lamarliere"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={githubIcon}
              alt="GitHub"
              className="flex self-center w-5 h-5"
            />
          </a>
          <Link href="/legal-notice" className="text-white text-xs">
            Mentions Légales
          </Link>
        </div>
        <div className="flex justify-center text-gray-700 text-xs">
          Par
          <span className="font-medium">&nbsp;Michel Lamarlière</span>
        </div>
        <div className="flex justify-center text-gray-700 text-xs">
          <div>
            Logo et Web Design par
            <a
              href="https://www.enolalouge.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-purple"
            >
              &nbsp;Enola Louge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
