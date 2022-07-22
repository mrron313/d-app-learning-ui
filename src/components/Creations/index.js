import { Grid, Typography } from '@mui/material';
import React from 'react';
import CollectionCard from './CollectionCard';

const Creations = () => {
  return ( 
    <Grid container>

      <Grid item xs={12}>
        <Typography className='inviationHeaderTitle' variant='h5'>MY COLLECTIONS</Typography>
      </Grid>

      {[1, 2, 3].map(i => {
        return (
          <Grid item xs={12} style={{ marginTop: '10px' }}>
            <CollectionCard />
          </Grid>
        );
      })}

      <Grid item xs={12} className='invitationSentSection'>
        <Typography className='inviationSectionTitle' variant='h6'>Sent</Typography>
      </Grid>

    </Grid>
  );
}
 
export default Creations;