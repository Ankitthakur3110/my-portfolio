'use client';
import React from 'react';
import { Box, Typography, Button, Container, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { portfolioData } from '@/data/portfolio';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.08) 0%, transparent 60%)',
      }}
    >
      {/* Animated background grid */}
      <Box
        sx={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating orbs */}
      <MotionBox
        variants={floatVariants}
        animate="animate"
        sx={{
          position: 'absolute', top: '15%', right: '10%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <MotionBox
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        sx={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 10, pb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            {/* Badge */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="Available for opportunities"
                size="small"
                sx={{
                  mb: 3,
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: 'primary.main',
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.72rem',
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: '#00D4FF',
                    mr: 1,
                    animation: 'pulse 2s infinite',
                  },
                }}
              />
            </MotionBox>

            {/* Name */}
            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              {portfolioData.name}
            </MotionTypography>

            {/* Title */}
            <MotionTypography
              variant="h2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                fontWeight: 500,
                mb: 3,
                background: 'linear-gradient(90deg, #00D4FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {portfolioData.title} · {portfolioData.subtitle}
            </MotionTypography>

            {/* Tagline */}
            <MotionTypography
              variant="body1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: 560,
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              {portfolioData.tagline}
            </MotionTypography>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}
            >
              <Button
                variant="contained"
                size="large"
                href="mailto:anklitthakur3110@gmail.com"
                startIcon={<EmailIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #00D4FF, #0099BB)',
                  color: '#050A14',
                  fontWeight: 700,
                  px: 3,
                  py: 1.4,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #66E8FF, #00D4FF)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,212,255,0.35)',
                  },
                  transition: 'all 0.25s',
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={scrollToAbout}
                sx={{
                  borderColor: 'rgba(0,212,255,0.4)',
                  color: 'text.primary',
                  px: 3,
                  py: 1.4,
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'rgba(0,212,255,0.06)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.25s',
                }}
              >
                View Work
              </Button>
            </MotionBox>

            {/* Social Links */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              sx={{ display: 'flex', gap: 2 }}
            >
              <Button
                href={portfolioData.linkedin}
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, textTransform: 'none' }}
              >
                LinkedIn
              </Button>
              <Button
                href={portfolioData.github}
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, textTransform: 'none' }}
              >
                GitHub
              </Button>
            </MotionBox>
          </Grid>

          {/* Stats panel */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              sx={{
                background: 'rgba(13, 22, 38, 0.6)',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: 3,
                p: 4,
                backdropFilter: 'blur(12px)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 3,
              }}
            >
              {portfolioData.stats.map((stat, i) => (
                <MotionBox
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </MotionBox>
              ))}
            </MotionBox>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 1, mt: 6, cursor: 'pointer',
          }}
          onClick={scrollToAbout}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.65rem' }}>
            Scroll
          </Typography>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownwardIcon sx={{ color: 'primary.main', fontSize: '1.2rem', opacity: 0.7 }} />
          </motion.div>
        </MotionBox>
      </Container>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </Box>
  );
}
