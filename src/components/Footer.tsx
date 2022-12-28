import Google from "../misc/downloadIt/google.png";
import Apple from "../misc/downloadIt/apple.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex justify-center items-end gap-2 h-fit">
      <a href="">
        <img src={Google} alt="" className="w-44  cursor-pointer" />
      </a>
      <div className="flex flex-col justify-start items-center">
        <span className="text-orange font-handWriting font-bold">
          Coming soon!
        </span>
        <a href="">
          <img src={Apple} alt="" className="w-44 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
