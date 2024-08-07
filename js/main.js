
//Lista con variabile che richiamo in data return di vue.js
const contacts = [
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]
const { createApp } = Vue

createApp({
    data() {
        return {
            userClicked: 0,
            lastAccess: "Ultimo Accesso",
            hoursMessage: new Date().toLocaleString(),
            userMessageInput: "",
            temp: 0,
            searchInput: "",
            contacts,
        }
    },
    methods: {
        clicked(index) {
            this.userClicked = index
        },
        sendMessage() {
            //creo variabile che mi serve per la data e l'ora dopo
            const today = new Date()
            //creo variabili per mettere lo 0 quando i numeri delle date o dei minuti sono inferiori a 10
            const day = String(today.getDate()).padStart(2, "0");
            const month = String(today.getMonth()).padStart(2, "0");
            const hours = String(today.getHours()).padStart(2, "0");
            const minutes = String(today.getMinutes()).padStart(2, "0");
            const seconds = String(today.getSeconds()).padStart(2, "0");
            const date = day + "/" + month + "/" + today.getFullYear() + " " + hours + ":" + minutes + ":" + seconds

            const newMessage = {   //// creo data e ora aggiundo le proprietà alla varibaile che ho creato prima
                date: date,
                //// proprieta che mi dice i secondi da gennaio pensavo che mi creava data
                // date: Date.now(),
                message: this.userMessageInput,
                status: 'sent'
            };

            this.contacts[this.userClicked].messages.push(newMessage)

            this.userMessageInput = ""

            this.temp = setTimeout(() => {
                this.contacts[this.userClicked].messages.push(
                    {
                        date: date,
                        message: "Ciao",
                        status: 'received'
                    },
                )
            }, 1000);
        },

        deleteMessage(userIndex, messageIndex) {
            let elemento = this.contacts[userIndex].messages
            elemento.splice(messageIndex, 1)
        },
        // axios() {
        //   axios.get(/*INSERIRE INDIRIZZO API*/).then((/*ARGOMENTO FUNZIONE*/) => {
        //   })
        // }

        lastMessage(elemento) {
            return elemento.messages.length - 1
        }
    },

    mounted() {
        // this.axios()
    }
}).mount('#app')