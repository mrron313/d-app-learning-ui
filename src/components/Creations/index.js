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
            <CollectionCard interactionBtns={true} />
          </Grid>
        );
      })}

      <Grid item xs={9}>
        <Typography className='inviationHeaderTitle invitationSentSection' variant='h5'>TRENDING COLLECTIONS</Typography>

        {[1, 2, 3].map(i => {
          return (
            <Grid item xs={12} style={{ marginTop: '10px' }}>
              <CollectionCard interactionBtns={false} />
            </Grid>
          );
        })}
      </Grid>


    </Grid>
  );
}
 
export default Creations;