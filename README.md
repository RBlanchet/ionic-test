### Ionic

## Installation

Installation de Cordiva et de Ionic qui serviront à emuler l'application sur mobile
```
npm install -g cordova ionic
```

Installation du template de base Sidebar, dans cet exemple j'ai pris la version 3 de Ionic, la 4 etant encore en bêta.
```
ionic start ionic3 sidemenu
```

Cette installation à créer un dossier ionic, si l'on rentre dedans nous pouvons lancer l'appli en faisant, l'appli
s'ouvre donc automatiquement dans le navigateur.
```
ionic serve
```

Pour mon cas, je lance mon appliation via Mobile directement sur IOS, avec l'arrivé de Ionic DevApp nous avons plus besoin
de SDK, il suffit juste de télécharger l'application :

https://ionicframework.com/docs/appflow/devapp/

L'installer sur son Android / IOS, se connecter au même Wifi que l'hote ou on developpe l'application et lancer la commande
suivante sur l'hote

```
ionic serve -c
```

L'application s'affichera donc automatiquement sur mobile.

## Arborescence

Le dossier `/src` contient tous le coeur de l'application

* `src/app` - Concerne le "composant racine" de l'application
* `src/assets` - C'est ici que sont mit les fichier static, tel que Json, image ...
* `src/pages` - Contient comme son nom l'indique les pages de l'application
* `src/theme` - Contient les fiche de style SASS

Le dossier `www` contient l'application compilé

## Commandes Ionic

Générer les pages, une fois cette commande lancée, il faudra ajouter manuellement le composants
dans `app.component.ts` et `main.ts`

```
ionic g page nom-page
```

## Cycle de vie

![alt text]( https://soat.developpez.com/tutoriels/mobiles/ionic-3-creer-application-mobile/images/image-9.png)

* `ionViewDidLoad` : se lance pour signaler que toutes les variables et dépendances sont prêtes à l'emploi, ce qui implique 
aussi que la page a été ajoutée en mémoire et qu'elle sera en cache. Cet événement n'est lancé qu'une seule fois. 
C'est ici que l'on met le code d'initialisation et de configuration de la page.
* `ionViewWillEnter` : même si la page est complètement chargée, ce n'est pas encore la page active et elle n'est pas 
encore visible pour l'utilisateur, et Ionic exécute encore des tâches en background. Néanmoins, on peut manipuler les 
éléments de la page avant qu'elle ne soit affichée. À utiliser pour les actions que l'on souhaite réaliser à chaque fois que l'on affiche la page (mise à jour d'une table…).
* `ionViewDidEnter` :  cette fonction nous signale que tout s'est bien passé et que notre vue a été correctement affichée. 
Mais à quoi sert-elle et quand l'utiliser ? Eh bien, c'est l'endroit où l'on déclenche une fonctionnalité de l'application 
que nous souhaitons montrer à l'utilisateur à l'affichage de la page
* `ionViewWillLeave` : se lance lorsque l'on est sur le point de quitter la page. Elle est toujours considérée comme étant 
la page active, mais elle est sur le point d'être supprimée.
* `ionViewDidLeave` : cet événement nous signale que la page n'est plus la page active. La fonction se lance après le ionViewDidEnter() 
de la page suivante. Mais que faire de cette fonction ? C'est un très bon endroit pour sauvegarder des données ou pour 
lancer des opérations en arrière-plan qui n'ont pas besoin que la vue soit visible.
* `ionViewWillUnload` : c'est la dernière fonction à se lancer dans le cycle de vie d'une page. Elle ne se lance qu'une 
seule fois, et seulement quand on navigue en arrière. Par exemple si l'on navigue de la Page 1 à la Page 2, l'événement 
ne se lancera pas pour la Page 1, car elle est dans le cache (souvenez-vous de la stack de navigation) ; par contre si 
l'on fait un retour en arrière de la Page 2 vers la Page 1, cet événement se lancera pour la Page 2, car cette page 
n'est plus en mémoire ; elle sera donc déchargée (unloaded).

Source : https://soat.developpez.com

