"use client";
import { videos } from "../listas/ListaVideos";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";

export default function UseVideoSlide(): {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  sliderRef: RefObject<HTMLDivElement>;
  handleNext: () => void;
  handlePrev: () => void;
} {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext: () => void = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev: () => void = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };
  return { currentIndex, setCurrentIndex, sliderRef, handleNext, handlePrev };
}
