import { useState } from "react";
import { images } from "../services/images";
import Radio from "./Radio";

interface SliderProps {}

const Slider: React.FC<SliderProps> = ({}) => {
  const [image, setImage] = useState(0);
  return (
    <div>
      <img
        src={images[image]}
        alt=""
        className="w-[690px] h-auto aspect-[929/649] rounded-xl orange-shadow"
      />
      <div className="flex justify-center items-center w-full my-5">
        <Radio
          onChange={(index: number) => setImage(index)}
          value={image}
          buttons={images}
        />
      </div>
    </div>
  );
};

export default Slider;
