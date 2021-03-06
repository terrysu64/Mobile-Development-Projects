import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info";

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo isMap={true} restaurant={restaurant}/>
    );
};