'use client';
import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

const icons = [EmojiEventsIcon, StarIcon, TrendingUpIcon, GroupsIcon];
const gradients = [
  'linear-gradient(135deg, #F59E0B, #EF4444)',
  'linear-gradient(135deg, #00D4FF, #7C3AED)',
  'linear-gradient(135deg, #10B981, #00D4FF)',
  'linear-gradient(135deg, #7C3AED, #EC4899)',
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="achievements" title="Achievements" subtitle="Recognition">
      <Box
        ref={ref}
        sx={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(124,58,237,0.04) 100%)',
          borderRadius: 4,
          border: '1px solid rgba(0,212,255,0.08)',
          p: { xs: 3, md: 5 },
        }}
      >
        <Grid container spacing={3}>
          {portfolioData.achievements.map((achievement, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Grid item xs={12} sm={6} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      gap: 2.5,
                      alignItems: 'flex-start',
                      background: 'rgba(13,22,38,0.5)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: 2.5,
                      height: '100%',
                      transition: 'transform 0.25s',
                      '&:hover': { transform: 'translateY(-3px)' },
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        background: gradients[i % gradients.length],
                        display: 'flex',
                        flexShrink: 0,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      }}
                    >
                      <Icon sx={{ color: '#fff', fontSize: '1.3rem' }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.75, pt: 0.4 }}
                    >
                      {achievement}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </SectionWrapper>
  );
}
