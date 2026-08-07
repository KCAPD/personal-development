const years = {
  0: {
    title: "EYFS — Building the Foundations",
    intro: "In Nursery and Reception, children experience the KCA values through play, relationships, routines, communication and exploration, building the foundations for their Personal Development Journey.",
    character: "images/riley-respect.png",
    alt: "",
    caption: "",
    quote: "",
    milestones: [],
    experiences: []
  },
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
    experiences: [
      "LAMDA Solo Introductory Exam",
      "Learning Presentations",
      "Songs Under the Tree",
      "Bright Futures Festival",
      "BSL with Frank Barnes School",
      "British Museum",
      "British Library",
      "Whole School Exhibition"
    ]
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
let activeYear = 1;

function renderYear(number) {
  activeYear = number;
  const year = years[number];
  const isEYFS = number === 0;
  kicker.textContent = isEYFS ? "EYFS" : `Platform ${number}`;
  title.textContent = year.title;
  intro.textContent = year.intro;

  if (!isEYFS) {
    character.src = year.character;
    character.alt = year.alt;
    character.style.animation = "none";
    void character.offsetWidth;
    character.style.animation = "";
    caption.textContent = year.caption;
    speech.textContent = year.quote;
  }

  milestones.innerHTML = year.milestones.map(([heading, copy]) => `
    <article class="milestone">
      <h4>${heading}</h4>
      <p>${copy}</p>
    </article>
  `).join("");

  experiences.innerHTML = year.experiences.map(item => `<span>${item}</span>`).join("");

  const progress = (number / 6) * 100;
  fill.style.width = `calc(${progress}% - ${progress === 0 ? 0 : 40}px)`;
  train.style.left = `calc(30px + (100% - 100px) * ${number / 6})`;

  buttons.forEach(button => {
    const active = Number(button.dataset.year) === number;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  const isYear3 = number === 3;
  yearGrowthSection.hidden = !isYear3;
  eyfsFoundationSection.hidden = !isEYFS;

  document.querySelector(".milestone-grid").hidden = isEYFS;
  document.querySelector(".experiences").hidden = isEYFS;
  document.querySelector(".year-character-wrap").hidden = isEYFS;

  if (!isYear3) {
    inlineGrowthMap.hidden = true;
    courageGrowthButton.setAttribute("aria-expanded", "false");
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => renderYear(Number(button.dataset.year)));
});

document.getElementById("beginJourney").addEventListener("click", () => {
  document.getElementById("journey").scrollIntoView({ behavior: "smooth" });
});



const valueStories = {
  integrity: {
    title: "Isaac Integrity",
    strand: "Making good choices",
    image: "images/isaac-integrity.png",
    lead: "Isaac does the right thing, even when nobody is watching.",
    details: [
      "His strong shell helps him stay true to what he believes is right, rather than being knocked off course by other people’s opinions.",
      "Isaac examines what he sees and hears so that he can make fair choices. He knows that integrity means being honest, responsible and trustworthy — even when a task is difficult or takes longer."
    ]
  },
  respect: {
    title: "Riley Respect",
    strand: "Belonging and understanding others",
    image: "images/riley-respect.png",
    lead: "Riley understands that differences make the KCA community stronger.",
    details: [
      "Each of her unique feathers celebrates the experiences that different people bring. She welcomes everyone and knows that every person belongs at KCA.",
      "Riley listens carefully, values other people’s opinions and treats adults, visitors and classmates with respect — even when she disagrees."
    ]
  },
  endurance: {
    title: "Eli Endurance",
    strand: "Managing myself and staying the course",
    image: "images/eli-endurance.png",
    lead: "Eli knows that not everything goes perfectly the first time.",
    details: [
      "Mistakes are part of learning, so Eli takes a breath, focuses on the challenge and tries again. He asks for help when he needs it and celebrates the progress that practice brings.",
      "Eli understands that perseverance helps people become stronger and more confident. His positivity keeps him travelling in the right direction, even when the road is bumpy."
    ]
  },
  courage: {
    title: "Connor Courage",
    strand: "Finding and using my voice",
    image: "images/connor-courage.png",
    lead: "Connor arrives ready to face a new adventure.",
    details: [
      "When something feels difficult or unfamiliar, he remembers to have a go and be brave. He takes positive risks by sharing ideas, speaking in front of others and trying new things.",
      "Connor knows courage does not mean never wobbling. It means continuing despite the wobble and encouraging other people to be brave too."
    ]
  },
  kindness: {
    title: "Kiki & Kofi Kindness",
    strand: "Relationships and contribution",
    image: "images/kiki-kofi-kindness.png",
    lead: "Kiki and Kofi help others feel included, supported and valued.",
    details: [
      "Kiki notices when somebody looks worried, upset or left out and offers compassion. Kofi understands what it feels like to be alone and invites others to join in.",
      "Together, they show that small caring actions can make a big difference. They help, share, encourage and contribute without always waiting to be asked."
    ]
  },
  aspiration: {
    title: "Aria Aspiration",
    strand: "Exploring my future and my passions",
    image: "images/aria-aspiration.png",
    lead: "Aria looks towards the horizon and sees exciting possibilities.",
    details: [
      "She explores the world with curiosity, asks thoughtful questions and discovers talents, interests and friendships. Every place explored, book read, fact learned and creative experience adds to her wings.",
      "Aria knows that exciting futures are built one small step at a time. Aspiration means believing in yourself, working hard and being brave enough to wonder how high you can fly."
    ]
  }
};

const dialog = document.getElementById("characterDialog");
const dialogClose = document.getElementById("dialogClose");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");
const dialogStrand = document.getElementById("dialogStrand");
const dialogLead = document.getElementById("dialogLead");
const dialogDetails = document.getElementById("dialogDetails");


const year3CourageGrowthMap = [
  {
    statement: "I can contribute my ideas independently during discussions.",
    signature: ["Learning Presentations"],
    curriculum: "Children regularly contribute, explain and justify their thinking through structured discussion across the curriculum.",
    culture: "Every child is encouraged to use their voice. Adults create classrooms where children know their ideas are valued and where respectful discussion is part of everyday learning.",
    why: "Children learn that courage can be as simple as putting forward an idea, joining a discussion or sharing a viewpoint without waiting to be prompted."
  },
  {
    statement: "I can speak clearly to different audiences.",
    signature: ["LAMDA", "Learning Presentations", "Whole School Exhibition"],
    curriculum: "Children regularly present, explain and communicate their learning across a range of subjects and for different purposes.",
    culture: "KCA creates authentic audiences for children's learning so that speaking confidently has a real purpose beyond the classroom.",
    why: "Repeated opportunities to speak to classmates, families, visitors and wider audiences help children adapt their communication and grow in confidence."
  },
  {
    statement: "I can take part in performances with confidence.",
    signature: ["LAMDA Solo Introductory Examination", "Songs Under the Tree", "Class performances and assemblies"],
    curriculum: "Performance, rehearsal and spoken communication give children repeated opportunities to practise expressive speaking and presentation.",
    culture: "Performance is celebrated as part of life at KCA. Children are supported to rehearse, take positive risks and feel proud when they perform for others.",
    why: "Children experience the satisfaction of stepping beyond their comfort zone and discovering that confidence grows through practice."
  },
  {
    statement: "I can attempt challenging work without giving up quickly.",
    signature: ["Bridge Engineering Project", "Stone Age enquiry"],
    curriculum: "Ambitious tasks across the curriculum ask children to solve problems, refine ideas and persist when the first attempt is not successful.",
    culture: "Mistakes are treated as part of learning. Adults expect children to have a go, seek support when needed and keep working when learning becomes difficult.",
    why: "Courage in learning means being willing to attempt something difficult rather than avoiding challenge."
  },
  {
    statement: "I can reflect on times when I showed courage.",
    signature: ["Personal Development Journey Journal"],
    curriculum: "Children reflect on experiences, achievements and challenges, identifying the values they have demonstrated and the ways they have grown.",
    culture: "Reflection helps children notice that courage appears in both memorable experiences and small everyday choices.",
    why: "Recognising courageous moments helps children understand their own progress and builds confidence for the next challenge."
  },
  {
    statement: "I can complete my LAMDA Solo Introductory Exam.",
    signature: ["LAMDA preparation", "Rehearsal and feedback", "Solo Introductory Examination"],
    curriculum: "Children prepare a solo performance, rehearse deliberately, respond to feedback and complete the Year 3 LAMDA examination.",
    culture: "Every child is supported to see themselves as a performer and communicator who can rise to a significant personal challenge.",
    why: "The examination provides a clear, authentic milestone where children can demonstrate courage, preparation, resilience and confident communication."
  }
];


const yearGrowthSection = document.getElementById("yearGrowthSection");
const eyfsFoundationSection = document.getElementById("eyfsFoundationSection");
const courageGrowthButton = document.querySelector('.year-growth-value[data-growth-value="courage"]');
const inlineGrowthMap = document.getElementById("inlineGrowthMap");
const inlineBehaviourAccordion = document.getElementById("inlineBehaviourAccordion");
const year3CurriculumLink = document.getElementById("year3CurriculumLink");

function renderInlineCourageGrowthMap() {
  inlineBehaviourAccordion.innerHTML = year3CourageGrowthMap.map((item, index) => `
    <article class="behaviour-item">
      <button class="behaviour-trigger"
              type="button"
              aria-expanded="false">
        <span class="behaviour-check">✓</span>
        <strong>${item.statement}</strong>
        <span class="behaviour-chevron" aria-hidden="true">⌄</span>
      </button>

      <div class="behaviour-content">
        <div class="demonstration-group">
          <p class="demonstration-label">🌟 Signature experiences</p>
          <div class="demonstration-chips">
            ${item.signature.map(experience => `<span class="demonstration-chip">${experience}</span>`).join("")}
          </div>
        </div>

        <div class="demonstration-group">
          <p class="demonstration-label">📚 Across our curriculum</p>
          <p class="demonstration-copy">${item.curriculum}</p>
        </div>

        <div class="demonstration-group">
          <p class="demonstration-label">🏫 Everyday school life</p>
          <p class="demonstration-copy">${item.culture}</p>
        </div>

        <div class="why-it-matters">
          <strong>Why this matters</strong>
          <p>${item.why}</p>
        </div>
      </div>
    </article>
  `).join("");

  inlineBehaviourAccordion.querySelectorAll(".behaviour-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".behaviour-item");
      const willOpen = !item.classList.contains("open");

      inlineBehaviourAccordion.querySelectorAll(".behaviour-item").forEach(other => {
        other.classList.remove("open");
        other.querySelector(".behaviour-trigger").setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

courageGrowthButton.addEventListener("click", () => {
  const opening = inlineGrowthMap.hidden;

  if (opening) {
    renderInlineCourageGrowthMap();
    inlineGrowthMap.hidden = false;
    courageGrowthButton.setAttribute("aria-expanded", "true");

    requestAnimationFrame(() => {
      inlineGrowthMap.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  } else {
    inlineGrowthMap.hidden = true;
    courageGrowthButton.setAttribute("aria-expanded", "false");
  }
});

renderYear(1);

document.querySelectorAll(".value-card[data-value]").forEach(card => {
  card.addEventListener("click", () => {
    const story = valueStories[card.dataset.value];
    dialogImage.src = story.image;
    dialogImage.alt = story.title;
    dialogTitle.textContent = story.title;
    dialogStrand.textContent = story.strand;
    dialogLead.textContent = story.lead;
    dialogDetails.innerHTML = story.details.map(paragraph => `<p>${paragraph}</p>`).join("");
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closeCharacterDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

dialogClose.addEventListener("click", closeCharacterDialog);

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    closeCharacterDialog();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});


/* Journey Journal viewer */
const journalPages = [
  {
    image: "images/journal-cover.png",
    alt: "Cover of the KCA Personal Development Journey Journal",
    title: "The Journey Journal",
    subtitle: "Every child receives one"
  },
  {
    image: "images/journal-setting-goals-year-2.png",
    alt: "Year 2 journal page for setting personal goals",
    title: "Setting goals",
    subtitle: "Year 2"
  },
  {
    image: "images/journal-observable-behaviours-year-1.png",
    alt: "Year 1 observable behaviours for Endurance and Kindness",
    title: "Observable behaviours",
    subtitle: "Year 1"
  },
  {
    image: "images/journal-looking-back-year-6.png",
    alt: "Year 6 journal page for looking back on the journey through KCA",
    title: "Looking back",
    subtitle: "Year 6"
  }
];

const journalDialog = document.getElementById("journalDialog");
const journalDialogImage = document.getElementById("journalDialogImage");
const journalDialogTitle = document.getElementById("journalDialogTitle");
const journalDialogSubtitle = document.getElementById("journalDialogSubtitle");
const journalDialogClose = document.getElementById("journalDialogClose");
const journalPrevious = document.getElementById("journalPrevious");
const journalNext = document.getElementById("journalNext");
let activeJournalPage = 0;

function renderJournalPage(index) {
  activeJournalPage = (index + journalPages.length) % journalPages.length;
  const page = journalPages[activeJournalPage];

  journalDialogImage.src = page.image;
  journalDialogImage.alt = page.alt;
  journalDialogTitle.textContent = page.title;
  journalDialogSubtitle.textContent = page.subtitle;
}

document.querySelectorAll(".journal-page[data-journal-index]").forEach(button => {
  button.addEventListener("click", () => {
    renderJournalPage(Number(button.dataset.journalIndex));
    journalDialog.showModal();
    document.body.classList.add("journal-dialog-open");
  });
});

journalPrevious.addEventListener("click", () => {
  renderJournalPage(activeJournalPage - 1);
});

journalNext.addEventListener("click", () => {
  renderJournalPage(activeJournalPage + 1);
});

function closeJournalDialog() {
  journalDialog.close();
  document.body.classList.remove("journal-dialog-open");
}

journalDialogClose.addEventListener("click", closeJournalDialog);

journalDialog.addEventListener("click", event => {
  if (event.target === journalDialog) closeJournalDialog();
});

journalDialog.addEventListener("close", () => {
  document.body.classList.remove("journal-dialog-open");
});

document.addEventListener("keydown", event => {
  if (!journalDialog.open) return;
  if (event.key === "ArrowLeft") renderJournalPage(activeJournalPage - 1);
  if (event.key === "ArrowRight") renderJournalPage(activeJournalPage + 1);
});
