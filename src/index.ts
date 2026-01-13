class ClassicMath {
    add(a: number, b: number): number {
        return a + b
    }
}

function testClassicMath() {
    const x = 3
    const y = 4
    const cm = new ClassicMath()
    console.log(cm.add(x, y))
}

export { ClassicMath }