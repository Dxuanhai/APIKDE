import ChildTitle from "./ChildTitle";
import Title from "./Title";
import {BsNewspaper, BsTwitter} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import Link from "next/link";

const Information = () => {
  return (
    <div>
      <Title title="INFORMATION" />
      <div className="md:flex gap-x-[40px]">
        <div className=" md:w-1/2 ">
          <ChildTitle icon = {<BsNewspaper size={32}/>} title="News" />
          <div className="flex flex-col">
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center py-[20px] text-main my-3 ">
            <Link 
            href='/news'
            className="w-[140px] h-[36px] text-[11px] border-2 border-main font-bold rounded-[4px] group relative overflow-hidden transition-all hover:bg-[#343a40]">
              <div className="group-hover:ml-[-20px] group-hover:text-white transition-all absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                VIEW MORE
              </div> 
              <span className="bg-[#343a40] absolute top-0 -right-[30px] group-hover:right-[0] transition-all group-hover:block w-[30px]  h-full "> 
                <div className="flex items-center justify-center h-full text-white ">
                  <AiOutlineRight/>
                </div>
              </span>
            </Link >
          </div>
        </div>
        <div className=" md:w-1/2 mb-[40px]">
          <ChildTitle icon = {<BsTwitter size={32}/>} title="Twitter" />
          <div 
          style={{backgroundImage: `url(/images/twitterIframe.png)`}}
          className="bg-center bg-contain bg-no-repeat h-[360px] xl:h-[440px]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;