'use client';
import React, { useRef } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const edu = portfolioData.education;

  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic Background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            background: 'rgba(13,22,38,0.7)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '3px',
              background: 'linear-gradient(90deg, #00D4FF, #7C3AED)',
            },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Box
                sx={{
                  width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mx: { xs: 0, md: 'auto' },
                }}
              >
                <SchoolIcon sx={{ fontSize: { xs: 28, md: 36 }, color: 'primary.main' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h4" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, mb: 0.8 }}>
                {edu.degree}
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '1.05rem', mb: 2.5 }}>
                {edu.institution}
              </Typography>

              <Grid container spacing={2}>
                {[
                  { icon: <LocationOnIcon fontSize="small" />, label: edu.location },
                  { icon: <CalendarTodayIcon fontSize="small" />, label: edu.period },
                  { icon: <GradeIcon fontSize="small" />, label: `CGPA: ${edu.cgpa}` },
                ].map((item) => (
                  <Grid item xs="auto" key={item.label}>
                    <Box
                      sx={{
                        display: 'flex', alignItems: 'center', gap: 1,
                        px: 2, py: 0.8,
                        background: 'rgba(0,212,255,0.06)',
                        border: '1px solid rgba(0,212,255,0.15)',
                        borderRadius: 2,
                        color: 'text.secondary',
                      }}
                    >
                      <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                      <Typography variant="body2" sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8rem' }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </SectionWrapper>
  );
}
