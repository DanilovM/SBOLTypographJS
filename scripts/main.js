(function () {

    function changeButtonCondition() {
        var runTypographButton = document.querySelector('.runTypographButton');
        if (textareaInputCondition > 0) {
            runTypographButton.classList.remove('disabled');
        } else {
            runTypographButton.classList.add('disabled');
        }
    }

    function textareaInputCondition() {
        var textareaInput = document.getElementById('textareaInput');
        var textareaInputValue = textareaInput.value;
        return textareaInputValue.length;
    }
    changeButtonCondition();
    
  
  })();