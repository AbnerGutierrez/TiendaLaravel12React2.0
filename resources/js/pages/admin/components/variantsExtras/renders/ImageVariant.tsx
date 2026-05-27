interface Props {
    description: Record<string, string>;
}

export default function ImagenVariant({ description }: Props) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-inner ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/30">
                <img
                    src={description.image}
                    alt={description.title || 'Variant image'}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
            </div>

            <span className="max-w-10.5 truncate text-center text-[8px] leading-none font-medium text-gray-300">{description.title}</span>
        </div>
    );
}
