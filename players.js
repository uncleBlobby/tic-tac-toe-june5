const player = (id, marker, isActive) => {
    const sayHello = () => console.log(`hello, i'm player ${marker}`);
    return { id, marker, isActive};
};

const playerX = player('playerX', 'X', true);
const playerO = player('playerO', 'O', false);

