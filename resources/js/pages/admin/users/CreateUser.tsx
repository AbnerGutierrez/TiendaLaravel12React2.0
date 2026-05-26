import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';

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

interface roles {
    id: number;
    name: string;
}

interface rolesProp {
    roles: roles[];
}

export default function CreateUser({ roles }: rolesProp) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 rounded-xl border p-6 md:min-h-min">
                    <div className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
                        <h1 className="mb-6 text-2xl font-bold">Agregar usuario</h1>

                        <Form action={route('admin.userCreate')} method="POST" className="space-y-5">
                            {({ errors, processing, wasSuccessful }) => (
                                <>
                                    {/* Nombre */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium">Nombre</label>

                                        <input
                                            type="text"
                                            name="nombre"
                                            className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                                            placeholder="Nombre del usuario"
                                            required
                                        />
                                        {errors.nombre && <div>{errors.nombre}</div>}
                                    </div>

                                    {/* Correo */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium">Correo electrónico</label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>

                                    {/* Rol */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium">Rol</label>
                                        <select
                                            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 shadow-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                                            name="tipo_usuario"
                                        >
                                            <option value="" selected disabled>
                                                Selecciona una opcion
                                            </option>
                                            {roles.map((rol) => (
                                                <option key={rol.id} value={rol.id}>
                                                    {rol.name}
                                                </option>
                                            ))}
                                        </select>
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
                                            {processing ? 'Creando...' : 'Crear'}
                                        </button>
                                    </div>
                                    {wasSuccessful && <div>User created successfully!</div>}
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
