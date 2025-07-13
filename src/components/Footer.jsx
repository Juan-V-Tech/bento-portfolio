import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                py: 3,
                px: 2,
                background: 'linear-gradient(145deg, rgba(20,20,20,0.95), rgba(40,40,40,0.95))',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            © {currentYear} Juan Ventura-Romero. MIT License.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                justifyContent: { xs: 'center', md: 'flex-end' },
                                flexWrap: 'wrap'
                            }}
                        >
                            <Link
                                href="/about"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                Contact
                            </Link>
                            <Link
                                href="https://github.com/juan-v-tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/juan-ventura-romero/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                LinkedIn
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
