'use client';
import React, { useRef } from 'react';
import { Box, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PaletteIcon from '@mui/icons-material/Palette';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BugReportIcon from '@mui/icons-material/BugReport';
import BuildIcon from '@mui/icons-material/Build';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages': <CodeIcon />,
  'Frontend': <WebIcon />,
  'Styling': <PaletteIcon />,
  'Backend': <StorageIcon />,
  'Cloud / AWS': <CloudIcon />,
  'Testing': <BugReportIcon />,
  'Tools': <BuildIcon />,
};

const categoryColors: Record<string, string> = {
  'Languages': '#00D4FF',
  'Frontend': '#7C3AED',
  'Styling': '#EC4899',
  'Backend': '#10B981',
  'Cloud / AWS': '#F59E0B',
  'Testing': '#EF4444',
  'Tools': '#6366F1',
};

function SkillCard({ category, skills, index }: { category: string; skills: string[]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const color = categoryColors[category] || '#00D4FF';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          background: 'rgba(13,22,38,0.7)',
          border: `1px solid ${color}22`,
          borderRadius: 3,
          transition: 'border-color 0.3s, transform 0.3s',
          '&:hover': {
            borderColor: `${color}55`,
            transform: 'translateY(-3px)',
          },
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0, right: 0,
            width: 80, height: 80,
            background: `radial-gradient(circle, ${color}15, transparent 70%)`,
            borderRadius: '0 0 0 80px',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <Box
            sx={{
              p: 0.9, borderRadius: 1.5,
              background: `${color}18`,
              color: color,
              display: 'flex',
            }}
          >
            {categoryIcons[category]}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: color,
            }}
          >
            {category}
          </Typography>
        </Box>

        {/* Skills */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
          {skills.map((skill, si) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08 + si * 0.04 }}
            >
              <Chip
                label={skill}
                size="small"
                sx={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.72rem',
                  background: `${color}10`,
                  color: 'text.secondary',
                  border: `1px solid ${color}25`,
                  '&:hover': {
                    background: `${color}20`,
                    color: color,
                    borderColor: `${color}50`,
                  },
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Technical Skills" subtitle="Expertise">
      <Grid container spacing={3}>
        {Object.entries(portfolioData.skills).map(([category, skills], index) => (
          <Grid item xs={12} sm={6} lg={4} key={category}>
            <SkillCard category={category} skills={skills} index={index} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
