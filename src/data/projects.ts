export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "TimeLock",

    description:
      "Digital time capsule application with secure authentication, virtual pet and gamification.",

    images: [
      "/projects/timelock/1.png",
      "/projects/timelock/2.png",
      "/projects/timelock/3.png",
      "/projects/timelock/4.png",
      "/projects/timelock/5.png",
      "/projects/timelock/6.png",
    ],

    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Capacitor",
    ],

    features: [
      "Future Messaging",
      "Photo & Video Capsules",
      "Voice Notes",
      "Virtual Pet",
      "XP & Gamification",
      "Countdown Unlock",
      "Secure Authentication",
      "Cloud Storage",
    ],

    github: "https://github.com/dhanasekar8363-lab",

    demo: "https://timelock-beta.vercel.app",
  },

  {
    title: "CyberHub",

    description:
      "Realtime anonymous chat application using Socket.IO.",

    images: [
      "/projects/cyberhub/1.png",
      "/projects/cyberhub/2.png",
      "/projects/cyberhub/3.png",
      "/projects/cyberhub/4.png",
      "/projects/cyberhub/5.png",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
    ],

    features: [
      "Realtime Messaging",
      "Anonymous Chat Rooms",
      "Direct Messages",
      "WebRTC Video Calls",
      "Google OAuth",
      "Online Presence Indicators",
      "Message Notifications",
    ],

    github: "https://github.com/dhanasekar8363-lab",

    demo: "https://cyberhub-client.onrender.com/login",
  },

  {
    title: "Nexora",

    description:
      "Android productivity application with AI Notes and Smart Nearby Detection.",

    images: [
      "/projects/nexora/1.png",
      "/projects/nexora/2.png",
      "/projects/nexora/3.png",
      "/projects/nexora/4.png",
      "/projects/nexora/5.png",
      "/projects/nexora/6.png",
    ],

    tech: [
      "Kotlin",
      "Android",
      "ML Kit",
    ],

    features: [
      "AI-Powered Notes",
      "Smart Nearby Detection",
      "Geofence Entry & Exit Alerts",
      "OCR Camera Scanning",
      "SMS Family Safety Alerts",
      "Firebase Cloud Sync",
      "Google Sign-In",
      "Trash & Soft Delete",
    ],

    github: "https://github.com/dhanasekar8363-lab",

    demo: "#",
  },
];