import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode:true,
  poweredByHeader:false,
  async redirects(){return [
    {source:"/index.html",destination:"/",permanent:true},
    {source:"/servicios.html",destination:"/#precios",permanent:true},
    {source:"/contacto.html",destination:"/#cotizar",permanent:true},
    {source:"/clientes.html",destination:"/#demostraciones",permanent:true},
    {source:"/faq.html",destination:"/#preguntas",permanent:true},
    {source:"/servicios",destination:"/#precios",permanent:true},
    {source:"/contacto",destination:"/#cotizar",permanent:true}
  ];}
};
export default nextConfig;
