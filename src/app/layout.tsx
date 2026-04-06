import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Ankit Thakur — Senior Software Developer',
  description:
    'Senior Frontend-Focused Full Stack Engineer with 6+ years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript.',
  keywords: ['React', 'Next.js', 'TypeScript', 'Full Stack', 'Frontend Developer', 'Ankit Thakur'],
  openGraph: {
    title: 'Ankit Thakur — Senior Software Developer',
    description: 'Full Stack Engineer specializing in React, Next.js, and TypeScript',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
