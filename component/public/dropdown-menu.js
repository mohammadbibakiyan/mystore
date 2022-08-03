import { useEffect, useState } from "react";

const Dropdown = ({ title, list, type }) => {
  const [open, setOpen] = useState(false);
  const [items,setItems]=useState("")
  const toggle = () => {
    setOpen((prvState) => !prvState);
  };


  useEffect(() => {
    if (type == "text") {
      let items = list.map((e, i) => (
        <div className="relative flex items-center" key={i}>
          <label
            htmlFor={e[0]}
            className="pr-12 flex justify-between items-center w-full"
          >
            <div>{e[0]}</div>
            {/* <div className="text-body-2">{e[1]}</div> */}
          </label>
          <input id={e[0]} className="absolute right-0" type="checkbox" />
        </div>
      ));
      setItems(items)
    }
  }, []);

  return (
    <div className="text-subtitle-strong w-full px-5 cursor-pointer">
      <div className="flex justify-between py-3" onClick={toggle}>
        <div className="">{title}</div>
        <img src="/icons/expand-more.svg" className="opacity-30" />
      </div>

      {open && <div className="py-1">{items}</div>}
    </div>
  );
};

export default Dropdown;
