import { DollarSign, Users, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: DollarSign,
    title: "Proposez votre prix",
    description: "Choisissez vos dates, le type de véhicule et proposez le prix que vous êtes prêt à payer.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Les agences soumettent",
    description: "Les agences partenaires reçoivent votre demande et vous proposent leurs meilleures offres compétitives.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: CheckCircle,
    title: "Sélectionnez l'offre idéale",
    description: "Comparez les offres et choisissez celle qui correspond parfaitement à vos besoins et votre budget.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    description: "Transaction 100% sécurisée avec contrat digital, signature électronique et suivi en temps réel.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça <span className="bg-gradient-hero bg-clip-text text-transparent">fonctionne</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            4 étapes simples pour révolutionner votre expérience de location de voiture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative border-2 hover:shadow-glow transition-smooth group h-full">
                <CardContent className="p-6">
                  <div className={`${step.bgColor} ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
