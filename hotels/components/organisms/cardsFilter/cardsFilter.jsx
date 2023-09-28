"use client";
import { useState } from "react";
import { hotelData } from "../../../services/getHotelsServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";

export const CardsFilter = () => {

  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [size, setSize] = useState("all");
  const [dateTo, setDateTo] = useState(null)
  const [dateFrom, setDateFrom] =useState(null)
  

  const filterHotels = (hotels) => {

    const filteredHotel = hotels.filter((hotel) => {
      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry.toLowerCase() === hotel.country.toLocaleLowerCase();

      const isPriceMatch =
        selectedPrice === "all" || selectedPrice === hotel.price.toString();

      const isSizeMatch = size === 'all' || size.toLocaleLowerCase() === hotelRooms(hotel.rooms).toLocaleLowerCase()

      return isCountryMatch && isPriceMatch && isSizeMatch;
    });
    return filteredHotel;
  };

  return (
    <>
      <Header upDateCity={setSelectedCountry} changePrice={setSelectedPrice} changeSizes={setSize}/>
      <div className={styles.cardsConteainer}>
        {filterHotels(hotelData).map((hotel, index) => (
          <CardHotel key={index} hotel={hotel} />
        ))}
      </div>
    </>
  );
};
