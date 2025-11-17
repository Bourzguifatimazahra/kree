# KREE - Plateforme de Location de Voiture

Une plateforme moderne de location de voiture qui révolutionne l'expérience de location en mettant en relation voyageurs et agences de location.

## 🚗 À propos du projet

KREE est une application web full-stack qui permet aux voyageurs de trouver et réserver des voitures auprès d'agences partenaires. La plateforme offre une transparence totale, des prix compétitifs et une expérience utilisateur fluide.

## ✨ Fonctionnalités principales

### Pour les Voyageurs
- 🔐 Authentification sécurisée (inscription/connexion)
- 📝 Création et gestion de réservations
- ⭐ Système d'avis et notation des agences
- 📊 Tableau de bord personnalisé
- 🔄 Suivi en temps réel des réservations
- 🔒 Réinitialisation de mot de passe

### Pour les Agences
- 🏢 Compte agence dédié
- 📋 Gestion des réservations
- 💬 Interaction avec les clients
- 📈 Statistiques et performances

### Fonctionnalités Générales
- 🎨 Interface moderne et responsive
- ✨ Animations fluides avec Framer Motion
- 🌙 Design élégant avec système de tokens
- 📱 Compatible mobile, tablette et desktop
- 🔄 Chargement progressif avec composants Loading

## 🛠️ Technologies utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes

### Backend 
- **Supabase** - Backend as a Service
- **PostgreSQL** - Base de données
- **Row Level Security** - Sécurité des données
- **Supabase Auth** - Authentification

### État et Requêtes
- **TanStack Query** - Gestion des données serveur
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation de schémas

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (shadcn)
│   ├── Benefits.tsx    # Section avantages
│   ├── CTA.tsx         # Call-to-action
│   ├── Footer.tsx      # Pied de page
│   ├── Hero.tsx        # Section hero
│   ├── HowItWorks.tsx  # Section fonctionnement
│   ├── Loading.tsx     # Composant de chargement
│   └── Navbar.tsx      # Barre de navigation
├── pages/              # Pages de l'application
│   ├── About.tsx       # Page à propos
│   ├── Auth.tsx        # Page authentification
│   ├── Dashboard.tsx   # Tableau de bord
│   ├── ForgotPassword.tsx # Réinitialisation mot de passe
│   ├── ForTravelers.tsx   # Page voyageurs
│   ├── Index.tsx       # Page d'accueil
│   └── NotFound.tsx    # Page 404
├── hooks/              # Hooks personnalisés
│   ├── useAuth.tsx     # Hook d'authentification
│   ├── use-mobile.tsx  # Hook détection mobile
│   └── use-toast.ts    # Hook notifications
├── integrations/       # Intégrations externes
│   └── supabase/       # Configuration Supabase
├── lib/                # Utilitaires
│   └── utils.ts        # Fonctions utilitaires
├── App.tsx             # Composant principal
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux et tokens
```

## 🗄️ Schéma de base de données

### Tables principales

**profiles**
- `id` (UUID) - ID utilisateur
- `full_name` (TEXT) - Nom complet
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**user_roles**
- `id` (UUID)
- `user_id` (UUID) - Référence utilisateur
- `role` (TEXT) - 'user' ou 'agency'
- `created_at` (TIMESTAMP)

**agencies**
- `id` (UUID)
- `user_id` (UUID) - Référence utilisateur
- `agency_name` (TEXT) - Nom de l'agence
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**bookings**
- `id` (UUID)
- `user_id` (UUID) - Référence utilisateur
- `agency_id` (UUID) - Référence agence
- `car_category` (TEXT)
- `proposed_price` (NUMERIC)
- `final_price` (NUMERIC)
- `status` (TEXT) - 'pending', 'confirmed', 'cancelled'
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**reviews**
- `id` (UUID)
- `user_id` (UUID) - Référence utilisateur
- `agency_id` (UUID) - Référence agence
- `rating` (INTEGER) - Note sur 5
- `comment` (TEXT)
- `created_at` (TIMESTAMP)

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ et npm
 
### Installation locale

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Naviguer dans le dossier
cd <YOUR_PROJECT_NAME>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🔐 Variables d'environnement

 
```env
VITE_SUPABASE_URL=<auto-configured>
VITE_SUPABASE_PUBLISHABLE_KEY=<auto-configured>
VITE_SUPABASE_PROJECT_ID=<auto-configured>
```

⚠️ **Important** : Ne modifiez pas le fichier `.env` manuellement, il est géré automatiquement.

## 📜 Scripts disponibles

```bash
# Démarrage en mode développement
npm run dev

# Build de production
npm run build

# Preview du build de production
npm run preview

# Linting
npm run lint
```

## 🎨 Système de design

Le projet utilise un système de tokens CSS pour une cohérence visuelle :

### Tokens de couleurs
- `--primary` - Couleur principale
- `--secondary` - Couleur secondaire
- `--accent` - Couleur d'accent
- `--background` - Fond principal
- `--foreground` - Texte principal
- `--muted` / `--muted-foreground` - Éléments atténués

### Gradients
- `--gradient-hero` - Gradient principal
- `--gradient-warm` - Gradient chaleureux
- `--gradient-subtle` - Gradient subtil

### Ombres et effets
- `--shadow-soft` - Ombre douce
- `--shadow-glow` - Ombre lumineuse
- `--transition-smooth` - Transition fluide

## 🌐 Déploiement

 1. Ouvrir le projet 
2. Cliquer sur "Publish" en haut à droite
3. Cliquer sur "Update" pour déployer

### Domaine personnalisé
1. Aller dans Project > Settings > Domains
2. Cliquer sur "Connect Domain"
3. Suivre les instructions

 
## 🔒 Sécurité

- ✅ Row Level Security (RLS) activé sur toutes les tables
- ✅ Authentification sécurisée via Supabase Auth
- ✅ Validation des données avec Zod
- ✅ Protection CSRF intégrée
- ✅ Auto-confirmation d'email activée (développement)

## 📱 Responsive Design

L'application est entièrement responsive avec :
- 📱 Mobile first approach
- 💻 Adaptation tablette
- 🖥️ Version desktop optimisée
- 🎯 Breakpoints Tailwind standards

## 🤝 Contribution

 
1. Faire vos modifications localement
2. Commit et push sur GitHub
3. Les changements se synchronisent automatiquement 

## 📞 Support

- 
- 🎥 [Tutoriels vidéo](https://www.youtube.com/watch?v=9KHLTZaJcR8&list=PLbVHz4urQBZkJiAWdG8HWoJTdgEysigIO)

## 📄 Licence

Ce projet est développé 

---

**Project URL**: 

