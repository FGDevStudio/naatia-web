import Link from "next/link";
import {demos} from "@/lib/site";
type Demo=typeof demos[number];
export default function DemoPreview({demo,compact=false}:{demo:Demo,compact?:boolean}){
 return <div className={`demo-preview ${demo.palette} ${compact?"preview-compact":""}`} aria-label={`Vista de muestra: ${demo.name}`}>
   <div className="demo-browser"><span></span><span></span><span></span><small>Demostración · No es un cliente real</small></div>
   <div className="demo-website">
     <div className="demo-website-nav"><span className="demo-mark">{demo.palette==="dental"?"✳":demo.palette==="build"?"▥":"◈"}</span><strong>{demo.palette==="dental"?"Sonrisa Studio":demo.palette==="build"?"Norte Arquitectura":"Élite Auto Care"}</strong><small>Servicios · Nosotros · Contacto</small></div>
     <div className="demo-website-cover">
       <span className="demo-photograph" role="img" aria-label={demo.palette==="dental"?"Consultorio dental":demo.palette==="build"?"Obra de remodelación":"Servicio de detallado automotriz"}></span>
       <div className="demo-cover-copy"><em>{demo.palette==="dental"?"Cuidado que inspira confianza":demo.palette==="build"?"Espacios para vivir mejor":"Cuidado para cada detalle"}</em><strong>{demo.palette==="dental"?"Tu sonrisa, en buenas manos.":demo.palette==="build"?"Construimos lo que imaginas.":"Tu auto merece lo mejor."}</strong><span className="demo-site-button">Conocer servicios ↗</span></div>
     </div>
   </div>
   <div className="demo-phone"><div className="demo-phone-camera"></div><span className="demo-phone-img"></span><span className="demo-phone-line"></span><span className="demo-phone-line short"></span><span className="demo-phone-button"></span></div>
 </div>;
}
