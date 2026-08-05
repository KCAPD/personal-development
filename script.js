const years = {
  1: {
    title: "Year 1 — Beginning the Journey",
    intro: "Children begin to recognise their strengths, make positive choices, build relationships and participate confidently in school life.",
    character: "images/connor-courage.png",
    alt: "Connor Courage",
    caption: "Connor Courage",
    quote: "“Have a go — courage grows every time we try.”",
    milestones: [
      ["Make good choices", "Follow expectations and recognise choices that are kind, safe and fair."],
      ["Build belonging", "Listen, share and use respectful language with others."],
      ["Keep trying", "Continue when learning feels difficult and ask for help when needed."],
      ["Find my voice", "Join discussions, try new learning and share work with support."]
    ],
    experiences: ["Trips", "Performances", "Enrichment", "Class discussions", "Yearly reflection"]
  },
  2: {
    title: "Year 2 — Growing in Confidence",
    intro: "Children become more independent, work cooperatively and begin reflecting more thoughtfully on their actions and experiences.",
    character: "images/riley-respect.png",
    alt: "Riley Respect",
    caption: "Riley Respect",
    quote: "“Different experiences make our community stronger.”",
    milestones: [
      ["Take responsibility", "Reflect on behaviour and understand how choices affect others."],
      ["Work cooperatively", "Include others and recognise different experiences and beliefs."],
      ["Recover from setbacks", "Use simple strategies to manage emotions and keep going."],
      ["Speak clearly", "Contribute to groups, presentations and performances."]
    ],
    experiences: ["Presentations", "Performances", "Collaborative learning", "Wider-world learning", "Reflection"]
  },
  3: {
    title: "Year 3 — Discovering My Strengths",
    intro: "Children take greater responsibility, communicate with different audiences and begin considering their future goals and ambitions.",
    character: "images/connor-courage.png",
    alt: "Connor Courage",
    caption: "Connor Courage",
    quote: "“Your voice matters — be brave enough to use it.”",
    milestones: [
      ["Act independently", "Make positive choices and respond constructively to feedback."],
      ["Show empathy", "Support others and contribute positively to group work."],
      ["Build resilience", "Complete sustained work and use regulation strategies."],
      ["Communicate", "Speak clearly to different audiences and perform with confidence."]
    ],
    experiences: ["LAMDA introductory exam", "Clubs", "Visits", "Workshops", "Responsible technology use"]
  },
  4: {
    title: "Year 4 — Taking Responsibility",
    intro: "Children deepen their independence, take on responsibilities and connect their talents with wider opportunities.",
    character: "images/eli-endurance.png",
    alt: "Eli Endurance",
    caption: "Eli Endurance",
    quote: "“Practice, positivity and perseverance help us grow.”",
    milestones: [
      ["Live the values", "Apply KCA values and make respectful choices when unsupervised."],
      ["Step into leadership", "Volunteer, collaborate and encourage others to participate."],
      ["Understand difference", "Explore cultures, beliefs and experiences with curiosity."],
      ["Develop talents", "Reflect on strengths and begin learning an instrument."]
    ],
    experiences: ["LAMDA Speaking in Public", "Swimming", "Instrument tuition", "Leadership", "Learning beyond school"]
  },
  5: {
    title: "Year 5 — Contributing to My Community",
    intro: "Children act with increasing maturity, support younger pupils and demonstrate commitment to their interests and responsibilities.",
    character: "images/kiki-kofi-kindness.png",
    alt: "Kiki and Kofi Kindness",
    caption: "Kiki & Kofi Kindness",
    quote: "“Small caring actions can make a big difference.”",
    milestones: [
      ["Act responsibly", "Show honesty, self-discipline and thoughtful decision-making."],
      ["Support others", "Encourage younger pupils and strengthen relationships."],
      ["Sustain effort", "Persevere with longer projects and manage change positively."],
      ["Represent KCA", "Speak confidently in unfamiliar situations and lead by example."]
    ],
    experiences: ["LAMDA Grade 1", "Musical development", "Supporting younger pupils", "School representation", "Leadership"]
  },
  6: {
    title: "Year 6 — Ready for My Future",
    intro: "Children become role models, advocate for themselves and others, and prepare confidently for the next stage of their education.",
    character: "images/aria-aspiration.png",
    alt: "Aria Aspiration",
    caption: "Aria Aspiration",
    quote: "“Exciting futures are built one brave step at a time.”",
    milestones: [
      ["Lead and advocate", "Lead discussions, support others and challenge unfairness respectfully."],
      ["Create belonging", "Model respect and help build an inclusive community."],
      ["Show resilience", "Manage responsibilities maturely and persist through challenge."],
      ["Prepare for the future", "Speak confidently about goals, interests and aspirations."]
    ],
    experiences: ["Residential", "Camden Citizenship", "Bright Futures Academy", "Musical performance", "Secondary transition"]
  }
};

const buttons = document.querySelectorAll(".platform");
const title = document.getElementById("yearTitle");
const intro = document.getElementById("yearIntro");
const kicker = document.getElementById("yearKicker");
const milestones = document.getElementById("milestones");
const experiences = document.getElementById("experiences");
const character = document.getElementById("yearCharacter");
const caption = document.getElementById("characterCaption");
const speech = document.getElementById("speechBubble");
const fill = document.getElementById("lineFill");
const train = document.getElementById("movingTrain");

function renderYear(number) {
  const year = years[number];
  kicker.textContent = `Platform ${number}`;
  title.textContent = year.title;
  intro.textContent = year.intro;
  character.src = year.character;
  character.alt = year.alt;
  character.style.animation = "none";
  void character.offsetWidth;
  character.style.animation = "";
  caption.textContent = year.caption;
  speech.textContent = year.quote;

  milestones.innerHTML = year.milestones.map(([heading, copy]) => `
    <article class="milestone">
      <h4>${heading}</h4>
      <p>${copy}</p>
    </article>
  `).join("");

  experiences.innerHTML = year.experiences.map(item => `<span>${item}</span>`).join("");

  const progress = ((number - 1) / 5) * 100;
  fill.style.width = `calc(${progress}% - ${progress === 0 ? 0 : 40}px)`;
  train.style.left = `calc(30px + (100% - 100px) * ${(number - 1) / 5})`;

  buttons.forEach(button => {
    const active = Number(button.dataset.year) === number;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => renderYear(Number(button.dataset.year)));
});

document.getElementById("beginJourney").addEventListener("click", () => {
  document.getElementById("journey").scrollIntoView({ behavior: "smooth" });
});

renderYear(1);
