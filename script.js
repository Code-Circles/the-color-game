let COLORS = ["teal", "darkorange", "gold", "purple", "chartreuse", "red", "deeppink", "black", "dodgerblue", "orange", "tomato", "mediumslateblue", "plum"]

let infoLink;
let randomizeButton;

function randomize() {
    COLORS = shuffleArray(COLORS);
}

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);

    infoLink = createA('https://www.eastgate.com/catalog/TedNaosCollection.html', 'Tad Naos Collection', '_blank');
    infoLink.style('font-family', "Courier");
    infoLink.style('color', 'black');
    infoLink.style('font-size', '22px');
    infoLink.style('text-decoration', 'underline');

    randomizeButton = createButton('Randomize');
    randomizeButton.style('font-size', '22px');
    randomizeButton.style('background-color', 'deeppink');
    randomizeButton.style('border', '2px solid black');
    randomizeButton.style('border-radius', "50px");
    randomizeButton.style('padding', '10px');
    randomizeButton.style('cursor', 'pointer');
    randomizeButton.mousePressed(randomize);
}

function windowResized() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas(windowWidth, windowHeight);
    }, 250); 
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

let cardCoords = []

let clickedCard = null;

function checkBounds(coords, width, height) {
    return ((mouseX < coords[0] + width / 2) && (mouseX > coords[0] - width / 2) &&
        (mouseY < coords[1] + height / 2 && mouseY > coords[1] - height / 2))
}

function mouseClicked() {
    if (checkBounds(cardCoords[0], rectWidth, rectHeight)) {
        clickedCard = 0;
    } else if (checkBounds(cardCoords[1], rectWidth, rectHeight)) {
        clickedCard = 1;
    } else if (checkBounds(cardCoords[2], rectWidth, rectHeight)) {
        clickedCard = 2;
    } else if (checkBounds(cardCoords[3], rectWidth, rectHeight)) {
        clickedCard = 3;
    } else if (checkBounds(cardCoords[4], rectWidth, rectHeight)) {
        clickedCard = 4;
    } else if (checkBounds(cardCoords[5], rectWidth, rectHeight)) {
        clickedCard = 5;
    } else if (checkBounds(cardCoords[6], rectWidth, rectHeight)) {
        clickedCard = 6;
    } else if (checkBounds(cardCoords[7], rectWidth, rectHeight)) {
        clickedCard = 7;
    } else if (checkBounds(cardCoords[8], rectWidth, rectHeight)) {
        clickedCard = 8;
    } else if (checkBounds(cardCoords[9], rectWidth, rectHeight)) {
        clickedCard = 9;
    } else if (checkBounds(cardCoords[10], rectWidth, rectHeight)) {
        clickedCard = 10;
    } else if (checkBounds(cardCoords[11], rectWidth, rectHeight)) {
        clickedCard = 11;
    } else if (checkBounds(cardCoords[12], stackCardWidth, stackCardHeight)) {
        clickedCard = 12;
    } else {
        clickedCard = null;
    }
}

function touchStarted() {
    mouseClicked();
    return false;
}

let cardStack = [];

function draw() {
    const SPACING = 40;
    let ROWS = 4;
    let COLUMNS = 3;

    let originX = width / 2;
    let originY = height / 4;
    let stackX = width / 7;
    let stackY = height / 4;
    let gridStartX = width / 2;
    let gridWidth =  COLUMNS * rectHeight + (COLUMNS - 1) * SPACING;
    let gridHeight = ROWS * rectWidth + (ROWS - 1) * SPACING;

    if (width < 1120) {
        rectWidth = 80
        rectHeight = 80
        stackCardWidth = 180
        stackCardHeight = 180
        ROWS = 3;
        COLUMNS = 4;
        stackX = (width - stackCardWidth) / 2;
        stackY = Math.max(24, (windowHeight - (stackCardHeight + 72 + COLUMNS * rectHeight + (COLUMNS - 1) * SPACING)) / 2);
        gridStartX = (width - (ROWS * rectWidth + (ROWS - 1) * SPACING)) / 2 + rectWidth / 2;
        originX = gridStartX;
        originY = stackY + stackCardHeight + 72 + rectHeight / 2;
    }

    let canvasH = Math.max(windowHeight, originY + COLUMNS * (rectHeight + SPACING) + 180);
    if (height !== canvasH) {
        resizeCanvas(windowWidth, canvasH);
    }

    background("lightgray");
    rectMode(CENTER);

    cardCoords = [];

    // Available card grid
    let card = 0;
    for (let i = 0; i < COLUMNS; i++) {
        for (let j = 0; j < ROWS; j++) {
            cardCoords.push([originX, originY]);
            let sg = getCard(card, originX, originY, rectWidth, rectHeight);
            image(sg, originX - rectWidth / 2, originY - rectHeight / 2);
            originX = originX + rectWidth + SPACING;
            card++;
        }
        originX = gridStartX;
        originY = originY + rectHeight + SPACING;
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
    textAlign("left");
    if (width < 1120) {
        textAlign("center");
        text("this is a computational version of \"the color game\" - a niche card game from 1999 invented by designer ted naos. you can read more about it here:", gridStartX + gridWidth / 3, originY - 50, 440);
        infoLink.position(gridStartX - 20 , 2 * gridHeight + 50);
        randomizeButton.style('font-size', '18px');
        randomizeButton.position(Math.max(16, width - 150), 35);
    } else {
       text("this is a computational version of \"the color game\" - a niche card game from 1999 invented by designer ted naos. you can read more about it here:", originX + 200, originY - 50, 700);
        print(gridHeight)
        infoLink.position(gridStartX - 150, gridHeight + 175);
        randomizeButton.position(width / 1.25, 35);
    }
}