import type {Metadata} from "next";import Link from "next/link";
export const metadata:Metadata={title:"Términos y condiciones"};
export default function Terms(){return <main id="contenido" className="legal-page"><div className="shell legal-content"><p className="eyebrow">Información comercial</p><h1>Términos y condiciones</h1>
<p>Las cotizaciones de Naatia son propuestas comerciales sujetas a confirmación de alcance, disponibilidad y aceptación por escrito. Los precios publicados son en MXN y se muestran más IVA.</p>
<h2>Contratación y pagos</h2><p>Se solicita un anticipo del 60% para comenzar. El 40% restante se liquida después de la aprobación y antes de publicar. El plazo comienza cuando se recibe el anticipo y toda la información del cliente.</p>
<h2>Alcance y ajustes</h2><p>Cada paquete tiene límites específicos de páginas, secciones o productos. Incluye únicamente las rondas de cambios descritas. Las funciones o modificaciones adicionales requieren aprobación de una nueva cotización.</p>
<h2>Servicios externos</h2><p>Los costos de dominios, alojamiento, renovaciones, licencias, correo, herramientas de terceros y consumo extraordinario se informan y cotizan antes de contratar. No están automáticamente incluidos salvo mención expresa en la propuesta.</p>
<h2>Mantenimiento</h2><p>El mantenimiento mensual es opcional, con límites claros de soporte y horas de modificaciones. Las horas no se acumulan de un periodo a otro, salvo acuerdo escrito en contrario. Los alcances y disponibilidad se confirman por proyecto.</p>
<h2>Demostraciones</h2><p>Los ejemplos sectoriales del sitio son demostraciones ficticias de diseño y no representan clientes ni servicios médicos, constructivos o automotrices reales.</p>
<p className="legal-warning">Estas condiciones son un resumen comercial y pueden complementarse con el contrato o propuesta firmada de cada proyecto.</p><Link href="/" className="btn btn-outline">Volver al inicio</Link></div></main>}
