import { LegalContact, LegalDocument, type LegalSection } from "./_shared/LegalDocument";

const sections: LegalSection[] = [
  { id: "service", title: "Using MyStatClips", content: <>
    <p>MyStatClips is a sports recording, stat and highlight app based in Texas, United States. These Terms apply to the app and our website. By using them, you agree to these Terms. If you do not agree, do not use the service.</p>
    <p>You are responsible for how you record, enter, share and distribute content. The mobile app does not currently require a MyStatClips account or login.</p>
  </> },
  { id: "permission", title: "Permission and minors", content: <>
    <p>Have appropriate permission or authority to record or enter information about minors, athletes, teams, schools and other people. Respect applicable recording, privacy and publicity laws and school, team and venue rules.</p>
    <p>MyStatClips is intended primarily for parents, coaches and athletes. Adults using it for minors, including children under 13, are responsible for appropriate authority and consent. MyStatClips does not independently verify consent.</p>
  </> },
  { id: "content", title: "Your content", content: <>
    <p>You retain ownership of your own photos, videos and other content. MyStatClips does not claim ownership of your recordings. You must have the rights needed to use any content you import.</p>
    <p>You give MyStatClips only the limited permissions technically necessary to operate the features you use, such as locally storing, processing, displaying and exporting your content, and using third-party services or sharing destinations you choose. This does not authorize us to take ownership of or automatically publish your videos.</p>
  </> },
  { id: "storage", title: "Storage and backups", content: <>
    <p>Most user-created sports media and data is stored on your device. The app does not provide automatic cloud video backup. You are responsible for available device storage and for keeping any backups or external copies you need.</p>
    <p>Deleting the app generally removes its local data; offloading may retain documents/data. MyStatClips cannot guarantee recovery of deleted, corrupted, interrupted or unavailable media. External copies and backups are controlled by their respective services.</p>
  </> },
  { id: "recording", title: "Recording limitations and stats", content: <>
    <p>Recording, finalization and highlight extraction may fail because of insufficient storage, camera/microphone permissions, calls or other iOS interruptions, hardware or operating-system behavior, battery or thermal conditions, and other technical issues.</p>
    <p>We do not guarantee uninterrupted recording, perfect highlight extraction, recovery or file preservation. Recovery tools may help with readable retained sources, but cannot recreate missing footage or audio.</p>
    <p>Stats are user-entered. MyStatClips does not guarantee statistical accuracy; review your entries before sharing or relying on them.</p>
  </> },
  { id: "sharing", title: "Sharing and external copies", content: <>
    <p>You are responsible for content you choose to share or distribute. iOS sharing can send content to Photos, Files, Messages, email, AirDrop, social apps or other destinations where available.</p>
    <p>External platforms and recipients have their own terms and privacy rules. Removing something inside MyStatClips does not remove copies already shared or saved elsewhere.</p>
  </> },
  { id: "plans", title: "Free and Premium plans", content: <>
    <p>MyStatClips offers a Free version. The current Premium plan is <strong>US $9.99 per month</strong> or <strong>US $79.99 per year</strong>, billed as an auto-renewing subscription through Apple. The App Store purchase screen shows the applicable price, currency, taxes and billing period before you confirm.</p>
    <p>Free may include MyStatClips branding/watermarks where applicable and advertising where enabled. Current testing uses Google test ad units, not a verified live monetized advertising rollout.</p>
    <p>Temporary TestFlight testing access currently unlocks Premium features without requiring a paid entitlement. This temporary access is not a paid subscription and does not cancel any existing Apple subscription.</p>
  </> },
  { id: "premium", title: "Premium features", content: <>
    <p>When temporary testing access is disabled, the currently implemented Premium feature gates include:</p>
    <ul>
      <li>Premium Design 1 and Premium Design 2 player-card templates.</li>
      <li>Photo background removal for Premium Design 2, on supported devices/iOS versions.</li>
      <li>The ability to remove MyStatClips branding from player cards.</li>
      <li>Unwatermarked video playback, sharing and export paths where supported, including highlights, full-game output and Recovery exports.</li>
      <li>Suppression of the post-game advertising flow.</li>
    </ul>
    <p>Sports Settings, basketball team setup, substitutions, zoom, ordinary recording, stat tracking, clip editing and basic stat-card controls are not Premium-only features.</p>
    <p>Highlight Reel Builder is currently disabled for everyone and is not an available launch Premium feature. Available features and technical requirements are described by the current app and purchase screen.</p>
  </> },
  { id: "billing", title: "Renewal, cancellation and refunds", content: <>
    <p>Apple subscriptions renew automatically unless canceled through your Apple ID/App Store subscription settings before renewal. Apple provides the applicable renewal date and cancellation details. Manage or cancel the subscription through Apple, not by deleting MyStatClips or emailing support.</p>
    <p>Apple handles billing and refund requests under its policies and applicable law. MyStatClips does not promise that Apple will approve a refund. RevenueCat supports purchase validation, entitlement status and restoration.</p>
  </> },
  { id: "acceptable-use", title: "Acceptable use", content: <>
    <p>Do not use MyStatClips for unlawful recording, violations of privacy or publicity rights, unauthorized copyrighted content, harassment or abuse. Do not misuse the service, attempt unauthorized access, interfere with its operation or evade applicable access restrictions.</p>
    <p>You are responsible for following laws and obtaining permissions relevant to your content and use.</p>
  </> },
  { id: "intellectual-property", title: "Our software and branding", content: <>
    <p>MyStatClips branding, app design and software remain protected by applicable intellectual-property laws. Using the service does not transfer ownership of them or grant permission to impersonate MyStatClips.</p>
    <p>Your own content remains yours, subject to the rights of other people whose content or likeness you use.</p>
  </> },
  { id: "third-parties", title: "Third-party services", content: <>
    <p>The service uses or works with Apple/App Store, RevenueCat, Google Mobile Ads, Kit for website launch-list signup, and external sharing destinations. Their services are subject to their own terms and privacy policies.</p>
    <p>MyStatClips does not control their availability, billing decisions or handling of content you send to them. Our <a href="https://mystatclips.com/privacy">Privacy Policy</a> explains the app's current information handling.</p>
  </> },
  { id: "changes", title: "Changes and ending use", content: <>
    <p>We may update features, pricing and these Terms subject to applicable law and Apple requirements. We will update the effective date and provide notice of material changes when required. Price changes apply under the notices and choices provided through Apple.</p>
    <p>You can stop using the app at any time. Manage subscriptions separately through Apple. We may restrict access to services we control when reasonably necessary to address unlawful use, serious misuse or security risks, subject to applicable law; this does not imply that we can remotely erase your local recordings.</p>
  </> },
  { id: "limitations", title: "Disclaimers and responsibility", content: <>
    <p>We aim to provide a useful service, but cannot promise it will always be available or free of errors. Use recording and recovery features with the limitations above in mind and keep important copies where appropriate.</p>
    <p>To the extent permitted by law, MyStatClips is not responsible for losses caused by device failures, unavailable third-party services or other circumstances outside our reasonable control. Nothing in these Terms excludes liability that cannot legally be excluded or removes warranties, remedies or consumer rights that applicable law protects.</p>
  </> },
  { id: "law", title: "Governing law and contact", content: <>
    <p>These Terms are governed by the laws of Texas, United States, subject to applicable mandatory consumer law, including protections that may apply where you live.</p>
    <p>For legal, subscription-feature or support questions, contact MyStatClips at <LegalContact/>. Business location: Texas, United States.</p>
  </> },
];

export function Terms() {
  return <LegalDocument kind="Terms" title="Terms of Use"
    intro="Your responsibilities when recording and sharing, how subscriptions work, and the practical limits of device-based media."
    sections={sections}/>;
}
export default Terms;