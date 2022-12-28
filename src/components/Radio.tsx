interface RadioProps {
  onChange: (index: number) => void;
  value: number;
  buttons: string[] | number[];
}

const Radio: React.FC<RadioProps> = ({ buttons, onChange, value }) => {
  return (
    <>
      {buttons.map((el, id) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className="rounded-full bg-gray-500 p-1 bg-gray shadow-inner m-1 "
        >
          <div
            className={`${
              id === value ? "bg-orange " : " bg-gray "
            } w-2 h-2 rounded-full `}
          ></div>
        </button>
      ))}
    </>
  );
};

export default Radio;
