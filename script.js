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

  const hasGrowthMap = [1, 2, 3, 4, 5, 6].includes(number);
  yearGrowthSection.hidden = !hasGrowthMap;
  eyfsFoundationSection.hidden = !isEYFS;

  if (hasGrowthMap) {
    yearGrowthEyebrow.textContent = `Year ${number}`;
  }

  document.querySelector(".milestone-grid").hidden = isEYFS;
  document.querySelector(".experiences").hidden = isEYFS;
  document.querySelector(".year-character-wrap").hidden = isEYFS;

  inlineGrowthMap.hidden = true;
  activeGrowthValue = null;
  growthValueButtons.forEach(button => {
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("is-selected");
  });
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



const year1GrowthMaps = {
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    behaviours: [
      "I can follow classroom expectations.",
      "I can tell the truth when supported.",
      "I can take responsibility for simple actions.",
      "I can recognise when a choice is kind, safe or fair.",
      "I can try to make positive choices."
    ]
  },
  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    behaviours: [
      "I can listen when others are speaking.",
      "I can share resources fairly.",
      "I can use polite and respectful language.",
      "I can follow class routines and expectations.",
      "I can treat others kindly during play and learning."
    ]
  },
  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    behaviours: [
      "I can keep trying when learning feels difficult.",
      "I can begin to manage my emotions with support.",
      "I can follow routines independently at times.",
      "I can complete short tasks with encouragement.",
      "I can recognise when I need help."
    ]
  },
  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    behaviours: [
      "I can use kind words and actions.",
      "I can help others during play and learning.",
      "I can notice when someone may need help or comfort.",
      "I can take turns and share fairly.",
      "I can show care towards others."
    ]
  },
  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    behaviours: [
      "I can join in with class discussions and activities.",
      "I can try new learning with encouragement.",
      "I can talk to familiar adults and children about my ideas.",
      "I can share my work or perform with support.",
      "I can keep going when something feels difficult."
    ]
  },
  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    behaviours: [
      "I can show curiosity about new experiences.",
      "I can participate in trips, performances and enrichment activities.",
      "I can talk about things I enjoy learning.",
      "I can try different activities with encouragement.",
      "I can begin to develop interests and preferences."
    ]
  }
};


const year2GrowthMaps = {
  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    behaviours: [
      "I can work cooperatively with others.",
      "I can take turns and include others in activities.",
      "I can recognise that people may have different experiences and beliefs.",
      "I can care for shared spaces and resources.",
      "I can respond respectfully to adults and other children."
    ]
  },
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    behaviours: [
      "I can reflect on my behaviour with support.",
      "I can take responsibility for my actions.",
      "I can act honestly during learning and play.",
      "I can understand that my choices affect others.",
      "I can try to resolve problems fairly."
    ]
  },
  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    behaviours: [
      "I can persevere during learning activities.",
      "I can use simple strategies to manage my emotions.",
      "I can recover from setbacks with support.",
      "I can sustain attention during longer activities.",
      "I can begin to work independently."
    ]
  },
  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    behaviours: [
      "I can include others in games and activities.",
      "I can offer help when someone is struggling.",
      "I can understand that my actions affect others.",
      "I can use friendly and cooperative behaviour.",
      "I can use positive language with others."
    ]
  },
  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    behaviours: [
      "I can share my ideas during learning activities.",
      "I can try unfamiliar tasks with growing confidence.",
      "I can speak clearly in small groups and class discussions.",
      "I can take part in performances and presentations.",
      "I can understand that mistakes help me to learn and improve."
    ]
  },
  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    behaviours: [
      "I can show enthusiasm for new opportunities.",
      "I can reflect on experiences and activities I enjoy.",
      "I can participate positively in enrichment opportunities.",
      "I can show curiosity about the wider world.",
      "I can recognise some of my strengths."
    ]
  }
};

const year4GrowthMaps = {
  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    behaviours: [
      "I can show respect during discussions and debates.",
      "I can value the contributions of others.",
      "I can show curiosity about different cultures, beliefs and experiences.",
      "I can take responsibility for my behaviour towards others.",
      "I can use respectful language even when frustrated."
    ]
  },
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    behaviours: [
      "I can take responsibility during collaborative work.",
      "I can reflect thoughtfully on my behaviour and learning.",
      "I can make respectful choices even when unsupervised.",
      "I can understand fairness and accountability.",
      "I can apply school values in different situations."
    ]
  },
  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    behaviours: [
      "I can manage frustration more independently.",
      "I can sustain focus during learning.",
      "I can reflect on strategies that help me succeed.",
      "I can persist with challenging tasks.",
      "I can take responsibility for organisation and routines.",
      "I can sustain effort and show growing independence when swimming."
    ]
  },
  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    behaviours: [
      "I can show consideration for other people’s feelings.",
      "I can resolve friendship difficulties respectfully.",
      "I can encourage others during collaborative work.",
      "I can contribute positively to the classroom community.",
      "I can choose kindness independently."
    ]
  },
  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    behaviours: [
      "I can express my opinions respectfully.",
      "I can use my voice during collaborative work.",
      "I can volunteer for responsibilities and leadership opportunities.",
      "I can stay positive when learning becomes challenging.",
      "I can encourage others to participate confidently.",
      "I can complete my LAMDA Speaking in Public Entry Level exam."
    ]
  },
  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    behaviours: [
      "I can sustain participation in areas of interest.",
      "I can show pride in my achievements.",
      "I can show curiosity about careers, culture and opportunities.",
      "I can engage positively with opportunities beyond school.",
      "I can reflect on my talents and aspirations.",
      "I can start to learn an instrument at school."
    ]
  }
};


const year5GrowthMaps = {
  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    behaviours: [
      "I can work maturely with different people.",
      "I can listen respectfully during disagreements.",
      "I can encourage inclusive behaviour within groups.",
      "I can treat public spaces, visitors and the wider community respectfully.",
      "I can reflect on how my behaviour affects others."
    ]
  },
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    behaviours: [
      "I can act honestly and responsibly across school life.",
      "I can take ownership of my mistakes and learning.",
      "I can show self-discipline and responsibility.",
      "I can make thoughtful choices during challenging situations.",
      "I can encourage positive behaviour in others."
    ]
  },
  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    behaviours: [
      "I can stay positive during challenge and change.",
      "I can use self-regulation strategies independently.",
      "I can balance independence with asking for support when needed.",
      "I can sustain effort across longer projects and responsibilities.",
      "I can encourage others to persevere."
    ]
  },
  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    behaviours: [
      "I can support younger pupils and peers appropriately.",
      "I can show empathy in different situations.",
      "I can contribute positively to the wider school community.",
      "I can understand the importance of encouragement and inclusion.",
      "I can reflect on how kindness strengthens relationships."
    ]
  },
  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    behaviours: [
      "I can speak confidently in unfamiliar situations.",
      "I can use my voice to support and encourage others.",
      "I can take positive risks in learning and performance.",
      "I can represent the school confidently.",
      "I can reflect thoughtfully on my personal growth and challenges.",
      "I can complete my LAMDA Speaking in Public Grade 1 exam."
    ]
  },
  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    behaviours: [
      "I can show commitment to my interests and responsibilities.",
      "I can show ambition in learning and enrichment activities.",
      "I can recognise how effort supports future success.",
      "I can engage confidently with new opportunities.",
      "I can encourage others to participate and achieve.",
      "I can continue to explore musical instruments and commit time to developing my skillset."
    ]
  }
};

const year6GrowthMaps = {
  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    behaviours: [
      "I can advocate for fairness and inclusion.",
      "I can challenge disrespectful behaviour appropriately.",
      "I can model respectful behaviour to younger pupils.",
      "I can listen thoughtfully and respond maturely to different opinions.",
      "I can help create a culture of belonging within the school."
    ]
  },
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    behaviours: [
      "I can model honesty, responsibility and fairness consistently.",
      "I can make thoughtful moral decisions.",
      "I can act responsibly even without adult supervision.",
      "I can support others to make positive choices.",
      "I can understand the impact of my actions on the wider community.",
      "I can take part in the Camden Citizenship Scheme."
    ]
  },
  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    behaviours: [
      "I can demonstrate self-discipline and resilience consistently.",
      "I can manage my emotions and responsibilities maturely.",
      "I can approach challenge with confidence and persistence.",
      "I can reflect critically on my personal growth.",
      "I can model perseverance and self-management for younger pupils.",
      "I can take part in a residential programme, staying away from home for a period of time.",
      "I can act responsibly and show resilience by supporting others when swimming."
    ]
  },
  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    behaviours: [
      "I can act as a role model for kindness and empathy.",
      "I can support others through leadership and advocacy.",
      "I can show compassion and maturity during difficult situations.",
      "I can encourage a positive and inclusive environment.",
      "I can understand the wider impact of kindness within a community."
    ]
  },
  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    behaviours: [
      "I can advocate respectfully for myself and others.",
      "I can lead discussions, presentations and group activities confidently.",
      "I can challenge unfairness respectfully.",
      "I can model confidence and resilience to younger pupils.",
      "I can use my voice purposefully for different audiences and situations.",
      "I can take part in a musical performance in front of an audience."
    ]
  },
  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    behaviours: [
      "I can demonstrate ambition and readiness for future challenges.",
      "I can speak confidently about my goals, interests and aspirations.",
      "I can sustain commitment to areas I am passionate about.",
      "I can engage positively with opportunities linked to future pathways.",
      "I can model aspiration, curiosity and ambition to younger pupils.",
      "I can apply for a job and commit to completing as part of the Bright Futures Academy.",
      "I can continue to explore musical instruments and deepen my understanding of music."
    ]
  }
};

