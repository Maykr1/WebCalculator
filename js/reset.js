function reset (num1Input, num2Input, output) {
    num1Input.value = "";
    num2Input.value = "";
    output.innerHTML = "Output";
}

export default reset;

/*
or:
resources = {
    reset
}

export default resources
 */