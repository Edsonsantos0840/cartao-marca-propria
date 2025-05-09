// "use client";
// import { images } from "../fields/ListaSlideMobile";
// import { useState, useEffect, Dispatch, SetStateAction } from "react";
// // Avança automaticamente o slide a cada 3 segundos

// export default function UseSlide(): {
//   currentIndex: number;
//   handlePrevious: () => void;
//   handleNext: () => void;
//   setCurrentIndex: Dispatch<SetStateAction<number>>;
// } {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   useEffect(() => {
//     const interval: NodeJS.Timeout = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 8000);
//     return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
//   }, []);

//   const handlePrevious: () => void = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleNext: () => void = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };
//   return { currentIndex, handlePrevious, handleNext, setCurrentIndex };
// }

"use client";

import { images } from "../fields/ListaSlideMobile";
import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

export default function UseSlide(): {
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
} {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const callbackRef = useRef<() => void>(() => {});
  callbackRef.current = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      callbackRef.current(); // função estável
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return { currentIndex, handlePrevious, handleNext, setCurrentIndex };
}
