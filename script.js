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

  const isObservableOnlyYear = activeYear !== 3;

  if (isObservableOnlyYear) {
    inlineGrowthHeading.textContent = `By the end of Year ${activeYear}...`;
    inlineGrowthCulture.textContent = `These are the observable behaviours children are developing through ${map.title.toLowerCase()} in Year ${activeYear}.`;

    inlineBehaviourAccordion.innerHTML = map.behaviours.map(statement => `
      <article class="behaviour-item behaviour-statement-only">
        <div class="behaviour-trigger behaviour-trigger-static">
          <span class="behaviour-check">✓</span>
          <strong>${statement}</strong>
        </div>
      </article>
    `).join("");

    growthCurriculumLink.hidden = true;
    return;
  }

  inlineGrowthHeading.textContent = `By the end of Year 3...`;
  inlineGrowthCulture.textContent = `These are the observable behaviours children are developing through ${map.title.toLowerCase()} in Year 3. Open each behaviour to explore how this is developed at KCA.`;
  growthCurriculumLink.hidden = false;

  inlineBehaviourAccordion.innerHTML = map.behaviours.map(item => `
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
