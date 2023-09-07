import { CustomeButtonProps } from "@/types";
import Image from "next/image"
'use client';

const CustomButton = ( {title, containerStyles, handleClick, btnType }:CustomeButtonProps ) => {
  return (
    <button
        disabled={false}
        type={btnType ||"button"}
        className={`custom-btn ${containerStyles} hover:font-bold`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
           { title}
        </span>
    </button>
  )
}

export default CustomButton