const promptForm = document.querySelector(".prompt-form");
const themeToggle = document.querySelector(".theme-toggle");
const promptBtn = document.querySelector(".prompt-btn");
const promptInput = document.querySelector(".prompt-input");
const generateBtn = document.querySelector(".generate-btn");
const galleryGrid = document.querySelector(".gallery-grid");
const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");
const API_KEY = "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"; // Hugging Face API Key
// Example prompts
const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
  "A futuristic city on floating platforms above a glowing ocean",
  "A humanoid robot walking a dog made of holograms in a high-tech park",
  "A smart bedroom that changes colors based on your emotions",
  "A spaceport on Saturn with alien tourists and multilingual holograms",
  "A classroom in 2150 with AI teachers and students wearing neural visors",
  "A post-climate-change Earth with bubble cities floating in the sky",
  "A futuristic street filled with delivery drones and self-driving scooters",
  "A neon jungle where AI animals live in harmony with glowing plants",
  "A time-traveling museum displaying artifacts from the year 3000",
  "A futuristic fashion show where models wear light-based clothing",
  "A galactic police chase between spaceships in a wormhole tunnel",
  "A future wedding ceremony in zero gravity with stardust bouquets",
  "An underwater research lab on Europa with robotic octopus assistants",
  "A space elevator connecting Earth to a lunar base with glass windows",
  "A massive cyber-tree housing thousands of digital families",
  "A futuristic subway powered by antimatter zooming through crystal tunnels",
  "A night market in the future selling edible technology and glowing food",
  "A hacker's den in 2099 with mind-controlled interfaces and bio-keyboards",
  "A virtual reality café where customers can switch worlds with a blink",
  "A future Earth ruled by sentient AI plants growing buildings and tech",
  "A dystopian city ruled by AI overlords with flying surveillance drones",
  "A wormhole opening above Earth and alien ships arriving peacefully",
  "A scientist discovering a portal to a parallel Earth where humans never evolved",
  "A gigantic space station orbiting a dying star",
  "A rogue AI building its own mechanical planet from scrap satellites",
  "A peaceful alien civilization farming energy from stars with crystal towers",
  "A robot rebellion in a factory city glowing with red lights",
  "A spaceship crew discovering an ancient alien temple buried in an asteroid",
  "A cybernetic jungle with metal trees and animals with mechanical limbs",
  "A group of rebels hacking reality from inside a simulation",
  "A forgotten colony on Mars rediscovering Earth after 300 years",
  "A bio-engineered planet where life evolves every minute",
  "An alien market trading dreams, memories, and time",
  "A galactic prison floating near a black hole with anti-gravity cells",
  "A human mind uploaded into a galactic cloud server interacting with other souls",
  "A deep space cargo ship being haunted by an invisible alien presence",
  "A cosmic battle between time-traveling samurais and AI dragons",
  "A moon base under siege by alien parasites turning crew into mutants",
  "A time capsule city in space stuck in a 1980s simulation loop",
  "A first-contact moment between humans and a species of light beings",
  "A peaceful rice field at sunrise with farmers wearing conical hats tending crops",
