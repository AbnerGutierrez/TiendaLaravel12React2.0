import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="w-full max-w-[335px] lg:max-w-4xl lg:flex-row">
                        <section className="bg-white dark:bg-[#0a0a0a]">
                            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                        Bienvenido a lunadev.mx
                                    </h1>
                                    <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                                        Esta página está desarrollada con las siguientes tecnologías: Laravel, React y SQLite.{' '}
                                    </p>
                                    <Link
                                        href={route('login')}
                                        className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
                                    >
                                        Log in
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        Register
                                    </Link>
                                </div>
                                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-[#0a0a0a]">
                            <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
                                <div className="order-2 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                        Estamos navegando por internet
                                    </h2>

                                    <p className="mb-6">
                                        Si estás viendo esta página web, significa que tu dispositivo logró conectarse a internet y establecer
                                        comunicación con un servidor remoto que contiene toda la información necesaria para mostrar este contenido en
                                        tu navegador.
                                    </p>

                                    <p className="mb-6">
                                        Aunque normalmente esto ocurre en cuestión de milisegundos y parece algo simple, detrás de cada página web
                                        existen múltiples procesos trabajando al mismo tiempo para que todo funcione correctamente.
                                    </p>
                                </div>
                                <div className="order-1 mt-8 grid grid-cols-2 gap-4">
                                    <img
                                        className="w-full rounded-lg"
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                                        alt="office content 1"
                                    />
                                    <img
                                        className="mt-4 w-full rounded-lg lg:mt-10"
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                                        alt="office content 2"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-[#0a0a0a]">
                            <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                                <img
                                    className="order-2 w-full dark:hidden"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                                    alt="dashboard image"
                                />
                                <img
                                    className="order-2 hidden w-full dark:block"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                                    alt="dashboard image"
                                />
                                <div className="order-1 mt-4 md:mt-0">
                                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                        Comienza a navegar por lunadev.mx
                                    </h2>
                                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                        Esta página web cuenta con diferentes secciones y herramientas que pueden interesarte. Para disfrutar de todas
                                        las funciones y acceder a una experiencia completa, inicia sesión o crea una cuenta de manera gratuita.
                                    </p>
                                    <div className="flex flex-col">
                                        <Link
                                            href={route('loginGuest')}
                                            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:ring-4"
                                        >
                                            Navegar como invitado
                                            <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:ring-4"
                                        >
                                            Iniciar sesión
                                            <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:ring-4"
                                        >
                                            Registrate
                                            <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
