import GoogleTrusted from "../misc/trusted/googleTrusted.png";
import NoCC from "../misc/trusted/nocc.png";
import GoogleButton from "./GoogleButton";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  return (
    <section className="text-textBlack flex justify-start items-start flex-col">
      <h1 className="font-handWriting text-orange text-[40px] font-bold">
        Welcome to HeyLife!
      </h1>
      <h2 className="text-textBlack font-medium font-primary text-2xl">
        Give HeyLife a try for free.
      </h2>
      <GoogleButton />
      <p className="w-80 text-lg font-primary opacity-60 font-medium">
        We value your{" "}
        <a className="underline" href="">
          privacy
        </a>
        , all of your information remains your own.
      </p>
      <div className="w-full flex justify-between items-center mt-5">
        <img src={GoogleTrusted} alt="" className="w-36 h-auto" />
        <img src={NoCC} alt="" className="w-36 h-auto" />
      </div>
    </section>
  );
};

export default Info;
