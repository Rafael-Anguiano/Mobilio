import Image from "next/image";

const Page: React.FC = () => {
    return <section id="Opinions">
        <h2 className="subtitle">Opiniones de nuestros clientes</h2>
        <div className="flex flex-col justify-center items-start md:flex-row gap-[3rem] md:gap-[1rem] w-[95%] md:w-[70%]">
            <div className="shrink flex flex-col justify-start items-center shrink min-w-[25vw]">
                <Image className="rounded-full aspect-square object-fill" src="/images/2.jpg" alt="Foto de cliente" width={140} height={140} />
                <div className="pt-[1.5rem] font-bold text-gray-500">Lucia D.</div>
                <p className="px-8 w-[75%] min-w-[277px]">Honestamente, recibí el mejor servicio que pude haber pedido. Fueron súper profesionales a la hora de tratar; cumplieron todas mis necesidades y me ayudaron mucho.</p>
            </div>
            <div className="shrink flex flex-col justify-start items-center shrink min-w-[25vw]">
                <Image className="rounded-full aspect-square object-fill" src="/images/2.jpg" alt="Foto de cliente" width={140} height={140} />
                <div className="pt-[1.5rem] font-bold text-gray-500">Martha W.</div>
                <p className="px-8 w-[75%] min-w-[277px]">La plataforma me brindó toda la asistencia necesaria, fácil de utilizar e intuitiva.</p>
            </div>
            <div className="shrink flex flex-col justify-start items-center shrink min-w-[25vw]">
                <Image className="rounded-full aspect-square object-fill" src="/images/2.jpg" alt="Foto de cliente" width={140} height={140} />
                <div className="pt-[1.5rem] font-bold text-gray-500">Juan F.</div>
                <p className="px-8 w-[75%] min-w-[277px]">Facilita mucho el proceso para encontrar mobiliario confiable, además de que ahora puedo recomendar este sitio a conocidos de cualquier lado en la república.</p>
            </div>
        </div>
    </section>
};

export default Page;