import { Button } from "@/components/ui/button";
import { ArrowRight, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Location de voiture au Maroc" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20"
          >
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Première plateforme "Nommez votre prix" au Maroc
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Louez votre voiture{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              à votre prix
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Révolutionnez votre expérience de location. Proposez votre prix, 
            les agences marocaines se battent pour vous offrir la meilleure offre. 
            <span className="text-success font-semibold"> Économisez jusqu'à 30%</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="hero" className="text-lg px-8" onClick={() => navigate('/auth')}>
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('how-it-works')}>
              Comment ça marche
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
          >
            <div>
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">d'économies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">taux d'occupation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">transparent</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
