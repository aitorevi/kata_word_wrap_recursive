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
("abc def", 7) ->  "abc def"
("abc def", 6) ->  "abc\ndef"
("abc defghi", 5) ->  "abc\ndefgh\ni"
("procesador de textos", 7) -> "procesa\ndor de\ntextos"
("", 0) -> Throw new Error("El número de columnas no puede ser 0")

 */

const LINE_BREAK = "\n"

function wrap(text: string, columnWidth: number) {
    if (columnWidth >= text.length) {
        return text;
    }
    const shallWrapUsingWhiteSpace = text.lastIndexOf(" ") > -1 && text.lastIndexOf(" ") < columnWidth;
    const indexOfWithSpace = shallWrapUsingWhiteSpace ? text.lastIndexOf(" ") : columnWidth;
    const firstPartText = `${text.substring(0, indexOfWithSpace)}${LINE_BREAK}`
    const secondPartText = text.substring(indexOfWithSpace).replace(" ", "")
    return `${firstPartText}${wrap(secondPartText, columnWidth)}`
}

describe("Wrapper", () => {
    it("does not process any text", () => {
        expect(wrap("", 4)).toBe("")
    })
    it("does not add any line breaks", () => {
        expect(wrap("world", 8)).toBe("world")
        expect(wrap("world", 5)).toBe("world")
    })
    it("add a line breaks", () => {
        expect(wrap("world", 3)).toBe("wor\nld")
    })
    it("adds more than one line break", () => {
        expect(wrap("unlimited", 3)).toBe("unl\nimi\nted")
    })
    it("adds more than one line break 2", () => {
        expect(wrap("unlimited232", 3)).toBe("unl\nimi\nted\n232")
    })
    it("adds more than one line break 2", () => {
        expect(wrap("unlimited232", 3)).toBe("unl\nimi\nted\n232")
    })
    it("add a line break and remove space", () => {
        expect(wrap("Hello world", 5)).toBe("Hello\nworld")
        expect(wrap("Hello world", 7)).toBe("Hello\nworld")
    })
    it("search cut off point when the string contains more than one blank space", () => {
        expect(wrap("Hello world", 9)).toBe("Hello\nworld")
    })
    it("has a blank space before the line break", () => {
        expect(wrap("Hello world at all", 11)).toBe("Hello world\nat all")
    })
    /*
    it("has a blank space before the line break", () => {
        expect(replacesBlankSpaceWithALineBreak("Hello world at all", 11)).toBe("Hello world\nat all")
    })
    */
})