import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

const Page: React.FC = () => {
    return <section id="Principal" className="w-full h-full p-0 pr-2 relative text-center">
        <Image src="/images/principal.jpg" alt="Principal Image" width={3440} height={1440} unoptimized={true} priority className=" w-[98vw] h-[88vh] grayscale object-cover"/>
        <div className="text-white absolute t-[50%] text-center flex flex-col justify-center items-center">
            <h2 className={ openSans.className + " font-bold text-5xl md:text-7xl p-8"}>Mobilio</h2>
            <button className="block p-3 sm:px-8 sm:p-4 ">Más información</button>
        </div>
    </section>
};

export default Page;