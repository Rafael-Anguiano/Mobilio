

const Page = () => {
    return <section id="Contact">
        <h2 className="subtitle">Contáctanos</h2>
        <p>¡Estamos aquí para ayudar! Envíenos cualquier pregunta que tenga. Esperamos con interés escuchar de usted.</p>
        <form className="flex flex-col justify-center items-center gap-4 w-[90%] md:w-[60%]">
            <div className="flex flex-col justify-center items-between md:flex-row gap-4 w-full">
                <div className="flex flex-col justify-start items-start w-full">
                    <label className="text-gray-500 font-light w-full text-start">Nombre</label>
                    <input placeholder="Sergio Pérez" type="text" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " required />
                </div>
                <div className="flex flex-col justify-start items-start w-full">
                    <label className="text-gray-500 font-light w-full text-start">Teléfono</label>
                    <input placeholder="50 1111-9999" type="tel" className="w-full p-2 focus:outline-none border-b-2 focus:border-black " pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" required />
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
            <button type="submit" className="bg-gray-700 mt-8">Enviar</button>
        </form>
    </section>
}

export default Page