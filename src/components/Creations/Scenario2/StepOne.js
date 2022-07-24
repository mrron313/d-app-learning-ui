import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import UserCard from '../UserCard1';

export default function StepOne() {
 return (
    <Grid item xs={12}>
        <Grid container className='createCollectionBox createCollectionBoxScenario2'>
            <Grid xs={2}>
                <Typography className='collectionFieldTitle'>Title</Typography>
            </Grid>
            <Grid xs={10}>
                <TextField
                    variant="standard"           
                    InputProps={{
                        disableUnderline: true,
                        style: { padding: '8px 20px' },
                    }} className='collectionField' fullWidth placeholder="Collection title" />
            </Grid>

            <Grid xs={2}>
                <Typography className='collectionFieldTitle'>Description</Typography>
            </Grid>
            <Grid xs={10}>
                <TextField
                    variant="standard"           
                    InputProps={{
                        disableUnderline: true,
                        style: { padding: '8px 20px' },
                    }} className='collectionField collectionDesc' fullWidth placeholder="Select Collection" />
            </Grid>

            <Grid xs={2}>
                <Typography className='collectionFieldTitle'>Collection</Typography>
            </Grid>
            <Grid xs={10}>
                <TextField
                    variant="standard"           
                    InputProps={{
                        disableUnderline: true,
                        style: { padding: '8px 20px' },
                    }} className='collectionField' fullWidth placeholder="Select Collection" />
            </Grid>

            <Grid xs={2}>
                <Typography className='collectionFieldTitle'>Author</Typography>
            </Grid>
            <Grid xs={10}>
                <div className='collectionField authorField'>
                    <UserCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
  );
};
