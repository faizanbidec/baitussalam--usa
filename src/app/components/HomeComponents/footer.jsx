"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DonationModal from "../DonationModal/DonationModal";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 




const Footer = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
            <DonationModal open={open} setOpen={setOpen} />

    <footer
      className="text-white px-6 py-10 mt-20 "
      style={{
        background: "linear-gradient(180deg, #BC153F 0%, #870A0A 154.51%)",
      }}
    >
      <div className="mx-auto border-b border-white pb-10 flex flex-col md:flex-row gap-10 justify-between">
        {/* ✅ Logo Section — untouched */}
        <div className="">
          <div className="relative mb-10 h-[80px] z-10">
            <div className="absolute -top-11 left-8 sm:left-10 z-50">
              <div className="bg-white rounded-b-[30px]  flex items-center justify-center px-6 pt-6 pb-8 ml-[-1px] ">
                <Image
                  src="/Baitussalam USA-02.png"
                  alt="Baitussalam USA"
                  width={200}
                  height={60}
                  priority
                />
              </div>
            </div>
          </div>

          {/* ✅ Description centered on mobile only */}
          <p className="text-sm leading-relaxed text-center md:text-left mt-4">
            Baitussalam Welfare Trust, founded in 2010, supports education, charity, and community programs, empowering lives.
          </p>
        </div>



        {/* ✅ Footer Links — neatly adjusted for mobile */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>

            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link href="/programs">Programs</Link>
              </li>
             <li className="hover:underline">
  <button
    type="button"
    onClick={() => setOpen(true)}
    className="cursor-pointer relative z-10 hover:underline"
  >
    Donate
  </button>
</li>

              <li className="hover:underline cursor-pointer">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>

          </div>

     {/* Column 2 */}
<div>
  <h4 className="font-semibold text-lg mb-4">Our Services</h4>

  <ul className="space-y-2 text-sm">
    <li>
      <Link
        href="/services/ijtema-e-qurbani"
        className="hover:underline cursor-pointer"
      >
        Ijtema-e-Qurbani
      </Link>
    </li>

    <li>
      <Link
        href="/services/educational-support"
        className="hover:underline cursor-pointer"
      >
        Educational Support
      </Link>
    </li>

    <li>
      <Link
        href="/services/healthcare-support"
        className="hover:underline cursor-pointer"
      >
        Healthcare & Hospitals
      </Link>
    </li>

    <li>
      <Link
        href="/services/women-empowerment"
        className="hover:underline cursor-pointer"
      >
        Women Empowerment
      </Link>
    </li>

    <li>
      <Link
        href="/services/widow-and-orphan-support"
        className="hover:underline cursor-pointer"
      >
        Widow & Orphan Support
      </Link>
    </li>
  </ul>
</div>


          {/* Column 3 */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <p className="text-sm mb-2">
              <strong>Address:</strong> Baitussalam-USA, 1038 E. Bastanchury Rd., Suite 239, Fullerton, CA 92835, USA
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> +92-21-111-298-111
            </p>
            <p className="text-sm mb-4">
              <strong>Email:</strong> info@baitussalam.org
            </p>

            <div>
              <span className="block mb-2 font-medium">Social Links</span>
              <div className="flex space-x-4 text-lg">
          <a href ="https://www.tiktok.com/@baitussalamusa" aria-label="TikTok" className="hover:text-[#BC153F]">
            <FaTiktok size={13} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#BC153F]">
            <FaFacebookF size={13} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#BC153F]">
            <FaXTwitter size={13} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#BC153F]">
            <FaInstagram size={13} />
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer Bottom */}
      <div className="mx-11 mt-6 flex flex-col md:flex-row justify-between text-xs text-white/80 pt-4">
        <p>Copyright 2025 © BAITUSSALAM USA</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:underline cursor-pointer">
            Terms & Conditions
          </span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
      
    </footer>
    
    </>

  );
};

export default Footer;
