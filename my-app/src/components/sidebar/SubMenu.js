// import React, { useState, useEffect } from 'react';
// import { IoTerminal } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
// import React, { useRef } from 'react'
// import './submenu.css';




// function SubMenu() {
//   return(
//     <>
//     </>
//   )
 
// }
// export default SubMenu;

// import { useState, useEffect, useCallback } from "react";

// export default function useDropdown(dropEl, actionEl) {
//   dropEl = dropEl.current;
//   actionEl = actionEl.current;

//   const [drop, setDrop] = useState(false);

//   const toggleDrop = useCallback(toggleState => {
//     setDrop(toggleState !== undefined ? Boolean(toggleState) : !drop);
//   }, [drop]);

//   const onWindowClick = useCallback(ev => {
//     const clickOnAction =
//       actionEl && (ev.target === actionEl || actionEl.contains(ev.target));
//     const clickOnDrop =
//       dropEl && (ev.target === dropEl || dropEl.contains(ev.target));

//     if (!clickOnAction && !clickOnDrop && drop === true) {
//       toggleDrop(false);
//     }
//   }, [drop]);

//   const onEsc = useCallback(ev => {
//     if (ev.keyCode === 27 && drop === true) {
//       toggleDrop(false);
//     }
//   }, [drop]);

//   useEffect(() => {
//     window.addEventListener("click", onWindowClick);
//     return () => window.removeEventListener("click", onWindowClick);
//   });

//   useEffect(() => {
//     window.addEventListener("keyup", onEsc);
//     return () => window.removeEventListener("keyup", onEsc);
//   });

//   return [drop, toggleDrop];
// }


import React from 'react';
import { IoTerminal } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function SubMenu() {
  return (
    <>
      <Link ></Link>
    </>
  )
}

export default SubMenu
