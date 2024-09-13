class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(newColor) {
        this.color = newColor
    }
}


class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="200" height="200" x="50" y="0" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 290,190 10,190" fill="${this.color}"/>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
}