const year3GrowthMaps = {
  integrity: {
    title: "Integrity",
    strand: "Making good choices",
    character: "images/isaac-integrity.png",
    characterAlt: "Isaac Integrity",
    culture: "At King's Cross Academy, integrity is demonstrated through everyday choices. Children are increasingly trusted to make responsible decisions, reflect honestly, learn from mistakes and understand how their actions affect themselves and others.",
    behaviours: [
      {
        statement: "I can make positive choices independently.",
        signature: [],
        curriculum: "Across the curriculum, children are expected to make purposeful choices about how they approach tasks, use resources and respond to challenges.",
        culture: "Year 3 marks a step towards greater independence. Children are increasingly trusted to make positive choices without waiting for constant adult prompting.",
        why: "Integrity grows when children begin to do the right thing because they understand why it matters, not simply because an adult is watching."
      },
      {
        statement: "I can reflect on the consequences of my actions.",
        signature: [],
        curriculum: "PSHE provides planned opportunities to think about choices, relationships, consequences and how actions affect other people.",
        culture: "Reflective and restorative conversations help children think beyond the immediate moment and consider what they could do differently next time.",
        why: "Reflection helps children connect their choices with their impact and take increasing responsibility for what happens next."
      },
      {
        statement: "I can be honest when I make mistakes.",
        signature: [],
        curriculum: "Learning across subjects gives children frequent opportunities to notice errors, correct misconceptions and talk honestly about what has not yet worked.",
        culture: "Mistakes are treated as part of learning. Children are encouraged to acknowledge them openly rather than hide them, then use them as a starting point for improvement.",
        why: "Being honest about mistakes builds trust and helps children understand that integrity matters most when something has gone wrong."
      },
      {
        statement: "I can respond positively to feedback.",
        signature: ["LAMDA coaching and rehearsal"],
        curriculum: "Children respond to their teacher's feedback and make improvements across a range of subjects.",
        culture: "Feedback is understood as part of growth rather than criticism. Children are expected to listen, reflect and make purposeful improvements.",
        why: "Responding constructively to feedback helps children take responsibility for improving their own learning."
      },
      {
        statement: "I can regulate my behaviour in different situations.",
        signature: [],
        curriculum: "Children practise the habits needed to participate successfully in lessons, collaborative work and independent tasks.",
        culture: "Through consistent behaviour expectations, children increasingly manage themselves and understand what it means to be ready for learning in different situations.",
        why: "Self-regulation allows children to make choices that support both their own learning and the learning of those around them."
      }
    ]
  },

  respect: {
    title: "Respect",
    strand: "Belonging and understanding others",
    character: "images/riley-respect.png",
    characterAlt: "Riley Respect",
    culture: "At King's Cross Academy, respect is reflected in the way children listen, communicate, value difference and represent their school. Year 3 children learn that belonging is strengthened when everyone is heard, included and treated with consideration.",
    behaviours: [
      {
        statement: "I can listen carefully to different viewpoints.",
        signature: [],
        curriculum: "The PSHE curriculum provides regular opportunities for reflection, discussion and consideration of different views.",
        culture: "Children are expected to listen to one another before responding, recognising that disagreement does not prevent respectful dialogue.",
        why: "Listening to different viewpoints helps children understand others more deeply and develops thoughtful, respectful communication."
      },
      {
        statement: "I can work positively with different people.",
        signature: ["Year 2 → Year 3 class reorganisation"],
        curriculum: "Collaborative tasks across the curriculum give children opportunities to share ideas, solve problems and learn alongside different classmates.",
        culture: "Children enter Year 3 in newly organised classes, creating an authentic opportunity to build relationships and work successfully with a new group of peers.",
        why: "Learning to collaborate beyond familiar friendship groups helps children become flexible, inclusive members of a community."
      },
      {
        statement: "I can show respectful behaviour during visits and trips.",
        signature: ["British Library", "British Museum", "London visits and workshops"],
        curriculum: "Visits extend curriculum learning beyond the classroom and require children to engage thoughtfully with new environments, experts and public spaces.",
        culture: "Children understand that when they are out in London they represent KCA and are expected to be ready, respectful and safe.",
        why: "Visits provide a genuine opportunity to demonstrate respect beyond the familiar routines of school."
      },
      {
        statement: "I can show awareness of fairness and inclusion.",
        signature: ["BSL with Frank Barnes School"],
        curriculum: "PSHE supports children to explore fairness, equality, belonging and inclusion.",
        culture: "By Year 3, children have a working knowledge of BSL and can communicate with children and staff from Frank Barnes School with growing confidence. Inclusion is experienced as part of everyday school life, not simply discussed in lessons.",
        why: "Children see that fairness and inclusion require active choices that help everybody participate, communicate and belong."
      },
      {
        statement: "I can resolve disagreements with support.",
        signature: [],
        curriculum: "PSHE and collaborative learning provide opportunities to practise listening, compromise and resolving differences respectfully.",
        culture: "Adults support children to talk through disagreements, hear another person's perspective and find a constructive way forward rather than simply deciding who is right.",
        why: "Supported conflict resolution gives children the language and habits they need to manage relationships increasingly independently."
      },
      {
        statement: "I can take responsibility for a Chromebook, following the instructions to use it safely and responsibly.",
        signature: ["Year 3 Chromebook responsibility"],
        curriculum: "Technology is used across learning with explicit expectations for safe, purposeful and responsible use.",
        culture: "Being trusted with a Chromebook is a visible Year 3 milestone. Children learn that greater independence also brings greater responsibility.",
        why: "Responsible technology use turns respect into a practical habit: caring for shared resources, following guidance and making safe choices."
      }
    ]
  },

  endurance: {
    title: "Endurance",
    strand: "Managing myself and staying the course",
    character: "images/eli-endurance.png",
    characterAlt: "Eli Endurance",
    culture: "At King's Cross Academy, challenge is embraced rather than avoided. Children are encouraged to persevere, make mistakes, improve their work and understand that success comes through sustained effort, reflection and increasing independence.",
    behaviours: [
      {
        statement: "I can show resilience during challenging tasks.",
        signature: ["Bridge Engineering Project", "Stone Age enquiry"],
        curriculum: "Ambitious learning across subjects asks children to solve problems, rethink ideas and persist when a first attempt is not successful.",
        culture: "Adults expect children to have a go, seek support when needed and keep working when learning becomes difficult.",
        why: "Resilience grows when children experience challenge as a normal and worthwhile part of learning."
      },
      {
        statement: "I can use agreed strategies to regulate my emotions.",
        signature: [],
        curriculum: "Children learn and practise strategies that help them remain engaged and ready to participate when learning feels difficult or emotions become strong.",
        culture: "Consistent behaviour expectations and Ready for Learning routines help children increasingly manage themselves throughout the school day.",
        why: "Being able to regulate emotions helps children stay connected to learning, relationships and the choices they want to make."
      },
      {
        statement: "I can complete sustained pieces of work.",
        signature: ["Whole School Exhibition"],
        curriculum: "Children produce a great volume of increasingly substantial, high-quality work across lessons and subjects.",
        culture: "High expectations for presentation, completion and sustained effort help children develop the stamina needed to see significant pieces of learning through.",
        why: "Sustained work teaches children that meaningful outcomes are often built over time rather than completed instantly."
      },
      {
        statement: "I can respond positively to feedback.",
        signature: ["LAMDA coaching and rehearsal"],
        curriculum: "Children respond to their teacher's feedback and make improvements across a range of subjects based on this.",
        culture: "Feedback is seen as an expected part of improvement. Children learn to act on advice rather than seeing a first attempt as finished.",
        why: "Using feedback develops persistence, humility and the understanding that quality comes through refinement."
      },
      {
        statement: "I can demonstrate growing independence.",
        signature: [],
        curriculum: "Across Year 3, children are increasingly expected to organise themselves, begin tasks and sustain learning without repeated adult direction.",
        culture: "Children can be trusted to complete tasks and activities without constant adult support.",
        why: "Growing independence prepares children to take greater ownership of both their learning and their behaviour as they move through Key Stage 2."
      }
    ]
  },

  kindness: {
    title: "Kindness",
    strand: "Relationships and contribution",
    character: "images/kiki-kofi-kindness.png",
    characterAlt: "Kiki and Kofi Kindness",
    culture: "Kindness is woven through everyday life at KCA. Children are encouraged to notice when others need support, celebrate one another's successes and understand that learning and community are strongest when people help, include and encourage each other.",
    behaviours: [
      {
        statement: "I can show empathy towards others.",
        signature: [],
        curriculum: "PSHE gives children opportunities to recognise feelings, consider other perspectives and think about how experiences can affect people differently.",
        culture: "Adults model empathy and children are encouraged to notice how others may be feeling rather than focusing only on their own point of view.",
        why: "Empathy helps children respond to people with understanding rather than assumption."
      },
      {
        statement: "I can support others during learning activities.",
        signature: [],
        curriculum: "Partner work, collaborative enquiry and practical tasks require children to explain, encourage, share resources and help one another succeed.",
        culture: "Classrooms are designed for collaboration. Helping another learner is understood as a positive contribution rather than a distraction from one's own learning.",
        why: "Supporting others teaches children that successful learning communities are built through contribution, not competition alone."
      },
      {
        statement: "I can contribute positively to group work.",
        signature: ["Year 2 → Year 3 class reorganisation", "Whole School Exhibition"],
        curriculum: "Group tasks across subjects give children repeated opportunities to take a role, share ideas and contribute towards a common outcome.",
        culture: "Joining a newly organised Year 3 class means children build new relationships and learn how to contribute positively within a different class community.",
        why: "Positive group contribution helps children understand that everyone has something useful to offer."
      },
      {
        statement: "I can recognise when someone may need support.",
        signature: [],
        curriculum: "PSHE supports children to recognise emotions, wellbeing and the different ways people may communicate that they need help.",
        culture: "Children are encouraged to notice when a friend or classmate is struggling, check in with them and seek adult help when appropriate.",
        why: "Kindness begins with noticing. Recognising another person's needs is the first step towards offering meaningful support."
      },
      {
        statement: "I can reflect on ways to be kind and helpful.",
        signature: ["Personal Development Journey Journal"],
        curriculum: "Reflection within the Personal Development Journey helps children connect values with real choices, relationships and experiences.",
        culture: "Children are regularly encouraged to think about the impact of their actions and the small ways they can make their class and school community better.",
        why: "Reflection helps kindness become intentional rather than accidental."
      }
    ]
  },

  courage: {
    title: "Courage",
    strand: "Finding and using my voice",
    character: "images/connor-courage.png",
    characterAlt: "Connor Courage",
    culture: "At King's Cross Academy, courage is about having the confidence to be yourself, share your ideas and embrace challenge. Children are encouraged to take risks in their learning, perform in front of others and understand that mistakes are a natural part of becoming a successful learner.",
    behaviours: [
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
    ]
  },

  aspiration: {
    title: "Aspiration",
    strand: "Exploring my future and my passions",
    character: "images/aria-aspiration.png",
    characterAlt: "Aria Aspiration",
    culture: "At King's Cross Academy, aspiration begins with curiosity. Children encounter ambitious experiences, new places, interests and people so that they can begin to recognise their strengths and imagine a future full of possibilities.",
    behaviours: [
      {
        statement: "I can engage positively with new experiences and responsibilities.",
        signature: ["London Exploration Day", "Ancient Egyptians Day", "Year 3 responsibilities"],
        curriculum: "The Year 3 curriculum deliberately introduces unfamiliar contexts, new subject knowledge and increasingly independent ways of working.",
        culture: "Beginning Key Stage 2 brings greater responsibility. Children are encouraged to approach new experiences positively and see unfamiliarity as an opportunity to grow.",
        why: "Aspiration depends on being willing to step into new experiences rather than staying only with what already feels comfortable."
      },
      {
        statement: "I can develop interests through clubs and enrichment.",
        signature: ["LAMDA", "Clubs and enrichment"],
        curriculum: "Enrichment broadens children's experiences beyond core classroom learning and gives them opportunities to discover interests and talents.",
        culture: "Children are encouraged to try activities, notice what excites them and recognise that interests can grow through participation and practice.",
        why: "Discovering interests helps children begin building a stronger sense of identity, possibility and future direction."
      },
      {
        statement: "I can reflect on skills and activities I enjoy.",
        signature: ["Learning Presentations", "Whole School Exhibition", "Personal Development Journey Journal"],
        curriculum: "Reflection helps children identify the areas of learning, creativity and participation that they find most rewarding.",
        culture: "KCA celebrates different kinds of success so children can recognise strengths beyond a single subject or outcome.",
        why: "Knowing what they enjoy helps children understand themselves as learners and begin making connections between interests, strengths and future possibilities."
      },
      {
        statement: "I can show curiosity during visits and workshops.",
        signature: ["British Museum", "British Library", "London Wetland Centre", "Canal Museum", "Horizon 22"],
        curriculum: "Visits and workshops are deliberately used to extend learning beyond the classroom and invite children to question, observe and investigate first-hand.",
        culture: "Children are encouraged to ask thoughtful questions and see London's museums, institutions, environments and experts as places that belong to their learning journey.",
        why: "Curiosity opens doors to knowledge, interests and experiences that children may not yet know are available to them."
      },
      {
        statement: "I can begin to think about future goals and ambitions.",
        signature: ["Bright Futures Festival", "Horizon 22", "LAMDA"],
        curriculum: "Children begin to connect their current interests, learning and strengths with wider opportunities and future possibilities.",
        culture: "The Bright Futures Festival gives children direct opportunities to meet professionals, hear about different pathways and begin imagining their own ambitions.",
        why: "Early conversations about goals help children see their future as something they can actively shape rather than something that simply happens to them."
      }
    ]
  }
};


