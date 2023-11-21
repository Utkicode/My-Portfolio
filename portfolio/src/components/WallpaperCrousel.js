// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './WallpaperCarousel.css';

// const images = [
//     'java.jpg',
//     'reactjs.jpg',
//     'python.jpg',
//     'mongodb.jpg',
//     'mysql.jpg',
//     'springboot.jpg',
//     'restapi.jpg',
// ];

// const WallpaperCarousel = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <div className="carousel-container">
//             <Slider {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index} className="carousel-slide">
//                         <img src={require(`images/${image}`).default} alt={`Wallpaper ${index + 1}`} />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default WallpaperCarousel;
