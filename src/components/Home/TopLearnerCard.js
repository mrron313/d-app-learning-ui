import { Grid, Typography } from "@mui/material";
import CourseCardImg1 from '../../assets/course-card1.png';

function TopLearnerCard(props) {

  return (
    <Grid container className="invitationCard topLearnerCard">
      <Grid item xs={12}>
        <div className="invitationCardLeft">
          <div className="invitationCardLeftImage">
            <img alt='course-card' width='50' src={CourseCardImg1} />
          </div>
          <div className="invitationCardLeftText topLearnerCardLeftText">
            <Typography variant='h6'>
              John Smith
            </Typography>
            <Typography variant='span'>
              esther@gmail.com
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default TopLearnerCard;