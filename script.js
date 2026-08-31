let COLORS = ["teal", "darkorange", "gold", "purple", "chartreuse", "red", "deeppink", "black", "dodgerblue", "orange", "tomato", "mediumslateblue", "plum"]

let infoLink;
let randomizeButton;
let igLink;

const SPACING = 40;
let ROWS;
let COLUMNS;

let originX;
let originY;
let stackX;
let stackY;
let gridStartX;
let gridEndX;
let gridEndY;
let gridWidth;
let gridHeight;

let cards = []

function randomize() {
    COLORS = shuffleArray(COLORS);
    for (i = 0; i < cards.length; i++) {
        cards[i].update();
    }
}

function windowResized() {
    resizeTimeout = setTimeout(() => {
        resizeCanvas(windowWidth, windowHeight);
    }, 250);
    clearTimeout(resizeTimeout);
    resizeCanvas(windowWidth, windowHeight);
}

function createShapeWithHole(originX, originY, rectWidth, rectHeight, color, holes) {
    // Create a graphics buffer for the shape
    let shapeGraphics = createGraphics(rectWidth, rectHeight);
    shapeGraphics.rectMode(CENTER);
    let ctx = shapeGraphics.drawingContext;
    ctx.beginPath();
    // Main rectangle
    ctx.rect(0, 0, rectWidth, rectHeight);

    //Holes'

    holes.forEach(hole => {
        let holeX = rectWidth / 2 + hole[0] * rectWidth - (hole[2] * rectWidth) / 2;
        let holeY = rectHeight / 2 + hole[1] * rectHeight - (hole[3] * rectHeight) / 2;
        ctx.rect(holeX, holeY, hole[2] * rectWidth, hole[3] * rectHeight);
    });

    ctx.fillStyle = color;
    ctx.fill('evenodd');

    return shapeGraphics;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function getCard(i, originX, originY, rectWidth, rectHeight) {
    switch (i) {
        case 0:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[0], [
                [0, 0, 1 / 5, 1 / 5]
            ]);
        case 1:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[1], [
                [0, 0, 1 / 8, 1 / 8],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, 1 / 4, 1 / 4, 1 / 4]
            ]);
        case 2:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[2], [
                [0, 0, 1 / 3, 1 / 3],
                [0, -1 / 2, 1 / 3, 1 / 3],
                [0, 1 / 2, 1 / 3, 1 / 3],
                [1 / 2, 0, 1 / 3, 1 / 3],
                [-1 / 2, 0, 1 / 3, 1 / 3]
            ]);

        case 3:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[3], [
                [0, 0, 1 / 3, 1 / 3],
                [0, -1 / 2, 1 / 3, 1 / 3],
                [0, 1 / 2, 1 / 3, 1 / 3],
                [1 / 2, 0, 1 / 3, 1 / 3],
                [-1 / 2, 0, 1 / 3, 1 / 3],
                [-1 / 3, -1 / 3, 1 / 8, 1 / 8],
                [1 / 3, -1 / 3, 1 / 8, 1 / 8],
                [-1 / 3, 1 / 3, 1 / 8, 1 / 8],
                [1 / 3, 1 / 3, 1 / 8, 1 / 8]
            ]);
        case 4:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[4], [
                [0, 0, 1 / 8, 1 / 8],
                [0, -1 / 2, 1 / 8, 1 / 8],
                [0, 1 / 2, 1 / 8, 1 / 8],
                [1 / 2, 0, 1 / 8, 1 / 8],
                [-1 / 2, 0, 1 / 8, 1 / 8],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, 1 / 4, 1 / 4, 1 / 4]
            ]);

        case 5:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[5], [
                [0, 0, 1 / 6, 1 / 1.5],
                [0, 0, 1 / 1.5, 1 / 6],
                [1 / 4, 1 / 4, 1 / 6, 1 / 6],
                [-1 / 4, 1 / 4, 1 / 6, 1 / 6],
                [1 / 4, -1 / 4, 1 / 6, 1 / 6],
                [-1 / 4, -1 / 4, 1 / 6, 1 / 6],
                [0, 0, 1 / 6, 1 / 6]
            ]);
        case 6:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[6], [
                [0, 0, 1 / 14, 1 / 1.5],
                [0, 0, 1 / 1.5, 1 / 14],
                [1 / 4, 1 / 4, 1 / 6, 1 / 6],
                [-1 / 4, 1 / 4, 1 / 6, 1 / 6],
                [-1 / 4, -1 / 4, 1 / 6, 1 / 6],
                [1 / 4, -1 / 4, 1 / 6, 1 / 6],
                [0, 0, 1 / 14, 1 / 14]
            ]);
        case 7:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[7], [
                [1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 3.45, 1 / 3.45, 1 / 5.9, 1 / 5.9],
                [-1 / 3.45, 1 / 3.45, 1 / 5.9, 1 / 5.9],
                [1 / 3.45, -1 / 3.45, 1 / 5.9, 1 / 5.9],
                [-1 / 3.45, -1 / 3.45, 1 / 5.9, 1 / 5.9]
            ]);
        case 8:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[8], [
                [1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 5, 1 / 5, 1 / 6.65, 1 / 6.65],
                [-1 / 5, 1 / 5, 1 / 6.65, 1 / 6.65],
                [1 / 5, -1 / 5, 1 / 6.65, 1 / 6.65],
                [-1 / 5, -1 / 5, 1 / 6.65, 1 / 6.65],
                [0, 0, 1 / 4, 1 / 4]
            ]);
        case 9:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[9], [
                [1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 4.5, 1 / 4.5, 1 / 5.15, 1 / 5.15],
                [-1 / 4.5, 1 / 4.5, 1 / 5.15, 1 / 5.15],
                [1 / 4.5, -1 / 4.5, 1 / 5.15, 1 / 5.15],
                [-1 / 4.5, -1 / 4.5, 1 / 5.15, 1 / 5.15],
                [0, 0, 1 / 12, 1 / 12]
            ]);
        case 10:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[10], [
                [1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, 1 / 4, 1 / 4, 1 / 4],
                [1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [-1 / 4, -1 / 4, 1 / 4, 1 / 4],
                [1 / 5.325, 1 / 5.325, 1 / 8, 1 / 8],
                [-1 / 5.325, 1 / 5.325, 1 / 8, 1 / 8],
                [1 / 5.325, -1 / 5.325, 1 / 8, 1 / 8],
                [-1 / 5.325, -1 / 5.325, 1 / 8, 1 / 8],
                [0, 0, 1 / 6, 1 / 6]
            ]);
        case 11:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[11], [

                [1 / 4, 1 / 4, 1 / 3, 1 / 3],
                [-1 / 4, 1 / 4, 1 / 3, 1 / 3],
                [1 / 4, -1 / 4, 1 / 3, 1 / 3],
                [-1 / 4, -1 / 4, 1 / 3, 1 / 3],
                [1 / 6, 1 / 6, 1 / 6, 1 / 6],
                [-1 / 6, 1 / 6, 1 / 6, 1 / 6],
                [1 / 6, -1 / 6, 1 / 6, 1 / 6],
                [-1 / 6, -1 / 6, 1 / 6, 1 / 6],
                [0, 0, 1 / 6, 1 / 6]

            ]);
        default:
            return createShapeWithHole(originX, originY, rectWidth, rectHeight, COLORS[12], [
                [0, 0, 1 / 2, 1 / 2]
            ]);
    }
}

