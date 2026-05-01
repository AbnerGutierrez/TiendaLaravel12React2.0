import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: route('admin.users'),
    },
    {
        title: 'Edit',
        href: '',
    },
];

interface Rol {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    roles: Rol[];
}

interface Props {
    user: User;
}

export default function EditUser({ user }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        rol: user.roles[0]?.name || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        put(route('admin.users.update', user.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 rounded-xl border p-6 md:min-h-min">
                    <div className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
                        <h1 className="mb-6 text-2xl font-bold">Editar usuario</h1>

                        <form onSubmit={submit} className="space-y-5">
                            {/* Nombre */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">Nombre</label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                                    placeholder="Nombre del usuario"
                                />

                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            {/* Correo */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">Correo electrónico</label>

                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                                    placeholder="correo@ejemplo.com"
                                />

                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            {/* Rol */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">Rol</label>

                                <select
                                    value={data.rol}
                                    onChange={(e) => setData('rol', e.target.value)}
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                                >
                                    <option className="dark:bg-gray-900 dark:text-white" value="">
                                        Selecciona un rol
                                    </option>
                                    <option className="dark:bg-gray-900 dark:text-white" value="admin">
                                        Administrador
                                    </option>
                                    <option className="dark:bg-gray-900 dark:text-white" value="user">
                                        Usuario
                                    </option>
                                </select>

                                {errors.rol && <p className="mt-1 text-sm text-red-500">{errors.rol}</p>}
                            </div>

                            {/* Botones */}
                            <div className="flex items-center justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {processing ? 'Actualizando...' : 'Actualizar usuario'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
