import { motion } from "framer-motion";

export default function GlowIcon({ href, children, baseScale = 0.8, hoverScale = 1.0 }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            initial={{ scale: baseScale, filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))" }}
            whileHover={{
                scale: hoverScale,
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
                color: "#ffffff"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 50 }}
            className="text-muted-foreground cursor-pointer"
        >
            {children}
        </motion.a>
    );
}