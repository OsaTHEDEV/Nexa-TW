import {
  BookOpen,
  Brain,
  Languages,
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
const telliTalesLogoUrl = new URL(
  "../assets/app-images/tellitales-logo.png",
  import.meta.url,
).href;
const telliTalesLaunchpad1Url = new URL(
  "../assets/app-images/tellitales-launchpad-01.png",
  import.meta.url,
).href;
const telliTalesLaunchpad2Url = new URL(
  "../assets/app-images/tellitales-launchpad-02.png",
  import.meta.url,
).href;
const telliTalesLaunchpad3Url = new URL(
  "../assets/app-images/tellitales-launchpad-03.png",
  import.meta.url,
).href;
const telliTalesLaunchpad4Url = new URL(
  "../assets/app-images/tellitales-launchpad-04.png",
  import.meta.url,
).href;
const telliTalesLaunchpad5Url = new URL(
  "../assets/app-images/tellitales-launchpad-05.png",
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
    id: "tellitales",
    name: "TelliTales",
    tagline: "Personalized stories, narration, and playful learning for kids.",
    shortDescription:
      "An interactive storytelling app for ages 3-10 with custom characters, narration, and learning-focused play.",
    description:
      "TelliTales helps parents turn story time into a more personal, playful, and meaningful part of the day. Built for children ages 3-10, the app lets families create personalized stories with custom characters, beautiful illustrations, and narrated audio kids can follow along with. Parents can shape each story around a child's interests, favorite themes, learning goals, and even use an optional photo to make illustrations feel more personal. Beyond story time, TelliTales includes mini-games, quizzes, achievements, daily streaks, and AI-generated progress reports so reading, memory, and thinking skills can grow through fun, repeatable experiences.",
    logoUrl: telliTalesLogoUrl,
    heroImage: telliTalesLaunchpad1Url,
    screenshots: [
      telliTalesLaunchpad1Url,
      telliTalesLaunchpad2Url,
      telliTalesLaunchpad3Url,
      telliTalesLaunchpad4Url,
      telliTalesLaunchpad5Url,
    ],
    accent: "from-sky-400 via-cyan-500 to-emerald-500",
    category: "Kids Storytelling",
    platforms: ["iPhone"],
    supportEmail: "support@nexa-tw.com",
    supportResponseTime: "Usually within 2 business days",
    supportIntro:
      "TelliTales is designed for parent-managed use, combining personalized stories, narrated reading, interactive questions, and learning-focused play in one family-friendly experience.",
    supportFaq: [
      {
        id: "tt-faq-1",
        question: "What age group is TelliTales built for?",
        answer:
          "TelliTales is built for children ages 3-10, with parent-managed tools and age-appropriate storytelling designed to keep the experience playful and kid-focused.",
      },
      {
        id: "tt-faq-2",
        question: "How are stories personalized?",
        answer:
          "Parents can shape stories around a child's interests, favorite themes, and learning goals, and can optionally use a photo to make illustrations feel even more personal.",
      },
      {
        id: "tt-faq-3",
        question: "What kinds of learning features are included?",
        answer:
          "TelliTales includes narration, comprehension questions, story choices, mini-games, quizzes, achievements, daily streaks, and AI-generated progress reports to support reading, memory, and thinking skills.",
      },
    ],
    appStoreUrl: "https://apps.apple.com/dz/app/tellitales/id6770322880",
    storeLabel: "View on the App Store",
    features: [
      {
        id: "tt-feature-1",
        title: "Personalized Story Creation",
        description:
          "Create custom stories with child-inspired characters, favorite themes, learning goals, and optional photo-based personalization.",
        icon: BookOpen,
      },
      {
        id: "tt-feature-2",
        title: "Interactive Reading Experience",
        description:
          "Children can listen to narration, follow illustrated scenes, answer comprehension questions, and make story choices that keep them engaged.",
        icon: TimerReset,
      },
      {
        id: "tt-feature-3",
        title: "Playful Learning Tools",
        description:
          "Mini-games, quizzes, achievements, streaks, multilingual support, and parent progress reports extend learning beyond story time.",
        icon: Brain,
      },
      {
        id: "tt-feature-4",
        title: "Parent Controls and Family Safety",
        description:
          "Use multiple child profiles, a PIN-secured parent area, saved story libraries, PDF exports, and reminders while keeping the experience parent-managed.",
        icon: ShieldCheck,
      },
      {
        id: "tt-feature-5",
        title: "Multi-Language Access",
        description:
          "Switch between supported languages including English, Spanish, and Arabic so story time fits more families.",
        icon: Languages,
      },
    ],
    privacyPolicy: `
# Privacy Policy for TelliTales

**Publisher:** Nexa TechWave  
**Last Updated:** May 22, 2026

## 1. Summary

TelliTales is a parent-managed application for children aged 3-10. Parents use it to generate personalized stories, illustrations, and learning activities with the help of artificial intelligence.

We combine on-device storage for local app data and offline use, secure cloud storage for parent accounts, child profiles, and saved progress, and trusted third-party AI providers for story and image generation. We do not sell personal information and we do not show ads. We share data with service providers only to operate the app.

## 2. Information We Collect

We collect the following categories of information:

Parent account data: email address, password stored only as a salted bcrypt hash, and an authentication session cookie.

Child profile data created by the parent: child's first name, age, and optional preferences such as gender of the story hero.

Optional reference image: if you choose to add a photo of your child to make the illustrated character look like them.

Content and usage data: story prompts you submit, AI-generated stories and illustrations, narration audio, game scores, achievements, daily streaks, and learning activity interactions.

Subscription data: subscription status and purchase validation data, processed via RevenueCat and the Apple App Store or Google Play. We do not store your full payment card details.

Communication data: your parent email address, used for account login and for sending optional progress reports.

## 3. How We Use Information

We use the data we collect to:

- Generate personalized stories and educational content.
- Create illustrations and narration using AI image and speech models.
- Track your child's learning progress and game performance.
- Provide subscription access and account management.
- Send optional email progress reports to parents.
- Diagnose problems and improve the reliability of the app.

## 4. AI Processing and Data Sharing

To deliver core functionality, the app sends limited information to third-party AI providers when you create a story.

Data sent to AI services may include the story prompt, the child's first name and age, the optional reference image if you provided one, and the context needed to keep characters and scenes consistent.

We currently use the following AI providers:

- **Google Gemini**: text generation, image generation, vision processing for the optional reference photo, and primary text-to-speech narration.
- **OpenAI**: used only as a fallback for text-to-speech narration when Gemini TTS is unavailable.

These providers process the data only to generate the requested output. We configure providers to avoid using your data to train their general-purpose models, where supported by their enterprise or API terms.

Reference photos, when provided, are sent to Google Gemini so it can extract a short text description of visual traits such as hair color, eye color, and clothing used to keep the illustrated character consistent across scenes. We do not use reference photos to train AI models.

## 5. Third-Party Service Providers

We rely on the following service providers to operate TelliTales:

- Google (Gemini AI services): story text, illustrations, vision, and TTS.
- OpenAI: TTS fallback only.
- RevenueCat: subscription management.
- SendGrid: delivery of optional email progress reports.
- Our PostgreSQL database hosting provider: backend storage of accounts, child profiles, and saved content.
- Apple App Store and Google Play: in-app purchase processing and platform notification infrastructure.

These providers act as data processors and only handle the data necessary to perform their service.

## 6. Data Storage

We store data in two places:

**Local device storage:** the app caches your data on the device for fast reads, offline use, and to keep the app responsive.

**Cloud storage:** for parents who create an account, we store account credentials, child profiles, generated stories, game results, progress reports, daily streaks, and achievements in a secure PostgreSQL database. This data is associated with your parent account and is accessible only after authentication.

If you use the app without creating an account in guest mode, no data leaves the device for storage purposes. Only AI generation requests are sent to our providers.

## 7. Data Retention

- Account and profile data are retained while your account is active.
- Generated stories, progress reports, and game results are retained so you can revisit them and so AI reports can build on prior history.
- AI request logs may be retained for a short period for debugging and abuse-prevention purposes.
- Parents can delete their account and all associated data directly from within the app at any time.

## 8. Data Deletion

Parents can delete their account directly from the app, with no email required:

1. Open the Parent Zone, scroll to the Account section, and tap Delete Account.
2. After confirming the action, your account is deleted immediately and permanently.

**What is deleted immediately:**

- Your account credentials, including email and password hash.
- All child profiles.
- All saved stories, illustrations, and narration.
- Game results, progress reports, daily streaks, and achievements.

**What may be retained:**

- Anonymized AI request logs may be kept for a short period for abuse-prevention and debugging.
- Some minimal records may be retained where required by law or for security purposes.

Uninstalling the app removes data stored on the device, but does not by itself delete cloud-stored account data. If you are unable to access the app, you may also request deletion by emailing ${BRAND.supportEmail}.

## 9. Children's Privacy (COPPA)

By creating a TelliTales account, you confirm that you are a parent or legal guardian of the child or children whose profiles you set up.

TelliTales is intended to be set up and operated by a parent or legal guardian for use with their children aged 3-10. We follow COPPA principles by:

- Requiring all account creation to be performed by a parent.
- Not allowing direct child account registration.
- Collecting child profile data only through a parent-controlled account.
- Using child data solely to provide app functionality, including personalized stories and progress tracking.

Parents may review, manage, or delete their child's data at any time from inside the app or by contacting us.

## 10. AI Content Safety

We apply automated filtering to story prompts and to AI-generated outputs in order to:

- Block sexual, violent, hateful, or otherwise inappropriate prompts.
- Prevent generation of unsafe or harmful content.
- Keep outputs age-appropriate for children aged 3-10.

No automated system is perfect. Parents are responsible for reviewing AI-generated stories, images, and reports before sharing them with their child.

## 11. Notifications

If you grant notification permission, TelliTales may send local notifications to remind you about reading streaks or to let you know a story is ready. Notifications are scheduled locally on the device using the operating system's notification scheduler. We do not register a push token with our servers and we do not send notifications to your device from the cloud.

## 12. Security

We use reasonable technical and organizational safeguards, including:

- Encrypted communication between the app and our servers using HTTPS / TLS.
- Salted password hashing with bcrypt for parent account credentials.
- Authenticated, session-scoped access to cloud data.
- Provider-managed encryption at rest for our database and storage.

No system is 100% secure. We work continuously to improve our protections.

## 13. Your Rights

Depending on where you live, you may have rights to:

- Access the personal information we hold about you.
- Correct inaccurate information.
- Request deletion of your account and associated data.
- Withdraw consent for optional features such as email reports.

To exercise any of these rights, email ${BRAND.supportEmail} from the address associated with your account.

## 14. California Residents (CCPA)

TelliTales does not "sell" personal information as that term is defined by the California Consumer Privacy Act (CCPA). We do not share personal information with third parties for cross-context behavioral advertising. California residents may exercise their CCPA access and deletion rights by emailing ${BRAND.supportEmail}. We will not discriminate against you for exercising these rights.

## 15. EU / UK Residents (GDPR)

If you are in the European Economic Area or the United Kingdom, the legal bases on which we process your data are:

- **Performance of a contract**: to operate your account, deliver subscription benefits, and provide the core story-generation features you request.
- **Legitimate interest**: to monitor for abuse, prevent fraud, and improve safety filtering.
- **Consent**: for optional features such as email progress reports and notifications, which you can decline or withdraw at any time.

Your data may be transferred to and processed by service providers located outside the EEA or UK. Where this happens, we rely on the standard safeguards offered by those providers, such as Standard Contractual Clauses, to protect your information.

## 16. International Users

TelliTales is operated using cloud infrastructure that may store and process data on servers located outside your country of residence, including in the United States. By using the app, you understand that your data may be processed in those locations under the safeguards described above.

## 17. Changes to This Policy

We may update this Privacy Policy from time to time. When we make material changes, we will bump the policy version inside the app and prompt you to review and accept the updated policy before continuing to use TelliTales.

## 18. Contact

For privacy-related questions, deletion requests, or to exercise any of the rights described above, contact us at:

${BRAND.supportEmail}
    `,
    termsOfUse: `
# Terms of Service for TelliTales

**Publisher:** Nexa TechWave  
**Last Updated:** May 22, 2026

## 1. Acceptance of Terms

By installing or using TelliTales, you agree to these Terms of Service. The app is intended for use by parents or legal guardians who manage the experience on behalf of their children. If you do not agree to these Terms, do not use TelliTales.

## 2. Acceptable Use

You agree to use TelliTales only to:

- Create educational or entertainment content for children in your care.
- Supervise your child's interaction with the app.

You agree not to:

- Attempt to bypass the app's safety filters or content restrictions.
- Submit prompts that contain sexual, hateful, violent, illegal, or otherwise harmful content.
- Use the AI features for purposes other than generating age-appropriate content for children.
- Resell, redistribute, scrape, reverse-engineer, or commercially exploit the app or its outputs.

## 3. AI-Generated Content

Stories, illustrations, narration, and progress reports are generated using artificial intelligence. We do not guarantee the accuracy, completeness, predictability, or educational value of any AI-generated output. Parents are responsible for reviewing AI-generated content before sharing it with their child. AI reports are informational only and do not constitute professional educational, psychological, or medical advice.

## 4. Intellectual Property

The TelliTales software, branding, design, and underlying code are owned by us. You retain ownership of the AI-generated stories and outputs created through TelliTales for your personal use. However, you may not commercially redistribute, resell, sublicense, or mass-publish TelliTales-generated content without our prior written permission.

## 5. Subscriptions and Billing

Some features of TelliTales require a paid subscription. Subscriptions are billed by the underlying platform, Apple App Store or Google Play, and managed in cooperation with RevenueCat.

- Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.
- Payment is charged to your platform account at confirmation of purchase.
- You can manage or cancel your subscription in your platform account settings, including App Store or Google Play. Refunds are subject to the platform's policies.
- Per-period story quotas reset at the start of each billing cycle as described inside the app.

## 6. Account Termination and Suspension

You may close your account and request deletion of your data at any time by emailing ${BRAND.supportEmail}.

We may suspend or terminate your access to TelliTales, with or without notice, if we reasonably believe that you have violated these Terms, for example by repeatedly attempting to bypass safety filters, submitting prohibited content, or abusing the AI generation system. We may also terminate accounts that have been inactive for an extended period.

Upon termination, your right to use TelliTales ends immediately. Sections of these Terms that by their nature should survive termination, including Intellectual Property, Limitation of Liability, Governing Law, and Dispute Resolution, will survive.

## 7. Service Availability

We may modify, suspend, or discontinue all or portions of TelliTales at any time for maintenance, security, legal, or operational reasons. Where reasonable and practicable, we will give advance notice of significant changes through the app, by email, or on our website. We are not liable for any disruption, downtime, or loss resulting from such modifications, suspensions, or discontinuations.

## 8. Limitation of Liability

TelliTales is provided "as is" and "as available" without warranties of any kind, whether express or implied. To the fullest extent permitted by law, we are not liable for:

- Decisions made on the basis of AI-generated stories or progress reports.
- Any indirect, incidental, consequential, or punitive damages arising from your use of the app.
- Service interruptions, data loss, or failures caused by underlying platform or third-party providers.

Nothing in these Terms limits any liability that cannot be limited under applicable law.

## 9. Governing Law

These Terms are governed by the laws of the Hashemite Kingdom of Jordan, excluding its conflict-of-laws rules. This choice of governing law does not deprive you of any consumer protections you would have under the mandatory law of the country where you reside.

## 10. Dispute Resolution

Before starting any formal proceeding, you agree to first try to resolve any dispute with us informally by emailing ${BRAND.supportEmail} with a description of the issue. We will try in good faith to resolve the dispute within 60 days.

If the dispute is not resolved informally, you and we agree that any remaining dispute will be resolved by binding individual arbitration on a non-class basis, except that:

- Either party may bring an individual claim in small-claims court if it qualifies.
- Either party may seek injunctive relief in court for misuse of intellectual property.
- Nothing in this section waives any non-waivable rights you have as a consumer under the law of your country of residence.

## 11. Changes to These Terms

We may update these Terms from time to time. When we make material changes, we will bump the policy version inside the app and prompt you to review and accept the updated Terms before continuing to use TelliTales. Continued use of the app after the update constitutes acceptance of the revised Terms.
    `,
  },
];

export const DISPLAY_APPS_DATA = [...APPS_DATA].sort((left, right) => {
  if (left.id === "tellitales") {
    return -1;
  }

  if (right.id === "tellitales") {
    return 1;
  }

  return 0;
});
