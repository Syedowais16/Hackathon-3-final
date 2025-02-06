import SecondFooter from "../components/SecondFooter";
import SecondNavbar from "../components/SecondNavbar";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
    return (
        <div>
            <SecondNavbar />
            
            <div>
                <AboutSection />
            </div>
            <div>
                <SecondFooter />
            </div>
        </div>
    );
}