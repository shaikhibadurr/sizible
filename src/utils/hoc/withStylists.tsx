import Grid from '@mui/material/Grid2';
import Stylists from '../../components/Stylist';

const withStylists = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 2 }}>
            <Stylists />
          </Grid>
          <Grid container size={{ xs: 12, sm: 10 }}>
            <WrappedComponent {...props} />
          </Grid>
        </Grid>
      </>
    )
  };
};

export default withStylists;