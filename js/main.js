$(document).ready(function () {

    var $field1 = $('.number1');
	var	$field2 = $('.number2');
	var	result = $('.result');
	
	$('.btn').click(function() {
		

		   
	});

	function computation() {
		var value1 = +$field1.val();
		var value2 = +$field2.val();
		var action = self = $(this).val();
		var sign = $('.btn:checked').val();

	
		switch(sign) {
			case "+":
				result.val(value1 + value2);
				break;
			case "-":
				result.val(value1 - value2);
				break;
			case "*":
				result.val(value1 * value2);
				break;
			case "/":
				if(value2 == 0) return result.val("Деление на 0 невозможно");
				result.val(value1 / value2);                    
				break;
			}

	}

	$('.nmbr').on('keyup', computation);
	$('.btn').on('click', computation);




});
