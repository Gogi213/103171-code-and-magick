function getMessage (a, b) {
  if (typeof a === 'boolean') {
    if (a) {
      return 'Я попал в ' + b;
    }
    if (!a) {
      return 'Я попал в ' + b;
    }
  }
	//
  if (typeof a === 'number') {
    return 'Я прыгнул на ' + a * 100 + ' сантиметров';
  }
	//
  if (a instanceof Array && b instanceof Array) {
    var lenght = 0;
    for (var i = 0; i < a.length; i++) {
			lenght += a[i] * b[i];
    }
    return 'Я прошёл ' + length + ' метров';
  }

  if (a instanceof Array) {
    var sum = 0;
    for (var j = 0; j < a.length; j++) {
    	sum += a[j] ;
    }
    return 'Я прошёл ' + sum + ' шагов';
  }
}
