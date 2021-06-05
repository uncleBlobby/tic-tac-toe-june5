const player = (id, marker) => {
    const sayHello = () => console.log(`hello, i'm player ${marker}`);
    return { id, marker};
};

const playerX = player('playerX', 'X');
const playerO = player('playerO', 'O');

