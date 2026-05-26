interface Props {
    description: Record<string, string>;
}

export default function ColorVariant({ description }: Props) {
    return (
        <div
            className="h-6 w-6 rounded-full border border-white/20"
            style={{
                backgroundColor: description.hex,
            }}
        />
    );
}
