import { Grid } from '../../UI/Grid';
import { Typography } from '../../UI/Typography';

export const Navbar = () => {
  return (
    <Grid flex gap={3}>
      <Typography padding={false} variant="body2">
        Blog Home
      </Typography>
      <Typography padding={false} variant="body2">
        Articles
      </Typography>
      <Typography padding={false} variant="body2">
        README
      </Typography>
    </Grid>
  );
};
