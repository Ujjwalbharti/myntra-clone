'use client';

import Banner from "@/components/banner/Banner";
import SiteHeader from "@/components/headers/SiteHeader";
import { useGlobalContext } from "@/context/GlobalContext";

const imageList = [
  "home/1st.png",
  "home/2nd.png",
  "home/3rd.png",
  "home/4th.png",
  "home/5th.png",
  "home/6th.png",
  "home/7th.png"
];


export default function Home() {
  const context = useGlobalContext();
  return (
    <div className={`w-full h-screen bg-gray-50`}>
      <SiteHeader />
      <Banner imageList={imageList} />
      <div className={`w-full h-screen ${context.getDrawer() !== "" ? 'opacity-25' : 'opacity-0'} bg-black absolute top-0 z-20`}></div>
    </div>
  );
}
