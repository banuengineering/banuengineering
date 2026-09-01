import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  category: "Stainless Steel" | "Toughened Glass" | "ACP Elevation" | "Roofing & Fabrication" | "Modular Kitchen & Interior";
  description: string;
  location: string;
  materials: string[];
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="project-card arch-border animate-fade-in">
      <div className="project-image-wrapper">
        <Image 
          src={project.image} 
          alt={`${project.title} - ${project.category} work by Banu Engineering`}
          width={600} 
          height={400}
          className="project-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="project-category-badge">{project.category}</div>
      </div>
      
      <div className="project-info">
        <div className="project-meta-top">
          <span className="project-location">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{project.location}, TN</span>
          </span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-materials-row">
          {project.materials.map((mat, i) => (
            <span key={i} className="material-tag">{mat}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
