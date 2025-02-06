import Footer from "../components/Footer";
import GreenTopBar from "../components/GreenTopBar";
import Navbar from "../components/Navbar";
import ShopMain from "../components/ShopMain";
import Company from "../components/Company";
import ShopProducts from "../components/ShopProducts";
export default function HomePage() {
    return (
        <div>
            <GreenTopBar />
            <Navbar />

             <div>
                <ShopMain />
            </div> 
            <div>
                <Company />
            </div> 
            <div>
                <ShopProducts />
            </div> 
            <div>
                <Footer />
            </div>
        </div>
    );
}