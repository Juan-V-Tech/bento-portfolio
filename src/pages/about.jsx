import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Box,
    Chip,
    Paper,
    Avatar,
    Divider,
    IconButton
} from '@mui/material';
import {
    School,
    Code,
    Build,
    Engineering,
    PhotoCamera,
    SportsEsports,
    MusicNote
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

    const hobbies = [
        { 
            name: 'Mechanical Keyboards', 
            icon: <Code />,
            image: 'vscode.png', 
            description: 'Building custom mechanical keyboards'
        },
        { 
            name: 'Skateboarding', 
            icon: <SportsEsports />,
            image: 'la-vibes.jpg', 
            description: 'Skateboarding around LA'
        },
        { 
            name: 'Electric Guitar', 
            icon: <MusicNote />,
            image: 'la-sunset.jpg', 
            description: 'Playing electric guitar'
        },
        { 
            name: 'Photography', 
            icon: <PhotoCamera />,
            image: 'los-angleles-palm-trees.jpg', 
            description: 'Capturing moments and landscapes'
        }
    ];

    const photoPlaceholders = [
        {
            title: 'Workspace Setup',
            description: 'My engineering workspace with projects',
            placeholder: 'workspace.jpg'
        },
        {
            title: 'Project Showcase',
            description: 'Recent circuit design project',
            placeholder: 'project1.jpg'
        },
        {
            title: 'College Life',
            description: 'At El Camino College campus',
            placeholder: 'college.jpg'
        },
        {
            title: 'Hobby Time',
            description: 'Building custom mechanical keyboards',
            placeholder: 'hobby.jpg'
        }
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

            {/* Hobbies Section */}
            {/*
            <PageTransition delay={600}>
                <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10} lg={8}>
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(50,50,50,0.9))',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
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
                            <SportsEsports color="primary" />
                            Hobbies & Interests
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {hobbies.map((hobby, index) => (
                                <Grid item xs={12} sm={6} md={3} key={hobby.name}>
                                    <Card
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                transition: 'transform 0.3s ease',
                                                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={hobby.image}
                                            alt={hobby.name}
                                            sx={{
                                                height: 120,
                                                objectFit: 'cover',
                                                filter: 'brightness(0.7)'
                                            }}
                                        />
                                        <CardContent
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                py: 2
                                            }}
                                        >
                                            <Typography 
                                                variant="h6" 
                                                sx={{ 
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    mb: 1
                                                }}
                                            >
                                                {hobby.name}
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                sx={{ 
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {hobby.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>

                {/* Photo Gallery Section */}
                {/*<Grid item xs={12}>
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(50,50,50,0.9))',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
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
                                gap: 1
                            }}
                        >
                            <PhotoCamera color="primary" />
                            Gallery
                        </Typography>
                        <Grid container spacing={3}>
                            {photoPlaceholders.map((photo, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                transition: 'transform 0.3s ease',
                                                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <PhotoCamera sx={{ fontSize: 60, color: 'rgba(255,255,255,0.3)' }} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                                                {photo.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                {photo.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
                </Grid>
            </PageTransition>
            */}
        </Container>
    );
}

export default About;
