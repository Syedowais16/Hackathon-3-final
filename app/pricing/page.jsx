import SecondFooter from "../components/SecondFooter";
import SecondNavbar from "../components/SecondNavbar";
import Pricing from "../components/Pricing";

export default function HomePage() {
    return (
        <div>
            <SecondNavbar />
            
            <div>
                <Pricing />
            </div>
            <div>
                <SecondFooter />
            </div>
        </div>
    );
}