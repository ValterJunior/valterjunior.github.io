(function(){

    var success     = $("#msg-success");
    var error       = $("#msg-error");
    var modal       = $("#contact-modal");
    var btn_submit  = $("#contact-form input[type=submit]");

    $("#email-link").on("click", function(){
      modal.modal("show");
    });

    $("#contact-form").submit( function(e){

        e.preventDefault();


        $.ajax({
            url: "https://formspree.io/jr.valter.oliveira@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            beforeSend: function(){
              clearMessages();
              formatButton("Sending message!", false);
            },
            success: function(){
              formatButton("Send", true);
              enableSuccess();
              closeModal();
            },
            error: function(error){
              formatButton("Send", true);
              enableError();
            }
        });

      });

    modal.on("show.bs.modal", function(){
      clearMessages();
    });

    function formatButton( text, enable ){

      btn_submit.val(text);
      btn_submit.prop("disabled", !enable);

    }

    function closeModal(){

      setTimeout( function(){
        modal.modal("hide");
      }, 3000 );

    }

    function clearMessages(){
      success.hide();
      error.hide();
    }

    function enableSuccess(){
      error.hide();
      success.show();
    }

    function enableError(){
      clearMessages();
      success.hide();
      error.show();
    }

}());

// });
