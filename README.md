# Portfolio — María Emilia Maldonado

Proyecto en React + TypeScript + Tailwind CSS, hecho con Vite.

## Cómo abrirlo en VS Code y verlo en tu navegador

1. **Descomprimí** el .zip en una carpeta (por ejemplo `Documentos/portfolio`).
2. Abrí **VS Code** → `Archivo > Abrir carpeta...` → seleccioná esa carpeta.
3. Abrí la terminal integrada: menú `Terminal > Nueva terminal` (o `Ctrl + ñ`).
4. Instalá las dependencias (solo la primera vez):
   ```
   npm install
   ```
5. Levantá el servidor de desarrollo:
   ```
   npm run dev
   ```
6. La terminal te va a mostrar algo como `Local: http://localhost:5173/`.
   Ctrl+clic sobre ese link (o pegalo en el navegador) para ver la página.
7. A partir de acá, cualquier cambio que guardes en un archivo se refleja
   solo en el navegador (no hace falta reiniciar nada).

Necesitás tener **Node.js** instalado (versión 18 o superior). Si no lo
tenés: [nodejs.org](https://nodejs.org/) → descargá la versión LTS → instalá
normal, como cualquier programa. Después reiniciá VS Code.

## Estructura del proyecto

```
src/
  components/
    Navbar.tsx          → barra de navegación
    Hero.tsx             → portada con tu nombre y CTA
    HowIWork.tsx          → sección "Cómo trabajo"
    FeaturedProject.tsx  → proyecto destacado (TicketPass)
    Projects.tsx         → grilla con todos tus proyectos
    Skills.tsx           → stack técnico agrupado
    About.tsx            → sobre mí + educación
    Contact.tsx           → contacto
    Footer.tsx
  App.tsx                → arma la página uniendo todos los componentes
  index.css              → estilos globales (fuentes, colores base)
tailwind.config.js        → paleta de colores y tipografías personalizadas
public/
  CV_Maria_Emilia_Maldonado.pdf → el botón "Descargar CV" apunta acá
```

## Cosas que te recomiendo revisar/completar

- [ ] **LinkedIn**: reemplazá los `href="#"` en `Hero.tsx` y `Contact.tsx`
      por tu link real de LinkedIn.
- [ ] **Imágenes de proyectos**: en `FeaturedProject.tsx` hay un bloque de
      color donde dice "TicketPass" a modo de placeholder. Cuando tengas
      una captura de pantalla real del proyecto, avisame y la metemos ahí
      (o poné el archivo en `public/` y reemplazá ese `div` por un `<img />`).
- [ ] **CV actualizado**: si actualizás tu CV, reemplazá el PDF dentro de
      `public/` manteniendo el mismo nombre de archivo.

## Cómo cambiar colores o textos

- Los **colores** están centralizados en `tailwind.config.js` (buscá
  `coral`, `butter`, `ink`, `paper`, `mist`). Cambiá el código hexadecimal
  ahí y se actualiza en todo el sitio.
- Los **textos** de cada sección están directamente en su archivo
  correspondiente dentro de `src/components/`, como texto plano dentro de
  cada componente — no hace falta tocar nada de lógica para editarlos.

## Cuando quieras publicarlo online

Lo más simple es **Vercel** o **Netlify**: conectás tu cuenta de GitHub,
subís este proyecto a un repo, y en 2 clics queda publicado con una URL
gratuita. Si querés, en el siguiente paso te guío para subirlo a GitHub y
hacer el deploy.
