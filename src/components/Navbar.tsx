import { Button } from "@/components/ui/button";
import { Car, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">KREE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/#how-it-works')} className="text-sm font-medium hover:text-primary transition-smooth">
              Comment ça marche
            </button>
            <button onClick={() => navigate('/for-travelers')} className="text-sm font-medium hover:text-primary transition-smooth">
              Pour les voyageurs
            </button>
            <button onClick={() => navigate('/about')} className="text-sm font-medium hover:text-primary transition-smooth">
              À propos
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Button variant="hero" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/auth')}>Se connecter</Button>
                <Button variant="hero" onClick={() => navigate('/auth')}>S'inscrire</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => navigate('/#how-it-works')} className="text-sm font-medium hover:text-primary transition-smooth py-2 text-left">
                Comment ça marche
              </button>
              <button onClick={() => navigate('/for-travelers')} className="text-sm font-medium hover:text-primary transition-smooth py-2 text-left">
                Pour les voyageurs
              </button>
              <button onClick={() => navigate('/about')} className="text-sm font-medium hover:text-primary transition-smooth py-2 text-left">
                À propos
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {user ? (
                  <Button variant="hero" className="w-full" onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" className="w-full" onClick={() => navigate('/auth')}>Se connecter</Button>
                    <Button variant="hero" className="w-full" onClick={() => navigate('/auth')}>S'inscrire</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
