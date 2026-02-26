import Navbar from "../components/landownerComponents/LandownerNav";

export default function LandOwnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="w-full px-4 md:px-8 py-6">
                {children}
            </main>
        </div>
    )
}