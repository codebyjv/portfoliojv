import { useEffect, useRef } from "react";
import { Github, Linkedin } from "lucide-react"; // ajuste conforme seu projeto
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };
  const { i18n } = useTranslation();


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (sectionRef.current) {
        sectionRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #6a11cb, #2575fc)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl">
        <p className="text-2xl md:text-3xl font-light italic mb-4 text-purple-200">
          {t("hero.greeting")}
        </p>

        {/* Wrapper para o título + botão */}
        <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t("hero.name")}
            </h1>

            {/* Botão de idioma*/}
            <div className="absolute -top-6 right-0">
                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                    {i18n.language === "en" ? "PT-BR" : "EN"}
                </button>
            </div>
        </div>
        <p className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed text-gray-200">
          {t("hero.description")}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/codebyjv" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/joaov-sant/" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-8">
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t("hero.projects")}
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t("hero.about")}
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t("hero.contact")}
        </Button>
      </div>
    </section>
  );
}
