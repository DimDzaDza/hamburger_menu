import { Open_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";

const openSans400Regular = Open_Sans({
    weight: ["400", "600"],
    subsets: ["cyrillic"],
    display: "swap",
});

const montserrat = Montserrat({
    weight: ["400", "500"],
    subsets: ["cyrillic"],
    display: "swap",
    style: ["normal", "italic"],
})


const sourceSans3 = Source_Sans_3({
    weight: ["500", "600"],
    subsets: ["cyrillic"],
    display: "swap",
})

export { openSans400Regular, montserrat, sourceSans3 };