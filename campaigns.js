const CAMPAIGNS = [
    {
        id: "campaign_001",
        title: "The Fall of the Imperial City",
        actualYear: 1453,
        difficulty: "medium",
        description: `A great walled city, capital of an empire that had endured for over a thousand years, finally fell to besieging forces after a siege lasting nearly two months. The defenders numbered perhaps seven thousand against an army of eighty thousand or more.

The attackers employed massive bombards—the largest ever constructed—capable of hurling stone balls weighing over half a ton. These primitive cannon had to be cast on-site, required hours to reload, could fire only about seven times per day, and frequently cracked from the heat of firing. But their psychological impact was immense, and they gradually reduced the ancient walls to rubble.

The defenders fought from behind walls first constructed a millennium earlier, though reinforced many times since. They employed an ancient incendiary weapon, crossbows rather than the newer handguns, and their own smaller cannon.

The final assault came through a gate left unlocked in the confusion of battle. The emperor died fighting in the breach, his body never identified among the fallen.`,
        hints: [
            { cost: 20, text: "Massive bombards that required on-site casting were used only briefly—roughly 1420 to 1480. Smaller bronze cannon on wheeled carriages soon made such immobile monsters obsolete.", explanation: "The bombards described match early gunpowder siege weapons." },
            { cost: 25, text: "Crossbows dominated European armies from about 1100 to 1450. Handguns (arquebuses) began replacing them in the late 15th century and were standard by 1550.", explanation: "The reliance on crossbows over handguns helps date this battle." }
        ],
        explanation: "This was the Fall of Constantinople in 1453—the end of the Byzantine Empire after 1,123 years. Sultan Mehmed II ('the Conqueror'), age 21, besieged the city with ~80,000 Ottoman troops against Emperor Constantine XI Palaiologos's 7,000 defenders. The massive bombards were cast on-site by Hungarian engineer Orban; the largest required 60 oxen to move. Constantine XI died fighting on the walls—the last Roman Emperor. The city became Istanbul, Ottoman capital for 460 years. The bombards having to be cast on-site places this in the early gunpowder period; by the 1480s mobile bronze cannon had made such monsters obsolete. Defenders using crossbows rather than handguns suggests before 1500, when arquebuses became standard. A thousand-year empire whose emperor dies in the final defense can only be Byzantium.",
        tags: ["siege", "15th-century", "mediterranean", "ottoman", "byzantine"]
    },
    {
        id: "campaign_002",
        title: "The New Tactics",
        actualYear: 1631,
        difficulty: "medium",
        description: `Two armies met on a broad plain near a small town in the heart of the continent. The larger force, some 35,000 strong, represented the old order—seemingly invincible after a decade of victories. The smaller army of 23,000 served a northern king who had recently intervened in a continental war.

The imperial commander arranged his forces in the traditional manner: massive squares of pikemen and musketeers, formations that had dominated warfare for over a century. These formations were deep—sometimes 30 ranks—prioritizing mass and shock over mobility. The matchlock muskets required a lit slow-match to fire; soldiers still wore partial armor—breastplates and helmets—though full plate had been abandoned.

The northern king had reformed his army along new lines. His formations were shallower—only six ranks deep—allowing more muskets to fire simultaneously. His cavalry was trained to charge home with the sword rather than firing pistols at a distance. Light artillery, mobile enough to advance with the infantry, provided close support.

When the imperial cavalry shattered the northern left wing, the day seemed lost. But the king's disciplined infantry wheeled to face the threat while he personally led cavalry charges to stabilize the line. By evening, the imperial army had been annihilated—nearly 13,000 dead on the field.`,
        hints: [
            { cost: 20, text: "Matchlock muskets were the standard infantry firearm from roughly 1500 to 1700. Flintlocks, which didn't require a lit slow-match, began replacing them around 1650-1700.", explanation: "The matchlock muskets help date this battle." },
            { cost: 25, text: "The massive pike-and-musket squares (tercios) dominated from the 1530s to about 1640. Shallower linear formations then proved superior and replaced them.", explanation: "The tactical transition described helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Breitenfeld in 1631, during the Thirty Years' War. King Gustavus Adolphus of Sweden—the 'Lion of the North'—defeated the Catholic Imperial army under Count Tilly. Gustavus revolutionized warfare: shallower formations (6 ranks vs 30), mobile artillery, cavalry charging home with swords instead of the ineffective pistol caracole. Tilly lost 13,000 dead and his aura of invincibility. Gustavus died the next year at Lützen but changed warfare forever. The tercio formation losing to shallower linear tactics marks the 1630s-40s transition point. Matchlocks rather than flintlocks, partial armor rather than full plate, and no bayonets yet all point to the early-to-mid 17th century.",
        tags: ["pitched-battle", "17th-century", "germany", "thirty-years-war"]
    },
    {
        id: "campaign_003",
        title: "The Mountain Fortress",
        actualYear: 1877,
        difficulty: "easy",
        description: `A great empire sought to aid a rebellion in neighboring provinces. When it intervened on behalf of the rebels, war erupted. The defenders of a key fortress town held out for nearly five months against repeated assaults, tying down an army that eventually numbered 185,000 men.

The defenders, numbering around 35,000, used single-shot breech-loading rifles that could be loaded while lying down—a crucial advantage when defending fixed positions. They had constructed elaborate earthwork fortifications with interlocking fields of fire. Telegraph lines connected the besieging army to its capital. Military observers from several major powers watched the siege with great interest, noting the deadly effectiveness of modern rifles against massed infantry.

The attacking commanders attempted to overwhelm the defenders through frontal assaults, suffering catastrophic casualties. In one assault alone, over 13,000 men fell. Total casualties in the campaign numbered over 100,000.

The siege demonstrated the increasing lethality of defensive warfare and the need for new tactical approaches. The lessons would be studied carefully in military academies—though many commanders would ignore them until forced to relearn them through bitter experience decades later.`,
        hints: [
            { cost: 15, text: "Single-shot breech-loading rifles that could be loaded while prone were standard military weapons from roughly 1860 to 1890, between muzzle-loaders and repeating rifles.", explanation: "The rifle technology helps date this battle." },
            { cost: 20, text: "Military telegraph communication became standard in the 1860s. The reference to 'lessons relearned decades later' points to World War I (1914-1918).", explanation: "The telegraph and the foreshadowing help narrow the timeframe." }
        ],
        explanation: "This was the Siege of Plevna (1877) in the Russo-Turkish War. Ottoman commander Osman Pasha held the Bulgarian town for 5 months against repeated Russian assaults, proving that breech-loading rifles behind earthworks could slaughter massed infantry. The Russians lost 40,000+ casualties before starving the garrison out. European observers took detailed notes—then ignored the lessons until WWI proved them catastrophically correct. For dating: single-shot breech-loading rifles were standard 1860-1890—muzzle-loaders required standing to reload (pre-1860), magazine rifles held multiple rounds (post-1890). Army sizes of 185,000 required railroad logistics (post-1860). Telegraph coordination was new in the 1860s.",
        tags: ["siege", "19th-century", "balkans", "ottoman", "russia"]
    },
    {
        id: "campaign_004",
        title: "The King's Capture",
        actualYear: 1525,
        difficulty: "medium",
        description: `A young king led his army across the mountains to reclaim territories his predecessors had lost. He besieged a fortified city, but an imperial relief force arrived before he could take it. Rather than retreat, the king offered battle.

The battle was decided by a new weapon: the handheld firearm. Soldiers armed with heavy arquebuses—matchlocks requiring forked rests to aim—fired from behind cover, cutting down the flower of the king's nobility as they charged. The imperial infantry combined pikemen and arquebusiers in a ratio of roughly three to one, the pikemen protecting the slower-firing gunners.

The king's own horse was killed beneath him. Fighting on foot, surrounded by enemies, he was eventually forced to surrender—the first major monarch captured in battle in generations. The older style of warfare—armored knights charging en masse—had proven obsolete.

The captured king would spend a year as a prisoner before being ransomed for an enormous sum and territorial concessions. The balance of power had shifted decisively.`,
        hints: [
            { cost: 20, text: "Heavy arquebuses requiring forked rests were used from about 1500 to 1550. Lighter models that could be fired without rests appeared in the mid-16th century.", explanation: "The arquebus type helps date this battle." },
            { cost: 25, text: "The pike-to-shot ratio of 3:1 was typical of the early 1500s. By 1600 it was closer to 1:1, and by 1700 pikes were obsolete, replaced by bayonets.", explanation: "The formation ratio helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Pavia in 1525, during the Italian Wars. King Francis I of France was captured—the first French king taken in battle since Poitiers (1356). Spanish arquebusiers under the Marquis of Pescara shot down the French knights from behind hedges; the 'flower of French chivalry' died in minutes. Francis was imprisoned in Madrid for a year. His famous letter to his mother: 'All is lost save honor.' For dating: heavy arquebuses requiring forked rests were used 1500-1550; lighter models appeared mid-century. The 3:1 pike-to-shot ratio was typical of the early 1500s—by 1600 it was 1:1, by 1700 pikes were gone entirely. Knights charging en masse indicates before 1550, when firearms made such tactics suicidal.",
        tags: ["pitched-battle", "16th-century", "italy"]
    },
    {
        id: "campaign_005",
        title: "The Expedition to the Holy Land",
        actualYear: 1191,
        difficulty: "medium",
        description: `A coalition of western kings launched an expedition to reclaim lands lost to a great eastern sultan who had united his realm after decades of division. The journey itself claimed one king, who drowned crossing a river. The two remaining kings—one from an island nation, the other from the continent—quickly fell to quarreling.

The siege of a crucial port city lasted nearly two years before the garrison surrendered. The island king massacred prisoners when ransom negotiations stalled—a decision that would haunt his reputation.

The army then marched south along the coast, supplied by ships sailing parallel to their route. Infantry carrying large shields and crossbows protected the mounted knights, who wore chain mail hauberks. The sultan harried them constantly, avoiding pitched battle until forced to fight near a coastal town. The westerners' disciplined march, with infantry protecting the cavalry until the moment to charge, proved decisive. But the army was too weak to assault the ultimate prize, the great holy city itself.

The war ended in negotiated access for pilgrims—a pale shadow of original ambitions.`,
        hints: [
            { cost: 20, text: "Crossbows were the dominant missile weapon in western European armies from roughly 1100 to 1400, before longbows and then firearms superseded them.", explanation: "The crossbow dominance helps date this battle." },
            { cost: 25, text: "Chain mail hauberks without plate armor were standard from about 1000 to 1250. Plate armor began appearing in the late 13th century and dominated by 1400.", explanation: "The armor type helps narrow the timeframe." }
        ],
        explanation: "This was the Third Crusade (1189-1192). Richard I 'the Lionheart' of England and Philip II of France answered Saladin's capture of Jerusalem in 1187. Emperor Frederick Barbarossa drowned crossing a river in Anatolia. Richard besieged Acre for two years, massacred 2,700 prisoners when Saladin delayed ransom, and won at Arsuf—but never took Jerusalem. He famously refused to even look at the city he couldn't capture. The equipment is classic High Medieval: chain mail without plate (plate comes in around 1300), crossbows as the main missile weapon (before firearms). A king drowning on the journey and prisoners massacred during ransom negotiations are specific Third Crusade details.",
        tags: ["crusade", "12th-century", "middle-east", "siege"]
    },
    {
        id: "campaign_006",
        title: "The Swift Victory",
        actualYear: 1866,
        difficulty: "easy",
        description: `Two powers fought for supremacy over the smaller states between them. The northern power had spent years preparing, reorganizing its army and equipping it with revolutionary new weapons. When war came, it was shockingly brief—over in weeks rather than the months or years everyone expected.

The decisive advantage was the northern army's breech-loading needle guns—an early bolt-action design—which could fire five rounds for every one fired by the opposing muzzle-loaders. Soldiers could load while lying prone in cover, while the enemy had to stand to ram charges down their barrels. At one battle, 8,000 of the southern force fell against only 360 of the northern.

The war was also revolutionary in its use of railroads for strategic movement. The northern power had planned rail mobilization in exquisite detail, concentrating forces faster than anyone thought possible. Telegraph communication allowed commanders to coordinate armies hundreds of miles apart.

The victory transformed the continental balance of power and set the stage for unification of many smaller states under northern leadership within a few years.`,
        hints: [
            { cost: 15, text: "The needle gun (Dreyse) was the first widely-adopted bolt-action military rifle, in service from 1848 to 1871. Breech-loaders decisively outperformed muzzle-loaders in the 1860s wars.", explanation: "The rifle technology helps date this battle." },
            { cost: 20, text: "Railroads first played a decisive strategic role in military mobilization in the 1860s. Telegraph coordination of armies became standard in the same period.", explanation: "The transportation and communication technology helps narrow the timeframe." }
        ],
        explanation: "This was the Austro-Prussian War (Seven Weeks' War) of 1866. Prussia under Otto von Bismarck and General Helmuth von Moltke crushed Austria in just seven weeks, shocking Europe. At Königgrätz (Sadowa), Prussian needle guns fired 5 rounds to every Austrian muzzle-loader shot. Moltke pioneered railway mobilization—Prussia concentrated faster than anyone imagined. The victory excluded Austria from German affairs and enabled German unification under Prussia in 1871. For dating: the Dreyse needle gun (first widely-adopted bolt-action) was in service 1848-1871. The decisive advantage of breech-loaders over muzzle-loaders was proven in the 1860s. Railroad mobilization was revolutionary in the 1860s—earlier wars couldn't move armies this fast.",
        tags: ["pitched-battle", "19th-century", "central-europe"]
    },
    {
        id: "campaign_007",
        title: "The Wagon Fort",
        actualYear: 1420,
        difficulty: "hard",
        description: `A religious reformer was burned at the stake, sparking a revolt that would consume a central kingdom for fifteen years. His followers, deemed heretics, developed revolutionary military tactics that would defeat five armies sent against them.

The rebels' innovations were remarkable. They used farm wagons as mobile fortifications, chaining them together in circles to form defensive positions. From behind these wooden walls, they employed an unusually high proportion of primitive hook-guns—heavy handguns requiring a rest or hook to fire—alongside crossbows. When enemies exhausted themselves attacking the wagon forts, cavalry would sally out to complete the rout.

Their armies were organized around religious discipline rather than feudal obligation. Soldiers were forbidden from looting until victory was complete. They sang hymns as they marched to battle, terrifying opponents with their fanatical determination.

The armies who faced them—feudal knights from across the region—never developed effective counter-tactics. Eventually, the rebels fell to fighting among themselves over theological differences. A moderate faction made peace with the church, and together they destroyed the radicals.`,
        hints: [
            { cost: 20, text: "Hook-guns (hackbuts) were early handheld firearms used roughly 1380-1480. They were heavy, slow to reload, but could penetrate armor at close range.", explanation: "The firearm type helps date this battle." },
            { cost: 25, text: "The early 15th century was when firearms first achieved tactical parity with crossbows. By 1500, arquebuses were clearly superior; by 1550, crossbows were obsolete.", explanation: "The firearms-crossbow relationship helps narrow the timeframe." }
        ],
        explanation: "These were the Hussite Wars (1419-1434) in Bohemia (now Czech Republic). After reformer Jan Hus was burned at the stake in 1415, his followers revolted against the Catholic Church and Holy Roman Empire. General Jan Žižka, a one-eyed military genius, invented the Wagenburg—farm wagons chained into mobile fortresses with gunports. The Hussites defeated five crusades, terrifying enemies with battle hymns and fanatical discipline. They fell when moderates (Utraquists) allied with Catholics to destroy the radical Taborites at Lipany (1434). Hook-guns and crossbows used together indicates early gunpowder warfare—firearms were still unreliable enough to need crossbow backup. By 1500 arquebuses were clearly superior; before 1380 firearms barely existed in Europe. The war wagon tactics were a Hussite innovation specific to this conflict.",
        tags: ["religious-war", "15th-century", "central-europe"]
    },
    {
        id: "campaign_008",
        title: "The Frozen Disaster",
        actualYear: 1709,
        difficulty: "medium",
        description: `A young warrior king who had ascended the throne as a teenager proved to be a military genius, defeating coalition after coalition sent against his northern kingdom. For nearly a decade, he seemed invincible, smashing larger armies with bold maneuvers and aggressive tactics.

His enemies learned to avoid battle, but this king forced them to fight. He invaded a vast eastern empire, planning to knock it out of the war. His army of 40,000 marched deep into enemy territory, only to face a foe who retreated endlessly, burning everything that might sustain the invaders.

Infantry on both sides fought in linear formations with flintlock muskets and socket bayonets—the bayonet having recently replaced the pike. Artillery was smoothbore, firing solid shot, and required horses or oxen to move.

The winter that followed was the coldest in a century. Without adequate supplies, thousands froze to death. By spring, the army had dwindled to half its original strength. The king, wounded by a stray bullet, was carried on a litter when his remaining force finally cornered the enemy army.

The ensuing battle was a disaster. The exhausted, outnumbered invaders attacked across swampy ground and were destroyed. The king escaped with a handful of followers but would never recover his former power. His kingdom would slowly be dismembered by the enemies he had once humiliated.`,
        hints: [
            { cost: 20, text: "Socket bayonets replaced pikes in most European armies between 1690 and 1710. Linear formations with flintlock muskets and bayonets were standard from about 1700 to 1850.", explanation: "The infantry equipment helps date this battle." },
            { cost: 25, text: "Smoothbore artillery firing solid shot was standard from the 16th century until explosive shells became reliable in the 1840s-1850s.", explanation: "The artillery technology provides a broad timeframe that other clues narrow." }
        ],
        explanation: "This was the Battle of Poltava (1709) in the Great Northern War. King Charles XII of Sweden—considered the era's greatest soldier—invaded Russia with 40,000 men but was destroyed by Tsar Peter the Great's scorched-earth tactics and the brutal winter of 1708-09 (the coldest in 500 years). Charles, wounded and carried on a litter, attacked with 20,000 survivors against 45,000 Russians and was annihilated. Sweden never recovered its great-power status; Peter built St. Petersburg and modernized Russia. Bayonets 'recently' replacing pikes is the key dating clue—that transition happened around 1690-1710. The 'coldest winter in a century' is historically famous as the Great Frost of 1709.",
        tags: ["pitched-battle", "18th-century", "eastern-europe"]
    },
    {
        id: "campaign_009",
        title: "The Cautious General",
        actualYear: 1862,
        difficulty: "easy",
        description: `A massive army advanced on a rebel capital, approaching not overland but by water, landing on a peninsula and marching toward the enemy seat of government. Over 100,000 men with siege guns planned to overwhelm the defenders.

The army's commander was methodical to a fault, convinced he was always outnumbered when the opposite was true. He prepared elaborate siege works, brought up heavy artillery, and waited—always waited—for perfect conditions. His caution gave the enemy time to concentrate forces. Both sides used rifled muskets accurate to 500 yards. Observation balloons provided reconnaissance, and ironclad warships protected the army's flanks.

When the rebels counterattacked with bold assaults, the larger army retreated despite winning most of the tactical engagements. Over a week of intense fighting, the rebels attacked repeatedly, suffering higher casualties but driving the invaders back to the protection of naval gunboats.

The campaign was a strategic failure. Despite suffering fewer casualties, the invaders abandoned the offensive and withdrew. The opportunity to capture the rebel capital had been squandered. The war would grind on for several more years at a cost of hundreds of thousands of lives.`,
        hints: [
            { cost: 15, text: "Rifled muskets with 500-yard effective range became standard in the 1850s, replacing smoothbores accurate to only 100 yards. They dominated infantry combat from 1855 to 1890.", explanation: "The rifle technology helps date this battle." },
            { cost: 20, text: "Observation balloons were first used militarily in the 1860s. Ironclad warships first saw combat in 1862.", explanation: "These technologies together pinpoint the era precisely." }
        ],
        explanation: "This was the Peninsula Campaign (1862) in the American Civil War. General George McClellan landed 100,000+ Union troops on the Virginia Peninsula to take Richmond. Despite outnumbering the Confederates, McClellan was paralyzed by caution, convinced (wrongly) he faced superior numbers. General Robert E. Lee counterattacked in the Seven Days Battles, driving McClellan back. Thaddeus Lowe's observation balloons provided the first aerial reconnaissance. The USS Monitor vs CSS Virginia had just demonstrated ironclad warfare. For dating: rifled muskets accurate to 500 yards replaced smoothbores (100 yards) in the 1850s. Observation balloons were first used militarily in the 1860s. Ironclads first saw combat in 1862—earlier navies were wooden, later ones used steel.",
        tags: ["civil-war", "19th-century", "north-america", "siege"]
    },
    {
        id: "campaign_010",
        title: "The Artillery Revolution",
        actualYear: 1494,
        difficulty: "hard",
        description: `A young king led his army across the mountains to claim an inheritance in the southern peninsula. His artillery train was revolutionary—bronze cannon on wheeled carriages that could keep pace with the marching army and be deployed in hours rather than days. His infantry still fought primarily with pike and crossbow; arquebuses were present but not yet dominant.

The expedition met almost no resistance. City after city opened its gates, awed by the speed and power of the invaders. Within months, the southern kingdom had been conquered, its royal family in flight.

But holding these conquests proved impossible. The other powers of the peninsula, alarmed by this display of force, formed a league against the invaders. The conquering army found itself cut off, far from home, surrounded by enemies. The king fought his way back through a blocking force at a mountain pass, but was forced to abandon his conquests entirely.

This brief campaign demonstrated the power of mobile artillery and inaugurated decades of warfare over control of the peninsula. The age of small city-states defending themselves behind medieval walls was ending.`,
        hints: [
            { cost: 20, text: "Bronze cannon on wheeled carriages (mobile field artillery) first appeared in the 1490s. Before this, artillery was primarily iron bombards too heavy to move quickly.", explanation: "The artillery technology helps date this battle." },
            { cost: 25, text: "Pike and crossbow dominated infantry until about 1500. Arquebuses became the primary infantry firearm by 1530; crossbows were obsolete by 1550.", explanation: "The infantry weapons help narrow the timeframe." }
        ],
        explanation: "This was Charles VIII's invasion of Italy in 1494-1495, beginning the Italian Wars. Mobile bronze cannon on wheeled carriages first appeared in the 1490s—before this, artillery was iron bombards too heavy for tactical mobility. Pike and crossbow dominated infantry until ~1500; arquebuses became the primary infantry firearm by 1530. This combination—revolutionary mobile artillery with arquebuses 'present but not dominant'—indicates the 1490s specifically.",
        tags: ["invasion", "15th-century", "southern-europe"]
    },
    {
        id: "campaign_011",
        title: "The Long March",
        actualYear: 1704,
        difficulty: "medium",
        description: `Two grand alliances fought for control of a dying empire's succession. When the throne passed to a prince of one great kingdom, rivals formed a coalition to prevent the merger of two vast realms under one dynasty.

A brilliant commander from an island nation, working alongside a prince from a continental ally, planned a bold stroke. Rather than fighting defensively in familiar territory, they would march across the continent to strike at the heartland of their enemies.

The march was a masterpiece of logistics. The commander arranged supply magazines in advance, so his troops arrived fresh and well-fed. He deceived the enemy about his intentions until it was too late to react. The combined army of 52,000 met an equal force near a village along a great river.

Infantry formed linear formations three ranks deep with flintlock muskets and socket bayonets. Cavalry charged with sword and pistol—lances had fallen from use in western armies. The battle raged all afternoon. The allied infantry stormed a fortified village while cavalry battles swirled on the flanks. When the allied cavalry finally broke through, the enemy center collapsed. Over 30,000 of the enemy were killed, wounded, or captured. It was the first major defeat for the dominant military power in forty years.`,
        hints: [
            { cost: 20, text: "Three-rank linear formations with flintlock muskets and socket bayonets became the European standard around 1700 and remained so until about 1850.", explanation: "The infantry formation helps date this battle." },
            { cost: 25, text: "Cavalry lances fell out of use in Western European armies around 1600-1650, replaced by sword and pistol tactics. Lances returned in the early 1800s.", explanation: "The cavalry weapons help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Blenheim in 1704, during the War of the Spanish Succession. Three-rank linear formations with flintlock muskets and socket bayonets became the European standard around 1700 and remained so until ~1850. Cavalry using sword and pistol (rather than lances) indicates post-1650, when lances fell from Western European use. The 'first major defeat in forty years' for France points to 1704 (their last major defeat was 1664).",
        tags: ["pitched-battle", "18th-century", "central-europe"]
    },
    {
        id: "campaign_012",
        title: "The Border Clash",
        actualYear: 1939,
        difficulty: "medium",
        description: `Two empires clashed over a disputed border in the remote steppes. What began as a skirmish escalated into a major battle involving over 100,000 troops on each side. One side sought to test their neighbor's resolve; the other aimed to demonstrate overwhelming strength.

The fighting lasted four months, featuring some of the largest tank battles the world had yet seen. Tanks on both sides were mostly light vehicles with thin armor; medium tanks were just entering service. Aircraft included both biplanes and modern monoplanes. One side committed nearly 500 tanks and over 500 aircraft. Their commander, a rising general, employed a double envelopment that trapped and destroyed several divisions.

The tactics were revolutionary: massed armor supported by motorized infantry and close air support, striking deep into enemy rear areas. Artillery was coordinated by radio. The attacking force suffered 18,000 casualties but inflicted over 60,000.

The defeated power, shocked by the scale of their losses, signed a neutrality pact that would hold for nearly two years. The victorious commander's reputation soared, and he would soon face a far greater test. The lessons of this battle—particularly the effectiveness of combined arms and deep operations—would prove prophetic.`,
        hints: [
            { cost: 20, text: "Light tanks dominated armored forces from about 1930 to 1940. Medium tanks with heavier armor became standard during WWII (1939-1945).", explanation: "The tank development stage helps date this battle." },
            { cost: 25, text: "Military aviation transitioned from biplanes to monoplanes between 1935 and 1940. Mixed biplane/monoplane air forces indicate this brief transition period.", explanation: "The aircraft types help narrow the timeframe precisely." }
        ],
        explanation: "This was the Battle of Khalkhin Gol (Nomonhan) in 1939—a massive undeclared war between the Soviet Union and Japan on the Mongolian-Manchurian border. General Georgy Zhukov commanded Soviet forces, using combined-arms tactics that presaged his WWII victories. Japan suffered 18,000+ casualties and signed a neutrality pact in April 1941—freeing Stalin to focus on Germany and convincing Japan to expand south toward US/British colonies rather than north. The mixed biplane/monoplane air force indicates the brief 1935-1940 transition period. Light tanks dominating with medium tanks just entering service also suggests the late 1930s. The neutrality pact lasting 'nearly two years' before a greater test points to 1939.",
        tags: ["pitched-battle", "20th-century", "asia"]
    },
    {
        id: "campaign_013",
        title: "The Lake City Siege",
        actualYear: 1521,
        difficulty: "medium",
        description: `A small band of adventurers from across the ocean—initially fewer than 600 men—conquered a mighty empire of millions. They possessed horses, steel swords, crossbows, and matchlock arquebuses—slow to reload and unreliable in rain, but terrifying to those who had never seen firearms. Their greatest weapon was diplomacy: exploiting resentment against the ruling power to raise armies of local allies numbering in the tens of thousands.

The invaders were initially welcomed into the great capital, a city built on islands in a lake with grand causeways. But tensions erupted into violence, and they were driven out with heavy losses in a desperate nighttime retreat.

They regrouped, built small warships to control the lake, and besieged the capital. The defenders fought with extraordinary courage but were devastated by a disease brought by the invaders, which killed perhaps half the population. After three months of brutal siege, the city fell.

The empire's treasures were seized and sent home. A new colonial society emerged that would endure for three centuries.`,
        hints: [
            { cost: 20, text: "Matchlock arquebuses were the standard portable firearm from roughly 1475 to 1650. Early versions were heavy, slow, and unreliable in wet conditions.", explanation: "The firearm type helps date this battle." },
            { cost: 25, text: "The combination of steel weapons, horses, and firearms against peoples without iron-working or cavalry occurred during the Age of Exploration, roughly 1490-1550.", explanation: "The technological mismatch helps narrow the timeframe." }
        ],
        explanation: "This was the Spanish Conquest of the Aztec Empire (1519-1521). Hernán Cortés landed with ~600 men and conquered Moctezuma II's empire of millions. The 'Noche Triste' (Sad Night) saw the Spanish driven from Tenochtitlan with heavy losses. Cortés allied with Tlaxcala and other peoples resentful of Aztec tribute, besieged the city with 13 brigantines, and took it after 80 days. Smallpox killed perhaps half the defenders. The empire became New Spain until Mexican independence in 1821. For dating: matchlock arquebuses were standard 1475-1650. Steel weapons, horses, and firearms against peoples without iron-working or cavalry occurred during the Age of Exploration (1490-1550). 'Three centuries' of colonial rule ending ~1820 points back to conquest ~1520.",
        tags: ["conquest", "16th-century", "americas"]
    },
    {
        id: "campaign_014",
        title: "The Winter Battle",
        actualYear: 1807,
        difficulty: "medium",
        description: `Two great armies clashed in a frozen landscape, fighting through a blizzard that reduced visibility to yards. The battle lasted fourteen hours, with neither side able to gain decisive advantage. By nightfall, over 40,000 men lay dead or wounded in the snow.

Infantry fought with smoothbore flintlock muskets in dense columns, where volume of fire and shock mattered more than aimed shots. Artillery fired canister at close range and solid shot at distance; explosive shells existed but were unreliable. The defending army had marched through the night to meet the invaders, arriving exhausted.

The attacker launched assault after assault against a fortified cemetery and churchyard, but the defenders held. A massive cavalry charge—perhaps 10,000 horsemen—briefly broke through the center before being driven back.

As darkness fell, both armies were fought out. The attackers claimed victory because the defenders retreated, but it was pyrrhic at best. The attacking commander, used to decisive triumphs, had suffered his first serious check. The war would continue for months more before a treaty temporarily ended hostilities.`,
        hints: [
            { cost: 20, text: "Smoothbore flintlock muskets in column formations were the standard of European warfare from about 1792 to 1815. Rifled muskets and looser formations came later.", explanation: "The infantry tactics help date this battle." },
            { cost: 25, text: "Artillery using canister and solid shot (before reliable explosive shells) indicates the period from 1700 to about 1840. Explosive shells became reliable in the 1840s-1850s.", explanation: "The artillery ammunition helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Eylau (1807). Smoothbore flintlock muskets were standard from 1700-1840, but the dense column formations (rather than thin lines) narrow this to the Napoleonic era (1792-1815). The unreliable explosive shells indicate pre-1850s; reliable shells appeared in the 1840s-1850s.",
        tags: ["pitched-battle", "19th-century", "eastern-europe", "napoleonic"]
    },
    {
        id: "campaign_015",
        title: "The Frozen Lake",
        actualYear: 1242,
        difficulty: "hard",
        description: `A military order of warrior-monks, veterans of holy wars in distant lands, expanded aggressively into pagan territories along the northern seas. They built stone castles, forced conversions, and enslaved those who resisted. When they pressed too far into the territory of a great eastern principality, they met a formidable defender.

The decisive battle occurred on a frozen lake in early spring. The knights wore full chain mail with great helms and were mounted on great warhorses. They charged across the ice toward a force of infantry with spears and axes, and lighter cavalry armed with composite bows—a steppe tradition. But the weight of their armor became their doom—whether the ice broke beneath them or they simply could not maneuver effectively, accounts differ, but the result was catastrophic defeat.

The victory became legendary, a symbol of resistance against western aggression. The military order was forced to make peace and never again threatened the eastern lands.`,
        hints: [
            { cost: 20, text: "Full chain mail with great helms (but no plate armor) was standard for heavy cavalry from about 1150 to 1300. Plate armor began appearing around 1300 and dominated by 1400.", explanation: "The armor type helps date this battle." },
            { cost: 25, text: "Composite bows used from horseback were a steppe military tradition from ancient times through the medieval period, roughly until firearms made them obsolete around 1500-1600.", explanation: "The combination of steppe cavalry traditions with crusading military orders narrows the timeframe." }
        ],
        explanation: "This was the Battle on the Ice (1242) at Lake Peipus. Chain mail with great helms but no plate armor was standard from 1150-1300—earlier knights had less head protection, later ones had plate. Military-religious orders expanding into Baltic pagan territories was specifically a 13th century phenomenon, before these areas were fully Christianized.",
        tags: ["pitched-battle", "13th-century", "eastern-europe"]
    },
    {
        id: "campaign_016",
        title: "The Relief of the Capital",
        actualYear: 1683,
        difficulty: "medium",
        description: `A great eastern empire launched what would prove to be its final major offensive into the heart of the continent. An army of perhaps 150,000 men marched on a major capital city, seat of an ancient dynasty.

The garrison of 15,000 held out for two months while their emperor desperately assembled a relief force. The attackers dug extensive siege works and tunnels, repeatedly trying to breach the walls. But they made a critical error: they never fully encircled the city, allowing messengers and some supplies to slip through.

The relief force, some 70,000 strong and led by a warrior-king from a neighboring realm, arrived in the nick of time. It included heavy cavalry with lances—one of the last great lance charges in European warfare. Both sides used flintlock muskets, though the eastern attackers also employed large numbers of archers and irregulars. The decisive attack came down from the hills overlooking the city. The eastern army, caught between the garrison and the relievers, collapsed. Thousands died in the pursuit, and the army's camp—packed with treasure intended for a captured city—fell into the victors' hands.

This defeat marked the permanent turning of the tide. Over the following decades, the empire would lose vast territories in a series of wars.`,
        hints: [
            { cost: 20, text: "Heavy cavalry lance charges became rare in Western Europe after about 1650, as firearms made such tactics costly. Eastern European cavalry, particularly Polish hussars, retained lance tactics into the late 17th century.", explanation: "The lance charge helps date this battle." },
            { cost: 25, text: "Flintlock muskets became the European standard around 1650-1700. Forces mixing flintlocks with archers indicate a clash between modernized and traditional armies in the late 17th century.", explanation: "The mixed weapons technologies help narrow the timeframe." }
        ],
        explanation: "This was the Siege of Vienna in 1683. Heavy cavalry lance charges became rare in Western Europe after ~1650, but Polish hussars retained lance tactics into the late 17th century. Flintlock muskets became standard around 1650-1700. An army mixing flintlocks with archers indicates a clash between modernized and traditional forces in the late 17th century. The Ottoman 'final major offensive' followed by territorial losses matches the post-1683 decline.",
        tags: ["siege", "17th-century", "central-europe"]
    },
    {
        id: "campaign_017",
        title: "The Summer Offensive",
        actualYear: 1944,
        difficulty: "medium",
        description: `The defenders launched their greatest offensive of the war, aimed at destroying an entire enemy army group. Over 2.3 million troops, 5,200 tanks, and 5,300 aircraft were committed to the operation. The attackers achieved complete surprise despite the massive buildup.

The tanks included heavy models with powerful guns—tank design had evolved dramatically since the war's start. Ground-attack aircraft provided close support, destroying enemy armor and disrupting reinforcements. The offensive used a new doctrine: deep operations. Rather than pushing the enemy back in a continuous line, armored spearheads would penetrate weak points and race into the rear, encircling entire armies. Infantry would follow to reduce the pockets.

Within weeks, the enemy army group had effectively ceased to exist. Over 400,000 soldiers were killed or captured. Dozens of divisions were destroyed. The front advanced hundreds of miles, liberating vast territories that had been occupied for three years.

The offensive demonstrated the attacking army's mastery of combined arms warfare at a scale never before seen. The enemy would never recover the strategic initiative on this front.`,
        hints: [
            { cost: 15, text: "Tank design evolved rapidly during WWII (1939-1945). Heavy tanks with powerful guns became standard only in 1943-1945, after early-war light tanks proved inadequate.", explanation: "The tank evolution helps date this battle." },
            { cost: 20, text: "Routine air-ground coordination with dedicated ground-attack aircraft was perfected in 1943-1945. Earlier in the war, such coordination was improvised and less effective.", explanation: "The combined arms doctrine helps narrow the timeframe." }
        ],
        explanation: "This was Operation Bagration (1944). Heavy tanks with powerful guns only became standard in 1943-1945—earlier WWII tanks were lighter with weaker guns. Routine air-ground coordination with dedicated ground-attack aircraft was perfected 1943-1945; earlier in the war it was improvised. Deep operations doctrine at this scale (encircling entire armies) indicates late WWII. 'Occupied for three years' points to 1944 (territories lost in 1941).",
        tags: ["offensive", "20th-century", "eastern-europe", "ww2"]
    },
    {
        id: "campaign_018",
        title: "The Mountain Pass",
        actualYear: 1212,
        difficulty: "hard",
        description: `Kingdoms that had been slowly pushing back against their southern neighbors for centuries faced a new threat: a powerful dynasty from across the sea had reinvigorated the enemy cause. After suffering a catastrophic defeat some years earlier, the northern kings prepared for a decisive campaign.

For once, the perpetually quarreling kingdoms united. Religious authorities declared a holy war, and knights from beyond the mountains joined the local forces. An army perhaps 12,000 strong—large for the time and place—marched south into enemy territory.

The knights wore chain mail hauberks with surcoats; great helms were coming into fashion but not yet universal. Infantry included crossbowmen and spearmen. The decisive battle was fought in a mountain pass. The heavily armored knights faced a larger force that included fierce warriors from across the strait, relying heavily on light cavalry and archers. The battle turned when a force of cavalry, guided by a local shepherd through hidden paths, struck the enemy flank at a critical moment.

The victory shattered the enemy's power forever. The great southern cities would fall over the following decades. One small mountain kingdom would survive for centuries more—but only by paying tribute and avoiding provocation.`,
        hints: [
            { cost: 20, text: "Chain mail hauberks with surcoats were standard for knights from about 1150 to 1300. Great helms came into fashion around 1200 and were universal by 1250.", explanation: "The armor development helps date this battle." },
            { cost: 25, text: "Crossbowmen as the primary missile infantry (rather than longbowmen or handgunners) indicates the period from about 1100 to 1350 in most of Europe.", explanation: "The infantry weapons help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Las Navas de Tolosa in 1212. Chain mail with surcoats was standard 1150-1300. Great helms 'coming into fashion but not yet universal' specifically indicates the period around 1200—they emerged c. 1200 and were universal by 1250. Crossbowmen as primary missile troops (not longbowmen or handgunners) indicates 1100-1350. These factors combine to place this in the early 13th century.",
        tags: ["pitched-battle", "13th-century", "southern-europe"]
    },
    {
        id: "campaign_019",
        title: "The Emperor's Defeat",
        actualYear: 1071,
        difficulty: "hard",
        description: `A great empire that had endured for centuries faced a new threat from the east: nomadic warriors who had recently converted to a new faith and carved out a sultanate from the old caliphate's remains. The emperor gathered his army—perhaps 40,000 men—and marched east to confront them.

The imperial army was a professional force, built around heavily armored cavalry wearing lamellar armor—overlapping plates laced together—who fought with lance and sword. Many units were mercenaries from distant lands. The emperor's plan was to bring the elusive enemy to battle and destroy them with superior discipline and equipment.

But the battle went wrong from the start. The enemy relied on horse archers using composite bows, employing feigned retreats to draw pursuing units into ambushes. Treachery or confusion caused part of the imperial army to withdraw prematurely. The emperor, fighting bravely at the head of his guards, was surrounded and captured—the first emperor taken prisoner by a foreign enemy in the empire's long history.

The defeat opened the empire's heartland to invasion. Within a generation, vast territories would be lost forever, and the empire would never fully recover its former power.`,
        hints: [
            { cost: 20, text: "Lamellar armor (overlapping plates laced together) was standard for heavy cavalry in eastern empires from about 600 to 1300, especially Byzantine and Central Asian forces.", explanation: "The armor type helps date this battle." },
            { cost: 25, text: "Composite bow horse archers using feigned flight tactics were the signature of steppe peoples from ancient times through the medieval period, roughly until firearms made such tactics obsolete.", explanation: "The cavalry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Manzikert in 1071. Lamellar armor (overlapping laced plates) was Byzantine standard from 600-1300, narrowing to medieval. The 'first emperor captured by a foreign enemy' is the key—Byzantine emperors had ruled since 330 CE, and this unprecedented capture points to a specific catastrophic defeat. The empire 'never fully recovering' narrows it to the 1071 disaster that opened Anatolia to Turkish settlement.",
        tags: ["pitched-battle", "11th-century", "asia-minor"]
    },
    {
        id: "campaign_020",
        title: "The Monsoon Battle",
        actualYear: 1757,
        difficulty: "medium",
        description: `Two great trading companies, backed by their home governments, fought for control of a subcontinent rich in textiles, spices, and vast populations. The local rulers, their empire fragmenting after a dynasty's decline, found themselves caught between these competing powers.

A military officer led a small force of 3,000—of whom only about 800 were troops from his homeland, the rest being locally recruited soldiers trained in western methods—against an army claimed to number 50,000. The western-trained infantry used flintlock muskets and bayonets, forming disciplined firing lines. The enemy army included war elephants. The battle was fought during monsoon season, with rain threatening to render firearms useless.

The decisive factor was artillery and discipline. The trained gunners kept their powder dry, while the enemy's fell victim to the rain. When the enemy cavalry charged, disciplined volleys drove them back. By evening, the small force had won one of the most lopsided victories in military history.

This battle established western dominance over the subcontinent's richest province. Within a century, a trading company would control virtually the entire region.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with socket bayonets in disciplined linear formations were the standard European infantry system from about 1700 to 1840.", explanation: "The infantry weapons and tactics help date this battle." },
            { cost: 25, text: "War elephants were used in South Asian warfare from ancient times until the 18th century, when disciplined musket fire made them increasingly obsolete.", explanation: "The war elephants help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Plassey in 1757. Flintlock muskets with socket bayonets were the European infantry standard from 1700-1840. War elephants were used in South Asian warfare until the 18th century, when disciplined musket fire made them obsolete. The 'trading company' context and 'a century' until complete control (British Raj 1858) combine to date this to the mid-18th century.",
        tags: ["pitched-battle", "18th-century", "south-asia", "colonial"]
    },
    {
        id: "campaign_021",
        title: "The Mountain Front",
        actualYear: 1916,
        difficulty: "easy",
        description: `Two powers clashed for control of mountain territories along their shared border. The fighting took place at extreme altitudes, some positions perched on glaciers and cliffs 10,000 feet above sea level. Engineers carved fortifications into solid rock and strung cable cars to supply positions accessible by no other means.

Machine guns dominated the defensive positions, making frontal assaults suicidal. Artillery ranged from field guns to massive siege howitzers. In a single day, attackers detonated mines containing nearly 50 tons of explosives beneath a mountain fortress, killing hundreds in an instant. Avalanches—sometimes natural, sometimes deliberately triggered—claimed more lives than enemy fire in many sectors.

The fighting continued for years with minimal territorial change. Armies attacked again and again up near-vertical slopes, suffering enormous casualties for the capture of individual peaks. Only the collapse of one combatant's larger alliance, far from these mountains, finally ended the stalemate.

The war would reshape the region's borders, transferring territories with significant populations who spoke the losing side's language.`,
        hints: [
            { cost: 15, text: "Machine guns making frontal assaults suicidal was the defining characteristic of World War I (1914-1918). This pattern appeared on all fronts of that conflict.", explanation: "The machine gun dominance helps date this battle." },
            { cost: 20, text: "Massive siege howitzers (like those weighing over 40 tons) were unique to WWI's industrial-scale warfare. Earlier wars couldn't produce or transport such weapons.", explanation: "The artillery scale helps narrow the timeframe." }
        ],
        explanation: "This was the Italian Front of WWI (1915-1918). Machine guns making frontal assaults suicidal was the defining characteristic of WWI—earlier wars had machine guns but not enough to create continuous killing zones. Massive siege howitzers (40+ tons) were unique to WWI's industrial warfare; earlier technology couldn't produce them, later doctrine didn't require them. Years of stalemate with minimal territorial change was specifically the 1914-1918 pattern.",
        tags: ["trench-warfare", "20th-century", "southern-europe", "ww1"]
    },
    {
        id: "campaign_022",
        title: "The Pyramid Campaign",
        actualYear: 1798,
        difficulty: "medium",
        description: `A young general, already renowned for spectacular victories, led an army across the sea to an ancient land. The expedition aimed to threaten enemy trade routes and perhaps eventually strike at their distant colonies. The expedition included scientists and scholars alongside soldiers—an Enlightenment-era approach to conquest.

The invasion force of 40,000 encountered a medieval army of slave-soldier cavalry—mounted warriors who had ruled this land for centuries. In a battle fought within sight of ancient monuments, infantry squares with flintlock muskets and socket bayonets, artillery at the corners, smashed charge after charge. Thousands of cavalry died for minimal losses among the invaders.

But the conquest proved hollow. An enemy fleet destroyed the invasion fleet, stranding the army. An attempt to push northward failed at the siege of an ancient port city. Disease, particularly plague and ophthalmia, ravaged the army.

The general eventually slipped away, abandoning his army to return home and seize power. His stranded soldiers held on for over two years before surrendering.`,
        hints: [
            { cost: 20, text: "Infantry squares with flintlock muskets and socket bayonets were the standard European defensive formation from about 1700 to 1850, especially effective against cavalry.", explanation: "The infantry tactics help date this battle." },
            { cost: 25, text: "Military expeditions including scientists and scholars were an Enlightenment phenomenon, roughly 1750-1820, when systematic knowledge-gathering accompanied conquest.", explanation: "The inclusion of scholars helps narrow the timeframe." }
        ],
        explanation: "This was Napoleon's Egyptian Campaign (1798-1801). Infantry squares with flintlock muskets and socket bayonets were standard 1700-1850 for defeating cavalry. Military expeditions including scientists and scholars was an Enlightenment phenomenon (roughly 1750-1820). The 'slave-soldier cavalry that had ruled for centuries' refers to the Mamluks, established 1250 and still dominant in Egypt until this campaign ended them.",
        tags: ["invasion", "18th-century", "north-africa", "napoleonic"]
    },
    {
        id: "campaign_023",
        title: "The Crimean Siege",
        actualYear: 1854,
        difficulty: "medium",
        description: `An alliance of western powers attacked an eastern empire's greatest naval base, aiming to limit its expansion into warm-water seas. The besieging army arrived expecting a quick victory but would spend eleven months in the trenches.

Conditions in the siege camps were horrific. Disease killed far more than combat—cholera, dysentery, and typhus swept through the armies. Medical care was revolutionized during this campaign, as reformers exposed the horrific conditions through telegraphed reports to home. Infantry used a mix of smoothbore muskets and new rifles—the transition was underway but incomplete.

The fighting featured dramatic cavalry charges that would become legendary. One charge, born of confusion and miscommunication, sent a brigade of light cavalry into a valley swept by artillery fire. The brigade was shattered, though survivors reached the enemy guns.

When the fortress finally fell, the eastern empire was forced to accept humiliating terms, giving up its claims in the region and accepting limits on its naval power.`,
        hints: [
            { cost: 20, text: "The transition from smoothbore muskets to rifles occurred in the 1850s. Wars before 1850 used smoothbores; wars after 1860 used rifles almost exclusively.", explanation: "The weapons transition helps date this battle." },
            { cost: 25, text: "Telegraph enabling rapid war correspondence to civilians was revolutionary in the 1850s. Earlier wars had weeks of delay; later wars took this for granted.", explanation: "The communication technology helps narrow the timeframe." }
        ],
        explanation: "This was the Siege of Sevastopol (1854-1855) during the Crimean War. The transition from smoothbore muskets to rifles occurred in the 1850s: the Crimean War was one of the first where rifles saw significant use, but smoothbores remained common. By 1860, rifles were universal. Telegraph war correspondence reaching civilians within days was first possible in this war—earlier conflicts had no rapid long-distance communication. The combination of these transitional technologies narrows this to the mid-1850s.",
        tags: ["siege", "19th-century", "eastern-europe"]
    },
    {
        id: "campaign_024",
        title: "The Island Campaign",
        actualYear: 1943,
        difficulty: "easy",
        description: `After early disasters, the defenders of a vast ocean finally took the offensive. Their strategy was not to recapture every enemy-held island but to seize key positions that could support airfields and naval bases while isolating and bypassing strong enemy garrisons.

The fighting was brutal. On jungle-covered islands, defenders had constructed elaborate bunker networks and would fight virtually to the last man. Flamethrowers, tank-infantry cooperation, and massive naval bombardments became essential. Carrier-based aircraft provided air cover far from any land base. New landing craft could beach directly and disgorge troops and vehicles. Casualty rates for attackers sometimes exceeded 25%.

As the island chain fell, enemy supply lines were severed and their main bases came within bomber range. The final invasions would never be necessary—new weapons of unprecedented destructive power forced a surrender.`,
        hints: [
            { cost: 15, text: "Carrier-based aircraft capable of providing air cover far from land bases were developed in the 1930s and became decisive in the 1940s.", explanation: "The carrier aviation capability helps date this battle." },
            { cost: 20, text: "Landing craft that could beach directly and unload vehicles were developed specifically for WWII (1939-1945). Earlier amphibious operations used improvised methods.", explanation: "The landing craft technology helps narrow the timeframe." }
        ],
        explanation: "This was the Pacific Island Hopping Campaign of WWII (1943-1945). Carrier-based aircraft capable of providing air cover far from land bases were developed in the 1930s and became decisive in the 1940s. Landing craft that could beach directly and unload vehicles were developed specifically for WWII. The 'new weapons of unprecedented destructive power' (atomic bombs) ending the war narrows this to 1945.",
        tags: ["amphibious", "20th-century", "pacific", "ww2"]
    },
    {
        id: "campaign_025",
        title: "The People's March",
        actualYear: 1096,
        difficulty: "hard",
        description: `A call to holy war sparked mass enthusiasm across the western lands. While nobles carefully organized their expeditions, impatient crowds of peasants, minor knights, and urban poor set out ahead of them, led by a charismatic preacher and a minor lord.

These early warriors proved more dangerous to fellow believers than to their intended enemy. Most were poorly equipped—farming tools, clubs, or simple spears rather than proper weapons. Marching through the continent, they attacked and massacred local populations, blaming them for ancient wrongs. Thousands perished in these pogroms.

When the survivors reached a great eastern capital, the emperor rushed them across the strait, relieved to move this dangerous rabble away from his city. Within weeks, they had been destroyed—some massacred when they attacked an enemy fortress prematurely, others captured and either killed or sold into slavery.

The proper armies, arriving months later, would prove far more formidable—heavy cavalry supported by infantry with crossbows and spears. But this first wave demonstrated both the power of religious fervor to mobilize masses and its terrible potential for atrocity.`,
        hints: [
            { cost: 20, text: "Peasant armies with improvised weapons (farming tools, clubs) were a feature of medieval popular movements from about 1000 to 1500. Later periods had more organized militias.", explanation: "The peasant equipment helps date this battle." },
            { cost: 25, text: "Heavy cavalry as the striking arm with crossbow and spear infantry was the standard western European military system from about 1050 to 1350.", explanation: "The professional army composition helps narrow the timeframe." }
        ],
        explanation: "This was the People's Crusade of 1096, the chaotic first wave of the First Crusade. Heavy cavalry with crossbow infantry was standard from 1050-1350, but the specific context—a call to holy war sparking peasant armies that attacked local populations before being destroyed overseas—matches only the First Crusade. Professional crusader armies using heavy cavalry and crossbows arrived 'months later,' confirming the late 11th century.",
        tags: ["crusade", "11th-century", "middle-east"]
    },
    {
        id: "campaign_026",
        title: "The River Fortress",
        actualYear: 1863,
        difficulty: "easy",
        description: `Control of a great river would split the rebellion in two. For nearly a year, forces tried various approaches to capture the last enemy stronghold on the river—a fortress city perched on high bluffs that commanded all river traffic.

Direct assault proved impossible; the bluffs were too strong. An attempt to dig a canal and bypass the fortress failed. An expedition through swamps and flooded forests went nowhere. The commander seemed stuck.

Then came a bold gambit: run ironclad gunboats—armored with iron plates to resist cannon fire—past the fortress at night, march the army down the opposite bank, cross the river below the city, and approach from the landward side. It worked. In three weeks, the army won five battles and surrounded the fortress.

A siege of six weeks followed. Both sides dug extensive trench networks. Starvation finally forced the garrison to surrender—along with 30,000 prisoners. The river now flowed unimpeded. The rebellion was cut in half, and one of its most important supply lines was severed forever.`,
        hints: [
            { cost: 15, text: "Ironclad warships (armored with iron plates) first saw combat in 1862. They dominated river and coastal warfare through the 1860s before steel hulls replaced them.", explanation: "The ironclad technology helps date this battle." },
            { cost: 20, text: "Extensive trench networks during sieges became common in the 1860s, presaging World War I. Earlier sieges used more traditional approaches.", explanation: "The siege tactics help narrow the timeframe." }
        ],
        explanation: "This was the Vicksburg Campaign of 1863 during the American Civil War. Ironclad gunboats (armored with iron plates) first saw combat in 1862 and dominated river warfare through the 1860s—earlier navies were wooden, later ones used steel hulls. Extensive trench networks during sieges became common in the 1860s, presaging WWI. These technologies indicate the 1860s specifically.",
        tags: ["siege", "19th-century", "north-america", "civil-war"]
    },
    {
        id: "campaign_027",
        title: "The Sack of the Caliphate",
        actualYear: 1258,
        difficulty: "medium",
        description: `The greatest city of a major civilization—seat of religious authority, center of learning and culture, home to perhaps a million souls—faced the wrath of the steppes. An army of 150,000 swept out of the east, commanded by a grandson of the great conqueror who had first united the horse peoples a generation earlier.

The attacking army included siege engineers from a far eastern empire, expert in building catapults. The warriors relied primarily on compound bows from horseback. The religious leader, descendant of a line that had ruled for five centuries, trusted his city's walls and the weight of tradition. Neither saved him. The walls were breached within weeks. The city's population was systematically massacred—estimates range from hundreds of thousands to over a million dead.

Libraries containing centuries of accumulated wisdom were destroyed. Canals that had irrigated the land for millennia were ruined. The religious leader himself was executed in a manner designed to avoid spilling royal blood on the ground.

The destruction was so complete that the region's population and prosperity would not recover for centuries.`,
        hints: [
            { cost: 20, text: "Chinese siege engineers accompanying steppe armies was unique to the Mongol conquests of the 13th century (roughly 1210-1280). Earlier and later steppe peoples lacked this capability.", explanation: "The siege engineering helps date this battle." },
            { cost: 25, text: "Compound bows from horseback were the steppe warrior's signature weapon from ancient times through the medieval period, roughly until firearms made them obsolete around 1500-1600.", explanation: "The weapons provide a broad timeframe that other clues narrow." }
        ],
        explanation: "This was the Mongol Siege of Baghdad in 1258. Chinese siege engineers accompanying steppe armies was unique to the Mongol conquests (1210-1280)—earlier steppe peoples lacked siege capability, later ones didn't have Chinese expertise. The religious leader's dynasty 'ruling for five centuries' points to the Abbasid Caliphate (750-1258). The commander being a 'grandson of the great conqueror' (Genghis Khan died 1227) dates this to the mid-13th century.",
        tags: ["siege", "13th-century", "middle-east", "mongol"]
    },
    {
        id: "campaign_028",
        title: "The Ski Troops",
        actualYear: 1939,
        difficulty: "medium",
        description: `A great power demanded territory from a small northern neighbor, claiming security concerns. When negotiations failed, the larger power invaded with overwhelming force—perhaps 450,000 men against 300,000 defenders. The world expected a quick victory.

Instead, the small nation fought back with extraordinary tenacity and skill. Defenders used bolt-action rifles and submachine guns; their ski troops struck with mobility that motorized forces couldn't match in deep snow. They improvised incendiary devices from bottles filled with flammable liquid to destroy tanks. Entire divisions were surrounded and destroyed in the frozen wilderness.

The larger power's army was poorly prepared for winter warfare and led by officers promoted for political loyalty rather than competence. Tanks and vehicles froze solid. Troops in summer uniforms suffered massive frostbite casualties.

After three months, the larger power finally broke through the defensive lines through sheer weight of numbers. The smaller nation was forced to accept a harsh peace, surrendering more territory than originally demanded. But the display of military incompetence would lead other powers to fatally underestimate them.`,
        hints: [
            { cost: 20, text: "Bolt-action rifles and submachine guns together as standard infantry weapons indicate the 1930s-1940s. Earlier periods lacked submachine guns; later periods used assault rifles.", explanation: "The weapon combination helps date this battle." },
            { cost: 25, text: "Improvised bottle incendiary devices against tanks became famous in 1939-1940 and were widely imitated afterward. The tactic was new at this time.", explanation: "The anti-tank improvisation helps narrow the timeframe." }
        ],
        explanation: "This was the Winter War (1939-1940). Bolt-action rifles and submachine guns together as standard infantry weapons indicates the 1930s-1940s—earlier periods lacked submachine guns, later ones used assault rifles. Improvised incendiary bottles ('Molotov cocktails') against tanks became famous in 1939-1940; the tactic was new at this time. Officers promoted for political loyalty and the resulting military incompetence refers specifically to the Soviet purges of 1937-1938.",
        tags: ["winter-war", "20th-century", "northern-europe"]
    },
    {
        id: "campaign_029",
        title: "The Usurper's End",
        actualYear: 1485,
        difficulty: "hard",
        description: `Two branches of a royal family had been fighting for the throne for thirty years. The wars had already seen several kings crowned, murdered, or killed in battle. Now a claimant with a tenuous claim—descended through his mother's line and long exiled abroad—landed with a small army to try his luck.

The exiled claimant had only about 5,000 men, many of them foreign mercenaries. The reigning king commanded 12,000 or more. Knights still wore full plate armor and fought mounted with lance and sword. Longbowmen remained important, though their dominance was fading as firearms improved. But the king was unpopular, and powerful nobles waited to see which side would prevail before committing their forces.

The decisive battle lasted only two hours. Key nobles switched sides or stood aside at the critical moment. The king, fighting bravely in the final melee, was struck down—the last king of this realm to die in battle.

The new king would establish a dynasty that would rule for over a century, transforming the realm from a medieval kingdom into an early modern state.`,
        hints: [
            { cost: 20, text: "Full plate armor for mounted knights was standard from about 1400 to 1550. Before 1400, chain mail dominated; after 1550, firearms made heavy armor increasingly impractical.", explanation: "The armor type helps date this battle." },
            { cost: 25, text: "Longbows were dominant in English armies from about 1340 to 1480. Firearms began replacing them in the late 15th century and were clearly superior by 1550.", explanation: "The longbow-to-firearms transition helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Bosworth Field in 1485, ending the Wars of the Roses. Full plate armor was standard for wealthy fighters from 1400-1550—earlier knights wore mail with plate additions, later firearms made heavy armor impractical. Longbows were dominant in English armies 1340-1480; firearms began replacing them in the late 15th century. The combination of peak plate armor with longbows fading indicates the 1470s-1490s transition.",
        tags: ["pitched-battle", "15th-century", "western-europe"]
    },
    {
        id: "campaign_030",
        title: "The Independence Struggle",
        actualYear: 1821,
        difficulty: "hard",
        description: `A subject people who traced their heritage to an ancient civilization launched a war of independence against an empire that had ruled them for nearly four centuries. The uprising began in the countryside before spreading to the merchant classes of the towns.

The rebellion attracted romantic volunteers from across the continent—adventurers and idealists who saw the struggle as a resurrection of ancient glory. Several foreign volunteers died before seeing much combat, but their deaths galvanized international sympathy for the cause.

The ruling empire, though vast, was weakened by internal problems and faced other restive populations. Infantry on both sides fought with smoothbore flintlock muskets. But rebel disunity repeatedly undermined the cause. Different factions fought each other even as they fought the common enemy. Only intervention by three great powers, whose combined fleet of wooden sailing warships with broadside cannon destroyed the imperial navy, finally secured independence.

The new nation, when it emerged, was far smaller than the territory its people inhabited.`,
        hints: [
            { cost: 20, text: "Wooden sailing warships with broadside cannon dominated naval warfare until about 1850. Steam power began transforming navies in the 1840s-1860s.", explanation: "The naval technology helps date this battle." },
            { cost: 25, text: "Smoothbore flintlock muskets were standard infantry weapons from about 1700 to 1840. Percussion caps and rifled barrels came in the 1840s-1850s.", explanation: "The infantry weapons help narrow the timeframe." }
        ],
        explanation: "This was the Greek War of Independence (1821-1829). Wooden sailing warships with broadside cannon dominated until 1850, when steam power began transforming navies. Smoothbore flintlock muskets were standard 1700-1840; percussion caps came in the 1840s. 'Nearly four centuries' of rule points to the Ottoman conquest of Greece (1453-1460s). These factors combine to indicate the early 19th century.",
        tags: ["independence", "19th-century", "southern-europe"]
    },
    {
        id: "campaign_031",
        title: "The Castle Builders",
        actualYear: 1282,
        difficulty: "hard",
        description: `A mountainous principality had maintained its independence for centuries, raiding the lowlands and retreating into its fastnesses when retribution came. But a powerful king, fresh from crusade and determined to impose order, launched a methodical campaign of conquest.

The first invasion ended in disaster when the prince ambushed the invading army in a narrow pass, killing the king's commander. But the king returned with overwhelming force—perhaps 15,000 men, an enormous army for the era—and a systematic plan.

Rather than chase the defenders through the mountains, the invaders built a ring of massive stone castles, each within a day's march of the next, slowly strangling the principality. The castles featured concentric walls, round towers proof against mining, and arrow loops covering every approach—the most advanced military architecture of the age. Crossbowmen provided the main missile power; longbows were used by the defenders but had not yet become the specialty of their conquerors.

The prince was eventually killed in a skirmish, his brother captured and executed. The principality was formally annexed, and its native laws were slowly replaced by the conqueror's. The great castles still stand as monuments to the conquest.`,
        hints: [
            { cost: 20, text: "Concentric castles with round towers (resistant to mining) represented cutting-edge military architecture from roughly 1180 to 1350. Earlier castles had square towers; later fortifications adapted to cannon.", explanation: "The castle design helps date this battle." },
            { cost: 25, text: "Crossbows dominated as the main missile weapon from about 1100 to 1350. The longbow became dominant in English armies after about 1340.", explanation: "The missile weapons help narrow the timeframe." }
        ],
        explanation: "This was Edward I's conquest of Wales (1277-1283). Concentric castles with round towers (resistant to mining) were cutting-edge military architecture from 1180-1350; earlier castles had square towers, later fortifications adapted to cannon. Crossbows dominated as the main missile weapon 1100-1350. The longbow became dominant in English armies only after about 1340. This combination indicates the late 13th century.",
        tags: ["conquest", "13th-century", "western-europe"]
    },
    {
        id: "campaign_032",
        title: "The Cavalry Disaster",
        actualYear: 1876,
        difficulty: "medium",
        description: `A powerful nation sought to confine indigenous peoples to designated areas, opening their traditional lands to settlement and mining. When many refused to comply, the army launched a summer campaign to force their submission.

The campaign involved multiple columns converging on the disputed territory. But one column, perhaps 600 cavalry and infantry, encountered a gathering of warriors far larger than expected—perhaps 2,000 or more, better armed than anticipated and fighting for their way of life. The cavalry were armed with single-shot carbines. The warriors carried a mix of weapons—some had repeating rifles obtained through trade, others had single-shot rifles, muzzleloaders, or bows. Archaeological evidence suggests a significant minority had repeaters, giving them a rate-of-fire advantage in those encounters.

A portion of the force, over 200 men, was surrounded on a hilltop and annihilated. None survived. The commander, a famous officer known for his aggressive tactics, died with his men. The disaster shocked the nation and made the indigenous leaders legendary—though their victory only delayed their eventual defeat by a few years.

The battle became one of the most analyzed in the nation's military history, debated for generations.`,
        hints: [
            { cost: 20, text: "Single-shot breech-loading carbines were standard cavalry weapons from about 1865 to 1890. Repeating rifles existed but were not yet standard military issue.", explanation: "The cavalry weapons help date this battle." },
            { cost: 25, text: "The mix of repeating rifles, single-shot rifles, and traditional weapons among Plains peoples, while the U.S. Army still carried single-shot carbines, was characteristic of the 1870s American frontier.", explanation: "The weapon mix helps narrow the timeframe precisely." }
        ],
        explanation: "This was the Battle of the Little Bighorn (1876). Single-shot breech-loading carbines were standard cavalry weapons 1865-1890—earlier cavalry had muzzle-loaders, later cavalry had magazine rifles. Repeating rifles available through trade but not yet standard military issue was characteristic of the 1870s. The policy of confining indigenous peoples to reservations while opening lands to mining was the specific context of the 1870s American West.",
        tags: ["pitched-battle", "19th-century", "north-america"]
    },
    {
        id: "campaign_033",
        title: "The River Crossing",
        actualYear: 1675,
        difficulty: "hard",
        description: `A great northern king sought to break his enemy's alliance by knocking out its smaller partner. His army of 30,000 marched into enemy territory, aiming to threaten the capital and force a favorable peace.

The enemy commander, a brilliant young prince fighting for his dynasty's survival, harried the invaders while avoiding pitched battle. When the northerners attempted to cross a river, the prince saw his opportunity. He attacked the army while it was divided, half on each bank.

Infantry on both sides fought with matchlock muskets and pikes in roughly equal proportion. Cavalry used wheel-lock or early flintlock pistols, firing at range rather than charging home with sabers. The battle was a slaughter. Unable to reinforce each other across the swollen river, each half of the army was defeated in detail. Over 15,000 of the northerners were killed or captured. The king himself barely escaped.

The defeat was a turning point: the northern kingdom's aura of invincibility was broken. Though it remained powerful for decades more, this battle marked the beginning of a long decline, while the prince's realm began its rise to regional dominance.`,
        hints: [
            { cost: 20, text: "Matchlock muskets were standard infantry firearms from roughly 1500 to 1700. The socket bayonet, which allowed muskets to replace pikes entirely, was widely adopted around 1690.", explanation: "The infantry weapons help date this battle." },
            { cost: 25, text: "Cavalry 'caracole' tactics—firing pistols at range rather than charging—were common from about 1550 to 1680, before aggressive shock tactics returned to favor.", explanation: "The cavalry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Fehrbellin (1675). The matchlock muskets with pikes and cavalry caracole tactics place this in the mid-to-late 17th century. The 'northern kingdom's' broken invincibility and the other realm's rise matches Sweden's gradual decline and Brandenburg-Prussia's emergence as a major power.",
        tags: ["pitched-battle", "17th-century", "central-europe"]
    },
    {
        id: "campaign_034",
        title: "The Island Fortress",
        actualYear: 1565,
        difficulty: "medium",
        description: `A great naval power launched an invasion to capture a strategically vital island fortress held by a military order of warrior-monks. The invasion force numbered perhaps 40,000, including elite infantry considered the finest in the world—famous for disciplined arquebus volleys followed by pike charges. The defenders had fewer than 9,000 men, including only 500 knights of the order.

The siege lasted four months in brutal summer heat. The attackers concentrated first on the outlying forts, battering them with cannon and launching assault after assault. Each fort fell eventually, but at terrible cost—thousands of dead for each position taken.

The main fortress held out. Its fortifications featured the new 'trace italienne' design—low, thick walls with angled bastions to deflect cannon fire—absorbing bombardment that would have leveled medieval fortifications. The garrison was reinforced in the final weeks by a relief force from a nearby kingdom. When the attackers finally withdrew, they had lost perhaps 25,000 men. The defenders had lost nearly half their strength but held their ground.

The siege became legendary. The order would rule the island for another two centuries.`,
        hints: [
            { cost: 20, text: "Trace italienne fortifications (low, thick walls with angled bastions) were developed around 1500-1530 and became the standard for resisting cannon by about 1550.", explanation: "The fortification design helps date this battle." },
            { cost: 25, text: "The Spanish tercio (disciplined arquebus volleys with pike charges) dominated European warfare from roughly 1530 to 1630, when linear tactics replaced them.", explanation: "The elite infantry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Great Siege of Malta (1565). Trace italienne fortifications (low, thick walls with angled bastions) were developed 1500-1530 and became standard for resisting cannon by ~1550. The Spanish tercio (arquebus volleys with pike charges) dominated 1530-1630. The order ruling 'another two centuries' until 1798 points back to the 1560s-1590s. These factors combine to indicate the mid-16th century.",
        tags: ["siege", "16th-century", "mediterranean"]
    },
    {
        id: "campaign_035",
        title: "The Steppe Invasion",
        actualYear: 1241,
        difficulty: "medium",
        description: `Armies from the eastern steppes swept into the heart of the continent, defeating every force sent against them. Their strategy combined multiple columns advancing simultaneously, coordinated by a network of messengers that allowed commanders to communicate across hundreds of miles.

The invaders' armies were almost entirely cavalry, equipped with powerful composite bows and trained from childhood in horsemanship and archery. They could cover sixty miles in a day when needed, outmaneuvering any opposing force. Their feigned retreats drew enemies into ambushes.

At one battle, an army of perhaps 25,000—the combined forces of two major kingdoms—met the invaders on an open plain. The defenders advanced in traditional fashion, knights in chain mail hauberks and great helms charging in mass. But the steppe cavalry simply withdrew, showering them with arrows, until the knights' horses were exhausted. Then they closed in for the kill. The defending army was annihilated; both kings died.

Only the death of the supreme leader far to the east caused the invaders to withdraw. They never returned in such force, but the terror of that year would echo for centuries.`,
        hints: [
            { cost: 20, text: "Chain mail hauberks and great helms (without plate armor) were standard for European heavy cavalry from about 1150 to 1300. Plate armor began appearing around 1300.", explanation: "The armor type helps date this battle." },
            { cost: 25, text: "Coordinated multi-column invasions with messenger networks across hundreds of miles were uniquely possible with Mongol military organization (1210-1280).", explanation: "The coordination capability helps narrow the timeframe." }
        ],
        explanation: "This was the Mongol invasion of Europe (1241), including the Battle of Mohi. Chain mail with great helms indicates 1150-1300 (before plate armor). The coordinated multi-column invasion with messenger communication across hundreds of miles was uniquely possible with Mongol military organization. The Mongol conquests occurred 1210-1280.",
        tags: ["invasion", "13th-century", "central-europe", "mongol"]
    },
    {
        id: "campaign_036",
        title: "The Cavalry Charge",
        actualYear: 1605,
        difficulty: "hard",
        description: `A cavalry force of roughly 3,000 faced an infantry army nearly four times its size. The infantry had matchlock muskets and pikes in mixed formations, plus artillery—all the weapons that had made cavalry charges increasingly obsolete. Their commander advanced confidently.

The cavalry commander waited for the right moment. When the infantry was committed and could not easily reform, the horsemen charged at full gallop. The leading cavalry were lancers in heavy armor—a weapon that had fallen from favor in Western Europe but remained decisive on the eastern plains—hitting with the combined weight of man and horse.

The first charge broke the infantry's leading formations. Before the rest could brace, more charges crashed home. The battle lasted barely twenty minutes. The infantry army collapsed, losing over 8,000 killed while the cavalry suffered fewer than 100 dead.

The battle demonstrated that cavalry could still defeat infantry—if the cavalry was exceptionally good and the timing perfect.`,
        hints: [
            { cost: 20, text: "Matchlock muskets with pikes in mixed formations were standard from about 1550 to 1700. The socket bayonet, which allowed muskets to replace pikes, was adopted around 1690.", explanation: "The infantry weapons help date this battle." },
            { cost: 25, text: "Cavalry lancers fell from favor in Western Europe around 1600 but remained effective in Eastern Europe until the 18th century, when firearms became truly universal.", explanation: "The cavalry weapons help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Kircholm in 1605. Matchlock muskets (requiring lit slow-match) were standard from 1500-1700, before flintlocks replaced them. Cavalry lancers in heavy armor had fallen from use in Western Europe by 1600 but remained effective in Eastern Europe until the 18th century. This combination—matchlocks and Eastern European lancer tactics—places the battle in the early 17th century.",
        tags: ["pitched-battle", "17th-century", "eastern-europe"]
    },
    {
        id: "campaign_037",
        title: "The Night Attack",
        actualYear: 1717,
        difficulty: "medium",
        description: `An army besieging a fortress city was itself threatened by a massive relief force—perhaps 150,000 men approaching to break the siege. The besieging commander, with only 40,000 men, faced a dilemma: continue the siege and be crushed, or attack the relief force and risk defeat.

He chose to attack, launching a night assault against the relief force's camp. Infantry advanced through fog and darkness with flintlock muskets and socket bayonets—the standard weapons of the era. Artillery remained behind; this would be decided by close combat. The attackers achieved surprise. Fierce fighting erupted in the enemy camp, soldiers stabbing and shooting in the darkness among the tents.

By morning, the relief force was in retreat, leaving behind thousands of dead and most of their artillery. Their massive cavalry force—sipahis and irregular horsemen—had been useless in the night confusion. The fortress, now without hope of relief, surrendered shortly after. The victory secured the frontier for a generation.`,
        hints: [
            { cost: 20, text: "Flintlock muskets replaced matchlocks as standard military issue around 1680-1700. The socket bayonet, which allowed muskets to replace pikes entirely, was widely adopted in the 1690s-1700s.", explanation: "The infantry weapons help date this battle to the early 18th century." },
            { cost: 25, text: "Night attacks were rare in this era because commanders couldn't control troops in darkness without radio communication. They were typically desperate measures when conventional battle seemed impossible.", explanation: "The tactical choice of a night assault suggests unusual circumstances." }
        ],
        explanation: "This was the Battle of Belgrade in 1717. Flintlock muskets replaced matchlocks as standard around 1680-1700. Socket bayonets (allowing muskets to replace pikes entirely) were widely adopted in the 1690s-1700s. The combination of these as 'standard weapons of the era' indicates post-1700. Night attacks were rare because commanders couldn't control troops without radio—the choice to attack at night against 150,000 men indicates desperate circumstances.",
        tags: ["siege", "18th-century", "balkans"]
    },
    {
        id: "campaign_038",
        title: "The Tank Melee",
        actualYear: 1941,
        difficulty: "medium",
        description: `One of the largest tank battles in history erupted when an invading force encountered a massive armored counterattack. The defenders committed nearly 3,000 tanks against fewer than 1,000 invaders in a single sector.

The numerical advantage meant nothing. The defending tanks—a mix of light tanks with machine guns only, medium tanks with short-barreled guns, and some modern heavy tanks with sloped armor—attacked without coordination, units from different commands advancing piecemeal. Many broke down after long approach marches; poor maintenance and undertrained crews crippled their effectiveness. Those that reached the battle fought without infantry support or effective radio communications.

The invaders had fewer but better-coordinated tanks with long-barreled guns, supported by dive bombers screaming down to destroy armored vehicles from above. They defeated each attack in turn. Over a week of fighting, the defenders lost over 2,000 tanks while inflicting far fewer losses. The counterattack was a catastrophic failure.

The battle demonstrated that numbers meant little without training, coordination, and combined-arms tactics.`,
        hints: [
            { cost: 20, text: "Dive bombers as dedicated anti-tank aircraft were most prominent from 1939-1943. Later in the war, dedicated ground-attack aircraft with cannon replaced them in this role.", explanation: "The dive bomber close air support helps date this battle to early WWII." },
            { cost: 25, text: "Tank battles involving thousands of vehicles on a single front only occurred from 1941-1945, when industrialized nations could produce armor in such quantities.", explanation: "The massive scale of tank warfare helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Brody in 1941. The mix of light tanks (machine guns only), medium tanks (short-barreled guns), and modern heavy tanks (sloped armor) reflects the transitional tank fleets of 1940-1942—earlier armies had fewer tanks, later ones had standardized on medium/heavy designs. Dive bombers as dedicated anti-tank aircraft were most prominent 1939-1943 before ground-attack aircraft with cannon replaced them. Tank battles involving thousands of vehicles only occurred 1941-1945.",
        tags: ["armored-warfare", "20th-century", "eastern-europe", "ww2"]
    },
    {
        id: "campaign_039",
        title: "The Steam Warship",
        actualYear: 1863,
        difficulty: "medium",
        description: `Forces controlling a strategic strait began firing on foreign merchant vessels, attempting to close the passage. A foreign power sent a warship to force the strait open.

The warship was steam-powered, able to maneuver regardless of wind, mounting rifled guns that could strike accurately at ranges the defenders couldn't match. The defenders had purchased various smoothbore cannon from foreign traders but lacked trained crews and proper fortifications. Their small armed vessels—sailing craft without armor—were hopelessly outmatched against steam power.

The engagement was brief. The steam warship destroyed the defending sailing vessels and bombarded the shore positions, rifled shells silencing most of the smoothbore guns. But the defenders were determined; they repaired their defenses and resumed attacks on foreign shipping.

A larger naval force would return the following year, delivering a decisive defeat that demonstrated the futility of resistance against modern industrial navies.`,
        hints: [
            { cost: 20, text: "Steam-powered warships became militarily decisive in the 1850s-1860s. Earlier steam vessels existed but were unreliable; by the 1870s, steam was universal and no longer a distinguishing advantage.", explanation: "The steam propulsion advantage helps date this battle." },
            { cost: 25, text: "Rifled naval guns replaced smoothbores primarily in the 1855-1870 period. The range and accuracy advantage was so dramatic that smoothbore-armed forces were helpless against rifled opponents.", explanation: "The rifled versus smoothbore mismatch helps narrow the timeframe." }
        ],
        explanation: "This was the First Battle of Shimonoseki Straits in 1863. Steam-powered warships became militarily decisive in the 1850s-1860s—earlier steam was unreliable, by the 1870s it was universal. Rifled naval guns replaced smoothbores primarily 1855-1870; the range advantage was so dramatic that smoothbore-armed forces were helpless. This specific mismatch—steam vs. sail, rifled vs. smoothbore—indicates the 1860s transition period.",
        tags: ["naval", "19th-century", "asia"]
    },
    {
        id: "campaign_040",
        title: "The Concrete Forts",
        actualYear: 1914,
        difficulty: "easy",
        description: `A city protected by a ring of modern forts was expected to resist for months. The forts were engineering marvels—reinforced concrete, steel cupolas, and interlocking fields of fire. Military experts considered them nearly impervious to conventional artillery.

The attackers brought something unprecedented: super-heavy siege howitzers transported by rail, far too massive for any animal team to move. These weapons fired shells weighing over a ton, using delayed-action fuses that let the shells penetrate concrete before detonating. The high-arc trajectories dropped shells onto the forts' roofs—their weakest point.

The bombardment was devastating. Shells punched through concrete that had been designed to resist flat-trajectory fire. Magazines exploded. Entire forts were destroyed in hours. The ring that was expected to hold for months fell in less than two weeks.

The rapid fall revolutionized thinking about fortifications. Fixed defenses were far more vulnerable than believed. The next generation of fortifications would try to address these weaknesses—with mixed success.`,
        hints: [
            { cost: 20, text: "Super-heavy siege artillery requiring railway transport was developed specifically in the 1900s-1910s. Earlier heavy guns existed but couldn't match the calibers needed to crack modern concrete.", explanation: "The rail-transported siege artillery helps date this battle." },
            { cost: 25, text: "Reinforced concrete fortifications became standard in the 1880s-1900s. They were considered nearly invulnerable until heavy howitzers proved otherwise in the 1910s.", explanation: "The fortification technology helps narrow the timeframe." }
        ],
        explanation: "This was the Siege of Antwerp in 1914. Reinforced concrete fortifications with steel cupolas became standard in the 1880s-1900s and were considered nearly invulnerable. Super-heavy siege artillery requiring railway transport was developed in the 1900s-1910s specifically to crack such forts—earlier heavy guns couldn't match the calibers needed. Delayed-action fuses that penetrated before detonating were a new technology. This combination indicates 1914 specifically.",
        tags: ["siege", "20th-century", "western-europe", "ww1"]
    },
    {
        id: "campaign_041",
        title: "The Steppe Tactics Reversed",
        actualYear: 1260,
        difficulty: "hard",
        description: `An army of steppe cavalry that had conquered vast territories encountered an opponent who knew their methods. The defenders were themselves trained in steppe warfare traditions—horse archers with composite bows, skilled in the feigned retreat and the encircling charge. Many of these defenders were mamluks, elite soldiers acquired as slaves in youth and trained from childhood in the arts of mounted warfare.

The battle took place in a valley with water sources that both armies needed. The defenders sent forward a small force that engaged and then retreated, drawing the attackers into pursuit—using their enemies' own signature tactic against them. When the pursuers were extended and disordered, the main defending force counterattacked from prepared positions.

The invaders' general was killed in the fighting. Without his leadership, the army collapsed. The survivors fled, and the invasion that had seemed unstoppable was halted.

The victory demonstrated that steppe tactics could be defeated—by opponents who understood them and refused to be intimidated by a fearsome reputation.`,
        hints: [
            { cost: 20, text: "Composite bow horse archery dominated Central Asian and Middle Eastern warfare from roughly 500 BCE to 1500 CE. The technology remained effective until firearms made mounted archery obsolete.", explanation: "The horse archer tactics help date this battle to the medieval period." },
            { cost: 25, text: "The mamluk military system—purchasing slave boys and training them as elite cavalry—was prominent from the 9th through 16th centuries, reaching its peak in the 13th-14th centuries.", explanation: "The slave-soldier military system helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Ain Jalut in 1260. Composite bow horse archers were used from antiquity to ~1500, but the mamluk military system (slave-soldiers purchased as boys and trained from childhood) reached its peak effectiveness in the 13th-14th centuries. The invading army's use of Chinese siege engineers and coordinated multi-front campaigns was uniquely Mongol, and the Mongol conquests occurred 1210-1280. These factors combine to place the battle in the mid-13th century.",
        tags: ["pitched-battle", "13th-century", "middle-east"]
    },
    {
        id: "campaign_042",
        title: "The River Forts",
        actualYear: 1860,
        difficulty: "medium",
        description: `A coalition fleet needed to force passage up a river defended by a series of fortifications. The forts had been modernized with earthwork ramparts and heavy guns, but they faced attackers with decisive technological advantages.

A previous assault had failed, but this time the attackers came with overwhelming force. Naval vessels bombarded the forts with rifled guns that could strike accurately at ranges the defenders' smoothbore cannon couldn't reach. Under cover of this fire, infantry landed with rifled muzzle-loading muskets and advanced through the mud flats.

Storming parties carried ladders to the walls. Fighting was brutal at the ramparts—bayonets against swords and spears, the defenders' mix of obsolete weapons no match for modern rifled firearms. By midday, the first forts had fallen. The rest surrendered rather than face the same treatment.

The river was now open to the coalition's warships. The defenders' government, unable to hold the next line of defense, would be forced to negotiate from a position of complete weakness.`,
        hints: [
            { cost: 20, text: "Rifled guns—both naval and infantry—replaced smoothbores primarily in the 1850s-1870s. The range and accuracy advantage was so great that smoothbore-armed forces were nearly helpless.", explanation: "The rifled versus smoothbore mismatch helps date this battle." },
            { cost: 25, text: "Muzzle-loading rifles were standard infantry weapons from roughly 1850-1870. Breech-loaders became standard afterward, offering much faster rates of fire.", explanation: "The rifle technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Taku Forts in 1860. Rifled guns—both naval and infantry—replaced smoothbores primarily in the 1850s-1870s; the range and accuracy advantage was overwhelming. Muzzle-loading rifles were standard 1850-1870; breech-loaders became standard afterward. This combination—rifled muzzle-loaders defeating smoothbore defenders—indicates the late 1850s-early 1860s specifically.",
        tags: ["amphibious", "19th-century", "asia"]
    },
    {
        id: "campaign_043",
        title: "The Overlooked Summit",
        actualYear: 1900,
        difficulty: "medium",
        description: `An army attacked a hill that commanded its line of advance. Infantry climbed the steep slopes at night and seized the summit before dawn, surprising the handful of defenders.

When the sun rose, the attackers discovered their error. The position they held was overlooked by higher ground on multiple sides. Enemy riflemen on those ridges had clear shots into the summit from over 500 yards away—their modern magazine rifles with smokeless powder made such ranges practical, and the lack of smoke made the shooters nearly invisible. The attackers had no cover and could not effectively return fire.

Attempts to dig in failed—rock lay just beneath the thin soil. Every movement drew aimed fire from the surrounding ridges. Reinforcements struggled up the slopes only to crowd into the killing zone. Artillery could not engage the surrounding heights.

By evening, the hill was carpeted with dead and wounded. The attackers withdrew, having learned a brutal lesson about the importance of understanding terrain before committing to an assault.`,
        hints: [
            { cost: 20, text: "Magazine rifles (holding multiple rounds for rapid fire) became standard military issue in the 1880s-1890s. Earlier rifles required reloading after each shot.", explanation: "The rifle technology helps date this battle." },
            { cost: 25, text: "Smokeless powder replaced black powder in the 1880s-1890s, eliminating the telltale smoke clouds that had revealed shooters' positions for centuries.", explanation: "The smokeless powder technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Spion Kop in 1900. Magazine rifles (holding multiple rounds for rapid fire) became standard military issue in the 1880s-1890s—earlier rifles required reloading after each shot. Smokeless powder replaced black powder in the 1880s-1890s, eliminating the telltale smoke that had revealed shooters for centuries. This combination—accurate rapid fire at 500+ yards from invisible positions—indicates the late 1890s-early 1900s.",
        tags: ["pitched-battle", "20th-century", "africa"]
    },
    {
        id: "campaign_044",
        title: "The Tide-Locked Landing",
        actualYear: 1950,
        difficulty: "medium",
        description: `An amphibious assault targeted a port with extreme tidal conditions—landing craft could only approach during brief windows of high tide. The channel was narrow and easily defended. Planners considered the operation extremely risky.

The attackers gambled on surprise. Naval bombardment and air strikes—a mix of jet fighters and propeller-driven attack aircraft, an air force in technological transition—suppressed the defenses during the brief landing window. Marines in specialized landing craft that could beach directly, unload, and retract secured the seawalls and port facilities. Reinforcements poured in during subsequent tidal windows, building up forces faster than the enemy could respond.

Within days, the attackers had broken out of the beachhead and were advancing inland. The enemy, focused on operations elsewhere, suddenly faced a threat to their rear. Their logistics were severed; their forward forces, cut off from supply.

The gamble had paid off. What had seemed like a desperate situation was transformed within weeks.`,
        hints: [
            { cost: 20, text: "Specialized landing craft for amphibious assault were developed and refined during 1942-1945. Their use in a major operation indicates WWII or the immediate postwar period.", explanation: "The landing craft technology helps date this battle." },
            { cost: 25, text: "Mixed jet and propeller-driven air forces were characteristic of the 1945-1955 transition period. Earlier air forces were all-propeller; later ones became all-jet for combat roles.", explanation: "The aircraft technology mix helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Inchon in 1950. Specialized landing craft for amphibious assault were developed 1942-1945; their use in major operations indicates WWII or the immediate postwar period. Mixed jet and propeller-driven air forces were characteristic of the 1945-1955 transition—earlier air forces were all-propeller, later ones became all-jet for combat roles. This combination indicates the early 1950s specifically.",
        tags: ["amphibious", "20th-century", "asia"]
    },
    {
        id: "campaign_045",
        title: "The Siege Relief",
        actualYear: 1747,
        difficulty: "hard",
        description: `An army attempted to prevent the siege of a major fortress by attacking the besieging force. Both armies were roughly equal—perhaps 90,000 men each. The defending force held a strong position anchored on villages fortified as strongpoints.

The attack focused on the fortified villages, which changed hands repeatedly in brutal house-to-house fighting. Infantry with flintlock muskets and socket bayonets stormed the buildings in linear formations, volleying at close range before charging. They were thrown out by counterattacks, and stormed again. The villages became key terrain because their buildings provided cover—a contrast to the open fields where the era's linear formations excelled. Casualties were severe on both sides.

By evening, the attackers had taken most of the villages but were too exhausted to press further. The defenders retreated in good order. The siege continued despite the battle, and the fortress eventually fell.

The battle was tactically indecisive—a bloody stalemate that did not change the strategic situation. Both armies had fought bravely; neither had found a way to break the other.`,
        hints: [
            { cost: 20, text: "Flintlock muskets replaced matchlocks as standard military issue around 1680-1700. The socket bayonet, allowing the musket to also serve as a pike, was adopted in the 1690s-1700s.", explanation: "The infantry weapons help date this battle to the 18th century." },
            { cost: 25, text: "Armies of 90,000 men in a single engagement were rare before the 18th century (logistics couldn't support them) and became even larger in the 19th century Napoleonic era.", explanation: "The army size helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Lauffeld in 1747. Flintlock muskets with socket bayonets in linear formations were standard 1700-1850. Armies of 90,000 men in a single engagement were rare before the 18th century (logistics couldn't support them) and became even larger in the Napoleonic era (1800s). This army size at the peak of linear tactics indicates the mid-18th century specifically.",
        tags: ["pitched-battle", "18th-century", "western-europe"]
    },
    {
        id: "campaign_046",
        title: "The Column Caught",
        actualYear: 1757,
        difficulty: "medium",
        description: `An army significantly larger than its opponent attempted a flanking march. The movement was poorly screened and easily observed from the enemy's position. Overconfidence slowed the march—the larger army believed the smaller force would not dare attack.

The smaller army's commander saw his chance. While the enemy was strung out in march column, he launched a rapid attack with his forces already in battle formation. Cavalry charged with sabers, relying on speed and shock to scatter infantry before they could form defensive squares. Infantry with flintlock muskets and socket bayonets advanced in three-rank linear formations against the enemy's flank.

Caught in march order, the larger army could not deploy. Units trying to form battle lines were swept away before they could organize. The rout was complete within two hours. The larger force suffered thousands of casualties; the smaller force, remarkably few.

The battle demonstrated the vulnerability of armies caught in march formation—and the value of bold action over numerical superiority.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with socket bayonets in linear formations were standard from roughly 1700-1850. The three-rank depth was typical of 18th century tactics; Napoleonic armies later used deeper columns.", explanation: "The infantry formation depth helps date this battle." },
            { cost: 25, text: "Cavalry saber charges against infantry were most effective in the 18th century. Earlier, pikemen could stop cavalry; later, rifle firepower made such charges increasingly costly.", explanation: "The cavalry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Rossbach in 1757. Flintlock muskets with socket bayonets in linear formations were standard 1700-1850. Three-rank depth was typical of 18th century tactics—earlier formations were deeper, Napoleonic armies later used columns. Cavalry saber charges against infantry were most effective in the 18th century; earlier pikemen could stop cavalry, later rifle firepower made such charges costly. These factors indicate mid-18th century.",
        tags: ["pitched-battle", "18th-century", "central-europe"]
    },
    {
        id: "campaign_047",
        title: "The Fort Bombardment",
        actualYear: 1882,
        difficulty: "medium",
        description: `A naval squadron bombarded coastal fortifications as a prelude to occupation. The warships were modern ironclads—armored vessels mounting rifled guns in turrets that could engage targets in any direction while protected from return fire. The shore batteries had older smoothbore muzzle-loading cannon that could barely reach the ships at these ranges, let alone penetrate their armor.

The bombardment lasted all day. The warships stood off at ranges where the shore batteries were ineffective while systematically destroying the fortifications. Fires broke out across the city as shells struck buildings beyond the military targets.

By evening, the coastal defenses were silenced. The next day, marines landed to find the military garrison had withdrawn. The city fell without significant ground combat.

The action demonstrated the overwhelming power of modern naval artillery against fortifications designed for an earlier era.`,
        hints: [
            { cost: 20, text: "Ironclad warships with rifled turret guns were the dominant naval technology from roughly 1860-1900. Earlier warships were wooden; later ones had all-steel construction.", explanation: "The warship technology helps date this battle." },
            { cost: 25, text: "The technological gap between rifled naval guns and smoothbore shore batteries was most pronounced in the 1860s-1880s, before most nations modernized their coastal defenses.", explanation: "The technological mismatch helps narrow the timeframe." }
        ],
        explanation: "This was the Bombardment of Alexandria in 1882. Ironclad warships with rifled turret guns were the dominant naval technology 1860-1900—earlier warships were wooden, later ones had all-steel construction. The technological gap between rifled naval guns and smoothbore shore batteries was most pronounced in the 1860s-1880s, before most nations modernized their coastal defenses. This mismatch indicates the 1870s-1880s.",
        tags: ["naval", "19th-century", "africa"]
    },
    {
        id: "campaign_048",
        title: "The Concrete Fortress",
        actualYear: 1905,
        difficulty: "medium",
        description: `A fortified port was cut off by an invading army and besieged. The garrison held modern fortifications—concrete bunkers, steel cupolas, and interlocking fields of fire. Machine guns in concrete emplacements commanded the approaches, devastating against infantry crossing open ground. Barbed wire entanglements channeled attackers into killing zones.

The siege lasted months. Infantry assaults on the hill forts were repulsed with massive casualties—tens of thousands of attackers fell. Siege howitzers with quick-firing mechanisms were brought up, their heavy shells slowly cracking the concrete. Searchlights illuminated night attacks. Mining operations placed explosive charges beneath defensive positions. Even so, the human cost was staggering.

When the garrison finally surrendered, it was from exhaustion and starvation rather than military defeat. The siege had demonstrated the defensive power of modern fortifications and automatic weapons—lessons military observers studied carefully.`,
        hints: [
            { cost: 20, text: "Machine guns became effective military weapons in the 1880s-1890s but were fully integrated into defensive fortifications only in the 1900s-1910s.", explanation: "The machine gun fortifications help date this battle." },
            { cost: 25, text: "Quick-firing artillery (using recoil mechanisms to allow rapid aiming) and electric searchlights were cutting-edge military technology in the 1890s-1900s.", explanation: "The combined technologies help narrow the timeframe." }
        ],
        explanation: "This was the Siege of Port Arthur (1904-1905). Concrete fortifications with emplaced machine guns became standard in the 1890s-1900s. Quick-firing artillery (with recoil systems allowing rapid fire) was developed in the 1890s. Searchlights for night illumination became practical in the 1890s. Barbed wire for military use dates from the 1890s. This defensive combination—all new since the 1890s—indicates the early 1900s, presaging WWI trench warfare.",
        tags: ["siege", "20th-century", "asia"]
    },
    {
        id: "campaign_049",
        title: "The Tidal Strait",
        actualYear: 1597,
        difficulty: "hard",
        description: `A small defending fleet faced a much larger invasion force in a narrow strait with treacherous tidal currents. The defending admiral knew the waters intimately; the invaders did not.

Both fleets used wooden vessels combining cannon with archers—gunpowder at sea, but not yet the pure broadside sailing ships of later centuries. The smaller fleet included distinctive warships with reinforced prows for ramming and roofed decks to protect against arrows and incendiaries.

The admiral positioned his fleet where the currents would work against attackers. When the enemy came, their ships fought against the swirling water, bunching together and colliding. The defenders, positioned with the current, could maneuver freely and concentrate fire.

As the tide shifted, the currents reversed. The small fleet attacked aggressively, ramming and boarding while the enemy struggled to control their vessels. Dozens of invasion ships were sunk or damaged. The survivors retreated.

The victory demonstrated that naval battles could be won by understanding local conditions—that seamanship and positioning could overcome numerical inferiority.`,
        hints: [
            { cost: 20, text: "Naval cannon combined with traditional weapons (archers, ramming) was characteristic of 15th-17th century Asian naval warfare, before European-style broadside tactics became universal.", explanation: "The mixed naval weapons help date this battle." },
            { cost: 25, text: "Warships with reinforced ramming prows and protective roofed decks were a distinctive East Asian design tradition, most developed in the 15th-16th centuries.", explanation: "The ship design helps narrow the timeframe and location." }
        ],
        explanation: "This was the Battle of Myeongnyang in 1597. Wooden warships combining cannon with archers were standard in East Asian naval warfare 1550-1650—earlier ships lacked effective naval artillery, later ones adopted European broadside designs. The distinctive 'turtle ships' (roofed vessels with reinforced prows for ramming) were used only in the 1590s-1600s during Korean conflicts with Japan. This combination indicates the late 16th century.",
        tags: ["naval", "16th-century", "asia"]
    },
    {
        id: "campaign_050",
        title: "Storm and Ambush",
        actualYear: 1560,
        difficulty: "hard",
        description: `A regional lord faced destruction. A neighboring power had assembled an army of perhaps 25,000 warriors and was marching through his territory, burning fortresses as it advanced. He could muster only about 2,500 men.

His advisors counseled defense behind walls, but he chose audacity. His scouts reported the enemy army had halted to rest in a narrow gorge, celebrating recent victories. The enemy commander had made camp with inadequate screening forces, confident his overwhelming numbers made surprise impossible.

The smaller force moved through forested hills using paths known to local guides. A sudden thunderstorm provided perfect cover—the rain masked their approach while enemy sentries sought shelter. The warriors carried the typical weapons of the era: long spears for formation fighting, shorter swords for close combat, bows both for volleys and individual marksmanship. Some carried matchlock arquebuses—new gunpowder weapons just beginning to spread through the region—though rain rendered these unreliable since the slow matches couldn't stay lit.

The attack struck the camp's command section directly. In the chaos of rain and surprise, warriors couldn't distinguish friend from enemy, couldn't form proper units, couldn't find their officers. The enemy commander was killed within minutes, cut down before he could even don his armor. Without central command, the larger army fragmented. Contingents fled rather than fight an enemy of unknown size in blinding rain.

The political consequences were transformative. The victor gained control of his dead enemy's considerable resources and client lords.`,
        hints: [
            { cost: 20, text: "Matchlock arquebuses arrived in East Asia via Portuguese traders in the 1540s and spread through the region over the following decades. Their description as 'new' and 'just beginning to spread' suggests the 1550s-1560s.", explanation: "The firearm adoption timeline helps date this battle." },
            { cost: 25, text: "The combination of traditional weapons (spears, swords, bows) as primary arms with limited gunpowder weapons indicates a transitional period before firearms became the dominant battlefield weapon.", explanation: "The weapons mix helps narrow the timeframe to the mid-16th century." }
        ],
        explanation: "This was the Battle of Okehazama in 1560. Matchlock arquebuses arrived in Japan via Portuguese traders in 1543. If they are described as 'new' and 'just beginning to spread' but not yet dominant, this indicates approximately 15-25 years after introduction—placing the battle around 1555-1570. Traditional weapons (spears, swords, bows) still being the main arms confirms this early transition period before mass matchlock warfare of the 1570s-1600s.",
        tags: ["ambush", "16th-century", "asia"]
    },
    {
        id: "campaign_051",
        title: "The Breaches",
        actualYear: 1812,
        difficulty: "hard",
        description: `The fortress city had to be taken before enemy field armies could concentrate. The besiegers worked with desperate speed, knowing reinforcement was coming.

Siege artillery—heavy iron guns firing balls of eighteen and twenty-four pounds—battered the walls from prepared positions. The gunners worked day and night, consuming vast quantities of powder and shot hauled forward by mule and wagon over poor roads. Counter-battery fire from the walls killed gunners steadily, but replacements stepped forward.

After weeks, three breaches were judged practicable. The assault columns formed at dusk, carrying fascines and ladders. The defenders had not been idle—behind the rubble of each breach waited chevaux-de-frise (sword blades set in beams), flooded ditches, and explosives rigged to detonate.

The attacks on the main breaches failed with appalling casualties. Assault columns struggled through waist-deep water under continuous musket fire, only to impale themselves on the sword-blade obstacles. Officers died leading charge after charge. But while the main assaults drew defenders, escalade parties with ladders succeeded at less defended points.

The garrison surrendered, but the assault troops were beyond control. Three days of violence against civilians followed before discipline could be restored.`,
        hints: [
            { cost: 20, text: "Heavy siege artillery using 18-24 pounder iron guns was standard from roughly 1700-1860. The organized column assault tactics with fascines and ladders were refined to their highest form in the 1800s-1810s.", explanation: "The siege technology and assault tactics help date this battle." },
            { cost: 25, text: "Sophisticated defensive preparations at breaches—chevaux-de-frise, controlled flooding, prepared explosives—reached their peak development in the early 19th century before explosive shells made walls obsolete.", explanation: "The defensive technology helps narrow the timeframe." }
        ],
        explanation: "This was the Siege of Badajoz in 1812. Heavy siege guns (18-24 pounders) transported by armies were standard 1700-1860—earlier artillery was heavier and less mobile, later breech-loaders had different caliber systems. Assault columns with fascines and scaling ladders were Napoleonic-era tactics (1792-1815). The sophistication of defensive preparations—chevaux-de-frise, flooding, command-detonated explosives—indicates early 19th century engineering.",
        tags: ["siege", "19th-century", "europe"]
    },
    {
        id: "campaign_052",
        title: "Night at the River Camp",
        actualYear: 1371,
        difficulty: "medium",
        description: `Two allied kings led a crusading army to push back invaders who had been steadily conquering territory for decades. Their combined force was substantial—contemporary sources claim seventy thousand, though this is certainly exaggerated. Perhaps twenty thousand is more realistic.

The army reached a river and made camp. The evening was spent celebrating; wine flowed freely. Guards were posted carelessly if at all. The kings and their nobles were confident—they outnumbered the enemy, they were on crusade with divine favor, and the invasion force was miles away.

But the invaders' scouts had tracked the crusader army. The invading power had developed elite slave-soldier infantry—troops taken as children and trained from youth in both military skills and religious devotion. A strike force of perhaps five thousand moved through the night. They reached the river camp in the pre-dawn darkness.

The attack was devastating. Most of the crusader army was drunk or asleep. Men were killed in their tents or drowned trying to flee across the river. Both kings died—one in the fighting, one drowned in the crossing. The army simply ceased to exist as an organized force.

The disaster had strategic consequences for generations. Territories that might have resisted the invasion now fell without hope of outside rescue.`,
        hints: [
            { cost: 20, text: "The slave-soldier military system (devshirme) described became prominent in the mid-14th century and continued for several centuries. Its early development phase was the 1360s-1400s.", explanation: "The slave-soldier system helps date this battle." },
            { cost: 25, text: "The lack of gunpowder weapons in the description—the night attack relied on cold steel and surprise—suggests warfare before firearms became common in this region (roughly before the 1400s).", explanation: "The absence of firearms helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Maritsa (also called Chernomen) in 1371. The slave-soldier system (devshirme) became prominent in the mid-14th century; its early development phase was 1360s-1400s. The absence of gunpowder weapons in the description—the night attack relied on cold steel and surprise—suggests warfare before firearms became common in the Balkans (roughly before 1400). Both kings dying matches the specific historical event.",
        tags: ["ambush", "14th-century", "europe"]
    },
    {
        id: "campaign_053",
        title: "The King's Death",
        actualYear: 1632,
        difficulty: "medium",
        description: `The reforming king who had revolutionized warfare met his old enemy again in thick fog. Both armies used similar weapons now—matchlock muskets, pikes, and artillery—but the king's forces remained more flexible, with shallower formations that put more muskets on the firing line.

The battle began in morning mist so thick that units stumbled into each other without warning. The king, leading a cavalry charge, became separated from his escort in the fog. He was shot and killed, though his army didn't learn of his death for hours.

Despite the loss, the army fought on. The infantry held their ground, trading volleys with the enemy. The artillery—light guns that could be repositioned during battle, a recent innovation—provided crucial support. By evening, the enemy withdrew, but the victory felt hollow.

The king who had transformed European warfare was dead at 37. His reforms—lighter muskets, shallower formations, mobile artillery—would be adopted across the continent. But his kingdom, without his leadership, would struggle to maintain its position in the war that still had sixteen years to run.`,
        hints: [
            { cost: 20, text: "Light regimental artillery capable of repositioning during battle was a revolutionary innovation of the 1620s-1630s. Earlier field guns stayed fixed once deployed.", explanation: "The artillery technology helps date this battle." },
            { cost: 25, text: "Shallower infantry formations (6 ranks instead of 30) maximizing musket firepower became standard in the 1630s-1640s, replacing the deeper tercio formations.", explanation: "The infantry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Lützen in 1632. The light mobile artillery and shallower infantry formations were innovations of the early 1630s. The king who 'transformed European warfare' dying at 37 in fog during a cavalry charge matches Gustavus Adolphus's death. The war 'with sixteen years to run' was the Thirty Years War (ended 1648).",
        tags: ["pitched-battle", "17th-century", "europe"]
    },
    {
        id: "campaign_054",
        title: "The Horse Archers",
        actualYear: -53,
        difficulty: "medium",
        description: `The invading army was built around heavy infantry—professional soldiers equipped with short swords, heavy javelins, large curved shields, and body armor. They had conquered vast territories with disciplined formations that crushed opposition in close combat.

But their enemy refused close combat entirely. The defenders fielded thousands of horse archers—mounted warriors equipped with powerful composite recurve bows laminated from wood, horn, and sinew. These bows could pierce armor at fifty meters. The riders had an advantage unique to their region: logistics that could sustain their presence indefinitely. Camel trains carried spare arrows by the tens of thousands.

The battle became a nightmare for the infantry. The cavalry circled endlessly, shooting from the saddle, retreating whenever the infantry advanced, returning when they halted. The invaders formed defensive formations, shields locked overhead against the arrow rain, and waited for the enemy to exhaust their ammunition.

The ammunition never ran out. As dusk approached, the invaders attempted to withdraw. The enemy cavalry surrounded detachments in the darkness, forced surrenders, executed prisoners. The army commander died, and only a fraction of his force escaped.

The defeat revealed a fundamental strategic problem: infantry-based armies could not project power into regions dominated by horse archer traditions without either allied cavalry or adapted tactics.`,
        hints: [
            { cost: 20, text: "Composite recurve bows reached full development by roughly 500 BCE and remained the dominant steppe weapon until firearms spread in the 15th-16th centuries CE. Horse archer tactics against heavy infantry were most dominant in the 3rd-1st centuries BCE.", explanation: "The bow technology and tactical matchup help date this battle." },
            { cost: 25, text: "Professional heavy infantry relying on short swords, javelins, large shields, and close combat dominated Mediterranean warfare from roughly 300 BCE to 300 CE.", explanation: "The infantry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Carrhae in 53 BCE. Professional heavy infantry with pilum, gladius, and scutum was the Roman system from 300 BCE-300 CE. Horse archers with composite bows supplied by camel trains in desert terrain describes the Parthian military system (250 BCE-224 CE). Roman armies penetrating Mesopotamia occurred specifically 55 BCE-200s CE. The combination of Roman tactics meeting Parthian horse archery narrows this to the late Republic or early Empire.",
        tags: ["pitched-battle", "ancient", "asia"]
    },
    {
        id: "campaign_055",
        title: "The Hill of Heads",
        actualYear: -197,
        difficulty: "hard",
        description: `Two different military systems collided on broken terrain. One army relied on the phalanx—dense formations of infantry armed with eighteen-foot pikes called sarissas, designed to present an impenetrable hedge of points to the enemy. These formations had conquered an empire in a single generation, a century and a half earlier, using these pike tactics combined with hammer-and-anvil cavalry.

The opposing force used manipular tactics: smaller, independent units that could maneuver separately. Their infantry threw heavy javelins then closed with short swords. Each soldier carried a large shield and fought with more individual space than the tightly-packed phalangites. They had recently perfected this system in wars against a maritime power that used war elephants and hired mercenaries—wars that had ended just two decades before.

The battle began as an encounter fight in rolling hills. The phalanx proved devastating when it caught the enemy on level ground—the pike hedge was impossible to penetrate from the front. But on the broken terrain, gaps opened between phalanx units.

A junior officer saw his opportunity. Without orders, he took a small force and struck the flank of an engaged phalanx. The pike was useless at close quarters; the formation depended on its front. Attacked from behind, the phalangites had no weapons suitable for close defense. They died in heaps.

The tactical lesson was clear: the phalanx was superior on level ground but fatally vulnerable on terrain that broke its cohesion.`,
        hints: [
            { cost: 20, text: "The 18-foot sarissa pike phalanx dominated warfare from roughly 350-170 BCE. It was developed in the mid-4th century BCE and was definitively defeated by more flexible formations in the early 2nd century BCE.", explanation: "The phalanx technology helps date this battle." },
            { cost: 25, text: "The manipular legion—javelin-throwing infantry with short swords in flexible independent units—reached its tactical peak in the 3rd-2nd centuries BCE before evolving into different formations.", explanation: "The opposing tactical system helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Cynoscephalae in 197 BCE. The sarissa phalanx described as having 'conquered an empire a century and a half earlier,' combined with the manipular tactics refined in 'wars that ended two decades before,' places this precisely in the late 3rd/early 2nd century BCE when these two tactical systems first met in decisive battle.",
        tags: ["pitched-battle", "ancient", "europe"]
    },
    {
        id: "campaign_056",
        title: "The Knights' Destruction",
        actualYear: 1410,
        difficulty: "medium",
        description: `A military-religious order that had spent two centuries conquering and converting the coastlands faced a coalition of its former targets. The order fielded perhaps 20,000 men, including its core of heavily armored knight-brothers, but also mercenaries, secular knights, and conscripted infantry.

The coalition army was larger—perhaps 30,000—and combined very different fighting traditions. One ally brought heavy cavalry in the western European style. The other brought light cavalry skilled in feigned retreats, an eastern tradition where troops would flee to draw pursuit, then wheel and counterattack the disordered pursuers.

The battle began with an artillery exchange—early cast bronze cannon called bombards that fired stone balls with crude, on-site mixed gunpowder. Their effect was more psychological than tactical. Then the order's heavy cavalry charged. On one wing, the coalition light cavalry fled before the charge.

The order's knights pursued. But the flight was a trap. The light cavalry wheeled, the heavy cavalry's horses were blown, and a counterattack broke the pursuers. Meanwhile, the coalition's heavy cavalry had held the other wing in fierce melee.

When the order's Grand Master led his reserve into the fight, the exhausted knights could not break through. Surrounded, the Grand Master and most of the order's senior leadership died fighting. The military order never recovered.`,
        hints: [
            { cost: 20, text: "Early cast bronze bombards with on-site powder mixing were characteristic of late 14th to early 15th century warfare. Pre-mixed 'corned' powder and cast iron guns came in the mid-to-late 15th century.", explanation: "The artillery technology helps date this battle." },
            { cost: 25, text: "Military-religious orders of knight-brothers reached their peak in the 13th-14th centuries and declined in the 15th century as secular states grew stronger.", explanation: "The military-religious order context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Grunwald (also called Tannenberg) in 1410. Early bronze bombards with crude powder appeared 1380-1430—earlier cannon were rare and unreliable, later gunpowder was more refined. Military-religious orders of knight-brothers in the Baltic were active 1200-1525, but 'two centuries of conquest' points to their 13th-15th century peak. The combination of bombards present but not decisive indicates the early 1400s transition.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_057",
        title: "The Retreat Through the Mountains",
        actualYear: 1495,
        difficulty: "hard",
        description: `A king had marched an army through mountains to claim a distant throne. The conquest was easy—but then a coalition formed against him, and he found himself deep in enemy territory with hostile armies closing in.

He chose to retreat, but had to cross a river in a mountain valley. The coalition army caught him there: perhaps 20,000 troops against his 10,000. But the compositions differed sharply.

The king's army included the finest heavy cavalry of its day—armored lancers whose charge had broken every army they'd faced for decades. It also included a revolutionary innovation: mobile field artillery pulled by horses rather than oxen, fast enough to keep up with a marching army and deploy quickly in battle.

The coalition army was traditional: heavily armored men-at-arms, but equipped for the close-quarters fighting and ransoming of prisoners that had characterized warfare for generations. Their goal was not destruction but capture—the king and his nobles were worth fortunes in ransom.

When the armies met, the king's cavalry smashed through the enemy center. The horse artillery tore holes in enemy formations. But the coalition achieved its goal in part: they captured the king's baggage train with all its treasure. Both sides claimed victory.`,
        hints: [
            { cost: 20, text: "Horse-drawn field artillery mobile enough for tactical battlefield use was a revolutionary innovation of the 1490s-1500s. Earlier artillery used slow oxen and couldn't maneuver during battle.", explanation: "The artillery technology helps date this battle." },
            { cost: 25, text: "The practice of fighting to capture nobles for ransom (rather than to destroy enemy forces) was characteristic of medieval warfare and declined rapidly in the late 15th-early 16th centuries.", explanation: "The ransom warfare context helps narrow the timeframe to the transitional period." }
        ],
        explanation: "This was the Battle of Fornovo in 1495. Horse-drawn mobile field artillery on wheeled carriages first appeared in the 1490s—this was revolutionary because earlier artillery was too heavy for tactical movement. The coalition fighting for ransom rather than destruction reflects medieval values that would fade by 1520 as gunpowder warfare became more lethal. This combination indicates the late 1490s specifically.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_058",
        title: "The Galley Battle",
        actualYear: 1571,
        difficulty: "medium",
        description: `The largest galley battle in centuries pitted two fleets of over 200 ships each. Both sides used the classic Mediterranean war galley—long, narrow ships powered primarily by oars, with sails for cruising. The rowers were a mix of free men seeking wages, conscripts, and slaves chained to their benches.

But new technology was reshaping naval warfare. Both fleets mounted cannon on their bows, and the larger galleys carried dozens of arquebusiers—soldiers armed with gunpowder weapons. Six specially designed ships called galleasses were floating gun platforms: slower than galleys but mounting broadside artillery that could shatter wooden hulls. These experimental vessels represented a transition toward the broadside sailing warship.

The engagement was a brutal close-quarters melee. Galleys rammed each other, their bronze beaks designed to disable rather than sink. Soldiers swarmed across from ship to ship in boarding actions. The arquebusiers proved devastatingly effective against enemies still relying on bows.

One side's firepower advantage proved decisive. Their soldiers carried more firearms, their ships mounted more cannon. After hours of fighting, the losing fleet was destroyed—over 200 ships captured or sunk, tens of thousands killed. The victors lost only about a dozen ships.

Yet the strategic impact was limited. Shipyards replaced losses within a year. The real significance was psychological: an aura of invincibility had been broken.`,
        hints: [
            { cost: 20, text: "Galleasses—hybrid galley/sailing ships with broadside guns—were an experimental design of the 1550s-1580s, transitional between oar-powered galleys and sail-powered galleons.", explanation: "The galleass technology helps date this battle." },
            { cost: 25, text: "Galley warfare with arquebus-armed marines dominated Mediterranean naval combat from roughly 1520-1580, before sailing warships proved their superiority.", explanation: "The naval warfare style helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Lepanto in 1571. Galleys (oar-powered ramming ships) dominated Mediterranean warfare until ~1580, when sailing broadside vessels proved superior. Arquebus-armed marines for shipboard combat were standard 1530-1600. Galleasses (large galleys mounting broadside guns) were an experimental transitional design of the 1560s-1570s, replaced by true sailing warships by 1600. This combination indicates the late 16th century.",
        tags: ["naval", "16th-century", "mediterranean"]
    },
    {
        id: "campaign_059",
        title: "The March Under Arrows",
        actualYear: 1191,
        difficulty: "hard",
        description: `An army marched south along the coast, its flank protected by the sea and a fleet carrying supplies. The enemy could not attack from that direction. But from the landward side, horse archers harassed the column continuously.

The marching army's commander understood the danger. If his heavy cavalry charged, the nimble horse archers would simply retreat, then return to attack the disordered knights. He ordered strict discipline: no one was to break formation, no matter the provocation.

The infantry marched on the landward side, absorbing the arrows. They wore heavy mail armor and carried large shields, suffering casualties but protecting the cavalry. Crossbowmen shot back with belt-hook crossbows—weapons drawn by bending down, hooking the string to a belt, and standing up using leg strength. Their heavy bolts outranged the composite bows but were slower to reload.

The horse archers pressed closer, trying to provoke a response. Finally, at a planned moment, the heavy cavalry charged—massed, coordinated, devastating. The horse archers, pressed too close for too long, could not escape. The charge broke the enemy center, and the army completed its march.

The engagement demonstrated that heavy cavalry and crossbow-armed infantry, properly coordinated, could defeat horse archer tactics—but only with iron discipline.`,
        hints: [
            { cost: 20, text: "Belt-hook crossbows were standard military equipment from roughly 1000-1250 CE. Later crossbows used mechanical cranks or windlasses for even greater power.", explanation: "The crossbow technology helps date this battle to the 12th-13th centuries." },
            { cost: 25, text: "Heavy mail armor covering the entire body was characteristic of the 11th-13th centuries. Earlier periods used less complete coverage; later periods transitioned to plate armor.", explanation: "The armor technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Arsuf in 1191. Belt-hook crossbows (drawn using leg strength rather than later mechanical cranks) were standard from 1000-1250. Heavy mail covering the entire body indicates pre-1300, when plate armor began replacing it. The coastal march with ship supply and disciplined resistance to horse archer harassment was specifically the strategic situation of the Third Crusade (1189-1192).",
        tags: ["pitched-battle", "12th-century", "middle-east"]
    },
    {
        id: "campaign_060",
        title: "The Divided Realm",
        actualYear: 1600,
        difficulty: "hard",
        description: `A dying ruler left an infant heir and a council of regents. Almost immediately, two factions formed around different council members. Both claimed to act in the child's interest. Both raised armies.

The armies that met were vast—perhaps 80,000 on each side—but consisted of contingents from dozens of lords whose loyalties were uncertain. Communications before battle involved promises, threats, and bribes. Several lords had secretly agreed to switch sides at crucial moments.

Both armies deployed thousands of matchlock arquebusiers—foot soldiers whose volleys could devastate cavalry charges. But the battle began in fog and rain, and the matchlock mechanism, requiring a lit slow match to fire, was rendered useless when wet. One wing of the eastern army was supposed to attack but didn't move—its commander was negotiating his defection. The fighting see-sawed until, hours into the battle, committed supporters of the west began to waver.

Then the betrayals came. A western lord attacked his own side's flank. Others fled without fighting. The western army collapsed into rout.

The aftermath was systematic: execution of enemy leaders, redistribution of territories, establishment of a new political order that would last for centuries. The victor became effective ruler, though maintaining the fiction of the infant heir's sovereignty.`,
        hints: [
            { cost: 20, text: "Mass matchlock arquebus infantry became standard in East Asian warfare by the 1570s-1580s. The matchlock remained dominant until the 18th century in this region, longer than in Europe.", explanation: "The firearm technology helps date this battle." },
            { cost: 25, text: "Armies of 80,000 per side, drawn from dozens of semi-autonomous lords whose loyalties could shift during battle, was characteristic of the late 16th-early 17th century before more centralized states emerged.", explanation: "The political-military context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Sekigahara in 1600. Mass matchlock arquebus infantry became standard in Japan from the 1560s-1600s; earlier armies relied on swords and bows. Armies of 80,000+ assembled from lords of questionable loyalty was characteristic of the late Sengoku period (1560-1615). The systematic political restructuring afterward—standardized taxation, castle restrictions, alternate attendance—describes the early Tokugawa settlement (1600-1615).",
        tags: ["pitched-battle", "17th-century", "asia"]
    },
    {
        id: "campaign_061",
        title: "The Snowstorm Battle",
        actualYear: 1461,
        difficulty: "medium",
        description: `Two claimants to a throne met in what would become the bloodiest battle ever fought on that island. Perhaps 50,000 men faced each other across a sloping field in a driving snowstorm.

Both armies were composed similarly: dismounted men-at-arms in full plate armor, archers with longbows of 100-150 pound draw weight, and billmen carrying polearms with hooks and blades. The aristocracy fought on foot alongside common soldiers, as the terrain was unsuitable for cavalry charges.

The battle began with an archery exchange. One side had the wind at their backs—their arrows flew further, while the enemy's fell short. The disadvantaged army had to advance into the arrow storm to close the range. When the lines met, the fighting was brutal and close—armored men hacking at each other with pollaxes, bills, and swords.

For hours, neither side broke. Then reinforcements arrived for one army, striking the enemy flank. The line collapsed. In plate armor, retreat was nearly impossible—men were cut down as they fled or drowned crossing a river in full harness.

Casualty estimates suggest 20,000 or more died—an almost inconceivable proportion of the forces engaged.`,
        hints: [
            { cost: 20, text: "Longbows with 100-150 pound draw weights were at their peak military effectiveness in the 14th-15th centuries. By the 16th century, firearms had made them obsolete in most armies.", explanation: "The longbow technology helps date this battle." },
            { cost: 25, text: "Primitive handguns existed by the mid-15th century but were slow and inaccurate. Their presence alongside dominant longbows indicates the 1450s-1480s, before firearms replaced bows.", explanation: "The weapons transition helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Towton in 1461. Full plate harnesses became standard for wealthy fighters around 1400-1470; earlier periods used mail with plate additions, later periods saw plate decline against firearms. Longbows with 100-150 pound draw weights were at their peak in the 15th century—earlier medieval bows were lighter, and by 1550 firearms had replaced them. Handguns described as 'primitive' indicates the early gunpowder period (1400-1500) before firearms became reliable enough to dominate. The dismounted combat was due to the specific terrain and weather conditions.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_062",
        title: "The Cannon Ships",
        actualYear: 1509,
        difficulty: "hard",
        description: `A small fleet of ocean-going sailing ships faced a much larger force of galleys, dhows, and coastal vessels. The numbers were perhaps 18 ships against over 100. But the smaller fleet had a decisive advantage: purpose-built warships mounting heavy cannon in broadside batteries—cast bronze pieces firing iron balls, a technology only recently reliable enough for naval use.

The local naval tradition emphasized boarding actions—ramming alongside an enemy, then overwhelming the crew with soldiers. Ships were designed for speed and maneuverability, carrying large crews of fighting men. Against other ships of similar design, these tactics worked.

But the cannon ships fought differently. They stood off at range, using their guns to shatter hulls and sweep decks. When enemies closed to board, point-blank cannon fire destroyed them. The sailing ships could also tack against the wind, maneuvering in ways the oar-and-sail vessels could not match.

The battle was a massacre. The defending fleet was destroyed, its admiral killed. The victors established fortified trading posts, using their naval superiority to control commerce across an entire ocean.

This was among the first demonstrations that broadside sailing warships could defeat any number of traditional vessels.`,
        hints: [
            { cost: 20, text: "Cast bronze naval cannon became reliable for shipboard use in the late 15th century. Cast iron naval guns emerged in the mid-16th century. The 'recently reliable' technology suggests around 1490-1520.", explanation: "The cannon technology helps date this battle." },
            { cost: 25, text: "Broadside sailing warships defeating galley/dhow fleets through stand-off gunnery was a revolutionary development of the early 1500s that would define naval warfare for 350 years.", explanation: "The tactical revolution helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Diu in 1509. Cast bronze shipboard cannon became reliable enough for naval warfare in the late 1400s-early 1500s—earlier naval combat relied on ramming and boarding. European ships built around broadside gunnery first appeared around 1500. The decisive defeat of traditional boarding-focused fleets (fighting from castles on deck) by cannon ships at long range was a revolutionary development of the early 1500s.",
        tags: ["naval", "16th-century", "asia"]
    },
    {
        id: "campaign_063",
        title: "The Gun Lines",
        actualYear: 1575,
        difficulty: "medium",
        description: `A castle garrison was under siege, and a relief army marched to save it. The besieging force turned to face the relief, knowing they would have to fight.

The relief army's commander had studied the failures of cavalry against gunpowder weapons. He prepared his position carefully: a stream to the front as an obstacle, wooden palisades to break up charges, and behind them, ranks of arquebusiers arranged in rotating volleys—matchlock designs based on weapons introduced by maritime traders just thirty years earlier, now being produced locally in large numbers. As one rank fired, the next stepped forward while the first reloaded, maintaining continuous fire.

The besieging army relied on mounted warriors—armored lancers whose charges had dominated battlefields for generations. Their commander believed in shock and aggression. Despite advice to the contrary, he ordered repeated cavalry charges against the prepared position.

The result was slaughter. Horses couldn't cross the stream and palisades at speed. The rotating volleys meant continuous fire—no pause to charge home during reloading. Wave after wave of elite cavalry was shot down. The attacking army lost perhaps 10,000 of its 15,000 men, including most of its senior commanders.

The battle demonstrated conclusively that massed gunpowder infantry, properly positioned, could destroy any cavalry.`,
        hints: [
            { cost: 20, text: "Matchlock arquebuses arrived in East Asia via Portuguese traders in the 1540s. Descriptions of these weapons as 'introduced thirty years earlier' place a battle around 1570-1580.", explanation: "The firearm introduction timeline helps date this battle." },
            { cost: 25, text: "Rotating volley fire—maintaining continuous fire by having ranks alternate shooting and reloading—was independently developed in the late 16th century and became standard doctrine by the 1590s-1600s.", explanation: "The volley fire technique helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Nagashino in 1575. The matchlock arquebuses described as 'introduced thirty years earlier' by maritime traders point to the 1540s Portuguese arrival, making this battle circa 1575. The rotating volley fire with palisade defenses represents cutting-edge gunpowder tactics of this period.",
        tags: ["pitched-battle", "16th-century", "asia"]
    },
    {
        id: "campaign_064",
        title: "The Ambush in the Wetlands",
        actualYear: 1742,
        difficulty: "hard",
        description: `A colonial outpost faced invasion by a much larger force from a rival colonial power. The attackers landed with perhaps 2,000 soldiers—regular infantry equipped with smoothbore flintlock muskets using paper cartridges, bayonets, and the colorful uniforms typical of the era. These weapons had an effective range of about 75 yards.

The defenders numbered only a few hundred: colonial militia, allied native warriors, and a small contingent of regular soldiers. They couldn't fight a pitched battle. Instead, they used the terrain—dense forests, marshlands, and narrow paths—to ambush and harass.

The decisive engagement came on a narrow trail through marshland. The invading column was strung out, unable to form proper battle lines. Hidden defenders opened fire from concealed positions in the trees and undergrowth. The flintlock muskets were inaccurate beyond 50 yards, but at close range in an ambush, they were devastating.

The attackers couldn't locate their enemies to return effective fire. Unable to deploy, taking casualties from an invisible enemy, they broke and fled. The invasion collapsed, the survivors retreating to their ships.

The victory secured the colony's survival and established the border between two empires for a generation.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with paper cartridges became standard military equipment around 1690-1700 and remained so until the mid-19th century. Earlier armies used matchlock or wheel-lock systems.", explanation: "The firearm technology helps date this battle." },
            { cost: 25, text: "Elaborate colorful military uniforms became standard in the 18th century, distinguishing it from both earlier (plainer) and later (more practical) military dress.", explanation: "The uniform style helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Bloody Marsh in 1742. Flintlock muskets with paper cartridges became standard around 1690-1700 and remained so until the mid-19th century. Elaborate colorful military uniforms became standard in the 18th century, distinguishing it from both earlier (plainer) and later (more practical) military dress. The colonial border conflict context in the Americas indicates the 18th century specifically.",
        tags: ["ambush", "18th-century", "americas"]
    },
    {
        id: "campaign_065",
        title: "The Coalition's End",
        actualYear: 1214,
        difficulty: "medium",
        description: `A king faced invasion by a coalition: an emperor from the east, a count from the north, and various other lords with grievances. The coalition army was larger, but the king's army was more unified.

Both armies were built around heavy cavalry—knights in mail hauberks with flat-topped great helms, a relatively recent helmet design that enclosed the face but limited vision. The horses were unarmored but large and trained for war. Infantry played a supporting role: spearmen to protect the knights when dismounted, crossbowmen to harass enemy formations.

The battle became a swirling cavalry melee. Knights sought out enemy knights for personal combat, recognizing each other by heraldic devices painted on shields and embroidered on surcoats. Unhorsed knights were captured for ransom rather than killed—worth more alive than dead.

A crucial moment came when the king himself was pulled from his horse. His bodyguards fought desperately to protect him while he remounted. He survived, and his knights broke the enemy center.

The coalition army shattered. The emperor fled, abandoning his imperial regalia. Dozens of nobles were captured, their ransoms enriching the victor. The political consequences lasted for generations.`,
        hints: [
            { cost: 20, text: "The flat-topped great helm emerged around 1180-1200 and was standard through the 13th century. Earlier knights wore open-faced helmets with noseguards; later the visored bascinet replaced it.", explanation: "The helmet style helps date this battle." },
            { cost: 25, text: "Mail hauberks as the primary armor (rather than full plate) combined with unarmored horses indicates the period before 1300, when plate armor and horse barding began to spread.", explanation: "The armor technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Bouvines in 1214. Flat-topped great helms were a 'relatively recent helmet design'—they emerged around 1180-1200 and were standard through the 13th century. Mail hauberks without plate armor indicates pre-1300. Unarmored horses and fighting primarily for ransom rather than kills indicates the High Medieval period before professional infantry and full plate changed warfare's economics.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_066",
        title: "The Invader's Guns",
        actualYear: 1526,
        difficulty: "medium",
        description: `An invader from the mountains led perhaps 12,000 veteran soldiers against a defending army of 100,000. The disparity seemed insurmountable. But the invader had advantages the defenders couldn't match.

His army included matchlock-armed infantry and field artillery—weapons the defending army had never faced. His cannons were chained together with barriers between them, a defensive technique adapted from steppe warfare traditions, creating a wall the enemy cavalry couldn't easily penetrate. More importantly, his troops were disciplined veterans of decades of warfare, while the defending force was an unwieldy coalition of contingents with questionable loyalty.

The invader chose his ground carefully and prepared it. His matchlock men took positions behind the chained artillery. The flanks were anchored on terrain features.

The defenders attacked with their traditional strength: masses of cavalry and war elephants. But the elephants panicked at the noise and smoke of gunfire—they had never encountered such weapons. The cavalry charges broke against the fortified artillery line. When the defenders were exhausted, the invader's cavalry swept around the flanks in a double envelopment.

The defending sultan died in the rout. The invader's dynasty would rule for three centuries.`,
        hints: [
            { cost: 20, text: "The technique of chaining artillery together to form defensive barriers was characteristic of Central Asian warfare in the early 16th century, combining gunpowder technology with steppe wagon-fort traditions.", explanation: "The artillery tactics help date this battle." },
            { cost: 25, text: "War elephants' vulnerability to gunfire—panicking at the noise and smoke—was a lesson learned throughout the early 16th century as firearms spread through South Asia.", explanation: "The elephant reaction to firearms helps narrow the timeframe to the early gunpowder era." }
        ],
        explanation: "This was the First Battle of Panipat in 1526. The technique of chaining artillery together as defensive barriers combined steppe wagon-fort traditions with gunpowder technology—this was characteristic of Central Asian warfare in the early 16th century specifically. War elephants panicking at gunfire indicates the early gunpowder era in South Asia (1500s-1530s), before armies adapted to firearms. The 'dynasty ruling for three centuries' points to the Mughals (1526-1857).",
        tags: ["pitched-battle", "16th-century", "asia"]
    },
    {
        id: "campaign_067",
        title: "The Waterless March",
        actualYear: 1187,
        difficulty: "medium",
        description: `An army of heavy cavalry marched into arid terrain to relieve a besieged fortress. The commander knew the risks but felt he had no choice—the fortress held important hostages and its loss would shatter the kingdom's defenses.

The enemy commander understood his opponent's weakness: the heavy cavalry—knights in mail hauberks over quilted padding, with flat-topped helmets and kite shields, riding unarmored horses—needed water for both men and horses. He positioned his army between the marching column and the nearest water source, then waited.

The marching army was harassed constantly by horse archers firing composite recurve bows laminated from wood, horn, and sinew—technology perfected over centuries on the steppes. Unable to catch the light cavalry, unable to find water, the knights and their horses grew exhausted. When they tried to camp, the enemy set fire to the dry scrubland, adding smoke and heat to their misery.

The next morning, the army tried to fight through to water. The infantry, maddened by thirst, broke formation and fled toward a hill, where they were surrounded and captured. The cavalry charged repeatedly but couldn't break through. Exhausted, dehydrated, and demoralized, they were overwhelmed.

Nearly the entire army was killed or captured, including the king himself. Within months, cities that had stood for nearly a century fell without armies to defend them.`,
        hints: [
            { cost: 20, text: "Mail hauberks with flat-topped helmets and kite shields were standard equipment in the 12th century. Plate armor and horse barding came later; earlier periods used less complete mail coverage.", explanation: "The armor technology helps date this battle." },
            { cost: 25, text: "Composite recurve bows made from wood, horn, and sinew were the standard steppe and Middle Eastern weapon from antiquity through the medieval period, ideal for mounted archery.", explanation: "The bow technology confirms the medieval timeframe." }
        ],
        explanation: "This was the Battle of Hattin in 1187. Mail hauberks with flat-topped helmets and kite shields were standard crusader equipment from 1150-1250—earlier helmets were conical, later ones transitioned to visored bascinets. Unarmored horses indicate pre-1300, before horse barding became common. The 'cities that had stood for nearly a century' falling afterward points to the Crusader states founded in 1099.",
        tags: ["pitched-battle", "12th-century", "middle-east"]
    },
    {
        id: "campaign_068",
        title: "The Cavalry Pursuit",
        actualYear: 1706,
        difficulty: "medium",
        description: `A coalition army caught the enemy army deployed on open ground with its flanks unsecured. The enemy commander had chosen the position hastily, expecting reinforcements that never arrived.

Both armies used the standard weapons of the era: flintlock muskets with socket bayonets, infantry in linear formations three ranks deep, cavalry with sabers and carbines. The socket bayonet had only recently become universal, finally allowing armies to dispense with pikemen entirely.

The coalition commander saw his opportunity. Rather than a frontal assault, he sent his cavalry around the enemy's exposed flank. The horsemen, charging in disciplined squadrons, rolled up the enemy line from the side.

Once the flank collapsed, panic spread. The enemy army disintegrated. The pursuit was relentless—coalition cavalry chased the routers for miles, capturing thousands. The enemy lost over 15,000 men; the victors, barely 3,000.

The victory gave the coalition control of an entire province and demonstrated the devastating potential of cavalry exploitation against a broken enemy.`,
        hints: [
            { cost: 20, text: "Socket bayonets 'recently becoming universal' indicates the early 18th century (1700-1720). The socket bayonet was adopted around 1690-1700, replacing earlier designs.", explanation: "The bayonet technology helps date this battle." },
            { cost: 25, text: "Three-rank linear infantry formations were standard from roughly 1700-1800. Earlier formations were deeper; later (Napoleonic) formations often used columns.", explanation: "The formation depth helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Ramillies in 1706. Socket bayonets 'recently becoming universal' indicates 1700-1720—they replaced plug bayonets and pikes during this transition. Three-rank linear formations were standard 1700-1800; earlier formations were deeper, later Napoleonic tactics used columns. Cavalry decisive at the operational level (pursuit destroying a broken army) was most effective in the 18th century before rifled weapons increased infantry firepower.",
        tags: ["pitched-battle", "18th-century", "europe"]
    },
    {
        id: "campaign_069",
        title: "The Prince's Gamble",
        actualYear: -401,
        difficulty: "hard",
        description: `A prince hired an army of foreign heavy infantry—perhaps 10,000 professional soldiers—to help him seize a throne from his brother. These mercenaries were equipped with large round shields called aspis, bronze helmets, linen or bronze cuirasses, and long thrusting spears. They fought in a tight formation called the phalanx, presenting a wall of shields and spear points—military technology that had dominated warfare in their home region for over two centuries.

The brother-king's army was vast—contemporary accounts claim hundreds of thousands, though 50,000-100,000 is more realistic. It included excellent cavalry, infantry armed with bows and wicker shields, and scythed chariots intended to break up enemy formations.

When battle came, the mercenary phalanx proved unstoppable. The king's infantry couldn't penetrate the shield wall, and the scythed chariots were ineffective against disciplined troops who simply opened lanes and let them pass. The mercenaries swept their portion of the field.

But on the other wing, the prince led a reckless cavalry charge against the king's bodyguard. He was killed in the fighting. With his death, the cause was lost—it didn't matter that the mercenaries were undefeated.

The survivors faced a legendary march home, abandoned in hostile territory thousands of miles from safety.`,
        hints: [
            { cost: 20, text: "The hoplite panoply (bronze helmet, aspis shield, thrusting spear, phalanx formation) dominated Greek warfare from roughly 700 BCE to 300 BCE. Its description as dominant 'for over two centuries' suggests the 5th-4th century BCE.", explanation: "The infantry equipment helps date this battle." },
            { cost: 25, text: "Scythed chariots were used by Persian armies primarily in the 5th-4th centuries BCE. They were intended to break up infantry formations but were rarely effective against disciplined troops.", explanation: "The chariot technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Cunaxa in 401 BCE. The hoplite panoply (bronze helmet, aspis shield, thrusting spear) dominated Greek warfare from ~700 BCE until Alexander's reforms ~330 BCE. If it had been dominant 'for over two centuries,' the battle is after ~500 BCE. Scythed chariots were used by Persian armies primarily in the 5th-4th centuries BCE. The combination of veteran Greek mercenaries in Persian succession disputes matches the early 4th century BCE specifically.",
        tags: ["pitched-battle", "ancient", "asia"]
    },
    {
        id: "campaign_070",
        title: "The Trench Defense",
        actualYear: 530,
        difficulty: "hard",
        description: `A frontier fortress city faced siege by a vastly superior enemy army—perhaps 50,000 against 25,000 defenders. The defending commander, young and untested, prepared his position carefully.

He dug a complex system of trenches in front of his lines. The trenches weren't continuous but interrupted, creating channels that would funnel enemy cavalry into killing zones. Behind the trenches, he positioned infantry armed with spears and shields in the center, with cavalry on the wings.

He also placed a concealed cavalry force on a hill—a reserve to strike at the critical moment.

The attackers sent their famous heavy cavalry forward—cataphracts, armored lancers on armored horses wielding two-handed lances called kontos that left no room for shields. These were the shock troops that had won them an empire. But the trenches disrupted their charge, and the defending cavalry countercharged into their disorder. On the other wing, the defenders feigned retreat, drawing pursuit, then wheeled and attacked.

When the enemy committed their reserve, the hidden cavalry swept down from the hill into their flank. The army that had seemed invincible broke and fled.

The victory secured the frontier for years and made the young commander's reputation.`,
        hints: [
            { cost: 20, text: "Cataphract cavalry (fully armored riders on armored horses with two-handed lances) reached their peak effectiveness in the 3rd-7th centuries CE. Earlier and later periods used different heavy cavalry equipment.", explanation: "The cavalry technology helps date this battle." },
            { cost: 25, text: "The two-handed lance (kontos) requiring the rider to forgo a shield was characteristic of Persian and related heavy cavalry traditions in the late ancient period.", explanation: "The cavalry equipment details help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Dara in 530 CE. Cataphract cavalry (fully armored riders on armored horses) reached peak effectiveness 300-700 CE; earlier and later periods used different heavy cavalry equipment. The two-handed kontos lance (requiring no shield) was characteristic of Persian and Byzantine cavalry in this period specifically. Trench systems to channel cavalry charges represent sophisticated late Roman engineering.",
        tags: ["pitched-battle", "6th-century", "middle-east"]
    },
    {
        id: "campaign_071",
        title: "The Phalanx Breaks",
        actualYear: -168,
        difficulty: "medium",
        description: `Two great military systems met in a battle that would decide the fate of an ancient kingdom. One army relied on the pike phalanx—dense formations of infantry wielding 18-foot sarissa pikes, a wall of points that had conquered an empire two centuries earlier.

The opposing army used smaller, more flexible units. Their infantry threw heavy javelins called pila, then closed with short swords called gladii, protected by large curved shields called scuta. Each soldier fought with more individual space, able to move over broken ground without losing formation. This military system had been perfected over two centuries of continuous warfare.

The battle began accidentally when foraging parties clashed. Both armies formed hastily. The phalanx advanced, and on level ground it was unstoppable—the shorter weapons couldn't reach past the pike hedge. The opposing infantry fell back.

But the ground was uneven. Gaps appeared between phalanx units as they crossed rough terrain. The more flexible infantry saw their opportunity. They stopped retreating, pushed into the gaps, and got inside the pike wall.

At close quarters, the long pike was useless. The swordsmen cut down the pikemen, who had only small daggers for close defense. The phalanx dissolved, and with it, an independent kingdom that had lasted three centuries.`,
        hints: [
            { cost: 20, text: "The pilum (heavy javelin), gladius (short sword), and scutum (curved shield) combination was the Roman military system from roughly 300-100 BCE, perfected through constant warfare.", explanation: "The infantry equipment helps date this battle." },
            { cost: 25, text: "The 18-foot sarissa pike phalanx was the Macedonian system that had 'conquered an empire two centuries earlier'—placing its creation around 350 BCE and suggesting this battle around 150 BCE.", explanation: "The phalanx timeline helps narrow the date." }
        ],
        explanation: "This was the Battle of Pydna in 168 BCE. The sarissa phalanx described as having 'conquered an empire two centuries earlier,' combined with the Roman pilum, gladius, and scutum system 'perfected over two centuries,' places this precisely in the mid-2nd century BCE.",
        tags: ["pitched-battle", "ancient", "europe"]
    },
    {
        id: "campaign_072",
        title: "The River Crossing",
        actualYear: 1547,
        difficulty: "hard",
        description: `Religious divisions had torn an empire apart. A coalition of princes who had adopted a new faith faced the emperor's army across a river. The princes believed the river was impassable—they could negotiate from a position of safety.

They were wrong. The emperor's army included veteran infantry from the southern mountains—pikemen and arquebusiers organized into tercios, dense formations that combined the pike's defensive power with gunpowder's killing range. These formations had been developed in earlier wars and would dominate battlefields for another century. These soldiers found a ford.

The crossing was opposed, but the professional infantry pushed through. Once across, they formed their battle lines with practiced efficiency. The coalition army was caught unprepared, still trying to organize.

The battle was brief. The coalition cavalry charged but couldn't break the tercio formations. Arquebusiers shot down horses and riders. The coalition infantry, less professional and less well-equipped, broke and ran.

The leading prince was captured. The emperor's victory seemed to settle the religious question—though the settlement would last barely five years before conflict erupted again.`,
        hints: [
            { cost: 20, text: "The tercio formation was developed during the Italian Wars (1490s-1500s) and dominated European warfare until the 1630s. Its description as 'proven' but still dominant suggests the mid-16th century.", explanation: "The tercio timeline helps date this battle." },
            { cost: 25, text: "Religious warfare over a 'new faith' dividing an empire, with conflict that would continue 'for another century,' points to the Protestant Reformation era (1520s-1648).", explanation: "The religious conflict context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Mühlberg in 1547. The tercio formation was developed during the Italian Wars (1490s-1500s) and dominated until the 1630s; its description as established but still effective indicates mid-16th century. Religious warfare over a 'new faith' dividing an empire, with conflict continuing 'for another century,' points to the Protestant Reformation era (1520s-1648, ending with the Peace of Westphalia).",
        tags: ["pitched-battle", "16th-century", "europe"]
    },
    {
        id: "campaign_073",
        title: "The Gun Park",
        actualYear: 1453,
        difficulty: "medium",
        description: `A long war was ending. The invaders who had occupied much of the kingdom were being pushed back, fortress by fortress. A relief army marched to save one of their last strongholds.

The defenders had prepared a fortified camp near the besieged town: earthworks and trenches protecting a park of perhaps 300 guns. These were not the massive bombards used to break walls, but smaller field pieces—culverins and other artillery designed to shoot at men rather than masonry. They used corned powder, improved granulated gunpowder that burned more consistently than the earlier serpentine powder.

The relief army's commander, an aging veteran, led his men-at-arms in a mounted charge against the camp. It was the traditional response to any challenge: the armored cavalry charge that had dominated battlefields for centuries.

But the earthworks channeled the charge, and the guns tore into the horsemen. Wave after wave of men-at-arms died in the killing ground. When allied reinforcements arrived on the enemy flank, the survivors broke and fled. The commander himself was killed.

The stronghold fell shortly after. The war was effectively over. More importantly, the battle announced that field artillery had fundamentally changed warfare.`,
        hints: [
            { cost: 20, text: "Corned powder (granulated gunpowder) began replacing serpentine powder in the early-to-mid 15th century. Its widespread adoption in field artillery marks the 1440s-1450s period.", explanation: "The gunpowder technology helps date this battle." },
            { cost: 25, text: "Field artillery used against cavalry (rather than just for siege work) was a revolutionary development of the 1440s-1450s, before which armies relied primarily on armored cavalry charges.", explanation: "The tactical use of artillery helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Castillon in 1453. Corned powder (granulated gunpowder) replaced serpentine powder in the early-to-mid 15th century, making field artillery reliable enough for battlefield use. Field artillery defeating cavalry charges (rather than just battering walls) was a revolutionary development of the 1440s-1450s—before this, armies relied on cavalry charges for decisive action. The combination indicates the early 1450s.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_074",
        title: "The Crusaders' Folly",
        actualYear: 1396,
        difficulty: "medium",
        description: `A coalition of knights from across western Christendom assembled for a crusade against invaders threatening the southeastern frontier. The army was impressive—thousands of heavily armored men-at-arms wearing the most advanced plate armor of the era, full steel harnesses that were only just becoming common, replacing the earlier combination of mail and plate.

But the army lacked discipline. The knights quarreled over precedence and glory. When they encountered the enemy, the French contingent demanded the honor of the first charge and got it.

The enemy commander had prepared. He positioned light cavalry and infantry on the forward slopes, then hid his heavy cavalry—sipahi armored lancers and the elite slave-soldier infantry, troops taken as children and trained for war—behind the ridge.

The crusader knights charged through the light forces easily, their plate armor turning arrows and their destriers crushing infantry. Elated, they pursued up the hill—and rode into the hidden army. Exhausted horses, blown from the uphill charge, faced fresh heavy cavalry.

The crusaders were annihilated. Thousands were killed or captured. The ransoms bankrupted noble families across Europe. The crusade ended in disaster, and the invasion it meant to stop continued unchecked.`,
        hints: [
            { cost: 20, text: "Full plate armor harnesses 'just becoming common' indicates the late 14th century (1380s-1400s). Earlier knights wore mail with partial plate; later plate armor was universal for wealthy fighters.", explanation: "The armor technology helps date this battle." },
            { cost: 25, text: "The slave-soldier infantry (devshirme/Janissary system) in their early period—before widespread firearms adoption—indicates the late 14th century, when this military institution was first becoming significant.", explanation: "The military system helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Nicopolis in 1396. Full plate armor harnesses 'just becoming common' indicates the 1380s-1400s specifically—earlier knights wore mail with partial plate additions, and by 1420-1430 full plate was universal for wealthy fighters. The Janissary slave-soldier system was established in the 1360s; their early period before widespread firearms adoption was the late 14th century (they became famous as arquebusiers only in the 15th-16th centuries).",
        tags: ["pitched-battle", "14th-century", "europe"]
    },
    {
        id: "campaign_075",
        title: "The Kingdom's End",
        actualYear: 1526,
        difficulty: "medium",
        description: `A kingdom that had stood for five centuries faced invasion by an empire at the height of its power. The king assembled his feudal army—perhaps 25,000 men, including heavily armored knights, lighter cavalry, and peasant infantry with polearms.

The invaders brought perhaps 50,000 soldiers, but their true advantage was technological and organizational. Their elite slave-soldier infantry carried arquebuses and fought in disciplined formations—the most advanced military technology of the era, with cast bronze cannons and corned gunpowder superior to what most opponents could field. Their artillery was modern and mobile. Their cavalry combined traditional horse archers with heavy lancers.

The king's commander chose to attack before reinforcements could arrive, fearing the army would melt away if forced to wait. The knights charged in the traditional manner.

The artillery tore holes in the charging cavalry. The arquebus infantry shot down those who reached the lines. When the knights finally closed to melee, they were already broken. The king himself died in the fighting—drowned fleeing across a swollen stream in heavy armor.

The kingdom was partitioned. The invaders would occupy the central portion for nearly two centuries.`,
        hints: [
            { cost: 20, text: "Ottoman firearms and artillery reached their peak advantage over opponents in the early 16th century (1500s-1530s). Later, other powers caught up technologically.", explanation: "The technological gap helps date this battle." },
            { cost: 25, text: "Feudal heavy cavalry charging against disciplined arquebus infantry was the characteristic—and usually disastrous—tactical matchup of the early 16th century.", explanation: "The tactical mismatch helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Mohács in 1526. Ottoman firearms and artillery reached peak advantage over opponents in the early 16th century (1500s-1530s)—later, other powers caught up technologically. Feudal heavy cavalry charging against disciplined arquebus infantry was the characteristic—and usually disastrous—tactical matchup of the early 16th century. The kingdom being 'partitioned' and occupied 'for nearly two centuries' matches the Ottoman period in Hungary (1526-1699).",
        tags: ["pitched-battle", "16th-century", "europe"]
    },
    {
        id: "campaign_076",
        title: "The Flayed Commander",
        actualYear: 1571,
        difficulty: "medium",
        description: `An island colony, held for nearly a century by a maritime republic, faced invasion by an expanding empire. The main city fell quickly, but the port fortress held out under a determined commander.

The siege lasted nearly a year. The defenders, barely 7,000 against perhaps 200,000 attackers, repulsed assault after assault. Both sides used arquebus-armed infantry and artillery, but the attackers had overwhelming numbers. The fortress walls, built in the older medieval style rather than the new angular bastions, were slowly pounded to rubble.

Disease and starvation weakened the garrison. Promised relief fleets never arrived. When the walls were finally breached and only a few hundred defenders remained, the commander negotiated a surrender with safe passage guaranteed.

The attackers broke the agreement. The commander was tortured and executed; his skin was stuffed with straw and sent as a trophy. The betrayal outraged the defenders' countrymen, contributing to the great naval battle that would follow months later.

The siege demonstrated both the power of determined defense and the brutal nature of warfare in this era.`,
        hints: [
            { cost: 20, text: "Medieval-style walls being vulnerable to artillery while newer angular bastions provided better defense was a key distinction in the mid-16th century, during the transition to trace italienne fortifications.", explanation: "The fortification technology helps date this battle." },
            { cost: 25, text: "Arquebusiers as the standard infantry firearm indicates the period from roughly 1520-1600, before the musket became dominant.", explanation: "The infantry weapons help narrow the timeframe." }
        ],
        explanation: "This was the Siege of Famagusta in 1570-1571. The medieval walls vulnerable to artillery, arquebus-armed infantry, and the commander's flaying contributing to 'the great naval battle months later' (Lepanto, October 1571) all place this precisely in 1571.",
        tags: ["siege", "16th-century", "mediterranean"]
    },
    {
        id: "campaign_077",
        title: "The Betrayed Army",
        actualYear: 1757,
        difficulty: "hard",
        description: `A trading company's private army—3,000 soldiers, mostly local recruits trained and equipped in European style—faced a regional ruler's force of 50,000. The disparity seemed insurmountable.

But the trading company had been negotiating. Key nobles in the ruler's army had secretly agreed to switch sides or stand aside. The battle would be decided by politics as much as fighting.

The engagement began with an artillery duel. The company's guns were modern field pieces served by professional artillerists; the ruler's artillery was larger but poorly served. When monsoon rain fell, the company's gun crews covered their powder; the ruler's did not.

When the rain stopped, the company's artillery resumed firing while the ruler's guns were silent. The company's infantry—disciplined lines of sepoys with flintlock muskets and socket bayonets, using standardized India Pattern weapons—advanced against increasingly demoralized opposition. Their disciplined volley fire could devastate less organized opponents.

The expected betrayal came. Major contingents of the ruler's army stood aside or withdrew. The battle became a rout. The ruler fled and was soon murdered.

The trading company became the effective ruler of a wealthy province, transforming from merchants into sovereigns.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with socket bayonets were the dominant infantry weapon from roughly 1700-1850. The standardized 'India Pattern' musket became common in colonial service in the mid-18th century.", explanation: "The infantry weapons help date this battle." },
            { cost: 25, text: "Trading companies with private armies fighting in South Asia against larger traditional forces was characteristic of the mid-18th century colonial period.", explanation: "The colonial warfare context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Plassey in 1757. Flintlock muskets with socket bayonets were standard 1700-1850. The 'India Pattern' musket (a simplified design for colonial service) became common in the mid-to-late 18th century. Trading companies with private armies fighting in South Asia was characteristic of the 1750s-1820s—before this, European presence was mostly coastal trading posts; afterward, colonial governments took direct control.",
        tags: ["pitched-battle", "18th-century", "asia"]
    },
    {
        id: "campaign_078",
        title: "The Schiltrons",
        actualYear: 1298,
        difficulty: "hard",
        description: `A rebel army faced a royal force on an open field. The rebels lacked cavalry and heavy armor—their nobles had largely stayed home or defected. What they had were common soldiers: spearmen equipped with twelve-foot pikes, formed into dense circular formations called schiltrons.

The royal army had everything: heavy cavalry in mail and early plate, professional crossbowmen, and Welsh longbowmen with draw weights of perhaps 80-100 pounds—early war bows that would grow even more powerful in later decades. These rapid volleys outranged the crossbow. The cavalry charged first, eager for glory.

The schiltrons held. The horses wouldn't charge home into the hedge of pike points. The cavalry milled around, unable to break in, taking casualties from spearmen stabbing at horses and riders.

Then the king ordered his archers forward. The longbowmen and crossbowmen stood off at distance and shot into the packed formations. The spearmen couldn't charge—if they broke formation, the cavalry would ride them down. They couldn't retreat. They simply died in place, shot down by thousands of arrows.

The rebel army was destroyed. But the lesson of the schiltron—that common infantry with long spears could stop cavalry—would be remembered.`,
        hints: [
            { cost: 20, text: "Longbow draw weights of 80-100 pounds were characteristic of the late 13th-early 14th century. War bows later reached 150+ pounds as the weapon was refined through the 14th century.", explanation: "The longbow development helps date this battle." },
            { cost: 25, text: "Knights in mail with early plate additions (rather than full plate harnesses) indicates the late 13th century transitional period, before plate armor became standard in the 14th century.", explanation: "The armor technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Falkirk in 1298. Longbow draw weights of 80-100 pounds were characteristic of the late 13th-early 14th century—war bows later reached 150+ pounds as the weapon was refined through the 14th century. Knights in mail with early plate additions (rather than full plate harnesses) indicates the late 13th century transitional period, before plate armor became standard in the 14th century. Schiltron pike formations were a recent Scottish innovation of the 1290s.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_079",
        title: "The Tercios' End",
        actualYear: 1643,
        difficulty: "medium",
        description: `For 150 years, the tercio formation had dominated European battlefields—massive squares of pikemen and musketeers, seemingly invincible. No army had ever broken a tercio in a pitched battle.

A young prince led a numerically inferior army against a force built around these famous formations. Both sides used matchlock muskets, fired by applying a lit slow match to the powder—flintlock mechanisms existed but hadn't yet become standard military issue. The battle began with cavalry clashes on the flanks. The prince's horsemen won on one wing, lost on the other. The outcome would be decided by what happened next.

Rather than pursue the beaten enemy cavalry, the victorious horsemen wheeled and struck the enemy center's flank. The prince personally led repeated charges into the tercio formations, attacking from unexpected angles.

The tercios could not adapt. Designed to face forward, present a hedge of pikes to the front, and fire volleys from the corners, they were helpless against cavalry attacking their flanks and rear. One by one, the formations were surrounded, broken, and destroyed.

The survivors surrendered with honor, allowed to march away with their weapons. But the myth of invincibility was shattered. Within a generation, the tercio would be replaced by thinner, more flexible linear formations.`,
        hints: [
            { cost: 20, text: "Matchlock muskets dominated military use from roughly 1550-1680. Flintlocks 'existed but hadn't yet become standard' indicates the 1620s-1660s transitional period.", explanation: "The firearm technology helps date this battle." },
            { cost: 25, text: "The tercio formation dominated European warfare from roughly 1500-1640. Its defeat and replacement by 'thinner, more flexible linear formations' occurred in the 1630s-1650s.", explanation: "The tactical transition helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Rocroi in 1643. The matchlock muskets with flintlocks 'existed but not standard,' combined with the tercio's defeat after '150 years' of dominance, places this precisely in the mid-1640s transitional period.",
        tags: ["pitched-battle", "17th-century", "europe"]
    },
    {
        id: "campaign_080",
        title: "The Bloody Meadow",
        actualYear: 1471,
        difficulty: "hard",
        description: `A dynastic war had see-sawed for years. The challenger's army, freshly landed from exile, marched to gather support. The king's army pursued and brought them to battle before they could grow stronger.

Both armies used similar equipment: men-at-arms in full plate armor, fighting dismounted with pollaxes—the premier weapon for armored combat, with hammer heads to dent plates, spikes to punch through, and ax blades to cut into joints—and swords; archers with longbows; and billmen with their distinctive hook-bladed polearms. Handguns were present but primitive—slow, inaccurate, and unreliable.

The challenger's army held a strong position behind hedges and rough ground. The king attacked. His archers advanced and began shooting, trying to provoke an enemy charge. It worked—one division of the challenger's army surged forward.

They were met by a countercharge that broke them. The pursuing soldiers swept into the flanks of the remaining enemy divisions. The challenger's army dissolved into rout. The sanctuary of a nearby church was violated when soldiers dragged out hiding fugitives and killed them.

The challenger's heir died in the battle or its immediate aftermath—murdered, some said. The dynasty's cause was effectively dead.`,
        hints: [
            { cost: 20, text: "The pollax was the premier weapon for armored combat in the 15th century, when full plate armor was dominant. Its specialized design for fighting through plate indicates this specific period.", explanation: "The pollax technology helps date this battle." },
            { cost: 25, text: "Handguns as 'primitive' secondary weapons, present but not decisive, indicates the early gunpowder transition of the 15th century before firearms became dominant.", explanation: "The firearm status helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Tewkesbury in 1471. Full plate armor was standard for wealthy fighters 1400-1550. The pollax was the premier weapon for armored combat in the 15th century specifically—its specialized design (hammer, spike, and axe blade) was optimized for fighting through plate. Longbows remained dominant in English armies until ~1480, with firearms replacing them afterward. Handguns as 'primitive' secondary weapons indicates the early gunpowder transition before firearms became decisive.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_081",
        title: "The Jungle Fortress",
        actualYear: 1954,
        difficulty: "medium",
        description: `A colonial power established a fortified airbase in a remote valley, hoping to lure guerrilla forces into a conventional battle where superior firepower would destroy them. The base was supplied entirely by air—transport planes landing on a rough airstrip or dropping supplies by parachute.

The guerrillas accepted the challenge but prepared carefully. They disassembled artillery pieces and carried them through jungle mountains on bicycles and human backs. They dug tunnels and bunkers into the hillsides overlooking the valley. When they were ready, they had more artillery than the defenders expected—and it was positioned to hit the airstrip.

The siege began with artillery barrages that cratered the runway and destroyed aircraft on the ground. Air supply became increasingly difficult—parachute drops scattered cargo into enemy-held jungle. The garrison, supplied by air drops that couldn't meet their needs, slowly starved of ammunition.

Infantry assaults, supported by artillery and waves of soldiers willing to accept massive casualties, overran position after position. After two months, the garrison surrendered. The colonial power's will to continue the war collapsed with it.`,
        hints: [
            { cost: 20, text: "Air supply as the sole logistics for a major base became feasible with transport aircraft developed in the 1940s. Earlier aircraft couldn't carry enough cargo; later helicopters changed the equation again.", explanation: "The air supply technology helps date this battle." },
            { cost: 25, text: "Colonial powers fighting guerrilla insurgencies in Asia was characteristic of the 1945-1975 period, as European empires dissolved after World War II.", explanation: "The colonial warfare context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Dien Bien Phu in 1954. Air supply as the sole logistics for a major base became feasible with transport aircraft developed in the 1940s—earlier aircraft couldn't carry enough cargo, later helicopters would change the equation. Colonial powers fighting guerrilla insurgencies in Asia was characteristic of 1945-1975, as European empires dissolved after WWII. The collapse of 'colonial will to continue' afterward points to the early 1950s.",
        tags: ["siege", "20th-century", "asia"]
    },
    {
        id: "campaign_082",
        title: "The Helicopter War",
        actualYear: 1965,
        difficulty: "medium",
        description: `A new kind of warfare emerged in jungle terrain. Infantry didn't march to battle—they flew in helicopters, landing directly in clearings near enemy positions. The helicopters were turbine-powered machines that could carry a squad of soldiers, with door gunners providing suppressive fire during the approach.

A battalion was inserted into a valley to find and destroy enemy forces. They found more than expected—three regiments, perhaps 2,000 soldiers, converging on the landing zones. The battle became a desperate close-quarters fight in elephant grass and jungle.

Artillery fire was called in dangerously close to friendly positions. Helicopter gunships—armed versions carrying rockets and machine guns—strafed enemy formations. Jet aircraft dropped bombs and napalm. The helicopters kept flying in reinforcements and flying out wounded despite intense ground fire.

After three days, the enemy withdrew. Both sides claimed victory—the defenders had held, but the attackers had mauled a force that expected easy success. The battle proved that helicopter mobility could offset numerical inferiority, but also that this enemy would stand and fight despite massive firepower.`,
        hints: [
            { cost: 20, text: "Turbine-powered transport helicopters capable of carrying infantry squads became operational in the early 1960s. Earlier piston helicopters lacked the power; this was the first war fought with air assault tactics.", explanation: "The helicopter technology helps date this battle." },
            { cost: 25, text: "Helicopter gunships armed with rockets and miniguns were developed specifically for this conflict, entering service in 1962-1965.", explanation: "The gunship technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Ia Drang in 1965. Turbine-powered transport helicopters capable of carrying infantry squads became operational in the early 1960s—earlier piston helicopters lacked the power. Helicopter gunships with rockets and miniguns were developed specifically for Vietnam, entering service 1962-1965. Air assault as a primary tactical doctrine was new; this was the first war fought with these tactics at scale.",
        tags: ["pitched-battle", "20th-century", "asia"]
    },
    {
        id: "campaign_083",
        title: "The Preemptive Strike",
        actualYear: 1967,
        difficulty: "medium",
        description: `Surrounded by hostile neighbors massing forces on every border, a small nation launched a preemptive strike. The air force attacked at dawn, catching enemy aircraft on the ground. Within hours, air superiority was absolute—nearly 400 enemy planes destroyed, most never leaving the runway.

With the skies clear, armored columns raced across the desert. The tanks were modified designs with larger guns than the originals, crewed by soldiers who trained constantly. They faced a larger enemy tank force equipped with Soviet designs, dug in behind prepared defenses.

The attackers didn't assault the defenses directly. They maneuvered around flanks, cut supply lines, and created chaos in enemy rear areas. Tank battles erupted across the desert—the attackers' superior gunnery and tactical flexibility destroyed enemy armor in detail.

Within a week, the attacking nation had tripled its territory, capturing a major peninsula, a strategic heights region, and a city sacred to three religions. The speed of victory shocked the world.`,
        hints: [
            { cost: 20, text: "Modified tanks with 105mm guns facing Soviet T-54/55s was characteristic of Middle Eastern armored warfare in the 1960s-1970s.", explanation: "The tank technology helps date this battle." },
            { cost: 25, text: "Preemptive air strikes destroying enemy air forces on the ground was a strategy that worked spectacularly in this era before hardened aircraft shelters became standard.", explanation: "The air warfare tactics help narrow the timeframe." }
        ],
        explanation: "This was the Six-Day War in 1967. Preemptive air strikes destroying enemy air forces on the ground worked spectacularly in this era before hardened aircraft shelters became standard (post-1970s). The tanks described (modified Centurions/Pattons with 105mm guns facing Soviet T-54/55s) were characteristic of Middle Eastern armored warfare in the 1960s-1970s specifically.",
        tags: ["combined-arms", "20th-century", "middle-east"]
    },
    {
        id: "campaign_084",
        title: "The Urban Nightmare",
        actualYear: 1968,
        difficulty: "hard",
        description: `Enemy forces launched simultaneous surprise attacks across an entire country. In one ancient city, they infiltrated thousands of soldiers who seized government buildings, the old imperial citadel, and residential neighborhoods.

The defenders had to retake the city block by block. They couldn't use their usual advantages—air strikes and artillery would destroy the historic city and kill civilians. Infantry advanced through streets and buildings, clearing each room with rifles, grenades, and hand-to-hand combat.

The fighting lasted nearly a month. Both sides used automatic rifles—the attackers carried assault rifles with curved magazines, the defenders had heavier rifles designed for longer range. Neither weapon was ideal for house-to-house fighting. Tanks and recoilless rifles blasted holes in walls; soldiers advanced through the gaps.

The city was eventually retaken at enormous cost. Thousands of civilians died, many executed by the occupiers. The military victory was overshadowed by the political impact—the offensive shattered public confidence that the war was being won.`,
        hints: [
            { cost: 20, text: "Assault rifles with curved magazines (likely 7.62x39mm) versus heavier battle rifles (likely 7.62x51mm) was the characteristic infantry weapon matchup of the 1960s Cold War conflicts.", explanation: "The rifle technology helps date this battle." },
            { cost: 25, text: "Coordinated surprise attacks across an entire country, combined with urban combat in historic cities, was characteristic of the guerrilla warfare phase of Southeast Asian conflicts in the 1960s-1970s.", explanation: "The operational context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Hue during the Tet Offensive in 1968. Assault rifles with curved magazines (7.62x39mm AK-47) versus heavier battle rifles (7.62x51mm M14) was the characteristic infantry weapon matchup of 1960s Cold War conflicts—earlier wars used bolt-actions, later conflicts featured assault rifles on both sides. Coordinated surprise attacks across an entire country was specifically the 1968 Tet Offensive pattern.",
        tags: ["urban", "20th-century", "asia"]
    },
    {
        id: "campaign_085",
        title: "The Valley of Tears",
        actualYear: 1973,
        difficulty: "hard",
        description: `A surprise offensive caught the defenders at reduced readiness. On a strategic heights region, perhaps 180 tanks faced an assault by over 1,400 enemy tanks advancing in multiple waves. The attackers had to be stopped or they would descend into the heartland below.

The defenders fought from prepared positions on the ridge line, but they were desperately outnumbered. Their tanks were Western designs—late-model Centurions and Pattons with superior optics and fire control systems. The attackers used massed Soviet T-55s and T-62s, simpler but far more numerous. Tank battles raged for four days.

The defenders developed a grim routine: engage at maximum range where their gunnery advantage mattered, destroy as many as possible, fall back before being overrun, repeat. Crews fought until their tanks were destroyed, then joined other crews. Ammunition ran low. Reinforcements trickled in.

On the fourth day, the last defensive line held. The attackers, having lost over 500 tanks, finally withdrew. The defenders had fewer than 20 operational tanks remaining. The valley where they fought earned its name from the burning wrecks that filled it.`,
        hints: [
            { cost: 20, text: "Centurions and Pattons facing T-55s and T-62s was the characteristic tank matchup of Middle Eastern wars from 1967-1982.", explanation: "The specific tank models help date this battle." },
            { cost: 25, text: "Cold War-era proxy conflicts where Western and Soviet equipment faced each other directly occurred primarily in the Middle East, Southeast Asia, and Africa from the 1960s-1980s.", explanation: "The geopolitical context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of the Valley of Tears during the Yom Kippur War in 1973. Centurions and Pattons facing T-55s and T-62s was the characteristic tank matchup of Middle Eastern wars from 1967-1982—earlier wars had different tank generations, later ones had newer models. The Western tanks' superior optics and fire control allowing them to engage at ranges where the Soviet designs couldn't effectively return fire was a specific advantage of this Cold War era equipment mismatch.",
        tags: ["armored-warfare", "20th-century", "middle-east"]
    },
    {
        id: "campaign_086",
        title: "The South Atlantic",
        actualYear: 1982,
        difficulty: "hard",
        description: `A military junta seized islands in the South Atlantic, expecting the distant colonial power to accept the fait accompli. Instead, a naval task force sailed 8,000 miles to retake them.

The landing force was outnumbered by the garrison. They came ashore at night in landing craft, then advanced across roadless terrain on foot, carrying everything they needed. The defenders had prepared positions and air support from the mainland.

One key battle erupted at a narrow isthmus. The attackers advanced across open ground against dug-in defenders with heavy machine guns and mortars. They had light support weapons but no tanks, no artillery preparation, and limited ammunition. The assault succeeded through sheer aggression—fire and movement, section by section, until the defenders broke.

Air attacks with modern jet fighters and anti-ship missiles threatened the fleet throughout. Ships were sunk; soldiers died when supply vessels were hit. But the islands were retaken in just over two months. The junta fell shortly after.`,
        hints: [
            { cost: 20, text: "Anti-ship missiles fired from jet aircraft sinking modern warships was a new and shocking development of the 1970s-1980s, proving that surface fleets were vulnerable in ways not seen since WWII.", explanation: "The naval warfare technology helps date this battle." },
            { cost: 25, text: "A European power projecting force 8,000 miles to retake colonial islands was unusual in the post-WWII era when most colonies had gained independence.", explanation: "The geopolitical context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Goose Green during the Falklands War in 1982. Anti-ship missiles fired from jet aircraft sinking modern warships was a new and shocking development of the 1970s-1980s, proving surface fleets were vulnerable in ways not seen since WWII. A European power projecting force 8,000 miles to retake colonial islands was unusual in the post-WWII era when most colonies had gained independence—this specific combination of factors indicates the early 1980s.",
        tags: ["amphibious", "20th-century", "americas"]
    },
    {
        id: "campaign_087",
        title: "The Thermal Sights",
        actualYear: 1991,
        difficulty: "easy",
        description: `After months of buildup, a coalition launched an air campaign against an army occupying a neighboring country. For six weeks, aircraft systematically destroyed air defenses, command centers, and supply lines. Stealth aircraft evaded radar; precision-guided bombs hit individual buildings; cruise missiles launched from ships struck targets hundreds of miles inland.

When the ground assault began, it was shockingly one-sided. Coalition tanks—equipped with thermal imaging that could see through darkness and smoke—engaged enemy tanks at ranges where return fire was impossible. The defenders' Soviet-designed tanks were destroyed in droves, often before their crews knew they were under attack.

One engagement became legendary. A cavalry squadron—tanks and fighting vehicles—stumbled into a Republican Guard division in a sandstorm. Despite being outnumbered, the coalition force destroyed over 80 enemy vehicles in 23 minutes, losing one fighting vehicle to enemy fire.

The ground war lasted 100 hours. The occupying army was destroyed as a fighting force.`,
        hints: [
            { cost: 20, text: "Thermal imaging allowing tanks to see and engage through darkness and smoke was decisive technology of the late 1980s-1990s. Earlier night vision was more limited.", explanation: "The tank technology helps date this battle." },
            { cost: 25, text: "Stealth aircraft, precision-guided bombs, and cruise missiles used together in a systematic air campaign represented 1990s military technology at its peak.", explanation: "The combined air warfare technology helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of 73 Easting during the Gulf War in 1991. Thermal imaging allowing tanks to see and engage through darkness and smoke was decisive technology of the late 1980s-1990s—earlier night vision was more limited. Stealth aircraft evading radar were first used operationally in 1989-1991. Precision-guided bombs hitting individual buildings were revolutionary in this era. These converging technologies indicate the early 1990s.",
        tags: ["armored-warfare", "20th-century", "middle-east"]
    },
    {
        id: "campaign_088",
        title: "The Helicopter Raid",
        actualYear: 1993,
        difficulty: "medium",
        description: `A peacekeeping mission in a failed state went wrong. Special operations soldiers launched a daylight raid into a hostile city to capture leaders of a warlord's faction. The plan called for a quick helicopter insertion, arrests, and extraction—thirty minutes maximum.

The raiders fast-roped from helicopters into the target area and made the arrests. But the extraction helicopters came under intense fire. A rocket-propelled grenade—a cheap, ubiquitous weapon designed decades earlier—brought down a helicopter. Then another.

The mission became a desperate rescue. Soldiers fought through narrow streets against thousands of militia armed with assault rifles and RPGs. A relief convoy of vehicles tried to reach the crash sites but was ambushed repeatedly and had to withdraw. Soldiers held perimeters around the crashed helicopters through the night.

Eighteen soldiers died; hundreds of militia were killed. The images of dead soldiers being dragged through streets shocked a nation that had expected peacekeeping to be low-risk. The mission was withdrawn within months.`,
        hints: [
            { cost: 20, text: "Rocket-propelled grenades (RPGs) bringing down helicopters and negating technological advantages became a defining image of post-Cold War urban warfare.", explanation: "The asymmetric warfare pattern helps date this battle." },
            { cost: 25, text: "Special operations raids in failed states as peacekeeping missions gone wrong was characteristic of the 1990s-2000s period between the Cold War and the War on Terror.", explanation: "The geopolitical context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Mogadishu in 1993. Rocket-propelled grenades (RPGs)—cheap, ubiquitous weapons designed decades earlier—bringing down helicopters and negating technological advantages became a defining image of post-Cold War urban warfare. Special operations raids in failed states, as peacekeeping missions gone wrong, was characteristic of the 1990s-2000s period between the Cold War and the War on Terror.",
        tags: ["urban", "20th-century", "africa"]
    },
    {
        id: "campaign_089",
        title: "The Red Soldiers",
        actualYear: 1879,
        difficulty: "medium",
        description: `A colonial army invaded a powerful kingdom that had resisted outside influence for decades. The kingdom's military was built around disciplined infantry organized into regiments by age-group, armed primarily with cowhide shields and short stabbing spears—a tactical system that had conquered neighboring peoples for two generations.

The invaders brought the latest military technology: single-shot breech-loading rifles that could be loaded while lying prone, firing brass cartridges. A soldier could fire ten aimed shots per minute. Artillery pieces fired shrapnel shells. Against such weapons, traditional infantry seemed doomed.

But the invaders made a fatal error. One column, over 1,700 men, made camp without proper defensive preparations. Scouts reported enemy movements but were ignored. When the attack came, over 20,000 warriors swept over the camp from multiple directions.

The rifles took a fearsome toll, but the warriors closed the distance through sheer numbers and determination. When ammunition ran low and the perimeter collapsed, the fighting became hand-to-hand. Nearly the entire column was annihilated—one of the worst defeats a major colonial power would suffer in the century.

That same afternoon, a nearby garrison of barely 150 men held a supply station against waves of attackers, proving that breech-loaders behind prepared defenses were nearly invincible.`,
        hints: [
            { cost: 20, text: "Single-shot breech-loading rifles with brass cartridges were standard military weapons from roughly 1865-1890, between muzzle-loaders and magazine rifles.", explanation: "The rifle technology helps date this battle." },
            { cost: 25, text: "Colonial armies suffering major defeats against non-European forces was relatively rare in the 1870s-1890s, when the technological gap was at its widest before machine guns became standard.", explanation: "The colonial warfare context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Isandlwana in 1879. The single-shot breech-loading rifles with brass cartridges place this in the 1865-1890 period. The Zulu age-regiment military system with stabbing spears had been developed in the early 19th century. The contrast between the disaster at the camp and the successful defense at Rorke's Drift that afternoon illustrates the era's tactical realities.",
        tags: ["pitched-battle", "19th-century", "africa"]
    },
    {
        id: "campaign_090",
        title: "The Mountain Kingdom's Victory",
        actualYear: 1896,
        difficulty: "medium",
        description: `A European power sought to add an ancient mountain kingdom to its colonial empire. The kingdom had never been conquered by outside forces, and its emperor mobilized the entire nation to resist.

The invading army of about 18,000 included modern troops with magazine rifles—bolt-action weapons holding multiple rounds, a significant advance over single-shot designs. They also had mountain artillery suitable for the terrain. But the force was spread across multiple columns in difficult mountain terrain, with poor maps and worse intelligence.

The defenders gathered an army of perhaps 100,000, equipped with a mix of weapons: some had modern rifles purchased from rival powers, others had older breech-loaders, and many carried traditional weapons—swords, spears, and shields. What they had in abundance was knowledge of the terrain and overwhelming numbers.

The battle began when the emperor's forces caught one of the European columns in a mountain valley. The invaders were surrounded on three sides. Artillery was overrun. Units were cut off and destroyed piecemeal. By afternoon, the European force had lost over 6,000 dead—proportionally one of the worst colonial defeats in history.

The kingdom remained independent, its mountain terrain and military strength proving too costly for colonial ambitions.`,
        hints: [
            { cost: 20, text: "Magazine rifles (bolt-action, holding multiple rounds) became standard military issue in the 1880s-1890s, replacing single-shot breech-loaders.", explanation: "The rifle technology helps date this battle." },
            { cost: 25, text: "The 'scramble for Africa'—European powers rapidly colonizing the continent—occurred primarily between 1880 and 1914.", explanation: "The colonial context helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Adwa in 1896. Magazine rifles (bolt-action, holding multiple rounds) replaced single-shot breech-loaders as standard military issue in the 1880s-1890s—earlier armies had single-shots, later ones would have machine guns as standard. The 'scramble for Africa' colonial context (European powers rapidly colonizing the continent) indicates the 1880-1914 period. The mountain terrain and ancient kingdom context points to the Ethiopian highlands.",
        tags: ["pitched-battle", "19th-century", "africa"]
    },
    {
        id: "campaign_091",
        title: "The River of Cavalry",
        actualYear: 1898,
        difficulty: "easy",
        description: `A colonial expedition advanced up a great river to reconquer territory lost to a religious uprising over a decade earlier. The force was modern in every way: magazine rifles, machine guns that could fire 500 rounds per minute, artillery, and river gunboats mounting naval guns.

The enemy commander gathered his army outside the capital—perhaps 50,000 warriors, many armed with swords, spears, and older firearms. They believed their faith would protect them against the infidels' weapons.

The battle was a massacre. The machine guns scythed down wave after wave of attackers before they could close. The repeating rifles added to the slaughter. In five hours, 10,000 of the defenders died for fewer than 50 attackers killed.

After the victory, a small force of cavalry was sent to cut off the retreating enemy. They stumbled into a much larger force and charged—21 lancers against thousands of enemies. They cut their way through and out the other side, losing a third of their number—a dramatic example of cavalry shock tactics in the age of machine guns.

The territory was reconquered, and the religious state that had ruled it was destroyed.`,
        hints: [
            { cost: 15, text: "Machine guns capable of 500 rounds per minute became militarily decisive in the 1890s-1900s. Earlier models like the Gatling existed but were less reliable and slower.", explanation: "The machine gun technology helps date this battle." },
            { cost: 20, text: "Cavalry lance charges were becoming anachronistic by the 1890s as machine guns and magazine rifles increased firepower. Such charges still occurred occasionally through WWI but with diminishing success.", explanation: "The cavalry tactics help narrow the timeframe." }
        ],
        explanation: "This was the Battle of Omdurman in 1898. The machine guns firing 500 rounds per minute, combined with the famous cavalry lance charge and the 'religious uprising over a decade earlier' (the Mahdist revolt began 1881), places this in the late 1890s when industrial firepower first created truly one-sided colonial battles.",
        tags: ["pitched-battle", "19th-century", "africa"]
    },
    {
        id: "campaign_092",
        title: "The Desert Between Empires",
        actualYear: 751,
        difficulty: "hard",
        description: `Two great empires clashed at the edge of their spheres of influence, near a river in the heart of the continent. One empire had expanded westward across vast distances, its armies built around disciplined infantry equipped with crossbows and halberds, supported by heavy cavalry. The other had swept eastward in a century of conquest, its armies combining horse archers with heavy cavalry and infantry from many subject peoples.

The battle was fought over control of the wealthy cities along ancient trade routes. A local ruler had appealed to both empires for support, triggering the confrontation.

The eastern empire's army of perhaps 30,000 met a comparable force near the river. The first days of battle were inconclusive. Then, on the third day, a contingent of local cavalry—supposedly allied to the eastern empire—switched sides during the fighting. This betrayal opened a gap in the eastern line.

The western cavalry poured through. The eastern infantry, surrounded, was annihilated. Survivors fled eastward. The eastern empire would never again project power this far west.

The battle determined which civilization would dominate the wealthy trade route cities for centuries. The eastern empire, its army destroyed, would never again project military power this far west.`,
        hints: [
            { cost: 20, text: "Crossbows and halberds as standard infantry weapons, combined with heavy cavalry, was characteristic of Tang Chinese armies from roughly 618-907 CE.", explanation: "The eastern army's equipment helps date this battle." },
            { cost: 25, text: "The rapid Arab/Islamic expansion eastward occurred primarily from 632-750 CE. By 750, the caliphate had reached its greatest extent.", explanation: "The western empire's expansion timeline helps narrow the date." }
        ],
        explanation: "This was the Battle of Talas in 751. Crossbows and halberds as standard infantry weapons were characteristic of Tang China (618-907 CE). The Arab/Islamic expansion 'sweeping eastward in a century of conquest' points to the Umayyad/early Abbasid period (632-750s). The local ruler appealing to both empires and the betrayal by allied cavalry during battle are details specific to this frontier clash where two expanding empires met.",
        tags: ["pitched-battle", "8th-century", "central-asia"]
    },
    {
        id: "campaign_093",
        title: "The Empire's Last Stand",
        actualYear: 636,
        difficulty: "hard",
        description: `A great empire that had recently exhausted itself in decades of war against its eastern rival faced a new threat from the desert south. Raiders who had united under a new faith swept out of the peninsula, defeating every army sent against them.

The emperor gathered his largest army—perhaps 40,000 men, though accounts vary wildly—to crush the invasion. His forces included heavy cavalry called cataphracts, fully armored riders on armored horses. The infantry carried large shields and fought with spears and swords. Many units were Armenian or Arab auxiliaries of uncertain loyalty.

The invaders had perhaps 25,000, mostly light cavalry and infantry. Their cavalry fought with sword and lance, relying on mobility rather than armor. Their infantry were fierce warriors fighting for faith and plunder.

The armies faced each other for days across a river ravine in summer heat. The decisive moment came when Arab auxiliaries in the imperial army defected, and a sandstorm blinded the imperial forces. The cataphracts, their heavy armor a liability in the heat, were overwhelmed. The emperor's army disintegrated.

Within years, the empire would lose its wealthiest provinces—territories it had held for centuries. The map of the world was redrawn permanently.`,
        hints: [
            { cost: 20, text: "Cataphract cavalry (fully armored riders on armored horses) reached peak use from roughly 300-700 CE in Byzantine and Persian armies. The style declined as these empires lost territory.", explanation: "The cavalry type helps date this battle." },
            { cost: 25, text: "Arab armies 'united under a new faith' expanding against Byzantine territory occurred specifically in the 630s-640s, the initial Islamic conquests following Muhammad's death in 632.", explanation: "The conquest context narrows the date precisely." }
        ],
        explanation: "This was the Battle of Yarmouk in 636. The cataphract cavalry indicates the late Roman/Byzantine era (300-700 CE). The Arab armies 'united under a new faith' expanding against Byzantine territory after decades of Byzantine-Persian warfare specifically indicates the 630s Arab conquests—one of history's most rapid and permanent territorial transformations.",
        tags: ["pitched-battle", "7th-century", "middle-east"]
    },
    {
        id: "campaign_094",
        title: "The Northern Border",
        actualYear: 732,
        difficulty: "hard",
        description: `Raiders from the south had crossed the mountains and were pillaging the lands beyond. They had already destroyed one kingdom and were pushing deeper into the continent. A powerful lord gathered the warriors of his realm to stop them.

The invaders relied on cavalry—light horsemen with sword, lance, and bow, supplemented by heavier cavalry from recently conquered territories. They had swept across vast distances in less than a century, seemingly unstoppable. Their raiding force of perhaps 20,000 was laden with plunder from wealthy religious sites.

The defenders were primarily infantry, fighting in dense formations with spears and shields. They wore mail armor—expensive enough that only wealthier warriors could afford it. Heavy cavalry existed but was not yet the dominant arm; these lands were still transitioning from infantry-based to cavalry-based warfare.

The two forces met near a major religious center. For seven days they skirmished and maneuvered. When battle was finally joined, the invaders' cavalry charged repeatedly but could not break the infantry formations. The defenders stood like "a wall of ice," one chronicler wrote.

When the invaders' camp was threatened, their cavalry broke off to protect their plunder. In the confusion, their commander was killed. The army retreated south, never to return in such force. The northern lands remained under different rule than the southern.`,
        hints: [
            { cost: 20, text: "Infantry in mail armor as the primary fighting force, with heavy cavalry not yet dominant, was characteristic of Western European warfare from roughly 500-800 CE, before the mounted knight became supreme.", explanation: "The army composition helps date this battle." },
            { cost: 25, text: "Cavalry armies 'sweeping across vast distances in less than a century' from the south describes the Umayyad expansion (661-750 CE), which reached its furthest northern extent in the early 8th century.", explanation: "The conquest timeline helps narrow the date." }
        ],
        explanation: "This was the Battle of Tours/Poitiers in 732. Infantry in mail as the primary arm, with heavy cavalry 'not yet dominant,' indicates the early medieval transition period (500-800 CE). The Umayyad cavalry raiders who had 'crossed the mountains' and conquered territory 'in less than a century' specifically indicates the early 8th century, at the limit of Arab expansion into Western Europe.",
        tags: ["pitched-battle", "8th-century", "western-europe"]
    },
    {
        id: "campaign_095",
        title: "The Conqueror Conquered",
        actualYear: 1402,
        difficulty: "hard",
        description: `Two great conquerors faced each other—one had built an empire stretching from the western sea nearly to the eastern capital, the other had carved a vast domain across the heart of the continent, emulating the great conquests of a century and a half earlier.

The western sultan brought perhaps 85,000 men: slave-soldier infantry, sipahi cavalry, and Christian vassal contingents. His early artillery pieces—crude bombards firing stone balls—were present but not decisive. His empire was the rising power, having conquered much of the southeastern peninsula.

The eastern conqueror brought perhaps 140,000, including armored heavy cavalry and the horse archers that were still the decisive arm of steppe warfare. He had already conquered legendary cities and defeated every army sent against him.

The battle began with the western army in a strong position. But as fighting continued, contingents on the western sultan's flanks—troops from recently conquered territories—defected to the enemy. The slave-soldiers held their ground, but the flanks collapsed.

The western sultan was captured and died in captivity. His empire was nearly destroyed, losing decades of conquests. It would survive and eventually rebuild, but this defeat delayed its expansion by a generation.`,
        hints: [
            { cost: 20, text: "Early bombards (crude cannon firing stone balls) alongside horse archer cavalry indicates the transitional period of roughly 1350-1450, when gunpowder was present but not yet dominant.", explanation: "The weapons mix helps date this battle." },
            { cost: 25, text: "Central Asian conquerors emulating the Mongol conquests (1210-1280) appeared in the late 14th century. The combination of steppe cavalry traditions with early gunpowder weapons was characteristic of 1370-1405.", explanation: "The conquest context helps narrow the date." }
        ],
        explanation: "This was the Battle of Ankara in 1402. The early bombards alongside steppe horse archer cavalry indicates the late 14th-early 15th century transition. The eastern conqueror 'emulating' conquests from '150 years earlier' points to Timur imitating Genghis Khan. The western sultan captured and dying in captivity matches the fate of Ottoman Sultan Bayezid I.",
        tags: ["pitched-battle", "15th-century", "asia-minor"]
    },
    {
        id: "campaign_096",
        title: "The Forest Ambush",
        actualYear: 9,
        difficulty: "hard",
        description: `A great empire had pushed its frontier to a northern river, but the lands beyond remained unconquered. The military governor of the region led three legions—perhaps 15,000 professional soldiers plus auxiliaries—into the forests to suppress reported unrest.

The legions were built around heavy infantry equipped with large curved shields, throwing javelins called pila, and short stabbing swords called gladii. They fought in disciplined formations, each man trained to fight as part of a unit rather than as an individual warrior. Auxiliary cavalry and light infantry supplemented the heavy foot.

A trusted local ally—a man who had served in the empire's military and held citizenship—secretly organized a coalition of tribes. He led the governor deeper into the forest with false reports, then sprung his trap.

The ambush caught the column strung out along a narrow forest path between hills and marshland. Rain had turned the ground to mud. The legionaries couldn't form their battle lines; they were attacked in small groups from the forest, cut down before they could organize.

The fighting lasted three days as the column struggled forward. Nearly the entire force was annihilated. The governor took his own life rather than be captured. Three legions' eagle standards were lost—a humiliation that would haunt the empire for decades.

The empire never again seriously attempted to conquer the lands beyond the river.`,
        hints: [
            { cost: 20, text: "The pilum (heavy javelin), gladius (short stabbing sword), and scutum (curved shield) were the standard Roman infantry equipment from roughly 300 BCE to 300 CE.", explanation: "The infantry equipment helps date this battle." },
            { cost: 25, text: "Legion formations (heavy infantry supported by auxiliary cavalry) were the core of Roman military power from roughly 100 BCE to 300 CE, before cavalry became dominant.", explanation: "The army organization helps narrow the timeframe." }
        ],
        explanation: "This was the Battle of Teutoburg Forest in 9 CE. The pilum, gladius, and scutum were Roman equipment from 300 BCE-300 CE, but the legion structure (three legions as a standard force) and eagle standards as objects of near-religious importance were specifically Imperial Roman features (after 27 BCE). The empire attempting to conquer 'beyond the river' (the Rhine) but never succeeding points to the early Imperial period—later Rome was defensive, earlier Rome hadn't reached the Rhine.",
        tags: ["ambush", "1st-century", "europe"]
    },
    {
        id: "campaign_097",
        title: "The Gothic Cavalry",
        actualYear: 378,
        difficulty: "hard",
        description: `A migrating people, pushed westward by pressure from the steppes, had been allowed to settle within the empire's borders as refugees. Mistreatment by corrupt officials drove them to revolt. The emperor gathered an army to crush them.

The imperial forces still relied primarily on infantry—legions equipped with large oval shields, spears, and swords. But the cavalry arm had grown in importance; heavy cavalry with long lances and mail armor now played a significant role, a change from centuries earlier when cavalry had been merely auxiliary.

The refugees had infantry but their strength was cavalry—horsemen who fought with lance and sword, many wearing mail. They had learned to fight mounted on the plains before migrating.

The battle began before all imperial forces had arrived—the emperor attacked without waiting for a second army marching to join him. The infantry lines engaged the refugee infantry, pushing them back. Then the refugee cavalry, which had been away foraging, returned to the battlefield.

The cavalry charge struck the imperial flank. The infantry, packed too tightly to maneuver, were surrounded. The emperor was killed—his body was never found. Two-thirds of the army was destroyed.

The battle demonstrated the new dominance of heavy cavalry over infantry that had lost its former discipline and equipment advantages. The empire itself had less than a century remaining in the west.`,
        hints: [
            { cost: 20, text: "Roman infantry with oval shields and spears (rather than the earlier curved scutum and pilum) indicates the late Roman period, roughly 250-500 CE, when military equipment evolved.", explanation: "The infantry equipment change helps date this battle." },
            { cost: 25, text: "Heavy cavalry becoming tactically decisive against Roman infantry was a development of the 4th-5th centuries CE, reversing centuries of infantry dominance.", explanation: "The tactical transition helps narrow the date." }
        ],
        explanation: "This was the Battle of Adrianople in 378 CE. The oval shields and spears (replacing earlier scutum and pilum) indicate late Roman equipment evolution (250-500 CE). Heavy cavalry defeating Roman infantry in decisive fashion was characteristic of the 4th-5th century transition. The emperor's death and the empire having 'less than a century remaining in the west' (fall of Rome 476 CE) confirms the late 4th century.",
        tags: ["pitched-battle", "4th-century", "europe"]
    },
    {
        id: "campaign_098",
        title: "The Last Roman Victory",
        actualYear: 451,
        difficulty: "hard",
        description: `A confederation of steppe warriors had swept across the northern plains, extracting tribute from the empire and raiding at will. Now their king led them in a full invasion, aiming to conquer the western provinces entirely.

The empire, reduced and weakened, gathered a coalition army: its own troops, allied Germanic kingdoms that had settled within imperial territory, and warriors from peoples who feared the invaders more than they disliked the empire. The coalition commander was a skilled general, though he served an ineffective emperor.

Both armies were cavalry-heavy. The invaders relied on horse archers with composite bows, supplemented by Germanic allies and subject peoples fighting with sword and spear. The coalition included heavy cavalry fighting with lance, sword, and javelin, plus infantry from various allied peoples.

The battle was fought on open plains. The fighting was brutal and confused—at one point the invaders were pushed back to their fortified wagon camp. One allied king was killed; his troops nearly routed until the commander rallied them.

By nightfall, neither side had won decisively, but the invaders withdrew. Their king died within two years and his empire fragmented among quarreling successors. The invasion was the last great threat the western empire faced from the steppes, though the empire itself had only decades remaining.`,
        hints: [
            { cost: 20, text: "Horse archer cavalry from the steppes raiding the Roman Empire was characteristic of the 4th-5th centuries CE, when various peoples (Huns, Avars, etc.) threatened the frontier.", explanation: "The steppe raider context helps date this battle." },
            { cost: 25, text: "Coalition armies combining Roman forces with Germanic 'allies settled within imperial territory' was specifically a 5th century arrangement, as the western empire relied increasingly on federate troops.", explanation: "The coalition structure helps narrow the date." }
        ],
        explanation: "This was the Battle of the Catalaunian Plains (Chalons) in 451 CE. The composite bow horse archers from the steppes threatening the Roman Empire indicates the 4th-5th century. The coalition of Romans with Germanic peoples 'settled within imperial territory' as federate allies was specifically the late Western Roman arrangement (5th century). The empire having 'only decades remaining' points to before 476 CE.",
        tags: ["pitched-battle", "5th-century", "europe"]
    },
    {
        id: "campaign_099",
        title: "The Liberation",
        actualYear: 1824,
        difficulty: "medium",
        description: `The last major army defending colonial rule in an entire continent faced a combined force of revolutionary armies. Victory here would effectively end three centuries of colonial domination.

Both sides used similar equipment: smoothbore flintlock muskets, infantry in linear formations, cavalry with sabers. The colonial army had about 9,000 men, many of them American-born loyalists rather than troops from the mother country. The revolutionary force numbered about 6,000, drawn from multiple newly declared republics.

The battle was fought in mountain terrain at high altitude—over 10,000 feet—where even moving was exhausting. The colonial commander held strong positions on a slope. The revolutionary force attacked uphill.

The first assaults failed. But the colonial cavalry, instead of counterattacking the disordered revolutionaries, inexplicably retreated. With their flank exposed, the colonial infantry broke. The rout was complete.

The colonial commander surrendered with his remaining forces. Within a year, the last colonial strongholds on the continent would fall. Three centuries of rule ended not with a negotiated settlement but with military defeat.`,
        hints: [
            { cost: 20, text: "Smoothbore flintlock muskets in linear infantry formations were standard from roughly 1700-1840. The revolutionary/independence war context narrows this further.", explanation: "The weapons and tactics help date this battle." },
            { cost: 25, text: "Wars of independence against colonial rule in the Americas occurred primarily in two waves: 1775-1783 (North America) and 1810-1825 (Central and South America).", explanation: "The independence war timeline helps narrow the date." }
        ],
        explanation: "This was the Battle of Ayacucho in 1824. The smoothbore flintlock muskets indicate 1700-1840. The South American independence war context (ending 'three centuries' of colonial rule) places this in the 1810-1825 period. The high-altitude mountain battle that ended colonial control of an entire continent matches the Peruvian campaign that concluded Spanish rule in South America.",
        tags: ["pitched-battle", "19th-century", "south-america"]
    },
    {
        id: "campaign_100",
        title: "The Company's Gamble",
        actualYear: 1803,
        difficulty: "hard",
        description: `A trading company's general, outnumbered five to one, attacked a fortified position held by a powerful confederation. His force of 7,000 faced perhaps 40,000, including cavalry, infantry, and over 100 artillery pieces served by European-trained crews.

The general's army combined a small core of soldiers from the home islands with a larger force of locally recruited infantry trained and equipped in European style. They carried flintlock muskets with socket bayonets, fought in linear formations, and were drilled to maintain discipline under fire.

The enemy confederation had adopted some modern technology—their artillery was particularly good, directed by European adventurers who had entered their service. Their cavalry remained traditional: light horsemen and heavier lancers fighting with sword and lance.

The battle began when the general, spotting the enemy crossing a river, ordered an immediate attack rather than wait for the force to concentrate. His infantry advanced against prepared positions, taking severe casualties from artillery fire. One unit lost its commander and wavered but pressed on.

The assault succeeded through disciplined volleys and bayonet charges. The enemy guns were captured. The confederation's army retreated, and their alliance began to fracture. The general later called it the bloodiest battle of his career, though he would fight many more.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with socket bayonets in disciplined linear formations were the European infantry standard from roughly 1700-1840.", explanation: "The infantry technology helps date this battle." },
            { cost: 25, text: "European trading companies maintaining private armies in South Asia was characteristic of the 1750s-1820s, before colonial governments took direct control.", explanation: "The colonial context helps narrow the date." }
        ],
        explanation: "This was the Battle of Assaye in 1803. The flintlock muskets with bayonets indicate 1700-1840. The trading company with a private army fighting Indian confederations that had European-trained artillery crews places this in the East India Company expansion era (1750s-1820s), when Indian powers had adopted some Western military technology but not yet been fully conquered.",
        tags: ["pitched-battle", "19th-century", "south-asia"]
    }
];
