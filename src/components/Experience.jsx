import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'F9 Info Technologies',
      duration: 'Sep 2024 - Present',
      responsibilities: [
        'Worked on Laravel and React projects',
        'API development and integration',
        'CMS management and implementation',
        'SEO optimization and fixes',
        'Collaborative development using Git and Slack'
      ]
    }
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        bgcolor: 'background.paper'
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
            Professional Experience
          </Typography>

          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        '&:hover': {
                          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                          transform: 'translateY(-5px)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      <Typography variant="h5" component="h3" gutterBottom color="primary">
                        {exp.position}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        {exp.duration}
                      </Typography>
                      <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <Typography
                            component="li"
                            variant="body1"
                            key={respIndex}
                            sx={{ mb: 1 }}
                          >
                            {responsibility}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;