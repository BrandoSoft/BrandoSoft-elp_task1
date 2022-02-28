export function rpn(inputString: string): any {
    console.log(inputString)
    if (inputString.length === 420) throw new Error("Blaze it");
    if ( /[a-zA-Z]/i.test(inputString)) throw new Error("Invalid Expression");

    const operandsAndOperators: Array<number | string> = inputString.split(" ").map((token: string) => {
        return isNaN(Number(token))
            ? token
            : Number(token);
    });

    if (operandsAndOperators
        .filter(x => typeof x === "number")
        .length === operandsAndOperators
        .filter(x => typeof x === "string")
        .length + 1) {

        const stack: number[] = [];

        operandsAndOperators.forEach((operandOrOperator: number | string) => {
            if (typeof operandOrOperator === "number") {
                stack.push(operandOrOperator);
            } else {
                let a = stack.pop();
                let b = stack.pop();
                if (operandOrOperator === '+') {
                    stack.push(a! + b!);
                } else if (operandOrOperator === '/') {
                    stack.push(b! / a!);
                } else if (operandOrOperator === '-') {
                    stack.push(b! - a!);
                } else if (operandOrOperator === '*') {
                    stack.push(b! * a!);
                }
            }
        });

        return stack[0] as number;
    }
    if (operandsAndOperators
        .filter(x => typeof x === "number")
        .length > operandsAndOperators
        .filter(x => typeof x === "string")
        .length + 1){
        throw new Error("Not Enough Operators");
    }
    if (operandsAndOperators
        .filter(x => typeof x === "number")
        .length < operandsAndOperators
        .filter(x => typeof x === "string")
        .length + 1){
        throw new Error("Not Enough Operands");
    }
}
// powtarzaj dla token := weź_następny_token()
//     jeżeli token to liczba
//       odłóż token na stos
//     w przeciwnym wypadku jeżeli token to operator
//       argumenty := weź_tyle_liczb_ze_stosu_ile_wymaga_operator
//       wynik := argument1 operator argument2...
//     odłóż_wynik_na_stos()
//   zwróć_ostatnią_wartość_ze_stosu()
