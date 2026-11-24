export const SITE_URL = "https://www.naatia.com.mx";
export const BRAND = "Naatia";
export const INSTAGRAM = "https://www.instagram.com/naatiamx/";
export const socialLinks = [
 {name:"Instagram",href:INSTAGRAM},
 {name:"Facebook",href:"https://www.facebook.com/naatiamx"},
 {name:"TikTok",href:"https://www.tiktok.com/@naatiamx"},
 {name:"YouTube",href:"https://www.youtube.com/@naatiamx"}
];
export const packages = [
 {id:"start",name:"Naatia Start",price:2990,time:"3 a 5 días hábiles",description:"Para que tu negocio tenga una presencia profesional en internet.",features:["Página web de hasta 5 secciones","Diseño adaptable a celulares","Botón de contacto por WhatsApp","Ubicación con Google Maps","Enlaces a redes sociales","SEO técnico básico","1 ronda de modificaciones"]},
 {id:"business",name:"Naatia Business",price:4990,time:"5 a 7 días hábiles",description:"Un sitio más completo para mostrar tus servicios y recibir consultas.",features:["Hasta 5 páginas internas","Diseño acorde a tu identidad","Formularios de contacto","Integración con WhatsApp","Galería de servicios o proyectos","SEO básico y medición de visitas","2 rondas de modificaciones"],featured:true},
 {id:"catalog",name:"Naatia Catalog",price:6490,time:"7 a 10 días hábiles",description:"Muestra tus productos y recibe pedidos sin una tienda con pagos en línea.",features:["Catálogo de hasta 30 productos","Categorías y buscador","Pedidos por WhatsApp","Diseño adaptable a celulares","Información y fotos de productos","2 rondas de modificaciones"]}
] as const;
export const maintenance = [
 {id:"care",name:"Naatia Care",price:299,features:["Alojamiento básico compatible con el proyecto","Monitoreo de disponibilidad","Soporte técnico limitado"]},
 {id:"plus",name:"Naatia Plus",price:599,features:["Todo lo incluido en Care","Hasta 1 hora de modificaciones al mes"]},
 {id:"pro",name:"Naatia Pro",price:999,features:["Todo lo incluido en Plus","Hasta 2 horas totales de modificaciones al mes","Reporte mensual de rendimiento"]}
] as const;
export const extras = [
 ["Página adicional","$600"],["Configuración de correo corporativo","$350"],["Configuración de Google Business Profile","$700"],["20 productos adicionales","$600"],["Redacción de contenido","$500"],["Integración de agenda externa","$800"],["Página en segundo idioma","Desde $900"],["Modificaciones adicionales","Desde $350"]
] as const;
export const demos = [
 {slug:"clinica-dental",name:"Clínica dental",type:"Salud",description:"Una web limpia que presenta tratamientos, equipo y vías de contacto.",palette:"dental"},
 {slug:"construccion-remodelacion",name:"Construcción y remodelación",type:"Construcción",description:"Presentación de servicios, experiencia y proyectos en un solo lugar.",palette:"build"},
 {slug:"detailing-automotriz",name:"Detailing automotriz",type:"Automotriz",description:"Un escaparate visual para paquetes de cuidado automotriz.",palette:"auto"}
] as const;