"A futuristic greenhouse with drones pollinating plants and smart irrigation systems",
"A traditional Vietnamese farm with buffalo plowing and banana trees around",
"A robot farmer planting seeds on a vertical urban farm",
"A smart chicken coop powered by solar panels and monitored by AI",
"A floating hydroponic garden on a river with lush green vegetables",
"A community farm with kids learning about planting and harvesting",
"A pastoral scene with golden wheat fields and a red tractor under a cloudy sky",
"A human silhouette standing in front of a glowing digital universe",
"A child looking at a reflection of their older self in a time-bending mirror",
"A crowd of people made of stars and galaxies walking through a futuristic city",
"A lonely traveler walking across a desert of forgotten memories",
"A person with a transparent body showing a glowing soul inside",
"A group of humans building a civilization on a floating island in space",
"A human diving into a pool that leads to a multiverse",
"A miniature village built inside a bonsai tree",
"A tiny world under a glass dome with trains, rivers and clouds",
"A little bakery run by squirrels inside a hollow tree",
"A model city with LED-lit streets and flying toy cars at night",
"A magical desk with miniature people working and living among pencils and books",
"A tiny farm on a slice of toast being watered by ants",
"A miniverse hidden inside a teacup",
"A surreal heart made of crystal and blooming flowers",
"A cross-section of the human brain with galaxies and constellations inside",
"A human skeleton with glowing nerves like neon circuits",
"A cell splitting into two under a microscope with cosmic background",
"A bloodstream river with red and white cells flowing like boats",
"A face with half human, half biomechanical muscles and tissue exposed",
"A 3D model of human organs displayed like art sculptures in a gallery",
"A DNA double helix made of light strands floating in space",
"A nebula shaped like a phoenix rising in the center of the galaxy",
"A massive space station orbiting a gas giant with glowing rings",
"A lone astronaut floating among shattered moon fragments",
"A black hole distorting time and space with lightning around it",
"An alien planet with purple oceans and floating crystal mountains",
"A space whale swimming through the stars with glowing fins",
"Two galaxies colliding, creating a storm of colors and light",
"A futuristic observatory on a snowy mountain watching distant galaxies",
"A meteor shower above a city on Mars with lights reflecting off domes",
"A planet with bioluminescent forests visible from orbit",
"A celestial being weaving the stars into constellations",
"A spaceship entering hyperspace leaving rainbow trails behind",
"A space rover discovering ancient alien ruins on a barren asteroid",
"An eclipse seen from a spaceship window with crew in awe",
"A moon colony celebrating the first harvest under artificial light",
"A futuristic chemistry lab with glowing holographic molecules floating in the air",
"A mad scientist mixing neon liquids that create lightning in midair",
"A chemical reaction causing floating crystals to grow and shatter midair",
"A periodic table made of actual glowing elements in glass cubes",
"A city powered by clean chemical reactions, glowing pipes under glass streets",
"A microscopic view of atoms dancing during a quantum reaction",
"A giant laboratory orbiting Earth where scientists grow synthetic stars",
"A magical math classroom where formulas float and solve themselves on the blackboard",
"A virtual reality history class where students walk inside ancient Rome",
"A biology lab with gigantic 3D cells floating midair for students to explore",
"A physics experiment launching students into zero gravity zones",
"A literature class inside a giant book where characters come alive",
"A geography classroom with interactive 3D Earth model spinning in the air",
"A music class in space where sounds form colorful waves around students",
"A PE class on the moon where students jump between floating platforms",
"A futuristic laptop with a transparent holographic screen floating in midair",
"A glowing gaming PC with liquid coolant flowing through neon tubes",
"A minimalist MacBook setup in a glass house overlooking a neon cityscape",
"A workstation in a zero-gravity space station with screens surrounding the user",
"An AI assistant materializing from a quantum-powered PC tower",
"A high-tech classroom where every desk has a foldable holographic laptop",
"A post-apocalyptic survivor using a solar-powered laptop in the ruins",
"A robot repairing a broken server rack deep inside a cyber vault",
"A retro-futuristic PC lab where floppy disks glow with stored memories",
"A hacker's room lit only by RGB keyboards and cascading lines of code",
"A MacOS interface projected in thin air, controlled by hand gestures",
"A military base underground with rows of quantum computers monitoring space",
"A futuristic city powered by clean energy, with AI-controlled systems managing everything from traffic to agriculture, while drones deliver packages seamlessly across the city",
"A fleet of autonomous spaceships exploring distant galaxies, collecting data on unknown cosmic phenomena and sending it back to Earth in real-time",
"An AI-controlled research station on Mars, with robots performing geological surveys and harvesting resources from the planet's surface",
"An autonomous spacecraft traveling through the nebula, using advanced algorithms to navigate through cosmic storms and black holes",
"A robot army built for exploration, scouting new planets and moons, analyzing their atmospheres and sending findings back to Earth",
"A smart city where robots handle all manual labor, while humans live in virtual reality worlds, controlling everything through neural interfaces",
"AI systems running entire planets, from optimizing weather patterns to organizing food production, all while constantly improving themselves without human intervention",
"A group of scientists aboard a high-tech space station in deep space, working with advanced AI to unlock the secrets of wormholes and interstellar travel",
"An AI that develops a fully automated civilization on a distant planet, creating robots and machines to build cities and infrastructure, without human guidance",
"Quantum computers used for deep space travel, creating wormholes and bending space-time to travel vast distances across the universe in the blink of an eye",
"Space explorers equipped with AI-powered exoskeletons that allow them to withstand extreme conditions on distant planets, while robots assist in gathering vital data for humanity’s survival",
"An autonomous rover exploring an alien moon, sending back stunning images of uncharted landscapes with AI-enhanced cameras that detect signs of life",
"A space elevator built to lift goods and people from Earth to a massive orbiting space station, controlled by AI that manages the entire operation from start to finish",
"A space habitat with AI that controls the climate, agriculture, and human health, while robots take care of all the maintenance work in the station",
"An interstellar AI-guided voyage where ships travel through space with no crew, learning and adapting to different star systems to enhance humanity's exploration efforts",
"A self-sustaining moon base, with robots mining resources, while AI controls every aspect of the base's operations, from life support to communication with Earth",
"A deep space probe equipped with an AI that autonomously explores new solar systems, discovering new planets, moons, and cosmic phenomena beyond our imagination",
"A planetary AI that controls the ecosystem of an entire world, balancing the atmosphere, oceans, and plant life to create a perfect environment for human colonization",
"An AI-driven virtual reality simulation that allows users to experience traveling across the cosmos, visiting distant star systems and planets in real-time",
"Robots in deep space designed to assemble entire space stations and spacecraft, working autonomously in the vacuum of space with AI calculating every step of construction",
"A city on a floating asteroid, with glowing skyscrapers and flying cars zooming through the cosmos",
"A humanoid robot with transparent skin, showing intricate circuitry and glowing energy pulses",
"A time machine made from swirling quantum particles, glowing with blue energy at the center of a futuristic lab",
"A massive space station orbiting a distant planet, with windows offering a view of alien landscapes",
"A group of explorers landing on an alien planet, discovering bioluminescent plants that communicate through light",
"A robot rebellion in a futuristic city, with mechanical beings marching through the streets in perfect unison",
"A holographic assistant projected in thin air, assisting a scientist in a high-tech laboratory",
"A futuristic alien race communicating telepathically, with glowing symbols floating in the air",
"An artificial intelligence taking control of an entire planet's technology, turning it into a utopian paradise",
"A fleet of spaceships traveling through a wormhole, with the stars bending around them in a psychedelic spiral",
"A dystopian world where humans have uploaded their consciousness into machines, living forever in a digital utopia",
"An advanced robot that has developed its own consciousness, questioning the meaning of its existence in a metal body",
"A virtual reality game so immersive that players lose track of time, living entire lifetimes within the game",
"A colossal spaceship traveling across galaxies, encountering ancient alien civilizations and unexplained cosmic anomalies",
"A futuristic research facility on a distant moon, studying the effects of zero gravity on human biology",
"A massive space elevator stretching from Earth to a satellite, with ships continuously traveling up and down",
"A planet where humans live inside massive bio-domes to protect themselves from toxic atmosphere, farming for survival",
"A massive artificial sun floating above a city, providing limitless energy for an entire civilization",
"A gigantic AI controlling a city, optimizing everything from traffic to weather patterns, making life perfect but at a cost",
"An army of drones flying over a cyberpunk city at night, their red eyes glowing in the neon lights",
];
// Set theme based on saved preference or system default
(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  document.body.classList.toggle("dark-theme", isDarkTheme);
  themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();
// Switch between light and dark themes
const toggleTheme = () => {
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
};
// Calculate width/height based on chosen ratio
const getImageDimensions = (aspectRatio, baseSize = 512) => {
  const [width, height] = aspectRatio.split("/").map(Number);
  const scaleFactor = baseSize / Math.sqrt(width * height);
  let calculatedWidth = Math.round(width * scaleFactor);
  let calculatedHeight = Math.round(height * scaleFactor);
  // Ensure dimensions are multiples of 16 (AI model requirements)
  calculatedWidth = Math.floor(calculatedWidth / 16) * 16;
  calculatedHeight = Math.floor(calculatedHeight / 16) * 16;
  return { width: calculatedWidth, height: calculatedHeight };
};
// Replace loading spinner with the actual image
const updateImageCard = (index, imageUrl) => {
  const imgCard = document.getElementById(`img-card-${index}`);
  if (!imgCard) return;
  imgCard.classList.remove("loading");
  imgCard.innerHTML = `<img class="result-img" src="${imageUrl}" />
                <div class="img-overlay">
                  <a href="${imageUrl}" class="img-download-btn" title="Download Image" download>
                    <i class="fa-solid fa-download"></i>
                  </a>
                </div>`;
};
// Send requests to Hugging Face API to create images
const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
  const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
  const { width, height } = getImageDimensions(aspectRatio);
  generateBtn.setAttribute("disabled", "true");
  // Create an array of image generation promises
  const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
    try {
      // Send request to the AI model API
      const response = await fetch(MODEL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "x-use-cache": "false",
        },
        body: JSON.stringify({
          inputs: promptText,
          parameters: { width, height },
        }),
      });
      if (!response.ok) throw new Error((await response.json())?.error);
      // Convert response to an image URL and update the image card
      const blob = await response.blob();
      updateImageCard(i, URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      const imgCard = document.getElementById(`img-card-${i}`);
      imgCard.classList.replace("loading", "error");
      imgCard.querySelector(".status-text").textContent = "Generation failed! Check console for more details.";
    }
  });
  await Promise.allSettled(imagePromises);
  generateBtn.removeAttribute("disabled");
};
// Create placeholder cards with loading spinners
const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
  galleryGrid.innerHTML = "";
  for (let i = 0; i < imageCount; i++) {
    galleryGrid.innerHTML += `
      <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
        <div class="status-container">
          <div class="spinner"></div>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p class="status-text">Generating...</p>
        </div>
      </div>`;
  }
  // Stagger animation
  document.querySelectorAll(".img-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("animate-in"), 100 * i);
  });
  generateImages(selectedModel, imageCount, aspectRatio, promptText); // Generate Images
};
// Handle form submission
const handleFormSubmit = (e) => {
  e.preventDefault();
  // Get form values
  const selectedModel = modelSelect.value;
  const imageCount = parseInt(countSelect.value) || 1;
  const aspectRatio = ratioSelect.value || "1/1";
  const promptText = promptInput.value.trim();
  createImageCards(selectedModel, imageCount, aspectRatio, promptText);
};
// Fill prompt input with random example (typing effect)
promptBtn.addEventListener("click", () => {
  const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  let i = 0;
  promptInput.focus();
  promptInput.value = "";
  // Disable the button during typing animation
  promptBtn.disabled = true;
  promptBtn.style.opacity = "0.5";
  // Typing effect
  const typeInterval = setInterval(() => {
    if (i < prompt.length) {
      promptInput.value += prompt.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      promptBtn.disabled = false;
      promptBtn.style.opacity = "0.8";
    }
  }, 10); // Speed of typing
});
themeToggle.addEventListener("click", toggleTheme);
promptForm.addEventListener("submit", handleFormSubmit);
