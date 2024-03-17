import React from "react";

export default function SortingFilter({handleSelect}){
    return(
        <select name="sortMethod" onChange={handleSelect}>
            <option value="default">Default Sort</option>
            <option value="puplar">Most Pupolar</option>
        </select>
    )
}