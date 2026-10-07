export const quickSteps = [
  { id: "athlete", title: "Set up your athlete or team", text: "In Settings, add your athlete in Player Roster. Basketball teams are set up in Sports Settings.", topic: "Setup" },
  { id: "sport", title: "Choose your sport", text: "Open Record and choose the sport you’re filming.", topic: "Record" },
  { id: "players", title: "Choose who to track", text: "Choose 1 Player, 2 Players, or Basketball Team where available. Team tracking requires Premium.", topic: "Players" },
  { id: "session", title: "Choose Game or Practice", text: "Use Game for a matchup or Practice for a workout. Complete the setup shown on screen.", topic: "Session" },
  { id: "start", title: "Start recording", text: "Check the camera view, then tap START. Keep MyStatClips open while recording.", topic: "Camera" },
  { id: "stats", title: "Tap stats as the action happens", text: "Tap the matching stat button. With two players or a team, select the athlete first.", topic: "Stats" },
  { id: "clip", title: "Keep a moment with Clip", text: "Tap CLIP for a highlight without adding a stat.", topic: "Highlights" },
  { id: "pause", title: "Pause, then resume", text: "Tap PAUSE for a break and RESUME when you’re ready to continue.", topic: "Controls" },
  { id: "finish", title: "Tap End Game", text: "Confirm End Game and let saving finish. Don’t close the app while it saves.", topic: "Finish" },
  { id: "review", title: "Review your highlights", text: "Open Clips → Highlights. Watch, trim, favorite, save, or share the moments you kept.", topic: "Clips" },
];

export const beforeRecording = [
  "Charge your phone.",
  "Make sure you have free storage.",
  "Use 720p / 30 fps for efficient recording.",
  "Dim your screen.",
  "Close unnecessary apps.",
  "Keep your phone out of direct sunlight.",
];

export const guideScreenshots = [
  { src: "images/how-to/settings.jpg", topic: "Setup", alt: "Current MyStatClips Settings with Player Roster, Sports Settings, Recording Settings and Storage & Recovery.", caption: "Current app web preview · Settings" },
  { src: "images/how-to/record-setup.jpg", topic: "Record", alt: "Current MyStatClips Record setup with sport, tracking mode, player, Practice and Game choices.", caption: "Current app web preview · Record setup" },
  { src: "images/how-to/clips.jpg", topic: "Clips", alt: "Current MyStatClips Clips library with Highlights, Full Games, newest and oldest sorting, and Favorites.", caption: "Current app web preview · Clips" },
];

export interface GuideSection {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  note?: string;
}

