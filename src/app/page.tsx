"use client";

import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart]= useState(false)
  return <main>
    <Navbar setShowCart={setShowCart} />
    {showCart && <Cart setShowCart={setShowCart}/>}
    <Hero/>
    <Feature/>
    <TrendingProducts/>
    <Banner/>
    <Footer/>
  </main>;
}
