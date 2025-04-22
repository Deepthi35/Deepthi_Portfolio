import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
  const projects = [
    {
      title: 'Vizag Volunteers',
      description: 'Full stack NGO platform built with Laravel and Bootstrap',
      link: 'https://vizagvolunteers.org',
      technologies: ['Laravel', 'Bootstrap', 'MySQL']
    },
    {
      title: 'Sri Ganesh Hardware',
      description: 'Backend management system developed using Laravel',
      technologies: ['Laravel', 'MySQL', 'API']
    },
    {
      title: 'Omaharaja',
      description: 'SEO optimization implementation using Semrush tools',
      link: 'https://www.omaharaja.com/',
      technologies: ['SEO', 'Semrush', 'Content Strategy']
    },
    {
      title: 'Bhoomatha',
      description: 'Real estate platform with Laravel backend & React frontend',
      link: 'https://www.bhoomathagroup.com/',
      technologies: ['Laravel', 'React', 'MySQL']
    },
    {
      title: 'Kalam Dream Labs',
      description: 'CMS and content management implementation',
      link: 'https://kalamdreamlabs.com/',
      technologies: ['CMS', 'Content Management', 'Web Development']
    }
  ];

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom color="primary">
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{ mt: 1 }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    {project.link && (
                      <CardActions>
                        <Button
                          startIcon={<LinkIcon />}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </Button>
                      </CardActions>
                    )}
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Projects;