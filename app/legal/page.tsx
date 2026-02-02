import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Legal() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Legal Notice</h1>
                <p>Content coming soon...</p>
            </main>
            <Footer />
        </div>
    );
}
