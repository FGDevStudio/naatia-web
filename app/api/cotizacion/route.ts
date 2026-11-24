import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
const attempts=new Map<string,{count:number;resetAt:number}>();
const mail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Lead={name:string;business:string;email:string;phone?:string;industry:string;service:string;budget:string;details:string;consent:boolean;website?:string;utm?:Record<string,string>;landing?:string;startedAt?:number};
const safe=(s:unknown,max:number)=>typeof s==="string"?s.trim().slice(0,max):"";
const escapeHtml=(s:string)=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));
export async function POST(req:NextRequest){
 const origin=req.headers.get("origin");
 if(origin){try{const url=new URL(origin);const allowed=["www.naatia.com.mx","naatia.com.mx"];const host=url.hostname;if(!allowed.includes(host)&&!/^naatia(?:-web)?-[a-z0-9-]+\.vercel\.app$/.test(host)&&host!=="localhost"&&!host.endsWith(".localhost"))return NextResponse.json({message:"Origen no permitido."},{status:403});}catch{return NextResponse.json({message:"Origen inválido."},{status:403})}}
 const type=req.headers.get("content-type")||"";
 if(!type.includes("application/json"))return NextResponse.json({message:"Formato no válido."},{status:415});
 const size=Number(req.headers.get("content-length")||0);
 if(size>14000)return NextResponse.json({message:"Solicitud demasiado extensa."},{status:413});
 let raw:unknown;try{raw=await req.json()}catch{return NextResponse.json({message:"Datos inválidos."},{status:400})}
 if(!raw||typeof raw!=="object"||Array.isArray(raw))return NextResponse.json({message:"Solicitud inválida."},{status:400});
 const p=raw as Lead;
 if(safe(p.website,100))return NextResponse.json({message:"Solicitud recibida."},{status:200});
 const lead={name:safe(p.name,90),business:safe(p.business,120),email:safe(p.email,160),phone:safe(p.phone,28),industry:safe(p.industry,90),service:safe(p.service,60),budget:safe(p.budget,90),details:safe(p.details,2200),landing:safe(p.landing,200),utm:{source:safe(p.utm?.source,80),medium:safe(p.utm?.medium,80),campaign:safe(p.utm?.campaign,120),content:safe(p.utm?.content,100),term:safe(p.utm?.term,100)}};
 const ip=(req.headers.get("x-forwarded-for")||"unknown").split(",")[0].slice(0,90);
 const now=Date.now();const state=attempts.get(ip);if(state&&state.resetAt>now&&state.count>=4)return NextResponse.json({message:"Demasiados intentos. Por favor, inténtalo más tarde."},{status:429});
 attempts.set(ip,{count:(state&&state.resetAt>now?state.count:0)+1,resetAt:state&&state.resetAt>now?state.resetAt:now+10*60*1000});
 if(attempts.size>1000)attempts.clear();
 if(!p.consent||lead.name.length<2||lead.business.length<2||!mail.test(lead.email)||lead.details.length<15||!lead.industry||!lead.service||!lead.budget) return NextResponse.json({message:"Revisa los campos obligatorios y acepta el aviso de privacidad."},{status:400});
 const ids=["start","business","catalog","custom","other"];if(!ids.includes(lead.service))return NextResponse.json({message:"El servicio seleccionado no es válido."},{status:400});
 if(typeof p.startedAt==="number"&&Date.now()-p.startedAt<1800)return NextResponse.json({message:"Revisa tus datos y vuelve a intentarlo."},{status:429});
 const key=process.env.RESEND_API_KEY,from=process.env.CONTACT_FROM_EMAIL,to=process.env.CONTACT_TO_EMAIL;
 if(!key||!from||!to)return NextResponse.json({message:"El formulario todavía no está habilitado. Por favor contáctanos desde Instagram @naatiamx."},{status:503});
 const rows=Object.entries({...lead,utm:JSON.stringify(lead.utm)}).map(([k,v])=>`<tr><th style="text-align:left;padding:8px;background:#f4f6f5">${escapeHtml(k)}</th><td style="padding:8px">${escapeHtml(String(v))}</td></tr>`).join("");
 try{const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:lead.email,subject:`Nueva cotización Naatia: ${lead.service} — ${lead.business}`,html:`<h2>Solicitud de cotización Naatia</h2><table>${rows}</table>`}),cache:"no-store"});
 if(!r.ok)return NextResponse.json({message:"No pudimos enviar tu solicitud. Escríbenos por Instagram @naatiamx."},{status:502});
 return NextResponse.json({message:"Solicitud recibida."},{status:200});
 }catch{return NextResponse.json({message:"Ocurrió un problema al enviar. Escríbenos por Instagram @naatiamx."},{status:502})}
}
export async function GET(){return NextResponse.json({message:"Método no permitido"},{status:405})}
