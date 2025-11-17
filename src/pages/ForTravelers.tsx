import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Shield, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function ForTravelers() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: DollarSign,
      title: 'Économisez jusqu\'à 30%',
      description: 'Proposez votre prix et recevez des offres compétitives des meilleures agences.',
    },
    {
      icon: Shield,
      title: 'Transparence totale',
      description: 'Pas de frais cachés. Ce que vous voyez est ce que vous payez.',
    },
    {
      icon: Clock,
      title: 'Réservation rapide',
      description: 'Processus simple en 4 étapes. Réservez votre voiture en quelques minutes.',
    },
    {
      icon: Star,
      title: 'Agences vérifiées',
      description: 'Toutes nos agences partenaires sont vérifiées et notées par nos utilisateurs.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Proposez votre prix',
      description: 'Indiquez vos dates, le type de voiture et le prix que vous souhaitez payer.',
    },
    {
      number: '02',
      title: 'Recevez des offres',
      description: 'Les agences vous envoient leurs meilleures propositions en temps réel.',
    },
    {
      number: '03',
      title: 'Choisissez la meilleure',
      description: 'Comparez les offres et sélectionnez celle qui vous convient le mieux.',
    },
    {
      number: '04',
      title: 'Réservez en toute sécurité',
      description: 'Payez et signez le contrat directement dans l\'application KREE.',
    },
  ];

  const features = [
    'Paiement sécurisé en ligne',
    'Signature électronique du contrat',
    'Support client 24/7',
    'Assurance incluse',
    'Modification gratuite jusqu\'à 24h',
    'Programme de fidélité',
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Voyagez <span className="text-primary">malin</span>, voyagez avec KREE
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La première plateforme qui vous permet de nommer votre prix pour la location de voiture au Maroc
            </p>
            <Button size="lg" onClick={() => navigate('/auth')} className="group">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Pourquoi choisir KREE ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How it Works */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Comment ça marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="bg-card rounded-xl p-6 shadow-soft h-full">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Features List */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Tout ce dont vous avez besoin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à économiser sur votre prochaine location ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez des milliers de voyageurs qui ont déjà économisé avec KREE
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/auth')}
              className="group"
            >
              Créer mon compte gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
