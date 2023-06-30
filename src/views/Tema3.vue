<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medida de potencia trifásica
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-left")
        img.mb-0(src="@/assets/curso/temas/tema3/tema3-01.png")
      .col-12(data-aos="fade-right")
        p.mb-5.mt-5 En los circuitos trifásicos las magnitudes de corriente y voltaje se miden de forma monofásica, es decir, se usan los amperímetros y voltímetros monofásicos para medir las magnitudes de fase y las de línea de forma individual y acorde con la topología del circuito (Y o Δ). En las siguientes figuras se muestra un ejemplo de cada caso.
    
    .row.justify-content-between.align-items-center.mb-4
      .col-lg-6.col-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Ejemplo 1</i> 
        img(src='@/assets/curso/temas/tema3/tema3-02.svg')  
      .col-lg-6.col-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Ejemplo 2</i> 
        img(src='@/assets/curso/temas/tema3/tema3-03.svg')            
    
    Separador
    div.row.animacion1.pt-3.mb-4.pb-3.justify-content-between.align-items-center
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Instrumentos trifásicos
      .col-lg-7.col-12(data-aos="fade-right")
        p El teorema de Blondel establece que la potencia o la energía de un circuito de N fases puede ser medida por N elementos de medición monofásicos y con los circuitos de tensión conectados en cada fase a cualquier punto común.
        p En el caso trifásico, entonces, estas medidas se pueden realizar de dos formas: usando instrumentos monofásicos y sumando las tres magnitudes de fase obtenidas o usando instrumentos trifásicos directamente. En el primer caso se procede en cada fase como se explicó en los apartados 2.3 y 2.6, respectivamente. En el segundo caso se usa un medidor de potencia o energía trifásico, el cual, internamente, equivale a tres dispositivos monofásicos (conocidos como elementos) y su lectura corresponde a la suma de las magnitudes de cada fase. Ahora se verá cómo se conectan estos dispositivos de tres elementos.
      .col-lg-5.col-12(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/tema1-11.png')   
       
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Diagramas de conexión
    p.mb-5(data-aos="fade-right") La forma de conexión de los vatímetros y contadores es la misma en cada caso, lo único que cambia es el instrumento. Cuando las magnitudes de los voltajes y corrientes están dentro del rango de las magnitudes nominales del instrumento, las conexiones de las bobinas de tensión y de corriente se pueden realizar de forma directa y en este caso la lectura del instrumento es igual a la cantidad medida. A este método de conexión se le conoce como medida directa, como se muestra en la siguiente figura. 
    
    .row.justify-content-center.align-items-center
      .col-lg-8.col-10(data-aos="fade-in-out")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Medida directa</i> 
        img(src='@/assets/curso/temas/tema3/tema3-04.svg')
      .col-lg-10.col-12.mt-5(data-aos="fade-in-out")
        p Cuando la magnitud de la corriente a medir es alta, típicamente mayor de 100 [A], aunque la resistencia de la bobina de corriente es baja, su caída de tensión I*R afecta significativamente la precisión de la medida. Por esta razón, en estos casos se usan instrumentos de conexión directa para las bobinas de voltaje y de conexión indirecta para las bobinas de corriente, es decir, a través de transformadores de corriente con razón de transformación tal que la magnitud de la corriente a medir esté dentro del rango de la corriente nominal del primario y la corriente nominal del secundario corresponda con el valor nominal del instrumento (comercialmente normalizada a 1 [A] o 5 [A]). Por ejemplo, si se requiere medir el consumo de energía de una carga cuya corriente nominal es de 250 [A] con un medidor de corriente nominal 5 [A] deben usarse transformadores de corriente de 300/5. A este método de conexión se le conoce como #[strong medida semidirecta].
      .col-lg-10.col-12.mt-5-mb-5.pt-4(data-aos="fade-in-out")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Medida semidirecta</i> 
        img(src='@/assets/curso/temas/tema3/tema3-05.png')
      p.mt-5(data-aos="fade-in-out") Cuando además de la corriente, también la magnitud del voltaje a medir es alta, típicamente mayor de 600 [V], debido a consideraciones de aislamiento, se usan instrumentos de conexión indirecta para las bobinas de voltaje, es decir, a través de transformadores de tensión con razón de transformación tal que la magnitud del voltaje a medir esté dentro del rango de voltaje nominal del primario y el voltaje nominal del secundario corresponda con el valor nominal del instrumento (comercialmente normalizado a 110 [V] o 230 [V]). Por ejemplo, si se requiere medir el consumo de energía de una carga cuyo voltaje nominal es de 13,2 [kV] con un medidor de voltaje nominal 110 [V] deben usarse transformadores de voltaje de 13.200/110. A este método de conexión se le conoce como #[strong medida indirecta.]

      .col-lg-8.col-10.mt-4(data-aos="fade-in-out")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Medida indirecta</i> 
        img(src='@/assets/curso/temas/tema3/tema3-06.svg')
      p.mt-5.mb-5(data-aos="fade-in-out") En circuitos sin neutro existe un caso especial en la aplicación del teorema de Blondel y es cuando se escoge como punto común de referencia una de las fases. En ese caso, el voltaje de dos elementos del instrumento corresponde al voltaje de línea y el voltaje del elemento restante sería 0, luego su lectura de potencia sería también 0 y podría, entonces, ser eliminado. Este esquema es conocido como conexión ARON y puede ser aplicado usando instrumentos trifásicos de dos elementos o usando dos instrumentos monofásicos sumando las lecturas individuales, las cuales pueden ser negativas si el factor de potencia es inferior a 0,5.
      
      .col-lg-10.col-12.mb-4(data-aos="fade-in-out")
        .cajon.color-acento-contenido
          .p-4.mb-lg-0.mb-0.pb-3 Una de las ventajas de la conexión Aron sobre la conexión con instrumentos de tres elementos es que resulta más económica y las desventajas son que requieren inversión de conexión para lecturas negativas y que en circuitos con neutro solo funciona para cargas equilibradas.
      
      .col-lg-10.col-12.mt-4(data-aos="fade-in-out")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Conexión Aron</i> 
        img(src='@/assets/curso/temas/tema3/tema3-07.svg')

</template>

<script>
export default {
  name: 'Tema3',
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
