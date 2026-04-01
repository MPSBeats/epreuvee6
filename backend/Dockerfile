# EXPLICATION : Ce multi-stage build permet de séparer la phase de test et de compilation (stage builder) 
# de l'image de production finale. Cela réduit drastiquement la taille de l'image (pas de dépendances de développement embarquées) 
# et améliore la sécurité (moins de paquets existants = réduction de la surface d'attaque potentielle).

# --- Stage 1 : Builder et Test ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances et installer toutes les bibliothèques (y compris devDependencies pour les tests)
COPY package*.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Exécuter les tests unitaires avant de pouvoir compiler l'image (garantit la qualité)
RUN npm test

# --- Stage 2 : Production ---
FROM node:18-alpine

WORKDIR /app

# Copier uniquement le package.json pour n'installer QUE les packages de production
COPY package*.json ./
RUN npm install --omit=dev

# Copier le code source strictement requis et déjà testé depuis le stage builder
COPY --from=builder /app/server.js ./

EXPOSE 3000

CMD ["npm", "start"]
