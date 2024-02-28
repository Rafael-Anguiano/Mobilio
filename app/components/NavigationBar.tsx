'use client'
import Link from "next/link"
import { M_PLUS_Code_Latin } from "next/font/google";
import { useState } from "react";


interface Option {
  name: string;
  isSelected: boolean;
  url: string;
}
const mPlusCodeLatin = M_PLUS_Code_Latin({ subsets: ["latin"] });

const NavigationBar = () => {
  
  const [options, setOptions] = useState<Option[]>([
    { name: 'Sobre Nosotros', isSelected: false, url:'/AboutUs' },
    { name: 'Galería', isSelected: false, url:'/Galery' },
    { name: 'Opiniones', isSelected: false, url:'/Opinions' },
    { name: 'Seguir', isSelected: false, url:'' },
    { name: 'Contáctanos', isSelected: false, url:'/Contact' },
  ]);
  const [currentSelection, setCurrentSelection] = useState(-1);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleSelection = (index: number) => {
    setOptions(options.map((option, i) => 
      i === index ? { ...option, isSelected: !option.isSelected } : option
    ));
    setCurrentSelection(index);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
  <nav className='flex justify-between px-8 pt-1'>
        <Link href="/" className="py-3 font-bold text-stone-950"><h1 className={mPlusCodeLatin.className + " font-light"}>Mobilio</h1></Link>
        <div className="flex flex-row justify-around items-center gap-6 shrink whitespace-nowrap">
            { options.map((option, index) => (
              <Link 
                key={index} 
                href={option.url} 
                className={ 
                  ( index == currentSelection 
                  ? 'text-black border-black border-b-2' 
                  : 'text-gray-400' ) 
                  + ' hover:border-b-2 display-none hidden sm:block'} 
                onClick={() => toggleSelection(index)}
              >
                {option.name}
              </Link>
            ) )}
            <div onClick={toggleHamburger} className="hover:pointer block sm:hidden flex flex-col justify-center items-center border-black border-2 w-8 h-8 rounded-lg gap-[0.1rem]">
              <div className={ (isHamburgerOpen ? "bar-one" : '') + " relative bg-black content-none w-[50%] h-[2px]"}></div>
              <div className={ (isHamburgerOpen ? "bar-two" : '') + " relative bg-black content-none w-[50%] h-[2px]"}></div>
              <div className={ (isHamburgerOpen ? "bar-three" : '') + " relative bg-black content-none w-[50%] h-[2px]"}></div>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar