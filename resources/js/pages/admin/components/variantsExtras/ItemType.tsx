export default function ItemType() {
    return (
        <div className="group flex aspect-square w-10 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-[#172338] p-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1b2a44]">
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            </div>

            <h3 className="text-[7px] leading-none font-medium text-white/90 transition-colors duration-300 group-hover:text-white">Color</h3>
        </div>
    );
}
