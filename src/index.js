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
    let context = "You are a romatic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instruction. Do NOT include a title to the poem.";
    let prompt = `user instruction: Generate a Poem about ${instructionInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);