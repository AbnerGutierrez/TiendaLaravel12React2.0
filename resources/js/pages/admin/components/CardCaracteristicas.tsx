import { ImagePlus, Sparkles, X } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

interface Props {
    caracteristica: { id: number; titulo: string; descripcion: string; imagen: any };
    onRemove: () => void;
    onUpdate: (key: string, value: any) => void;
}

export default function CardCaracteristicas({ caracteristica, onRemove, onUpdate }: Props) {
    const [preview, setPreview] = useState<string | undefined>(undefined);
    const [isDragging, setIsDragging] = useState(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            onUpdate('imagen', file);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            onUpdate('imagen', file);
        }
    };

    return (
        <div className="group relative flex w-64 flex-col gap-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] dark:border-slate-700/50 dark:bg-[#0f1623] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-linear-to-r from-indigo-400 via-violet-500 to-purple-500" />

            <div className="flex flex-col gap-4 p-5">
                {/* Header row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <Sparkles size={13} className="text-violet-400" />
                        <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">Característica</span>
                    </div>
                    <button
                        onClick={onRemove}
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500 dark:text-slate-500 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                        aria-label="Eliminar"
                    >
                        <X size={13} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Title input */}
                <input
                    type="text"
                    placeholder="Título de la característica"
                    value={caracteristica.titulo}
                    onChange={(e) => onUpdate('titulo', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
                />

                {/* Description textarea */}
                <textarea
                    placeholder="Describe esta característica..."
                    rows={3}
                    value={caracteristica.descripcion}
                    onChange={(e) => onUpdate('descripcion', e.target.value)}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 transition-all duration-200 outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
                />

                {/* Image upload zone */}
                <label
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed transition-all duration-200 ${
                        isDragging
                            ? 'scale-[0.99] border-violet-400 bg-violet-50 dark:bg-violet-900/20'
                            : 'border-slate-200 hover:border-violet-400 hover:bg-violet-50/50 dark:border-slate-700 dark:hover:border-violet-500 dark:hover:bg-violet-900/10'
                    } ${preview ? 'h-36 border-0 p-0' : 'gap-2 p-5'} `}
                >
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />

                    {preview ? (
                        <>
                            <img src={preview} alt="Vista previa" className="h-full w-full object-cover" />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/50 opacity-0 transition-opacity duration-200 hover:opacity-100">
                                <ImagePlus size={20} className="text-white" />
                                <span className="text-xs font-medium text-white">Cambiar imagen</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-100 to-violet-100 text-violet-500 dark:from-indigo-900/40 dark:to-violet-900/40 dark:text-violet-400">
                                <ImagePlus size={17} strokeWidth={2} />
                            </div>
                            <div className="text-center">
                                <span className="block text-xs font-semibold text-slate-600 dark:text-slate-300">Agregar imagen</span>
                                <span className="mt-0.5 block text-[11px] text-slate-400 dark:text-slate-500">PNG, JPG · Arrastra o haz clic</span>
                            </div>
                        </>
                    )}
                </label>
            </div>
        </div>
    );
}
