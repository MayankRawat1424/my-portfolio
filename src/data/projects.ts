import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    name: "Jizo",
    image: { src: "/projects/Jizo.png", width: 1920, height: 1048 },
    description:
      "is a PySide6-based desktop application for low-latency WAV preview and keyboard-driven sample organization. The tool integrates sounddevice for real-time playback, pyqtgraph for waveform and spectrogram visualization. Designed for efficient dataset curation, it emphasizes event-driven design, state management, and performance-oriented audio handling.",
    repo: "https://github.com/MayankRawat1424/Jizo",
    tech: {
      frontend: ["PySide6", "PyQtGraph"],
      backend: ["NumPy", "Sounddevice", "Soundfile"],
    },
  },
  {
    name: "Lock_In",
    image: { src: "/projects/Lock_In.png", width: 1381, height: 971 },
    description:
      "is an RSVP (Rapid Serial Visual Presentation) based web application designed to dramatically improve reading speed and focus. Instead of displaying text in traditional paragraph format, the app presents one word at a time at a fixed position on the screen. This eliminates the need for eye movement across lines and reduces subvocalization, allowing users to process text significantly faster while maintaining comprehension.",
    repo: "https://github.com/MayankRawat1424/Lock_In",
    tech: {
      frontend: ["React.js", "Next.js", "Tailwind CSS"],
      backend: ["Node.js"],
    },
  },
  {
    name: "deFace",
    image: { src: "/projects/deFace.png", width: 1849, height: 970 },
    description:
      "is a web application built to automatically detect and censor faces in images, designed specifically for journalists, editors, and media professionals who need to protect identities quickly and reliably.",
    repo: "https://github.com/MayankRawat1424/DeFace",
    tech: {
      frontend: ["React.js", "Tailwind CSS"],
      backend: ["MediaPipe"],
    },
  },
  {
    name: "Cumulonimbus OIMS",
    image: { src: "/projects/Cumulonimbus.png", width: 1856, height: 972 },
    description:
      "is a comprehensive Order & Inventory Management Solution designed specifically for small and medium-scale businesses to streamline operations, reduce manual errors, and improve visibility across the supply chain.",
    repo: "https://github.com/MayankRawat1424/Cumulonimbus_OIMS",
    tech: {
      frontend: ["React.js", "Tailwind CSS", "ShadCN Charts"],
      backend: ["Express.js", "Node.js", "SQLite"],
    },
  },
];
