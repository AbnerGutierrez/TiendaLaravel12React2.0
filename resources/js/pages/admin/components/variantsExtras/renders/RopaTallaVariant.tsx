interface Props {
    description: Record<string, string>;
}

export default function RopaTallaVariant({ description }: Props) {
    return <div className="h-6 w-6 text-center">{description.size}</div>;
}