const provisionalYearEvidence = {
  "1": {
    "integrity": {
      "signature": [
        "Food tasting — crops grown in Kenya",
        "Open Afternoon",
        "Kentish Town City Farm"
      ],
      "curriculum": "The Integrity project asks why it is important to know where our food comes from. Relevant learning includes Geography maps of a farm, food technology, Science and PSHE: Being Me in My World.",
      "culture": "Daily classroom routines, supported reflection and responsibility for simple actions give children repeated opportunities to practise making positive choices.",
      "why": "Year 1 children begin to connect everyday choices with responsibility, honesty and the impact their actions have on their learning community."
    },
    "respect": {
      "signature": [
        "Heritage map and ‘Guess Who?’ class game",
        "KS1 Performance",
        "St Pancras Church"
      ],
      "curriculum": "The Respect project explores what makes every person and family unique. RE introduces belonging across Islam, Christianity, Sikhism, Hinduism and Judaism; PSHE includes Celebrating Difference; BSL develops communication and response.",
      "culture": "Listening, sharing resources, polite language and treating others well are practised throughout class discussion, partner work and shared routines.",
      "why": "Respect begins with recognising that other people have their own identities, experiences and voices, and that everyone deserves to belong."
    },
    "endurance": {
      "signature": [
        "Inventing and junk-modelling playground equipment",
        "Whole School Exhibition",
        "Zoo Trip"
      ],
      "curriculum": "The Endurance project asks how inventors keep going when solving problems. History studies the Wright Brothers and DT includes designing and making a model plane with a spinning propeller.",
      "culture": "Children are encouraged to keep trying, use help appropriately and complete increasingly independent classroom routines and short tasks.",
      "why": "Early experiences of challenge help children learn that success often comes through repeated attempts, support and persistence."
    },
    "kindness": {
      "signature": [
        "Nature Scavenger Hunt with iPads",
        "Whole School Exhibition"
      ],
      "curriculum": "The Kindness project asks how we can care for the world around us. Science includes seasonal change and plants; Art explores nature; PSHE includes Relationships; RE considers the importance of community, friends and family.",
      "culture": "Play, learning partners and shared classroom responsibilities give children everyday opportunities to help, take turns and notice when someone needs care.",
      "why": "Kindness develops when children learn to notice the needs of people and the world around them and respond with care."
    },
    "courage": {
      "signature": [
        "Representing a special place through Art",
        "Whole School Exhibition",
        "BBC Ten Pieces — ‘No Place Like’"
      ],
      "curriculum": "The Courage project asks how people show courage. History includes the Great Fire of London; Music, Art and class learning provide opportunities to express ideas and share work.",
      "culture": "Class discussion, answering questions, trying unfamiliar learning and sharing work with others provide frequent low-stakes opportunities to build confidence.",
      "why": "Courage in Year 1 is about joining in, trying something new and discovering that confidence grows through supported participation."
    },
    "aspiration": {
      "signature": [
        "Local Area Walk Treasure Hunt",
        "Open Afternoon",
        "Hampstead Heath"
      ],
      "curriculum": "The Aspiration project asks how we can make our local area an even better place. Geography explores the UK and local area; Art includes drawing inspired by King’s Cross Estate; PSHE includes Dreams & Goals.",
      "culture": "Children are encouraged to notice what interests them, talk about what they enjoy and approach new opportunities with curiosity.",
      "why": "Aspiration starts with curiosity: discovering interests, recognising possibilities and beginning to imagine what children might contribute in the future."
    }
  },
  "2": {
    "integrity": {
      "signature": [
        "Special-item show and tell",
        "Identity self-portrait",
        "Open Afternoon",
        "Canal workshop"
      ],
      "curriculum": "The Integrity project asks how our experiences shape who we become. History explores Camden’s people and events; PSHE includes Being Me in My World; Art includes sculptures inspired by King’s Cross Estate.",
      "culture": "Reflection, taking responsibility and resolving everyday problems fairly are practised through classroom routines, learning and play.",
      "why": "Children begin to understand that integrity involves owning their actions and recognising how choices shape both themselves and others."
    },
    "respect": {
      "signature": [
        "Tasting food from India",
        "KS1 Performance",
        "Indian Food Workshop"
      ],
      "curriculum": "The Respect project asks how food connects people and culture. Geography compares London and India; RE explores food and faith; Music includes traditional instruments and improvisation from India; PSHE includes Celebrating Difference.",
      "culture": "Collaborative learning and discussion give children repeated opportunities to listen, include others and respond respectfully.",
      "why": "Respect becomes deeper when children learn that people may have different experiences, cultures and beliefs while still sharing a community."
    },
    "endurance": {
      "signature": [
        "Victorian Day",
        "Whole School Exhibition",
        "Tower Bridge"
      ],
      "curriculum": "The Endurance project asks how determination changed Victorian Britain. History studies the Victorians and DT involves designing and making a Victorian toy with STEAM links.",
      "culture": "Longer activities, growing independence and supported recovery from setbacks help children build stamina and self-management.",
      "why": "Endurance grows when children experience challenge, recover from difficulty and see that sustained attention can lead to worthwhile outcomes."
    },
    "kindness": {
      "signature": [
        "Story Tree arts and crafts",
        "Whole School Exhibition",
        "London Aquarium"
      ],
      "curriculum": "The Kindness project asks how learning about other cultures can help us show kindness. Art explores work inspired by African, American and Indian cultures; RE compares religious festivals; PSHE includes Relationships.",
      "culture": "Games, group work and daily relationships give children opportunities to include others, offer help and use positive language.",
      "why": "Learning about difference can help children move from simply being friendly to actively including and supporting other people."
    },
    "courage": {
      "signature": [
        "Stop-motion dinosaur video",
        "Whole School Exhibition",
        "Spitalfields City Farm"
      ],
      "curriculum": "The Courage project asks how exploring our world helps us grow. Geography studies continents, oceans and physical features; Computing includes photography and coding; presentations create authentic opportunities to speak and share.",
      "culture": "Children are increasingly expected to share ideas, attempt unfamiliar tasks and see mistakes as part of learning.",
      "why": "Courage develops when children are willing to explore, participate and learn from attempts that do not work first time."
    },
    "aspiration": {
      "signature": [
        "Exploring how King’s Cross Estate has changed",
        "Open Afternoon",
        "Kew Gardens"
      ],
      "curriculum": "The Aspiration project asks how learning from the past can help shape the future. History includes Medicine Through Time; Science includes Plants; PSHE includes Dreams & Goals.",
      "culture": "Children reflect on strengths, interests and experiences and are encouraged to approach enrichment with enthusiasm.",
      "why": "Recognising strengths and connecting past learning with future possibility helps children begin to see themselves as active learners with growing ambitions."
    }
  },
  "4": {
    "integrity": {
      "signature": [
        "Nature Day — London and Essex",
        "Open Afternoon"
      ],
      "curriculum": "The Integrity project asks why it is our responsibility to care for the natural world. Science and Humanities explore living things, habitats and the wider environment; PSHE includes Being Me in My World.",
      "culture": "Children take increasing responsibility for choices, collaboration, organisation and how their actions affect shared learning and environments.",
      "why": "Integrity in Year 4 increasingly means applying values without constant adult direction and recognising responsibility beyond oneself."
    },
    "respect": {
      "signature": [
        "Kew Gardens & Barbican Conservatory Rainforest Experience",
        "KS1 Performance"
      ],
      "curriculum": "The Respect project asks why we should protect the world’s rainforests. Geography studies South America and the Amazon Rainforest; DT creates a 3D rainforest model; Music includes rainforest body and tuned percussion.",
      "culture": "Discussion, debate and collaborative learning ask children to value other contributions and communicate respectfully even when views differ.",
      "why": "Respect grows from listening to others and recognising that people, cultures and environments have value beyond our immediate experience."
    },
    "endurance": {
      "signature": [
        "Exploring Camden & Immigration",
        "Whole School Exhibition"
      ],
      "curriculum": "The Endurance project asks how people have overcome challenges to build new lives. Geography studies Immigration & Settlement; DT explores electrical engineers who immigrated; writing includes Ahmet’s journey.",
      "culture": "Children increasingly manage frustration, organise themselves and sustain effort across longer and more demanding tasks.",
      "why": "Studying how people overcome challenge helps children connect perseverance in learning with resilience in wider life."
    },
    "kindness": {
      "signature": [
        "Ancient Greek Day",
        "Whole School Exhibition"
      ],
      "curriculum": "The Kindness project asks what Ancient Greece can teach us about living well together. History studies Ancient Greece; RE explores the importance of peace; PSHE includes Relationships.",
      "culture": "Children are expected to resolve friendship difficulties respectfully, encourage peers and contribute positively to their classroom community.",
      "why": "Kindness becomes increasingly intentional when children choose actions that strengthen relationships and the wider group."
    },
    "courage": {
      "signature": [
        "Romans Day",
        "Whole School Exhibition",
        "LAMDA Speaking in Public Entry Level exam"
      ],
      "curriculum": "The Courage project explores how the Romans changed Britain. History studies the Romans; English includes debate on Roman invention; Art creates Roman mosaics; Music adapts Roman-themed motifs.",
      "culture": "Children are encouraged to express opinions, volunteer for responsibility and use their voice constructively in collaborative work.",
      "why": "Courage at this stage includes speaking with purpose, taking responsibility and staying positive when learning or leadership feels challenging."
    },
    "aspiration": {
      "signature": [
        "Food Discovery",
        "Open Afternoon",
        "Djembe Drums"
      ],
      "curriculum": "The Aspiration project asks how food choices can change the world. Geography explores Food & World Trade and Globalisation; DT considers global food choices; Year 4 Music includes Djembe Drums.",
      "culture": "Children are supported to recognise achievements, sustain interests and begin talking about talents, opportunities and aspirations.",
      "why": "Aspiration grows when children see that their interests and choices can connect to a much wider world of opportunity."
    }
  },
  "5": {
    "integrity": {
      "signature": [
        "Volcano Day",
        "Open Afternoon"
      ],
      "curriculum": "The Integrity project is built around Volcanoes and Earthquakes. Geography studies North America and natural hazards; Art uses stop-motion animation; Science investigates changes and properties of materials.",
      "culture": "Increasing independence requires children to take ownership of mistakes, responsibilities and the choices they make when learning becomes demanding.",
      "why": "Integrity in upper KS2 involves self-discipline and taking responsibility even when situations are complex or challenging."
    },
    "respect": {
      "signature": [
        "Anglo-Saxon Day",
        "KS1 Performance"
      ],
      "curriculum": "The Respect project studies the Anglo-Saxons and their impact. History, food technology through an Anglo-Saxon feast and wider discussion of culture provide opportunities to consider different lives and perspectives.",
      "culture": "Children work with a wider range of peers and are expected to listen maturely, include others and represent KCA respectfully.",
      "why": "Respect at this stage means moving beyond politeness towards mature collaboration, inclusion and reflection on impact."
    },
    "endurance": {
      "signature": [
        "Round-the-world biomes discovery",
        "Whole School Exhibition",
        "Shackleton boat-design challenge"
      ],
      "curriculum": "The Endurance term includes climate zones and biomes, writing about the Endurance discovery and DT work designing a boat for Shackleton and his shipmates.",
      "culture": "Longer projects and responsibilities require children to regulate themselves, sustain effort and balance independence with asking for support.",
      "why": "Endurance is increasingly about managing oneself over time, not simply persisting for a few minutes when something is difficult."
    },
    "kindness": {
      "signature": [
        "Vikings Day",
        "Whole School Exhibition"
      ],
      "curriculum": "The Kindness project sits within a year that includes History of the Vikings, RE exploring leaders and human actions, PSHE Relationships and caring responsibilities, and collaborative creative work.",
      "culture": "Older pupils are increasingly expected to support peers, encourage participation and contribute positively beyond their immediate friendship group.",
      "why": "Kindness develops into contribution: recognising that empathy and encouragement can shape the culture of a whole community."
    },
    "courage": {
      "signature": [
        "Wonder Dome — Space & Earth",
        "Whole School Exhibition",
        "LAMDA Speaking in Public Grade 1 exam"
      ],
      "curriculum": "The Courage project asks how we can look after Earth and Space. Geography studies climate change and sustainability; DT designs and evaluates a spacecraft; Music explores space soundscapes; writing includes a climate speech/news report.",
      "culture": "Children are expected to speak confidently, represent the school, take positive risks and reflect honestly on personal challenge.",
      "why": "Courage in Year 5 means using confidence with purpose—particularly when situations are unfamiliar or when others need encouragement."
    },
    "aspiration": {
      "signature": [
        "Tudor Experience Day",
        "Open Afternoon",
        "Keyboard Unit"
      ],
      "curriculum": "The Aspiration project explores Tudor history. History studies the Tudors; Art develops Tudor portraits; Music includes keyboard, soundscape and blues work; PSHE includes Dreams & Goals.",
      "culture": "Children are encouraged to commit to interests over time, recognise the link between effort and success and support others to achieve.",
      "why": "Aspiration becomes stronger when children sustain commitment and begin to understand that talent develops through deliberate effort."
    }
  },
  "6": {
    "integrity": {
      "signature": [
        "Experience of Injustice",
        "KCA Community Assembly",
        "Camden Citizenship Scheme"
      ],
      "curriculum": "The Integrity project studies the Benin Kingdom. History, a balanced argument about the Benin Bronzes and Art through Printmaking & Activism give children opportunities to consider morality, fairness and responsibility.",
      "culture": "Year 6 pupils are expected to model values, act responsibly with greater independence and understand the effect of their decisions on the wider school community.",
      "why": "Integrity at the end of primary school means applying moral judgement consistently, including when adults are not directing the choice."
    },
    "respect": {
      "signature": [
        "Windrush Generation / Notting Hill Carnival experience",
        "Learning Presentations"
      ],
      "curriculum": "The Respect project explores Caribbean migration to Britain. Geography studies Fairtrade in the Caribbean and Migration; History and writing explore the Windrush journey; Music includes a Caribbean unit; PSHE includes Celebrating Difference.",
      "culture": "As senior pupils, children are expected to listen maturely, challenge disrespect appropriately and help younger pupils feel included.",
      "why": "Respect culminates in active inclusion: not only treating others well, but helping create a community where difference is valued."
    },
    "endurance": {
      "signature": [
        "World War 1 Day",
        "Whole School Exhibition",
        "Residential programme"
      ],
      "curriculum": "The Endurance project studies World War 1. History, WW1 cooking in DT and extended writing provide sustained learning around challenge, sacrifice and resilience.",
      "culture": "Year 6 brings significant responsibilities, transition and challenge, requiring mature emotional regulation, persistence and self-management.",
      "why": "Endurance at this stage is about sustaining responsibility and resilience through significant challenges and periods of change."
    },
    "kindness": {
      "signature": [
        "WW2 Evacuation Day",
        "Whole School Exhibition"
      ],
      "curriculum": "The Kindness/Courage project considers how communities handled the impact of World War 2. History, WW2 shadow puppets, Songs of World War 2 and PSHE relationships/caring responsibilities support reflection on community and compassion.",
      "culture": "Year 6 pupils have an important role in modelling empathy, supporting others and shaping an inclusive environment for younger children.",
      "why": "Kindness reaches beyond individual acts when older pupils recognise that compassion and leadership can influence the culture around them."
    },
    "courage": {
      "signature": [
        "WW2 Evacuation Day",
        "Whole School Exhibition",
        "Final End of Year Performance",
        "Musical performance"
      ],
      "curriculum": "The Courage strand is linked to the WW2 community project. Music includes whole-class instrumental learning and Songs of World War 2; presentation and performance opportunities require children to communicate with confidence.",
      "culture": "Children are expected to advocate appropriately, lead discussion and use their voice for different audiences while modelling confidence to younger pupils.",
      "why": "Courage culminates in purposeful voice: speaking not just for oneself, but to lead, advocate and positively influence others."
    },
    "aspiration": {
      "signature": [
        "Time travel — ‘Who am I in thirty years?’",
        "Learning Presentations / Central Saint Martins Exhibition",
        "Final End of Year Performance",
        "Bright Futures Academy"
      ],
      "curriculum": "The Aspiration project asks how children can prepare for their future. Geography includes a European Study of France; DT creates an upcycled KCA journey cushion for transition; Music includes composing and performing a leavers’ song; PSHE covers Dreams & Goals and Coping with Change.",
      "culture": "Transition work asks children to speak confidently about their strengths, interests and ambitions and to approach future pathways with readiness and curiosity.",
      "why": "By Year 6, aspiration means turning interests and ambitions into purposeful next steps and leaving KCA ready to engage positively with future opportunities."
    }
  }
};

