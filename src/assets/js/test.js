window.onload = function() {

    class Calculation {
        constructor() {
            this._symbols = {};
            this.defineOperator("!", this.factorial, "postfix", 6);
            this.defineOperator("^", Math.pow, "infix", 5, true);
            this.defineOperator("*", this.multiplication, "infix", 4);
            this.defineOperator("/", this.division, "infix", 4);
            this.defineOperator("+", this.last, "prefix", 3);
            this.defineOperator("-", this.negation, "prefix", 3);
            this.defineOperator("+", this.addition, "infix", 2);
            this.defineOperator("-", this.subtraction, "infix", 2);
            this.defineOperator(",", Array.of, "infix", 1);
            this.defineOperator("(", this.last, "prefix");
            this.defineOperator(")", null, "postfix");
            this.defineOperator("min", Math.min);
            this.defineOperator("sqrt", Math.sqrt);
        }

        // este metodo nos permita extender los operadores y las funciones:
        defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {

            // Guardamos los operadores que fueron escritos or su simbolos o nombres para ser usados como sean entrados
            // organizamos por orden de entra de derehca a izquierda,simboles y agregamos una expresion regular para los simbolos
            if (notation === "func") precedence = 0;
            this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
                [notation]: {
                    symbol,
                    f,
                    notation,
                    precedence,
                    rightToLeft,
                    argCount: 1 + (notation === "infix")
                },
                symbol,
                regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&') +
                    (/\w$/.test(symbol) ? "\\b" : "") // agregamos un break 
            });
        }
        last(...a) { return a[a.length - 1] }
        negation(a) { return -a }
        addition(a, b) { return a + b }
        subtraction(a, b) { return a - b }
        multiplication(a, b) { return a * b }
        division(a, b) { return a / b }
        factorial(a) {
            if (a % 1 || !(+a >= 0)) return NaN
            if (a > 170) return Infinity;
            let b = 1;
            while (a > 1) b *= a--;
            return b;
        }
        calculate(expression) {
            let match;
            const values = [],
                operators = [this._symbols["("].prefix],
                exec = _ => {
                    let op = operators.pop();
                    values.push(op.f(...[].concat(...values.splice(-op.argCount))));
                    return op.precedence;
                },
                error = msg => {
                    let notation = match ? match.index : expression.length;
                    return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
                },
                pattern = new RegExp(
                    // patron para los numeros
                    "\\d+(?:\\.\\d+)?|"
                    //y para los simbolos aqui
                    +
                    Object.values(this._symbols)
                    // ordemamos para que los simbolos mas largos sean trabajados primero
                    .sort((a, b) => b.symbol.length - a.symbol.length)
                    .map(val => val.regSymbol).join('|') +
                    "|(\\S)", "g"
                );
            let afterValue = false;
            pattern.lastIndex = 0; // aqui reiniciamos la expresion regular
            do {
                match = pattern.exec(expression);
                const [token, bad] = match || [")", undefined],
                    notNumber = this._symbols[token],
                    notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
                    notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
                // revisamos por errores de syntax:
                if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error(if input is in blank will show a 0)");
                if (afterValue) {
                    // Usualmente tenemos los operadores infix or postfix  (tlos cuales debe ser exclusivos)
                    const curr = notNumber.postfix || notNumber.infix;
                    do {
                        const prev = operators[operators.length - 1];
                        if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break;
                        // Aplicamos los operadores previos, ya que tiene precedencia sobre el actual
                    } while (exec()); // Salimos de ciclo despues de ejecutar un partentesis o funcion 
                    afterValue = curr.notation === "postfix";
                    if (curr.symbol !== ")") {
                        operators.push(curr);
                        // Postfix siempre tiene precedencia sobre cual quier operador que le sigue 
                        if (afterValue) exec();
                    }
                } else if (notNumber) { // prefix operador o funcion
                    operators.push(notNumber.prefix || notNumber.func);
                    if (notNumber.func) { // Requiere una apertura de parentesis 
                        match = pattern.exec(expression);
                        if (!match || match[0] !== "(") return error("Function needs parentheses")
                    }
                } else { // numeros 
                    values.push(+token);
                    afterValue = true;
                }
            } while (match && operators.length);
            return operators.length ? error("Missing closing parenthesis") :
                match ? error("Too many closing parentheses") :
                values.pop() // All done!
        }
    }
    Calculation = new Calculation(); // Create a singleton

    // I/O handling
    function perform() {
        const expr = document.getElementById('expr').value,
            result = Calculation.calculate(expr);
        document.getElementById('out').textContent = isNaN(result) ? result : '=' + result;
    }
    document.getElementById('expr').addEventListener('input', perform);
    perform();

    // Unas pequeñas pruebas para vereficar que va como se desea.
    const tests = [
        { expr: '1+2', expected: 3 },
        { expr: '1+2*3', expected: 7 },
        { expr: '1+2*3^2', expected: 19 },
        { expr: '1+2*2^3^2', expected: 1025 },
        { expr: '-3!', expected: -6 },
        { expr: '12---11+1-3', expected: -1 },
        { expr: 'min(2,1,3)', expected: 1 },
        { expr: '(2,1,3)', expected: 3 },
        { expr: '4-min(sqrt(2+2*7),9,5)', expected: 0 },
        { expr: '2,3,10', expected: 10 }
    ]

    for (let { expr, expected }
        of tests) {
        let result = Calculation.calculate(expr);
        console.assert(result === expected, `${expr} should be ${expected}, but gives ${result}`);
    }

}