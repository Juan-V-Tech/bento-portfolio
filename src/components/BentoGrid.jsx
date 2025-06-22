import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const BentoGrid = ({ children }) => {
  return (
    <Box
      sx={{
        width: { xs: '100vw', sm: '90vw', md: '70vw', lg: '60vw' },
        mx: 'auto',
        minHeight: '100vh',
        px: { xs: 0.5, sm: 2 },
        py: { xs: 2, sm: 4 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%' }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default BentoGrid;
