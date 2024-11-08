const app = Vue.createApp({
    data() {
      return {
        nuevoContacto: {
          name: '',
          cel: '',
          categoria: ''
        },
        contactos: [],
        contactId: 1
      };
    },
    computed: {
      totalMensajes() {
        return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
      },
      totalLlamadas() {
        return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
      }
    },
    methods: {
      agregarContacto() {
        if (this.nuevoContacto.name && this.nuevoContacto.cel.length === 10 && this.nuevoContacto.categoria) {
          this.contactos.push({
            ...this.nuevoContacto,
            id: this.contactId++, 
            mensajes: 0,
            llamadas: 0
          });
          this.nuevoContacto.name = '';
          this.nuevoContacto.cel = '';
          this.nuevoContacto.categoria = '';
        } else {
          alert("Por favor complete todos los campos y asegúrese de que el teléfono tenga 10 dígitos.");
        }
      },
      removeContacto(index) {
        this.contactos.splice(index, 1);
      },
      incrementoMensajes(contacto) {
        if (contacto.mensajes < 25) {
          contacto.mensajes++;
        }
      },
      decrementoMensajes(contacto) {
        if (contacto.mensajes > 0) {
          contacto.mensajes--;
        }
      },
      incrementoLlamadas(contacto) {
        if (contacto.llamadas < 15) {
          contacto.llamadas++;
        }
      },
      decrementoLlamadas(contacto) {
        if (contacto.llamadas > 0) {
          contacto.llamadas--;
        }
      }
    }
  }).mount('#app');
  