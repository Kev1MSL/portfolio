/**
 * Everything Kevin has made, grouped the way a person would tell it rather than
 * the way a CV would list it.
 *
 * Two rules hold this file together:
 *
 *   1. Group by era, not by year. A reverse-chronological list with year headers
 *      is the shape of a résumé. "Before I could legally drive" is the shape of
 *      a story, and it sets up the patents as a punchline instead of a claim.
 *   2. Write it like you would say it out loud. Every fact here is exact — the
 *      voice is the only thing that changed. Numbers live inside sentences, not
 *      in badges, because a number you mention in passing lands harder than one
 *      you put in a box.
 *
 * Disclosure boundary: publish only what ooma.live already states publicly.
 * Ted is "Top 50, FR App Store, Entertainment"; Woody is "Top 1% TikTok Live".
 * No usage, retention, revenue or funding figures, and nothing about how Woody
 * actually works.
 */

export type Era = "now" | "along" | "teen";

export type PlateSpec = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * Only when it says something the image cannot: a date, a medium, a
   * provenance. A caption that restates the picture is noise.
   */
  caption?: string;
  /**
   * `icon` renders small and rounded, `sheet` renders as a mounted document,
   * `photo` renders as a snapshot with no mount.
   */
  variant: "icon" | "sheet" | "photo";
  /**
   * Display width in px for `photo` plates, which sit in the right margin
   * beside the text. Set it by height, not width: a figure should read as
   * roughly one and a half times the text beside it, not twice, so aim for
   * ~330px tall and let the aspect decide the width. That is why Woody is
   * much narrower than Ted — its capture is far taller, not less important.
   */
  maxWidth?: number;
};

export type RegisterEntry = {
  id: string;
  era: Era;
  /** Orders entries inside an era. Descending. */
  sortYear: number;
  /** What the row displays — may be a range, may be open-ended. */
  year: string;
  title: string;
  org?: string;
  /**
   * Makes the org name itself clickable. Does the job a logo would do — go and
   * see who these people are — without spending an image slot on branding.
   */
  orgHref?: string;
  /** The story, in the voice you would use telling it. Always visible. */
  headline: string;
  /** A second paragraph, for the few that earn one. */
  body?: string;
  live?: boolean;
  /** Renders larger, with room for a plate. */
  big?: boolean;
  /** Opens its era regardless of date, when the story is better told first. */
  lead?: boolean;
  stack?: string[];
  links?: { label: string; href: string }[];
  plate?: PlateSpec;
};

export const APP_STORE =
  "https://apps.apple.com/fr/app/goodnight-ted-plushie-friend/id6748913866?l=en-GB";
export const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=live.ooma.tedai&hl=en";
export const OOMA = "https://www.ooma.live/";

export const ERAS: { id: Era; label: string }[] = [
  { id: "now", label: "what i'm building now" },
  { id: "along", label: "things i've built along the way" },
  { id: "teen", label: "before i could legally drive" },
];

/**
 * Plates still to capture. Drop the file at the path given and add the `plate`
 * block to the matching entry — each of these exists already and only needs a
 * capture. Nothing here is generated, and none of it is a logo: a plate is
 * evidence the thing existed, and a logo is evidence somebody drew a logo.
 *
 *   /artifacts/bxplus.png       The real BX+ Figma frames, or the running app
 *   /artifacts/xcoin-node.png   Terminal output from a running node, or the Qt window
 *   /artifacts/creofin.png      Wayback capture of the live site
 */

