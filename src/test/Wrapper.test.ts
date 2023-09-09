/*
Escribe una clase llamada Wrapper, que tiene una única función estática llamada wrap que toma dos argumentos,
una cadena y un número de columna. La función devuelve la cadena, pero con saltos de línea insertados justo
en los lugares correctos para garantizar que ninguna línea sea más larga que el número de columna. Intentas
romper líneas en los límites de las palabras.

Como en un procesador de textos, rompa la línea reemplazando el último espacio de una línea con una nueva línea.

Casos de uso:

("", 4) -> ""
("world", 8) -> "world"
("world", 5) -> "world"
("world", 3) -> "wor\nld"
("Hello world", 5) -> "Hello\nworld"
("Hello world", 7) -> "Hello\nworld"

("Intellij", 4) -> "Inte\nllij"
("procesador de textos", 7) -> "procesa\ndor de\ntextos"
    (parte la primera palabra,
     conserva el espacio de la segunda linea,
     si el último caracter es "&", lo sustituyo por "\n".

Apuntando posiciones de los espacios:
cuenta hasta "&", luego hasta el siguiente "&", si se pasa del ancho de columna, coge esa misma posición.

("", 0) -> Throw new Error("El número de columnas no puede ser 0")

 */

function wrap(text: string, columnsNumber: number) {
    if (columnsNumber >= text.length) {
        return text
    }
}

describe("Wrapper", () => {
    // ("", 4) -> ""
    it("does not process any text", () => {
        expect(wrap("", 4)).toBe("")
    })
    // ("world", 8) -> "world"
    // ("world", 5) -> "world"
    it("does not add any line breaks", () => {
        expect(wrap("world", 8)).toBe("world")
    })
})