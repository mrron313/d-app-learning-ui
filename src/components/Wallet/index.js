import { Grid, Button, Chip, Typography } from '@mui/material';
import React from 'react';

const Wallet = () => {
  return ( 
    <div>
      <div className="inner-div">
        <div className="front">
          <div className="front__bkg-photo"></div>
          <div className="front__face-photo"></div>
            <Grid container className='userDetails'>
              <Grid item xs={3} className='userDetailsLeft'>
                <div className='userDetailsLeftHeader'>
                  <Typography variant='h4'>Arif Islam</Typography>
                  <Typography variant='p'>User experience designer</Typography>
                </div>

                <div className='userDetailsChip'>
                  <Chip className='chip' label='Author of 10 Collections' />
                  <Chip className='chip' label='120 Followers' />
                </div>
              </Grid>

              <Grid item xs={8} spacing={5} className='userDetailsRight'>
                <Button className='collectionButton'>
                  View My Collections
                </Button>

                <Button className='collectionButton2'>
                  Create a New Collection
                </Button>
              </Grid>
            </Grid>
        </div>
      </div>
    </div>
   );
}
 
export default Wallet;