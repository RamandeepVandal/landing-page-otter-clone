import React from "react";
// components
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Promotions } from "../components/Promotions";
import { Quote } from "../components/Quote";
import { TargetAud } from "../components/TargetAud";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Promotions />
      <Quote />
      <TargetAud />
      <Faq />
      <Footer />
    </div>
  );
};