let rectWidth = 120;
let rectHeight = 120;

let stackCardWidth = 300;
let stackCardHeight = 300;

let cardCoords = [];
let cardStack = [];

let clickedCard = null;

function checkBounds(coords, width, height) {
    return ((mouseX < coords[0] + width / 2) && (mouseX > coords[0] - width / 2) &&
        (mouseY < coords[1] + height / 2 && mouseY > coords[1] - height / 2))
}

function touchStarted() {
    mouseClicked();
    return false;
}

function mouseClicked() {
    let w = rectWidth;
    let h = rectHeight;

    for (i = 0; i < 13; i++) {
        if (i == 12) {
            w = stackCardWidth;
            h = stackCardHeight;
        }
        if (checkBounds(cardCoords[i], w, h)) {
            clickedCard = i;
            break;
        } else {
            clickedCard = null;
        }
    }
}

class Card {
    constructor(n, startX, startY, cardWidth, cardHeight, shapeGraphics) {
        this.n = n;
        this.x = startX;
        this.y = startY;
        this.w = cardWidth;
        this.h = cardHeight;
        this.sg = shapeGraphics;
        this.color = COLORS[this.n];

    }

    display() {
        image(this.sg, this.x - this.w / 2, this.y - this.h / 2);
    }

    update() {
        this.sg = getCard(this.n, this.x, this.y, this.w, this.h)
        this.display();
    }
}

