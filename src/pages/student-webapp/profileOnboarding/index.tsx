// ** MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// ** Demo Components Imports
import Profile from "../../../components/profileOnboarding";

const ProfileOnboarding = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Profile;
