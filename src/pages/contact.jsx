import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Paper,
    Button
} from '@mui/material';
import {
    Email,
    LinkedIn,
    GitHub,
    LocationOn,
    Download
} from '@mui/icons-material';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Email sx={{ fontSize: 30 }} />,
            title: 'Email',
            value: 'focusjc07@gmail.com',
            link: 'mailto:focusjc07@gmail.com',
            description: 'Send me an email anytime'
        },
        {
            icon: <LinkedIn sx={{ fontSize: 30 }} />,
            title: 'LinkedIn',
            value: 'linkedin.com/in/juan-ventura-romero/',
            link: 'https://www.linkedin.com/in/juan-ventura-romero/',
            description: 'Connect with me on LinkedIn'
        },
        {
            icon: <GitHub sx={{ fontSize: 30 }} />,
            title: 'GitHub',
            value: 'github.com/juan-v-tech',
            link: 'https://github.com/juan-v-tech',
            description: 'Check out my projects'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={10} lg={8}>
                        <Paper
                            elevation={6}
                            sx={{
                                p: 4,
                                background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(50,50,50,0.9))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                outline: '2px solid #59B2D1',
                                borderRadius: 3,
                                textAlign: 'center',
                                mb: 4
                            }}
                        >
                            <Typography
                                variant="h3"
                                gutterBottom
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: 2
                                }}
                            >
                                Get In Touch
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'rgba(255,255,255,0.8)',
                                    mb: 3,
                                    lineHeight: 1.6
                                }}
                            >
                                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and engineering.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<Download />}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                    href="/juan-ventura-romero.pdf"
                                    target="_blank"
                                >
                                    Download Resume
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<LocationOn />}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    Los Angeles, CA
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={10} lg={8}>
                        <Paper
                            elevation={6}
                            sx={{
                                p: 4,
                                background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(50,50,50,0.9))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                outline: '2px solid #59B2D1',
                                borderRadius: 3
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: 3,
                                    textAlign: 'center'
                                }}
                            >
                                Contact Methods
                            </Typography>
                            <Grid container spacing={3}>
                                {contactMethods.map((method, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Card
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    bgcolor: 'rgba(255,255,255,0.08)',
                                                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                                                }
                                            }}
                                            onClick={() => window.open(method.link, '_blank')}
                                        >
                                            <CardContent
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    p: 3
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        color: 'primary.main',
                                                        mb: 2
                                                    }}
                                                >
                                                    {method.icon}
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        mb: 1
                                                    }}
                                                >
                                                    {method.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.7)',
                                                        mb: 1,
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    {method.description}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.9)',
                                                        fontWeight: 500,
                                                        fontSize: '0.8rem'
                                                    }}
                                                >
                                                    {method.value}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
