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

**Last Updated:** May 2026

Welcome to Echoless ("we," "our," or "us"). Your privacy matters to us, and we are committed to being transparent about the information we collect and how it is used.

This Privacy Policy explains how Echoless collects, uses, and protects information when you use our mobile application and related services.

## 1. Information We Collect

Echoless is designed to collect only the minimum amount of information necessary for the app to function.

We may collect the following categories of data:

### a) User Content

Audio recordings or audio-related content you provide within the app.

**Purpose:**

- To provide core app functionality.

### b) Identifiers

- Device ID
- User ID generated internally by the app

**Purpose:**

- To maintain app functionality
- To improve stability and prevent abuse
- To support app-related operations

### c) Financial Information

Purchase-related information handled through Apple's in-app purchase system.

**Purpose:**

- To process subscriptions or purchases
- To restore purchases

**Important:**
We do not directly collect or store your payment card details. Payments are securely processed by Apple.

### d) Environment Scanning / Surroundings Data

Limited device environment-related information necessary for app features.

**Purpose:**

- To support app functionality and technical operations.

## 2. How We Use Information

We use collected information only for:

- Providing and maintaining app functionality
- Improving app performance and reliability
- Supporting purchases and subscriptions
- Preventing misuse or abuse of the service
- Complying with legal obligations

We do not sell your personal information.

## 3. Data Sharing

We do not share your personal information with third parties except:

- When required by law
- To comply with legal processes
- Through Apple services necessary for payments and app distribution
- With trusted service providers that help operate the app

## 4. Data Retention

We retain information only for as long as necessary to:

- Provide the service
- Fulfill legal obligations
- Resolve disputes
- Enforce agreements

Some information may be deleted automatically when no longer needed.

## 5. Security

We take reasonable technical and organizational measures to protect your information from:

- Unauthorized access
- Loss
- Misuse
- Disclosure

However, no system can guarantee absolute security.

## 6. Children's Privacy

Echoless is not intended for children under 13 years old.

We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will delete it promptly.

## 7. Your Rights

Depending on your location, you may have rights to:

- Access your information
- Request deletion of your data
- Object to certain processing
- Request correction of inaccurate information

You may contact us regarding privacy-related requests.

## 8. Third-Party Services

The app may rely on third-party services such as:

- Apple App Store
- Apple In-App Purchases
- Hosting or analytics providers

These services may collect information according to their own privacy policies.

## 9. International Users

Your information may be processed in countries other than your own. By using the app, you consent to such processing where permitted by law.

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. Changes become effective once posted.

Continued use of the app after updates means you accept the revised policy.

## 11. Contact Us

If you have questions about this Privacy Policy, contact us at:

${BRAND.email}
    `,
    termsOfUse: `
# Terms of Service for Echoless

**Last Updated:** May 2026

These Terms of Service ("Terms") govern your access to and use of the Echoless mobile application and related services ("Service").

By using Echoless, you agree to these Terms.

## 1. Eligibility

You must be at least 13 years old to use the Service.

By using the app, you confirm that you meet this requirement.

## 2. Use of the Service

You agree to use Echoless only for lawful purposes.

You may not:

- Violate any laws or regulations
- Attempt to interfere with app functionality
- Reverse engineer or exploit the app
- Upload harmful, abusive, or illegal content
- Attempt unauthorized access to systems or users

We reserve the right to suspend or terminate access for misuse.

## 3. User Content

You retain ownership of content you provide through the app.

By using the Service, you grant us a limited license to process and store content solely for operating and improving the Service.

You are responsible for ensuring you have rights to any content you upload or submit.

## 4. Purchases and Subscriptions

Some features may require payment or subscription.

Payments are processed through Apple's App Store and are subject to Apple's terms and conditions.

We do not directly handle payment card information.

Subscriptions renew automatically unless canceled through your Apple account settings.

## 5. Intellectual Property

All app content, branding, logos, software, and related materials are owned by Echoless or its licensors and are protected by intellectual property laws.

You may not copy, distribute, or reproduce any part of the Service without permission.

## 6. Disclaimer

The Service is provided "as is" and "as available."

We do not guarantee:

- Continuous availability
- Error-free operation
- Complete accuracy or reliability

Use the Service at your own risk.

## 7. Limitation of Liability

To the maximum extent permitted by law, Echoless shall not be liable for:

- Indirect damages
- Loss of data
- Loss of profits
- Service interruptions
- Device-related issues arising from app usage

## 8. Termination

We may suspend or terminate access to the Service at any time if:

- These Terms are violated
- Required by law
- Necessary to protect the platform or users

## 9. Changes to the Terms

We may update these Terms periodically.

Continued use of the Service after changes means you accept the updated Terms.

## 10. Governing Law

These Terms shall be governed by applicable laws and regulations in the jurisdiction where the Service operator is established, unless otherwise required by law.

## 11. Contact

For questions regarding these Terms, contact:

${BRAND.email}
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
