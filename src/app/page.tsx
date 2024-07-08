"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "../components/NavbarComponent";
import {
  Hero,
  Clients,
  Manage,
  Pixelgrade,
  BusinessStats,
  Design,
  MeetAllCustomers,
  Marketing,
  Demo,
} from "@/app/section";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme/theme";

export default function Home() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <main>
        <header className="bg-silver">
          <NavbarComponent />
          <section className="bg-silver">
            <Hero />
          </section>
        </header>
        <section className="bg-white">
          <Clients />
          <Manage />
          <Pixelgrade />
        </section>
        <section className="bg-silver">
          <BusinessStats />
        </section>
        <section className="bg-white">
          <Design />
        </section>
        <section className="bg-silver">
          <MeetAllCustomers />
        </section>
        <section className="bg-white pb-5">
          <Marketing />
        </section>
        <section className="bg-silver mt-5">
          <Demo />
        </section>
        <footer className="bg-secondary">
          <FooterComponent />
        </footer>
      </main>
    </ThemeProvider>
  );
}
