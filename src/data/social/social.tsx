import {ROUTES} from "@/lib/routes";
import {Github, Instagram, Linkedin, Twitch, Twitter, Youtube} from "lucide-react"
import {Icon} from "@iconify/react"
import {SocialLinks} from "@/types/social/social";


export const socialLinks: SocialLinks[] =  [
    {
        id: "github",
        name: "GitHub",
        username: "GatoArtStudio",
        url: ROUTES.OTHERS.GITHUB.URL,
        icon: <Github className="h-6 w-6"/>,
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        username: "Hervis Cortes",
        url: ROUTES.OTHERS.LINKEDIN.URL,
        icon: <Linkedin className="h-6 w-6"/>,
    },
    {
        id: "twitter",
        name: "Twitter",
        username: "@GatoArtStudio",
        url: ROUTES.OTHERS.TWITTER.URL,
        icon: <Twitter className="h-6 w-6"/>,
    },
    {
        id: "instagram",
        name: "Instagram",
        username: "@GatoArtStudio",
        url: ROUTES.OTHERS.INSTAGRAM.URL,
        icon: <Instagram className="h-6 w-6"/>,
    },
    {
        id: "facebook",
        name: "Facebook",
        username: "GatoArtStudio",
        url: ROUTES.OTHERS.FACEBOOK.URL,
        icon: <Icon icon="lucide:facebook" className="h-6 w-6"/>,
    },
    {
        id: "youtube",
        name: "YouTube",
        username: "GatoArtStudio",
        url: ROUTES.OTHERS.YOUTUBE.URL,
        icon: <Youtube className="h-6 w-6"/>,
    },
    {
        id: "twitch",
        name: "Twitch",
        username: "GatoArtStudio",
        url: ROUTES.OTHERS.TWITCH.URL,
        icon: <Twitch className="h-6 w-6"/>,
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        username: "@GatoArtStudio",
        url: ROUTES.OTHERS.WHATSAPP.URL,
        icon: <Icon icon="ic:baseline-whatsapp" className="h-6 w-6"/>,
    },
    {
        id: "discord",
        name: "Discord",
        username: "GatoAS",
        url: ROUTES.OTHERS.DISCORD.URL,
        icon: <Icon icon="iconoir:discord" className="h-6 w-6"/>,
    },
    {
        id: "tiktok",
        name: "TikTok",
        username: "@GatoArtStudio",
        url: ROUTES.OTHERS.TIKTOK.URL,
        icon: <Icon icon="simple-icons:tiktok" className="h-6 w-6"/>,
    },
    {
        id: "patreon",
        name: "Patreon",
        username: "GatoArtStudio",
        url: ROUTES.OTHERS.PATREON.URL,
        icon: <Icon icon="simple-icons:patreon" className="h-6 w-6"/>,
    },
]