const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Kalkulator Sederhana ===");

rl.question("Masukkan angka pertama: ", (num1) => {
    rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
        rl.question("Masukkan angka kedua: ", (num2) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let hasil;

            switch (operator) {
                case "+":
                    hasil = num1 + num2;
                    break;
                case "-":
                    hasil = num1 - num2;
                    break;
                case "*":
                    hasil = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        console.log("Error: Tidak bisa membagi dengan nol.");
                        rl.close();
                        return;
                    }
                    hasil = num1 / num2;
                    break;
                default:
                    console.log("Operator tidak valid.");
                    rl.close();
                    return;
            }

            console.log(`Hasil: ${hasil}`);
            console.log("credit: erundev");
            rl.close();
        });
    });
});
