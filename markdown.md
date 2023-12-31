# Examen DWEC Primera Evaluaci&oacute;n

## Archivos del examen

Se proporciona el esqueleto del archivo `coches.html` sobre el que se
ejecutar&aacute; la aplicaci&oacute;n a desarrollar.

Se incluye en el repositorio un conjunto de archivos que se
utilizar&aacute;n para realizar **tests**. Dichos tests se podr&aacute;n
utilizar para comprobar si el examen se ha realizado correctamente. Los
tests se podr&aacute;n ejecutar el n&uacute;mero de veces que sea
necesario.

Los tests tienen asignada una puntuaci&oacute;n de **8 puntos**. Los
otros 2 puntos ser&aacute;n asignados por el profesor en funci&oacute;n
de la calidad del c&oacute;digo (claridad, optimizaci&oacute;n, etc.)

## Preparaci&oacute;n

1.  Abrir un terminal.
2.  Clonar el repositorio al equipo local mediante `git clone`.
3.  Acceder a la carpeta del repositorio.
4.  Ejecutar el comando `npm install`. Este comando instalar&aacute;
    todas las librer&iacute;as de Node necesarias para ejecutar los
    tests.
5.  Ejecutar el comando `npm run test` para lanzar los **tests**. Este
    comando podr&aacute; ejecutarse tantas veces como sea necesario. Por
    pantalla se mostrar&aacute;n los tests que se pasan y los que no, de
    manera que se tendr&aacute; informaci&oacute;n sobre las acciones
    que hay que realizar.

## Tareas a realizar

### L&oacute;gica de la aplicaci&oacute;n: fichero `js/gestionCoches.js`

Crea un fichero en la ruta `js/gestionCoches.js` del repositorio. El
fichero deber&aacute; contener el siguiente c&oacute;digo:

- Variable global `coches`, inicializada a un **array vac&iacute;o**.
  Esta variable almacenar&aacute; la lista de coches guardados por la
  aplicaci&oacute;n.
- `Coche` - **Funci&oacute;n constructora** que se encargar&aacute; de
  crear un objeto **coche**. Esta funci&oacute;n devolver&aacute; un
  objeto de tipo **coche**. La funci&oacute;n tendr&aacute; **tres
  par&aacute;metros**: `marca`, `color` y `fechaMatricula`. El
  **objeto** creado a partir de este constructor deber&aacute; tener las
  siguientes propiedades:
  - `marca` - Propiedad que almacenar&aacute; la marca del coche
  - `color` - Propiedad que almacenar&aacute; el color del coche
  - `fechaMatricula` - Propiedad que almacenar&aacute; la fecha de
    matriculaci&oacute;n del coche.
  - **&iexcl;IMPORTANTE!** La fecha se pasar&aacute; en formato
    `aaaa-mm-dd` a la funci&oacute;n constructora, pero el campo
    `fechaMatricula` deber&aacute; almacenar la fecha en formato
    `timestamp`. Por ejemplo, si se pasa el par&aacute;metro
    `2022-03-07` a la funci&oacute;n constructora, la propiedad
    `fechaMatricula` deber&aacute; almacenar `1646611200000`.
  - `mostrarFechaMatricula` - **Funci&oacute;n** que devolver&aacute; la
    fecha en **formato localizado** en forma de cadena de texto
    (funci&oacute;n `toLocaleDateString("es")`, incluyendo el
    c&oacute;digo del idioma). Por ejemplo, si
    `fechaMatricula=1646671122000`, la funci&oacute;n deber&aacute;
    devolver: `7/3/2022`.
- `listarCoches` - Funci&oacute;n **sin par&aacute;metros** que
  deber&aacute; devolver la lista de coches.
- `anyadirCoche` - Funci&oacute;n de **un par&aacute;metro** que
  a&ntilde;adir&aacute; el objeto de tipo `coche` pasado como
  par&aacute;metro a la variable global `coches`. El coche se debe
  a&ntilde;adir al final del array.

Se deben **exportar** las funciones `Coche`, `listarCoches` y
`anyadirCoche`.

### P&aacute;gina HTML de la aplicaci&oacute;n: fichero `coches.html`

Se debe modificar el fichero `coches.html` para que incluya el siguiente
contenido:

- Un **formulario** dentro de la capa `div#creacion`. El formulario debe
  tener un atributo `id` con valor `anyadircoche`. El formulario debe
  contener:
  - Un campo de texto con `id` y `name` con valor `marca`
  - Un campo de texto con `id` y `name` con valor `color`
  - Un campo de **tipo fecha** con `id` y `name` con valor
    `fechamatricula`
  - Un bot&oacute;n de tipo `submit` con texto `Crear`.

Adem&aacute;s, se deber&aacute; **importar** el fichero
`js/gestionCochesWeb.js` como script de tipo `module`.

### L&oacute;gica web de la aplicaci&oacute;n: fichero `js/gestionCochesWeb.js`

Se debe crear un fichero en la ruta `js/gestionCochesWeb.js` del
repositorio. El fichero deber&aacute; **importar la l&oacute;gica de la
aplicaci&oacute;n** (archivo `js/gestionCoches.js`).

El fichero debe tener el siguiente c&oacute;digo:

- Funci&oacute;n `repintar` - Esta funci&oacute;n **sin
  par&aacute;metros** se encargar&aacute; de **mostrar el listado de
  coches** en la capa `div#coches` del archivo HTML. Generar&aacute; la
  siguiente **estructura HTML** para **cada objeto coche** de la lista:

  ``` html
  <div class="coche">
    <dl>
      <dt>Marca</dt>
      <dd>MARCA</dd>
      <dt>Color</dt>
      <dd>COLOR</dd>
      <dt>Fecha de matriculaci├│n</dt>
      <dd>FECHA_MATRICULACION</dd>
    </dl>
  </div>

  <!-- Ejemplo:

       <div class="coche">
         <dl>
           <dt>Marca</dt>
           <dd>Seat</dd>
           <dt>Color</dt>
           <dd>Blanco</dd>
           <dt>Fecha de matriculaci├│n</dt>
           <dd>7/5/2020</dd>
         </dl>
       </div>

       -->

  ```

  Donde se sustituir&aacute;n los textos en may&uacute;sculas por los
  datos del coche correspondiente.

- Funci&oacute;n `anyadirCocheWeb` - Esta funci&oacute;n se
  utilizar&aacute; como **manejadora de eventos** del formulario
  `#creacion` del archivo HTML. Se encargar&aacute; de:

  - Prevenir el comportamiento por defecto del formulario.
  - **Crear** un objeto `coche` a partir de los datos del formulario.
  - **A&ntilde;adir** el objeto creado a la lista de coches.
  - Llamar a la funci&oacute;n `repintar` para mostrar el listado
    actualizado de coches.

- C&oacute;digo necesario para **a&ntilde;adir la funci&oacute;n**
  `anyadirCocheWeb` como **manejadora** del evento `submit` del
  formulario `#anyadircoche`.

## Formato de la entrega

Se debe realizar la entrega subiendo el repositorio a GitHub mediante
`git push`.
