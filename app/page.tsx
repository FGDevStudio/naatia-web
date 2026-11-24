import type {Metadata} from "next";
import Link from "next/link";
import {Suspense} from "react";
import Image from "next/image";
import {packages,maintenance,demos,extras,SITE_URL,INSTAGRAM} from "@/lib/site";
import DemoPreview from "@/components/DemoPreview";
import QuoteForm from "@/components/QuoteForm";
export const metadata:Metadata={alternates:{canonical:SITE_URL+"/"}};
const faqs=[
 ["¿Cuánto cuesta una página web?","Naatia Start cuesta $2,990 + IVA y Naatia Business $4,990 + IVA. También ofrecemos un catálogo desde $6,490 + IVA. Los proyectos fuera del alcance de estos paquetes se cotizan por separado."],
 ["¿Cuánto tiempo tarda el desarrollo?","Start: 3 a 5 días hábiles. Business: 5 a 7 días hábiles. Catalog: 7 a 10 días hábiles. Los plazos comienzan cuando recibimos el anticipo y toda la información necesaria."],
 ["¿Necesito conocimientos técnicos?","No. Te explicamos las decisiones de manera sencilla, revisamos contigo el contenido y acordamos los pasos antes de comenzar."],
 ["¿Cómo se realiza el pago?","Se paga el 60% de anticipo para comenzar. El 40% restante se liquida después de aprobar el proyecto y antes de publicarlo."],
 ["¿La página funciona en celulares?","Sí. Los tres paquetes incluyen diseño adaptable a teléfonos, tabletas y computadoras."],
 ["¿Puedo solicitar modificaciones?","Sí. Start incluye una ronda y Business y Catalog incluyen dos rondas. Los cambios extra se cotizan antes de realizarlos."],
 ["¿El dominio está incluido?","No. La compra y renovación del dominio se cotizan por separado; te explicamos el costo antes de contratar."],
 ["¿El alojamiento está incluido?","No en el desarrollo inicial, salvo acuerdo expreso. El mantenimiento Naatia Care incluye alojamiento básico compatible mientras el plan esté activo, según el proyecto."],
 ["¿Puedo contratar mantenimiento?","Sí. Es opcional. Care cuesta $299 al mes, Plus $599 al mes y Pro $999 al mes. Cada plan establece sus límites de soporte y modificaciones."],
 ["¿Puedo solicitar funcionalidades adicionales?","Sí. Tiendas con pagos en línea, paneles administrativos, sistemas a medida y otras integraciones se cotizan de forma independiente."],
 ["¿Puedo contratar desde cualquier parte de México?","Sí. Atendemos negocios de CDMX, Estado de México y otras regiones mediante reuniones y comunicación en línea."]
];
const issues=[
 ["Tus clientes no encuentran tus servicios","Ten la información importante organizada en un mismo lugar."],
 ["Depender solo de redes sociales","Tu sitio puede complementar tus redes con una dirección propia."],
 ["Tu página actual se ve anticuada","Presenta tu negocio con una web clara y adaptable a celulares."],
 ["Cuesta mostrar productos o trabajos","Organiza tus servicios, fotografías y formas de contacto."]
];
const steps=[
 ["01","Nos cuentas sobre tu negocio","Platicamos de tus servicios, tus clientes y lo que necesitas."],
 ["02","Elegimos el paquete adecuado","Definimos qué incluye tu proyecto y te enviamos la propuesta."],
 ["03","Realizas el anticipo del 60%","Con tu anticipo y contenido completo comenzamos el desarrollo."],
 ["04","Diseñamos y desarrollamos","Creamos la página conforme al alcance y plazo acordados."],
 ["05","Revisas y apruebas","Recibes la vista previa y realizamos los ajustes incluidos."],
 ["06","Liquidas el 40% y publicamos","Con tu aprobación y el pago restante dejamos el sitio en línea."]
];
function Price({value}:{value:number}){return <><span className="price-currency">$</span>{value.toLocaleString("es-MX")}<span className="price-suffix">MXN + IVA</span></>}
export default function Home(){return <main id="contenido">
 <section className="hero section-space"><div className="shell hero-grid"><div className="hero-copy">
 <p className="eyebrow"><span className="eyebrow-dot"/> DESARROLLO WEB PARA NEGOCIOS EN MÉXICO</p>
 <h1>Tu negocio merece una página web <span>profesional.</span></h1>
 <p className="hero-description">Creamos páginas web modernas para negocios que quieren destacar, mostrar sus servicios y facilitar que sus clientes los contacten.</p>
 <div className="hero-price"><span>Tu página web desde</span><strong>$2,990 <small>MXN + IVA</small></strong></div>
 <div className="hero-actions"><Link href="/#cotizar" className="btn btn-primary">Solicitar cotización <span>↗</span></Link><Link href="/#demostraciones" className="btn btn-outline">Ver diseños <span>↗</span></Link></div>
 <p className="hero-note">Diseño para celulares · Atención personalizada · Entregas desde 3 a 5 días hábiles*</p></div>
 <div className="hero-showcase" aria-label="Ejemplo visual de diseño web adaptable"><div className="main-monitor">
 <div className="monitor-bar"><span className="browser-dots"><i/><i/><i/></span><span>Tu negocio en internet</span></div>
 <div className="monitor-content"><div className="monitor-top"><span className="monitor-logo"><Image src="/logo-naatia.png" alt="" width={24} height={24} unoptimized/> DISEÑO WEB</span><span>Inicio &nbsp; Servicios &nbsp; Contacto</span></div>
 <div className="monitor-hero"><div><small>UNA PRESENCIA QUE GENERA CONFIANZA</small><strong>Haz que te encuentren. Haz que te elijan.</strong><span>Tu negocio, tus servicios y tu contacto en un solo lugar.</span><b>Conoce nuestros servicios →</b></div><div className="monitor-abstract"><i></i><i></i><i></i></div></div>
 <div className="monitor-pill-row"><span>Diseño profesional</span><span>Tu identidad</span><span>Contacto fácil</span></div></div></div>
 <div className="mock-phone"><div className="mock-notch"/><div className="phone-mini-logo"><Image src="/logo-naatia.png" alt="" width={23} height={23} unoptimized/></div><div className="mock-phone-art"><i></i></div><strong>Tu web, también en celular.</strong><span>Clara, moderna y fácil de navegar.</span><b>Contactar ↗</b></div>
 <div className="hero-chip"><span>✓</span> Adaptable a cualquier pantalla</div>
 </div></div></section>
 <section className="trust-strip"><div className="shell trust-grid"><span>Diseño adaptado a tu negocio</span><span>Precios y entregables claros</span><span>Acompañamiento de principio a fin</span></div></section>
 <section id="servicios" className="section-space problem-section"><div className="shell"><div className="section-heading center"><p className="eyebrow">UN SITIO QUE TRABAJE PARA TU NEGOCIO</p><h2>Tu negocio tiene mucho que ofrecer. <span>Ayudemos a que se note.</span></h2><p>No necesitas entender de tecnología para tener una página web útil y profesional.</p></div>
 <div className="problem-grid">{issues.map(([title,body],i)=><article key={title} className="problem-card"><span className="problem-num">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
 </div></section>
 <section className="section-space benefits-section"><div className="shell benefit-layout"><div><p className="eyebrow">PRESENCIA DIGITAL</p><h2>Más fácil de encontrar, conocer y contactar.</h2><p>Una página web no promete ventas por sí sola. Sí puede ayudarte a presentar mejor tu negocio y simplificar el contacto con tus clientes.</p><Link href="/#cotizar" className="text-link">Quiero una página para mi negocio ↗</Link></div><div className="benefits-grid">{["Información disponible las 24 horas","Imagen profesional","Compatible con celulares","Servicios y productos organizados","Botón para hablar por WhatsApp","Preparada para buscadores"].map((s,i)=><div key={s} className="benefit"><span className="benefit-icon">{["◷","✧","▣","☰","↗","⌕"][i]}</span><strong>{s}</strong></div>)}</div></div></section>
 <section id="precios" className="section-space pricing-section"><div className="shell"><div className="section-heading center"><p className="eyebrow">PAQUETES CON PRECIOS CLAROS</p><h2>Elige cómo quieres comenzar.</h2><p>Tres opciones con alcance definido. Sin funciones sorpresa ni precios escondidos.</p></div>
 <div className="price-grid">{packages.map(p=><article key={p.id} className={`price-card ${"featured" in p&&p.featured?"featured":""}`}>{"featured" in p&&p.featured&&<div className="featured-ribbon">MÁS RECOMENDADO</div>}<div className="price-card-top"><h3>{p.name}</h3><p>{p.description}</p><div className="price-amount"><Price value={p.price}/></div><p className="price-time">Entrega estimada: {p.time}</p></div>
 <ul>{p.features.map(f=><li key={f}><span aria-hidden="true">✓</span>{f}</li>)}</ul><Link className={`btn ${"featured" in p&&p.featured?"btn-primary":"btn-outline"} price-action`} href={`/?paquete=${p.id}#cotizar`}>Solicitar {p.name.replace("Naatia ","")} <span>↗</span></Link></article>)}</div>
 <p className="price-disclaimer">* Los plazos comienzan después del anticipo del 60% y de recibir toda la información del cliente. Los precios están en MXN más IVA. Dominio, alojamiento, renovaciones, servicios de terceros y funciones fuera del alcance se cotizan por separado.</p>
 <div className="extra-services"><div><h3>¿Necesitas agregar algo?</h3><p>Servicios adicionales que puedes contratar con tu paquete.</p></div><div className="extras-list">{extras.map(([name,price])=><div key={name}><span>{name}</span><strong>{price}</strong></div>)}</div></div>
 </div></section>
 <section id="demostraciones" className="section-space demos-section"><div className="shell"><div className="section-heading center"><p className="eyebrow">EJEMPLOS DE DISEÑO</p><h2>Imagina cómo puede verse tu negocio.</h2><p>Explora tres ejemplos creados para mostrar posibilidades de diseño. <strong>Son demostraciones, no clientes reales.</strong></p></div><div className="demo-grid">{demos.map(d=><article key={d.slug} className="demo-card"><DemoPreview demo={d} compact/><div className="demo-card-body"><span className="demo-disclaimer">DEMOSTRACIÓN · {d.type.toUpperCase()}</span><h3>{d.name}</h3><p>{d.description}</p><div className="demo-actions"><Link href={`/demostraciones/${d.slug}`} className="btn btn-outline">Ver demostración</Link><Link href={`/?paquete=business&ejemplo=${d.slug}#cotizar`} className="text-link">Quiero una similar ↗</Link></div></div></article>)}</div></div></section>
 <section id="proceso" className="section-space steps-section"><div className="shell"><div className="section-heading center"><p className="eyebrow">UN PROCESO SENCILLO</p><h2>Así creamos tu página web.</h2><p>Desde la primera conversación hasta la publicación, sabes qué viene después.</p></div><div className="steps-grid">{steps.map(([num,title,body])=><article key={num} className="step-card"><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section id="mantenimiento" className="section-space maintenance-section"><div className="shell"><div className="section-heading center"><p className="eyebrow">MANTENIMIENTO OPCIONAL</p><h2>Tu página puede seguir en buenas manos.</h2><p>Elige soporte mensual cuando lo necesites, con límites claros.</p></div><div className="maintenance-grid">{maintenance.map(m=><article key={m.id} className="maintenance-card"><h3>{m.name}</h3><div className="maintenance-price"><strong>${m.price}</strong><span>MXN / mes</span></div><ul>{m.features.map(f=><li key={f}><span>✓</span>{f}</li>)}</ul><Link href={`/?paquete=other&plan=${m.id}#cotizar`} className="text-link">Consultar este plan ↗</Link></article>)}</div><p className="price-disclaimer">Los planes no incluyen modificaciones ilimitadas. El dominio, licencias y consumos extraordinarios se cotizan por separado. Las horas mensuales no son acumulables, salvo acuerdo escrito.</p></div></section>
 <section id="preguntas" className="section-space faq-section"><div className="shell faq-layout"><div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Respuestas claras antes de contratar.</h2><p>Queremos que sepas qué incluye tu página y cómo trabajamos.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
 <section id="cotizar" className="section-space contact-section"><div className="shell contact-grid"><div className="contact-copy"><p className="eyebrow">COTIZACIÓN SIN COMPROMISO</p><h2>Cuéntanos sobre tu negocio.</h2><p>Llena este formulario y prepararemos una propuesta según el paquete que necesites.</p><div className="contact-info"><div><span>01</span><p><strong>Nos compartes tu idea</strong><small>Solo pedimos la información necesaria.</small></p></div><div><span>02</span><p><strong>Revisamos tus necesidades</strong><small>Te explicamos el alcance y el precio.</small></p></div><div><span>03</span><p><strong>Decides sin presión</strong><small>Cotizar no significa contratar.</small></p></div></div><p className="contact-social">También puedes escribirnos por <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @naatiamx ↗</a></p></div>
 <div className="contact-panel"><h3>Solicita una cotización</h3><p>Los campos con * son obligatorios.</p><Suspense fallback={<p>Cargando formulario…</p>}><QuoteForm/></Suspense></div></div></section>
 <section className="final-cta"><div className="shell"><p className="eyebrow">HAGAMOS ALGO BUENO PARA TU NEGOCIO</p><h2>El siguiente paso de tu negocio comienza aquí.</h2><p>Una presencia digital profesional empieza con una conversación sencilla.</p><Link href="/#cotizar" className="btn btn-light">Solicitar cotización ↗</Link></div></section>
 </main>;}
