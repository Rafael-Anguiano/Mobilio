import Link from "next/link"
import Image from "next/image"

const Page = () => {
    return <section id="Contact">
        <h2 className="subtitle">Contáctanos</h2>
        <p>¡Estamos aquí para ayudar! Envíenos cualquier pregunta que tenga. Esperamos con interés escuchar de usted.</p>
        <div className="flex flex-row justify-center items-center gap-8 sm:gap-16">
            <Link href="https://www.instagram.com/mobilio_sa?igsh=MXB3OHl1eGsxaXZhZQ%3D%3D&utm_source=qr" className="flex flex-row justify-center items-center">
                <Image src="/images/logo-instagram.svg" alt="Instagram" width={25} height={25} />
                <div className="hidden sm:block">mobilio_sa</div>
            </Link>
            <Link href="https://wa.me/523341569525"  className="flex flex-row justify-center items-center">
                <Image src="/images/logo-whatsapp.svg" alt="Instagram" width={25} height={25} />
                <div className="hidden sm:block">+52 33 4156 9525</div>
            </Link>
        </div>
        <form className="flex flex-col justify-center items-center gap-4 w-[90%] md:w-[60%]">
            <div className="flex flex-col justify-center items-between md:flex-row gap-4 w-full">
                <div className="flex flex-col justify-start items-start w-full">
                    <label className="text-gray-500 font-light w-full text-start">Nombre</label>
                    <input placeholder="Sergio Pérez" type="text" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " required />
                </div>
                <div className="flex flex-col justify-start items-start w-full">
                    <label className="text-gray-500 font-light w-full text-start">Teléfono</label>
                    <input placeholder="3311119999" type="tel" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " pattern="[0-9]{10}" required />
                </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full">
                <label className="text-gray-500 font-light w-full text-start">Correo electrónico</label>
                <input placeholder="example@example.com" type="email" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " required />
            </div>
            <div className="flex flex-col justify-start items-start w-full">
                <label className="text-gray-500 font-light w-full text-start">Mensaje</label>
                <input placeholder="Me gustaría cotizar y revisar opciones" type="text" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " required/>
            </div>
            <button type="submit" className="button bg-gray-700 mt-8">Enviar</button>
        </form>
    </section>
}

export default Page