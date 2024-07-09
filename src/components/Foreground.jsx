import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing first.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing second.",
      filesize: "1mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing third.",
      filesize: "2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];

  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 p-5 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
