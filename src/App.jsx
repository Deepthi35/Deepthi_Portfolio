import { useState } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Welcome />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Certifications />
          <Activities />
          <Contact />
        </motion.main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App