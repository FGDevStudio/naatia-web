"use client";
import {FormEvent,useEffect,useState} from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
type FormState={name:string,business:string,email:string,phone:string,industry:string,service:string,budget:string,details:string,website:string,consent:boolean};
const initial:FormState={name:"",business:"",email:"",phone:"",industry:"",service:"",budget:"",details:"",website:"",consent:false};
const services=[["","Selecciona un servicio"],["start","Naatia Start — $2,990 + IVA"],["business","Naatia Business — $4,990 + IVA"],["catalog","Naatia Catalog — $6,490 + IVA"],["custom","Proyecto personalizado"],["other","No sé qué paquete necesito"]];
const industries=["","Clínica dental","Consultorio médico","Construcción y remodelación","Taller automotriz","Detailing automotriz","Veterinaria","Salón de eventos","Despacho profesional","Estudio de tatuajes","Comercio / otra actividad"];
function track(name:string,detail:Record<string,string>={}){try{const w=window as typeof window & {gtag?:(...args:unknown[])=>void;fbq?:(...args:unknown[])=>void};w.gtag?.("event",name,detail);if(name==="generate_lead")w.fbq?.("track","Lead",detail)}catch{}}
export default function QuoteForm(){
 const query=useSearchParams();
 const [data,setData]=useState<FormState>(initial);
 const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [feedback,setFeedback]=useState("");
 useEffect(()=>{const key=query.get("paquete");if(key&&services.some(s=>s[0]===key))setData(p=>({...p,service:key}));},[query]);
 function set<K extends keyof FormState>(key:K,value:FormState[K]){setData(p=>({...p,[key]:value}));}
 async function onSubmit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(status==="sending")return;
 setStatus("sending");setFeedback("");
 const params=new URLSearchParams(window.location.search);
 const payload={...data,utm:{source:params.get("utm_source")||"",medium:params.get("utm_medium")||"",campaign:params.get("utm_campaign")||"",content:params.get("utm_content")||"",term:params.get("utm_term")||""},landing:window.location.pathname,startedAt:Date.now()};
 try{const r=await fetch("/api/cotizacion",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});const result:unknown=await r.json();const message=typeof result==="object"&&result!==null&&"message" in result?String((result as {message:unknown}).message):"No pudimos procesar tu solicitud.";
 if(!r.ok)throw new Error(message);setStatus("success");setFeedback("Solicitud recibida. Te contactaremos por correo electrónico.");setData(initial);track("generate_lead",{service:data.service,utm_source:payload.utm.source,utm_campaign:payload.utm.campaign});}
 catch(err){setStatus("error");setFeedback(err instanceof Error?err.message:"No se pudo enviar. Inténtalo más tarde.");}}
 return <form className="quote-form" onSubmit={onSubmit} noValidate={false}>
 <div className="form-grid">
 <label>Tu nombre <span>*</span><input required maxLength={90} autoComplete="name" value={data.name} onChange={e=>set("name",e.target.value)} placeholder="Ej. Ana López"/></label>
 <label>Nombre del negocio <span>*</span><input required maxLength={120} autoComplete="organization" value={data.business} onChange={e=>set("business",e.target.value)} placeholder="Ej. Clínica Sonrisa"/></label>
 <label>Correo electrónico <span>*</span><input required type="email" autoComplete="email" maxLength={160} value={data.email} onChange={e=>set("email",e.target.value)} placeholder="tucorreo@ejemplo.com"/></label>
 <label>Teléfono <small>(opcional)</small><input type="tel" autoComplete="tel" maxLength={28} value={data.phone} onChange={e=>set("phone",e.target.value)} placeholder="Solo si deseas compartirlo"/></label>
 <label>Tipo de negocio <span>*</span><select required value={data.industry} onChange={e=>set("industry",e.target.value)}>{industries.map(s=><option key={s} value={s}>{s||"Selecciona tu sector"}</option>)}</select></label>
 <label>Servicio de interés <span>*</span><select required value={data.service} onChange={e=>set("service",e.target.value)}>{services.map(([v,label])=><option key={v} value={v}>{label}</option>)}</select></label>
 <label className="full">Presupuesto aproximado <span>*</span><select required value={data.budget} onChange={e=>set("budget",e.target.value)}><option value="">Selecciona un rango</option><option>Menos de $3,000</option><option>$3,000 a $5,000</option><option>$5,000 a $8,000</option><option>Más de $8,000</option><option>Prefiero una recomendación</option></select></label>
 <label className="full">¿Qué necesitas? <span>*</span><textarea required minLength={15} maxLength={2200} rows={5} value={data.details} onChange={e=>set("details",e.target.value)} placeholder="Cuéntanos qué hace tu negocio y qué te gustaría mostrar en su página."/></label>
 </div>
 <div className="honey" aria-hidden="true"><label>No llenar<input tabIndex={-1} autoComplete="off" value={data.website} onChange={e=>set("website",e.target.value)}/></label></div>
 <label className="form-consent"><input type="checkbox" required checked={data.consent} onChange={e=>set("consent",e.target.checked)}/><span>He leído el <Link href="/aviso-de-privacidad" target="_blank">aviso de privacidad</Link> y acepto el uso de mis datos para atender esta solicitud. <b>*</b></span></label>
 <button type="submit" className="btn btn-primary form-submit" disabled={status==="sending"}>{status==="sending"?"Enviando…":"Enviar solicitud de cotización"} <span aria-hidden="true">→</span></button>
 <p className="form-note">Solicitar una cotización no te compromete a contratar. Nunca pedimos datos bancarios en este formulario.</p>
 {feedback&&<p role="status" className={status==="success"?"form-feedback success":"form-feedback error"}>{feedback}</p>}
 </form>;
}
