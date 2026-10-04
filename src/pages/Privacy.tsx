import { LegalContact, LegalDocument, type LegalSection } from "./_shared/LegalDocument";

const sections: LegalSection[] = [
  { id: "about", title: "About this policy", content: <>
    <p>This policy explains how MyStatClips handles information in our sports recording, stat and highlight app and on our website. MyStatClips is based in Texas, United States. Questions can be sent to <LegalContact/>.</p>
    <p>The mobile app does not currently require account creation, login, authentication or a MyStatClips cloud user account. Subscription services can still maintain an anonymous purchase/customer record.</p>
  </> },
  { id: "information", title: "Information you enter", content: <>
    <p>You may enter and store player first and last names, photos, jersey numbers, positions, sports, school or team names, graduation/class years, social handles and basketball roster information. You may also create game information, stats and highlight metadata, and record video involving athletes and other people.</p>
    <p>These sports profiles and records are primarily stored locally on your device. They are not login accounts. Only enter information you have appropriate authority to use.</p>
  </> },
  { id: "contact", title: "Contact information and support", content: <>
    <p>The app does not require an account owner's email address or phone number. If you email support, your email provider sends your address and message to <LegalContact/>. We use that correspondence to address your request; we do not create an app user-account profile from it.</p>
    <p>Please avoid sending unnecessary information about minors, private recordings, passwords or payment details. You can contact us about privacy concerns involving support correspondence.</p>
  </> },
  { id: "minors", title: "Children and minors", content: <>
    <p>MyStatClips is intended primarily for parents, coaches and athletes. It is not specifically marketed to children under 13, but users may enter information about or record video involving minors, including children under 13.</p>
    <p>Parents, coaches and other users are responsible for having appropriate authority and consent to enter information or record and share content about minors. Follow applicable laws and school, team and venue rules. MyStatClips does not independently verify this permission.</p>
    <p>A parent or guardian with a privacy concern can contact <LegalContact/>. Because sports data is primarily local, we generally cannot access or remotely delete it from your device.</p>
  </> },
  { id: "storage", title: "Local storage and uploads", content: <>
    <p>Full-game recordings, highlight clips, player photos and profiles, team rosters, stats, game metadata and Recovery media/data are primarily stored in the app's local device storage.</p>
    <p>The app does not automatically upload full-game videos, clips, player photos, player names, jersey numbers, school/team names, rosters, stats or game metadata to a MyStatClips cloud server. MyStatClips does not provide automatic cloud video backup.</p>
    <p>This does not mean every piece of information stays exclusively on-device. Purchase services, advertising software, website forms, support email and destinations you choose for sharing can process information remotely.</p>
  </> },
  { id: "permissions", title: "Camera, microphone and Photos", content: <>
    <p>The app uses the iPhone camera and microphone to record games and their audio. You control these permissions in iOS settings; refusing them can prevent recording.</p>
    <p>The app may use Photos access to select player images and iOS Photos/share functionality to save or export media and graphics. Permission requirements depend on the operation and iOS behavior. Photo background removal, where supported, is processed on-device.</p>
  </> },
  { id: "location", title: "Location", content: <>
    <p>MyStatClips does not currently implement GPS/location collection in its app logic and does not actively request or read device GPS coordinates. A location label you type for a game or graphic is information you enter, not a detected GPS location.</p>
    <p>Location-capable software and legacy permission descriptions are present in the project, but they are not an active location-collection feature. We do not promise that no service can infer general location: Google Mobile Ads may use an IP address or similar technical information to estimate general location, depending on SDK behavior and configuration.</p>
  </> },
  { id: "measurement", title: "Analytics and diagnostics", content: <>
    <p>The app does not currently use a dedicated Firebase Analytics, Google Analytics, Mixpanel, PostHog, Amplitude, Sentry, Crashlytics, Bugsnag or similar app-integrated analytics/crash-reporting service.</p>
    <p>RevenueCat provides purchase/subscription analytics and entitlement functionality. Google Mobile Ads may perform advertising measurement and transmit diagnostics and technical information. The absence of a dedicated analytics or crash-reporting integration is not a promise of zero measurement or diagnostic processing by those services.</p>
  </> },
  { id: "subscriptions", title: "RevenueCat and purchases", content: <>
    <p>We use RevenueCat to manage Premium subscriptions. The app uses an SDK-generated anonymous customer identifier rather than requiring a MyStatClips account.</p>
    <p>RevenueCat may process Apple purchase/subscription records, transaction or receipt information, entitlement status, product/offering information, platform and SDK context, locale/currency and operational information. This supports subscription validation, purchase restoration, access to Premium features and purchase analytics. Apple handles payment and billing under its own policies.</p>
    <p>The app does not intentionally send RevenueCat player names, photos, videos, stats, rosters, a user's phone number, support email address or custom profile attributes.</p>
  </> },
  { id: "advertising", title: "Advertising", content: <>
    <p>The Google AdMob / Google Mobile Ads SDK is installed. Current testing uses Google's test ad-unit IDs; ad requests are configured for non-personalized ads. The current temporary Premium testing override prevents the app's post-game ad-display flow. This is not a claim that live monetized advertising is already active.</p>
    <p>Depending on SDK behavior and configuration, Google Mobile Ads may collect technical information such as IP addresses, identifiers, ad interaction data, crash logs and diagnostics. Non-personalized ad requests do not mean zero advertising data collection. Personalized advertising is not currently enabled by the app's request configuration.</p>
  </> },
  { id: "tracking", title: "Apple tracking permission", content: <>
    <p>MyStatClips does not currently implement Apple's App Tracking Transparency permission prompt. No “Allow App to Track” prompt is currently triggered by the app code.</p>
    <p>If advertising or tracking behavior changes, we may update this policy and obtain appropriate Apple permissions before using features that require them.</p>
  </> },
  { id: "sharing", title: "Sharing outside the app", content: <>
    <p>You can voluntarily share or export content using the normal iOS share sheet, including to Photos, Files, Messages, email, AirDrop, social apps or other third-party services where available.</p>
    <p>Once content leaves MyStatClips, the recipient or service controls its handling under its own rules. External copies may be retained, forwarded, uploaded or synced by those services. Removing the original inside the app does not remove those copies.</p>
  </> },
  { id: "website", title: "Website launch-list signup", content: <>
    <p>If you choose to join the website launch list, the information you submit, including your email address, is sent through Kit, our email signup provider. This is separate from the mobile app's local sports data and does not create a MyStatClips app account.</p>
    <p>We use launch-list information for MyStatClips launch updates. You can unsubscribe using the link in those emails or contact us. Kit's embedded form and service may process technical information under its own privacy policy.</p>
  </> },
  { id: "third-parties", title: "Third-party services", content: <>
    <p>Apple/App Store, RevenueCat, Google Mobile Ads, Kit and destinations you choose for sharing have their own terms and privacy policies. Their handling is separate from local storage in MyStatClips.</p>
    <p>Read the policies for <a href="https://www.apple.com/legal/privacy/">Apple</a>, <a href="https://www.revenuecat.com/privacy">RevenueCat</a>, <a href="https://policies.google.com/privacy">Google</a> and <a href="https://kit.com/privacy">Kit</a> for more information.</p>
  </> },
  { id: "deletion", title: "Deleting information", content: <>
    <p>Where supported, you can delete player profiles, games, clips, Recovery sessions and Recently Deleted items inside the app. Safety checks may require you to resolve shared recordings or associated Recently Deleted items first. Games and clips in Recently Deleted can be restored or permanently deleted; expired items have a 30-day cleanup path.</p>
    <p>You can remove individual basketball roster players, but there is not currently a complete Delete Team control. Removing a roster player does not erase historical game snapshots. Saved color presets can be removed; stat graphics are generated for export rather than kept in an in-app saved-card gallery.</p>
    <p>These controls do not delete content already saved to Photos, Files, Messages, social platforms or other external destinations. We do not promise secure erasure of every temporary cache or external backup.</p>
  </> },
  { id: "uninstall", title: "Deleting or offloading the app", content: <>
    <p>Deleting the app generally removes data stored in its local container. Offloading the app may preserve documents and data. Content already saved or shared outside the app remains.</p>
    <p>Uninstalling does not cancel an Apple subscription or remove Apple subscription history and RevenueCat purchase/customer records. Device or iCloud backups may retain earlier copies depending on your Apple settings.</p>
  </> },
  { id: "security", title: "Security and retention", content: <>
    <p>We use reasonable safeguards within the app's storage and operating-system environment, but no device, software or transmission method is perfectly secure. Protect your device and choose sharing destinations carefully.</p>
    <p>Local information generally remains until you remove it, the app cleans up eligible temporary/expired items, or the app is deleted. Third-party services and external copies have their own retention rules. Recovery is a local recovery tool, not a guaranteed backup.</p>
  </> },
  { id: "changes", title: "Policy changes and questions", content: <>
    <p>We may update this policy as the app, website or applicable requirements change. We will update the effective date on this page and provide additional notice when required by law.</p>
    <p>For privacy questions or requests, contact MyStatClips at <LegalContact/>. Business location: Texas, United States.</p>
  </> },
];

export function Privacy() {
  return <LegalDocument kind="Privacy" title="Privacy Policy"
    intro="How MyStatClips handles your sports content, local device storage, subscriptions, sharing and website information."
    sections={sections}/>;
}
export default Privacy;