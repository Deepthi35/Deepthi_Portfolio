import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Certifications() {
  const certifications = [
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      type: 'certification'
    },
    {
      title: 'JavaScript and Git',
      issuer: 'Geek Star',
      type: 'certification'
    },
    {
      title: 'Web Development',
      issuer: 'Raise Digital',
      type: 'certification'
    },
    {
      title: 'Digital Marketing',
      issuer: 'Google',
      type: 'certification'
    },
    {
      title: 'Webathon 2nd Place',
      issuer: 'PISCL',
      type: 'achievement'
    },
    {
      title: 'Beach Warrior Award',
      issuer: 'Vizag Volunteers',
      type: 'achievement'
    }
  ];

  return (
    <Box
      id="certifications"
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
            Certifications & Achievements
          </Typography>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2
                        }}
                      >
                        {cert.type === 'certification' ? (
                          <WorkspacePremiumIcon
                            sx={{ fontSize: 40, color: 'primary.main', mr: 2 }}
                          />
                        ) : (
                          <EmojiEventsIcon
                            sx={{ fontSize: 40, color: 'primary.main', mr: 2 }}
                          />
                        )}
                        <Typography variant="h6" component="h3" color="primary">
                          {cert.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        {cert.issuer}
                      </Typography>
                      <Chip
                        label={cert.type === 'certification' ? 'Certification' : 'Achievement'}
                        size="small"
                        color={cert.type === 'certification' ? 'primary' : 'secondary'}
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
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

export default Certifications;