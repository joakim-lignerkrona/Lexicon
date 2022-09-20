
var runningInBrowser
try {
    runningInBrowser = window ? true : false
} catch (error) {
    runningInBrowser = false
}

//set inputvärlde från eventuell querystring
var number1 = runningInBrowser ? parseInt(getQueryVariable('n1')) : undefined
var number2 = runningInBrowser ? parseInt(getQueryVariable('n2')) : undefined
number1 ? '' : number1 = 5
number2 ? '' : number2 = 4

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(`${number1} plus ${number2} är: ${number1 + number2}`)

let person = {
    förnamn: 'Sven',
    efternamn: 'Göransson',
    ålder: 42
}

console.log(`Hej mitt namn är ${person.förnamn} ${person.efternamn} och jag är ${person.ålder} år gammal`)

if (runningInBrowser)
    try {
        document.writeln('<div id="console">')
        document.writeln('<pre><code>')
        document.writeln(number1 + number2)
        document.writeln(number1 - number2)
        document.writeln(number1 * number2)
        document.writeln(`${number1} plus ${number2} är: ${number1 + number2}`)
        document.writeln('</code></pre>')
        document.writeln('<pre><code>')
        document.writeln(`Hej mitt namn är ${person.förnamn} ${person.efternamn} och jag är ${person.ålder} år gammal`)
        document.writeln('</code></pre>')
        document.writeln('</div>')
    } catch (error) {
        console.log('Kör i webbläsaren för full funktionallitet')
    }



function getQueryVariable(variable) {
    try {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    } catch (error) {
        return NaN
    }

}