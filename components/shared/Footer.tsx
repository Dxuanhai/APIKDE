import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";


const Footer = () => {
  return (
    <div className="bg-[#333333] text-[#FFFFFF40] py-[50px] ">
      <div className=" container mx-auto 2xl:w-[1280px]  px-4">
        <div className=" flex">
          <div className="md:w-1/2 mx-auto text-center md:text-left">
            <h3 className="mb-2">© Aniplex of America Inc. All Rights Reserved.</h3>
            <div className="flex items-center justify-start gap-x-2">
              <a href="/" className="py-[3px] border-b-[1px] border-dotted border-[#FFFFFF40] text-[13px]">About Us </a> /
              <a href="/" className="py-[3px] border-b-[1px] border-dotted border-[#FFFFFF40] text-[13px]"> Contact </a> /
              <a href="/" className="py-[3px] border-b-[1px] border-dotted border-[#FFFFFF40] text-[13px]">Terms of Use</a> / 
              <a href="/" className="py-[3px] border-b-[1px] border-dotted border-[#FFFFFF40] text-[13px]">Privacy Policy</a>
            </div>
            <span className="py-[3px] border-b-[1px] border-dotted border-[#FFFFFF40] text-[13px]">
              Do Not Sell My Personal Information
            </span>
          </div>
          <div className="w-1/2 hidden  md:flex justify-end  ">
            <div className=" flex gap-x-[5px]">
              <div className="">
                <div className="w-[35px] h-[35px] flex items-center justify-center flex-col relative rounded-lg group hover:bg-facebook cursor-pointer overflow-hidden">
                  <BiLogoFacebook className="group-hover:translate-y-[-100%] absolute  h-full transition-all"/>
                  <BiLogoFacebook className="translate-y-[100%] group-hover:translate-y-[0] absolute bottom-0 h-full transition-all text-white"/>
                </div>
              </div>
              <div className="">
                <div className="w-[35px] h-[35px] flex items-center justify-center flex-col relative rounded-lg group hover:bg-twitter cursor-pointer overflow-hidden">
                  <BiLogoTwitter className="group-hover:translate-y-[-100%] absolute  h-full transition-all"/>
                  <BiLogoTwitter className="translate-y-[100%] group-hover:translate-y-[0] absolute bottom-0 h-full transition-all text-white"/>
                </div>
              </div>
              <div className="">
                <div className="w-[35px] h-[35px] flex items-center justify-center flex-col relative rounded-lg group hover:bg-youtube cursor-pointer overflow-hidden">
                  <BiLogoYoutube className="group-hover:translate-y-[-100%] absolute  h-full transition-all"/>
                  <BiLogoYoutube className="translate-y-[100%] group-hover:translate-y-[0] absolute bottom-0 h-full transition-all text-white"/>
                </div>
              </div>
              <div className="">
                <div className="w-[35px] h-[35px] flex items-center justify-center flex-col relative rounded-lg group hover:bg-instagram cursor-pointer overflow-hidden">
                  <BiLogoInstagram className="group-hover:translate-y-[-100%] absolute  h-full transition-all"/>
                  <BiLogoInstagram className="translate-y-[100%] group-hover:translate-y-[0] absolute bottom-0 h-full transition-all text-white"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
