 # KREE - Plateforme de Location de Voiture
 
Une plateforme moderne de location de voiture qui révolutionne l'expérience de location en mettant en relation voyageurs et agences de location.

## 🚗 À propos du projet

KREE est une application web full-stack qui permet aux voyageurs de trouver et réserver des voitures auprès d'agences partenaires. La plateforme offre une transparence totale, des prix compétitifs et une expérience utilisateur fluide.

## ✨ Fonctionnalités principales

### Pour les Voyageurs
- 🔐 **Authentification sécurisée** (inscription/connexion)
- 📝 **Création et gestion de réservations**
- ⭐ **Système d'avis et notation** des agences
- 📊 **Tableau de bord personnalisé**
- 🔄 **Suivi en temps réel** des réservations
- 🔒 **Réinitialisation de mot de passe**
- 🗺️ **Recherche géolocalisée** des agences

### Pour les Agences
- 🏢 **Compte agence dédié**
- 📋 **Gestion des réservations**
- 💬 **Interaction avec les clients**
- 📈 **Statistiques et performances**
- 🚗 **Gestion du parc automobile**
- 💰 **Gestion des tarifs dynamiques**

### Fonctionnalités Générales
- 🎨 **Interface moderne et responsive**
- ✨ **Animations fluides** avec Framer Motion
- 🌙 **Design élégant** avec système de tokens
- 📱 **Compatible mobile, tablette et desktop**
- 🔄 **Chargement progressif** avec composants Loading
- 🔍 **Moteur de recherche avancé**
- 🌍 **Support multilingue**

## 🛠️ Stack Technologique

### Frontend
<p align="left">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-4.0-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-10.0-0055FF?logo=framer&logoColor=white" alt="Framer Motion">
</p>

### Backend & Infrastructure
<p align="left">
  <img src="https://img.shields.io/badge/Supabase-2.0-3ECF8E?logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Row_Level_Security-Enabled-green" alt="RLS">
</p>

### État & Gestion de Données
<p align="left">
  <img src="https://img.shields.io/badge/TanStack_Query-4.0-FF4154?logo=reactquery&logoColor=white" alt="TanStack Query">
  <img src="https://img.shields.io/badge/React_Hook_Form-7.0-EC5990?logo=reacthookform&logoColor=white" alt="React Hook Form">
  <img src="https://img.shields.io/badge/Zod-3.0-3E67B1?logo=zod&logoColor=white" alt="Zod">
</p>

### UI Components & Icons
<p align="left">
  <img src="https://img.shields.io/badge/shadcn/ui-0.5-000000?logo=ui&logoColor=white" alt="shadcn/ui">
  <img src="https://img.shields.io/badge/Lucide_React-0.2-FF6B35?logo=react&logoColor=white" alt="Lucide React">
</p>

## 📁 Architecture du Projet

```
src/
├── 📂 components/          # Composants réutilisables
│   ├── 📂 ui/             # Composants UI de base (shadcn)
│   ├── 📂 forms/          # Composants de formulaires
│   ├── 📂 layout/         # Composants de mise en page
│   ├── Benefits.tsx       # Section avantages
│   ├── CTA.tsx           # Call-to-action
│   ├── Footer.tsx        # Pied de page
│   ├── Hero.tsx          # Section hero
│   ├── HowItWorks.tsx    # Section fonctionnement
│   ├── Loading.tsx       # Composant de chargement
│   └── Navbar.tsx        # Barre de navigation
├── 📂 pages/              # Pages de l'application
│   ├── About.tsx         # Page à propos
│   ├── Auth.tsx          # Page authentification
│   ├── Dashboard.tsx     # Tableau de bord
│   ├── ForgotPassword.tsx # Réinitialisation mot de passe
│   ├── ForTravelers.tsx  # Page voyageurs
│   ├── Index.tsx         # Page d'accueil
│   └── NotFound.tsx      # Page 404
├── 📂 hooks/              # Hooks personnalisés
│   ├── useAuth.tsx       # Hook d'authentification
│   ├── use-mobile.tsx    # Hook détection mobile
│   ├── use-toast.ts      # Hook notifications
│   └── use-bookings.tsx  # Hook gestion réservations
├── 📂 integrations/       # Intégrations externes
│   └── 📂 supabase/      # Configuration Supabase
├── 📂 lib/               # Utilitaires et configurations
│   ├── utils.ts          # Fonctions utilitaires
│   ├── validations.ts    # Schémas de validation
│   └── constants.ts      # Constantes de l'application
├── 📂 types/             # Définitions TypeScript
│   ├── auth.ts          # Types authentification
│   ├── bookings.ts      # Types réservations
│   └── agencies.ts      # Types agences
├── App.tsx              # Composant principal
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux et tokens
```

