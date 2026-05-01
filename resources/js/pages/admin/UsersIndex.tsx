import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Trash } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
}
interface Props {
    users: User[];
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: 'admin/users',
    },
];

export default function UsersIndex({ users }: Props) {
    const handleDeleteGuests = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Confirmación para evitar eliminaciones accidentales
        if (confirm('¿Estás seguro de eliminar a todos los usuarios invitados? Esta acción no se puede deshacer.')) {
            // 2. Ejecutar la petición DELETE usando Inertia
            router.delete(route('admin.users.guest.delete'), {
                preserveScroll: true,
                onSuccess: () => {
                    // Aquí puedes disparar una notificación (ej. toast)
                },
                onError: (errors) => {
                    console.error('Error al eliminar invitados:', errors);
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border p-2 md:min-h-min">
                    <div className="bg-neutral-primary-soft rounded-base border-default relative overflow-x-auto p-2">
                        <form onSubmit={handleDeleteGuests}>
                            <button
                                type="submit"
                                className="mx-4 rounded bg-orange-500 px-2 py-1 font-bold text-white hover:cursor-pointer hover:bg-orange-700"
                                title="Eliminar invitados"
                            >
                                Eliminar invitados
                            </button>
                        </form>
                        <table className="text-body w-full text-left text-sm rtl:text-right">
                            <thead className="text-body bg-neutral-secondary-soft rounded-base border-default border-b text-center text-sm">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        ID User
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr className="bg-neutral-primary border-default border-b text-center" key={user.id}>
                                        <th scope="row" className="text-heading px-6 py-4 font-medium whitespace-nowrap">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">{user.name}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-1">
                                                <Link
                                                    href={route('admin.userDetails', user.id)}
                                                    className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:cursor-pointer hover:bg-blue-700"
                                                    title="Consultar"
                                                >
                                                    <Eye size={16} />
                                                </Link>
                                                <Link
                                                    href=""
                                                    className="rounded bg-orange-500 px-2 py-1 font-bold text-white hover:cursor-pointer hover:bg-orange-700"
                                                    title="Editar"
                                                >
                                                    <Edit size={16} />
                                                </Link>
                                                <Link
                                                    href=""
                                                    className="rounded bg-red-500 px-2 py-1 font-bold text-white hover:cursor-pointer hover:bg-red-700"
                                                    title="Eliminar"
                                                >
                                                    <Trash size={16} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
