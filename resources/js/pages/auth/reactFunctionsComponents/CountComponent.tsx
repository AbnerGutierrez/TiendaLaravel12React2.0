import { DatabaseBackup, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function CountComponent() {
    const [contador, setContador] = useState(0);
    return (
        <>
            {/* Efecto de luz superior */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            {/* Contenido Principal */}
            <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">UI Count Component </span>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <button
                                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-orange-600 to-orange-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-orange-500/10 transition-all duration-300 hover:cursor-pointer hover:shadow-orange-500/20 focus:ring-2 focus:ring-blue-500/40 focus:outline-none active:scale-[0.98]"
                                title="Agregar"
                                onClick={() => setContador(contador - 1)}
                            >
                                <span>
                                    <Minus size={16} />
                                </span>
                            </button>
                            <button
                                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:cursor-pointer hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500/40 focus:outline-none active:scale-[0.98]"
                                title="Agregar"
                                onClick={() => setContador(contador + 1)}
                            >
                                <span>
                                    <Plus size={16} />
                                </span>
                            </button>
                        </div>
                        <button
                            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-yellow-600 to-yellow-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:cursor-pointer hover:shadow-yellow-500/20 focus:ring-2 focus:ring-yellow-500/40 focus:outline-none active:scale-[0.98]"
                            title="Agregar"
                            onClick={() => setContador(0)}
                        >
                            <span>
                                <DatabaseBackup size={16} />
                            </span>
                        </button>
                    </div>

                    {/* Visualización del contador */}
                    <div className="flex h-10 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 font-mono text-lg font-bold text-blue-400 shadow-inner">
                        {contador}
                    </div>
                </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="flex items-center justify-between border-t border-zinc-900/50 pt-4">
                <p className="text-sm font-medium text-zinc-400">Contador con React</p>
                <span className="rounded-md border border-zinc-800/50 bg-zinc-900 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-zinc-500">
                    v1.0.0
                </span>
            </div>
        </>
    );
}
