import { useState } from 'react';
import { projects } from '../data/projects';

const ProjectMasonry = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-dark-text mb-4">
                        Nuestros Proyectos
                    </h2>
                    <p className="text-lg text-medium-text max-w-2xl mx-auto">
                        Explora nuestro portafolio de proyectos de construcción y mantenimiento completados
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer ${project.orientation === 'vertical' ? 'row-span-2' : 'row-span-1'
                                }`}
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View ${project.title} project details`}
                        >
                            {/* Image */}
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-dark-text mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-steel-blue font-semibold">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal for selected project (optional enhancement) */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
                    onClick={() => setSelectedProject(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-beige rounded-lg max-w-4xl w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedProject.imageUrl}
                            alt={selectedProject.title}
                            className="w-full h-96 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold text-dark-text mb-2">
                            {selectedProject.title}
                        </h3>
                        <p className="text-steel-blue font-semibold mb-4">
                            {selectedProject.category}
                        </p>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="bg-steel-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectMasonry;
