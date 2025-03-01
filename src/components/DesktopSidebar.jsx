import { Link } from "react-router-dom";
import { Heart,HomeIcon } from "lucide-react";
const DesktopSidebar = () => {
    return (
      <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block ">
        <div className="flex flex-col gap-20 sticky top-10 left-0 ">
          <div className="w-full">
             <Link to = {"/"} className="flex gap-1" ><img src="/public/logo.svg" alt="" className="hidden md:block" /> </Link>
            <img src="/public/mobile-logo.svg" alt="" className="block md:hidden" />
          </div>
          <ul className="flex flex-col items-center md:items-start gap-8">
            <Link to = {"/"} className="flex gap-1">
            <HomeIcon size={24}/>
            <span className="font-bold hidden md:block">Home</span>
            </Link>
            <Link to = {"/favorites"} className="flex gap-1">
            <Heart size={24}/>
            <span className="font-bold hidden md:block">Favorites</span>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

export default DesktopSidebar;