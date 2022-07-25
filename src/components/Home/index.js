import { Grid, Typography } from '@mui/material';
import React from 'react';
import CourseCard from './CourseCard';
import LatestNewsCard from './LatestNewsCard';
import TopLearnerCard from './TopLearnerCard';
import RightIcon from '../../assets/right.png';
import LeftIcon from '../../assets/left.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const Home = () => {
  let slides = [
    <img width={500} src="https://picsum.photos/800/300/?random" alt="1" />,
    <img width={500} src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img width={500} src="https://picsum.photos/800/302/?random" alt="3" />  , 
    <img width={500} src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img width={500} src="https://picsum.photos/800/304/?random" alt="5" />  
  ];

  const [imgIndex,setImgIndex] = React.useState(0)

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const settings = {
    infinite:true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <img src={RightIcon} />,
    prevArrow: <img src={LeftIcon} />,
    beforeChange: (current, next) => setImgIndex(next), 
  }

  return ( 
    <Grid container spacing={4}>
      <Grid item xs={12} style={{ height: '400px', margin: '50px 0px'}}>
        <Slider {...settings}>
          {slides.map((img, idx) => (
            <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
              {img}
            </div>
          ))}
        </Slider>
      </Grid>

      <Grid item xs={5}>
        <Typography className='inviationHeaderTitle homepageTitle' variant='h6'>Trending Collections</Typography>
      
        {[1, 2, 3].map((card) => (
          <CourseCard />
        ))}
      </Grid>

      <Grid item xs={3}>
        <Typography className='inviationHeaderTitle homepageTitle' variant='h6'>Top Learner</Typography>
        
        {[1, 2, 3, 4, 5].map((card) => (
          <TopLearnerCard  />
        ))}
      </Grid>

      <Grid item xs={4}>
        <Typography className='inviationHeaderTitle homepageTitle' variant='h6'>Latest News</Typography>
          
          {[1, 2, 3, 4, 5].map((card) => (
            <LatestNewsCard  />
          ))}
        </Grid>
    </Grid>
   );
}
 
export default Home;