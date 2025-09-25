export default function LayoutGuide() {
    return (
        <div className="fixed inset-0 w-full h-full grid grid-cols-12 gap-x-[2rem] px-[4rem]">
            {new Array(12).fill(null).map((_, index) => (
                <div key={`layout__guide__${index}`} className="bg-orange-500 opacity-25 w-[7.5rem]" />
            ))}
        </div>
    )
}