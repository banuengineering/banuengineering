export default function TrustStats() {
  const currentYear = new Date().getFullYear();
  const startYear = 2007;
  const yearsExperience = currentYear - startYear;

  const stats = [
    {
      value: `${yearsExperience}+`,
      label: "Years Experience",
      detail: `Led by ${yearsExperience} years of metal fabrication and engineering industry experience.`
    },
    {
      value: "2015",
      label: "Established Year",
      detail: "Fabricating and installing structures built to last for residential & commercial sites."
    },
    {
      value: "IBR",
      label: "Certified Welding",
      detail: "Directly led by an NTD-IBR qualified welder for industrial-grade durability."
    },
    {
      value: "10+",
      label: "Cities Served",
      detail: "Providing custom steel, glass, and ACP facade installations across Tamil Nadu."
    }
  ];

  return (
    <section className="trust-stats-section arch-border-bottom">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card arch-border-right">
              <div className="stat-value-row">
                <span className="stat-value">{stat.value}</span>
                <div className="bracket-accent"></div>
              </div>
              <div className="stat-text">
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
