export default function LinkedinIcon({className}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="2" y="2" width="20" height="20" rx="4" ry="4"/>
            <line x1="8" y1="11" x2="8" y2="16"/>
            <line x1="8" y1="8" x2="8" y2="8.01"/>
            <line x1="12" y1="16" x2="12" y2="11"/>
            <path d="M16 16v-3a2 2 0 0 0-4 0"/>
        </svg>
    );
}