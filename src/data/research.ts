export interface ResearchEntry {
  index: string;
  title: string;
  kind: "Published paper" | "Applied research" | "Applied engineering";
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  citation?: string;
}

export const research: ResearchEntry[] = [
  {
    index: "01",
    title: "Node Degree Classification using Graph Modelling",
    kind: "Published paper",
    problem:
      "Predicting the topic of a forthcoming scientific publication from its position in a citation graph.",
    approach:
      "Evaluated and compared Graph Convolutional Network, Graph Attention Network, and GraphSAGE models on benchmark datasets, then tuned them specifically for higher-degree nodes and used t-SNE / PCA to inspect model behavior and node relationships.",
    result:
      "Reached 77.10% precision in topic prediction, with a 9–25% accuracy improvement on higher-degree nodes after tuning. Published at IEEE ICACTA 2023.",
    tech: ["Python", "Google Colab", "NumPy", "Pandas", "Matplotlib", "Keras"],
    citation:
      "IEEE International Conference on Advanced Computing Technologies and Applications (ICACTA), 2023 · DOI: 10.1109/ICACTA58201.2023.10393394",
  },
  {
    index: "02",
    title: "Community Detection in GitHub via Centrality Network Measures",
    kind: "Applied research",
    problem:
      "Identifying influential users and communities inside GitHub's collaboration graph from public repository data.",
    approach:
      "Applied PageRank, Degree, Betweenness, and Closeness centrality measures across star/fork/watcher relationships collected via the GitHub API, then ran the Girvan–Newman algorithm to detect communities.",
    result:
      "Ranked the top 10% most influential repositories and identified significant user clusters with over 95% accuracy.",
    tech: ["Python", "NetworkX", "Pandas", "Matplotlib", "GitHub API"],
  },
  {
    index: "03",
    title: "Kizopedia — Kids' Math Quiz Application",
    kind: "Published paper",
    problem:
      "Making math practice engaging enough for kids to stick with, on a platform with no back-end team to maintain it.",
    approach:
      "Built a native Android e-learning app with test modules, MCQs, scheduled content, and a timed rewards system, backed by Firebase for content delivery and progress tracking.",
    result:
      "Shipped an app used for structured math practice with full profile and performance tracking; the work was published in IJSREM (Vol. 05, Issue 05, 2021).",
    tech: ["Android Studio", "Java", "XML", "SQL", "Firebase"],
    citation:
      "International Journal of Scientific Research in Engineering and Management (IJSREM), Vol. 05, Issue 05, 2021 · ISSN: 2582-3930",
  },
];
