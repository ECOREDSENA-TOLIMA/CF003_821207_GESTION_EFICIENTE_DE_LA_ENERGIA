<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos de medida
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-left")
        img.mb-0(src="@/assets/curso/temas/tema1/tema1-01.png")
      .col-12(data-aos="fade-down")
        p.mt-5.mb-5 El arte de la medida de magnitudes eléctricas, como corriente, voltaje y resistencia, empezó su desarrollo a finales del siglo XIX con el descubrimiento de la regla de la fuerza cuando se halló que la interacción entre los campos electromagnéticos produce fuerzas y, por lo tanto, movimiento que, con la estrategia correcta, resulta proporcional a la magnitud de la corriente que genera el campo. Fue así como aparecieron los instrumentos de medida analógicos. 
      .col-lg-10.col-12(data-aos="fade-down")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-lg-0.mb-0.pb-3 Posteriormente, con el avance de la ciencia de la electrónica y microcontroladores, los instrumentos de medida han evolucionado de tal forma que la mayoría de los instrumentos que se encuentran hoy en el mercado son de tipo electrónico. El reconocimiento de los tipos de instrumentos de medida y los conceptos asociados a la medición, son muy importantes dado que mucha de la información que se maneja en el mundo laboral para tomar decisiones proviene, precisamente, de dichos instrumentos. 
          p.mb-lg-0.mb-3.pt-0 A continuación, se presentarán dos tipologías de instrumentos: analógicos y digitales en el siguiente recurso educativo. 
      
    .row.justify-content-center.align-items-center.mb-4
      div.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Instrumentos analógicos
      
      .bloque2.p-0.col-lg-10.col-12(data-aos="fade-left")
        .bloque-texto-g.color-secundario.p-lg-5.py-lg-4.p-sm-5.p-2.mb-5(style="background-color:#0F58B9")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-02.svg')})`}"
          )
          .bloque-texto-g__texto.px-lg-5.py-lg-4.p-3
            p.mb-0 De acuerdo con Purkait et al. (2013) un dispositivo analógico es aquel en el cual su indicador o pantalla es una función continua del tiempo y tiene una relación con su entrada. La clasificación de los instrumentos de medida se realiza según la variable a medir por el instrumento como el principio de funcionamiento. 
      
      p.mb-lg-0.mb-5(data-aos="fade-right") Los dos principios generales de funcionamiento son los siguientes: 

    TabsC.color-acento-botones.mb-4(data-aos="fade-right")
      .py-3.pt-0(titulo="Principio electromagnético")
        .row.justify-content-between.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
          .col-lg-6.col-10
            .titulo-sexto.color-acento-contenido.mb-2
              p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Medidor energía</i> 
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.jpg')
              figcaption Nota. Tomada de https://jdelectricos.com.co/medidor-trifasico-electromagnetico/  
          .col-lg-6.col-12
            p.mt-3 Utiliza los efectos magnéticos de las corrientes eléctricas y también por imanes permanentes.
            p.mb-lg-0.mb-3 Son usados, principalmente, para medir corriente eléctrica, niveles de líquidos, presión y tensión eléctrica. Los antiguos medidores de energía pertenecen a esta categoría.

      .py-3.pt-0(titulo="Principio electrotérmico")
        .row.justify-content-between.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
          .col-lg-6.col-10
            img(src='@/assets/curso/temas/tema1/tema1-04.svg') 
          .col-lg-6.col-12
            p.mb-lg-0.mb-3 Utiliza los efectos de calentamiento sobre un material. El más común de los instrumentos que utilizan este principio se denomina #[strong termocupla]. En muchos automóviles se indica en el tablero la temperatura exterior utilizando como sensor principal una termocupla. 
            p.mb-lg-0.mb-3.mt-3 El principio de funcionamiento es utilizar las propiedades que tienen dos alambres metálicos (cada uno de diferente material) unidos generalmente con soldadura que generan un voltaje a la salida cuando están expuestos al ambiente o a diferentes temperaturas.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Instrumentos digitales

      .col-lg-7.col-12(data-aos="fade-right")
        p.mt-3 A causa de los adelantos tecnológicos de la electrónica, se han desarrollado instrumentos de medida que utilizan componentes electrónicos activos para mejorar la calidad de la medición amplificando las magnitudes de las variaciones detectadas por los sensores analógicos.
        p.mb-lg-0.mb-3 Al interior de los instrumentos digitales se utilizan conversores analógicos digitales (ADC, por sus siglas en inglés) para poder hacer un tratamiento a las señales de entrada y poder medir variables físicas que los instrumentos analógicos no podrían realizar.
        .row.mt-3.px-3
          .col-lg-6.col-12.p-4(style="background-color:#E4EEF8")
            p.m-3
              strong Los principales componentes electrónicos que se encuentran al interior de los instrumentos digitales son:
          .col-lg-6.col-12.p-4(style="background-color:#0F58B9")
            .bloque-texto-tema1
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Amplificadores.
                li 
                  i.lista-ul__vineta
                  | Rectificadores.
                li 
                  i.lista-ul__vineta
                  | Conversores análogo digital.
                li 
                  i.lista-ul__vineta
                  | Pantalla o #[i display] electrónico.
      .col-lg-5.col-12.mb-2(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mt-4
          p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Medidor energía digital</i> 
        img(src='@/assets/curso/temas/tema1/tema1-05.png')         

      p.mt-5(data-aos="fade-right") Actualmente, la mayoría de los instrumentos utilizados comercialmente pertenecen a esta categoría, aunque aún podemos ver en muchos de los hogares medidores de energía eléctrica de tipo analógico.
      
      p.mt-3(data-aos="fade-right") Se invita a averiguar de qué tipo es el medidor de consumo de electricidad en los hogares.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Exactitud y precisión
    p.mb-5(data-aos="fade-right") Es común confundir los términos exactitud y precisión, sin embargo, ambos están relacionados, pero son diferentes; Purkait, Biswas, Das y Koley (2013), los definen así: 

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-secundario.p-5.pt-3
        .row.justify-content-center.m-5
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.svg', alt='Texto que describa la imagen')
          
        h2.text-center Exactitud
        p.text-center Cercanía con la que la lectura del instrumento se acerca al valor real de la variable bajo medición. Es decir, hace referencia a qué tan cerca está el valor medido del valor real o verdadero.
      .col-md.tarjeta.color-primario.p-5.pt-3
        .row.justify-content-center.m-5
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-07.svg', alt='Texto que describa la imagen')
          
        h2.text-center Precisión
        p.text-center Como una medida de la reproducibilidad de las mediciones, es decir, la precisión es una medida del grado en que las sucesivas mediciones difieren entre sí.
    
    p.mt-5.mb-5(data-aos="fade-right") A continuación, se presenta el siguiente ejercicio para entender un poco más las anteriores definiciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12.bg--gradientBlue.p-5(data-aos="fade-left")
        SlyderB.mb-1(:datos="datosSlyder")

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Clase de precisión, <i>burden</i> y error

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        p Continuando con la temática se planteará, inicialmente, el concepto de error como una variable que tiene sus cualidades en el momento de la medición; en segundo lugar, se hablará de precisión y en tercer lugar se abordará un #[i burden] que es un término asociado a la carga máxima. 
        p.mb-0 Es momento de iniciar con el primer concepto: de acuerdo a lo planteado por Purkait et al. (2013) en la práctica, es imposible medir una variable con exactitud perfecta ya que siempre existirá una diferencia entre el valor medido con el instrumento y el valor real de la variable desconocida. Sin embargo, es posible determinar qué tan cerca o tal lejos se está de dicho valor real; la diferencia entre el valor real y el valor medido por el instrumento se denomina error absoluto.
      .col-lg-5.col-10
        img.mb-0(src='@/assets/curso/temas/tema1/tema1-11.png') 
    p.text-center(data-aos="fade-right") Los errores en las mediciones se pueden clasificar como:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row.justify-content-center.align-items-center(titulo="Error grave")
        .col-md-11.col-12.mb-4.mb-md-0
          p(style="margin-left:0.7em") Se deben, principalmente, a fallas humanas en la lectura o conexión del instrumento de medición. Es decir, así se tenga disponible el medidor con mayor exactitud del mundo, si se conecta o se lee de forma errónea estaremos muy lejos del valor real de la variable que deseamos medir.
      .row.justify-content-center.align-items-center(titulo="Error sistemático")
        .col-md-11.col-12.mb-4.mb-md-0
          p(style="margin-left:0.7em") Hace referencia a los que son inherentes a la tecnología del medidor y también a las condiciones ambientales del sitio. Hay que tener en cuenta que este error se puede minimizar si se seleccionan las características del medidor de manera correcta antes de realizar la medición. 
          p(style="margin-left:0.7em") Para poner un caso específico, si las condiciones ambientales que define el fabricante del medidor es que la medida se haga a una temperatura de 25° C, tendremos un error sistemático si la temperatura ambiente a la que lo sometemos es de 30°C.
      .row.justify-content-center.align-items-center(titulo="Error aleatorio")
        .col-md-11.col-12.mb-4.mb-md-0
          p(style="margin-left:0.7em") La causa de este tipo de error es desconocida. A pesar de tener bien calibrado el medidor y cumplir con las condiciones ambientales sugeridas por el fabricante, aún puede existir un error desconocido. La forma correcta de minimizar los efectos de este tipo de errores es medir en repetidas ocasiones y aplicar métodos estadísticos para obtener un valor real.
    
    p.mt-5.mb-5(data-aos="fade-right") Comprendido el concepto de error, se continúa con la clase de precisión la cual hace referencia al error relativo que, como máximo, puede tener un instrumento de medida. Los valores asignados para la clase de precisión están determinados por normas específicas y para cada instrumento debe estar indicado en su escala. Por lo general, la clase de precisión se simboliza mediante un número que representa el porcentaje de error relativo como, por ejemplo, lo que se presenta en la tabla 1. 

    .row.justify-content-center.align-items-center
      .col-lg-3.col-12(data-aos="fade-right")
        figure
          img.text-center(style="width:280px; display:inline" src='@/assets/curso/temas/tema1/tema1-13.png')
      .col-lg-7.col-12(data-aos="fade-left")
        .col-12.titulo-sexto.color-acento-contenido.mt-3
          p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Clase de precisión</i>
        .tabla-b.color-acento-botones
          table
            thead.color-head-table
              tr
                th.text-center Clase de precisión
                th.text-center Error relativo
            tbody
              tr
                td.text-center 0,1
                td.text-center +/- 0,1%
              tr
                td.text-center 0,2
                td.text-center +/- 0,2%
              tr
                td.text-center 0,5
                td.text-center +/- 0,5%
              tr
                td.text-center 1
                td.text-center +/- 1%
              tr
                td.text-center 1,5
                td.text-center +/- 1,5%
              tr
                td.text-center 2,5
                td.text-center +/- 2,5%
              tr
                td.text-center 5
                td.text-center +/- 5%
    .row.justify-content-center.align-items-center
      p.col-lg-10.col-12.mt-5(data-aos="fade-left") Por ejemplo, si se tiene un amperímetro de rango de medición máximo de 100 amperios, y es de clase de precisión 1, el error máximo absoluto resulta de multiplicar el error relativo de la clase 1 igual a 1% y luego multiplicarlo por el rango máximo de medición que, en este caso, es 100 amperios. De lo anterior resulta:
      div.col-lg-8.col-12.p-0.mb-5.mt-4.bg-div(data-aos="fade-down")
        p.border-b 
        div.pb-4.text-center
          strong(style="border-bottom: 1px solid; padding: 2px 8px;") #[i Error máximo = 100 amperios x 1% = +/- 1 amperio]

    p.mb-4(data-aos="fade-right") Finalmente, se aborda el concepto de #[i burden], una palabra asociada a la carga máxima que puede soportar un instrumento de medida que garantice que se pueda confiar en la medida. Es decir, si la salida de un instrumento de medición se quiere enviar eléctricamente a otros medidores, hay una carga límite que se debe tener en cuenta para garantizar el error determinado por la clase de precisión.
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Calibración de instrumentos

    p.mb-5(data-aos="fade-right") El proceso de calibración es importante para los procesos de medición, ya que se podrá confiar en la medida que arroja un instrumento si está correctamente calibrado, pero, ¿qué pasaría si el medidor de la velocidad en un automóvil está descalibrado? Probablemente que un agente de la ley interponga una infracción por exceso de velocidad sin que el conductor se dé cuenta de que estaba en una velocidad no permitida. Otro ejemplo es: ¿qué pasaría si el medidor de energía de una vivienda está descalibrado? Probablemente el cobro que llegue en la factura no es confiable.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-lg-10.col-12
        .bloque-texto-g__img.bloque2-tema1
        .bloque-texto-g__texto.bloque-texto2-tema1.p-4
          p.mb-0 Según Villalobos (2006), <strong>los instrumentos deben proveer la exactitud necesaria para que las condiciones de diseño de un sistema o proceso se cumplan y funcione de manera apropiada.</strong> El nivel de confianza en los equipos de medición se logra realizando pruebas en intervalos de tiempo determinados y ajustando el instrumento de acuerdo a los resultados de la calibración. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-12(data-aos="fade-right")
        p.mb-5 En los procesos de calibración se toma como referencia un patrón, es decir a un instrumento que está debidamente calibrado en ambientes especiales de tal manera que se pueda utilizar como punto de comparación para determinar la diferencia en la medida con otro equipo que se pretende analizar.
      .col-md-10.col-12(data-aos="fade-down")
        .cajon.color-acento-contenido.p-4.mb-4
          p En Colombia la calibración de los instrumentos de medida la realizan organizaciones públicas y privadas creadas para tal fin, las cuales deben estar autorizadas y avaladas previamente por el Organismo Nacional de Acreditación de Colombia (ONAC). Por lo general, cuando un equipo ha pasado por un proceso de calibración, se expide un certificado que incluye el resultado de las pruebas y el dictamen de la calibración.
          


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        //titulo: 'Grupo de Lanzamientos 1',
        texto: `
        <p>Si practicamos tiro al blanco con dardos, se puede asumir que el valor real es el centro del tablero, como se muestra en la siguiente figura.</p>
        <p>Ahora vamos a hacer varios grupos de lanzamientos. Cada lanzamiento se compone de seis intentos. Si hacemos tres grupos de lanzamientos obtenemos los siguientes resultados. Cada punto amarillo es el resultado de un lanzamiento.</p>
        `,
        imagen: require('@/assets/curso/temas/tema1/tema1-08.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grupo de Lanzamientos 1',
        texto: `
        <p>Observa el primer lanzamiento, ¿qué puedes concluir?, ¿hay exactitud?, ¿hay precisión?</p>
        <p>De este lanzamiento se puede concluir:</p>
        <ol class="lista-ol--cuadro">
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>1</span>
            </div>
            <span>
              Que fue <strong>impreciso</strong>, porque los puntos amarillos están muy separados unos de otros.
            </span>
          </li>
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>2</span>
            </div>
            Que fue <strong>inexacto</strong>, porque ningún punto está cercano al centro del tablero.
          </li>
        </ol>
        `,
        imagen: require('@/assets/curso/temas/tema1/tema1-09.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grupo de Lanzamientos 2',
        texto: `
        <p>Observa nuestra segundo lanzamiento, ¿qué puedes concluir?</p>
        <p>De este lanzamiento se puede concluir:</p>
        <ol class="lista-ol--cuadro">
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>1</span>
            </div>
            <span>
              Que fue <strong>impreciso</strong>, porque los puntos amarillos están muy separados unos de otros.
            </span>
          </li>
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>2</span>
            </div>
            Que fue <strong>exacto</strong>, porque los puntos están cercanos al centro del tablero.
          </li>
        </ol>
        `,
        imagen: require('@/assets/curso/temas/tema1/tema1-10.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grupo de Lanzamientos 3',
        texto: `
        <p>El último lanzamiento fue diferente a los otros, ¿lo percibes?, ¿qué se puede afirmar en este caso?</p>
        <p>De este lanzamiento se puede concluir:</p>
        <ol class="lista-ol--cuadro">
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>1</span>
            </div>
            <span>
              Que fue <strong>preciso</strong>, porque los puntos amarillos están muy cerca unos de otros.
            </span>
          </li>
          <li>
            <div class="lista-ol--cuadro__vineta v--green">
              <span>2</span>
            </div>
            Que fue <strong>inexacto</strong>, porque los puntos están lejanos al centro del tablero.
          </li>
        </ol>
        `,
        imagen: require('@/assets/curso/temas/tema1/tema1-11.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
