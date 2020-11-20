const getName = function ()  {
    return 'Alex';
}

exports.getName = getName;

exports.welcomeMessage = function (name,days) {
    return "Välkommen" + name + ". Det var " + days + " dagar sedan du var inloggad!";
}
