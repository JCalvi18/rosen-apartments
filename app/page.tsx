import { Header } from "./components/Header";
import { Salutation } from "./components/Salutation";
import { Information } from "./components/Information";
import { Reservation } from "./components/Reservation";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Salutation />
      <Information />
      <Reservation />
      <ContactForm />
      <Footer />
    </main>
  );
}
