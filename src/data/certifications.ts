export interface Certification {
  title: string;
  issuer: string;
  period: string;
}

export const certifications: Certification[] = [
  { title: "Foundations: Data, Data, Everywhere", issuer: "Coursera", period: "Jan 2021" },
  { title: "Cloud Computing", issuer: "Coursera", period: "Nov 2024" },
  { title: "Containers w/ Docker, Kubernetes and OpenShift", issuer: "Coursera", period: "Nov 2024" },
  { title: "Learning Python", issuer: "LinkedIn Learning", period: "Sep 2021" },
  { title: "SQL", issuer: "LinkedIn Learning", period: "Jan 2021" },
  { title: "30 Days of Google Cloud — Data Science & ML", issuer: "Developer Student Clubs, TCET", period: "Nov 2021" },
];
