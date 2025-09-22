function greet(name) {
    return "Xin ch\u00E0o, ".concat(name, "!");
}
var user = "TypeScript";
document.body.innerHTML = greet(user);
