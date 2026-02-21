import { Header } from "./components/Header";
import { Salutation } from "./components/Salutation";
import { Information } from "./components/Information";
import { QuickFacts } from "./components/QuickFacts";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { Reservation } from "./components/Reservation";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Salutation />
      <Information />
      <QuickFacts />
      <Location />
      <Reviews />
      <Reservation />
      <ContactForm />
      <Footer />
    </main>
  );
}