## 🗄️ Schéma de Base de Données

### Tables Principales

**`profiles`**
```sql
- id (UUID, PK) - ID utilisateur
- full_name (TEXT) - Nom complet
- avatar_url (TEXT) - Photo de profil
- phone (TEXT) - Numéro de téléphone
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

**`user_roles`**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles.id)
- role (TEXT) - 'user' ou 'agency'
- created_at (TIMESTAMPTZ)
```

**`agencies`**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles.id)
- agency_name (TEXT) - Nom de l'agence
- description (TEXT) - Description agence
- address (TEXT) - Adresse physique
- city (TEXT) - Ville
- country (TEXT) - Pays
- logo_url (TEXT) - Logo agence
- phone (TEXT) - Contact téléphonique
- email (TEXT) - Email de contact
- is_verified (BOOLEAN) - Statut vérification
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

**`vehicles`**
```sql
- id (UUID, PK)
- agency_id (UUID, FK → agencies.id)
- brand (TEXT) - Marque
- model (TEXT) - Modèle
- year (INTEGER) - Année
- category (TEXT) - Catégorie (economy, comfort, premium)
- fuel_type (TEXT) - Type de carburant
- transmission (TEXT) - Transmission
- seats (INTEGER) - Nombre de places
- price_per_day (DECIMAL) - Prix journalier
- images (TEXT[]) - Galerie photos
- is_available (BOOLEAN) - Disponibilité
- features (TEXT[]) - Équipements
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

**`bookings`**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles.id)
- agency_id (UUID, FK → agencies.id)
- vehicle_id (UUID, FK → vehicles.id)
- start_date (DATE) - Date début
- end_date (DATE) - Date fin
- total_days (INTEGER) - Nombre de jours
- proposed_price (DECIMAL) - Prix proposé
- final_price (DECIMAL) - Prix final
- status (TEXT) - 'pending', 'confirmed', 'cancelled', 'completed'
- special_requests (TEXT) - Demandes spéciales
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

**`reviews`**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles.id)
- agency_id (UUID, FK → agencies.id)
- booking_id (UUID, FK → bookings.id)
- rating (INTEGER) - Note sur 5
- title (TEXT) - Titre de l'avis
- comment (TEXT) - Commentaire détaillé
- is_verified (BOOLEAN) - Avis vérifié
- created_at (TIMESTAMPTZ)
```

## 🚀 Installation & Démarrage

### Prérequis Système
- **Node.js** 18.0+ 
- **npm** 9.0+ ou **yarn** 1.22+
- **Git** 2.25+

### Installation Locale

```bash
# Cloner le repository
git clone https://github.com/Bourzguifatimazahra/kree

# Naviguer dans le dossier projet
cd kree 

# Installation des dépendances
npm install

# Configuration environnement (automatique)
cp .env.example .env

# Démarrage serveur développement
npm run dev
```

L'application sera accessible sur `[http://localhost:8080](http://localhost:8080/)`

### Scripts Disponibles

```bash
# Démarrage développement
npm run dev

# Build production
npm run build

# Preview build production
npm run preview

```

