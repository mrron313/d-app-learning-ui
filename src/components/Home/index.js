import { Grid, Typography } from '@mui/material';
import React from 'react';
import CourseCard from './CourseCard';
import LatestNewsCard from './LatestNewsCard';
import TopLearnerCard from './TopLearnerCard';

import Slider from './Slider';

const Home = () => {
  return ( 
    <Grid container spacing={4}>
      <Grid item xs={12} style={{ height: '700px', }}>
        <Slider />
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