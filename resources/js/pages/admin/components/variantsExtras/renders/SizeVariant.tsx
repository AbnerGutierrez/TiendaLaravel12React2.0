interface Props {
    description: Record<string, string>;
}

export default function SizeVariant({ description }: Props) {
    return (
        <div className="flex min-w-8.5 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 px-1.5 py-1 shadow-inner backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
            <span className="text-[10px] leading-none font-bold text-white">{description.width}</span>

            <span className="mt-0.5 text-[8px] leading-none text-gray-400">× {description.height}</span>
        </div>
    );
}