## 🔐 Configuration Environnement

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Application Settings
VITE_APP_NAME=KREE
VITE_APP_VERSION=1.0.0
VITE_API_TIMEOUT=10000
```

## 🎨 Système de Design

### Tokens CSS Personnalisés
```css
:root {
  /* Couleurs Primaires */
  --primary: 222 84% 45%;
  --primary-foreground: 0 0% 100%;
  
  /* Couleurs Secondaires */
  --secondary: 210 40% 98%;
  --secondary-foreground: 222 84% 45%;
  
  /* Accent & Background */
  --accent: 210 40% 96%;
  --accent-foreground: 222 84% 45%;
  --background: 0 0% 100%;
  --foreground: 222 84% 4%;
  
  /* Gradients Premium */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-warm: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-subtle: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  
  /* Ombres & Effets */
  --shadow-soft: 0 2px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px rgba(102, 126, 234, 0.15);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Typographie
- **Font Family**: Inter, system-ui, sans-serif
- **Scale**: Tailwind CSS typography scale
- **Weights**: 300, 400, 500, 600, 700

## 📱 Responsive Design

| Breakpoint | Usage | Container |
|------------|-------|-----------|
| `sm` 640px | Mobile | 100% |
| `md` 768px | Tablet | 100% |
| `lg` 1024px | Desktop | 1024px |
| `xl` 1280px | Large Desktop | 1280px |
| `2xl` 1536px | Extra Large | 1536px |

## 🔒 Sécurité & Conformité

### Mesures Implémentées
- ✅ **Row Level Security (RLS)** sur toutes les tables
- ✅ **Authentification JWT** avec refresh tokens
- ✅ **Validation des données** côté client et serveur
- ✅ **Protection CSRF** intégrée
- ✅ **Rate limiting** sur les endpoints critiques
- ✅ **Sanitization** des inputs utilisateur
- ✅ **HTTPS enforcement** en production

### Politiques RLS
```sql
-- Exemple de politique profiles
CREATE POLICY "Users can view own profile" ON profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
FOR UPDATE USING (auth.uid() = id);
```

## 🌐 Déploiement & CI/CD

### Déploiement Automatique
1. **Push sur main branch** → Déclenchement build
2. **Tests automatiques** → Validation qualité
3. **Build production** → Optimisation assets
4. **Déploiement** → Mise en ligne automatique

### Variables d'Environnement Production
```env
NODE_ENV=production
VITE_SUPABASE_URL=prod_url
VITE_SUPABASE_ANON_KEY=prod_key
VITE_APP_ENV=production
```

## 📊 Monitoring & Analytics

### Métriques Suivies
- ⚡ **Performance Core Web Vitals**
- 🔍 **Erreurs JavaScript**
- 👥 **Analytics utilisateurs**
- 📈 **Conversion réservations**
- 🐛 **Bugs et crashes**

## 🤝 Contribution

### Processus de Contribution
1. **Fork** du repository
2. **Feature branch** : `git checkout -b feature/AmazingFeature`
3. **Commit changes** : `git commit -m 'Add AmazingFeature'`
4. **Push branch** : `git push origin feature/AmazingFeature`
5. **Pull Request**

### Standards de Code
- **ESLint** + **Prettier** pour la qualité
- **Conventional Commits** pour les messages
- **Tests unitaires** pour les nouvelles fonctionnalités
- **Review code** obligatoire

## 📞 Support & Documentation

### Ressources
- 📚 **[Documentation Technique](https://docs.kree.com)** - Guide détaillé
- 🎥 **[Tutoriels Vidéo](https://youtube.com/kree)** - Guides visuels
- 💬 **[Discord Community](https://discord.gg/kree)** - Support communautaire
- 🐛 **[Issue Tracker](https://github.com/kree/issues)** - Rapports de bugs

### Support Commercial
- 📧 **Email** : bourzguifatimazahra@gmail.com

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

<div align="center">

**Développé avec ❤️ par l'équipe Bourzgui Fatima zahra**

[![Website](https://img.shields.io/badge/Website-KREE-blue)]([https://kree.com](https://kree01.netlify.app/))
[![Status](https://img.shields.io/badge/Status-Production-green)]([https://kree.com](https://kree01.netlify.app/about))
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

</div>
