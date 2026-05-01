import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayoutProps({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const { flash } = usePage().props as any;

    const [showSuccess, setShowSuccess] = useState(true);
    const [showError, setShowError] = useState(true);

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);

            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash?.success]);

    useEffect(() => {
        if (flash?.error) {
            setShowError(true);

            const timer = setTimeout(() => {
                setShowError(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash?.error]);

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {flash?.error && showError && <div className="mb-4 rounded bg-red-100 p-3 text-red-800">{flash.error}</div>}

            {flash?.success && showSuccess && <div className="mb-4 rounded bg-green-100 p-3 text-green-800">{flash.success}</div>}

            {children}
        </AppLayoutTemplate>
    );
}
