/* Global variables
 ============================================================== */
const cssBlackColour = "color: black";
const cssWhiteColour = "color: white";
const cssCrimsonColour = "color: crimson";
const cssBlackBgColour = "background: black";

console.log(`%c Welcome to Star Wars resupply calculator! `, `${cssBlackBgColour}; ${cssWhiteColour}`);
console.log(`%cType in `+`%chelp()`+ `%c to get started`, cssBlackColour, cssCrimsonColour, cssBlackColour);

/* Functions
 ============================================================== */
const help = () => {
  console.log(`List of available commands: ↓
  exampleRun() - instructions of how to use the app`);
    return `----------------------------------------------------`;
};