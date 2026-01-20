"use client"

import {useRef} from "react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ExternalLink, Github, ImageOff} from "lucide-react"
import {projects} from "@/data/projects-section/projects";
import {useTranslations} from "next-intl";

export default function Projects() {
    const t = useTranslations('MainProjects');
    const projectsRef = useRef<HTMLElement>(null)

    return (
        <section id="projects" ref={projectsRef} className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 animate-on-scroll">{t('title')}</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
                        {t('description')}
                    </p>
                </div>

                <Tabs defaultValue="frontend" className="w-full animate-on-scroll">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                        <TabsTrigger value="frontend">{t('categories.category1.name')}</TabsTrigger>
                        <TabsTrigger value="backend">{t('categories.category2.name')}</TabsTrigger>
                        <TabsTrigger value="desktop">{t('categories.category3.name')}</TabsTrigger>
                        <TabsTrigger value="minecraft">{t('categories.category4.name')}</TabsTrigger>
                    </TabsList>

                    {Object.entries(projects).map(([category, categoryProjects]) => (
                        <TabsContent key={category} value={category} className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {categoryProjects.map((project, index: number) => (
                                    <Card
                                        key={project.id}
                                        className="overflow-hidden flex flex-col border-2 border-muted hover:border-primary transition-all duration-300"
                                    >
                                        <div className="relative aspect-video w-full overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image || "/placeholder.png"}
                                                    alt={t(`projects.${category}.${project.id}.title`)}
                                                    className="object-cover w-auto min-w-full transition-transform duration-500 hover:scale-105"
                                                />
                                            ) : (
                                                <div
                                                    className="w-full h-full bg-muted animate-pulse flex flex-col justify-center items-center gap-2">
                                                    <ImageOff/>
                                                    <p>
                                                        {t('imageProjectNotFound')}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader>
                                            <CardTitle>
                                                {t(`projects.${category}.${project.id}.title`)}
                                            </CardTitle>
                                            <CardDescription>
                                                {t(`projects.${category}.${project.id}.description`)}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag: string, tagIndex: number) => (
                                                    <Badge key={tagIndex} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            {project.repoUrl ? (
                                                <Button variant="outline" size="sm" asChild>
                                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="mr-2 h-4 w-4"/>
                                                        {t('buttonVariantPublicCode')}
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button variant="outline" size="sm" disabled>
                                                    <Github className="mr-2 h-4 w-4"/>
                                                    {t('buttonVariantPrivateCode')}
                                                </Button>
                                            )}
                                            {project.productionUrl ? (
                                                <Button size="sm" asChild>
                                                    <a href={project.productionUrl} target="_blank"
                                                       rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4"/>
                                                        {t('buttonVariantPublicProject')}
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button size="sm" disabled>
                                                    <ExternalLink className="mr-2 h-4 w-4"/>
                                                    {t('buttonVariantPrivateProject')}
                                                </Button>
                                            )}
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