const year2BehaviourEvidence = {
  "respect": [
    {
      "signature": [
        "KS1 Performance",
        "Indian Food Workshop",
        "Collaborative practical learning"
      ],
      "curriculum": "Geography compares London and India, while Music introduces traditional instruments and improvisation linked to India. Working towards shared performances and practical outcomes gives children authentic reasons to cooperate, listen and contribute rather than work alongside one another independently.",
      "culture": "Learning partners, group tasks, PE and shared classroom responsibilities increasingly expect children to negotiate roles, listen to one another and help the group reach a successful outcome.",
      "why": "Cooperation asks children to balance their own ideas with the needs of a group. It prepares them for increasingly complex collaborative learning as they move through school."
    },
    {
      "signature": [
        "PE team activities",
        "KS1 Performance",
        "OPAL play"
      ],
      "curriculum": "PE, Music and practical Art/DT all include moments when children need to wait, share a role and make space for somebody else. These experiences help children understand inclusion through action rather than simply talking about it.",
      "culture": "Games, playtimes, partner work and classroom resources provide frequent opportunities to invite others in, take turns and notice when somebody has been left out.",
      "why": "Taking turns and including others helps children understand that belonging is created by everyday choices. It strengthens fairness, friendships and successful group participation."
    },
    {
      "signature": [
        "Tasting food from India",
        "Indian Food Workshop",
        "Story Tree cultural art"
      ],
      "curriculum": "Geography compares London and India; RE explores sacred books, food and faith, prayer, festivals and beliefs about creation; Art draws on African, American and Indian influences. Together these experiences show children that people may live, celebrate and believe in different ways.",
      "culture": "Class discussion gives children permission to share family experiences, traditions and viewpoints without expecting everyone to have the same story.",
      "why": "Recognising difference without judging it is an important step towards genuine respect. Children begin to understand that their own experience is one among many."
    },
    {
      "signature": [
        "Canal workshop",
        "London Aquarium",
        "Kew Gardens"
      ],
      "curriculum": "Science explores habitats, plants and living things, while Art and DT require children to care for tools and materials. Visits beyond school extend this responsibility to public spaces and environments shared with other people.",
      "culture": "Children are expected to leave classrooms, play spaces and resources ready for the next person, developing the idea that shared spaces belong to everyone.",
      "why": "Caring for shared spaces develops responsibility beyond personal belongings. It teaches children that respect can be shown through how they treat places, resources and environments."
    },
    {
      "signature": [
        "Trips and workshops across Year 2",
        "Open Afternoon",
        "KS1 Performance"
      ],
      "curriculum": "BSL develops careful communication with different people, while English, RE and PSHE give children language for respectful discussion. Visits and performances allow them to practise these habits with adults and children beyond their immediate class.",
      "culture": "Greeting adults, responding to instructions, speaking with peers and representing KCA around the school all reinforce the expectation that respect remains important in every setting.",
      "why": "Responding respectfully helps children build trust with both peers and adults. It also prepares them to adapt their communication appropriately as their world becomes wider."
    }
  ],
  "integrity": [
    {
      "signature": [
        "Special-item show and tell",
        "Identity self-portrait",
        "Open Afternoon"
      ],
      "curriculum": "The Year 2 identity work asks children to think about experiences that shape who they are. PSHE: Being Me in My World provides structured opportunities to reflect on choices, behaviour and how they contribute to a community.",
      "culture": "After difficulties, adults support children to revisit what happened, identify their part in it and consider what they could do differently next time.",
      "why": "Reflection turns behaviour into learning. With support, children begin moving from simply knowing a rule towards understanding their own choices and patterns."
    },
    {
      "signature": [
        "Classroom responsibilities",
        "Trips beyond school",
        "Shared project outcomes"
      ],
      "curriculum": "Art, DT and Computing require children to manage equipment and complete their part of a task. Practical learning makes the consequences of taking—or avoiding—responsibility easy to see.",
      "culture": "Children increasingly take ownership of belongings, routines, learning tasks and small mistakes instead of expecting an adult to resolve everything for them.",
      "why": "Taking responsibility helps children develop agency. They learn that they can influence what happens next by owning their actions and making a constructive response."
    },
    {
      "signature": [
        "Show and tell",
        "Collaborative learning",
        "OPAL play"
      ],
      "curriculum": "English stories and PSHE discussions explore trust, truth and the consequences of choices. These provide safe contexts for discussing honesty before children need to apply it in real situations.",
      "culture": "Adults respond calmly when mistakes or disagreements happen, creating conditions in which children can be honest about their part without honesty becoming something to fear.",
      "why": "Honesty builds trust. Acting truthfully during both learning and play helps children understand that integrity matters in ordinary moments, not only when an adult is checking."
    },
    {
      "signature": [
        "KS1 Performance",
        "Whole School Exhibition",
        "Collaborative DT"
      ],
      "curriculum": "Group performance, Art and design work make interdependence visible: one child’s preparation, behaviour or use of resources can affect everyone else’s experience and outcome.",
      "culture": "Teachers help children notice the ripple effect of choices during partner work, transitions and play—both when their actions help a group and when they make things harder for others.",
      "why": "Understanding impact develops moral awareness. Children begin to move from ‘What happens to me?’ towards ‘What does my choice mean for other people?’"
    },
    {
      "signature": [
        "OPAL play",
        "Collaborative classroom challenges",
        "PSHE discussion"
      ],
      "curriculum": "PSHE and RE provide language for fairness, forgiveness and relationships. Practical group work gives children real problems to solve where compromise is often more useful than simply insisting on their first choice.",
      "culture": "Children are supported to listen to both sides, explain what they need and find workable solutions during small disagreements rather than relying immediately on adult judgement.",
      "why": "Resolving problems fairly builds confidence in managing conflict. Children learn that fairness often involves listening, compromise and repairing relationships."
    }
  ],
  "endurance": [
    {
      "signature": [
        "Victorian Day",
        "Victorian toy design — STEAM Ambassador",
        "Whole School Exhibition"
      ],
      "curriculum": "History explores determination in Victorian Britain, while DT asks children to design and make a Victorian toy. Maths, writing and practical subjects all provide tasks where improvement depends on staying with a problem rather than seeking an instant answer.",
      "culture": "Teachers notice perseverance, strategy changes and useful help-seeking, reinforcing that successful learning often includes moments of difficulty.",
      "why": "Perseverance helps children discover that effort can change an outcome. This develops confidence to approach learning that initially feels beyond them."
    },
    {
      "signature": [
        "Swimming",
        "Gymnastics",
        "OAA and team PE"
      ],
      "curriculum": "PSHE: Healthy Me supports children to recognise feelings and use simple strategies, while PE and swimming provide real contexts for managing excitement, frustration, nerves and physical challenge.",
      "culture": "Children practise pausing, using familiar calming strategies, talking to an adult and returning to an activity once they are ready.",
      "why": "Managing emotions helps children stay engaged with both learning and relationships. Simple strategies in Year 2 create the foundations for more independent self-regulation later."
    },
    {
      "signature": [
        "Victorian toy design",
        "Coding and on-screen robots",
        "PE skill development"
      ],
      "curriculum": "Design, coding and physical learning all involve attempts that do not work first time. Children are encouraged to identify what went wrong, use feedback and make another attempt.",
      "culture": "Adults help children see setbacks as temporary. Reassurance is paired with an expectation that, when ready, they return to the task rather than abandon it.",
      "why": "Recovering from a setback is different from never finding something difficult. Children develop resilience when they learn that disappointment can be followed by another constructive step."
    },
    {
      "signature": [
        "Whole School Exhibition preparation",
        "Extended reading groups",
        "Art and DT projects"
      ],
      "curriculum": "Little Wandle reading groups build fluency, comprehension and prosody through sustained attention. Longer creative and practical tasks require children to remain engaged across several stages rather than complete a quick activity.",
      "culture": "Children are increasingly expected to stay with learning for longer, use reminders and routines, and return their attention after minor distractions.",
      "why": "Sustained attention enables deeper learning. Building this capacity gradually helps children cope confidently with the longer and more complex tasks of Key Stage 2."
    },
    {
      "signature": [
        "Photography and coding",
        "Independent project tasks",
        "Open Afternoon preparation"
      ],
      "curriculum": "Computing, writing, Art and Maths include familiar processes children can increasingly manage without step-by-step adult direction. Teachers deliberately release responsibility as competence grows.",
      "culture": "Children organise equipment, begin familiar tasks, use classroom prompts and check what they need before asking an adult to direct every step.",
      "why": "Beginning to work independently builds self-belief and learning efficiency. Children start to see themselves as people who can make decisions and move their own learning forward."
    }
  ],
  "kindness": [
    {
      "signature": [
        "OPAL play",
        "Story Tree cultural activities",
        "PE games"
      ],
      "curriculum": "PSHE Relationships and collaborative Art, Music and PE require children to work with different classmates. Story Tree work broadens their understanding of different cultures while shared tasks create practical opportunities to include others.",
      "culture": "Children are encouraged to notice who is already part of a game, who is waiting to join and how they can make play welcoming rather than closed.",
      "why": "Inclusion is an active form of kindness. Children learn that belonging is strengthened when they notice other people and deliberately make space for them."
    },
    {
      "signature": [
        "Collaborative Art and DT",
        "Whole School Exhibition",
        "Shared reading"
      ],
      "curriculum": "Practical projects make it natural for children to explain an idea, find a resource or offer encouragement when somebody is stuck. Teachers distinguish helpful support from simply doing the task for someone.",
      "culture": "Children are encouraged to notice when a peer needs appropriate help during learning, routines or play and to offer support before waiting for an adult to intervene.",
      "why": "Offering help develops empathy and contribution. Children begin to recognise that they have skills and attention that can make somebody else’s experience easier."
    },
    {
      "signature": [
        "PSHE Relationships",
        "RE: forgiveness",
        "Collaborative performances"
      ],
      "curriculum": "PSHE explores relationships, while RE considers forgiveness across different religions. Stories and group outcomes give children examples of how one person’s words or choices can affect feelings and relationships.",
      "culture": "Restorative conversations help children connect actions with impact rather than focusing only on whether they have broken a rule.",
      "why": "Understanding impact is central to empathy. It helps children make more thoughtful choices because they can increasingly anticipate how another person may experience them."
    },
    {
      "signature": [
        "KS1 Performance",
        "West African call-and-response Music",
        "Team PE"
      ],
      "curriculum": "Music, performance and PE depend on children responding to one another, keeping shared rhythms or rules and contributing positively to a collective outcome.",
      "culture": "Friendly greetings, cooperative talk, encouragement and flexible groupings make positive social behaviour a daily expectation across the school day.",
      "why": "Friendly cooperation helps children build relationships beyond close friendships. It gives them the social confidence to work successfully with many different people."
    },
    {
      "signature": [
        "Open Afternoon",
        "Learning presentations",
        "Shared creative work"
      ],
      "curriculum": "English, BSL and performance work develop children’s ability to communicate encouragement, appreciation and constructive responses in different forms.",
      "culture": "Adults model language that builds other people up: noticing effort, thanking others, celebrating success and disagreeing without putting someone down.",
      "why": "Positive language shapes how a community feels. Children learn that their words can increase another person’s confidence, sense of belonging and willingness to participate."
    }
  ],
  "courage": [
    {
      "signature": [
        "Special-item show and tell",
        "Open Afternoon",
        "Whole School Exhibition"
      ],
      "curriculum": "English, PSHE and practical subjects regularly ask children to explain choices, predictions and ideas. Teachers create structured opportunities for all children to contribute, not only those who volunteer most quickly.",
      "culture": "Partner rehearsal, small-group discussion and whole-class sharing provide a gradual pathway for children to become more comfortable putting their thinking into words.",
      "why": "Sharing ideas helps children discover that their thinking is worth contributing. It builds both communication and confidence to participate in increasingly demanding discussion."
    },
    {
      "signature": [
        "Stop-motion dinosaur video",
        "Spitalfields City Farm",
        "Indian Food Workshop"
      ],
      "curriculum": "Computing, visits and practical learning introduce tools, settings and processes children may not have encountered before. Clear modelling and encouragement help them approach unfamiliarity as something to explore.",
      "culture": "Children are praised for willingness to try, particularly when an activity feels new or uncertain, rather than only for polished outcomes.",
      "why": "Trying unfamiliar tasks expands children’s sense of what they can do. Confidence grows when they experience uncertainty and discover that they can manage it."
    },
    {
      "signature": [
        "KS1 Performance",
        "Open Afternoon",
        "BSL communication"
      ],
      "curriculum": "English develops spoken language; BSL requires deliberate expressive communication; Music and performance ask children to project and respond as part of a group.",
      "culture": "Children practise speaking first with familiar partners and groups before contributing to larger class discussions, developing volume, clarity and confidence over time.",
      "why": "Clear speech allows children to make their ideas accessible to other people. It supports participation, advocacy and the confidence to be heard."
    },
    {
      "signature": [
        "KS1 Performance",
        "Whole School Exhibition",
        "Open Afternoon"
      ],
      "curriculum": "Music, English and creative project outcomes provide regular reasons to perform, explain and present. Preparation is built into learning so public sharing feels purposeful rather than separate from the curriculum.",
      "culture": "Children experience a progression from sharing with a partner to a group, class and wider audience, learning that nerves can coexist with successful participation.",
      "why": "Performance and presentation build confidence through experience. Children learn that they can prepare, contribute and communicate even when being watched feels challenging."
    },
    {
      "signature": [
        "Victorian toy design",
        "Coding",
        "Art and printmaking"
      ],
      "curriculum": "DT and Computing make iteration explicit: a design or sequence is tested, errors are noticed and changes are made. Creative work similarly encourages refinement rather than expecting a perfect first attempt.",
      "culture": "Adults talk openly about mistakes, model corrections and celebrate useful changes in strategy so that error becomes part of learning rather than a source of embarrassment.",
      "why": "Understanding the value of mistakes protects children from avoiding challenge. It encourages experimentation, reflection and a stronger belief that ability can improve."
    }
  ],
  "aspiration": [
    {
      "signature": [
        "Indian Food Workshop",
        "Spitalfields City Farm",
        "Kew Gardens"
      ],
      "curriculum": "Year 2 introduces children to contrasting places, cultures, history, science, music and practical making. New experiences are deliberately varied so curiosity has many different opportunities to be sparked.",
      "culture": "Adults notice enthusiasm and encourage children to ask follow-up questions, volunteer and approach unfamiliar opportunities positively.",
      "why": "Enthusiasm opens the door to deeper engagement. Children who expect new opportunities to be interesting become more willing to explore and discover what matters to them."
    },
    {
      "signature": [
        "Looking back on Year 2",
        "Open Afternoon",
        "Creative and performance experiences"
      ],
      "curriculum": "PSHE Dreams & Goals and reflection across creative subjects encourage children to talk about what they enjoyed, what challenged them and which experiences they would like to pursue again.",
      "culture": "Teachers ask children to explain preferences rather than simply name them, helping them become more aware of what different experiences bring out in them.",
      "why": "Reflecting on enjoyment helps children understand themselves as learners. It turns a series of experiences into growing awareness of interests and preferences."
    },
    {
      "signature": [
        "Trips across Year 2",
        "KS1 Performance",
        "Whole School Exhibition"
      ],
      "curriculum": "The curriculum offers visits, workshops, performance, creative work and practical projects across the year. Children are expected to take an active role rather than remain passive observers.",
      "culture": "Staff encourage children to join in positively, follow expectations and make the most of opportunities even when an activity is not immediately familiar.",
      "why": "Positive participation helps children gain more from enrichment and discover capabilities they might otherwise never encounter."
    },
    {
      "signature": [
        "Contrasting London and India",
        "Continents and Oceans",
        "Kew Gardens"
      ],
      "curriculum": "Geography broadens children’s view from the local area to India, continents, oceans and physical features. RE, Music and Art add cultural and religious perspectives, while Science opens up the natural world.",
      "culture": "Questions about places, people and ideas are welcomed, and children are encouraged to connect new learning with things they already know or have experienced.",
      "why": "Curiosity about the wider world develops openness and ambition. It helps children see that there is far more to explore than what is immediately familiar."
    },
    {
      "signature": [
        "Open Afternoon",
        "Music across different traditions",
        "Art, DT and PE"
      ],
      "curriculum": "Year 2 gives children multiple ways to succeed: creative making, performance, physical activity, writing, problem solving and enquiry. PSHE Dreams & Goals supports them to notice emerging strengths.",
      "culture": "Adults name specific improvements and strengths rather than offering only general praise, helping children build a more accurate and confident picture of what they can do.",
      "why": "Recognising strengths supports self-belief without suggesting children are finished developing. It helps them identify areas they may want to invest effort in next."
    }
  ]
};

