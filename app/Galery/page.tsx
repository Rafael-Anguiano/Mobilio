import Image from "next/image";

const Page = () => {

    return <section id="Galery">
        <h2 className="subtitle">Galería</h2>
        <div className="flex flex-col justify-center align-center gap-[1rem] w-[97%] md:flex-row overflow-x-hidden">
            <Image src="/images/1.jpg" alt="Imagen 1" width={355} height={200} className="shrink grow md:min-w-[200px] w-full md:max-w-[355px] h-auto md:h-[550px] object-cover" />
            <Image src="/images/2.jpg" alt="Imagen 2" width={355} height={200} className="shrink grow md:min-w-[200px] w-full md:max-w-[355px] h-auto md:h-[550px] object-cover" />
            <Image src="/images/3.jpeg" alt="Imagen 3" width={355} height={200} className="shrink grow md:min-w-[200px] w-full md:max-w-[355px] h-auto md:h-[550px] object-cover" />
            <Image src="/images/4.jpeg" alt="Imagen 4" width={355} height={200} className="shrink grow md:min-w-[200px] w-full md:max-w-[355px] h-auto md:h-[550px] object-cover" />
        </div>
    </section>
}

export default Page