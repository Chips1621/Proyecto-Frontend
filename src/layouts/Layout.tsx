import Footer from "@/components/Footer"
import Header from "@/components/Header"
//import Hero from "@/components/Hero"

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
}

console.log("Imagen principal en  Layout.tsx");

function Layout({ children, /*showHero = false */}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {//showHero && <Hero />}
      }
      <div className="container mx-auto flex-l py-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
