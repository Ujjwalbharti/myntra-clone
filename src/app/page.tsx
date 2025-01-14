import Banner from "@/components/Banner";
import HorizontalScroller from "@/components/HorizontalScroller";
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
    <div className='w-full h-full'>
      <SiteHeader />
      <Banner imageList={imageList} />
      <HorizontalScroller imageList={[...imageList, ...imageList, ...imageList]}/>
    </div>
  );
}
