import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SOFTWARE_PROJECTS, SoftwareProject } from '@/data/portfolioData';
import SoftwareProjectDetailClient from '@/components/software/SoftwareProjectDetailClient';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return SOFTWARE_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = SOFTWARE_PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found | Great Light Group',
    };
  }

  const siteUrl = 'https://greatlightgroup.com';
  const pageUrl = `${siteUrl}/software/projects/${project.id}`;

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} | Great Light Group Software Engineering`,
      description: project.description,
      url: pageUrl,
      type: 'article',
      images: [
        {
          url: project.image.startsWith('http') ? project.image : `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} Architectural Showcase`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Great Light Group`,
      description: project.description,
      images: [project.image.startsWith('http') ? project.image : `${siteUrl}${project.image}`],
    },
    keywords: [
      project.title,
      project.subtitle,
      project.category,
      ...project.techStack,
      'Great Light Group',
      'Software Architecture Ghana',
    ],
  };
}

export default function SoftwareProjectDetailPage({ params }: Props) {
  const project = SOFTWARE_PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Schema.org structured data for Google Search Console
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    applicationCategory: project.category,
    operatingSystem: 'Web, Cloud, Cross-Platform',
    author: {
      '@type': 'Organization',
      name: 'Great Light Group',
      url: 'https://greatlightgroup.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: `https://greatlightgroup.com/software/projects/${project.id}`,
    image: project.image.startsWith('http')
      ? project.image
      : `https://greatlightgroup.com${project.image}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareProjectDetailClient project={project} allProjects={SOFTWARE_PROJECTS} />
    </>
  );
}
