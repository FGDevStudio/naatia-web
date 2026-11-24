import Link from "next/link";
import Image from "next/image";
import {socialLinks} from "@/lib/site";
export default function Footer(){return <footer className="site-footer"><div className="shell footer-grid">
 <div className="footer-intro"><Link href="/" className="brand"><Image src="/logo-naatia.png" alt="Naatia" width={46} height={46} /><span><strong>Naatia</strong><small>Estudio de desarrollo web</small></span></Link><p>Páginas web profesionales para negocios de México. Diseño claro, precios transparentes y atención personalizada.</p></div>
 <div><h3>Explora</h3><Link href="/#servicios">Servicios</Link><Link href="/#precios">Precios</Link><Link href="/#demostraciones">Demostraciones</Link><Link href="/#cotizar">Cotizar</Link></div>
 <div><h3>Contacto y legal</h3>{socialLinks.map(s=><a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a>)}<Link href="/aviso-de-privacidad">Aviso de privacidad</Link><Link href="/terminos-y-condiciones">Términos y condiciones</Link></div>
 </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Naatia. Todos los derechos reservados.</span><span>Ciudad de México · Atención a todo México</span></div></footer>}
