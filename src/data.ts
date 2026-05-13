import {
  Compass,
  FolderKanban,
  Hourglass,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: typeof Sparkles;
}

export interface SupportQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface AppProfileData {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  logoUrl: string;
  heroImage: string;
  screenshots: string[];
  features: Feature[];
  accent: string;
  category: string;
  platforms: string[];
  supportEmail: string;
  supportResponseTime: string;
  supportIntro: string;
  supportFaq: SupportQuestion[];
  appStoreUrl: string;
  storeLabel: string;
  privacyPolicy: string;
  termsOfUse: string;
}

const echolessLogoUrl = new URL(
  "../assets/app-images/logo pro.jpeg",
  import.meta.url,
).href;
const echolessScreen1Url = new URL(
  "../assets/app-images/echoless-screen-1.png",
  import.meta.url,
).href;
const echolessScreen2Url = new URL(
  "../assets/app-images/echoless-screen-2.png",
  import.meta.url,
).href;
const echolessScreen3Url = new URL(
  "../assets/app-images/echoless-screen-3.png",
  import.meta.url,
).href;
const echolessScreen4Url = new URL(
  "../assets/app-images/echoless-screen-4.png",
  import.meta.url,
).href;

export const BRAND = {
  name: "Nexa TechWave",
  domain: "nexa-tw.com",
  email: "info@nexa-tw.com",
  supportEmail: "support@nexa-tw.com",
  tagline: "Thoughtful mobile products for everyday routines.",
  description:
    "Nexa TechWave publishes focused mobile apps designed to feel calm, clear, and genuinely useful.",
};

export const STUDIO_VALUES = [
  {
    title: "Focused products",
    description:
      "Every app has a narrow, intentional purpose instead of trying to be everything at once.",
  },
  {
    title: "Simple support",
    description:
      "Users can always find a direct support contact, policy pages, and product-specific help.",
  },
  {
    title: "Privacy-aware by default",
    description:
      "We aim for respectful data practices, readable policies, and clear expectations inside every product.",
  },
];

