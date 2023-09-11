'use client';

import React from "react";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = ( model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (model){
      searchParams.set('model',model)
    }else{
      searchParams.delete('model', model)
    }
    if (manufacturer){
      searchParams.set('manufacturer',manufacturer)
    }else{
      searchParams.delete('manufacturer', manufacturer)
    }

    const newpathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newpathName)
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>

        <div className="searchbar__item">

            <SearchManufacturer
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}
            />

            <SearchButton otherClasses="sm:hidden"/>

        </div>

        <div className="searchbar__item">
          <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[25px] ml-4"
          alt="Car Model"
          />

          <input 
          type="text"
          name="modal"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input text-slate-400"
          />
          <SearchButton otherClasses="sm:hidden" />

        </div>
          <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}

export default SearchBar