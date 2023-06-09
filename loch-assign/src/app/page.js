import HeroSection from "./components/HeroSection";
import Notifications from "./components/Notifications";

export default function Home() {
  return ( 
   <div className="flex flex-col lg:flex-row w-full min-h-screen ">
      <HeroSection/>
      <Notifications/>
   </div>
  )
}
