export type Project = {
    id: string;
    image?: string;
    tags: string[];
    productionUrl?: string;
    repoUrl?: string;
}

export type Projects = {
    frontend: Project[];
    backend: Project[];
    desktop: Project[];
    minecraft: Project[];
}