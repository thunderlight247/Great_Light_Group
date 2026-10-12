'use client';

import { useEffect } from 'react';
import { X, ExternalLink, Laptop, Smartphone, Github } from 'lucide-react';
import { SoftwareProject } from '@/data/portfolioData';

interface LivePreviewModalProps {
  project: SoftwareProject | null;
  onClose: () => void;
}

export default function LivePreviewModal({ project, onClose }: LivePreviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-glg-ink/10">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-glg-ink text-white flex items-center justify-between border-b border-glg-ink/10">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-glg-green animate-pulse" />
            <div>
              <h3 className="font-serif font-bold text-base leading-tight">
                {project.title}
              </h3>
              <span className="text-[11px] text-glg-gold-light font-mono">
                {project.architecture}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-glg-green text-white hover:bg-glg-green-light transition-colors"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Iframe Viewport Container */}
        <div className="flex-1 bg-glg-paper relative overflow-hidden">
          {project.liveUrl ? (
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-glg-ink/5 text-glg-muted flex items-center justify-center">
                <Laptop className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-glg-ink">
                Live URL is staging or restricted
              </h4>
              <p className="text-xs text-glg-ink/70 max-w-sm">
                This project represents a backend or private client portal. Source code and architectural specifications can be explored in the GitHub repository.
              </p>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-glg-ink text-white text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
