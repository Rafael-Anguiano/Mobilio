'use client'
import Link from "next/link"
import { M_PLUS_Code_Latin } from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/navigation'

interface Option {
  name: string;
  isSelected: boolean;
  url: string;
}
const mPlusCodeLatin = M_PLUS_Code_Latin({ subsets: ["latin"] });

const NavigationBar = () => {
  const router = useRouter()  
  const [options, setOptions] = useState<Option[]>([
    { name: 'Principal', isSelected: false, url:'/' },
    { name: 'Sobre Nosotros', isSelected: false, url:'/AboutUs' },
    { name: 'Galería', isSelected: false, url:'/Galery' },
    { name: 'Opiniones', isSelected: false, url:'/Opinions' },
    { name: 'Contáctanos', isSelected: false, url:'/Contact' },
  ]);
  const [currentSelection, setCurrentSelection] = useState(-1);

  const toggleSelection = (index: number) => {
    setOptions(options.map((option, i) => 
      i === index ? { ...option, isSelected: !option.isSelected } : option
    ));
    setCurrentSelection(index);
  };

  return (
  <nav className='flex justify-between px-8 pt-1'>
        <Link href="/" className="py-3 font-bold text-stone-950" onClick={() => {
          toggleSelection(-1)
        }}><h1 className={mPlusCodeLatin.className + " font-light"}>Mobilio</h1></Link>
        <div className="flex flex-row justify-around items-center gap-6 shrink whitespace-nowrap">
            { options.map((option, index) => (
              index == 0 ?
              null :
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
            <select className="sm:hidden text-gray-400 focus:outline-none" onChange={(e) => {
              router.push(options[Number(e.target.value)].url, { scroll: false })
              toggleSelection(Number(e.target.value))
            }}>
              { options.map((option, index) => (
                <option key={index} value={index}>{option.name}</option>
              ) )}
            </select>
        </div>
    </nav>
  )
}

export default NavigationBar