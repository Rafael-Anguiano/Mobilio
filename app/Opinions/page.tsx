import Image from "next/image";

const Page: React.FC = () => {
    return <section id="Opinions">
        <h2 className="subtitle">Opiniones de nuestros clientes</h2>
        <div className="cards">
            <div className="person-card">
                <Image className="person-image" src="/images/2.jpg" alt="Foto de cliente" width={100} height={100} />
                <text className="person-name">Lucia D.</text>
                <p className="opinion">Honestamente, recibí el mejor servicio que pude haber pedido. Fueron súper profesionales a la hora de tratar; cumplieron todas mis necesidades y me ayudaron mucho.</p>
            </div>
            <div className="person-card">
                <Image className="person-image" src="/images/2.jpg" alt="Foto de cliente" width={100} height={100} />
                <text className="person-name">Martha W.</text>
                <p className="opinion">La plataforma me brindó toda la asistencia necesaria, fácil de utilizar e intuitiva.</p>
            </div>
            <div className="person-card">
                <Image className="person-image" src="/images/2.jpg" alt="Foto de cliente" width={100} height={100} />
                <text className="person-name">Juan F.</text>
                <p className="opinion">Facilita mucho el proceso para encontrar mobiliario confiable, además de que ahora puedo recomendar este sitio a conocidos de cualquier lado en la república.</p>
            </div>
        </div>
    </section>
};

export default Page;