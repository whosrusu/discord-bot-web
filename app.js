// baza
const url =
  "https://discord.com/api/oauth2/authorize?client_id=1065192828860375101&permissions=8&scope=bot%20applications.commands";
const search = document.getElementById("search");
const commands = document.querySelectorAll(".command-about");
const category = document.getElementById("category");
const btnAddToDiscord = document.querySelector(".btns button:nth-child(1)");
const btnContact = document.querySelector(".btns button:nth-child(2)");
const btnMobileMenu = document.querySelector(".mobileMenu");
const mobileLinks = document.querySelector(".mobile-links");
const mobileLinksRedirect = document.querySelectorAll(".mobile-links a");
const iconClose = document.querySelector(".close");
const iconOpen = document.querySelector(".open");
var isMobileMenu = false;
var categoryUp = [];

// functii
function searchCommands(e) {
  const value = search.value;
  for (var command of commands) {
    if (command.innerText.includes(value)) {
      command.style.display = "block";
    } else {
      command.style.display = "none";
    }
  }
}

function addDiscordBot() {
  window.open(url, "blank");
}

function joinContact() {
  window.open("https://discord.gg/Att4gV38gX", "_blank");
}

function moblieMneu(e) {
  if (!isMobileMenu) {
    isMobileMenu = true;
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
    mobileLinks.style.display = "block";
  } else {
    isMobileMenu = false;
    iconOpen.style.display = "none";
    iconClose.style.display = "block";
    mobileLinks.style.display = "none";
  }
}

function mobileClickLink() {
  mobileLinks.style = "none";
  iconOpen.style.display = "none";
  iconClose.style.display = "block";
  isMobileMenu = false;
}

// sistem de butoane
btnAddToDiscord.addEventListener("click", addDiscordBot);
btnContact.addEventListener("click", joinContact);
btnMobileMenu.addEventListener("click", moblieMneu);
for (var mobileLinkRedirect of mobileLinksRedirect) {
  mobileLinkRedirect.addEventListener("click", mobileClickLink);
}

function learnMore(v) {
  // window.location.hash("#commnads");
  search.value = v;
  const commandsList = document.querySelectorAll(".command-about");
  for (var command of commandsList) {
    if (command.innerHTML.includes(search.value)) {
      command.style.display = "block";
    } else {
      command.style.display = "none";
    }
  }
}

// sistem pentru lista de comenzi

