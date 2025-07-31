
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

// 1. Defina os caminhos das imagens
const METROLOGIC_IMAGES = [
  "/fotos/metrologic-system/centralCadastro.jpeg",
  "/fotos/metrologic-system/centralEstoque.jpeg",
  "/fotos/metrologic-system/centralGestaoUsuario.jpeg",
  "/fotos/metrologic-system/centralPedidos.jpeg",
  "/fotos/metrologic-system/dashboard.jpeg",
  "/fotos/metrologic-system/formAddCadastro1.jpeg",
  "/fotos/metrologic-system/formAddCadastro2.jpeg",
  "/fotos/metrologic-system/formAddPedido.jpeg",
  "/fotos/metrologic-system/formAddProduto.jpeg",
  "/fotos/metrologic-system/formConfigFiscal1.jpeg",
  "/fotos/metrologic-system/formConfigFiscal2.jpeg",
  "/fotos/metrologic-system/login.jpeg",
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-8 max-w-4xl">
          <p className="text-2xl md:text-3xl font-light italic mb-4 text-purple-200">
            *Hello, world!*
          </p>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            I'm João Vitor
          </h1>
          
          <p className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed text-gray-200">
            Junior frontend developer, I am an enthusiast in the programming field who has always liked creativity.
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
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            PROJECTS
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ABOUT ME
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACT
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              PROJECTS
            </Button>
            
            <h2 className="text-4xl font-bold italic text-gray-800 mb-4">
              Metrologic System (in development)
            </h2>
          </div>

          {/* Project Showcase */}
          <Card className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border-0">
            <CardContent className="p-8">
              <Carousel 
                className="w-full"
                opts={{ 
                  loop: true,
                  align: "center"
                }}
              >
                <CarouselContent>
                  {METROLOGIC_IMAGES.map((img, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2">
                      <div className="p-2 transition-transform hover:scale-105 duration-300">
                        <img
                          src={img}
                          alt={`Tela ${index + 1} do Metrologic System`}
                          className="rounded-xl border border-gray-200 shadow-sm w-full h-auto max-h-[500px] object-contain bg-white p-4"
                        />
                        <p className="mt-3 text-center text-gray-500 font-medium">
                          Funcionalidade {index + 1}
                        </p>
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
            </CardContent>
          </Card>

          {/* Project Description */}
          <div className="max-w-6xl mx-auto mt-12">
            <h3 className="text-3xl font-light italic text-gray-800 mb-6">
              About: Metrologic System
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                Project focused on business management in the standard weights niche. The goal of the product is to make the workflow agile, simple, and primarily correct.
              </p>
              
              <p className="mb-6">
                It is currently under development as I am developing the entire product alone and trying out some backend attempts to deliver something as complete as possible.
              </p>
              
              <p>
                The product will manage the inventory completely, from sold products to internal office items, stockroom, etc. It should manage sales with real-time inventory control (preventing sales without stock or without prior notice). Separate modules will include the fiscal part (issuing NF-e, NFS-e) and the quality calibration part, which involves services, certificates, protocols, traceability, and all necessary documentation for the specific niche.
              </p>
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
                ABOUT ME
              </Button>
            </div>
            
            <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
              <p className="text-2xl font-light italic">
                A beginner in the field of programming and product development, I have a degree in Analysis and System Development (ADS). Since I was young, I have been interested in areas related to art, creativity, and entertainment. I have some knowledge in Photoshop, Illustrator, and Premiere due to my mild curiosity in the field. I worked as a freelance designer for a period of 1-2 years, creating artwork, visual identity, video editing, and web creatives. Since then, I have been trying to combine programming with something I feel good doing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 to-transparent"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              className="mb-8 px-8 py-3 text-lg font-medium border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              CONTACT
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
              <div className="w-26 h-26 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
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