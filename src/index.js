function displayPoem(response) { 
    console.log("poem generated");
     new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instruction");

    let apiKey = "14a07d3do2f97e772d9326602betbeb8";
    let context = " You are a romatic Poem AI Assistant expert and love to write short poems.Your mission is to generate a 4 line poem.Make sure to follow the user instruction.Do NOT include a title to the poem.Write in basic HTML";
    let prompt = `User instruction: Generate a Poem about ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionInput.value}</div>`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);