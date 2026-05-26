import { useState } from 'react';

interface option {
    value: number;
    description: string;
}

interface selecInfo {
    title: string;
    name: string;
    options: option[];
}

export default function Selectors({ name, options, title }: selecInfo) {
    const [opcion, setOpcion] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcion(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <label className="gb mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">{title}:</label>
            <select
                value={opcion}
                onChange={handleChange}
                name={name}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 shadow-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
            >
                <option value="" selected disabled>
                    Selecciona una opcion
                </option>
                {options.map((option, index) => (
                    <option value={option.value}>{option.description}</option>
                ))}
            </select>
        </>
    );
}
