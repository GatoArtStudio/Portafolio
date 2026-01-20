"use client"

import {useRef} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {
    Bot,
    Boxes,
    BrainCircuit,
    Code,
    Cpu,
    CuboidIcon as Cube,
    Database,
    DockIcon as Docker,
    Gamepad2,
    Server,
    Users,
    LayoutPanelTop,
} from "lucide-react"
import {Icon} from "@iconify/react"
import {useTranslations} from "next-intl";

export default function Skills() {
    const t = useTranslations('MainSkills');
    const skillsRef = useRef<HTMLElement>(null)

    return (
        <section id="skills" ref={skillsRef} className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 animate-on-scroll">{t('title')}</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Desarrollo y programación */}
                    <Card className="border-2 border-muted hover:border-primary transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-primary">
                                    <Code className="h-10 w-10"/>
                                </div>
                                <h3 className="text-2xl font-bold">{t('cards.skill1.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <LayoutPanelTop className="h-6 w-6"/>
                                    </div>
                                    <span
                                        className="text-muted-foreground">{t('cards.skill1.features.feature1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Cpu className="h-6 w-6"/>
                                    </div>
                                    <span
                                        className="text-muted-foreground">{t('cards.skill1.features.feature2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Gamepad2 className="h-6 w-6"/>
                                    </div>
                                    <span
                                        className="text-muted-foreground">{t('cards.skill1.features.feature3')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Bot className="h-6 w-6"/>
                                    </div>
                                    <span
                                        className="text-muted-foreground">{t('cards.skill1.features.feature4')}</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Diseño y modelado 3D */}
                    <Card className="border-2 border-muted hover:border-primary transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-primary">
                                    <Cube className="h-10 w-10"/>
                                </div>
                                <h3 className="text-2xl font-bold">{t('cards.skill2.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Icon icon="simple-icons:blender" className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill2.features.feature1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Boxes className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill2.features.feature2')}</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Administración de servidores y DevOps */}
                    <Card className="border-2 border-muted hover:border-primary transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-primary">
                                    <Server className="h-10 w-10"/>
                                </div>
                                <h3 className="text-2xl font-bold">{t('cards.skill3.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Database className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill3.features.feature1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Docker className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill3.features.feature2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Icon icon="lucide:git-merge" className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill3.features.feature3')}</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Habilidades blandas */}
                    <Card className="border-2 border-muted hover:border-primary transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-primary">
                                    <Users className="h-10 w-10"/>
                                </div>
                                <h3 className="text-2xl font-bold">{t('cards.skill4.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <Icon icon="lucide:users-2" className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill4.features.feature1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="text-primary mt-1">
                                        <BrainCircuit className="h-6 w-6"/>
                                    </div>
                                    <span className="text-muted-foreground">{t('cards.skill4.features.feature2')}</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
