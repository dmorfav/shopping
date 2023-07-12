# Shopping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

Se necesita crear una tienda virtual para vender productos, debe cumplir estos requisitos:

**Las especificaciones:**

- Home: La home, tiene un buscador para buscar productos de la tienda, en la que podrás buscar por un campo abierto título
- Página de resultados y buscador: a esta página llegas después de hacer una búsqueda en la home y además de los resultados podrás seguir buscando por:
  - Campo abierto título
  - Por rango de precio
  - Por categoría: Ya que todos los productos tienen una categoría.
- Página detalle de producto: título, precio, descripción e imágenes del producto y botón comprar
- Checkout: Accedes desde el botón comprar y tiene 4 fases:
  - Login/registro
  - Detalle de tu compra
  - Datos del pago
  - Página de gracias
- Landings de categorías: existe una por categoría y se verá un listado paginado de productos de esa categoría.
- Login/registro: sitio dónde los usuarios hacen login o se registran
- Área de usuario: lugar privado bajo usuario y contraseña donde el usuario puede ver:
- Detalle/Edición de datos de usuario
- Listado métodos de pago
  - Detalle/edición
- Listado de compras
  - Detalle/devolución
- Mis direcciones de entrega
- Detalle/edición
- Área de administración: para usuarios administradores/gestores de la aplicación en la que podrán:
- Listado de compras
  - Detalle/devolución
- Listado de usuarios
  - Detalle/edición
- Listado de productos
  - Detalle/edición
- Listado de categorías
- Detalle/edición

### Modelo

Un producto tiene los siguientes atributos: 
- id
- title
- description
- category
- images 

Una categoría tiene los siguientes atributos: 
- id
- name
- image

Ten en cuenta:

- Por una actualización dinámica de precios, los precios que obtienes en la búsqueda que son de la categoriaId=2 no son correctos y para mostrar el precio correctos debes llamar al detalle del producto.
- Buscadores: La home, las páginas de producto y las landings de categoría deben ser indexables por los buscadores
- El equipo de atención al cliente quiere poder copiar cualquier url para compartirla y que lleguen al mismo resultado.
- Aunque este caso de uso es pequeño imagina que trabajas en una aplicación MUY GRANDE. El performance de la aplicación es fundamental y la velocidad de carga debe optimizarse todo lo posible. Aplica todo lo que consideres para optimizar y mejorar la carga y experiencia de usuario.
- La api que tenemos es: <https://fakeapi.platzi.com/en/rest/introduction>, aquí encontrarás todos los endpoints para obtener los datos que necesitas

## Requisitos técnicos
1. Plantea la arquitectura de la aplicación o aplicaciones detallando todo lo que consideres: módulos, componentes, paginas, seguridad, roles, patrones, etc.
2. Implementa la home, la página de resultados y buscador y el detalle del producto
3. Implementa los test que consideres necesarios
4. Sube el código a github y escribe un README.md con todo lo necesario para ejecutar el código.


# Respuesta de requisitos técnicos

### Módulos:
- SharedModule: Contendrá los componentes, directivas y servicios compartidos entre diferentes módulos.
- CoreModule: Contendrá los servicios y lógica centralizada de la aplicación, como la autenticación, manejo de errores, etc.
- HomeModule: Contendrá los componentes y lógica relacionada con la página de inicio.
- SearchModule: Contendrá los componentes y lógica relacionada con la página de resultados y buscador.
- CheckoutModule: Contendrá los componentes y lógica relacionada con el proceso de compra.
- UserAreaModule: Contendrá los componentes y lógica relacionada con el área de usuario.
- AdminAreaModule: Contendrá los componentes y lógica relacionada con el área de administración.

### Componentes y páginas:
- HomeComponent: Página de inicio con el buscador de productos.
- SearchResultComponent: Página de resultados de búsqueda y filtros.
- ProductDetailComponent: Página de detalle de producto.
- CheckoutComponent: Componente principal del proceso de compra.
- LoginComponent: Componente para iniciar sesión.
- RegisterComponent: Componente para registrar un nuevo usuario.
- UserAreaComponent: Área privada del usuario con diferentes secciones.
- AdminAreaComponent: Área privada de administración con diferentes secciones.

### Seguridad y roles:
Implementar un sistema de autenticación basado en tokens JWT (JSON Web Tokens) para asegurar las áreas privadas.
Definir roles de usuario, como "usuario regular" y "administrador", para restringir el acceso a ciertas secciones de la aplicación.

### Patrones:
- Utilizar el patrón de diseño MVC (Modelo-Vista-Controlador) para separar la lógica de negocio, la presentación y el control de eventos.
- Utilizar el patrón de diseño Observer para manejar eventos y comunicación entre componentes.
- Utilizar el patrón de diseño Worker Thread para ejecutar tareas en segundo plano y así no bloquear el hilo principal de ejecución.
- Utilizar el patrón de diseño Dependency Injection para inyectar dependencias en los componentes y servicios.

### Consumo de la API:
- Utilizar los diferentes endpoints proporcionados por la API (https://fakeapi.platzi.com/en/rest/introduction) para obtener los datos necesarios, como productos, categorías, etc.
- Implementar servicios en Angular para interactuar con la API y realizar las solicitudes HTTP.

### Optimización de carga y experiencia de usuario:
- Utilizar técnicas de lazy loading para cargar módulos y componentes bajo demanda, reduciendo así el tiempo de carga inicial.
- Utilizar caché para almacenar recursos estáticos y reducir las solicitudes al servidor mediante un service-worker.
- Implementar una estrategia de precarga (preloading) para cargar en segundo plano los módulos que es probable que el usuario visite a continuación.
- Implementar web-workers para ejecutar tareas en segundo plano y así no bloquear el hilo principal de ejecución.
