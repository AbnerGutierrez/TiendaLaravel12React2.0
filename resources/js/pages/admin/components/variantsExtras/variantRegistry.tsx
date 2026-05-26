import ColorVariant from './renders/ColorVariant';
import ImagenVariant from './renders/ImageVariant';
import RopaTallaVariant from './renders/RopaTallaVariant';
import SizeVariant from './renders/SizeVariant';

export const variantRegistry = {
    color: {
        label: 'Color',
        component: ColorVariant,
    },
    size_clothing: {
        label: 'Talla',
        component: RopaTallaVariant,
    },
    design: {
        label: 'Diseño',
        component: ImagenVariant,
    },
    size_dimensions: {
        label: 'tamaño',
        component: SizeVariant,
    },
};
