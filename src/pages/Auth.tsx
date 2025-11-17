import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Car } from 'lucide-react';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Connexion réussie!');
      navigate('/dashboard');
    }
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const isAgency = formData.get('userType') === 'agency';

    const { error } = await signUp(email, password, fullName, isAgency);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Inscription réussie! Bienvenue sur KREE.');
      navigate('/dashboard');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-white">KREE</h1>
          </div>
          <p className="text-white/80">Révolutionnez votre location de voiture</p>
        </div>

        <Card className="border-white/20 bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Bienvenue</CardTitle>
            <CardDescription className="text-white/70">
              Connectez-vous ou créez votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="signup">Inscription</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="vous@exemple.com"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-white">Mot de passe</Label>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      required
                      className="bg-white/20 border-white/30 text-white"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="text-white/70 hover:text-white p-0"
                    onClick={() => navigate('/forgot-password')}
                  >
                    Mot de passe oublié ?
                  </Button>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Connexion...' : 'Se connecter'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-white">Nom complet</Label>
                    <Input
                      id="signup-name"
                      name="fullName"
                      type="text"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">Mot de passe</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      required
                      className="bg-white/20 border-white/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="userType" className="text-white">Type de compte</Label>
                    <select
                      id="userType"
                      name="userType"
                      className="w-full bg-white/20 border border-white/30 text-white rounded-md p-2"
                      defaultValue="user"
                    >
                      <option value="user" className="text-gray-900">Voyageur</option>
                      <option value="agency" className="text-gray-900">Agence</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Inscription...' : "S'inscrire"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button variant="link" className="text-white/70 hover:text-white" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
