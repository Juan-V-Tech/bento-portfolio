import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
];

function ResponsiveAppBar() {
    return (
        <AppBar
            position="static"
            sx={{
                background: 'transparent',
                borderRadius: '12px',
                boxShadow: 'none',
                backdropFilter: 'blur(3px)',
                outlineOffset: '-2px',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ py: 1 }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
