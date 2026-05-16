import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CardVariant from './variantsExtras/CardVariant';

interface Variant {
    id: number;
    type: string;
    values: Record<string, string>;
}

export default function VariantsProducts({}) {
    const [variants, setVariants] = useState<Variant[]>([]);
    const usedTypes = variants.map((v) => v.type).filter(Boolean);

    const newVariant = () => {
        setVariants((preVariants) => [...preVariants, { id: Date.now(), type: '', values: {} }]);
    };

    const handleTypeChange = (id: number, type: string) => {
        setVariants((prev) => prev.map((v) => (v.id === id ? { ...v, type, values: {} } : v)));
    };

    const handleRemove = (id: number) => {
        setVariants((prev) => prev.filter((v) => v.id !== id));
    };

    return (
        <>
            <Button type="button" className="hover:cursor-pointer" onClick={newVariant}>
                Add variants
            </Button>

            <div className="flex flex-col gap-2">
                {variants.map((variant, indedx) => (
                    <CardVariant
                        key={variant.id}
                        selectedType={variant.type}
                        usedTypes={usedTypes}
                        onTypeChange={(type) => handleTypeChange(variant.id, type)}
                        onRemove={() => handleRemove(variant.id)}
                    />
                ))}
            </div>
        </>
    );
}
