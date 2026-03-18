import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience — Stanley Lam",
};

const experiences = [
  {
    company: "UTS Australian Artificial Intelligence Institute",
    companyUrl: "https://www.uts.edu.au/research/centres/australian-artificial-intelligence-institute",
    role: "Research Engineer",
    period: "Sep 2025 – Present",
    location: "Sydney, AU",
    description:
      "Conducting applied AI research spanning brain-computer interfaces, augmentative communication, and neural signal processing.",
    // highlights: [
    //   "Architected and deployed a Brain-Computer Interface (BCI) prototype that translates raw EEG telemetry into device control commands via a low-latency real-time processing pipeline (MNE-Python, Lab Streaming Layer, Rust, SciPy).",
    //   "Fine-tuned an LLM to power Augmented and Alternative Communication (AAC) systems, improving communication rate for users with speech impairments (Hugging Face, Transformers, PyTorch).",
    //   "Engineered a novel denoising framework using Diffusion Models and Reinforcement Learning to reconstruct high-fidelity neural signals from noisy EEG data, significantly improving downstream classification accuracy (HPC, Linux, PyTorch, NumPy, Scikit-learn).",
    // ],
    tags: ["PyTorch", "Rust", "MNE-Python", "Transformers", "Diffusion Models", "Linux", "HPC"],
    current: true,
  },
  {
    company: "Precise Value Pty Ltd",
    companyUrl: "https://www.precisevalue.com.au/",
    role: "AI Engineer (Contractor)",
    period: "Aug 2025 – Present",
    location: "Sydney, AU (Remote)",
    description:
      "Leading the full project lifecycle for an AI-powered marketing report automation system, from client requirements through to production deployment.",
    // highlights: [
    //   "Led ongoing project lifecycle — translating high-level client requests into technical specifications and designing system architecture for automated marketing report generation.",
    //   "Developed and deployed a production Agentic RAG with a local LLM on AWS, ensuring report accuracy and driving a 20% productivity gain for analysts (LangGraph, Ollama, DeepEval, AWS EC2, Lambda, VPC).",
    //   "Implemented scalable vector and graph databases to power the RAG pipeline, enabling fast and precise semantic search across a large corpus of unstructured data (PostgreSQL, Neo4j).",
    // ],
    tags: ["LangGraph", "Ollama", "AWS EC2", "AWS Lambda", "PostgreSQL", "Neo4j", "DeepEval"],
    current: true,
  },
  {
    company: "UTS Multimedia Data Analytics Lab",
    companyUrl: "https://techlab.uts.edu.au/lab/multimedia-data-analytics/",
    role: "Research Assistant",
    period: "Feb 2025 – Jun 2025",
    location: "Sydney, AU",
    description:
      "Developed a real-time cattle weight estimation system from multi-view 3D cameras for Meat & Livestock Australia, achieving over 90% accuracy.",
    // highlights: [
    //   "Developed core components for real-time cattle weight estimation from multi-view 3D cameras, achieving over 90% accuracy (PyTorch, OpenCV, deep learning, computer vision).",
    //   "Designed, trained, and optimised a deep learning model for accurate cattle segmentation and tracking across multiple camera views (YOLO).",
    //   "Built a robust data ingestion and processing pipeline for real-time image streams enabling continuous autonomous weight estimation (Python, OpenCV).",
    //   "Conducted performance validation and statistical analysis against physical measurements to ensure model reliability (NumPy, SciPy).",
    // ],
    tags: ["PyTorch", "YOLO", "OpenCV", "Python", "NumPy", "SciPy", "Computer Vision"],
    current: false,
  },
  {
    company: "Skillry",
    companyUrl: "https://www.linkedin.com/company/skillry/",
    role: "Software Engineer Intern",
    period: "May 2024 – Nov 2024",
    location: "Remote",
    description:
      "Built and shipped user-facing features for a mobile app start-up within an Agile team of five, working across the full stack on a serverless AWS architecture.",
    // highlights: [
    //   "Implemented and deployed 3+ user-facing features for the mobile app, enhancing service accessibility and user engagement (React Native, Redux, AWS DynamoDB, Amazon Cognito).",
    //   "Developed a GraphQL API to power core features and enable efficient data fetching (AWS AppSync, Python).",
    //   "Managed backend infrastructure for new features on a serverless architecture (AWS Lambda, DynamoDB, Amplify).",
    //   "Collaborated in a team of five within an Agile environment with CI/CD pipelines (Jira, Git/GitHub).",
    // ],
    tags: ["React Native", "Redux", "AWS Lambda", "DynamoDB", "AppSync", "Python", "GraphQL"],
    current: false,
  },
  {
    company: "St. Andrew's College, University of Sydney",
    companyUrl: "https://www.standrewscollege.edu.au/",
    role: "Senior Academic Tutor",
    period: "Oct 2023 – Dec 2023",
    location: "Sydney, AU",
    description:
      "Designed and delivered tailored tutorial content to improve Python programming skills for students.",
    // highlights: [
    //   "Designed and delivered tailored tutorial content resulting in over 20% increase in student assignment scores.",
    // ],
    tags: ["Python", "Teaching"],
    current: false,
  },
  {
    company: "UTS Faculty of Engineering and IT",
    companyUrl: "https://www.uts.edu.au/faculty-engineering-and-information-technology",
    role: "International Student Ambassador",
    period: "Jul 2023 – Dec 2023",
    location: "Sydney, AU",
    description:
      "Collaborated with ambassadors from diverse cultural backgrounds to design and execute events enhancing social connections for international students.",
    // highlights: [
    //   "Designed and executed over 10 events enhancing social connections for 100+ international students, increasing student satisfaction with their study experience.",
    //   "Facilitated and moderated panel discussions at career events, engaging with guest speakers and students to create a dynamic informative forum.",
    // ],
    tags: ["Event Management", "Community"],
    current: false,
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          A summary of where I&apos;ve worked and what I&apos;ve built.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)] ml-1" />
        {experiences.map((exp) => (
          <div key={exp.company + exp.role} className="pl-8 relative">
            <div
              className={`absolute left-0 top-1 w-2.5 h-2.5 rounded-full border-2 ${
                exp.current
                  ? "bg-[var(--foreground)] border-[var(--foreground)]"
                  : "bg-[var(--background)] border-[var(--muted)]"
              }`}
            />
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">
                      {exp.companyUrl ? (
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-2"
                        >
                          {exp.company}
                        </Link>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    {exp.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--muted)]">{exp.role}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-[var(--muted)]">{exp.period}</p>
                  <p className="text-xs text-[var(--muted)]">{exp.location}</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {exp.description}
              </p>
              {/* <ul className="space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-[var(--muted)] flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[var(--muted)] block" />
                    {h}
                  </li>
                ))}
              </ul> */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