const year1BehaviourEvidence = {
  "respect": [
    {
      "signature": [
        "Heritage map and ‘Guess Who?’ class game",
        "KS1 Performance",
        "St Pancras Church"
      ],
      "curriculum": "English and shared reading ask children to listen carefully before responding. RE introduces different beliefs and traditions, while BSL makes careful attention to another person’s communication especially visible.",
      "culture": "Carpet sessions, partner talk, class discussions and everyday routines give children repeated practice in listening without interrupting and showing that another person’s contribution matters.",
      "why": "Listening is one of the first ways children show respect. It strengthens relationships, supports learning and helps children understand that every voice has value."
    },
    {
      "signature": [
        "Junk-modelling playground challenge",
        "Practical Art and DT",
        "Outdoor learning"
      ],
      "curriculum": "Art, DT, Science and Maths regularly use shared tools and materials. These practical lessons give children real reasons to negotiate, wait, share and make sure everyone can take part.",
      "culture": "Shared classroom resources, OPAL play, learning partners and tidy-up routines create everyday moments where children learn that fairness sometimes means taking turns rather than getting what they want immediately.",
      "why": "Sharing fairly helps children move beyond their own immediate needs. It develops cooperation and an early understanding that everyone deserves the opportunity to participate."
    },
    {
      "signature": [
        "Open Afternoon",
        "St Pancras Church",
        "Local community visits"
      ],
      "curriculum": "English develops spoken language, while PSHE and RE explore relationships, belonging and respectful interaction. Children learn that how they say something can matter just as much as what they say.",
      "culture": "Greeting adults, speaking with classmates, asking for help, thanking others and talking to visitors all provide authentic opportunities to practise respectful language.",
      "why": "Polite, respectful language helps children build trust and positive relationships. It gives them the communication habits they need to participate confidently in a community."
    },
    {
      "signature": [
        "Trips beyond the classroom",
        "Whole-school events"
      ],
      "curriculum": "Every subject has routines that make learning possible: listening to instructions in PE, caring for materials in Art, working safely in Science and organising equipment in the classroom.",
      "culture": "Visual timetables, transitions, lining up, independent organisation and the school’s consistent behaviour expectations help children understand what being ready for learning looks like.",
      "why": "Routines create security and predictability. Following them with growing independence helps children develop self-regulation and responsibility for the learning environment."
    },
    {
      "signature": [
        "OPAL play",
        "Collaborative learning",
        "Shared celebrations and exhibitions"
      ],
      "curriculum": "Stories, PSHE, RE and collaborative practical work encourage children to notice how characters and classmates feel, include others and make choices that support the group.",
      "culture": "Playtimes, lunchtimes, group work and classroom interactions are where kindness and respect are practised most often. Adults model inclusion and support children to repair small disagreements.",
      "why": "Treating others kindly helps children build friendships and a genuine sense of belonging. It also helps create a classroom where children feel safe enough to learn and contribute."
    }
  ],
  "integrity": [
    {
      "signature": [
        "Food tasting — crops grown in Kenya",
        "Open Afternoon",
        "Kentish Town City Farm"
      ],
      "curriculum": "Across practical learning, children are taught what safe and successful participation looks like. PSHE: Being Me in My World helps them connect classroom expectations with the way their choices affect others.",
      "culture": "From organising belongings to listening, moving around school and caring for resources, children practise making the small choices that help a classroom work well.",
      "why": "Following expectations helps children become dependable, increasingly independent learners who understand that their choices contribute to everyone’s success."
    },
    {
      "signature": [
        "Storytelling and character discussion",
        "PSHE reflection"
      ],
      "curriculum": "Stories across English give children opportunities to explore honesty, trust and what happens when characters hide or admit mistakes. PSHE provides space to reflect on real choices in an age-appropriate way.",
      "culture": "When incidents happen, adults use calm restorative conversations that help children explain what happened truthfully and understand that honesty is the starting point for solving a problem.",
      "why": "Telling the truth builds trust. Children also learn that making a mistake is manageable when they can be honest about it and accept support to put things right."
    },
    {
      "signature": [
        "Kentish Town City Farm",
        "Classroom responsibilities"
      ],
      "curriculum": "Practical subjects such as Art, DT and Science require children to look after equipment, complete their part of a task and leave resources ready for others.",
      "culture": "Looking after reading books, returning equipment, helping with classroom jobs and taking care of shared spaces give children manageable responsibilities that grow with their confidence.",
      "why": "Taking responsibility helps children understand that their actions matter. Small acts of ownership are the foundation for the greater independence expected later in school."
    },
    {
      "signature": [
        "Food technology",
        "Outdoor learning and visits"
      ],
      "curriculum": "RE and PSHE encourage children to think about kindness, safety and fairness. Practical activities give them real situations in which choices affect both themselves and other people.",
      "culture": "Adults regularly prompt children to pause and consider whether a choice is safe, fair and kind, particularly during play, group work and moments of disagreement.",
      "why": "Recognising a positive choice comes before making it independently. Children begin to develop moral judgement by considering needs beyond their own immediate wants."
    },
    {
      "signature": [
        "Collaborative projects",
        "Open Afternoon",
        "Learning beyond the classroom"
      ],
      "curriculum": "Teachers notice and discuss the choices that lead to successful learning: listening to feedback, cooperating, having another attempt and taking care over a shared outcome.",
      "culture": "Positive choices are reinforced through daily conversations, reflection and celebration. Children learn that integrity is built from repeated everyday decisions rather than one-off acts.",
      "why": "When children practise making positive choices, those choices gradually become habits. This is the beginning of acting responsibly because it is the right thing to do."
    }
  ],
  "endurance": [
    {
      "signature": [
        "Junk-modelling playground challenge",
        "Wright Brothers model-plane work",
        "Practical investigations"
      ],
      "curriculum": "DT makes perseverance visible: children design, make, test and improve. Maths, writing and Science also include moments where an answer or idea needs revisiting rather than abandoning.",
      "culture": "Adults praise effort, strategy and improvement, encouraging children to have another go, try a different approach or ask for support rather than deciding they cannot do something.",
      "why": "Children who learn to keep trying begin to see challenge as a normal part of learning. That belief supports confidence when tasks become more demanding."
    },
    {
      "signature": [
        "PE and swimming",
        "PSHE: Healthy Me"
      ],
      "curriculum": "PSHE helps children name feelings and begin using simple strategies to manage them. PE and swimming give practical opportunities to cope with excitement, frustration, nerves and repeated attempts.",
      "culture": "Adults help children notice when emotions are becoming difficult and use familiar strategies such as pausing, seeking help, returning to a task or talking through what has happened.",
      "why": "Early self-regulation helps children stay connected to learning and relationships even when feelings are strong. Support now creates the foundations for greater independence later."
    },
    {
      "signature": [
        "Open Afternoon preparation",
        "Independent classroom routines"
      ],
      "curriculum": "Across the day, children increasingly manage familiar routines without waiting for an adult prompt, from preparing equipment to moving between stages of practical work.",
      "culture": "Visual routines, consistent expectations and repeated practice help children organise belongings, get ready for lessons and complete familiar transitions increasingly independently.",
      "why": "Independence grows through small, repeated successes. Following routines without constant prompting helps children see themselves as capable and responsible learners."
    },
    {
      "signature": [
        "Creative projects completed over several lessons",
        "Work prepared for exhibition or Open Afternoon"
      ],
      "curriculum": "Writing, Art and DT teach children that a worthwhile outcome often takes several steps. Teachers break learning into achievable chunks while still expecting children to see a short task through.",
      "culture": "Children are encouraged to finish a manageable piece of learning, return resources and recognise the satisfaction of completing what they started.",
      "why": "Completing short tasks develops attention, responsibility and confidence. It prepares children for the longer periods of sustained learning they will meet as they move through school."
    },
    {
      "signature": [
        "Collaborative DT challenges",
        "Outdoor learning"
      ],
      "curriculum": "Teachers model questioning and problem solving so children learn that successful learners use support strategically. Practical learning creates natural moments when help is genuinely useful.",
      "culture": "Children are taught who they can ask, how to ask clearly and that seeking support is different from giving up. Learning partners and trusted adults make help accessible.",
      "why": "Knowing when to ask for help is an important part of resilience. It allows children to stay with a challenge instead of becoming overwhelmed or withdrawing from it."
    }
  ],
  "kindness": [
    {
      "signature": [
        "Open Afternoon",
        "Shared performances",
        "Collaborative Music and Art"
      ],
      "curriculum": "English, PSHE, Music and collaborative practical work give children repeated opportunities to practise encouraging, thanking and responding positively to other people.",
      "culture": "Greetings, play, group work, lunchtime and classroom conversations make kind words and actions part of everyday expectations rather than something reserved for special occasions.",
      "why": "Kindness becomes part of character through repetition. Choosing kind words and actions helps children create the safe, welcoming relationships that support learning."
    },
    {
      "signature": [
        "Collaborative construction and design",
        "Outdoor learning",
        "Shared reading"
      ],
      "curriculum": "Practical learning encourages children to solve problems together. They begin to recognise that explaining an idea, finding a resource or offering encouragement can help someone else succeed.",
      "culture": "Children are encouraged to notice when classmates need support during play and learning and to help appropriately without taking over.",
      "why": "Helping others turns kindness into action. Children begin to see themselves as contributors who can make another person’s experience better."
    },
    {
      "signature": [
        "Stories exploring friendship and feelings",
        "PSHE Relationships"
      ],
      "curriculum": "English, RE and PSHE help children identify feelings and consider different perspectives. Characters and real-life scenarios give them safe ways to discuss when somebody might need reassurance or comfort.",
      "culture": "Adults model noticing changes in other people and responding sensitively. Children learn that sometimes kindness means checking in, sitting with someone or finding an adult to help.",
      "why": "Noticing another person’s need is an early form of empathy. It helps children move from responding only when asked to becoming more thoughtful members of the community."
    },
    {
      "signature": [
        "Practical Art and DT",
        "PE team activities",
        "OPAL play"
      ],
      "curriculum": "Shared materials and team activities create genuine reasons to take turns. Children experience that successful group work depends on making space for other people to participate.",
      "culture": "Games, equipment, classroom resources and play provide frequent opportunities to negotiate turns and share fairly without adult control of every decision.",
      "why": "Taking turns helps children manage impulse, consider other people and participate successfully in groups. It is a practical building block for fairness and cooperation."
    },
    {
      "signature": [
        "Nature Scavenger Hunt",
        "Kentish Town City Farm",
        "Learning about plants and habitats"
      ],
      "curriculum": "Science, Geography and Art extend care beyond immediate friendships. Children learn about living things, habitats and the local environment and consider how their actions can protect what they value.",
      "culture": "Children care for shared spaces, classroom resources, outdoor areas and one another. Adults highlight thoughtful acts that show care without requiring a reward.",
      "why": "Care connects kindness with responsibility. Children begin to understand that they can positively affect people, animals, places and the wider world around them."
    }
  ],
  "courage": [
    {
      "signature": [
        "Whole School Exhibition",
        "KS1 Performance",
        "Open Afternoon"
      ],
      "curriculum": "English, PSHE, Music, BSL and practical learning give children many different ways to contribute. The emphasis is on becoming willing to join in, not on always being the loudest voice.",
      "culture": "Carpet sessions, partner work, singing, games and class routines offer low-pressure opportunities to participate so confidence can grow gradually.",
      "why": "Joining in helps children see themselves as active members of the class. Participation strengthens belonging and opens up more opportunities to learn from others."
    },
    {
      "signature": [
        "Zoo Trip",
        "Local Area Walk Treasure Hunt",
        "New Music, Dance and BSL experiences"
      ],
      "curriculum": "Year 1 deliberately introduces unfamiliar materials, ideas and ways of working through DT, Science, Music, Geography and History. Adults model curiosity and make new experiences feel achievable.",
      "culture": "Children are encouraged to have a go before deciding something is too difficult. New routines, partners and activities are introduced with reassurance and clear modelling.",
      "why": "Trying new learning teaches children that uncertainty is manageable. Each successful attempt expands what they believe they are capable of doing."
    },
    {
      "signature": [
        "Open Afternoon",
        "Whole School Exhibition",
        "Heritage map and ‘Guess Who?’ activity"
      ],
      "curriculum": "English develops explaining and describing; PSHE gives children language for ideas and feelings; BSL broadens their understanding of what expressive communication can look like.",
      "culture": "Children regularly talk with familiar adults, classmates and learning partners about what they are doing, noticing and thinking.",
      "why": "Talking about ideas helps children organise their thinking and recognise that their contribution has value. It is an important early step towards confident communication."
    },
    {
      "signature": [
        "KS1 Performance",
        "Whole School Exhibition",
        "Open Afternoon",
        "Music and dance"
      ],
      "curriculum": "Music, dance, Art and English create natural opportunities to present, perform and explain. Children are prepared carefully so sharing feels like an achievable progression rather than a sudden demand.",
      "culture": "Children often share first with a partner or small group before moving towards a whole class or wider audience. Effort and participation are celebrated alongside polish.",
      "why": "Supported performance helps children develop pride and confidence. They learn that feeling nervous does not have to prevent them from taking part."
    },
    {
      "signature": [
        "DT design challenges",
        "Model-plane work",
        "Swimming and PE"
      ],
      "curriculum": "DT, PE, Maths, writing and practical Science all include tasks that improve through repeated attempts. Teachers make the connection between practice, feedback and progress explicit.",
      "culture": "When something feels hard, children are encouraged to pause, ask for support, change strategy and continue. Small improvements are noticed and named.",
      "why": "Courage is also the decision to continue when learning feels uncomfortable. Children who practise this become more willing to face future challenges rather than avoid them."
    }
  ],
  "aspiration": [
    {
      "signature": [
        "Local Area Walk Treasure Hunt",
        "Hampstead Heath",
        "Open Afternoon"
      ],
      "curriculum": "Year 1 enquiries introduce children to new places, people, stories, materials and natural phenomena. Teachers encourage questions and wonder rather than treating curiosity as something separate from learning.",
      "culture": "Interesting questions, new discoveries and enthusiastic contributions are noticed and celebrated. Children are encouraged to follow up the things that capture their attention.",
      "why": "Curiosity is the starting point for aspiration. Children who enjoy discovering new things are more likely to see learning as something they actively want to pursue."
    },
    {
      "signature": [
        "Trips beyond the classroom",
        "Whole-school exhibitions",
        "Curriculum workshops"
      ],
      "curriculum": "Across the curriculum, children encounter unfamiliar activities and environments—from practical making and performance to History, Geography and Science experiences.",
      "culture": "Adults encourage children to volunteer, join in and try opportunities they may not yet know they will enjoy, without making success the condition for participation.",
      "why": "Taking part broadens children’s sense of possibility. New experiences help them discover interests and strengths they could not identify without first having a go."
    },
    {
      "signature": [
        "Open Afternoon",
        "Creative Art inspired by King’s Cross",
        "Music and performance"
      ],
      "curriculum": "English, Art, Music and PSHE give children different ways to talk about favourite learning, creative choices and things they are proud of.",
      "culture": "Adults ask children what they enjoy and why, celebrate individual interests and make space for children to share enthusiasms with one another.",
      "why": "Talking about enjoyment helps children develop a sense of themselves as learners. Recognising what engages them is an early step towards sustaining interests over time."
    },
    {
      "signature": [
        "Music, dance and BSL",
        "Outdoor learning",
        "Practical curriculum challenges"
      ],
      "curriculum": "Year 1 offers variety deliberately. Children experience creative, physical, linguistic, scientific and practical activities so that preferences emerge from genuine participation rather than assumption.",
      "culture": "Children are supported to approach unfamiliar clubs, activities and classroom experiences with encouragement and to reflect afterwards on what they liked or found challenging.",
      "why": "Trying different activities helps children learn about themselves. It builds adaptability while also giving them a richer basis for deciding what they want to explore further."
    },
    {
      "signature": [
        "Open Afternoon",
        "Whole School Exhibition",
        "Local community exploration"
      ],
      "curriculum": "Reflection across Art, writing, Music, PE and practical learning helps children notice the kinds of tasks, topics and experiences they are drawn towards.",
      "culture": "Teachers talk with children about favourite subjects, books, activities and achievements and encourage them to notice patterns in what excites or motivates them.",
      "why": "Developing interests and preferences strengthens identity. It gives children an early sense that their own curiosity can shape the direction of future learning."
    }
  ]
};

