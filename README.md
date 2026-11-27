# Espacios que conectan – Gestión Tecnológica

Sitio web estático e interactivo que presenta la infraestructura tecnológica de la Universidad Cooperativa de Colombia, Seccional Bucaramanga, a partir del documento institucional `assets/DOCS/documento-original.pdf`.

El proyecto usa únicamente HTML5, CSS3 y JavaScript vanilla. No requiere backend, bases de datos ni autenticación.

## Ejecutar en local

Se recomienda servir la carpeta con un servidor estático simple:

```bash
python -m http.server 4173
```

Luego abra:

```text
http://localhost:4173
```

También puede abrir `index.html` directamente en el navegador, aunque un servidor local reproduce mejor el comportamiento de Vercel.

## Estructura

```text
Portafolio-Ambientes/
├── assets/
│   ├── CSS/
│   │   └── styles.css
│   ├── DOCS/
│   │   └── documento-original.pdf
│   ├── IMG/
│   │   ├── logo/
│   │   ├── portada/
│   │   ├── audiovisuales/
│   │   ├── hyflex/
│   │   ├── informatica/
│   │   └── auditorios/
│   └── JS/
│       ├── app.js
│       └── data.js
├── index.html
└── README.md
```

La carpeta del repositorio se llamaba `assesets/`; se corrigió a `assets/` para cumplir las rutas solicitadas y garantizar que CSS, JavaScript e imágenes carguen correctamente. El PDF se renombró a `documento-original.pdf` para conservar una única fuente documental con el nombre indicado.

No se creó `vercel.json` porque no es necesario: Vercel detecta automáticamente un sitio estático con `index.html` en la raíz.

## Dónde modificar la información

Todo el contenido visible está en `assets/JS/data.js`:

- `site`: título, subtítulo, descripción y texto de portada.
- `navigation`: enlaces del menú.
- `stats` y `attractions`: resumen de infraestructura.
- `audiovisuales`: salas 611, 612, 613 y 619.
- `hyflex`: fichas y tabla comparativa.
- `informatica`: tipologías SI-A a SI-D.
- `auditorios`: Auditorio de Menor, Intermedio y Mayor.
- `recommendations`: filtros, recomendaciones y cuatro criterios de elección.
- `tours`: enlaces y tarjetas de los recorridos 360°.
- `notes`: diferencias y precisiones documentadas.
- `footer`: información institucional.

`assets/JS/app.js` solo se encarga de renderizar esos datos y de la interactividad: menú responsive, acordeones, filtros, navegación activa, animaciones de aparición, botón de volver arriba y carga de iframes de los recorridos.

`assets/CSS/styles.css` contiene la identidad visual, variables de color, componentes y media queries.

## Cómo reemplazar o agregar fotografías

1. Coloque el archivo en la subcarpeta correspondiente de `assets/IMG/`.
2. Use nombres descriptivos, por ejemplo `auditorio-menor.webp`.
3. Actualice en `assets/JS/data.js` los campos `src`, `alt`, `width` y `height` del objeto de imagen correspondiente.
4. Si agrega una imagen nueva en `index.html`, incluya siempre un `alt` descriptivo y sus dimensiones.

Las imágenes publicadas se extrajeron de las páginas del PDF y se optimizaron en formato WebP; el logo se conservó en PNG para mantener su transparencia.

Origen de los recursos visuales:

| Página del PDF | Recurso |
|---|---|
| 1 | Logo UCC y fotografía de la nave principal del Auditorio Mayor |
| 2 | Vista general del Auditorio Mayor |
| 3 | Dos fotografías generales de salas audiovisuales |
| 4 | Fotografía de HyFlex 1 |
| 5 | Dos fotografías generales de salas de informática |
| 7 | Vista interior y detalles del Auditorio Mayor |
| 8 | Auditorio de Menor |
| 10 | Cuatro códigos QR de los recorridos |
| 11 | Exterior del Auditorio Mayor |

No se identificaron fotografías específicas de HyFlex 2, del Auditorio Intermedio ni de una tipología concreta de sala de informática. Las fotografías generales se muestran como referencia y así están etiquetadas. No se añadieron imágenes genéricas.

Los cuatro QR de la página 10 se decodificaron y coinciden exactamente con los enlaces indicados en el requerimiento. No se publicaron como archivos porque los botones y enlaces ya cumplen la función de acceso.

## Inconsistencias conservadas

El sitio no corrige silenciosamente el documento original. Estas diferencias están visibles en la sección “Notas sobre el documento” y en las fichas correspondientes:

- El resumen registra 5 salas de audiovisuales, pero el detalle solo documenta Sala 611 y salas 612, 613 y 619.
- HyFlex 2 figura con 25 personas en su ficha y con “hasta 28 personas” en la tabla de recomendaciones.
- El recorrido identificado como HyFlex 2 usa una URL que termina en `/618/`; no se modificó.
- SI-D no especifica cantidad de computadores.
- El Auditorio Intermedio no tiene fotografía identificada en el PDF.

## Recorridos 360°

Los cuatro enlaces respondieron HTTP 200 y no declaraban `X-Frame-Options`, `Content-Security-Policy: frame-ancestors` ni código de salida de iframe en el HTML comprobado. Por eso cada tarjeta permite cargar el recorrido dentro de la página mediante un iframe creado al hacer clic.

Si el proveedor cambia sus restricciones, el botón “Abrir en pestaña nueva” mantiene el acceso. No se intentan evadir bloqueos.

Las recomendaciones son informativas: el sitio no reserva espacios ni confirma disponibilidad.

## Pruebas realizadas

- Sintaxis JavaScript verificada con `node --check`.
- Renderizado comprobado en Chrome headless sin errores en consola.
- 17 imágenes cargadas correctamente, sin rutas rotas.
- Enlaces internos, acordeones, filtros, menú responsive y botones de recorrido probados.
- Sin desbordamiento horizontal en tamaños de escritorio y móvil probados.
- Enlaces externos 360° verificados con HTTP 200.
- Compatibilidad prevista con Chrome, Edge y Firefox al usar solo API web estándar.

## Publicar en Vercel

1. Inicie sesión en Vercel e importe el repositorio.
2. Seleccione el framework “Other” o la detección automática de sitio estático.
3. Deje el comando de build vacío.
4. Use `.` como directorio de salida si Vercel lo solicita.
5. Publique el proyecto.

No se ha realizado ningún despliegue desde este repositorio.
