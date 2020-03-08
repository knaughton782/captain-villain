import React from 'react';


const slidesArray = ['Slide1', 'Slide2'];


const MapContent = props => {
    return 
}

const mapOverSlidesList = props.slidesList.map((item, index) => (
    <div key={index}>{item}</div>
));
return { mapOverSlidesList };