const yearGrowthSection = document.getElementById("yearGrowthSection");
const yearGrowthEyebrow = document.getElementById("yearGrowthEyebrow");
const growthValueButtons = document.querySelectorAll('.year-growth-value[data-growth-value]');
const inlineGrowthMap = document.getElementById("inlineGrowthMap");
const inlineBehaviourAccordion = document.getElementById("inlineBehaviourAccordion");
const inlineGrowthEyebrow = document.getElementById("inlineGrowthEyebrow");
const inlineGrowthHeading = document.getElementById("inlineGrowthHeading");
const inlineGrowthCulture = document.getElementById("inlineGrowthCulture");
const inlineGrowthCharacter = document.getElementById("inlineGrowthCharacter");
const growthCurriculumLink = document.getElementById("growthCurriculumLink");
let activeGrowthValue = null;

function renderInlineGrowthMap(valueKey) {
  const mapsByYear = {
    1: year1GrowthMaps,
    2: year2GrowthMaps,
    3: year3GrowthMaps,
    4: year4GrowthMaps,
    5: year5GrowthMaps,
    6: year6GrowthMaps
  };

  const maps = mapsByYear[activeYear];
  const map = maps?.[valueKey];
  if (!map) return;

  activeGrowthValue = valueKey;
  inlineGrowthEyebrow.textContent = `${map.title} · ${map.strand}`;
  inlineGrowthCharacter.src = map.character;
  inlineGrowthCharacter.alt = map.characterAlt;
  inlineGrowthHeading.textContent = `By the end of Year ${activeYear}...`;

  const isYear3 = activeYear === 3;
  inlineGrowthCulture.textContent = isYear3
    ? `These are the observable behaviours children are developing through ${map.title.toLowerCase()} in Year 3. Open each behaviour to explore how this is developed at KCA.`
    : `These are the observable behaviours children are developing through ${map.title.toLowerCase()} in Year ${activeYear}. Open each behaviour to explore the curriculum starting points already mapped at KCA.`;

  growthCurriculumLink.hidden = false;

  const evidence = provisionalYearEvidence?.[activeYear]?.[valueKey];

  const items = isYear3
    ? map.behaviours
    : map.behaviours.map((statement, index) => {
        const detailedEvidenceByYear = {
          1: year1BehaviourEvidence,
          2: year2BehaviourEvidence
        };

        const detailedEvidence = detailedEvidenceByYear[activeYear]?.[valueKey]?.[index] || null;

        return {
          statement,
          signature: detailedEvidence?.signature || evidence?.signature || [],
          curriculum: detailedEvidence?.curriculum || evidence?.curriculum || "No curriculum link has yet been documented for this behaviour.",
          culture: detailedEvidence?.culture || evidence?.culture || "This is a useful prompt for staff to identify the everyday routines and opportunities that strengthen this behaviour.",
          why: detailedEvidence?.why || evidence?.why || "Staff will refine why this behaviour matters as the Growth Framework develops."
        };
      });

  inlineBehaviourAccordion.innerHTML = items.map(item => `
    <article class="behaviour-item">
      <button class="behaviour-trigger"
              type="button"
              aria-expanded="false">
        <span class="behaviour-check">✓</span>
        <strong>${item.statement}</strong>
        <span class="behaviour-chevron" aria-hidden="true">⌄</span>
      </button>

      <div class="behaviour-content">
        ${item.signature && item.signature.length ? `
        <div class="demonstration-group">
          <p class="demonstration-label">🌟 Signature experiences</p>
          <div class="demonstration-chips">
            ${item.signature.map(experience => `<span class="demonstration-chip">${experience}</span>`).join("")}
          </div>
        </div>` : ""}

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
        const otherTrigger = other.querySelector(".behaviour-trigger");
        if (otherTrigger && otherTrigger.hasAttribute("aria-expanded")) {
          otherTrigger.setAttribute("aria-expanded", "false");
        }
      });

      if (willOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

growthValueButtons.forEach(button => {
  button.addEventListener("click", () => {
    const valueKey = button.dataset.growthValue;
    const openingNewValue = inlineGrowthMap.hidden || activeGrowthValue !== valueKey;

    growthValueButtons.forEach(other => {
      other.setAttribute("aria-expanded", "false");
      other.classList.remove("is-selected");
    });

    if (openingNewValue) {
      renderInlineGrowthMap(valueKey);
      inlineGrowthMap.hidden = false;
      button.setAttribute("aria-expanded", "true");
      button.classList.add("is-selected");

      requestAnimationFrame(() => {
        inlineGrowthMap.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    } else {
      inlineGrowthMap.hidden = true;
      activeGrowthValue = null;
    }
  });
});

growthCurriculumLink.href = "https://kcapd.github.io/KCACurriculum/";
growthCurriculumLink.removeAttribute("aria-disabled");
growthCurriculumLink.classList.remove("is-placeholder");
growthCurriculumLink.removeAttribute("title");


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
