import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const education = [
    {
      degree: 'B.Tech, CSE',
      institution: 'GVP College for Women',
      year: '2020-2024',
      grade: 'CGPA: 8.0'
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Jr. College',
      year: '2018-2020',
      grade: 'CGPA: 7.95'
    },
    {
      degree: 'SSC',
      institution: 'Sri Vijetha School',
      year: '2018',
      grade: 'CGPA: 9.5'
    }
  ];

  return (
    <Box
      id="education"
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
            Education
          </Typography>

          <Timeline position="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: 'background.paper',
                        '&:hover': {
                          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                          transform: 'translateY(-5px)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      <Typography variant="h5" component="h3" gutterBottom color="primary">
                        {edu.degree}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {edu.institution}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {edu.year}
                      </Typography>
                      <Typography variant="body1" color="primary" sx={{ mt: 1, fontWeight: 500 }}>
                        {edu.grade}
                      </Typography>
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

export default Education;