import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';

function About() {
  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Full Stack Development',
      description: 'Experience in both frontend and backend development using modern technologies.'
    },
    {
      icon: <WebIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Web Technologies',
      description: 'Proficient in Laravel, React, and various modern web frameworks.'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Database Management',
      description: 'Skilled in MySQL database design and optimization.'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'background.default'
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
          >
            I am a Full Stack Developer with a passion for creating impactful digital solutions.
            Currently working at F9 Info Technologies, I specialize in Laravel and React development,
            with experience in API development, CMS management, and SEO optimization.
          </Typography>

          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 2,
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{highlight.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;