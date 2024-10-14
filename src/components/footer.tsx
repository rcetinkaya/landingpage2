"use client"
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AppleButton } from "./buttons/appleButton";
import { PlayStoreButton } from "./buttons/playStoreButton";

export function Footer() {

  return (
    <footer className="bg-[#0F172A] p-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 ">
        <div className="text-center sm:text-start">
          <h4 className="font-bold text-lg mb-4">Product</h4>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/overview">Overview</Link>
            </li>
            <li>
              <Link href="/browse">Browse</Link>
            </li>
            <li>
              <Link href="/accessibility">Accessibility</Link>
            </li>
            <li>
              <Link href="/five">Five</Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-start">
          <h4 className="font-bold text-lg mb-4">Solutions</h4>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href="/brainstorming">Brainstorming</Link>
            </li>
            <li>
              <Link href="/ideation">Ideation</Link>
            </li>
            <li>
              <Link href="/wireframing">Wireframing</Link>
            </li>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/design">Design</Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-start">
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/developers">Developers</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/integrations">Integrations</Link>
            </li>
            <li>
              <Link href="/reports">Reports</Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-start ">
          <h4 className="font-bold text-lg  mb-4">Get the App</h4>
          <div className="flex flex-col gap-y-4 items-center sm:items-start ">
            <AppleButton />
            <PlayStoreButton />
          </div>
          <div className="mt-6 ">
            <h4 className="font-bold text-lg  mb-4">Follow Us</h4>
            <div className="flex  gap-4  justify-center sm:justify-start">
              <Link href="https://www.youtube.com" aria-label="YouTube">
                <FaYoutube size={24} />
              </Link>
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-gray-700 my-8" />
      <div className="flex flex-col sm:flex-row text-base justify-between items-center mb-8 px-4 sm:px-8">
        <div className="text-center sm:text-left">
          <p>Collers © 2023. All rights reserved.</p>
        </div>
        <div className="flex  gap-4 items-center justify-center sm:mt-0 mt-4 ">
          <Link href="/terms" aria-label="Terms">
            <span>Terms</span>
          </Link>
          <Link href="/Privacy" aria-label="Privacy">
            <span>Privacy</span>
          </Link>
          <Link href="/Contact" aria-label="Contact">
            <span>Contact</span>
          </Link>
          <div className="flex items-center gap-x-2">
            <img src="icons/language.svg" height={24} width={24} alt="Language" />
            <div className="flex gap-4 items-center">
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
