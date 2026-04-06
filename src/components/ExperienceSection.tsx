'use client';
import React, { useRef } from 'react';
import { Box, Typography, Paper, Chip, Divider } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

function ExperienceCard({ job, index }: { job: typeof portfolioData.experience[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          background: 'rgba(13,22,38,0.7)',
          border: '1px solid rgba(0,212,255,0.1)',
          borderRadius: 3,
          mb: 3,
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s, transform 0.3s',
          '&:hover': {
            borderColor: 'rgba(0,212,255,0.3)',
            transform: 'translateY(-2px)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0,
            width: '3px', height: '100%',
            background: 'linear-gradient(180deg, #00D4FF, #7C3AED)',
            borderRadius: '3px 0 0 3px',
          },
        }}
      >
        {/* Company header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ p: 1, borderRadius: 1.5, background: 'rgba(0,212,255,0.08)', color: 'primary.main', display: 'flex' }}>
              <BusinessIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'text.primary' }}>
                {job.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                {job.role}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
            <Chip
              label={job.period}
              size="small"
              sx={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.68rem',
                background: 'rgba(0,212,255,0.08)',
                color: 'primary.light',
                border: '1px solid rgba(0,212,255,0.2)',
              }}
            />
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 0.5, fontFamily: '"DM Mono", monospace' }}>
              {job.location}
            </Typography>
          </Box>
        </Box>

        {/* Projects */}
        {job.projects.map((project, pi) => (
          <Box key={project.name} sx={{ mt: pi > 0 ? 3 : 2 }}>
            {pi > 0 && <Divider sx={{ mb: 3, borderColor: 'rgba(0,212,255,0.08)' }} />}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary' }}>
                {project.name}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', fontSize: '0.68rem' }}>
                {project.period}
              </Typography>
            </Box>
            <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
              {project.highlights.map((point, hi) => (
                <motion.li
                  key={hi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + hi * 0.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: '0.45rem', color: 'primary.main', mt: '7px', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {point}
                  </Typography>
                </motion.li>
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Work History">
      <Box sx={{ background: 'rgba(0,0,0,0.15)', borderRadius: 4, p: { xs: 2, md: 4 } }}>
        {portfolioData.experience.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} />
        ))}
      </Box>
    </SectionWrapper>
  );
}
