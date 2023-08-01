<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La mayoría de los equipos, herramientas y accesorios que se usan son electrónicos o requieres de alguna variable eléctrica, por esta razón es necesario tener claridad frente a las magnitudes eléctricas más comunes que se emplean a diario en la industria, como son la tensión, la corriente, la resistencia, la capacitancia y la frecuencia, además de requerir la representación de diagramas eléctricos, y Analizar datos de mediciones de variables eléctricas. El siguiente mapa conceptual, orienta sobre el tema visto: 
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
