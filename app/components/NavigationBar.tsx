import Link from "next/link"


const NavigationBar = () => {
  return (
    <nav className='navBar'>
        <Link href="/" className="title"><h1>Mobilio</h1></Link>
        <div className="menu-items">
            <Link href="/AboutUs" className="menu-item">¿Quiénes Somos?</Link>
            <Link href="/Galery" className="menu-item">Galería</Link>
            <Link href="/Opinions" className="menu-item">Opiniones de nuestros clientes</Link>
            <Link href="" className="menu-item">Seguir</Link>
            <Link href="/Contact" className="menu-item">Contáctanos</Link>
        </div>
    </nav>
  )
}

export default NavigationBar