<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de instrumentos
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-down")
        img.mb-0(src="@/assets/curso/temas/tema2/tema2-01.png")
      .col-lg-12.col-12.mt-5(data-aos="fade-left")
        p En los sistemas de gestión de la energía, <strong>la medición es una fuente de información primaria para la planificación de las acciones de mejora para el desempeño energético.</strong> Adicionalmente, a través de los instrumentos de medida se observa y concluye, posteriormente, la efectividad de dichas acciones al interior de la organización.
        p Existen diferentes tipos de instrumentos que se deben seleccionar de acuerdo con la variable eléctrica a medir. Como se enunció antes, cada instrumento de medición posee unas características propias y tecnologías específicas para efectuar la medida.
        p A continuación, se presentan los tipos de instrumentos más utilizados en el sector para la medición de variables eléctricas.
    
    .row.justify-content-center.align-items-center.mb-4.animacion1.p-3
      div.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Voltímetros
      div.col-lg-5.col-12(data-aos="fade-right")
        p El voltímetro es un instrumento de medición utilizado para medir, de forma segura, la diferencia de potencial o voltaje entre dos puntos de un circuito eléctrico o electrónico. 
        p Para medir el voltaje entre dos puntos no es necesario desconectar el circuito, ya que se conecta en paralelo. Internamente la entrada del voltímetro tiene una alta resistencia que no modifica significativamente el comportamiento del circuito a medir. El voltímetro está conformado por:
      div.col-lg-7.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-02.svg', alt='Voltímetros')
      div.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Amperímetros
      p(data-aos="fade-right") El amperímetro es un instrumento utilizado para medir la corriente eléctrica al interior de un circuito eléctrico; la unidad que utiliza el amperímetro es el amperio.
      p(data-aos="fade-right") Para medir la corriente en un circuito, se requiere que dicha corriente circule a través del amperímetro; normalmente esto se conoce como conexión en serie. Por tal razón, es necesario abrir el circuito antes de conectar el amperímetro.
      
      .col-12.col-md-6.col-xl-5.mb-3.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = true")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-2.p-xl-5
              h2.text-center Amperímetro analógico
              p.text-center Utiliza internamente un medidor denominado galvanómetro compuesto a su vez por una aguja indicadora, una bobina, dos imanes y un resorte que generan la oscilación de la aguja durante la medición.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-03.svg')})`, 'background-size':' 100%', 'background-repeat': 'no-repeat'}")
      .col-12.col-md-6.col-xl-5.mb-5.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = true")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-04.svg')})`, 'background-size':' 100%', 'background-repeat': 'no-repeat'}")
            .tarjeta-slide__contenido.p-3.p-xl-5
              h2.text-center Amperímetro digital
              p.text-center Es un instrumento que, a diferencia del analógico, no utiliza partes móviles, sino componentes electrónicos para la medición. Adicionalmente posee una pantalla en lugar de una aguja para la lectura de la corriente.
      
      div.mt-5.col-lg-10.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Pinza amperimétrica
      p.col-lg-10.col-12(data-aos="fade-left") Pertenece a la clasificación de amperímetro digital, sin embargo, tiene una ventaja constructiva que permite medir la corriente en un conductor sin necesidad de abrir el circuito eléctrico. Es el más utilizado en las empresas e industrias por su practicidad y funcionalidad, pero solo funciona en corriente alterna.
      
      div.mt-2.col-lg-10.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-05.png', alt="Pinza amperimétrica")

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Vatímetro y varímetro
      p Es un instrumento usado para medir la potencia consumida o generada por un elemento de circuito. Su unidad de medida es el vatio <strong>[W]</strong> y la ley de Joule establece que es igual a voltaje por corriente; por lo tanto, un vatímetro está compuesto internamente por un amperímetro y un voltímetro y el producto de sus lecturas equivale a la lectura de potencia. Para su uso se requiere conectar respecto a la carga la bobina de corriente en serie y la bobina de tensión en paralelo.
      p.mb-4 Al igual que los amperímetros y voltímetros, existen vatímetros analógicos y digitales.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-right")
        .tarjeta-avatar.col-12
          img(style="width: 130.64px;" src="@/assets/curso/temas/tema2/tema2-06.svg")   
          .tarjeta.col-12.p-4.py-5(style="background:#ECE5F9")
            p.mb-0.text-center.mt-4
              strong Vatímetros analógicos
      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-left")
        .tarjeta-avatar.col-12
          img(style="width: 130.64px;" src="@/assets/curso/temas/tema2/tema2-07.svg")   
          .tarjeta.col-12.p-4.py-5(style="background:#ECE5F9")
            p.mb-0.text-center.mt-4
              strong Vatímetros digitales
      
      .col-lg-10.col-12.mt-3.mt-5(data-aos="fade-down")
        p El vatímetro se usa en corriente alterna para medir la potencia promedio, conocida también como potencia activa, la cual es igual al producto de los valores eficaces de corriente y voltaje por el <strong>coseno</strong> del ángulo de desfase entre ellos. El producto de los valores eficaces de corriente y voltaje por el <strong>seno</strong> del ángulo de desfase entre ellos se conoce como potencia reactiva y su unidad de medida es el voltio amperio reactivo [VAR].
        p El instrumento de medida usado para la potencia reactiva se conoce como varímetro, que constructivamente es igual a un vatímetro con una bobina de gran inductancia conectada internamente en serie con la bobina de voltaje para obtener un desfase adicional de 90º y como sin Φ = cos (90° –Φ) la lectura del vatímetro así conectado equivale a la potencia reactiva. Se conecta igual que el vatímetro; también existen varímetros análogos y digitales.
   
    .row.justify-content-center.align-items-center.mb-4
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Multímetros
      p(data-aos="fade-left") Es un instrumento que se construye con la capacidad de medir varias magnitudes, una a la vez, como voltaje, corriente y resistencia, principalmente. Viene equipado con un selector desde donde es posible seleccionar el tipo de medida, el tipo de corriente alterna o continua y la escala de la lectura.

      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-right")
        .tarjeta-avatar.col-12
          img(style="width: 130.64px;" src="@/assets/curso/temas/tema2/tema2-08.svg")   
          .tarjeta.col-12.p-4.py-5(style="background:#ECE5F9")
            p.mb-0.text-center.mt-4
              strong Multímetro analógico
      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-left")
        .tarjeta-avatar.col-12
          img(style="width: 130.64px;" src="@/assets/curso/temas/tema2/tema2-09.svg")   
          .tarjeta.col-12.p-4.py-5(style="background:#ECE5F9")
            p.mb-0.text-center.mt-4
              strong Multímetro digital
      p.mt-5.mb-4(data-aos="fade-right") Los hay análogos y digitales, algunos de estos últimos con capacidad de medir valores eficaces de ondas alternas diferentes a la senoidal lo que se conoce como #[i True RMS] o valor eficaz verdadero. Los instrumentos análogos y los digitales #[i No True RMS] en alterna solo miden correctamente ondas senoidales, porque, según la teoría de circuitos, el valor RMS corresponde en ese caso al valor máximo dividido entre la raíz de dos.

    .row.justify-content-center.align-items-center.mb-4.animacion1.p-3
      div.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Transformadores de medida
      .col-12(data-aos="fade-right")
        p Los transformadores de medida son elementos usados en corriente alterna para cambiar el rango de la medida de los instrumentos y para garantizar la seguridad de los usuarios aislando la etapa de potencia donde se manejan normalmente altos niveles de corriente y voltaje de la etapa de medida donde se encuentran localizados los instrumentos.
        p De esta manera, los circuitos primarios de los transformadores, de voltaje y corriente, están conectados a las líneas de potencia y los lados secundarios están conectados a los instrumentos de medida. El cociente de los valores nominales de las magnitudes del primario dividido entre el valor nominal de las magnitudes del secundario se conoce como relación de transformación.
        p Se dispone de dos tipos de transformadores de medida, así:

    TabsC.color-acento-botones.mb-4(data-aos="fade-right")
      .py-3.pt-0(titulo="Transformadores de corriente (CT)")
        .row.justify-content-between.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
          .col-lg-4.col-10
            img(src='@/assets/curso/temas/tema2/tema2-10.svg')             
          .col-lg-8.col-12
            p.mt-3 El lado primario se conecta en serie con la carga y el secundario en serie con las bobinas de corriente de los instrumentos de medida. El lado secundario de un transformador de corriente nunca debe ser abierto en condiciones de carga ya que la alta inductancia de este tipo de transformadores hará que el voltaje en bornes V = L (di/dt) crezca hasta superar el valor de la rigidez dieléctrica del aire ocasionando un arco eléctrico que sólo se extingue con la destrucción del transformador y todo lo que esté en su área de influencia.

      .py-3.pt-0(titulo="Transformadores de potencial (PT)")
        .row.justify-content-between.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-5
          .col-lg-4.col-10
            img(src='@/assets/curso/temas/tema2/tema2-11.svg') 
          .col-lg-8.col-12
            p.mb-lg-0.mb-3 El lado primario se conecta en paralelo con la carga y el secundario en paralelo con las bobinas de voltaje de los instrumentos de medida. Normalmente se usan cuando el nivel de voltaje de la carga es en media tensión o superior.
    
    .row.justify-content-center.align-items-center.mb-4
      div.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:30px;" src="@/assets/componentes/ico-01.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Contadores monofásicos de energía eléctrica
      p.mb-5(data-aos="fade-right") Es un instrumento usado para medir la energía eléctrica y como la energía es igual a la potencia por el tiempo, un contador de energía es esencialmente un vatímetro al que se le incluye un elemento acumulador que tiene en cuenta el tiempo. 

      .col-12.col-md-6.col-xl-5.mb-3.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = true")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-2.p-xl-5
              h2.text-center Contador analógico
              p.text-center En el caso de los contadores análogos ese elemento es un disco giratorio cuya velocidad angular es proporcional a la potencia y el número de vueltas es proporcional a la velocidad angular (potencia) por el tiempo, es decir a la energía.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-12.svg')})`, 'background-size':' 100%', 'background-repeat': 'no-repeat'}")
      .col-12.col-md-6.col-xl-5.mb-5.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = true")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-13.svg')})`, 'background-size':' 100%', 'background-repeat': 'no-repeat'}")
            .tarjeta-slide__contenido.p-3.p-xl-5
              h2.text-center Contador digital
              p.text-center En el caso de los contadores digitales ese elemento está compuesto por  el procesador matemático donde se realiza la sumatoria del producto de los datos del muestreo de las formas de onda  de voltaje y corriente y la memoria donde se acumulan dichos valores.
      p.mt-5(data-aos="fade-right") El diagrama de conexión de estos instrumentos es el mismo que el usado para los vatímetros.
      p.mb-5(data-aos="fade-right") La unidad de medida de la energía usada en los contadores es el kilovatio hora <strong>[kW-h].</strong>

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
