import SecondFooter from "../components/SecondFooter";
import SecondNavbar from "../components/SecondNavbar";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
    return (
        <div>
            <SecondNavbar />
            
            <div>
                <ContactSection />
            </div>
            <div>
                <SecondFooter />
            </div>
        </div>
    );
}