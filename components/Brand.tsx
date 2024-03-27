import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

const Brand = () => {
  return (
    <div
      className="
      flex
      items-center
      justify-center
      xl:justify-end
      h-[40px] 
      text-main
      w-full
    "
    >
      <a
        href="https://www.facebook.com/AniplexUSA/"
        className="
        cursor-pointer 
        flex
        items-center
        justify-center
        h-full
        px-4
        hover:bg-facebook
        hover:text-white
        border-e-2
        group
      "
      >
        <BiLogoFacebook size={20} />
        <span
          className="
          hidden
          group-hover:block
          transition-all
          text-white
        "
        >
          Facebook
        </span>
      </a>
      <a
        href="https://twitter.com/aniplexusa"
        className="
        cursor-pointer 
        flex
        items-center
        justify-center
        hover:bg-twitter
        hover:text-white
        group
        px-4
        h-full
        border-e-2
        
      "
      >
        <BiLogoTwitter size={20} />
        <span
          className="
          hidden
          group-hover:block
          
          text-white
        "
        >
          Twitter
        </span>
      </a>
      <a
        href="https://www.youtube.com/user/AniplexUS"
        className="
        px-4
        cursor-pointer 
        flex
        items-center
        justify-center
        hover:bg-youtube
        hover:text-white
        group
        h-full
        border-e-2
      "
      >
        <BiLogoYoutube size={20} />
        <span
          className="
          hidden
          group-hover:block
          transition-all
          text-white
        "
        >
          Youtube
        </span>
      </a>
      <a
        href="https://www.instagram.com/aniplexusa/"
        className="
        px-4
        cursor-pointer 
        flex
        items-center
        justify-center
        hover:bg-instagram
        hover:text-white
        group
        h-full
      "
      >
        <BiLogoInstagram size={20} />
        <span
          className="
          hidden
          group-hover:block
          transition-all
          text-white
        "
        >
          Instagram
        </span>
      </a>
    </div>
  );
};

export default Brand;
