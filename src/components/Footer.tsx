'use client';
import React from 'react';
import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        borderTop: '1px solid rgba(0,212,255,0.1)',
        background: 'rgba(5,10,20,0.8)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 32, height: 32, borderRadius: '8px',
                background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <CodeIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: 'text.primary' }}>
                Ankit Thakur
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', fontSize: '0.65rem' }}>
                Senior Software Developer
              </Typography>
            </Box>
          </Box>

          {/* Social */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { icon: <LinkedInIcon />, href: portfolioData.linkedin, label: 'LinkedIn' },
              { icon: <GitHubIcon />, href: portfolioData.github, label: 'GitHub' },
              { icon: <EmailIcon />, href: `mailto:${portfolioData.email}`, label: 'Email' },
            ].map((s) => (
              <IconButton
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                aria-label={s.label}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: '1px solid rgba(0,212,255,0.1)',
                  borderRadius: 1.5,
                  '&:hover': { color: 'primary.main', borderColor: 'rgba(0,212,255,0.4)', background: 'rgba(0,212,255,0.06)' },
                  transition: 'all 0.2s',
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>

          {/* Copyright */}
          <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"DM Mono", monospace', fontSize: '0.68rem', textAlign: 'center' }}>
            © {year} Ankit Thakur · Built with Next.js & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
