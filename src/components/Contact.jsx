import { Box, Container, Typography, Grid, TextField, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic would go here
  };

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  '& .MuiTextField-root': { mb: 2 },
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, ml: { md: 4 } }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Contact Information
                </Typography>
                <Typography variant="body1" paragraph>
                  Feel free to reach out to me through any of these channels:
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">
                      deepthimadhabattula35@gmail.com
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mt: 4 }}>
                    Or connect with me on social media:
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      href="https://www.linkedin.com/in/deepthi-madhabattula"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      href="https://github.com/Deepthi35"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;