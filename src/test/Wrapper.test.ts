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
("unlimited", 3) -> "unl\nimi\nted"
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
const lineBreak = "\n"
function wrap(text: string, columnsNumber: number) {
    if (columnsNumber < text.length) {
        const firstPartOfText = text.substring(0, columnsNumber)
        const secondPartOfText = text.substring(columnsNumber).trim()
        const textWithLineBreaks = `${firstPartOfText}${lineBreak}${secondPartOfText}`
        columnsNumber += columnsNumber + 1
        return wrap(textWithLineBreaks, columnsNumber)
    }
    return text
}

let initialPosition = 0
function searchCutOffPoint(text: string, number: number) {
    const positionOfTheCharacterToBeReplaced = text.indexOf(" ", initialPosition)
    return positionOfTheCharacterToBeReplaced;
}

function replacesBlankSpaceWithALineBreak(text: string, number: number) {
    return "Hello\nworld";
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
        expect(wrap("world", 5)).toBe("world")
    })
    // ("world", 3) -> "wor\nld"
    it("add a line breaks", () => {
        expect(wrap("world", 3)).toBe("wor\nld")
    })
    // ("unlimited", 3) -> "unl\nimi\nted"
    it("adds more than one line break", () => {
        expect(wrap("unlimited", 3)).toBe("unl\nimi\nted")
    })
    // ("Hello world", 5) -> "Hello\nworld"
    // ("Hello world", 7) -> "Hello\nworld"
    it("add a line break and remove space", () => {
        expect(wrap("Hello world", 5)).toBe("Hello\nworld")
        expect(wrap("Hello world", 7)).toBe("Hello\nworld")
    })

    it("search cut off point when the string contains more than one blank space", () => {
        expect(searchCutOffPoint("Hello world", 7)).toBe(5)
        expect(searchCutOffPoint("Old time", 7)).toBe(3)
    })

    it("has not a blank space before the line break", () => {
        expect(replacesBlankSpaceWithALineBreak("Hello world", 5)).toBe("Hello\nworld")
    })

    it("has a blank space before the line break", () => {
        expect(replacesBlankSpaceWithALineBreak("Hello world at all", 11)).toBe("Hello world\nat all")
    })
})

// Ahora hay que cortar justo por el espacio sabiendo que la siguiente palabra cabe en el ancho de columna