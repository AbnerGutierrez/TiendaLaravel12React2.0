interface Props {
    description: Record<string, string>;
}

export default function ColorVariant({ description }: Props) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div
                className="h-5 w-5 rounded-full border border-black/10 shadow-inner ring-1 ring-black/5 transition-all duration-300 group-hover:scale-105 group-hover:border-black/20 dark:border-white/20 dark:ring-white/5 dark:group-hover:border-white/40"
                style={{
                    backgroundColor: description.hex,
                }}
            />

            <span className="max-w-10 truncate text-center text-[8px] leading-none font-medium text-gray-600 dark:text-gray-300">
                {description.name}
            </span>
        </div>
    );
}
