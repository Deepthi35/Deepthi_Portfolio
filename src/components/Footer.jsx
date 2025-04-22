import { Box, Container, Typography, Link, Stack } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.default',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Deepthi Madhabattula. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="https://www.linkedin.com/in/deepthi-madhabattula"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Deepthi35"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              GitHub
            </Link>
            <Link
              href="mailto:deepthimadhabattula35@gmail.com"
              color="inherit"
              underline="hover"
            >
              Email
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;