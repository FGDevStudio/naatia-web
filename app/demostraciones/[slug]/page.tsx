import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import DemoPreview from "@/components/DemoPreview";
import {demos,SITE_URL} from "@/lib/site";
type Demo=typeof demos[number];
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return demos.map(d=>({slug:d.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;const demo=demos.find(d=>d.slug===slug);
 if(!demo)return {title:"Demostración no encontrada"};
 return {title:`Ejemplo de página para ${demo.name}`,description:`Demostración de diseño web para ${demo.name.toLowerCase()}. Ejemplo ficticio realizado por Naatia para mostrar posibles estilos, no es un proyecto de cliente.`,alternates:{canonical:`${SITE_URL}/demostraciones/${slug}`},robots:{index:true,follow:true}};
}
const content:Record<string,{headline:string,subtitle:string,services:string[],message:string,button:string}>={
 "clinica-dental":{headline:"Una primera impresión que transmite confianza.",subtitle:"Una clínica dental necesita mostrar sus tratamientos, explicar sus servicios y facilitar que cada persona solicite una cita.",services:["Tratamientos y especialidades","Presentación del equipo","Ubicación y horarios","Contacto para solicitar una cita"],message:"Diseño limpio y calmado que pone la información más importante al alcance del paciente.",button:"Solicitar una cita"},
 "construccion-remodelacion":{headline:"Proyectos que hablan por tu trabajo.",subtitle:"Una empresa constructora puede mostrar el tipo de proyectos que realiza, fotografías de obras y una forma directa de pedir presupuestos.",services:["Servicios de obra y remodelación","Galería de trabajos","Proceso de cotización","Contacto y cobertura"],message:"Una página sólida para mostrar trabajos, generar confianza y simplificar solicitudes.",button:"Solicitar presupuesto"},
 "detailing-automotriz":{headline:"Un acabado premium también se nota en tu web.",subtitle:"Un negocio de detailing puede presentar paquetes, fotografías y beneficios del servicio sin perder tiempo explicando lo mismo a cada cliente.",services:["Paquetes de detailing","Galería de resultados","Explicación de procesos","Solicitud de cotización"],message:"Diseño visual para destacar servicios, detalles y vías de contacto.",button:"Conocer paquetes"}
};
export default async function DemoPage({params}:Props){const {slug}=await params;const d=demos.find(x=>x.slug===slug);if(!d)notFound();const v=content[d.slug];
 return <main id="contenido" className="demo-detail-page">
  <section className="demo-detail-hero section-space"><div className="shell">
   <div className="demo-breadcrumb"><Link href="/#demostraciones">← Volver a demostraciones</Link><span> / {d.name}</span></div>
   <div className="demo-detail-hero-grid"><div><span className="demo-tag">DEMOSTRACIÓN DE DISEÑO · NO ES CLIENTE REAL</span><h1>{v.headline}</h1><p>{v.subtitle}</p><div className="hero-actions"><Link className="btn btn-primary" href={`/?paquete=business&ejemplo=${d.slug}#cotizar`}>Quiero una web similar ↗</Link><Link className="btn btn-outline" href="/#precios">Ver paquetes</Link></div></div>
   <DemoPreview demo={d}/></div>
  </div></section>
  <section className="section-space demo-detail-content"><div className="shell detail-content-grid"><div><p className="eyebrow">EJEMPLO DEL SECTOR</p><h2>Una web pensada para este tipo de negocio.</h2><p>{v.message}</p><div className="demo-detail-note">Esta página es una demostración conceptual de Naatia. Los nombres, servicios y contenidos son ficticios. No se ofrecen citas, servicios médicos o trabajo de terceros desde esta muestra.</div></div>
  <div className="detail-services"><h3>¿Qué podríamos incluir?</h3>{v.services.map((s,i)=><div key={s}><span>0{i+1}</span><p>{s}</p></div>)}<div className="detail-mock-action">{v.button} ↗ <small>Elemento ilustrativo, sin reservas ni pedidos reales</small></div></div></div>
  </section>
  <section className="final-cta"><div className="shell"><p className="eyebrow">DISEÑO PERSONALIZADO</p><h2>¿Quieres algo así para tu negocio?</h2><p>Adaptamos el diseño a tus servicios, identidad y objetivos.</p><Link className="btn btn-light" href={`/?paquete=business&ejemplo=${d.slug}#cotizar`}>Solicitar propuesta ↗</Link></div></section>
 </main>;
}
