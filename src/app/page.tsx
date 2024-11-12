'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, MapPin, Clock, Phone, Menu, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SectionOrderNow from '@/components/section-order-now'

export default function DeliveryPoyosPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-orange-poyos shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-desc.png"
                alt="Poyos Logo"
                width={120}
                height={40}
                className={`transition-all duration-300 `}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#menu"
                className={`text-lg font-semibold hover:text-orange-poyos transition-colors text-white`}
              >
                Cardápio
              </Link>
              <Link
                href="#locations"
                className={`text-lg font-semibold hover:text-orange-poyos transition-colors text-white`}
              >
                Unidades
              </Link>
              <Link
                href="#app"
                className={`text-lg font-semibold hover:text-orange-poyos transition-colors text-white`}
              >
                Nosso App
              </Link>
              <Button asChild className={`bg-orange-poyos hover:bg-orange-600 text-white ${isScrolled ? 'bg-white hover:bg-white/80 text-black': ''}`}>
                <Link href="https://www.ifood.com.br/delivery/curitiba-pr/poyos---agua-verde-agua-verde/97b4057d-d3a5-4c1a-8b17-62a2da7d6dd3">Peça Aqui</Link>
              </Button>
            </div>
            <Sheet >
              <SheetTrigger asChild className="bg-orange-poyos hover:bg-orange-poyos/80">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-orange-poyos border-none ">
                <nav className="flex flex-col space-y-4">
                  <Link href="#menu" className="text-lg font-semibold">Cardápio</Link>
                  <Link href="#locations" className="text-lg font-semibold">Unidades</Link>
                  <Link href="#app" className="text-lg font-semibold">Nosso App</Link>
                  <Button asChild className="bg-white hover:bg-white/90 text-black">
                    <Link href="https://www.ifood.com.br/delivery/curitiba-pr/poyos---agua-verde-agua-verde/97b4057d-d3a5-4c1a-8b17-62a2da7d6dd3">Peça Aqui</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('../../public/images/interna.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Poyos Delivery
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            O melhor frango crocante do Brasil, agora na sua casa!
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="https://www.ifood.com.br/delivery/curitiba-pr/poyos---agua-verde-agua-verde/97b4057d-d3a5-4c1a-8b17-62a2da7d6dd3">
              <Button size="lg" className="bg-orange-poyos hover:bg-orange-600 text-white text-lg px-8 py-4">
                Peça Agora
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Nosso Cardápio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Bacon Chicken", src: "/images/png/cardapio/3.png", description: "Nosso sanduíche de frango crocante com bacon.", price: "R$ 18,90" },
              { name: "Crunchy Chicken", src: "/images/png/cardapio/4.png", description: "Para os amantes do molho honey.", price: "R$ 19,90" },
              { name: "Pepper Chicken", src: "/images/png/cardapio/7.png", description: "Frango crocante com salada.", price: "R$ 21,90" },
              { name: "Molho Poyos", src: "/images/png/cardapio/1.png", description: "Opçãos variadas de molhos poyos.", price: "R$ 20,90" },
              { name: "Combo Power", src: "/images/png/cardapio/2.png", description: "Combo Power delicioso.", price: "R$ 24,90" },
              { name: "Mac e cheese", src: "/images/png/cardapio/5.png", description: "Muito molho de queijo especial.", price: "R$ 14,90" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-[432px] w-full ">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        quality={100}
                        priority
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    {/* <p className="text-lg font-bold text-orange-poyos">{item.price}</p> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionOrderNow />

      {/* App Order Section */}
      <section id="app" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">

            <motion.div
              className="w-full md:w-1/2 md:pl-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-orange-poyos">Peça pelo Nosso App</h2>
              <p className="text-lg mb-6">
                Baixe o app Poyos e tenha acesso a ofertas exclusivas, programa de fidelidade e muito mais!
              </p>
              <ul className="text-lg mb-8 space-y-2">
                <li className="flex items-center">
                  <Smartphone className="mr-2 text-orange-poyos" />
                  Pedidos rápidos e fáceis
                </li>
                <li className="flex items-center">
                  <Smartphone className="mr-2 text-orange-poyos" />
                  Acompanhe seu pedido em tempo real
                </li>
                <li className="flex items-center">
                  <Smartphone className="mr-2 text-orange-poyos" />
                  Acumule pontos e troque por recompensas
                </li>
              </ul>
              <Button asChild size="lg" className="bg-orange-poyos hover:bg-orange-600 text-white">
                <Link href="www.poyos.com.br">
                  Peça pelo App
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="w-full h-[480px] md:w-[650px] md:h-[650px] mt-24 mb-8 md:mb-0 relative"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/png/phone-yooga.png"
                alt="Poyos App"
                fill
                quality={100}
                priority
                sizes="(min-width: 808px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Nossas Unidades
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "São Paulo", address: "Av. Paulista, 1000", phone: "(11) 1234-5678", image: "/images/loja.png" },
              { city: "Rio de Janeiro", address: "Av. Atlântica, 500", phone: "(21) 2345-6789", image: "/images/loja.png" },
              { city: "Belo Horizonte", address: "Av. Afonso Pena, 1500", phone: "(31) 3456-7890", image: "/images/loja.png" },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={location.image}
                      alt={`Poyos ${location.city}`}
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 text-orange-poyos" />
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center mb-2">
                      <Clock className="mr-2 text-orange-poyos" />
                      Aberto todos os dias: 11h - 22h
                    </p>
                    <p className="flex items-center mb-2">
                      <MapPin className="mr-2 text-orange-poyos" />
                      {location.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 text-orange-poyos" />
                      {location.phone}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Poyos</h3>
              <p className="mb-4">O melhor frango crocante do Brasil, agora no delivery.</p>
              <Image
                src="/images/logo-desc.png"
                alt="Poyos Logo"
                width={150}
                height={50}
                className="mb-4 brightness-0 invert"
              />
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-orange-poyos transition-colors">Início</Link></li>
                <li><Link href="#menu" className="hover:text-orange-poyos transition-colors">Cardápio</Link></li>
                <li><Link href="#locations" className="hover:text-orange-poyos transition-colors">Localizações</Link></li>
                <li><Link href="#app" className="hover:text-orange-poyos transition-colors">Nosso App</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <p className="mb-2">delivery@poyos.com.br</p>
              <p>(11) 1234-5678</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Poyos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}