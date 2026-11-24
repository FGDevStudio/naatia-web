# Naatia — sitio comercial v2

Sitio de ventas de Naatia, construido con Next.js 16, TypeScript, React y Tailwind CSS. **Este branch no se integra a producción sin aprobación del propietario.** El proyecto autorizado es exclusivamente `FGDevStudio/naatia-web`, asociado con `naatia.com.mx`; nunca se modifica `portfolio-fernando`.

## Qué contiene
- Portada comercial con planes Start ($2,990 + IVA), Business ($4,990 + IVA), Catalog ($6,490 + IVA).
- Tarifas adicionales y tres planes de mantenimiento: Care ($299), Plus ($599), Pro ($999).
- Tres páginas demo ficticias: dental, construcción/remodelación y detailing automotriz.
- Formulario con campos obligatorios, validación en navegador y servidor, honeypot y límite básico por instancia.
- Captura de UTM por sesión: source, medium, campaign, content, term; también identificadores de demo/plan.
- SEO, sitemap, robots, Open Graph, JSON-LD Organization, redirecciones desde URLs anteriores.
- Logo original de Naatia copiado de `img/logo-naatia.png` a `public/logo-naatia.png` (mismo blob GitHub).
- Fotografías de demostración de Pexels: fotos 6809645 (Pavel Danilyuk), 5493654 (trabajadores de construcción) y 6873129 (Tima Miroshnichenko). Confirmar la licencia y disponibilidad antes del lanzamiento.
- Los nombres de empresas de las demos son ficticios. Nunca publicarlos como clientes.

## Instalación y pruebas
```bash
npm install
npm run typecheck
npm run build
npm run dev
```
Visitar `/`, `/#precios`, `/#cotizar`, las tres rutas `/demostraciones/{slug}`, `/aviso-de-privacidad`, `/terminos-y-condiciones`, `/robots.txt` y `/sitemap.xml`.

## Configuración imprescindible para que funcione el formulario
No existe actualmente ningún proveedor de correo ni variables de entorno en el proyecto Vercel. El formulario **no simula éxito**: devuelve `503` hasta configurarlo.

Se propuso usar Resend (API HTTPS; sin instalar SDK) sujeto a la aprobación del propietario:
1. Crear/verificar el dominio remitente en el proveedor de correo que elija el propietario. No modificar DNS sin aprobación explícita.
2. En Vercel → `naatia-web` → Environment Variables, configurar:
   - `RESEND_API_KEY`: token secreto del servicio.
   - `CONTACT_FROM_EMAIL`: remitente verificado que pueda utilizarse en el servicio.
   - `CONTACT_TO_EMAIL`: buzón real donde llegarán las solicitudes de cotización.
3. No colocar credenciales en GitHub, código o documentación.
4. Completar el aviso de privacidad con nombre completo/razón social del responsable, medio de contacto para ARCO, plazos y terceros. Solicitar revisión legal local.
5. Probar el formulario real en la vista previa después de configurarlo, con un email de prueba y comprobar que llegó antes del lanzamiento.
6. Activar un rate limiter distribuido o protección anti-bots si aumenta el volumen; el Map en memoria es solo una defensa básica por instancia.

## Análisis y campañas
Opcionalmente: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...` y `NEXT_PUBLIC_META_PIXEL_ID=...`. Nunca inventar IDs. Las etiquetas se cargan únicamente si se configuran. Para seguimiento de campañas usar URL como:
`https://www.naatia.com.mx/?utm_source=instagram&utm_medium=paid&utm_campaign=lanzamiento`.
Los UTM se guardan por sesión en el navegador y se adjuntan al correo del prospecto. No se almacena una base de datos, ni se usan cookies de terceros por defecto. Revisar requisitos de consentimiento para analítica/publicidad antes de habilitar píxeles.

## Alojamiento comercial
El proyecto Vercel del usuario se encuentra en plan **Hobby**, cuya política de uso indica **uso personal no comercial**. Naatia es un negocio comercial. Antes de publicar/promocionar la nueva versión en producción elegir una opción que autorice explícitamente uso comercial (por ejemplo Pro, con aprobación de costos, o hosting alternativo que soporte Next.js). No cambiar equipo, plan, DNS ni dominio sin autorización.

## Condiciones de negocio
El sitio indica 60% de anticipo y 40% contra aprobación antes de publicar. Los plazos comienzan cuando llegan el anticipo y todos los materiales del cliente. Dominio, hosting, licencias, consumo externo y renovaciones se cotizan por separado. No se prometen resultados comerciales ni posiciones garantizadas.
