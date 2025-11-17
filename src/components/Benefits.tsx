import { Users, Building2, TrendingUp, Shield, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const travelerBenefits = [
  {
    icon: TrendingUp,
    title: "Économies jusqu'à 30%",
    description: "Obtenez des prix compétitifs grâce aux enchères entre agences",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description: "Aucun frais caché, prix clairs et contrats digitaux sécurisés",
  },
  {
    icon: Clock,
    title: "Réponse rapide",
    description: "Recevez des offres en quelques minutes, réservez instantanément",
  },
];

const agencyBenefits = [
  {
    icon: Users,
    title: "Plus de clients directs",
    description: "Accédez à des milliers de voyageurs sans intermédiaires coûteux",
  },
  {
    icon: TrendingUp,
    title: "+40% d'occupation",
    description: "Optimisez votre flotte et maximisez vos revenus",
  },
  {
    icon: Award,
    title: "Visibilité accrue",
    description: "Développez votre réputation avec notre système d'évaluation",
  },
];

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Un écosystème{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              gagnant-gagnant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            KREE crée de la valeur pour tous les acteurs du marché
          </p>
        </div>

        <Tabs defaultValue="travelers" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
            <TabsTrigger value="travelers" className="text-lg">
              <Users className="w-5 h-5 mr-2" />
              Pour les Voyageurs
            </TabsTrigger>
            <TabsTrigger value="agencies" className="text-lg">
              <Building2 className="w-5 h-5 mr-2" />
              Pour les Agences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="travelers" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {travelerBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-smooth">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="agencies" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {agencyBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-smooth">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 text-secondary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Benefits;
