import { X } from 'lucide-react';
import { variantRegistry } from './variantRegistry';

interface Props {
    type: string;
    description: Record<string, string>;
    onRemove: () => void;
}

export default function SelectedVariant({ onRemove, type, description }: Props) {
    const variant = variantRegistry[type as keyof typeof variantRegistry];

    const VariantComponent = variant?.component;

    return (
        <div className="group relative flex aspect-square w-14 flex-col items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-linear-to-br from-white to-gray-100 p-2 shadow-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg dark:border-white/10 dark:from-[#172338] dark:via-[#1b2a44] dark:to-[#101826] dark:hover:border-cyan-400/30">
            {/* Glow */}
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500" />

            {/* Remove */}
            <button
                onClick={onRemove}
                type="button"
                className="absolute top-0.5 right-0.5 rounded-full text-gray-500 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
                <X size={12} />
            </button>

            {/* Dynamic Variant */}
            <div className="flex h-8 w-8 items-center justify-center">
                {VariantComponent ? (
                    <VariantComponent description={description} />
                ) : (
                    <span className="text-[10px] text-gray-700 dark:text-white">?</span>
                )}
            </div>

            {/* Label */}
            {/* <p className="mt-1 text-[8px] capitalize text-gray-500 dark:text-gray-400">
                {variant?.label || type}
            </p> */}
        </div>
    );
}
