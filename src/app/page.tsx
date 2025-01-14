import Banner from "@/components/Banner";
import SiteHeader from "@/components/SiteHeader";


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
  return (
    <div className='w-full h-screen bg-gray-50'>
      <SiteHeader />
      <Banner imageList={imageList} />
    </div>
  );
}
