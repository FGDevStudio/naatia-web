"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {INSTAGRAM} from "@/lib/site";
export default function Header(){
 const [open,setOpen]=useState(false);
 const nav=[["Inicio","/"],["Servicios","/#servicios"],["Precios","/#precios"],["Demostraciones","/#demostraciones"],["Preguntas","/#preguntas"],["Contacto","/#cotizar"]];
 return <header className="site-header"><div className="shell nav-shell">
  <Link className="brand" href="/" onClick={()=>setOpen(false)} aria-label="Naatia — inicio">
   <Image src="/logo-naatia.png" alt="Logo original Naatia" width={48} height={48} priority />
   <span><strong>Naatia</strong><small>Estudio de desarrollo web</small></span>
  </Link>
  <nav className={open?"nav-links is-open":"nav-links"} aria-label="Menú principal" id="main-navigation">
   {nav.map(([name,href])=><Link href={href} key={name} onClick={()=>setOpen(false)}>{name}</Link>)}
  </nav>
  <Link className="btn btn-primary header-cta" href="/#cotizar" onClick={()=>setOpen(false)}>Solicitar cotización <span aria-hidden="true">↗</span></Link>
  <button className="nav-toggle" type="button" aria-label={open?"Cerrar menú":"Abrir menú"} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(x=>!x)}><span></span><span></span><span></span></button>
 </div></header>;
}
