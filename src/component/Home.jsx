import { useState } from "react";
import { Right } from "./Right";
import './home.css'

export const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div className="main">
      <div className="left">

        <button className="btn" onClick={handleClick}>
          Save segment
        </button>

      </div>
      <div className="right">
        {open && <Right />}
      </div>
      
    </div>
  );
};
