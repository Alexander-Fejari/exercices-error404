import { defineConfig } from 'vite';

export default defineConfig({
    base: '/exercices-error404/', // Remplacez 'nom_depot' par le nom de votre dépôt GitHub
    build: {
        outDir: 'dist', // Dossier de sortie pour les fichiers de production
    },
});