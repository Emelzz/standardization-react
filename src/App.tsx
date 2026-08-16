import { TopBar } from './components/layout/TopBar/TopBar';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { BestsellerProducts } from './components/sections/BestsellerProducts/BestsellerProducts';
import { Services } from './components/sections/Services/Services';
import { FeaturedPosts } from './components/sections/FeaturedPosts/FeaturedPosts';
import { Testimonial } from './components/sections/Testimonial/Testimonial';
import { CtaBanner } from './components/sections/CtaBanner/CtaBanner';

function App() {
  return (
    <div className="page">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BestsellerProducts />
        <Services />
        <FeaturedPosts />
        <Testimonial />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
