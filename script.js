const years = {
  1: {
    platform:"PLATFORM 1", subtitle:"BEGINNING THE JOURNEY", label:"YEAR 1",
    title:"The journey begins here.",
    lead:"Children begin to recognise their strengths, make positive choices, build relationships and participate confidently in school life.",
    character:"images/connor-courage.png", name:"Connor Courage",
    quote:"Have a go — courage grows every time we try.",
    milestones:[
      ["Make good choices","Follow expectations and recognise choices that are kind, safe and fair."],
      ["Build belonging","Listen, share and use respectful language with others."],
      ["Keep trying","Continue when learning feels difficult and ask for help when needed."],
      ["Find my voice","Join discussions, try new learning and share work with support."]
    ],
    experiences:["Trips","Performances","Enrichment","Class discussions","Yearly reflection"]
  },
  2: {
    platform:"PLATFORM 2", subtitle:"GROWING IN CONFIDENCE", label:"YEAR 2",
    title:"Confidence begins to grow.",
    lead:"Children become more independent, work cooperatively and begin reflecting more thoughtfully on their actions and experiences.",
    character:"images/riley-respect.png", name:"Riley Respect",
    quote:"Different experiences make our community stronger.",
    milestones:[
      ["Take responsibility","Reflect on behaviour and understand how choices affect others."],
      ["Work together","Include others and recognise different experiences and beliefs."],
      ["Recover","Use simple strategies to manage emotions and continue after setbacks."],
      ["Speak clearly","Contribute to groups, presentations and performances."]
    ],
    experiences:["Presentations","Performances","Collaboration","Wider-world learning","Reflection"]
  },
  3: {
    platform:"PLATFORM 3", subtitle:"DISCOVERING MY STRENGTHS", label:"YEAR 3",
    title:"Your voice matters.",
    lead:"Children take greater responsibility, communicate with different audiences and begin considering their future goals and ambitions.",
    character:"images/connor-courage.png", name:"Connor Courage",
    quote:"Be brave enough to share the ideas only you can bring.",
    milestones:[
      ["Act independently","Make positive choices and respond constructively to feedback."],
      ["Show empathy","Support others and contribute positively to group work."],
      ["Build resilience","Complete sustained work and use regulation strategies."],
      ["Communicate","Speak clearly to different audiences and perform with confidence."]
    ],
    experiences:["LAMDA","Clubs","Visits","Workshops","Responsible technology"]
  },
  4: {
    platform:"PLATFORM 4", subtitle:"TAKING RESPONSIBILITY", label:"YEAR 4",
    title:"Take the next step.",
    lead:"Children deepen their independence, take on responsibilities and connect their talents with wider opportunities.",
    character:"images/eli-endurance.png", name:"Eli Endurance",
    quote:"Practice, positivity and perseverance help us grow.",
    milestones:[
      ["Live the values","Apply KCA values and make respectful choices when unsupervised."],
      ["Step into leadership","Volunteer, collaborate and encourage others."],
      ["Understand difference","Explore cultures, beliefs and experiences with curiosity."],
      ["Develop talents","Reflect on strengths and begin learning an instrument."]
    ],
    experiences:["LAMDA Speaking in Public","Swimming","Instrument tuition","Leadership","Learning beyond school"]
  },
  5: {
    platform:"PLATFORM 5", subtitle:"CONTRIBUTING TO MY COMMUNITY", label:"YEAR 5",
    title:"Make a difference.",
    lead:"Children act with increasing maturity, support younger pupils and demonstrate commitment to their interests and responsibilities.",
    character:"images/kiki-kofi-kindness.png", name:"Kiki & Kofi Kindness",
    quote:"Small caring actions can make a big difference.",
    milestones:[
      ["Act responsibly","Show honesty, self-discipline and thoughtful decision-making."],
      ["Support others","Encourage younger pupils and strengthen relationships."],
      ["Sustain effort","Persevere with longer projects and manage change positively."],
      ["Represent KCA","Speak confidently in unfamiliar situations and lead by example."]
    ],
    experiences:["LAMDA Grade 1","Music","Supporting younger pupils","School representation","Leadership"]
  },
  6: {
    platform:"PLATFORM 6", subtitle:"READY FOR MY FUTURE", label:"YEAR 6",
    title:"Ready for what comes next.",
    lead:"Children become role models, advocate for themselves and others, and prepare confidently for the next stage of their education.",
    character:"images/aria-aspiration.png", name:"Aria Aspiration",
    quote:"Exciting futures are built one brave step at a time.",
    milestones:[
      ["Lead and advocate","Lead discussions, support others and challenge unfairness respectfully."],
      ["Create belonging","Model respect and help build an inclusive community."],
      ["Show resilience","Manage responsibilities maturely and persist through challenge."],
      ["Look ahead","Speak confidently about goals, interests and aspirations."]
    ],
    experiences:["Residential","Camden Citizenship","Bright Futures Academy","Musical performance","Secondary transition"]
  }
};

