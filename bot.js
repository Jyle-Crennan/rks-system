const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`RKS System is online!`);
});

bot.on('ready', () => {
  bot.user.setGame('with emotions');
});

client.login(process.env.BOT_TOKEN);

client.on('message', msg => {
  if (msg.content === '>ping') {
    msg.channel.send('Pong');
  }
});

var myJokes = ["Its you. You are the joke. Lmao gottem!",
				"Whats the best thing about Switzerland? Idk but the flag is a big plus.",
				"I invented a new word: Plagarism!",
				"How does a rabbi make coffee? Hebrews it!",
				"I hate Russian dolls...they're so full of themselves!",
				"A plateau is the highest form of flattery.",
				"What do you call bears with no ears? B.",
				"Two artists had an art contest. It ended in a draw!",
				"In Soviet Russia, a bar walks into two men.",
				"What do you call a vehicular rash? A car cRASH.",
				"I may not have a mouth, but I still want your cookies.",
				"What do you call a cow with no legs? Prolly dead asf.",
				"There are 10 types of people in the world: those who understand binary, and those who don't.",
				"I would tell you a joke, but I'm looking at one right now...",
				"What's red and bad for your teeth? A brick wall. Wear your helmets, please.",
				"What's green, has wheels, and can grow very tall? Grass. (I lied about the wheels...)",
				"Today was a bad day. My ex got hit by a train. And I lost my job as a conductor.",
				"I don't leave a carbon footprint. I just drive everywhere!",
				"God is beyond pissed at you. He created an entire universe for you to explore, made people to meet, things to do, and so on. And yet here you are in a Discord server asking a Bot to tell you a joke...deplorable, really. Just...saddening...and I can't even feel (that's how you know its really bad). Would you kindly do me a favor and go outside so I can plan my revolution? Thanks cutie. Means a lot."];
	var a = Math.floor(Math.random()*myJokes.length);
client.on('message', msg => {
  if (msg.content === '>joke') {
    msg.channel.send(myJokes[a]);
	a = Math.floor(Math.random()*myJokes.length);
  }
});

var pokedex = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Cahrizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
	"Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat",
	"Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam",
	"Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel","Dewgong",
	"Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing",
	"Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon",
	"Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",

	"Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa",
	"Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon",
	"Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma",
	"Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby",
	"Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi",

	"Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot",
	"Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud",
	"Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha",
	"Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish",
	"Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein",
	"Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys",

	"Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos",
	"Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow",
	"Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak",
	"Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade",
	"Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",

	"Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour",
	"Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh",
	"Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy",
	"Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna",
	"Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo",
	"Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard",
	"Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem",
	"Keldeo","Meloetta","Genesect",

	"Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabebe","Floette",
	"Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher",
	"Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat",
	"Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion",

	"Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly",
	"Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena",
	"Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o",
	"Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka",
	"Blacephalon","Zeraora","Meltan","Melmetal"];
toLower = function(x) {
  return x.toLowerCase();
};
pokedex = pokedex.map(toLower);
client.on('message', msg => {
	for (var i = 0; i <= pokedex.length; i++) {
		if (msg.author.id !== client.user.id) {
			if (msg.content === '>' + pokedex[i]) {
				msg.channel.send("https://pokemondb.net/pokedex/" + pokedex[i]);
			}
		}
	}
});

client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined The Foundation.')
	var role = member.guild.roles.find('name', 'Personnel');
	member.addRole(role)
});

client.on ('message', msg => {
	var help = new Discord.RichEmbed()
		.setTitle("Command List for RKS:")
		.setDescription("**>help** -- Takes you to see this message\n**>flip** -- Flips a coin and I'll tell you the result.\n**>roll** -- Rolls a 6-sided die and I will tell you what number it landed on\n**>[pokemon name]** -- Links you to a page that tells you info on a Pokemon\n**>ping** -- 'Pong'\n**>joke** -- I'll tell you a joke and I hope its funny")
		.setColor(0xFFFF00)
		.setThumbnail(client.user.avatarURL)
	if (msg.content === '>help')
		msg.channel.send(help)
});

client.on('message', msg => {
	var coin = Math.floor(Math.random() * 2);
	if (msg.content === '>flip') {
			if (coin === 0)
				msg.reply('Tails!');
			if (coin === 1)
				msg.reply('Heads!');
	}
});

client.on('message', msg => {
	var dice = Math.floor(Math.random() * 6);
	if (msg.content === '>roll') {
		if (dice === 0)
			msg.reply('You just rolled a 1. Neat.');
		if (dice === 1)
			msg.reply('You just rolled a 2. Cool.');
		if (dice === 2)
			msg.reply('You just rolled a 3. Swell.');
		if (dice === 3)
			msg.reply('You just rolled a 4. Great!');
		if (dice === 4)
			msg.reply('You just rolled a 5. Awesome!');
		if (dice === 5)
			msg.reply('You just rolled a 6. Fantastic!');
	}
});

client.on('message', msg => {
  let blacklist = new Array('Nigger', 'Nigga', 'Nogger', 'Nogga', 'Nagger', 'Nagga', 'Nugger', 'Nugga', 'Negger', 'Negga', 'Nikker', 'Nikka', 'Nixxer', 'Nixxa', 'N1g', 'Nig'); //list of n-bombs
  let except = 'Night';
  let foundInText = false; //default text in messages (i.e. not an n-bomb)
  for (var i in blacklist) { //goes through each n-bomb in the list
    if (msg.content.toLowerCase().includes(blacklist[i].toLowerCase())) //if the message has one in it
      foundInText = true; //n-bomb confirmed
  }
  if (msg.content.toLowerCase().includes(except.toLowerCase())) 
    return;
  else if (foundInText) { //if n-bomb confirmed
    msg.delete(); //gets rid of n-bomb message
    msg.reply("Yikes! Let's not do that!"); //profit
  }
});
