import React from 'react';
import list from "../components/list";
import Card from "./Card";


const Shop = ({handleClick}) => {
    return (
        <section>
            {list.map((item) => {
                return <Card item={item} key={item.id}
                    handLClick={handleClick}/>
            })}
        </section>
    )
}

export default Shop
