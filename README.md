# examen-medical-permis.ch

Site statique Astro pour les examens médicaux d'aptitude à la conduite (niveau 1 & 2) à Genève.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

Le site généré se trouve dans `dist/`.

## Déploiement sur Netlify

1. Poussez ce dossier sur un dépôt GitHub/GitLab.
2. Sur app.netlify.com, cliquez sur **Add new site → Import an existing project**.
3. Sélectionnez le dépôt. Netlify détecte Astro automatiquement :
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Déployez. Netlify détecte automatiquement le formulaire de contact (`data-netlify="true"` dans `src/pages/contact.astro`) car il est présent dans le HTML généré au build — les soumissions apparaissent dans **Site settings → Forms**.
5. Dans **Domain settings**, ajoutez le domaine `examen-medical-permis.ch` et suivez les instructions DNS de votre registrar (Infomaniak, Nic.ch, etc.).
6. Activez le certificat SSL automatique (Let's Encrypt, gratuit sur Netlify).

## À vérifier avant mise en ligne

- Le numéro de téléphone et l'e-mail dans `src/consts.js` (actuellement 022 555 77 99 / contact@examen-medical-permis.ch — à confirmer).
- Les coordonnées GPS approximatives (`lat`/`lng`) de chaque centre dans `src/consts.js`, utilisées dans le schema.org.
- L'image `public/og-image.png` (partage réseaux sociaux, 1200×630 px) — un placeholder généré est fourni.
- Faites relire les mentions légales et la politique de confidentialité par un professionnel du droit avant publication (contenu de base, non un avis juridique).
