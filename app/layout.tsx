import type {Metadata,Viewport} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";
import {SITE_URL} from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title:{default:"Naatia | Páginas web profesionales para tu negocio",template:"%s | Naatia"},description:"Creamos páginas web modernas para negocios en México. Desde $2,990 MXN + IVA, con atención personalizada y precios claros.",openGraph:{type:"website",locale:"es_MX",siteName:"Naatia",title:"Naatia | Tu negocio merece una web profesional",description:"Páginas web profesionales desde $2,990 MXN + IVA. Conoce nuestros paquetes y solicita una cotización.",url:SITE_URL},robots:{index:true,follow:true}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#f9faf8"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><a className="skip" href="#contenido">Ir al contenido</a><Header/>{children}<Footer/><Analytics/></body></html>}
