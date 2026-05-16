import { FieldType } from './variantConfig';

interface VariantFieldProps {
    fieldKey: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    options?: string[];
    value: string;
    onChange: (key: string, value: string) => void;
}
export default function VariantFieldInput({ fieldKey, label, type, placeholder, options, value, onChange }: VariantFieldProps) {
    const baseInput =
        'w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20';

    return (
        <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">{label}</label>

            {type === 'text' || type === 'number' ? (
                <input
                    type={type}
                    value={value}   
                    placeholder={placeholder}
                    onChange={(e) => onChange(fieldKey, e.target.value)}
                    className={baseInput}
                />
            ) : type === 'color' ? (
                <div className="flex items-center gap-1">
                    <input
                        type="color"
                        value={value || '#000000'}
                        onChange={(e) => onChange(fieldKey, e.target.value)}
                        className="h-10 w-10 cursor-pointer rounded-lg border border-gray-300 bg-transparent p-0.5 dark:border-neutral-700"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{value || '#000000'}</span>
                </div>
            ) : type === 'select' ? (
                <select value={value} onChange={(e) => onChange(fieldKey, e.target.value)} className={baseInput}>
                    <option value="" disabled>
                        Select...
                    </option>
                    {options?.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            ) : type === 'image' ? (
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange(fieldKey, e.target.files?.[0]?.name ?? '')}
                    className="text-sm text-gray-600 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-blue-600 hover:file:bg-blue-100 dark:text-gray-400 dark:file:bg-blue-900/30 dark:file:text-blue-400"
                />
            ) : null}

      
        </div>
    );
}
