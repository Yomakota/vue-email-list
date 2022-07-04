// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue(
    {
        el: '#root',
        data: {
            emails: [],
        },

        methods: {

            //creo la funzione per generare 10 indirizzi mail
            randMails() {
                for (let i = 0; i < 10; i++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        //pusho l'indirizzo nell'array
                        let mail = response.data.response;
                        this.emails.push(mail);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }
            }
        },

        created() {
            this.randMails();
        },
    }
)