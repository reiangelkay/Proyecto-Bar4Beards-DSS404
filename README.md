#  Bar4Beards — Sistema Integral de Gestión para Barberías

<div align="center">

![Bar4Beards Banner](https://img.shields.io/badge/Bar4Beards-Sistema%20de%20Gesti%C3%B3n-CC4400?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6Ii8+PC9zdmc+)

**Universidad Don Bosco** · Facultad de Ingeniería – Escuela de Computación  
**Materia:** Desarrollo de Aplicaciones Web con Software Interpretado en el Servidor — DSS404  
**Grupo Teórico:** G03T · **Ciclo:** 01-2026

[![PHP](https://img.shields.io/badge/PHP-8.1+-777BB4?style=flat-square&logo=php&logoColor=white)](https://php.net)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://mysql.com)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-2F5853?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)

</div>

---

##  Descripción del Proyecto

**Bar4Beards** es una plataforma web moderna que combina los servicios de una barbería y un bar, ofreciendo a los clientes una experiencia diferente en un solo lugar. Las personas pueden cortarse el cabello o arreglarse la barba mientras disfrutan de comida y bebidas en un ambiente cómodo y moderno.

El sistema resuelve las ineficiencias operativas de las barberías tradicionales mediante cuatro módulos integrados:

| Módulo | Descripción |
| :--- | :--- |
|  **Citas con Selección de Barbero** | El cliente elige su barbero favorito, fecha y hora según disponibilidad real. Confirmación automática por correo. |
|  **Cola de Espera Inteligente** | Gestión de turnos en tiempo real. Alerta automática (correo + push) cuando faltan **2 personas** antes del turno. |
|  **Feedback y Calificación** | Sistema de calificación post-servicio (1–5 estrellas) con ranking actualizado de barberos para la administración. |
|  **Inventario de Bebidas** | Catálogo digital de bebidas, registro de entradas/salidas y alertas de stock mínimo. |

---

##  Stack Tecnológico y Arquitectura

Arquitectura **Cliente-Servidor desacoplada**: el frontend SPA consume una API REST PHP bajo HTTPS.

```
┌─────────────────────┐        HTTPS / REST API        ┌─────────────────────┐
│   Frontend (SPA)    │ ◄──────────────────────────── │   Backend (PHP)     │
│   React.js          │        JSON responses          │   API REST / MVC    │
│   Tailwind CSS      │                                │   JWT Auth + CORS   │
└─────────────────────┘                                └──────────┬──────────┘
                                                                   │ SQL
                                                        ┌──────────▼──────────┐
                                                        │   Base de Datos     │
                                                        │   MySQL 8.0         │
                                                        │   8 tablas / InnoDB │
                                                        └─────────────────────┘
```

### Tecnologías Utilizadas

| Categoría | Tecnología | Detalle |
| :--- | :--- | :--- |
| **Backend** | PHP 8.1+ | Arquitectura MVC / Laravel Framework |
| **Frontend** | React.js + Tailwind CSS | Single Page Application (SPA) |
| **Base de Datos** | MySQL 8.0 | Motor InnoDB, 8 tablas relacionales |
| **Autenticación** | JWT (JSON Web Tokens) | Tokens firmados, roles por usuario |
| **Seguridad** | CORS + Prepared Statements | Protección SQL Injection, XSS, CSRF |
| **Email** | SendGrid / SMTP | Confirmaciones y alertas de cola |
| **Control de Versiones** | Git + GitHub | Ramas por integrante, Pull Requests |
| **Gestión de Proyecto** | Trello | Tablero Scrum con sprints quincenales |
| **Prototipado UI** | Figma | Mock Ups de todas las pantallas |
| **CI/CD** | GitHub Actions | Pipeline en cada push a `main` |

---

##  Equipo de Desarrollo (Grupo G03T)

| Carnet | Integrante | Rol en el Proyecto | Rama Git |
| :---: | :--- | :--- | :---: |
| **LV231728** | Abel Stuardo López Velásquez | Scrum Master · Coordinador y Arquitecto de Software | `rama-abel` |
| **SM181265** | Sergio Salvador Sánchez Monti | Desarrollador Backend · API REST, BD, Cola e Inventario | `rama-sergio` |
| **RS240130** | Justin Alfredo Rodríguez Sánchez | Desarrollador Frontend · UI, Catálogo, Alertas Visuales | `rama-justin` |
| **UH231910** | Gabriela Elizabeth Urrutia Hernández | Analista de Sistemas · QA, Pruebas y Requerimientos | `rama-gabriela` |
| **AA252522** | José Armando Anzora Anzora | Documentador · DevOps, Manuales y Control de Versiones | `rama-armando` |

---

## 🔗 Enlaces Importantes

| Recurso | Enlace |
| :--- | :--- |
|  **Tablero Scrum (Trello)** | [Bar4Beards – Trello Board](https://trello.com/invite/b/69b9f7ea885a3812df5bc7c7/ATTIf76cb8cff95d12f1ee61b9d46ed7cba3604DA76B/bar4beards) |
|  **Diseños UX/UI (Figma)** | [Mock Ups – Figma](https://www.figma.com/site/ZOPOyqQdrmykMTIzRhn4wb/Untitled?node-id=0-3&t=mVIqdFqX8sBpw5nL-1) |
|  **Documento Fase 1 (PDF)** | [Bar4Beards_fase_1](https://drive.google.com/file/d/1QCYU70zBwj1kGarMz69c1uo74CbO9tR0/view?usp=drive_link) |
|  **Documentación de la API** | [pendiente](https://drive.google.com/file/d/1IlUjMVSLQ3Z9D23_EPljz9DevuVyn_lF/view?usp=drive_link) |

---



##  Modelo de Base de Datos

El sistema utiliza **8 tablas relacionales** en MySQL:

```
usuarios ──────┬──── barberos ────── citas ────┬──── cola_espera
               │                               ├──── calificaciones
               │                               └──── pedidos ──── productos
               │                                                       │
               └─────────────────────────────── movimientos_inventario┘
```

| Tabla | Propósito |
| :--- | :--- |
| `usuarios` | Clientes, barberos y administradores con roles |
| `barberos` | Perfil del barbero, especialidad y calificación promedio |
| `citas` | Reservas con estado: pendiente / confirmada / atendida / cancelada |
| `cola_espera` | Turnos del día con control de alerta enviada |
| `calificaciones` | Feedback post-servicio (1–5 estrellas por cita) |
| `pedidos` | Consumo de bebidas durante la espera |
| `productos` | Catálogo de bebidas con stock y umbral mínimo |
| `movimientos_inventario` | Auditoría completa de entradas y salidas de stock |

---

##  Seguridad Implementada

- **JWT** — Autenticación sin estado con tokens firmados y expiración configurable
- **CORS** — Solo el dominio del frontend autorizado puede consumir la API
- **Prepared Statements** — Prevención total de SQL Injection en MySQL
- **Sanitización XSS** — React escapa el DOM + validación adicional en backend
- **CSRF Tokens** — Protección en formularios que modifican estado del servidor
- **HTTPS/TLS** — Toda la comunicación cliente-servidor cifrada
- **Variables .env** — Credenciales fuera del repositorio

---

##  Cronograma de Sprints

| Sprint | Semanas | Módulo / Entregable |
| :---: | :---: | :--- |
| Sprint 0 | 1 – 2 | Configuración de entorno, repositorio y Perfil del Proyecto  |
| Sprint 1 | 3 – 5 | Módulo de autenticación (login/registro + JWT por roles) |
| Sprint 2 | 6 – 8 | Módulo de citas con selección de barbero y calendario |
| Sprint 3 | 9 – 11 | Cola de espera digital + alertas automáticas  *Fase 1* |
| Sprint 4 | 12 – 13 | Sistema de feedback y ranking de barberos |
| Sprint 5 | 14 – 15 | Inventario de bebidas: catálogo, pedidos y movimientos |
| Sprint 6 | 16 – 17 | Panel administrativo, reportes y pruebas QA |
| Cierre | 18 | Documentación final y despliegue 🏁 *Entrega Final* |

---

##  Paleta de Colores y Diseño

El sistema mantiene una línea gráfica coherente en todas las pantallas:

| Color | Hex | Uso |
| :--- | :---: | :--- |
|  Rojo-Naranja | `#CC4400` | Botones primarios, CTAs, headings |
|  Negro | `#000000` | Fondo principal, navbar densa |
|  Verde-Teal | `#2F5853` | Acentos, tarjetas de apoyo |
|  Gris Hierro | `#453E3E` | Menú lateral del panel usuario |
|  Blanco | `#FFFFFF` | Footer, texto sobre fondos oscuros |

**Resoluciones de imagen estándar:** Hero `1860×517` · Panel `1542×1578` · Bebidas `1761×1566` · Fotos barbero `400×400`

---

##  Presupuesto Estimado

| Rubro | Costo |
| :--- | ---: |
| Servidores y dominio (anual) | $80.00 |
| Herramientas de desarrollo | $0.00 |
| Servicio de correo SendGrid | $15.00 |
| Mano de obra (5 integrantes) | $2,500.00 |
| **TOTAL PRELIMINAR** | **$2,595.00** |

---

##  Licencia

<a href="https://github.com/reiangelkay/Proyecto-Bar4Beards-DSS404">Bar4Beards</a> © 2026 by <a href="https://github.com/reiangelkay">Bar4Beards Team</a> está bajo licencia <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style="max-width:1em;max-height:1em;margin-left:.2em;">
<img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style="max-width:1em;max-height:1em;margin-left:.2em;">

Esta licencia permite compartir, adaptar y reutilizar el contenido — incluso con fines comerciales — siempre que se acredite debidamente a los autores originales.

---

<div align="center">
  <sub>Bar4Beards · Universidad Don Bosco · DSS404 G03T · Ciclo 01-2026</sub>
</div>
