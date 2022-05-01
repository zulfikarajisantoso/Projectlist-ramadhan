import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const Sidebar = ({ navopen, closenav }) => {
  return (
    <div className={`${navopen ? "sidebar showside" : "sidebar"}`}>
      <aside className="sideside">
        <button className="buttonexit" onClick={closenav}>
          <FaTimes />
        </button>
        <div className="containerside">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <div className="" key={index}>
                <h4 className="judul"> {page}</h4>
                <div className="displaybawah">
                  {links.map((link, index) => (
                    <a href={link.url} key={index}>
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
