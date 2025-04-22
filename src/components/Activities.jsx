import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function Activities() {
  const activities = [
    {
      title: 'Beach Cleanups',
      description: 'Participated in over 40 beach cleanup drives with Vizag Volunteers',
      icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Navy Marathon 2023',
      description: 'Served as Team Lead for the event organization',
      icon: <DirectionsRunIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  return (
    <Box
      id="activities"
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
            Other Activities
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {activities.map((activity, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
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
                        {activity.icon}
                        <Typography
                          variant="h5"
                          component="h3"
                          color="primary"
                          sx={{ ml: 2 }}
                        >
                          {activity.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {activity.description}
                      </Typography>
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

export default Activities;