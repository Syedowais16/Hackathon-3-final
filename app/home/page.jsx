// import HeroBanner from "../components/HeroBanner";
// import EditorsPick from "../components/EditorsPick";
// import FeaturedProducts from "../components/FeaturedProducts";
// import Footer from "../components/Footer";
// import TopBar from "../components/TopBar";
// import Navbar from "../components/Navbar";
// import VitaSection from "../components/VitaSection";
// import NeuralSection from "../components/NeuralSection";
// import FeaturedPosts from "../components/FeaturedPosts";
// export default function HomePage() {
//     return (
//         <div>
//             <TopBar />
//             <Navbar />

//             <div>
//                 <HeroBanner />
//             </div>
//             <div>
//                 <EditorsPick />
//             </div>
//             <div>
//                 <FeaturedProducts />
//             </div>
//             <div>
//                 <VitaSection />
//             </div>
//             <div>
//                 <NeuralSection />
//             </div>
//             <div>
//                 <FeaturedPosts />
//             </div>
//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// }

import HeroBanner from "../components/HeroBanner";
import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import VitaSection from "../components/VitaSection";
import NeuralSection from "../components/NeuralSection";
import FeaturedPosts from "../components/FeaturedPosts";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <TopBar />
            <Navbar />

            <div>
                <HeroBanner />
            </div>
            <div>
                <EditorsPick />
            </div>
            <div>
                <FeaturedProducts />
            </div>
            <div className="text-center my-6">
  <Link href="/products" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
    View All Products
  </Link>
</div>

            <div>
                <VitaSection />
            </div>
            <div>
                <NeuralSection />
            </div>
            <div>
                <FeaturedPosts />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
