import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const fadeIn = `@keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }`;

function Welcome() {
  return (
    <Box
      id="welcome"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.paper',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ animation: `fadeIn 2s ease-in-out` }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hi, I'm Madhabattula Deepthi
          </Typography>
        </motion.div>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: 'text.secondary', mb: 4 }}
        >
          Full Stack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: '600px', mb: 4, color: 'text.secondary' }}
        >
          Passionate about crafting impactful digital experiences using Laravel, React, MySQL,
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/Deepthi35"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/deepthi-madhabattula"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            href="mailto:deepthimadhabattula35@gmail.com"
          >
            Email
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Welcome;