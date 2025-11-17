import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Car, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    const { error } = await resetPassword(email);
    
    if (error) {
      toast.error(error.message);
    } else {
      setEmailSent(true);
      toast.success('Email de réinitialisation envoyé!');
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
          <p className="text-white/80">Réinitialisez votre mot de passe</p>
        </div>

        <Card className="border-white/20 bg-white/10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Mot de passe oublié</CardTitle>
            <CardDescription className="text-white/70">
              {emailSent 
                ? 'Vérifiez votre boîte email pour les instructions' 
                : 'Entrez votre email pour recevoir un lien de réinitialisation'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!emailSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Envoi...' : 'Envoyer le lien'}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-white">
                  Un email a été envoyé à votre adresse. Cliquez sur le lien pour réinitialiser votre mot de passe.
                </p>
                <Button onClick={() => navigate('/auth')} className="w-full">
                  Retour à la connexion
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button 
            variant="link" 
            className="text-white/70 hover:text-white" 
            onClick={() => navigate('/auth')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la connexion
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
