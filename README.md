# README - Application de Notes avec Chatbot IA

## Description
Cette application est une plateforme de prise de notes intelligente intégrant un chatbot IA capable de répondre à des questions sur vos notes. Elle utilise Next.js, Clerk pour l'authentification, et Upstash RAG pour les fonctionnalités de chatbot.

## Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn
- Compte Clerk (pour l'authentification)
- Compte Upstash (pour RAG Chat)
- Base de données PostgreSQL (j'utilise neon pour ma part)

## Installation

1. Clonez le dépôt:

git clone https://github.com/votre-nom/nextjs-ai-note-app.git
cd nextjs-ai-note-app


2. Installez les dépendances:

npm install


3. Configurez les variables d'environnement:
Créez un fichier .env à la racine du projet avec les variables suivantes:

# Clerk (Authentification)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=votre_clé_publique_clerk
CLERK_SECRET_KEY=votre_clé_secrète_clerk

# Upstash (RAG Chat)
UPSTASH_VECTOR_REST_URL=votre_url_upstash
UPSTASH_VECTOR_REST_TOKEN=votre_token_upstash
QSTASH_TOKEN

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/notes
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/notes

# Base de données
DATABASE_URL=votre_url_de_base_de_données_postgresql


4. Initialisez la base de données:

npx prisma db push


## Démarrage

Pour lancer l'application en mode développement:

npm run dev


L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Services tiers utilisés

### Clerk
Service d'authentification et de gestion des utilisateurs.
- Configuration: Créez un compte sur [clerk.dev](https://clerk.dev)
- Créez une application et récupérez vos clés API
- Intégration déjà configurée dans le projet

### Upstash RAG Chat
Service pour la génération de réponses basées sur le contexte.
- Configuration: Créez un compte sur [upstash.com](https://upstash.com)
- Créez un index dans vector et copier coller le .env il contient votre UPSTASH_VECTOR_REST_URL et UPSTASH_VECTOR_REST_TOKEN
- Allez dans QStash et copier votre QSTASH_TOKEN 

### Prisma
ORM pour la gestion de la base de données.
- Déjà configuré dans le projet
- Utilisez npx prisma studio pour visualiser votre base de données
  ou aller directement consulter votre base de donnée avec neon par exemple

### Tailwind CSS & shadcn/ui
Framework CSS et composants UI.
- Déjà configurés dans le projet
- Les composants shadcn peuvent être ajoutés avec npx shadcn-ui@latest add [nom-du-composant]

## Fonctionnalités principales

- Authentification utilisateur
- Création, modification et suppression de notes
- Chatbot IA qui peut répondre à des questions sur vos notes
- Interface responsive et thème clair/sombre
