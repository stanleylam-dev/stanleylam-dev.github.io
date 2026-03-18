import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — Stanley Lam",
};

const toolCategories = [
  {
    category: "Languages",
    tools: [
      { name: "Python", level: "Expert" },
      { name: "TypeScript / JavaScript", level: "Intermediate" },
      { name: "Rust", level: "Intermediate" },
      { name: "Java / C#", level: "Intermediate" },
    ],
  },
  {
    category: "AI / ML / BCI",
    tools: [
      { name: "EEG Signal Processing and Analysis", level: "Expert" },
      { name: "PyTorch", level: "Expert" },
      { name: "TensorFlow", level: "Expert" },
    ],
  },
  {
    category: "AI Agent Development",
    tools: [
      { name: "LangGraph", level: "Expert" },
      { name: "Ollama", level: "Advanced" },
      { name: "Google ADK", level: "Intermediate" },
      { name: "Qdrant", level: "Intermediate" },
      { name: "Neo4j", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    tools: [
      { name: "React", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud",
    tools: [
      { name: "AWS", level: "Intermediate" },
    ],
  },
  {
    category: "Data Engineering",
    tools: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Apache Kafka", level: "Intermediate" },
      { name: "Apache Spark", level: "Intermediate" },
      { name: "Apache Airflow", level: "Intermediate" },
      { name: "dbt", level: "Intermediate" },
      { name: "Great Expectations", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Testing",
    tools: [
      { name: "Docker", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Terraform", level: "Intermediate" },
      { name: "Jenkins", level: "Intermediate" },
      { name: "MLFlow", level: "Intermediate" },
      { name: "DVC", level: "Intermediate" },
      { name: "Pytest", level: "Intermediate" },
      { name: "DeepEval", level: "Intermediate" },
    ],
  },
  {
    category: "Daily Toolbox",
    tools: [
      { name: "Cursor", level: null },
      { name: "Claude Code", level: null },
      { name: "Git / GitHub", level: null },
      { name: "Jira", level: null },
      { name: "Linux / High-Performance Computing", level: null },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
  Advanced: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900",
  Intermediate: "text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",
};

export default function ToolsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Tools</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          The technologies, frameworks, and tools I use day-to-day — from AI
          research pipelines to AI Agent development and operations.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-10">
        {toolCategories.map(({ category, tools }) => (
          <section key={category} className="space-y-4">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {tools.map(({ name, level }) => (
                <div
                  key={name}
                  className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-sm">{name}</p>
                    {level && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${levelColors[level]}`}
                      >
                        {level}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
