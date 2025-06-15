import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';

// Placeholder image (replace with actual project images)
const placeholderImage = 'https://via.placeholder.com/400x200?text=Project+Image';

function Projects() {
  const projects = [
    {
      title: 'Vizag Volunteers',
      description: 'Full stack NGO platform built with Laravel and Bootstrap',
      link: 'https://vizagvolunteers.org',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
      image: placeholderImage,
    },
    {
      title: 'Sri Ganesh Hardware',
      description: 'Backend management system developed using Laravel',
      technologies: ['Laravel', 'MySQL', 'API'],
      image: placeholderImage,
    },
    {
      title: 'Omaharaja',
      description: 'SEO optimization implementation using Semrush tools',
      link: 'https://www.omaharaja.com/',
      technologies: ['SEO', 'Semrush', 'Content Strategy'],
      image: placeholderImage,
    },
    {
      title: 'Bhoomatha',
      description: 'Real estate platform with Laravel backend & React frontend',
      link: 'https://www.bhoomathagroup.com/',
      technologies: ['Laravel', 'React', 'MySQL'],
      image: placeholderImage,
    },
    {
      title: 'Kalam Dream Labs',
      description: 'CMS and content management implementation',
      link: 'https://kalamdreamlabs.com/',
      technologies: ['CMS', 'Content Management', 'Web Development'],
      image: placeholderImage,
    },
  ];

  return (
    <Box
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
      sx={{
        py: 10,
        bgcolor: 'linear-gradient(180deg, #f5f7fa 0%, #e4e9f0 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            id="projects-heading"
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 8,
              fontWeight: 700,
              color: 'primary.dark',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                bgcolor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={`${project.title} preview`}
                      sx={{
                        width: '100%',
                        height: 160,
                        objectFit: 'cover',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ color: 'primary.main', fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + techIndex * 0.05 }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                mt: 1,
                                bgcolor: 'primary.light',
                                color: 'primary.contrastText',
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.2s ease',
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Stack>
                    </CardContent>
                    {project.link && (
                      <CardActions sx={{ p: 3, pt: 0 }}>
                        <Button
                          startIcon={<LinkIcon />}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="primary"
                          size="small"
                          aria-label={`Visit ${project.title} website`}
                          sx={{
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': {
                              transform: 'scale(1.05)',
                              transition: 'all 0.2s ease',
                            },
                          }}
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