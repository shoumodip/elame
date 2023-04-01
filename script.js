class Element {
    constructor(sign, name) {
        this.sign = sign
        this.name = name
    }
}

const elements = [
    new Element("h", "Hydrogen"),
    new Element("he", "Helium"),
    new Element("li", "Lithium"),
    new Element("be", "Beryllium"),
    new Element("b", "Boron"),
    new Element("c", "Carbon"),
    new Element("n", "Nitrogen"),
    new Element("o", "Oxygen"),
    new Element("f", "Fluorine"),
    new Element("ne", "Neon"),
    new Element("na", "Sodium"),
    new Element("mg", "Magnesium"),
    new Element("al", "Aluminium"),
    new Element("si", "Silicon"),
    new Element("p", "Phosphorus"),
    new Element("s", "Sulfur"),
    new Element("cl", "Chlorine"),
    new Element("ar", "Argon"),
    new Element("k", "Potassium"),
    new Element("ca", "Calcium"),
    new Element("sc", "Scandium"),
    new Element("ti", "Titanium"),
    new Element("v", "Vanadium"),
    new Element("cr", "Chromium"),
    new Element("mn", "Manganese"),
    new Element("fe", "Iron"),
    new Element("co", "Cobalt"),
    new Element("ni", "Nickel"),
    new Element("cu", "Copper"),
    new Element("zn", "Zinc"),
    new Element("ga", "Gallium"),
    new Element("ge", "Germanium"),
    new Element("as", "Arsenic"),
    new Element("se", "Selenium"),
    new Element("br", "Bromine"),
    new Element("kr", "Krypton"),
    new Element("rb", "Rubidium"),
    new Element("sr", "Strontium"),
    new Element("y", "Yttrium"),
    new Element("zr", "Zirconium"),
    new Element("nb", "Niobium"),
    new Element("mo", "Molybdenum"),
    new Element("tc", "Technetium"),
    new Element("ru", "Ruthenium"),
    new Element("rh", "Rhodium"),
    new Element("pd", "Palladium"),
    new Element("ag", "Silver"),
    new Element("cd", "Cadmium"),
    new Element("in", "Indium"),
    new Element("sn", "Tin"),
    new Element("sb", "Antimony"),
    new Element("te", "Tellurium"),
    new Element("i", "Iodine"),
    new Element("xe", "Xenon"),
    new Element("cs", "Caesium"),
    new Element("ba", "Barium"),
    new Element("la", "Lanthanum"),
    new Element("ce", "Cerium"),
    new Element("pr", "Praseodymium"),
    new Element("nd", "Neodymium"),
    new Element("pm", "Promethium"),
    new Element("sm", "Samarium"),
    new Element("eu", "Europium"),
    new Element("gd", "Gadolinium"),
    new Element("tb", "Terbium"),
    new Element("dy", "Dysprosium"),
    new Element("ho", "Holmium"),
    new Element("er", "Erbium"),
    new Element("tm", "Thulium"),
    new Element("yb", "Ytterbium"),
    new Element("lu", "Lutetium"),
    new Element("hf", "Hafnium"),
    new Element("ta", "Tantalum"),
    new Element("w", "Tungsten"),
    new Element("re", "Rhenium"),
    new Element("os", "Osmium"),
    new Element("ir", "Iridium"),
    new Element("pt", "Platinum"),
    new Element("au", "Gold"),
    new Element("hg", "Mercury"),
    new Element("tl", "Thallium"),
    new Element("pb", "Lead"),
    new Element("bi", "Bismuth"),
    new Element("po", "Polonium"),
    new Element("at", "Astatine"),
    new Element("rn", "Radon"),
    new Element("fr", "Francium"),
    new Element("ra", "Radium"),
    new Element("ac", "Actinium"),
    new Element("th", "Thorium"),
    new Element("pa", "Protactinium"),
    new Element("u", "Uranium"),
    new Element("np", "Neptunium"),
    new Element("pu", "Plutonium"),
    new Element("am", "Americium"),
    new Element("cm", "Curium"),
    new Element("bk", "Berkelium"),
    new Element("cf", "Californium"),
    new Element("es", "Einsteinium"),
    new Element("fm", "Fermium"),
    new Element("md", "Mendelevium"),
    new Element("no", "Nobelium"),
    new Element("lr", "Lawrencium"),
    new Element("rf", "Rutherfordium"),
    new Element("db", "Dubnium"),
    new Element("sg", "Seaborgium"),
    new Element("bh", "Bohrium"),
    new Element("hs", "Hassium"),
    new Element("mt", "Meitnerium"),
    new Element("ds", "Darmstadtium"),
    new Element("rg", "Roentgenium"),
    new Element("cn", "Copernicium"),
    new Element("nh", "Nihonium"),
    new Element("fl", "Flerovium"),
    new Element("mc", "Moscovium"),
    new Element("lv", "Livermorium"),
    new Element("ts", "Tennessine"),
    new Element("og", "Oganesson"),
]

const output = document.getElementById("output")

document.getElementById("input").addEventListener("input", (event) => {
    var path = []
    var length = 0
    var results = []

    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.substring(1)
    }

    function generateSequence(name) {
        if (name === "") {
            const newLength = path.map((e) => e.name).join("").length
            if ((path.length < results.length || results.length == 0) || (path.length == results.length && newLength < length)) {
                length = newLength
                results = [...path]
            }
            return true
        }

        var found = false
        elements.forEach((element) => {
            if (name.startsWith(element.sign)) {
                const init = path.length
                path.push(element)

                if (generateSequence(name.substring(element.sign.length))) {
                    found = true
                }

                path.length = init
            }
        })

        return found
    }

    generateSequence(event.target.value.toLowerCase())
    output.replaceChildren(...results.map((result) => {
        const item = document.createElement("div")
        item.className = "item"

        const sign = document.createElement("div")
        sign.className = "sign"
        sign.innerText = toTitleCase(result.sign)
        item.appendChild(sign)

        const name = document.createElement("div")
        name.className = "name"
        name.innerText = toTitleCase(result.name)
        item.appendChild(name)
        return item
    }))
})
