'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItemButton, ListItemText, useScrollTrigger,
  Slide, useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled
              ? 'rgba(5, 10, 20, 0.92)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
              <Box
                sx={{
                  width: 32, height: 32, borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <CodeIcon sx={{ fontSize: 18, color: '#fff' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(90deg, #00D4FF, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AT
              </Typography>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      px: 2,
                      '&:hover': { color: 'primary.main', background: 'rgba(0,212,255,0.06)' },
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  size="small"
                  href="mailto:anklitthakur3110@gmail.com"
                  sx={{
                    ml: 1,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontSize: '0.875rem',
                    '&:hover': { background: 'rgba(0,212,255,0.08)' },
                  }}
                >
                  Hire Me
                </Button>
              </Box>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: 'text.primary' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: 'rgba(5, 10, 20, 0.97)',
            borderLeft: '1px solid rgba(0,212,255,0.15)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              sx={{ py: 1.5, px: 3 }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 500,
                  color: 'text.secondary',
                }}
              />
            </ListItemButton>
          ))}
          <Box sx={{ px: 3, pt: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              href="mailto:anklitthakur3110@gmail.com"
              sx={{ borderColor: 'primary.main', color: 'primary.main' }}
            >
              Hire Me
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
