import Image from "next/image";
import NavigationBar from './components/NavigationBar'
import AboutUs from './AboutUs/page'
import Opinions from './Opinions/page'
import Galery from './Galery/page'
import Contact from './Contact/page'

export default function Home() {
  return (
    <main className="App">
      <AboutUs /> 
      <Galery />
      <Opinions />
      <Contact />
    </main>
  );
}
