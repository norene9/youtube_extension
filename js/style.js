function time_form_input_handler(ev) {
	var form = ev.currentTarget;

	if (form.seconds.valueAsNumber == -1) {
		if (form.minutes.valueAsNumber > 0 || form.hours.valueAsNumber > 0 || form.days.valueAsNumber > 0) {
			form.minutes.valueAsNumber--;
			form.seconds.valueAsNumber = 59;
		} else {
			form.seconds.valueAsNumber = 0;
		}
	} else if (form.seconds.valueAsNumber == 60) {
		form.minutes.valueAsNumber++;
		form.seconds.valueAsNumber = 0;
	}

	if (form.minutes.valueAsNumber == -1) {
		if (form.hours.valueAsNumber > 0 || form.days.valueAsNumber > 0) {
			form.hours.valueAsNumber--;
			form.minutes.valueAsNumber = 59;
		} else {
			form.minutes.valueAsNumber = 0;
		}
	} else if (form.minutes.valueAsNumber == 60) {
		form.hours.valueAsNumber++;
		form.minutes.valueAsNumber = 0;
	}

	if (form.hours.valueAsNumber == -1) {
		if (form.days.valueAsNumber > 0) {
			form.days.valueAsNumber--;
			form.hours.valueAsNumber = 23;
		} else {
			form.hours.valueAsNumber = 0;
		}
	} else if (form.hours.valueAsNumber == 24) {
		form.days.valueAsNumber++;
		form.hours.valueAsNumber = 0;
	}

	if (form.days.valueAsNumber == -1) {
		form.days.valueAsNumber = 0;
	}
}

document.getElementById('time_form').addEventListener('input', time_form_input_handler);