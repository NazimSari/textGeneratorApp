import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Paragraph = () => {
  const parag = useSelector((state) => state.paragraph.item);
  useEffect(() => {
    if (parag !== "") {
      document.getElementById("parag").innerText = parag;
    }
  }, [parag]);
  return <div id="parag"></div>;
};

export default Paragraph;
