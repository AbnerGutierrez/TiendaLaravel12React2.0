export type FieldType = 'text' | 'color' | 'select' | 'number' | 'image';

export interface VariantField {
    key: string;
    label: string;
    type: FieldType;
    stock?: string;
    placeholder?: string;
    options?: string[]; // para type: 'select'
}

export interface VariantTypeConfig {
    label: string;
    fields: VariantField[];
}

export const VARIANT_TYPES: Record<string, VariantTypeConfig> = {
    color: {
        label: 'Colors',
        fields: [
            { key: 'name', label: 'Color name', type: 'text', placeholder: 'e.g. Ocean Blue' },
            { key: 'hex', label: 'Color', type: 'color' },
        ],
    },
    size_clothing: {
        label: 'Tallas',
        fields: [
            {
                key: 'size',
                label: 'Size',
                type: 'select',
                options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            },
        ],
    },
    size_dimensions: {
        label: 'Sizes',
        fields: [
            { key: 'width', label: 'Width (cm)', type: 'number', placeholder: '0' },
            { key: 'height', label: 'Height (cm)', type: 'number', placeholder: '0' },
        ],
    },
    design: {
        label: 'Designs',
        fields: [
            { key: 'title', label: 'Design title', type: 'text', placeholder: 'e.g. Dragon print' },
            { key: 'image', label: 'Design image', type: 'image' },
        ],
    },
};
