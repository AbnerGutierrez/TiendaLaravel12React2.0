interface Props {
    description: Record<string, string>;
}

export default function ImagenVariant({ description }: Props) {
    return (
        <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-inner backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/30">
            <img
                src={description.image}
                alt={description.name || 'Variant image'}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
    );
}
