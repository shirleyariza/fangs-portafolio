# Fangs — Portafolio de Maggie Rodríguez

Sitio estático (HTML + CSS + JS, sin build). Listo para GitHub Pages.

## Estructura
```
Todos los archivos están en una sola carpeta (sin subcarpetas):
index.html
styles.css          ← colores, fuentes y TIEMPOS de animación (bloque :root)
main.js             ← dispara las animaciones al hacer scroll
*.png / *.jpg       ← imágenes
goal-web.mp4, goal-app-movil.mp4  ← videos de UX/UI (GOAL)
404.html  robots.txt  LICENSE  .nojekyll  .gitignore
```

## Publicar en GitHub Pages
1. Crea un repositorio y sube **todo el contenido de esta carpeta** (que `index.html` quede en la raíz).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. Tu sitio quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Animaciones (tomadas del timeline de Figma)
| Elemento | Qué anima | Tiempo |
|---|---|---|
| Dientes del hero | abrir y cerrar en bucle | 0.8 s (`--t-dientes`) |
| Branding | opacidad 0 → 1 | 1 s (`--t-branding`) |
| Ilustración | desenfoque | 1 s (`--t-ilustracion`) |
| Hablemos | textura, 6 keyframes | 0 / .21 / .39 / .58 / .77 / 1.02 s (`--t-hablemos`) |

## Fuentes
Se cargan desde Google Fonts (Pinyon Script, Italianno, Montserrat). Si usas otras, agrega los archivos de fuente junto a `styles.css` y declara `@font-face` en `styles.css`.

## Local
Abre `index.html` o usa `python3 -m http.server`.

## Vista previa al compartir el enlace
Cuando el sitio esté publicado, en `index.html` cambia `content="dientes-superior.png"` (etiqueta `og:image`) por la dirección completa, por ejemplo `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/dientes-superior.png`.
