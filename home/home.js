// On récupère l'id du premier bloc
new Vue({
    el: '#title-paragraph-game-explanation',
    data: {
        // On défini la variable show à true
        show: true
    }
})
new Vue({
    el: '#submit-contact',
    data: {
        // On défini la variable 
        
    },
    methods: {
        submit: function(){
            swal("Envoyé !", "Promis, je te répond après mon café", "success");
        }
    }
})

/* Affichage du popover sur l'image dans le footer */
$(function() {
    $('[data-toggle="popover"]').popover()
})




