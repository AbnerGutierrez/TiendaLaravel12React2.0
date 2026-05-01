import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Zap } from 'lucide-react';

export function SimuladorChart() {
    const [data, setData] = useState<{ id: number; val: number }[]>([]);
    const [lastChange, setLastChange] = useState({ value: 0, percentage: '0%' });

    useEffect(() => {
        // 1. Generar 12 puntos iniciales (ej. meses o horas)
        const initial = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            val: Math.floor(Math.random() * 80) + 20, // Valores entre 20 y 100
        }));
        setData(initial);

        // Actualizar datos cada 3 segundos
        const interval = setInterval(() => {
            setData((prev) => {
                const lastPoint = prev[prev.length - 1];
                const nextVal = Math.floor(Math.random() * 80) + 20;

                // Calcular diferencia para el indicador de arriba
                const diff = nextVal - lastPoint.val;
                const pct = ((diff / lastPoint.val) * 100).toFixed(1);
                setLastChange({
                    value: diff,
                    percentage: `${diff > 0 ? '+' : ''}${pct}%`,
                });

                // Añadir nuevo punto y quitar el primero
                return [...prev.slice(1), { id: lastPoint.id + 1, val: nextVal }];
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // El último valor para mostrar en grande
    const currentMainValue = data.length > 0 ? data[data.length - 1].val : 0;
    const colorPink = '#ec4899'; // rosa-500 de Tailwind (idéntico a tu foto)

    return (
        <div className="bg-card text-card-foreground border-border flex h-full flex-col rounded-2xl border p-5 shadow-sm">
            {/* CABECERA DE LA TARJETA (Como tu foto) */}
            <div className="mb-4 flex items-start gap-4">
                {/* Icono Rosa */}
                <div className="flex-shrink-0 rounded-full bg-pink-100 p-2.5 dark:bg-pink-950">
                    <Zap className="size-6 text-pink-500" />
                </div>

                <div>
                    <div className="flex items-baseline gap-2">
                        {/* Número Grande */}
                        <span className="text-foreground text-4xl font-bold tracking-tight">{currentMainValue.toFixed(1)}</span>

                        {/* Indicador de Porcentaje (Rojo si baja, Verde si sube) */}
                        <span
                            className={`rounded px-2 py-0.5 text-xs font-semibold ${
                                lastChange.value >= 0
                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
                                    : 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400'
                            }`}
                        >
                            {lastChange.percentage}
                        </span>
                    </div>
                    {/* Texto secundario */}
                    <p className="text-muted-foreground mt-1 text-sm">Nuevas Sesiones</p>
                </div>
            </div>

            {/* GRÁFICA DE BARRAS (Debajo, estilo 'sparkline') */}
            <div className="-mb-2 min-h-[60px] flex-1">
                {' '}
                {/* Margen negativo para pegarla al borde */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        {/* Ocultamos ejes para estética minimalista */}
                        <XAxis dataKey="id" hide={true} />
                        <YAxis hide={true} domain={[0, 100]} />

                        <Tooltip
                            cursor={{ fill: 'rgba(236, 72, 153, 0.1)' }} // Hover rosado muy suave
                            contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px', padding: '8px' }}
                            labelFormatter={() => 'Sesiones'}
                        />

                        <Bar
                            dataKey="val"
                            fill={colorPink}
                            radius={[4, 4, 0, 0]} // Barras redondeadas arriba
                            isAnimationActive={true}
                            animationDuration={500}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
