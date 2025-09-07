import { PROJECTSDATA } from '@/constants';
import type { Project } from '@/constants';
import ProjectDetailClient from './ProjectDetailClient';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const project: Project | undefined = PROJECTSDATA[id as keyof typeof PROJECTSDATA];

    if (!project) {
        return <div className="p-4 text-red-500">Project not found</div>;
    }

    return <ProjectDetailClient project={project} />;
}

// This will tell Next.js what [id] values to pre-render
export function generateStaticParams() {
  return Object.keys(PROJECTSDATA).map((id) => ({
    id,
  }));
}