export const APPS_DATA: AppProfileData[] = [
  {
    id: "echoless",
    name: "Echoless",
    tagline: "Cut the noise. Keep the signal.",
    shortDescription:
      "A calm system for sorting distractions, protecting attention, and focusing on what matters.",
    description:
      "Modern life is full of noise: endless notifications, mental clutter, overthinking, and distractions pulling you in every direction. Echoless helps you step back, capture what is competing for your attention, and organize it with clarity so you can focus on what actually matters. With a simple tier-based system, visual distribution insights, and a clean distraction-free design, the app turns mental chaos into intentional action for founders, students, professionals, and anyone tired of being pushed to do more instead of doing better.",
    logoUrl: echolessLogoUrl,
    heroImage: echolessScreen4Url,
    screenshots: [
      echolessScreen1Url,
      echolessScreen2Url,
      echolessScreen3Url,
      echolessScreen4Url,
    ],
    accent: "from-slate-800 via-indigo-700 to-cyan-500",
    category: "Publishing Soon",
    platforms: ["iPhone"],
    supportEmail: "support@nexa-tw.com",
    supportResponseTime: "Support replies usually arrive within 1-2 business days",
    supportIntro:
      "Echoless is built for people who want less overwhelm, clearer priorities, and a more intentional way to manage attention.",
    supportFaq: [
      {
        id: "ec-faq-1",
        question: "What does Echoless help me do?",
        answer:
          "Echoless helps you capture tasks, thoughts, and distractions in one place, then sort them so you can focus on what matters instead of reacting to everything at once.",
      },
      {
        id: "ec-faq-2",
        question: "How does the A / B / C tier system work?",
        answer:
          "Tier A is for essential priorities that deserve your full focus, Tier B is for meaningful but limited commitments, and Tier C is for low-value noise or distractions you want to reduce or remove.",
      },
      {
        id: "ec-faq-3",
        question: "Who is Echoless built for?",
        answer:
          "It is designed for people overwhelmed by distractions, overthinkers who want more structure, and founders, students, and professionals managing mental load.",
      },
    ],
    appStoreUrl: "",
    storeLabel: "Publishing Soon",
    features: [
      {
        id: "ec-feature-1",
        title: "Noise Identification",
        description:
          "Quickly capture thoughts, tasks, distractions, and mental clutter so nothing stays vague in your head.",
        icon: Sparkles,
      },
      {
        id: "ec-feature-2",
        title: "Tier-Based System (A / B / C)",
        description:
          "Sort each item into essential priorities, secondary commitments, or low-value noise to create an intentional structure.",
        icon: ShieldCheck,
      },
      {
        id: "ec-feature-3",
        title: "Clarity Dashboard",
        description:
          "See how your time and attention are distributed so you can spot what is taking over your focus and adjust.",
        icon: TimerReset,
      },
    ],
    privacyPolicy: `
# Privacy Policy for Echoless

**Publisher:** Nexa TechWave  
**Last Updated:** May 12, 2026

Echoless is designed to help users reflect, organize priorities, and protect their attention. This privacy policy explains the current privacy expectations for the app and the support experience around it.

## Information We Collect

We intend to collect only the information reasonably needed to operate the app, maintain access, and respond to support requests.

## How Information Is Used

We use collected information to:

- provide the app's intended functionality
- maintain account or purchase access if applicable
- improve stability and reliability
- respond to support requests

## Launch Status

Because Echoless has not launched yet, some implementation details may change. This policy will be refined when the public release configuration is finalized.

## Data Requests

For privacy questions or data-related requests, contact ${BRAND.supportEmail}.
    `,
    termsOfUse: `
# Terms of Use for Echoless

**Publisher:** Nexa TechWave  
**Last Updated:** May 12, 2026

These terms describe the intended use of Echoless and this support website.

## Use of the App

You agree not to misuse the app, interfere with its normal operation, or attempt unauthorized access to related services.

## Availability

Echoless may be changed, delayed, updated, or temporarily unavailable while launch preparations are completed.

## Purchases

If paid features or subscriptions are introduced, billing and cancellation will be handled through the relevant app marketplace.

## Contact

Questions about these terms can be sent to ${BRAND.email}.
    `,
  },
  {
    id: "coming-soon",
    name: "Coming Soon",
    tagline: "Another Nexa TechWave app is already on the way.",
    shortDescription:
      "A placeholder page for the next product in the lineup.",
    description:
      "This listing holds the space for a second app that is not ready to be published yet. We can turn it into the real product page as soon as you give me the app name, text, and images.",
    logoUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=200&fit=crop&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&h=1440&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=720&h=1440&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=720&h=1440&fit=crop&q=80",
    ],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    category: "Coming Soon",
    platforms: ["iPhone"],
    supportEmail: "support@nexa-tw.com",
    supportResponseTime: "Usually within 2 business days",
    supportIntro:
      "This placeholder page is here so the site can show the upcoming second app before its final name, assets, and store details are ready.",
    supportFaq: [
      {
        id: "cs-faq-1",
        question: "Why is this app listed as Coming Soon?",
        answer:
          "The product is not ready for public release yet, but we want the publisher site structure in place early.",
      },
      {
        id: "cs-faq-2",
        question: "Can I download this app now?",
        answer:
          "Not yet. The download button stays disabled until the release is ready.",
      },
      {
        id: "cs-faq-3",
        question: "What do you need to turn this into the real app page?",
        answer:
          "A final app name, short and long descriptions, feature list, support FAQ, privacy text, terms text, and any images you want shown on the website.",
      },
    ],
    appStoreUrl: "",
    storeLabel: "Coming Soon",
    features: [
      {
        id: "cs-feature-1",
        title: "Reserved space",
        description:
          "The site already has room for the next app instead of pretending only one product exists.",
        icon: Compass,
      },
      {
        id: "cs-feature-2",
        title: "Flexible placeholder",
        description:
          "This card can be renamed and rewritten fast once you send the final content.",
        icon: Hourglass,
      },
      {
        id: "cs-feature-3",
        title: "Launch-ready structure",
        description:
          "Support, privacy, and terms routes are already available for the future app.",
        icon: FolderKanban,
      },
    ],
    privacyPolicy: `
# Privacy Policy for Coming Soon

**Publisher:** Nexa TechWave  
**Last Updated:** May 12, 2026

This placeholder policy exists for a future Nexa TechWave app that has not yet been publicly released.

## Information We Collect

The final data practices for this app have not yet been published.

## Future Updates

When the product is ready, this page will be updated with the actual privacy details and operational policies.

## Contact

For privacy-related questions, contact ${BRAND.supportEmail}.
    `,
    termsOfUse: `
# Terms of Use for Coming Soon

**Publisher:** Nexa TechWave  
**Last Updated:** May 12, 2026

These placeholder terms will be replaced with the final app-specific terms before launch.

## Availability

This product is not currently available for public download.

## Changes

We may rename, redesign, delay, or replace this product during development.

## Contact

Questions about these terms can be sent to ${BRAND.email}.
    `,
  },
];
