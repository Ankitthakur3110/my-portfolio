'use client';
import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '@/data/portfolio';

const contactItems = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    color: '#00D4FF',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'ankit-thakur-4b4bb2160',
    href: portfolioData.linkedin,
    color: '#0A66C2',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'ankitthakur3110',
    href: portfolioData.github,
    color: '#E6EDF3',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone}`,
    color: '#10B981',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <Box ref={ref}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: 560,
              mx: 'auto',
              mb: 6,
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            {`I'm currently open to new opportunities — whether it's a full-time role, contract work, or just a chat about engineering. Feel free to reach out!`}
          </Typography>
        </motion.div>

        {/* Contact cards */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
          {contactItems.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Paper
                  component="a"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    textDecoration: 'none',
                    background: 'rgba(13,22,38,0.7)',
                    border: `1px solid ${item.color}22`,
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: item.color,
                      transform: 'translateY(-5px)',
                      boxShadow: `0 12px 30px ${item.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '50%',
                      background: `${item.color}15`,
                      color: item.color,
                      display: 'flex',
                      mb: 1.5,
                      fontSize: '1.5rem',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, wordBreak: 'break-word', fontSize: '0.8rem' }}>
                    {item.value}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <Button
            variant="contained"
            size="large"
            href={`mailto:${portfolioData.email}`}
            startIcon={<EmailIcon />}
            sx={{
              background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
              color: '#fff',
              fontWeight: 700,
              px: 5, py: 1.6,
              fontSize: '1rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #66E8FF, #A78BFA)',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(0,212,255,0.35)',
              },
              transition: 'all 0.3s',
            }}
          >
            Say Hello 👋
          </Button>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
}
