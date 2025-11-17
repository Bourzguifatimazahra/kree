import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Révolutionner la location de voitures au Maroc en éliminant l\'opacité des prix et en instaurant la confiance.',
    },
    {
      icon: Users,
      title: 'Pour Tous',
      description: 'Connecter voyageurs et agences dans un écosystème gagnant-gagnant basé sur la transparence.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Offrir des solutions de mobilité de haute qualité, abordables et transparentes.',
    },
    {
      icon: Globe,
      title: 'Vision 2030',
      description: 'Devenir la principale plateforme de mobilité en Afrique du Nord.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              À propos de <span className="text-primary">KREE</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              La première plateforme marocaine "Nommez votre prix" pour la location de voitures
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  KREE est né d'une vision simple mais puissante : transformer le secteur de la location de voitures au Maroc en plaçant la transparence et la confiance au cœur de chaque transaction.
                </p>
                <p>
                  Nous avons constaté que les voyageurs faisaient face à des prix opaques et à des frais cachés, tandis que les agences de location peinaient à optimiser leur taux d'occupation et dépendaient trop des intermédiaires coûteux.
                </p>
                <p>
                  Notre solution ? La première plateforme "Nommez votre prix" du Maroc, créant un marché équitable où les voyageurs peuvent économiser jusqu'à 30% et les agences peuvent augmenter leur taux d'occupation jusqu'à 40%.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Grid */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Impact Section */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-5xl font-bold mb-2">30%</div>
                <div className="text-white/90">Économies pour les voyageurs</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">40%</div>
                <div className="text-white/90">Augmentation du taux d'occupation</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90">Transparence garantie</div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
