import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECT_CARDS, PROJECTS_PAGE_CONTENT } from "@/lib/projects-content";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 md:pt-24 bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container-narrow text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-2">
              {PROJECTS_PAGE_CONTENT.hero.headline}
            </h1>
            <p className="font-display text-xl md:text-2xl text-gold font-semibold mb-6">
              {PROJECTS_PAGE_CONTENT.hero.subheadline}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {PROJECTS_PAGE_CONTENT.intro}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {PROJECT_CARDS.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-12 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
              {PROJECTS_PAGE_CONTENT.disclaimer}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
