import React, { useEffect, useState } from 'react';
import { postDetailLaw } from '../../services/lawService';
import { useParams } from 'react-router-dom';

const SocialPoliticsDetail = ({ dataSocialPolitics }) => {
    console.log(dataSocialPolitics)
    return (
        <div>
            {dataSocialPolitics && dataSocialPolitics.map((item, index) => (

                <div key={index}>
                    <h5 style={{ fontWeight: 700 }}>{item.title}</h5>
                    {item.detail_data && item.detail_data.map((detailItem, detailIndex) => (
                        <div key={detailIndex}>
                            <p> {detailItem.text}</p>
                            {detailItem.image && <img src={detailItem.image} alt={`Image ${detailIndex}`} />}
                        </div>
                    ))}
                    {/* {item.image && <img src={item.image} alt={`Image ${index}`} />} */}
                </div>
            ))}
        </div>
    );
}

export default SocialPoliticsDetail;
