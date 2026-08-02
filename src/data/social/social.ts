import { ROUTES } from "@/lib/routes"
import { SocialLinks } from "@/types/social/social"

export const socialLinks: SocialLinks[] = [
  { id: "github", name: "GitHub", username: "GatoArtStudio", url: ROUTES.OTHERS.GITHUB.URL },
  { id: "linkedin", name: "LinkedIn", username: "Hervis Cortes", url: ROUTES.OTHERS.LINKEDIN.URL },
  { id: "twitter", name: "Twitter", username: "@GatoArtStudio", url: ROUTES.OTHERS.TWITTER.URL },
  { id: "instagram", name: "Instagram", username: "@GatoArtStudio", url: ROUTES.OTHERS.INSTAGRAM.URL },
  { id: "facebook", name: "Facebook", username: "GatoArtStudio", url: ROUTES.OTHERS.FACEBOOK.URL },
  { id: "youtube", name: "YouTube", username: "GatoArtStudio", url: ROUTES.OTHERS.YOUTUBE.URL },
  { id: "twitch", name: "Twitch", username: "GatoArtStudio", url: ROUTES.OTHERS.TWITCH.URL },
  { id: "whatsapp", name: "WhatsApp", username: "@GatoArtStudio", url: ROUTES.OTHERS.WHATSAPP.URL },
  { id: "discord", name: "Discord", username: "GatoAS", url: ROUTES.OTHERS.DISCORD.URL },
  { id: "tiktok", name: "TikTok", username: "@GatoArtStudio", url: ROUTES.OTHERS.TIKTOK.URL },
  { id: "patreon", name: "Patreon", username: "GatoArtStudio", url: ROUTES.OTHERS.PATREON.URL },
]