function setup() {

    ROWS = 3;
    COLUMNS = 4;

    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);

    originX = width / 2;
    originY = height / 4;
    stackX = width / 7;
    stackY = height / 4;
    gridStartX = width / 2;
    gridWidth = COLUMNS * rectWidth + (COLUMNS - 1) * SPACING;
    gridHeight = ROWS * rectHeight + (ROWS - 1) * SPACING;
    cardCoords = [];

    if (width < 1120) {
        ROWS = 4;
        COLUMNS = 3;
        rectWidth = 80
        rectHeight = 80
        stackCardWidth = 180
        stackCardHeight = 180
        gridWidth = COLUMNS * rectWidth + (COLUMNS - 1) * SPACING;
        gridHeight = ROWS * rectHeight + (ROWS - 1) * SPACING;
        stackX = (width - stackCardWidth) / 2;
        stackY = Math.max(100, (windowHeight - (stackCardHeight + 72 + ROWS * rectHeight + (ROWS - 1) * SPACING)) / 2);
        gridStartX = (width - (COLUMNS * rectWidth + (COLUMNS - 1) * SPACING)) / 2 + rectWidth / 2;
        originX = gridStartX;
        originY = stackY + stackCardHeight + 72 + rectHeight / 2;
    }

    infoLink = createA('https://www.eastgate.com/catalog/TedNaosCollection.html', 'Tad Naos Collection', '_blank');
    infoLink.style('font-family', "Courier");
    infoLink.style('color', 'black');
    infoLink.style('font-size', '22px');
    infoLink.style('text-decoration', 'underline');

    randomizeButton = createButton('Randomize');
    randomizeButton.style('font-size', '22px');
    randomizeButton.style('color', 'black');
    randomizeButton.style('background-color', 'deeppink');
    randomizeButton.style('border', '2px solid black');
    randomizeButton.style('border-radius', "50px");
    randomizeButton.style('padding', '10px');
    randomizeButton.style('cursor', 'pointer');
    randomizeButton.mousePressed(randomize);

    let card = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            cardCoords.push([originX, originY]);
            let sg = getCard(card, originX, originY, rectWidth, rectHeight);
            let c = new Card(card, originX, originY, rectWidth, rectHeight, sg);
            cards.push(c);
            originX = originX + rectWidth + SPACING;
            card++;
        }
        originX = gridStartX;
        originY = originY + rectHeight + SPACING;
    }
    gridEndX = originX;
    gridEndY = originY;
}

function draw() {
    originY = height / 4;
    if (width < 1120) {
        originY = stackY + stackCardHeight + 72 + rectHeight / 2;
    }

    let canvasH = Math.max(windowHeight, originY + ROWS * (rectHeight + SPACING) + 280);
    if (height !== canvasH) {
        resizeCanvas(windowWidth, canvasH);
    }

    background("lightgray");
    rectMode(CENTER);

    // Available card grid
    for (i = 0; i < cards.length; i++) {
        cards[i].display()
    }

    cardCoords.push([stackX + stackCardWidth / 2, stackY + stackCardHeight / 2]);

    // Card stack

    if (clickedCard !== null) {
        if (clickedCard === 12) {
            cardStack.pop();
        } else {
            cardStack.push(getCard(clickedCard, stackX, stackY, stackCardWidth, stackCardHeight));
        }
        clickedCard = null;
    }

    for (let i = 0; i < cardStack.length; i++) {
        image(cardStack[i], stackX, stackY);
    }

    textFont("Courier");
    textSize(22);
    textAlign("center");
    if (width < 1120) {
        textSize(18);
        text("this is a computational version of \"the color game\" - a niche card game from 1999 invented by designer ted naos. you can read more about it here:", gridStartX + gridWidth / 2 - rectWidth / 2, gridEndY - 50, 400);
        infoLink.style("position", "absolute");
        infoLink.style("margin", "auto");
        infoLink.style("display", "block");
        infoLink.style("width", "100%");
        infoLink.style("text-align", "center");
        infoLink.style("font-size", "18px");
        infoLink.style("top", `${gridEndY+100}px`)
        randomizeButton.style('font-size', '18px');
        randomizeButton.position(Math.max(16, width - 150), 35);
        textSize(16);
        text ("p.s code circles is not affiliated with eastgate or the designer in any way. we are an organization exploring coding for intention, community and fun.", gridStartX + gridWidth / 2 - rectWidth/2, gridEndY + 150, 400)
    } else {
        text("this is a computational version of \"the color game\" - a niche card game from 1999 invented by designer ted naos. you can read more about it here:", width / 2, gridEndY - 50, 700);
        infoLink.position(width / 2 - 250 / 2, gridEndY + 70);
        randomizeButton.position(gridStartX + gridWidth - rectWidth - SPACING - 25, 35);
        text ("p.s code circles is not affiliated with eastgate or the designer in any way. we are an organization exploring coding for intention, community and fun.", width / 2, gridEndY + 150, 700)
    }
}