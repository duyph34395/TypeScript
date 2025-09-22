function greet(name: string): string {
    return `Xin chào, ${name}!`;
}

let user: string = "TypeScript";
document.body.innerHTML = greet(user);
