import { useState } from 'react';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Github, Linkedin, Mail, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import LanguageProgressBars from "../../components/ui/LanguageProgressBars";
import { ImageModal } from "../../components/ui/ImageModal";

import HeroSection from "../../components/ui/HeroSection";
import { useTranslation } from "react-i18next";

const METROLOGIC_IMAGES = [
  "/fotos/metrologic-system/login.jpeg",
  "/fotos/metrologic-system/dashboard.jpeg",
  "/fotos/metrologic-system/centralCadastro.jpeg",
  "/fotos/metrologic-system/formAddCadastro1.jpeg",
  "/fotos/metrologic-system/centralEstoque.jpeg",
  "/fotos/metrologic-system/formAddProduto.jpeg",
  "/fotos/metrologic-system/centralGestaoUsuarios.jpeg",
  "/fotos/metrologic-system/centralPedidos.jpeg",
  "/fotos/metrologic-system/formAddPedido.jpeg",
  "/fotos/metrologic-system/formConfigFiscal1.jpeg",
  "/fotos/metrologic-system/formConfigFiscal2.jpeg",
];

const EMAIL_SENDER_IMAGES = [
  "/fotos/email_sender/interface(claro).png",
  "/fotos/email_sender/interface(escuro).png",
];

export const Desktop = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Button
              variant="outline"
              className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              {t("skills.button")}
            </Button>

            <h2 className="text-4xl font-bold italic text-gray-800 mb-4">
              {t("skills.title")}
            </h2>

            <p> {t("skills.description")}</p>

            {/* Gráfico de linguagens */}
            <div className="mt-10">
              <LanguageProgressBars />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>

        {/* Project: Metrologic System (in development) */}
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Button
              variant="outline"
              className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              {t("projects.button")}
            </Button>

            <h2 className="text-4xl font-bold italic text-gray-800 mb-4">
              {t("projects.metrologic.title")}
            </h2>
          </div>

          {/* Project Showcase */}
          <Card className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border-0">
            <CardContent className="p-8">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                  align: "center",
                }}
              >
                <CarouselContent>
                  {METROLOGIC_IMAGES.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full md:basis-1/2"
                    >
                      <div className="p-2 transition-transform hover:scale-105 duration-300">
                        <img
                          src={img}
                          alt={`Tela ${index + 1} do Metrologic System`}
                          className="rounded-xl border border-gray-200 shadow-sm w-full h-auto max-h-[500px] object-contain bg-white p-4"
                          onClick={() => setSelectedImage(img)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-4 bg-white/90 hover:bg-white shadow-md border border-gray-200"
                  variant="ghost"
                >
                  <ChevronLeft className="w-5 h-5" />
                </CarouselPrevious>
                <CarouselNext
                  className="right-4 bg-white/90 hover:bg-white shadow-md border border-gray-200"
                  variant="ghost"
                >
                  <ChevronRight className="w-5 h-5" />
                </CarouselNext>
              </Carousel>

              {selectedImage && (
                <ImageModal
                  src={selectedImage}
                  onClose={() => setSelectedImage(null)}
                />
              )}
            </CardContent>
          </Card>

          {/* Project Description */}
          <div className="max-w-6xl mx-auto mt-12">
            <h3 className="text-3xl font-light italic text-gray-800 mb-6">
              {t("projects.metrologic.about")}
            </h3>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">{t("projects.metrologic.p1")}</p>

              <p className="mb-6">{t("projects.metrologic.p2")}</p>

              <p>{t("projects.metrologic.p3")}</p>
            </div>
          </div>
        </div>

        {/* Project: Email Sender */}
        <div className="container mx-auto px-8 relative z-10 margin-top-25">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold italic text-gray-800 mb-4">
              {t("projects.emailSender.title")}
            </h2>
          </div>

          {/* Project Showcase */}
          <Card className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border-0">
            <CardContent className="p-8">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                  align: "center",
                }}
              >
                <CarouselContent>
                  {EMAIL_SENDER_IMAGES.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full md:basis-1/2"
                    >
                      <div className="p-2 transition-transform hover:scale-105 duration-300">
                        <img
                          src={img}
                          alt={`Tela ${index + 1} do Email Sender`}
                          className="rounded-xl border border-gray-200 shadow-sm w-full h-auto max-h-[500px] object-contain bg-white p-4"
                          onClick={() => setSelectedImage(img)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-4 bg-white/90 hover:bg-white shadow-md border border-gray-200"
                  variant="ghost"
                >
                  <ChevronLeft className="w-5 h-5" />
                </CarouselPrevious>
                <CarouselNext
                  className="right-4 bg-white/90 hover:bg-white shadow-md border border-gray-200"
                  variant="ghost"
                >
                  <ChevronRight className="w-5 h-5" />
                </CarouselNext>
              </Carousel>

              {selectedImage && (
                <ImageModal
                  src={selectedImage}
                  onClose={() => setSelectedImage(null)}
                />
              )}
            </CardContent>
          </Card>

          {/* Project Description */}
          <div className="max-w-6xl mx-auto mt-12">
            <h3 className="text-3xl font-light italic text-gray-800 mb-6">
              {t("projects.emailSender.about")}
            </h3>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">{t("projects.emailSender.p1")}</p>

              <p className="mb-6">{t("projects.emailSender.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Button
                variant="outline"
                className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                {t("about.button")}
              </Button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
              <p className="text-2xl font-light italic">
                {t("about.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 to-transparent"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Button
              variant="outline"
              className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              {t("contact.button")}
            </Button>
          </div>

          {/* Contact Icons */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="mailto:jvitor6674@gmail.com" className="group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
            </a>

            <a href="https://github.com/codebyjv" className="group">
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Github className="w-12 h-12 text-gray-800" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/joaov-sant/" className="group">
              <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Linkedin className="w-11 h-11 text-blue-600" />
              </div>
            </a>

            <a href="#" className="group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};