import { Grid } from "@mui/material";

function Footer() {
  return ( 
    <Grid container className="footerSection">
      <Grid item xs={12}>
        <p className="footerText">Copyright © 2022. Decentralized e-learning. All Rights Reserved</p>
      </Grid>
    </Grid>
  );
}

export default Footer;