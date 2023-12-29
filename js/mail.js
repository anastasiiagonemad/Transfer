function check_form(cur_id) {
	var error = 0
	$('#' + cur_id + ' input[type="text"]').each(function () {
		if ($(this).val() == '') {
			$(this).css('border', '1px solid red')
			error = 1
		} else {
			$(this).css('border', '1px solid #3c3c3c')
		}
	})

	return error
}

$('body').on('click', 'input[type="submit"]', function (e) {
	e.preventDefault()

	var cur_id = $(this).closest('form').attr('id')

	var error = check_form(cur_id)
	if (error == 0) {
		var msg = $('#' + cur_id).serialize()
		console.log(msg)
		$.ajax({
			dataType: 'json',
			type: 'POST',
			url: 'mail.php',
			data: msg,
			success: function (result) {
				if (result.status == 'success') {
					closePopup()
					openThanks()
				} else {
					alert('Не заполнены обязательные поля, повторите отправку')
				}
			},
			error: function (xhr, str) {
				alert('Возникла ошибка: ' + xhr.responseCode)
			},
		})
	}
})
