import Selectors from '@/components/Selectors';
import { useEffect } from 'react';
import CardCaracteristicas from './CardCaracteristicas';

const tipos = [
    {
        value: 1,
        description: 'Ropa',
    },
    {
        value: 2,
        description: 'Electronicos',
    },
    {
        value: 3,
        description: 'Cocina',
    },
    {
        value: 4,
        description: 'Musica',
    },
];

interface caracteristicas {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
}

interface Propos {
    data: any;
    setData: (key: string | Function, value?: any) => void;
}

export default function AddProductsFirSection({ data, setData }: Propos) {
    useEffect(() => {
        if (data.caracteristicas.length === 0) {
            setData('caracteristicas', [{ id: Date.now(), titulo: '', descripcion: '', imagen: null }]);
        }
    }, []);
    // Agregar nueva característica vacía al estado de Inertia
    const handleNewCaracteristica = () => {
        setData('caracteristicas', [...data.caracteristicas, { id: Date.now(), titulo: '', descripcion: '', imagen: null }]);
    };

    // Eliminar característica del estado de Inertia
    const handleRemoveCaracteristica = (id: number) => {
        setData(
            'caracteristicas',
            data.caracteristicas.filter((v: any) => v.id !== id),
        );
    };

    // Modificar un campo específico de una característica específica
    const handleUpdateCaracteristica = (id: number, key: string, value: any) => {
        const updated = data.caracteristicas.map((item: any) => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
            return item;
        });
        setData('caracteristicas', updated);
    };

    return (
        <div className="flex flex-col gap-2">
            {/* Selector de tipo de producto */}
            <div className="mb-3">
                <Selectors
                    name="categoria_producto"
                    options={tipos}
                    title="Categoria"
                    value={data.categoria_producto} // Pasa el valor actual del formulario
                    onChange={(val) => setData('categoria_producto', val)} // Actualiza el formulario en el padre
                />
            </div>
            {/* Título */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="title-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product title
                </label>
                <input
                    type="text"
                    id="title-id"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                />
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="description-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product description
                </label>
                <textarea
                    value={data.description}
                    id="description-id"
                    onChange={(e) => setData('description', e.target.value)}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                />
            </div>

            {/* Caracteristicas */}
            <div className="flex items-center gap-1.5">
                <div>
                    <label htmlFor="" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Caracteristicas
                    </label>
                    <div className="grid w-full grid-cols-1 items-center gap-2 md:grid-cols-2 xl:grid-cols-3">
                        {data.caracteristicas?.map((caracteristica: any) => (
                            <CardCaracteristicas
                                key={caracteristica.id}
                                caracteristica={caracteristica}
                                onUpdate={(key, val) => handleUpdateCaracteristica(caracteristica.id, key, val)}
                                onRemove={() => handleRemoveCaracteristica(caracteristica.id)}
                            />
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white transition-colors hover:cursor-pointer hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                    onClick={handleNewCaracteristica}
                >
                    +
                </button>
            </div>

            {/* Precio y Stock */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="price-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price
                    </label>
                    <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400 dark:text-gray-500">$</span>
                        <input
                            type="number"
                            value={data.price}
                            id="price-id"
                            onChange={(e) => setData('price', e.target.value)}
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                            className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-3 pl-7 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="stock-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Stock
                    </label>
                    <input
                        type="number"
                        value={data.stock}
                        id="stock-id"
                        onChange={(e) => setData('stock', e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                    />
                </div>
            </div>
        </div>
    );
}
