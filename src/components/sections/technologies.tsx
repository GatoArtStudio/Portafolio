"use client"

import {useRef} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Icon} from "@iconify/react"
import {useTranslations} from "next-intl";
import {technologies} from "@/data/technologies-section/technologies";

export default function Technologies() {
    const t = useTranslations('MainTechnologies');
    const techRef = useRef<HTMLElement>(null)

    return (
        <section id="technologies" ref={techRef} className="py-24 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 animate-on-scroll">{t('title')}</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
                        {t('description')}
                    </p>
                </div>

                <Card className="border-2 border-muted animate-on-scroll">
                    <CardContent className="p-6">
                        <Tabs defaultValue="languages" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                                <TabsTrigger value="languages">{t('categories.category1.name')}</TabsTrigger>
                                <TabsTrigger value="scripting">{t('categories.category2.name')}</TabsTrigger>
                                <TabsTrigger value="frameworks">{t('categories.category3.name')}</TabsTrigger>
                                <TabsTrigger value="tools">{t('categories.category4.name')}</TabsTrigger>
                            </TabsList>

                            {technologies.map((techCategory) => (
                                <TabsContent key={techCategory.category} value={techCategory.category} className="mt-6">
                                    <div
                                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {techCategory.items.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover:border-primary border-2 border-transparent"
                                            >
                                                <div className="text-4xl mb-2 text-primary">
                                                    <Icon icon={tech.icon} width="48" height="48"/>
                                                </div>
                                                <span className="text-sm font-medium text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