export const register: RegisterEntry[] = [
  {
    id: "ted",
    era: "now",
    sortYear: 2024,
    year: "2024 —",
    title: "Ted",
    org: "Ooma",
    orgHref: OOMA,
    live: true,
    big: true,
    headline: "A plush bear you can actually have a conversation with.",
    body: "Real-time voice, a 3D character that reacts while you talk, and a memory that gets to know you. I work on all of it: the inference backend, the voice pipeline, the app, the bear. It reached the top 50 in Entertainment on the French App Store.",
    stack: ["Python", "FastAPI", "LiveKit", "React Native", "three.js"],
    links: [
      { label: "App Store", href: APP_STORE },
      { label: "Google Play", href: PLAY_STORE },
    ],
    plate: {
      src: "/artifacts/ted-call.jpg",
      width: 1000,
      height: 1173,
      maxWidth: 260,
      alt: "A phone held in one hand, mid-call with Ted, the bear speaking on screen",
      variant: "photo",
    },
  },
  {
    id: "woody",
    era: "along",
    sortYear: 2024,
    year: "2024",
    title: "AI Woody",
    org: "Ooma",
    orgHref: OOMA,
    big: true,
    headline:
      "Before Ted we put an AI on TikTok Live and let it host its own stream, for hours at a time, with nobody driving.",
    body: "It landed in the top 1% of TikTok Live, and the gifts people sent it were real money. Watching an audience come back for a character rather than a chatbot is the whole reason Ted exists.",
    plate: {
      src: "/artifacts/woody-stream.jpg",
      width: 900,
      height: 1592,
      maxWidth: 190,
      alt: "AI Woody hosting a TikTok Live stream, with chat and gifts coming in",
      variant: "photo",
    },
  },
  {
    id: "manet",
    era: "along",
    sortYear: 2023,
    year: "2023",
    title: "MANET testbed",
    headline:
      "My bachelor thesis: a rack of Raspberry Pis for testing what happens to a mesh network when the radio conditions get bad. Along the way I found a way to jam an entire Wi-Fi network, by accident.",
    stack: ["C++", "Linux", "Wi-Fi"],
    links: [{ label: "GitHub", href: "https://github.com/Kev1MSL/platform" }],
  },
  {
    id: "creofin",
    era: "along",
    sortYear: 2022,
    year: "2022 – 23",
    title: "Creofin",
    headline:
      "Buy now, pay after harvest. Farmers pay for seed and fertilizer months before they earn anything, so we built the credit for it, scored from open banking data. Company number two, started in my second year at Polytechnique, and it won $25k from Initiator VC.",
    stack: ["Python", ".NET Core", "TypeScript", "PostgreSQL"],
    links: [
      {
        label: "Archived site",
        href: "https://web.archive.org/web/20240909154926/https://creofin.com/",
      },
      {
        label: "Survey platform",
        href: "https://github.com/Kev1MSL/creofin_survey",
      },
    ],
    // plate pending: /artifacts/creofin.png
  },
  {
    id: "xcoin",
    era: "along",
    sortYear: 2022,
    year: "2022",
    title: "XCoin",
    headline:
      "A proof-of-stake cryptocurrency written from scratch in C++, chain and all, rather than a token on somebody else's. The peer-to-peer layer and the block synchronization were my end of it.",
    stack: ["C++", "Qt", "gRPC"],
    links: [{ label: "GitHub", href: "https://github.com/Kev1MSL/XCoin" }],
    // plate pending: /artifacts/xcoin-node.png
  },
  {
    id: "sgx",
    era: "along",
    sortYear: 2022,
    year: "2022",
    title: "Intel SGX enclaves",
    org: "Naval Group",
    headline:
      "I spent a summer writing code at the company that builds France's nuclear submarines and warships. The job was making a program keep a secret from the computer it was running on.",
    stack: ["C", "Intel SGX"],
    links: [
      {
        label: "About SGX",
        href: "https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html",
      },
    ],
  },
  {
    id: "bxplus",
    era: "along",
    sortYear: 2021,
    year: "2021 – 22",
    title: "BX+",
    headline:
      "My school kept timetables in one place, grades in another and clubs in Telegram groups. With friends we built an app that put them together: schedule, homework, clubs, and reviews of the courses themselves. About 80% of the program ended up using it.",
    stack: ["Flutter", "Node.js", "MongoDB"],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/file/KNPQItjH2CVx1Emw3zpwqL/BX?node-id=0%3A1",
      },
    ],
    // plate pending: /artifacts/bxplus.png
  },
  {
    id: "serenity",
    era: "along",
    sortYear: 2020,
    year: "2020",
    title: "Serenity Car",
    org: "MIZIX",
    // The tag carries the name, the sentence carries what it was. This is
    // where the reader meets MIZIX first, so NLost's bare tag reads fine later.
    headline:
      "My first Android app: it works out when you have started driving and puts your phone on do not disturb without being asked. It shipped under MIZIX, the first company I registered, at 16.",
  },
  {
    id: "nlost",
    era: "teen",
    sortYear: 2018,
    year: "2018",
    title: "NLost",
    org: "MIZIX",
    big: true,
    lead: true,
    headline:
      "I kept losing USB keys, so I built one that yells at your phone when you walk away from it.",
    body: "An Arduino Nano and a Bluetooth module in a case around the stick, and an encrypted folder on the drive, so losing it anyway costs you the hardware and nothing else. Then I wrote and filed the patent myself, down on the form as my own attorney, because I was 16 and did not know you were supposed to hire one.",
    stack: ["Arduino", "C#", "Java"],
    links: [
      {
        label: "Patent FR3083345",
        href: "https://patents.google.com/patent/FR3083345A3",
      },
    ],
    plate: {
      src: "/artifacts/nlost-prototype.jpg",
      width: 1200,
      height: 896,
      maxWidth: 300,
      alt: "The NLost prototype: a USB stick in a 3D-printed blue case with a Bluetooth module visible through a clear window, on a wooden desk",
      variant: "photo",
    },
  },
  {
    id: "lora",
    era: "teen",
    sortYear: 2019,
    year: "2019",
    title: "LoRa bridge",
    headline:
      "Bluetooth gives up at about ten meters. This one carries it a few kilometers over radio instead, and it got a patent too.",
    stack: ["Arduino", "LoRa", "Bluetooth"],
    links: [
      {
        label: "Patent FR3098668",
        href: "https://patents.google.com/patent/FR3098668A1",
      },
    ],
    plate: {
      src: "/artifacts/lora-schematic.png",
      width: 1600,
      height: 1068,
      alt: "Schematic sheet of the LoRa range extender",
      caption: "Schematic, drawn in Eagle. Scan, 19/01/2018.",
      variant: "sheet",
    },
  },
  {
    id: "krunchy",
    era: "teen",
    sortYear: 2018,
    year: "2018",
    title: "Tasty n' Krunchy",
    headline:
      "A robot that fed my hamster, with an app to go with it. First thing I made that something else actually depended on.",
    links: [
      { label: "GitHub", href: "https://github.com/Kev1MSL/Tasty-and-Krunchy" },
    ],
  },
];

/** The eras, in order. Leads first, then newest-first inside each era. */
export function byEra() {
  return ERAS.map(({ id, label }) => ({
    id,
    label,
    entries: register
      .filter((e) => e.era === id)
      .sort(
        (a, b) =>
          Number(b.lead ?? false) - Number(a.lead ?? false) ||
          b.sortYear - a.sortYear,
      ),
  })).filter((group) => group.entries.length > 0);
}
