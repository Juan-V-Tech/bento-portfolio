import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import React from 'react';

const MotionGridItem = motion(Grid);

const BentoGrid = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        overflowY: 'hidden',
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
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          return (
            <MotionGridItem
              item
              initial={{ y: 100, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                duration: .85, 
                delay: index * 0.4,
                ease: "easeOut" 
              }}
              {...(child.props.gridItemProps || {})}
            >
              {child}
            </MotionGridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BentoGrid;
