import Image from 'next/image'
import React from 'react'


const SearchButton = ( {otherClasses}:{otherClasses:string} ) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
        src = "/magnifying-glass.svg"
        alt = "Magnifying Glass"
        width={40}
        height={40}
        className='object-contain'
        />

    </button>
  )
}

export default SearchButton
