import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import QrCode from '../../../assets/qr.png';
import GreenRightIcon from '../../../assets/green-right.png';

export default function StepThree() {
 return (
    <Grid item xs={12}>
        <Grid container className='createCollectionBox'>

            <Grid container item xs={7}>
                <Grid xs={3}>
                    <Typography className='collectionFieldTitle'>Collection Data</Typography>
                </Grid>
                <Grid xs={9}>
                    <Button className='transparentGreenButton'>
                        <img src={GreenRightIcon} alt='green-right' /> Filled
                    </Button>
                </Grid>

                <Grid xs={3} className='collectionStoreBoxFields'>
                    <Typography className='collectionFieldTitle'>Self Sign</Typography>
                </Grid>
                <Grid xs={9} className='collectionStoreBoxFields'>
                    <Button className='nextCollectionButton signInCollectionButton'>
                        Signin
                    </Button>
                    <Button className='transparentGreenButton transparentGreenVerificationButton'>
                        <img src={GreenRightIcon} alt='green-right' /> <span> Verification </span>
                    </Button>
                </Grid>

                <Grid xs={3} className='collectionStoreBoxFields'>
                    <Typography className='collectionFieldTitle'>Store</Typography>
                </Grid>
                <Grid xs={9} >
                    <TextField
                        variant="standard"           
                        InputProps={{
                            disableUnderline: true,
                            style: { padding: '8px 20px' },
                        }} className='collectionField collectionStoreBoxFields' fullWidth placeholder="IPFS" />


                    <TextField
                        variant="standard"           
                        InputProps={{
                            disableUnderline: true,
                            style: { padding: '8px 20px' },
                        }} className='collectionField collectionStoreBoxFields' fullWidth placeholder="Youtube" />

                    <div className='humanCheckbox collectionStoreBoxFields'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I’m human" />
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={4} className='qrSectionDiv'>
                <Typography variant='h6' className='qrCodeTitle'>Current QR Code</Typography>
                <div className='qrSection'>
                    <img alt='qr' src={QrCode} />
                </div>
            </Grid>
            
        </Grid>
    </Grid>
  );
};
