import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Stanley Lam",
};

export const projects = [
  {
    title: "Document AI Agent",
    description:
      "Scalable multi-agent document processing system deployed on Google Cloud for automated document analysis and question answering, reducing manual processing time for unstructured business data.",
    tags: ["Google ADK", "FastAPI", "Vertex AI", "Gemini", "Python"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    title: "Agentic RAG — Marketing Report Generator",
    description:
      "Production agentic RAG system with a local LLM deployed on AWS, automating marketing report generation for analysts. Implements a scalable vector database and graph database for fast semantic search across large unstructured corpora.",
    tags: ["LangGraph", "Ollama", "AWS EC2", "AWS Lambda", "PostgreSQL", "Neo4j", "DeepEval"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    title: "Brain-Computer Interface Prototype",
    description:
      "BCI prototype that translates raw EEG telemetry into device control commands via a low-latency real-time processing pipeline. Also includes a fine-tuned LLM for Augmented and Alternative Communication (AAC) to aid users with speech impairments.",
    tags: ["MNE-Python", "Lab Streaming Layer", "Rust", "PyTorch", "Transformers", "SciPy"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    title: "Virtual Car Studio",
    description:
      "Interactive React web application to render and manipulate a 3D car model within a virtual studio environment. Users can dynamically control 3D lighting and camera angles and generate high-quality automotive visualisations.",
    tags: ["React", "Three.js"],
    liveUrl: "https://lnkd.in/g-g3tZh2",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Real-time driver drowsiness detection system using CNN and Inception V3, achieving 80% accuracy. Integrates Roboflow for real-time image classification.",
    tags: ["Python", "TensorFlow", "Inception V3", "Roboflow", "CNN"],
    liveUrl: null,
    githubUrl: "https://github.com/the0ninjas/driverdrowsiness",
    featured: false,
  },
  {
    title: "Cattle Weight Estimation System",
    description:
      "Real-time cattle weight estimation from multi-view 3D cameras built for Meat & Livestock Australia, achieving over 90% accuracy. Includes deep learning models for cattle segmentation and tracking, plus a data ingestion pipeline for continuous autonomous estimation.",
    tags: ["PyTorch", "YOLO", "OpenCV", "Python", "Computer Vision"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    title: "Apache DataFusion (OSS Contribution)",
    description:
      "Contributed to the open-source Apache DataFusion project by submitting pull requests that improved documentation clarity and usability.",
    tags: ["Rust", "Apache Arrow"],
    liveUrl: null,
    githubUrl: "https://github.com/apache/datafusion/pull/15612",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export default function ProjectsPage() {
  const featured = featuredProjects;
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          A selection of things I&apos;ve built — research prototypes,
          production AI systems, and open-source contributions.
        </p>
      </div>

      {/* Featured */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          Featured
        </h2>
        <div className="space-y-4">
          {featured.map((project) => (
            <div
              key={project.title}
              className="p-5 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="Live site"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          Other Projects
        </h2>
        <div className="space-y-px">
          {others.map((project) => (
            <div
              key={project.title}
              className="py-4 border-b border-[var(--border)] last:border-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-sm">{project.title}</h3>
                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                          <Github size={13} />
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                          <ArrowUpRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
