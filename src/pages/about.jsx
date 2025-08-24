import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Box,
    Chip,
    Paper,
} from '@mui/material';
import {
    Build,
} from '@mui/icons-material';
import ProfileCard from '../components/ProfileCard';
import PageTransition from '../components/PageTransition';

function About() {
    const skills = [
        'Electrical Engineering',
        'Computer Science',
        'Python',
        'C++',
        'JavaScript',
        'React',
        'VPython',
        'Circuit Design'
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4, height: '100%', overflow: 'auto' }}>
            <PageTransition delay={100}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <ProfileCard
                    name={
            <>
              Juan C. Ventura
            </>
          }
                    title="EE | CS | CE Student"
                    handle="juan-v-tech"
                    status="Available"
                    contactText="Contact Me"
                    iconUrl="la-vibes.jpg"
                    avatarUrl="clearprofile.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => {
                        window.location.href = '/contact';
                    }}
                />
                </Box>
            </PageTransition>

            <PageTransition delay={400}>
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
                            borderRadius: 3
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'left',
                                gap: 1
                            }}
                        >
                            <Build color="primary" />
                            About Me
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{
                                        color: 'rgba(255,255,255,0.9)',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Hello! I'm a passionate engineering student based in Los Angeles, currently pursuing my education at El Camino College. 
                                    My journey spans across electrical engineering, computer science, and computer engineering, where I love exploring 
                                    the intersection of hardware and software to create innovative solutions.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{
                                        color: 'rgba(255,255,255,0.9)',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    When I'm not studying or working on projects, you'll find me building custom mechanical keyboards, skateboarding 
                                    around LA, or playing electric guitar. I believe in the power of hands-on learning and enjoy bringing theoretical 
                                    concepts to life through practical applications. From physics simulations to circuit design, I'm always excited 
                                    to tackle new challenges and expand my knowledge.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 2 }}>
                                    Skills & Technologies
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill) => (
                                        <Chip
                                            key={skill}
                                            label={skill}
                                            variant="filled"
                                            sx={{
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                '&:hover': {
                                                    bgcolor: 'primary.dark'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                </Grid>
            </PageTransition>
        </Container>
    );
}

export default About;
