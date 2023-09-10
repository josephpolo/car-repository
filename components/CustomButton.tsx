'use client';
import { CustomeButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ( {title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }:CustomeButtonProps ) => {
  return (
    <button
        disabled={false}
        type={btnType ||"button"}
        className={`custom-btn ${containerStyles} hover:font-bold`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
           { title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6 ">

            <Image 
            src={rightIcon}
            alt="right Icon"
            fill
            className="object-contain"
            />

          </div>
        )}
    </button>
  )
}

export default CustomButton