// lista de comenzi
const cmds = [
  {
    name: "avatar",
    category: "utility",
    usage: "&lt;member&gt;",
    descrpition: "get avatar user",
  },

  {
    name: "banner",
    category: "utility",
    usage: "&lt;member&gt;",
    descrpition: "get banner user",
  },

  {
    name: "bots",
    category: "utility",
    usage: "none",
    descrpition: "it gives you a list of all the bots on the server",
  },
  {
    name: "members",
    category: "utility",
    usage: "none",
    descrpition: "view the server's members coun",
  },
  {
    name: "picperms",
    category: "utility",
    usage: "&lt;member&gt;",
    descrpition: "give someone acc to upload files",
  },
  {
    name: "serverinfo",
    category: "utility",
    usage: "none",
    descrpition: "your server info",
  },
  {
    name: "snipe",
    category: "utility",
    usage: "&lt;channel&gt;",
    descrpition: "see delete messages",
  },
  {
    name: "unpicperms",
    category: "utility",
    usage: "&lt;member&gt;",
    descrpition: "remove someone's acc to upload files",
  },
  {
    name: "userinfo",
    category: "utility",
    usage: "&lt;member&gt;",
    descrpition: "find out details about a member",
  },
  {
    name: "voices",
    category: "utility",
    usage: "none",
    descrpition: "find out how many members are connected on voices",
  },

  {
    name: "autopfp",
    category: "config",
    usage: "none",
    descrpition: "set the channel for autopfp",
  },
  {
    name: "goodbye",
    category: "config",
    usage: "[channel]",
    descrpition: "set the channel for the goodbye message",
  },
  {
    name: "variables",
    category: "config",
    usage: "none",
    descrpition: "variables  list",
  },
  {
    name: "welcome",
    category: "config",
    usage: "[channel]",
    descrpition: "set the channel for the welcome message",
  },
  {
    name: "lock",
    category: "moderation",
    usage: "&lt;channel&gt;",
    descrpition: "locks a channels and disallows everyone to send messages",
  },
  {
    name: "role",
    category: "moderation",
    usage: "[member] [role]",
    descrpition: "add/remove a role to someone",
  },
  {
    name: "unlock",
    category: "moderation",
    usage: "&lt;channel&gt;",
    descrpition: "unlocks a channels and disallows everyone to send messages",
  },

  {
    name: "ben",
    category: "fun",
    usage: "[question]",
    descrpition: "talk to ben",
  },
  {
    name: "cat",
    category: "fun",
    usage: "none",
    descrpition: "pic of cats",
  },
  {
    name: "divorce",
    category: "fun",
    usage: "none",
    descrpition: "divorce with an user",
  },
  {
    name: "dog",
    category: "fun",
    usage: "none",
    descrpition: "picture of dogs",
  },
  {
    name: "hug",
    category: "fun",
    usage: "[member]",
    descrpition: "hug someone",
  },
  {
    name: "kiss",
    category: "fun",
    usage: "[member]",
    descrpition: "kiss someone",
  },
  {
    name: "marry",
    category: "fun",
    usage: "&lt;member&gt;",
    descrpition: "marry someone",
  },
  {
    name: "pp",
    category: "fun",
    usage: "&lt;member&gt;",
    descrpition: "ur pp size tells u",
  },
  {
    name: "ship",
    category: "fun",
    usage: "[member]",
    descrpition: "check how compatible you are with a person",
  },
  {
    name: "slap",
    category: "fun",
    usage: "[member]",
    descrpition: "slap someone",
  },
  {
    name: "addemote",
    category: "emotes",
    usage: "[emoji]",
    descrpition: "add emote on guild",
  },
  {
    name: "addsticker",
    category: "emotes",
    usage: "[sticker]",
    descrpition: "add sticker on guild",
  },
  {
    name: "bigemoji",
    category: "emotes",
    usage: "[emoji]",
    descrpition: "Enlarge an emoji",
  },
  {
    name: "emojis",
    category: "emotes",
    usage: "none",
    descrpition: "it gives you a list of emojis on the server",
  },
  {
    name: "roleicon",
    category: "emotes",
    usage: "[role] [emoji]",
    descrpition: "addd icon to role",
  },
];

// creaza lista de comenzii
for (var cmd of cmds) {
  const div = document.createElement("div");
  div.classList.add("command-about", "reveal");
  div.innerHTML = `<h2> ${cmd.name} </h2> 
  <div class="command-info">
        <p>category: <code>${cmd.category}</code> </p>
                <p>usage: <code>${cmd.usage}</code></p>
              <p>descrpition: <code>${cmd.descrpition}</code></p>
              </div>
  `;
  category.append(div);

  // adauca un evet pentru bara de search ca sa iti gaseasca comanda dorita
  search.addEventListener("input", (e) => {
    const value = search.value;
    const commandsList = document.querySelectorAll(".command-about");
    for (var command of commandsList) {
      if (command.innerHTML.includes(value)) {
        command.style.display = "block";
      } else {
        command.style.display = "none";
      }
    }
  });

  // un event in care daca apesi pe numele comenzei sa iti ofere inforamatii
  div.addEventListener("click", (e) => {
    const commandInfo = div.querySelector(".command-info");
    const commandInfoAcitve = commandInfo.classList.contains(
      "command-info-active"
    );
    if (commandInfoAcitve) {
      commandInfo.classList.remove("command-info-active");
      commandInfo.style.height = "0";
    } else {
      commandInfo.classList.add("command-info-active");
      commandInfo.style.height = "100px";
    }
  });
}

// animation scroll
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const height = window.innerHeight;
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 100;

      if (revealTop < height - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
