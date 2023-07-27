<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4(data-aos="fade-down-left")
      .col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/introduccion/img-02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De acuerdo con #[b #[i Purkait, Biswas, Das y Koley (2013)]], la medición es el acto, o el resultado de una comparación cuantitativa entre una determinada cantidad que, por lo general, desconocemos y una cantidad del mismo tipo elegido como unidad de referencia. 
              br
              br
              | Para entender un poco esta definición, partamos de un ejercicio. Supongamos que deseamos saber la longitud de una hoja de papel, ¿qué instrumento tomaría para medir?. Nuestra referencia podría ser una regla que está en unidades de centímetros o milímetros. El resultado de la medición es aumentado por una desviación del puntero sobre una escala predefinida o un número que representa la relación entre la cantidad desconocida y el estándar. 
    
    .row.mb-4(data-aos="fade-down")
      .col-12
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/introduccion/img-01.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              ul.lista-ul
                li 
                  i.fas.fa-angle-right(style="color:#AD84FF")
                  | El instrumento utilizado para comparar la cantidad desconocida se llama instrumento de medición.
                li 
                  i.fas.fa-angle-right(style="color:#AD84FF")
                  | El valor de la cantidad desconocida se puede medir por métodos directos o indirectos. En el método de medida directa, la cantidad desconocida se mide directamente en lugar de compararla con un estándar. En los métodos de medición indirecta, el valor de la cantidad desconocida se determina midiendo primero una cantidad relacionada y luego proceder a calcular la cantidad deseada en lugar de medirla directamente. 

    .row.justify-content-center.align-items-center.py-3(data-aos="fade-left")
      .col-12
        p Lo mencionado hasta aquí suele generar curiosidad y esa es la intención, porque la presente experiencia de aprendizaje se ha diseñado en torno a los instrumentos de medida. ¿Quiere aprender más sobre esto? Le recomendamos recorrer con disciplina e interés cada una de las temáticas y actividades de aprendizaje que se han creado pensando en usted. 
        p Recuerde, medir parámetros eléctricos permitirán adentrarse en el fascinante mundo de la medición. 
        p #[strong #[i Es momento de iniciar con su aprendizaje. ¡Bienvenido!]]

    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
