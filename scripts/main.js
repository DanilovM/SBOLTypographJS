(function () {
    var runTypographButton = document.querySelector('.runTypographButton');
    var textareaInput = document.getElementById('textareaInput');

    function changeButtonCondition() {
        
        if (textareaInput.value.length != '') {
            runTypographButton.classList.remove('disabled');
            runTypographButton.addEventListener('click', runTypograph);
        } else {
            runTypographButton.classList.add('disabled');
            runTypographButton.removeEventListener('click', runTypograph);
        }
    }

    function textareaInputEventListener() {
        textareaInput.addEventListener('input', function() {
            changeButtonCondition();
          });
    }

    function runTypograph() {
        console.log("runTypograph");
    }

    changeButtonCondition();
    textareaInputEventListener();


  })();