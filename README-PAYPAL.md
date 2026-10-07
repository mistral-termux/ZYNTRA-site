# PayPal Sandbox — ZYNTRA

Le site est configuré pour un paiement unique de **5,00 €** en mode **PayPal Sandbox**.

## Variables à ajouter dans Vercel

Dans Vercel : **Project > Settings > Environment Variables**

Ajoute :

- `PAYPAL_CLIENT_ID` = le Client ID de l'application Sandbox `Zyntra-site`
- `PAYPAL_CLIENT_SECRET` = le Secret de cette même application Sandbox

Coche au minimum **Preview** et **Production**, puis redéploie le projet.

> Ne mets jamais le Secret directement dans `index.html`, GitHub ou un fichier public.

## Tester

1. Déploie le projet sur Vercel.
2. Ouvre le site et descends jusqu'à « Soutenez vos créateurs ».
3. Clique sur le bouton PayPal.
4. Connecte-toi avec un **compte acheteur Sandbox**, pas ton vrai compte PayPal.
5. Termine le paiement test de 5,00 €.

## Passage en production plus tard

Quand tu voudras accepter de vrais paiements :

- remplace les identifiants Sandbox par les identifiants Live ;
- remplace `https://api-m.sandbox.paypal.com` par `https://api-m.paypal.com` dans les deux fonctions API ;
- retire la mention « Mode test PayPal Sandbox » dans `index.html`.
