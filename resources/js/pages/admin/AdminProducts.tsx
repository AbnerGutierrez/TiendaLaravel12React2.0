import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Edit, Eye, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products admin ',
        href: 'admin/products',
    },
];

export default function AdminProducts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-screen flex-1 rounded-xl border p-2 md:min-h-min">
                    <div className="bg-neutral-primary-soft rounded-base border-default relative overflow-x-auto p-2">
                        <Link
                            href={route('admin.products.add')}
                            className="mx-4 rounded bg-blue-500 px-2 py-1 font-bold text-white hover:cursor-pointer hover:bg-blue-700"
                            title="Eliminar invitados"
                        >
                            Add product
                        </Link>

                        <table className="text-body w-full text-left text-sm rtl:text-right">
                            <thead className="text-body bg-neutral-secondary-soft rounded-base border-default border-b text-center text-sm">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        ID product
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        price
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        stock
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-neutral-primary border-default border-b text-center">
                                    <th scope="row" className="text-heading px-6 py-4 font-medium whitespace-nowrap">
                                        ID
                                    </th>
                                    <td className="px-6 py-4">NOPMBRE</td>
                                    <td className="px-6 py-4">PRICE</td>
                                    <td className="px-6 py-4">PRICE</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-1">
                                            <Link
                                                href=""
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
