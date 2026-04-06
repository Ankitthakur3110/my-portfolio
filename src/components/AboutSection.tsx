'use client';
import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SectionWrapper, { fadeUpVariants } from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

const highlights = [
  { icon: <WorkIcon />, label: 'Current Role', value: 'Senior Associate Consultant, Infosys' },
  { icon: <LocationOnIcon />, label: 'Location', value: 'Indore, Madhya Pradesh, India' },
  { icon: <SchoolIcon />, label: 'Education', value: 'B.E. Information Technology, RGPV' },
  { icon: <RocketLaunchIcon />, label: 'Open To', value: 'Full-time roles · UK opportunities' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Introduction">
      <Grid container spacing={5} alignItems="center">
        {/* Text */}
        <Grid item xs={12} md={7}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              {portfolioData.summary}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.9 }}
            >
              I thrive at the intersection of <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>scalable architecture</Box> and
              {' '}<Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>great user experience</Box> — translating complex financial and enterprise workflows into clean, performant interfaces. Actively exploring open source contributions and UK job opportunities.
            </Typography>
          </motion.div>
        </Grid>

        {/* Highlights grid */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            {highlights.map((h, i) => (
              <Grid item xs={12} key={h.label}>
                <motion.div
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUpVariants}
                  custom={i + 1}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      background: 'rgba(13,22,38,0.6)',
                      border: '1px solid rgba(0,212,255,0.1)',
                      borderRadius: 2,
                      transition: 'border-color 0.2s',
                      '&:hover': { borderColor: 'rgba(0,212,255,0.3)' },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        display: 'flex',
                        p: 1,
                        borderRadius: 1.5,
                        background: 'rgba(0,212,255,0.08)',
                        flexShrink: 0,
                      }}
                    >
                      {h.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {h.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, mt: 0.2 }}>
                        {h.value}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
