const player = (id, marker, isActive, isAI) => {
    const sayHello = () => console.log(`hello, i'm player ${marker}`);
    return { id, marker, isActive, isAI };
};

const playerX = player('playerX', 'X', true, false);
const playerO = player('playerO', 'O', false, true);

