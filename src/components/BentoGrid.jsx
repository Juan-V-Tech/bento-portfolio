import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const BentoGrid = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%', 
        maxWidth: { sm: '90vw', md: '70vw', lg: '60vw' }, 
        mx: 'auto',
        minHeight: '100vh',
        px: { xs: 0.5, sm: 2 }, 
        py: { xs: 0.5, sm: 4 },
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Grid
        container
        spacing={{ xs: 0.5, sm: 2 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          '& > *': { 
            maxWidth: { xs: '95%', sm: 'auto' },
          }
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default BentoGrid;
