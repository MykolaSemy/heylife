import Slider from "./Slider";

interface PreviewProps {}

const Preview: React.FC<PreviewProps> = () => {
  return (
    <section>
      <h1 className="font-primary text-[50px] font-bold text-textBlack text-center mb-5 ">
        Hello, <span className="font-handWriting">style!</span>
      </h1>
      <Slider />
    </section>
  );
};

export default Preview;
