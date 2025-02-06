import SecondFooter from "../components/SecondFooter";
import SecondNavbar from "../components/SecondNavbar";
import TeamSection from "../components/TeamSection";

export default function HomePage() {
    return (
        <div>
            <SecondNavbar />
            
            <div>
                <TeamSection />
            </div>
            <div>
                <SecondFooter />
            </div>
        </div>
    );
}
