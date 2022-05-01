import React, { useEffect, useRef, useState } from "react";

const Submenu = ({ submenu, page, links, location }) => {
  const container = useRef(null);
  const [cols, setcols] = useState("col-2");

  //   useEffect(() => {
  //     setcols("col-2");
  //     const submenuu = container.current;
  //     const { center, bottom } = location;
  //     // submenuu.style.left = `${center}px`;
  //     // submenuu.style.right = `${bottom}px`;
  //     console.log(links);

  //     if (links.length === 3) {
  //       setcols("col-3");
  //     }
  //     if (links.length > 3) {
  //       setcols("col-4");
  //     }
  //   }, [page, location, links]);

  return (
    <div className={`${submenu ? "submenu showsubmenu" : "submenu"} `}>
      <div>
        <h4>{page}</h4>
        {/* <div className={`submenucenter${cols}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Submenu;
