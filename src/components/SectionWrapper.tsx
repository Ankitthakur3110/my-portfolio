'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function SectionWrapper({ id, children, title, subtitle }: SectionWrapperProps) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            <Box sx={{ mb: { xs: 5, md: 7 } }}>
              {/* Section label */}
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  display: 'block',
                  mb: 1,
                }}
              >
                {subtitle}
              </Typography>
              {/* Section title */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.6rem' },
                    fontWeight: 700,
                    color: 'text.primary',
                  }}
                >
                  {title}
                </Typography>
                <Box
                  sx={{
                    flex: 1, height: '1px',
                    background: 'linear-gradient(90deg, rgba(0,212,255,0.4), transparent)',
                    display: { xs: 'none', sm: 'block' },
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        )}
        {children}
      </Container>
    </Box>
  );
}
