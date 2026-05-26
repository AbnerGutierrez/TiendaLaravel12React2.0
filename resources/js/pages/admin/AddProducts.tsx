import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AddProductsFirSection from './components/AddProductsFirstSection';
import VariantsProducts from './components/VariantsProducts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products admin',
        href: route('admin.products'),
    },
    {
        title: 'Add products',
        href: 'admin/products',
    },
];

export default function AddProduct() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Product" />
            <div className="mx-auto flex h-full w-full flex-1 flex-col gap-4 p-4 md:w-[75%] md:p-6">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 rounded-xl border">
                    <div className="p-6">
                        <h1 className="mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">Add New Product</h1>
                        <form className="space-y-6">
                            {/* Title, description, price and stock */}
                            <AddProductsFirSection />
                            {/* Variants */}
                            <VariantsProducts />
                            {/* Botones */}
                            <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
                                >
                                    Save product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
