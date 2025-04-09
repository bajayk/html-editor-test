import HTMLEditor from "./html-editor/html-editor.js";

const htmlEditor = document.querySelector("#html-editor");
htmlEditor.html = `<h1>Hello World</h1>`;

const btnOutput = document.querySelector("#btn-output");
btnOutput.addEventListener("click", showOutput);

function showOutput(){
    console.log("showOutput");
    console.log(htmlEditor.html);
    const output = document.querySelector("#output");
    const html = htmlEditor.html;
    output.innerHTML = html;
}