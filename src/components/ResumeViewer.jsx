import { useState } from 'react';
import { cn } from '../lib/utils'

export default function ResumeViewer() {
    const [showResume, setShowResume] = useState(false);
    return (
        <div>
            <button
                onClick={() => setShowResume((prev) => !prev)}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg:primary/10 transition-all duration-300 w-36"
                aria-label="Show Resume"
            >
                View CV
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop:blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300",
                showResume ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            )}
            >
                <div className="flex flex-col gap-8 text-xl mb-12">
                    <iframe src="resume/Resume_Le.pdf#view=Fit" className="w-[80vw] h-[75vh]"></iframe>
                </div>
                <button
                    onClick={() => setShowResume((prev) => !prev)}
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg:primary/10 transition-all duration-300 w-36"
                    aria-label="Close Resume">Close CV</button>
            </div>
        </div>
    )
}