const valueStories = {
  integrity:{title:"Isaac Integrity",strand:"Making good choices",image:"images/isaac-integrity.png",lead:"Isaac does the right thing, even when nobody is watching.",details:["His strong shell helps him stay true to what he believes is right.","He examines what he sees and hears so he can make fair, honest and responsible choices."],action:"Tell the truth, take responsibility and choose what is kind, safe and fair."},
  respect:{title:"Riley Respect",strand:"Belonging and understanding others",image:"images/riley-respect.png",lead:"Riley understands that differences make the KCA community stronger.",details:["Each feather celebrates the experiences that different people bring.","She listens carefully and treats adults, visitors and classmates with respect, even when she disagrees."],action:"Listen carefully, value difference and use kind words and kind acts."},
  endurance:{title:"Eli Endurance",strand:"Managing myself and staying the course",image:"images/eli-endurance.png",lead:"Eli knows that not everything goes perfectly the first time.",details:["Mistakes are part of learning, so Eli takes a breath, focuses and tries again.","He asks for help when needed and celebrates the progress that practice brings."],action:"Keep trying, use helpful strategies and recognise that mistakes help us grow."},
  courage:{title:"Connor Courage",strand:"Finding and using my voice",image:"images/connor-courage.png",lead:"Connor arrives ready to face a new adventure.",details:["When something feels difficult, he remembers to have a go and be brave.","He shares ideas, speaks in front of others and encourages people around him."],action:"Have a go, speak up and take positive risks in learning and life."},
  kindness:{title:"Kiki & Kofi Kindness",strand:"Relationships and contribution",image:"images/kiki-kofi-kindness.png",lead:"Kiki and Kofi help others feel included, supported and valued.",details:["Kiki notices when somebody looks worried, upset or left out.","Kofi invites others to join in and shows that small caring actions make a big difference."],action:"Notice others, offer help and make sure everyone feels included."},
  aspiration:{title:"Aria Aspiration",strand:"Exploring my future and my passions",image:"images/aria-aspiration.png",lead:"Aria looks towards the horizon and sees exciting possibilities.",details:["She explores the world with curiosity and discovers talents, interests and friendships.","She knows exciting futures are built one small step at a time."],action:"Stay curious, explore your passions and believe in the possibilities ahead."}
};

let currentYear = 1;
const departures = [...document.querySelectorAll(".departure")];
const el = id => document.getElementById(id);

function renderYear(number, scroll=true){
  currentYear = Math.max(1, Math.min(6, number));
  const year = years[currentYear];
  el("platformNumber").textContent = year.platform;
  el("platformSubtitle").textContent = year.subtitle;
  el("yearLabel").textContent = year.label;
  el("yearTitle").textContent = year.title;
  el("yearLead").textContent = year.lead;
  el("yearCharacter").src = year.character;
  el("yearCharacter").alt = year.name;
  el("yearCharacterName").textContent = year.name;
  el("yearQuote").textContent = year.quote;
  el("passportGrid").innerHTML = year.milestones.map(([h,p])=>`<article class="passport-card"><h3>${h}</h3><p>${p}</p></article>`).join("");
  el("luggageTags").innerHTML = year.experiences.map(x=>`<span>${x}</span>`).join("");
  const progress = (currentYear-1)/5;
  el("routeProgress").style.width = `calc(${progress*100}% - ${progress?40:0}px)`;
  el("routeTrain").style.left = `calc(22px + (100% - 100px) * ${progress})`;
  departures.forEach(d=>d.classList.toggle("active",Number(d.dataset.year)===currentYear));
  el("previousYear").disabled = currentYear===1;
  el("nextYear").textContent = currentYear===6 ? "Journey complete ✓" : "Next stop →";
  if(scroll) el("yearJourney").scrollIntoView({behavior:"smooth"});
}

el("beginButton").addEventListener("click",()=>{
  el("heroTrain").classList.add("depart");
  setTimeout(()=>el("departures").scrollIntoView({behavior:"smooth"}),650);
});
el("stationClock").addEventListener("click",()=>{
  el("birds").classList.remove("fly");
  void el("birds").offsetWidth;
  el("birds").classList.add("fly");
});
departures.forEach(d=>d.addEventListener("click",()=>renderYear(Number(d.dataset.year))));
el("previousYear").addEventListener("click",()=>renderYear(currentYear-1,false));
el("nextYear").addEventListener("click",()=>{ if(currentYear<6) renderYear(currentYear+1,false); });

const dialog=el("characterDialog");
document.querySelectorAll(".companion").forEach(card=>card.addEventListener("click",()=>{
  const s=valueStories[card.dataset.value];
  el("dialogImage").src=s.image; el("dialogImage").alt=s.title;
  el("dialogTitle").textContent=s.title; el("dialogStrand").textContent=s.strand;
  el("dialogLead").textContent=s.lead;
  el("dialogDetails").innerHTML=s.details.map(p=>`<p>${p}</p>`).join("");
  el("dialogAction").textContent=s.action;
  dialog.showModal();
}));
el("dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

renderYear(1,false);
