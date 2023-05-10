<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.py-0(data-aos="fade-left")
      .col-12
        img.mb-lg-0.mb-3(src="@/assets/curso/introduccion/img01.png")
      .col-lg-10.col-12.mt-5
        p.mb-lg-0.mb-5 Apreciado aprendiz, bienvenido a este momento de aprendizaje relacionado con los principios de las mediciones eléctricas. Para empezar, se sugiere observar el siguiente recurso de aprendizaje.
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    .row.justify-content-center.align-items-center.py-0(data-aos="fade-left")
      .col-12.mt-5
        p.mb-lg-0.mb-5 Es momento de iniciar con su aprendizaje.
          strong  ¡Bienvenido!
    
    
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