export const guideSections: GuideSection[] = [
  {
    id: "player-roster", title: "Player Roster",
    summary: "Set up an athlete once, then choose them when you record.",
    steps: [
      "Open Settings → Player Roster and add a player. Enter the athlete’s name and the profile details you want to use.",
      "Select the sports that athlete plays. Team, jersey number and position can be different for each sport; check those details for the sport you’re recording.",
      "Return to Record and choose the saved athlete. Add another athlete if you want to track two players in the same session.",
      "Edit the roster when profile details change. Previously saved sessions keep their own recorded information; a profile edit is not a correction to an old game.",
    ],
    note: "Use only photos and personal details you have permission to share, especially for children.",
  },
  {
    id: "sports-settings", title: "Sports Settings",
    summary: "Choose the buttons you need for each athlete and sport.",
    steps: [
      "Open Settings → Sports Settings and select the athlete and sport you want to configure.",
      "Choose up to eight live stat buttons from that sport’s action list. Use clear custom action names if you add your own.",
      "Undo and Clip remain available separately from the selected stat buttons.",
      "Check the sport again on Record before starting. An athlete must have that sport selected in their profile to use it in their session.",
    ],
  },
  {
    id: "basketball-team-setup", title: "Basketball Team Setup",
    summary: "Premium basketball team tracking uses its own team roster.",
    steps: [
      "Open Settings → Sports Settings → Basketball → Team Setup. If prompted, review the Premium options in Settings → MyStatClips Subscription.",
      "Create the team and add its roster. Enter each player’s name and jersey number, then choose the team stats you want to track.",
      "Link a team player to an existing athlete only when it is the same person. Linking makes that player’s team moments available in the athlete’s view without making another video copy.",
      "On Record, choose Basketball and the Team tracking option, select the team, and select five starters before starting.",
    ],
    note: "Team tracking is currently for Basketball, not every supported sport. Individual 1 Player and 2 Players recording is separate.",
  },
  {
    id: "team-recording", title: "Team recording",
    summary: "Select the player who made the play before tapping their stat.",
    steps: [
      "After team setup, choose Game or Practice and check the starting five. Tap START when the camera and lineup are ready.",
      "Use the live team roster to select the athlete who made the play, then tap the stat. Check the selected name or number before each tap.",
      "Use substitutions to update the on-court lineup. Changing the selected player does not move earlier recorded stats to that player.",
      "Review team and player totals after the session. If a total needs a manual correction, use the totals editor; a correction does not create new shot-by-shot history or video.",
    ],
  },
  {
    id: "team-highlight-capture", title: "Team Highlight Capture",
    summary: "Decide whether team stat taps should also mark highlights.",
    steps: [
      "Open the basketball team settings and find Team Highlight Capture.",
      "Turn it on only if you want team stat taps to create highlight moments. Read and confirm the storage warning.",
      "When it is off, team stat tracking still works, but those stat taps do not automatically create highlights.",
      "Use Clip to deliberately mark a moment without adding a stat. Review team footage in the Teams filter in Clips; explicitly linked athletes can also see their own team moments.",
    ],
    note: "A busy team game can create many highlights. Allow time and free storage for saving; athlete links do not duplicate the underlying video.",
  },
  {
    id: "game-practice", title: "Game or Practice",
    summary: "Use a game session for a matchup and practice for a workout.",
    steps: [
      "On Record, select your sport and athlete, two athletes, or basketball team. Choose Game or Practice.",
      "For Game, complete the opponent and game details shown in setup. Check them before tapping START.",
      "Practice is a quick-start workout without needing an opponent or final match result. You can still record, track actions and mark highlights.",
      "Both flows use the live recording controls. Finish the session using End Game and wait for saving to complete.",
    ],
  },
  {
    id: "recording-controls", title: "Recording controls",
    summary: "Check the camera, start, and keep the app in the foreground.",
    steps: [
      "Allow the camera and microphone permissions requested by iOS. Position the phone securely and check the view before START.",
      "Choose portrait or landscape while the session is ready. Recording keeps that starting orientation; don’t expect rotating the phone mid-session to rebuild the movie.",
      "Tap START and confirm the screen shows recording rather than READY, STARTING or a warning. Keep the phone pointed at the action.",
      "HIDE clears the recording controls from the camera view; SHOW brings them back. Hiding is not pausing.",
      "Use PAUSE / RESUME for breaks. Use End Game to finish and save, not the phone’s app switcher.",
    ],
    note: "Native camera recording runs on iPhone. The screenshots in this guide are captures of the current mobile web preview, not simulated iPhone camera footage.",
  },
  {
    id: "zoom", title: "0.5x / 1x / 2x zoom",
    summary: "Adjust framing without changing the session.",
    steps: [
      "Use the zoom controls above the live action controls. Start with 1x for the default main-camera view.",
      "Choose 0.5x for a wider view only when your phone has a supported, available Ultra Wide camera. If it isn’t offered, it is not supported in that camera setup.",
      "Choose 2x for tighter framing when available. Check that the athlete and ball remain visible before continuing.",
      "Zoom changes framing, not recording quality. A tighter view can make it harder to follow fast action; avoid unnecessary changes during a play.",
    ],
  },
  {
    id: "stats-highlights", title: "Stats and highlights",
    summary: "Record the play for the correct athlete as it happens.",
    steps: [
      "Tap a stat button shortly after the play. The app records that stat and marks its associated highlight when highlight capture is enabled.",
      "In 2 Players mode, select the right athlete before tapping. In Team mode, select the player from the live roster.",
      "Review totals in Stats after the session. A highlight is a marked video moment; a stat total is a count of the actions you recorded.",
      "Use manual total correction for a count you missed or need to change. It does not create a video highlight or invent individual shot history.",
    ],
    note: "Saving footage and preparing highlights can take time after a long session. A marked moment is not proof that its final video file is ready yet.",
  },
  {
    id: "clip-undo", title: "Clip and Undo",
    summary: "Keep a moment without a stat, or correct your most recent stat tap.",
    steps: [
      "Tap CLIP during recording to mark a manual highlight. It does not add to a stat total.",
      "If you tapped the wrong stat, tap Undo while recording. It removes the most recent stat event and its linked highlight.",
      "Undo is not a general erase button for every manual Clip or an earlier game. To remove a saved clip, use the Clips library instead.",
      "For a missed play, don’t tap a later stat and assume its video will move backward to the original play. Review the full game or correct the total separately.",
    ],
  },
  {
    id: "pause-resume", title: "Pause / Resume",
    summary: "Pause for a break; resume explicitly when the camera is ready.",
    steps: [
      "Tap PAUSE when you don’t need to capture the break. Tap RESUME when you’re ready for the next play.",
      "Keep MyStatClips open. Leaving the app can auto-pause capture; return, read the message and resume explicitly.",
      "If iOS stops the camera or recording, follow the warning. Not every interruption can resume into the same video file.",
      "If the screen says the video stopped, use End Game to save what is available. Check Storage & Recovery if saving needs attention.",
    ],
    note: "Time spent paused is not recorded action. Don’t use pause as a way to record with the app in the background.",
  },
  {
    id: "end-game", title: "End Game and saving",
    summary: "Finish the session before closing the app.",
    steps: [
      "Tap End Game and confirm the finish dialog. Complete any score or session details requested.",
      "Keep the app open while it closes the recording and saves the session. Wait for the saving state to finish.",
      "Open Clips and check Highlights or Full Games for the session. Some highlights may still be preparing; follow their status rather than repeatedly ending the game.",
      "If saving fails or stays unfinished, open Settings → Storage & Recovery → Recovery. Don’t delete the session or app to try to fix it.",
    ],
  },
  {
    id: "recording-quality", title: "Recording quality",
    summary: "720p / 30 fps is the efficient default.",
    steps: [
      "Before recording, open Settings → Recording Settings and choose the video quality.",
      "Use 720p at 30 fps for the most efficient balance of storage, battery and heat.",
      "1080p and 4K also record at 30 fps. They use more storage and power; choose them only when you need the extra detail.",
      "Check free storage before a long game. Allow room for the full recording and the highlights or exports you plan to save.",
    ],
    note: "Storage and long-game warnings are planning prompts, not a guarantee that a particular game length will fit.",
  },
  {
    id: "overheating", title: "Overheating prevention",
    summary: "Prepare for long games and watch the phone’s warnings.",
    steps: [
      "Charge your phone before the session, dim the screen, close unnecessary apps and start with free storage.",
      "Use 720p / 30 fps and keep the phone shaded and ventilated. Avoid direct sunlight and heat-trapping covers or mounting arrangements.",
      "Avoid unnecessary switching between apps or demanding tasks while recording. Charging can also add heat; watch the phone’s temperature.",
      "If a temperature or quality warning appears, pause safely and let the phone cool. If iOS stops recording, follow the app’s save or Recovery instructions.",
    ],
    note: "These steps reduce load but cannot guarantee uninterrupted recording in hot conditions.",
  },
  {
    id: "clips-library", title: "Clips library",
    summary: "Find highlights by athlete, team, action or favorite.",
    steps: [
      "Open the Clips tab and choose Highlights. Use All, Players or Teams to set the scope, then choose the athlete or team you want.",
      "Use All, Favorites or the available action filters to narrow the list. Choose Newest First or Oldest First.",
      "Open a ready clip to watch it. Favorite useful moments so they are easier to find later.",
      "Use Save to put a copy in Photos, or Share to send it through the iPhone share sheet. Allow the Photos permission if requested.",
      "Use Select for bulk actions. Bulk Save exports each selected clip as its own video; it is not a Highlight Reel.",
    ],
  },
  {
    id: "trimming", title: "Trimming",
    summary: "Keep the part of a saved highlight you want to share.",
    steps: [
      "Open a saved, playable highlight and enter its editing controls.",
      "Drag the timeline’s start and end handles to choose the useful moment. Preview it before saving.",
      "Save the edit to keep the trim, or cancel to leave the previous edit unchanged. Use the clip’s mute control if you don’t want its audio.",
      "The saved trim is used by supported sharing, saving and reel paths. It does not rewrite your full-game recording.",
    ],
    note: "An unfinished or missing recording must be resolved first; editing cannot recreate video that was never captured.",
  },
  {
    id: "full-games", title: "Full Games",
    summary: "Return to the full session rather than only its marked moments.",
    steps: [
      "Open Clips → Full Games, then choose the athlete or team scope.",
      "Choose Newest First or Oldest First to find the session. Open its ready recording to watch it.",
      "Use the available share/export control if you want a copy outside the app. Long videos need additional storage and time.",
      "If a full game is unfinished, check Recovery. A playable recording and a complete set of stat-linked highlights are separate things.",
    ],
  },
  {
    id: "sorting-deletion", title: "Sorting and deletion",
    summary: "Organize the list and check what you’re deleting.",
    steps: [
      "Use Newest First / Oldest First in Highlights or Full Games. Filters and sorting change the view, not the underlying recording.",
      "Delete a clip to move that clip to Recently Deleted. Delete a full game only after reading the confirmation about its stats, recording and related highlights.",
      "Review selections carefully before a bulk delete. If a save, export or other media action is busy, let it complete first.",
      "To reclaim space permanently, review Recently Deleted rather than assuming a soft-deleted recording has already freed all its storage.",
    ],
  },
  {
    id: "recently-deleted", title: "Recently Deleted",
    summary: "Restore a deleted session or remove it permanently.",
    steps: [
      "Open Settings → Storage & Recovery → Recently Deleted.",
      "Games and clips remain there for up to 30 days. Restore an item to bring back its saved data and available video.",
      "Use permanent deletion or Empty Recently Deleted only after reviewing the contents. Permanent deletion cannot be undone.",
      "Restoring a highlight depends on its source footage still being available. Don’t permanently delete a full game you still need for its clips.",
    ],
    note: "Recently Deleted is not a cloud backup. Uninstalling the app or losing its local data can remove recordings outside this restore flow.",
  },
  {
    id: "recovery", title: "Recovery",
    summary: "Handle an unfinished recording without discarding its footage.",
    steps: [
      "Open Settings → Storage & Recovery → Recovery when a session did not finish saving normally.",
      "Use Check Again, then Recover Full Game or Retry Finalization as shown for the unfinished session.",
      "If complete finalization is unavailable, use View Available Footage or Export Valid Segments when offered. These may preserve video without restoring every stat or highlight.",
      "If an attempt fails, read its message and keep the source data. Repeated failures need support, not deletion or app reinstall.",
    ],
    note: "Recovery lists unfinished sessions, not every normal full game. Recovery cannot guarantee footage that iOS never wrote.",
  },
  {
    id: "stat-card", title: "Stat Card",
    summary: "Create an athlete graphic from the profile and saved stats.",
    steps: [
      "Open Create → Stat Card. Choose the athlete and the saved game or stats you want to show.",
      "Select the Free design or, with Premium, Premium Design 1 or Premium Design 2. Adjust the available photo, colors and text controls.",
      "Preview the whole card and check names, team details and numbers. Manual changes on a graphic do not create new recorded plays or clips.",
      "Save or share the finished image. Photo background removal is a Premium option on supported iOS 17+ devices; keep the original photo if removal is unavailable.",
    ],
    note: "Free and Premium have different designs and branding controls. Use only an athlete photo you have permission to publish.",
  },
  {
    id: "highlight-reel", title: "Highlight Reel",
    summary: "Premium can combine 2–5 saved highlights into one short video.",
    steps: [
      "Open Create → Highlight Reel and choose the athlete. Select two to five ready, saved clips.",
      "Put the clips in the order you want. Check the saved trims and each clip’s mute setting before generating.",
      "Choose the Reel Audio option, then tap Generate Reel. Wait for completion and play the result before saving or sharing.",
      "The result is a 9:16 vertical, 1080 × 1920 video. Wide clips fit inside the frame so the recorded action is not cropped; existing clip branding stays.",
    ],
    note: "A reel is a single combined video, not bulk Save. Missing or unfinished clips must be resolved first. Availability depends on your installed app version and active Premium access.",
  },
  {
    id: "reel-audio", title: "Reel Audio",
    summary: "Keep the recorded sound or mute the whole reel.",
    steps: [
      "In Create → Highlight Reel, find Reel Audio before generating.",
      "Keep Audio preserves available original clip sound, while respecting clips that you already muted.",
      "Mute Reel removes audio from the entire generated reel. It does not change the original clips.",
      "No music library or soundtrack import is provided here. If you add music later in a social app, follow that service’s music rules.",
    ],
  },
  {
    id: "premium", title: "Premium",
    summary: "Check your plan and the current App Store offer in Settings.",
    steps: [
      "Open Settings → MyStatClips Subscription to see your current plan and the monthly/yearly offers available from the store.",
      "Free includes core recording, stat tracking and highlight capture. Premium adds no ads, no watermark, Premium graphic designs, supported photo background removal, Basketball Team Tracking and the Highlight Reel feature in supported versions.",
      "Complete purchases through Apple. Check the store’s displayed price, renewal period and confirmation before buying; don’t assume a website price applies to your region.",
      "Use Restore Purchases if an existing subscription is not recognized. Manage or cancel renewal through your Apple subscription settings.",
    ],
    note: "A delayed or unavailable subscription check is not proof of Premium access. Keep recordings safe while checking your purchase status.",
  },
  {
    id: "troubleshooting", title: "Troubleshooting",
    summary: "Start with the message on screen; avoid deleting your data.",
    steps: [
      "Camera won’t start: check iPhone Settings → MyStatClips permissions, then return to the ready session. Native camera recording is not supported in the website preview.",
      "Athlete, sport or Team is missing: check Player Roster sports, the current sport filter, the team roster and Premium status where required.",
      "No clips appear: check the athlete/team and action filters, whether you tapped a stat or Clip during recording, and the session’s save status. Team stat highlights also require Team Highlight Capture.",
      "Recording paused or stopped: return to the app, read the interruption message and resume only if it offers Resume. Otherwise finish/save available footage and check Recovery.",
      "Save or share failed: check free space and Photos permissions, confirm the clip is ready, and try again after the current media action finishes.",
      "Reel won’t generate: choose two to five saved clips, check Premium and resolve missing media. A trim or mute edit cannot repair a missing source file.",
      "Purchase not recognized: allow the subscription check to finish and use Restore Purchases. Don’t repeatedly purchase the same plan to troubleshoot.",
      "Still stuck: contact support with the app version, iPhone model/iOS, exact error, and what you tapped. Don’t uninstall or delete original recordings while seeking help.",
    ],
  },
  {
    id: "supported-sports", title: "Supported sports",
    summary: "Choose the sport that matches the session.",
    steps: [
      "The current app supports Basketball, Volleyball, Tennis, Soccer, Football, Baseball, Softball, Lacrosse and Hockey.",
      "Each sport has its own action list. Choose the sport in the athlete’s profile and configure it in Sports Settings before recording.",
      "1 Player and 2 Players modes track individual athletes. Team roster recording and substitutions are currently Basketball-only and require Premium.",
      "Use the options available in your installed version. Updating the website does not add a new mode to an older app build.",
    ],
  },
  {
    id: "cheat-sheet", title: "Quick reference cheat sheet",
    summary: "The shortest route to the controls you need.",
    steps: [
      "Add or edit an athlete → Settings → Player Roster.",
      "Choose live stat buttons → Settings → Sports Settings.",
      "Set up a basketball team → Settings → Sports Settings → Basketball → Team Setup.",
      "Set efficient quality → Settings → Recording Settings → 720p / 30 fps.",
      "Start a session → Record → sport + players/team → Game or Practice → START.",
      "Keep a moment without a stat → CLIP. Correct the last stat → Undo.",
      "Take a break → PAUSE → RESUME. Finish and save → End Game.",
      "Watch, trim or share → Clips → Highlights. Watch a full session → Clips → Full Games.",
      "Restore deleted items or finish an interrupted save → Settings → Storage & Recovery.",
      "Make a graphic or short reel → Create → Stat Card or Highlight Reel.",
      "Check or restore Premium → Settings → MyStatClips Subscription.",
    ],
  },
];
