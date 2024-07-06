import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import { Typography } from "@mui/material";


let GameListData = [
    {
        id: 1,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        icon: [
            {
                iconName: 'icofont-star',
            },
        ],
        catagory: 'collection-one',
    },
    {
        id: 2,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-two',
    },
    {
        id: 3,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
    {
        id: 4,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-one',
    },
    {
        id: 5,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-two',
    },
    {
        id: 6,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
    {
        id: 7,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-one',
    },
    {
        id: 8,
        image: 'assets/images/game/01.jpeg',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
]



const GameList = () => {

    const [items, setItems] = useState(GameListData);
    const filterItem = (categItem) => {
        const updateItems = GameListData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }
    return (
        <section className="collection-section padding-top padding-bottom game-list-section">
            <div className="container">
                <div className="section-wrapper">
                <div className="section-header">
                                    
                                    <Typography variant='h4'  color={"white"}>Games</Typography>
              
                                </div>
                    <div className="row g-4 justify-content-center collection-grid GameListStyle">
                        {
                            items.map((elem) => {
                            const { id, image, title, alt } = elem;
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={id}>
                                        <div className="game-item item-layer">
                                            <div className="game-item-inner">
                                                <div className="game-thumb">
                                                    <img src={image} alt={alt} />
                                                </div>
                                                <div className="game-overlay">
                                                    <h4>{title} </h4>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default GameList;

