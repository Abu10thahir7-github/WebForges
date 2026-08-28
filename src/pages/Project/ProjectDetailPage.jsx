import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import { getProjectBySlug, getAdjacentProject } from '../../data/projectDetailsData';

import ProjectHero from './sections/ProjectHero';
import ProjectOverview from './sections/ProjectOverview';
import NarrativeSection from './sections/NarrativeSection';
import KeyFeatures from './sections/KeyFeatures';
import TechStack from './sections/TechStack';
import Screenshots from './sections/Screenshots';
import Outcome from './sections/Outcome';
import NextProject from './sections/NextProject';
import ProjectCTA from './sections/ProjectCTA';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-gray-900">
        <h1 className="text-3xl font-bold sm:text-4xl">Project not found</h1>
        <p className="max-w-md text-gray-500">
          We couldn't find this project. Please go back and try again.
        </p>
        <Link
          to="/projects"
          className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const nextProject = getAdjacentProject(slug);

  return (
    <div className="bg-white">
      <Helmet>
        <title>{project.title} — Case Study | WebForges</title>
        <meta name="description" content={project.tagline} />
        <link rel="canonical" href={`https://webforges.site/projects/${project.slug}`} />
      </Helmet>

      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      <NarrativeSection
        eyebrow="01"
        heading="The Challenge"
        body={project.challenge}
      />
      <NarrativeSection
        eyebrow="02"
        heading="Our Approach"
        body={project.approach}
        reversed
      />
      <NarrativeSection
        eyebrow="03"
        heading="Design"
        body={project.design}
      />
      <NarrativeSection
        eyebrow="04"
        heading="Development"
        body={project.development}
        reversed
      />

      <KeyFeatures features={project.keyFeatures} />
      <TechStack stack={project.techStack} />
      {project.screenshots.length > 0 && <Screenshots screenshots={project.screenshots} />}

      <Outcome outcome={project.outcome} />
      <NextProject project={nextProject} />
      <ProjectCTA />
    </div>
  );
}