'use client'

import { useState } from "react"
import Image from "next/image"
import { carProps } from "@/types"
import CustomButtons from "./CustomButton"

interface carCardProps{
  car:carProps;
}

const CardCard = ( {car}:carCardProps ) => {

  const {city_mpg, year, make, model, transmission, drive} = car;

  return (
    <div 
    className="car-card group"
    >
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model} 
        </h2>

      </div>
      <p>
        <span>
          Car Rent...
        </span>
      </p>
    </div>
  )
}

export default CardCard
