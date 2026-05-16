import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';
import ItemType from './ItemType';
import { VARIANT_TYPES } from './variantConfig';
import VariantFieldInput from './VariantField';

interface CardVariantProps {
    selectedType: string;
    usedTypes: string[];
    onTypeChange: (type: string) => void;
    onRemove: () => void;
}

export default function CardVariant({ selectedType, usedTypes, onTypeChange, onRemove }: CardVariantProps) {
    console.log(selectedType);
    console.log(usedTypes);

    const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
    const config = VARIANT_TYPES[selectedType] ?? null;

    const handleTypeChange = (type: string) => {
        onTypeChange(type);
        setFieldValues({});
    };

    const handleFieldChange = (key: string, value: string) => {
        setFieldValues((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white px-3 pb-3 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            {/* Header */}
            <div className="flex w-full items-center justify-between py-2">
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{config?.label ?? 'New variant'}</p>
                <X size={16} onClick={onRemove} className="cursor-pointer text-gray-400 transition-colors hover:text-red-500" />
            </div>
            <div className="md:flex md:items-center md:justify-around md:gap-2">
                {/* Selector de tipo */}
                <div className="mb-3">
                    <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Variant type</label>
                    <select
                        value={selectedType}
                        onChange={(e) => handleTypeChange(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 shadow-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    >
                        <option value="" disabled>
                            Choose a variant type...
                        </option>
                        {Object.entries(VARIANT_TYPES).map(([key, val]) => (
                            <option
                                key={key}
                                value={key}
                                // Lo deshabilita si ya está en uso, pero no si es el que tiene esta card
                                disabled={usedTypes.includes(key) && key !== selectedType}
                            >
                                {val.label} {usedTypes.includes(key) && key !== selectedType ? '(already added)' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Campos dinámicos */}
                {config && (
                    <div className="md:flex md:gap-2">
                        {config.fields.map((field) => (
                            <VariantFieldInput
                                key={field.key}
                                fieldKey={field.key}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                options={field.options}
                                value={fieldValues[field.key] ?? ''}
                                onChange={handleFieldChange}
                            />
                        ))}
                    </div>
                )}
                {config && (
                    <Button type="button" className="my-4 hover:cursor-pointer">
                        Add
                    </Button>
                )}
            </div>
            <ItemType />
        </div>
    );
}
