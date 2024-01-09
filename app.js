
// Vue uygulamasını oluştur
const app = Vue.createApp({

    // v-if: Şartlı olarak bir elementin görünürlüğünü kontrol etmek için kullanılır.
    template: `
      <div v-if="showInfo">DENEME 1</div>
      <div v-show="!showInfo">DENEME 2</div> <!-- v-show olursa '!' işareti display'ini none yapar -->
      <button @click="toggle()">
        <!-- v-if ve v-else kullanımı: showInfo'nun durumuna bağlı olarak "Göster" veya "Gizle" mesajı gösterilir -->
        <span v-if="showInfo">Göster</span>
        <span v-else>Gizle</span>
      </button>
    `,

    // Vue uygulamasının veri bölümü, showInfo adında bir veri içerir
    data() {
        return {
            showInfo: true
        };
    },

    // Vue uygulamasının metot bölümü, showInfo durumunu tersine çeviren bir toggle metodu içerir
    methods: {
        // @click: Bir elemente tıklandığında belirtilen metodu çağırmak için kullanılır.(v-on:clik'in kısaltılmışı)
        toggle() {
            this.showInfo = !this.showInfo;
        }
    }
});

// Vue uygulamasını belirtilen #app elementine bağla
app.mount("#app");

