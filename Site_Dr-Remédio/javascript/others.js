$(function(){
    $("#erro").click(function(){
      Swal.fire({
            input: 'textarea',
            inputLabel: 'Nós conte sua dúvida para podermos resolver',
            inputPlaceholder: 'Digite sua dúvida aqui',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })

    });
});