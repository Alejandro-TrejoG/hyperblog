const arrow = () => {
    let sum = 2 + 2;
    const inner = () => {
        let hello = "Hello World";
        let message = `${hello} my friends`;
        if (false) {
            console.log("Hello there")
        }
        console.log(message);
    };
    return inner;
};

arrow();
