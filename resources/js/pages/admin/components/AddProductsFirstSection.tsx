export default function AddProductsFirSection({}) {
    return (
        <div className="flex flex-col gap-2">
            {/* Título */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="title-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title-id"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                />
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="description-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product description
                </label>
                <textarea
                    name="description"
                    id="description-id"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                />
            </div>

            {/* Precio y Stock */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="price-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price
                    </label>
                    <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400 dark:text-gray-500">$</span>
                        <input
                            type="number"
                            name="price"
                            id="price-id"
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                            className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-3 pl-7 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="stock-id" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        id="stock-id"
                        placeholder="0"
                        min="0"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                    />
                </div>
            </div>
        </div>
    );
}
