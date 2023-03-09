package main

import (
	"fmt"
	"os"
	"strings"
)

type Element struct {
	sign string
	name string
}

var elements = []Element{
	{"h", "Hydrogen"},
	{"he", "Helium"},
	{"li", "Lithium"},
	{"be", "Beryllium"},
	{"b", "Boron"},
	{"c", "Carbon"},
	{"n", "Nitrogen"},
	{"o", "Oxygen"},
	{"f", "Fluorine"},
	{"ne", "Neon"},
	{"na", "Sodium"},
	{"mg", "Magnesium"},
	{"al", "Aluminium"},
	{"si", "Silicon"},
	{"p", "Phosphorus"},
	{"s", "Sulfur"},
	{"cl", "Chlorine"},
	{"ar", "Argon"},
	{"k", "Potassium"},
	{"ca", "Calcium"},
	{"sc", "Scandium"},
	{"ti", "Titanium"},
	{"v", "Vanadium"},
	{"cr", "Chromium"},
	{"mn", "Manganese"},
	{"fe", "Iron"},
	{"co", "Cobalt"},
	{"ni", "Nickel"},
	{"cu", "Copper"},
	{"zn", "Zinc"},
	{"ga", "Gallium"},
	{"ge", "Germanium"},
	{"as", "Arsenic"},
	{"se", "Selenium"},
	{"br", "Bromine"},
	{"kr", "Krypton"},
	{"rb", "Rubidium"},
	{"sr", "Strontium"},
	{"y", "Yttrium"},
	{"zr", "Zirconium"},
	{"nb", "Niobium"},
	{"mo", "Molybdenum"},
	{"tc", "Technetium"},
	{"ru", "Ruthenium"},
	{"rh", "Rhodium"},
	{"pd", "Palladium"},
	{"ag", "Silver"},
	{"cd", "Cadmium"},
	{"in", "Indium"},
	{"sn", "Tin"},
	{"sb", "Antimony"},
	{"te", "Tellurium"},
	{"i", "Iodine"},
	{"xe", "Xenon"},
	{"cs", "Caesium"},
	{"ba", "Barium"},
	{"la", "Lanthanum"},
	{"ce", "Cerium"},
	{"pr", "Praseodymium"},
	{"nd", "Neodymium"},
	{"pm", "Promethium"},
	{"sm", "Samarium"},
	{"eu", "Europium"},
	{"gd", "Gadolinium"},
	{"tb", "Terbium"},
	{"dy", "Dysprosium"},
	{"ho", "Holmium"},
	{"er", "Erbium"},
	{"tm", "Thulium"},
	{"yb", "Ytterbium"},
	{"lu", "Lutetium"},
	{"hf", "Hafnium"},
	{"ta", "Tantalum"},
	{"w", "Tungsten"},
	{"re", "Rhenium"},
	{"os", "Osmium"},
	{"ir", "Iridium"},
	{"pt", "Platinum"},
	{"au", "Gold"},
	{"hg", "Mercury"},
	{"tl", "Thallium"},
	{"pb", "Lead"},
	{"bi", "Bismuth"},
	{"po", "Polonium"},
	{"at", "Astatine"},
	{"rn", "Radon"},
	{"fr", "Francium"},
	{"ra", "Radium"},
	{"ac", "Actinium"},
	{"th", "Thorium"},
	{"pa", "Protactinium"},
	{"u", "Uranium"},
	{"np", "Neptunium"},
	{"pu", "Plutonium"},
	{"am", "Americium"},
	{"cm", "Curium"},
	{"bk", "Berkelium"},
	{"cf", "Californium"},
	{"es", "Einsteinium"},
	{"fm", "Fermium"},
	{"md", "Mendelevium"},
	{"no", "Nobelium"},
	{"lr", "Lawrencium"},
	{"rf", "Rutherfordium"},
	{"db", "Dubnium"},
	{"sg", "Seaborgium"},
	{"bh", "Bohrium"},
	{"hs", "Hassium"},
	{"mt", "Meitnerium"},
	{"ds", "Darmstadtium"},
	{"rg", "Roentgenium"},
	{"cn", "Copernicium"},
	{"nh", "Nihonium"},
	{"fl", "Flerovium"},
	{"mc", "Moscovium"},
	{"lv", "Livermorium"},
	{"ts", "Tennessine"},
	{"og", "Oganesson"},
}

func find(name string) ([]Element, bool) {
	var impl func(string) bool
	var output []Element

	impl = func(name string) bool {
		if name == "" {
			return true
		}

		for _, element := range elements {
			if strings.HasPrefix(name, element.sign) {
				output = append(output, element)
				if impl(name[len(element.sign):]) {
					return true
				}
				output = output[:len(output)-1]
			}
		}

		return false
	}

	result := impl(name)
	return output, result
}

func title(str string) string {
	return strings.ToUpper(str[:1]) + str[1:]
}

func main() {
	if len(os.Args) < 2 {
		fmt.Fprintln(os.Stderr, "usage:", os.Args[0], "<name>")
		fmt.Fprintln(os.Stderr, "error: name not provided")
		os.Exit(1)
	}
	name := strings.TrimSpace(os.Args[1])

	elements, ok := find(strings.ToLower(name))
	if ok {
		for _, element := range elements {
			fmt.Println("("+title(element.sign)+")"+strings.Repeat(" ", 2-len(element.sign)), element.name)
		}
	} else {
		fmt.Println("The name '" + name + "' cannot be represented by a sequence of chemical elements")
	}
}
