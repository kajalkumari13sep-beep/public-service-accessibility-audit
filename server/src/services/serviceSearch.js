const services = [
  {
    id: "svc-001",
    title: "Education Services",
    category: "Education",
    description: "Find public education-related services.",
    url: "https://www.india.gov.in/"
  },
  {
    id: "svc-002",
    title: "Health Services",
    category: "Health",
    description: "Find public health-related services.",
    url: "https://www.india.gov.in/"
  },
  {
    id: "svc-003",
    title: "Citizen Services",
    category: "Citizen",
    description: "Find common citizen services.",
    url: "https://www.india.gov.in/"
  }
];

export function findServices(query) {
  if (!query) return services;
  const q = query.toLowerCase();
  return services.filter((service) =>
    `${service.title} ${service.category} ${service.description}`
      .toLowerCase()
      .includes(q)
  );
}
