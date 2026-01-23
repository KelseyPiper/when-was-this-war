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
        explanation: "This was the Siege of Plevna (1877) in the Russo-Turkish War. Ottoman commander Osman Pasha held the Bulgarian town for 5 months against repeated Russian assaults, proving that breech-loading rifles behind earthworks could slaughter massed infantry. The Russians lost 40,000+ casualties before starving the garrison out. European observers took detailed notes—then ignored the lessons until WWI proved them catastrophically correct. The single-shot breech-loaders that could be loaded prone place this between 1860 (when they replaced muzzle-loaders) and 1890 (when magazine rifles took over). An army of 185,000 requires railroad logistics, which became militarily decisive in the 1860s. The reference to lessons 'relearned decades later' points toward WWI.",
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
        explanation: "This was the Battle of Pavia in 1525, during the Italian Wars. King Francis I of France was captured—the first French king taken in battle since Poitiers (1356). Spanish arquebusiers under the Marquis of Pescara shot down the French knights from behind hedges; the 'flower of French chivalry' died in minutes. Francis was imprisoned in Madrid for a year. His famous letter to his mother: 'All is lost save honor.' The heavy arquebuses requiring forked rests place this 1500-1550; lighter models came mid-century. A 3:1 pike-to-shot ratio was typical of the early 1500s (by 1600 it was 1:1, by 1700 pikes were gone). Knights still charging en masse suggests before 1550—after that, firearms made such tactics suicidal.",
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
        explanation: "This was the Austro-Prussian War (Seven Weeks' War) of 1866. Prussia under Otto von Bismarck and General Helmuth von Moltke crushed Austria in just seven weeks, shocking Europe. At Königgrätz (Sadowa), Prussian needle guns fired 5 rounds to every Austrian muzzle-loader shot. Moltke pioneered railway mobilization—Prussia concentrated faster than anyone imagined. The victory excluded Austria from German affairs and enabled German unification under Prussia in 1871. The Dreyse needle gun (first widely-adopted bolt-action rifle) was in service 1848-1871. The decisive advantage of breech-loaders over muzzle-loaders—and the revolutionary use of railroads for mobilization—both mark the 1860s specifically.",
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
        explanation: "This was the Peninsula Campaign (1862) in the American Civil War. General George McClellan landed 100,000+ Union troops on the Virginia Peninsula to take Richmond. Despite outnumbering the Confederates, McClellan was paralyzed by caution, convinced (wrongly) he faced superior numbers. General Robert E. Lee counterattacked in the Seven Days Battles, driving McClellan back. Thaddeus Lowe's observation balloons provided the first aerial reconnaissance in warfare. The USS Monitor vs CSS Virginia had just demonstrated ironclad combat. Rifled muskets accurate to 500 yards replaced smoothbores in the 1850s. Observation balloons and ironclads both entered military use in the early 1860s—ironclads specifically in 1862, which pinpoints this precisely.",
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
        explanation: "This was Charles VIII's invasion of Italy in 1494-1495, beginning the Italian Wars. The young French king's campaign inaugurated six decades of warfare over Italy. His artillery train—bronze cannon on wheeled carriages that could keep pace with infantry—was revolutionary; medieval walls crumbled in hours rather than months. The Italian city-states were shocked. Mobile bronze cannon first appeared in the 1490s; before this, artillery meant iron bombards too heavy to move quickly. Infantry still using pike and crossbow with arquebuses 'present but not dominant' indicates the narrow window before firearms took over around 1530.",
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
        explanation: "This was the Battle of Blenheim in 1704, during the War of the Spanish Succession. John Churchill, Duke of Marlborough, and Prince Eugene of Savoy marched 250 miles from the Netherlands to Bavaria, then crushed the French and Bavarian army. France lost 30,000 killed, wounded, or captured—their first major defeat since 1664. Marlborough became one of history's most celebrated generals. Three-rank linear formations with flintlock muskets and socket bayonets became the European standard around 1700. Cavalry using sword and pistol (rather than lances) indicates post-1650. The 'first major defeat in forty years' for the dominant power specifically suggests 1704.",
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
        explanation: "This was the Spanish Conquest of the Aztec Empire (1519-1521). Hernán Cortés landed with ~600 men and conquered Moctezuma II's empire of millions. The 'Noche Triste' (Sad Night) saw the Spanish driven from Tenochtitlan with heavy losses. Cortés allied with Tlaxcala and other peoples resentful of Aztec tribute, besieged the city with 13 brigantines he'd built, and took it after 80 days. Smallpox killed perhaps half the defenders. The empire became New Spain until Mexican independence in 1821. Matchlock arquebuses place this 1475-1650. Steel weapons, horses, and firearms meeting peoples without iron-working indicates the Age of Exploration (1490-1550). 'Three centuries' of colonial rule ending around 1820 points back to conquest around 1520.",
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
        explanation: "This was the Battle of Eylau (1807), one of the bloodiest battles of the Napoleonic Wars. Napoleon fought the Russians and Prussians to a bloody stalemate in a blizzard; 40,000+ casualties for no decisive result. Marshal Murat's legendary cavalry charge of 10,000 horsemen briefly broke through the Russian center. It was Napoleon's first serious check, though he claimed victory when the allies withdrew. Smoothbore flintlock muskets were standard 1700-1840, but dense column formations (rather than thin lines) narrow this to the Napoleonic era (1792-1815). Explosive shells being unreliable indicates before the 1840s-50s when they improved.",
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
        explanation: "This was the Battle on the Ice (1242) at Lake Peipus. Prince Alexander Nevsky of Novgorod defeated the Teutonic Knights, ending their eastward expansion. The battle became legendary in Russian culture—heavily mythologized, including in Eisenstein's famous 1938 film. Whether the ice actually broke under the knights is disputed, but the defeat was real and decisive. Chain mail with great helms but no plate armor indicates 1150-1300; plate came in around 1300. Crusading military orders expanding into Baltic pagan territories was specifically a 13th century phenomenon.",
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
        explanation: "This was the Siege of Vienna in 1683, the Ottoman Empire's last major attempt to expand into Central Europe. Grand Vizier Kara Mustafa Pasha led perhaps 150,000 Ottoman troops against a garrison of only 15,000 under Count Ernst Rüdiger von Starhemberg. The relief force was commanded by Polish King Jan III Sobieski, who led the largest cavalry charge in history—18,000 horsemen including 3,000 of Poland's famous Winged Hussars. The heavy lance charge breaking the siege places this in the late 17th century; Western European cavalry had largely abandoned such tactics after 1650, but Polish hussars retained them into the 1690s. The mention of defenders mixing flintlocks with the Ottoman army's archers shows the clash between modernizing European armies and traditional Ottoman forces characteristic of this period.",
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
        explanation: "This was Operation Bagration, launched June 22, 1944—exactly three years after Germany invaded the Soviet Union. Marshal Georgy Zhukov coordinated the offensive that destroyed German Army Group Center, killing or capturing over 400,000 soldiers in weeks. The operation's scale—2.3 million troops, 5,200 tanks—was unprecedented. Heavy tanks like the IS-2 with 122mm guns indicate late war; early WWII tanks like the T-26 or Panzer III were much lighter with smaller guns. The sophisticated deep operations doctrine, with armored spearheads racing into rear areas to encircle entire armies, took years to perfect after early-war disasters. The reference to 'three years of occupation' confirms 1944, counting from the June 1941 invasion.",
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
        explanation: "This was the Battle of Las Navas de Tolosa in 1212, the turning point of the Reconquista. Kings Alfonso VIII of Castile, Sancho VII of Navarre, and Pedro II of Aragon united against the Almohad Caliph Muhammad al-Nasir. The 'fierce warriors from across the strait' were Almohad Berbers from North Africa. Sancho VII of Navarre led the flanking charge that broke the Almohad guard—legend says he personally cut the chains protecting the caliph's tent, which is why chains appear on Navarre's coat of arms. The armor details are precise: chain mail hauberks with surcoats were standard 1150-1300, and great helms 'coming into fashion but not yet universal' specifically indicates around 1200—they emerged circa 1200 and were standard by 1250. Crossbowmen as primary missile infantry (rather than longbowmen or handgunners) confirms the period 1100-1350.",
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
        explanation: "This was the Battle of Manzikert in 1071, when Seljuk Sultan Alp Arslan defeated and captured Byzantine Emperor Romanos IV Diogenes. This was genuinely the first time a Byzantine emperor had been captured by a foreign enemy in the empire's 700+ year history—a stunning humiliation. Alp Arslan reportedly placed his foot on Romanos's neck before treating him with surprising generosity. Lamellar armor identifies this as Byzantine or Central Asian medieval warfare (600-1300). The nomadic horse archers using feigned retreats were the Seljuk Turks, who had recently converted to Islam and carved a sultanate from Abbasid territory. The defeat opened Anatolia to Turkish settlement, beginning a transformation that would eventually make it Turkey rather than the Greek heartland it had been for millennia.",
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
        explanation: "This was the Battle of Plassey in 1757, where Robert Clive's 3,000 troops defeated Siraj ud-Daulah, Nawab of Bengal, despite facing perhaps 50,000 men with war elephants. The 'two great trading companies' were the British and French East India Companies, competing during the Mughal Empire's fragmentation following Emperor Aurangzeb's death in 1707. The monsoon rains played a crucial role—Clive's artillery kept their powder dry with tarpaulins while the Nawab's guns were rendered useless. Flintlock muskets with socket bayonets were the European infantry standard from 1700-1840. War elephants, used in South Asia since ancient times, became obsolete in the 18th century as disciplined musket volleys could panic them. The 'trading company would control virtually the entire region' within a century points to the British Raj (formally established 1858).",
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
        explanation: "This was the Italian Front of World War I (1915-1918), where Italy fought Austria-Hungary along the Alpine border. The fighting at extreme altitudes—some positions on glaciers at 10,000+ feet—was unlike any other front. Italian General Luigi Cadorna launched eleven offensives on the Isonzo River alone, each gaining minimal ground at enormous cost. The mine containing 50 tons of explosives describes the Italian attack on Col di Lana in 1916. Machine guns making frontal assaults suicidal was WWI's defining characteristic; earlier wars had machine guns but not enough to create continuous killing zones across entire fronts. The massive siege howitzers (like the Austrian Škoda 305mm or German 420mm) were unique to WWI's industrial scale. The stalemate ending when 'one combatant's larger alliance collapsed' refers to Austria-Hungary's disintegration in late 1918.",
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
        explanation: "This was Napoleon's Egyptian Campaign (1798-1801). Napoleon, age 28, led 40,000 troops to Egypt partly to threaten British India. The Battle of the Pyramids saw his infantry squares destroy the Mamluk cavalry—slave-soldiers who had ruled Egypt since 1250. But Admiral Nelson's destruction of the French fleet at the Battle of the Nile stranded the army. The failed siege was Acre, defended by Ottoman troops with British naval support. The expedition included 167 scientists and scholars—the famous 'savants'—whose work founded modern Egyptology and discovered the Rosetta Stone. This scientific approach to conquest was an Enlightenment phenomenon (roughly 1750-1820). Infantry squares with flintlock muskets and socket bayonets were the standard cavalry-defeating formation from 1700-1850. Napoleon slipped away in 1799 to seize power in France, leaving the army to surrender in 1801.",
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
        explanation: "This was the Siege of Sevastopol (1854-1855) during the Crimean War, where Britain, France, and the Ottoman Empire attacked Russia's Black Sea naval base. The 'legendary cavalry charge born of confusion' was the Charge of the Light Brigade at Balaclava—Lord Cardigan led 670 men into a valley swept by Russian artillery due to miscommunicated orders. The medical reformer was Florence Nightingale, who exposed the horrific conditions through statistics and telegraphed reports. The Crimean War saw the first war correspondents sending dispatches by telegraph, reaching London within days—a revolution in how civilians experienced war. The weapons transition is key: smoothbore muskets were standard before 1850, rifled muskets universal after 1860. The Crimean War caught armies mid-transition, with both types in use. This combination of technologies pinpoints the mid-1850s.",
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
        explanation: "This was the Pacific Island Hopping Campaign of WWII (1943-1945), the American strategy to defeat Japan. Admiral Chester Nimitz and General Douglas MacArthur led the dual advance across the Pacific, bypassing heavily fortified islands like Rabaul to seize strategically vital ones. Battles like Tarawa (1943), Saipan (1944), and Iwo Jima (1945) featured the brutal cave-and-bunker fighting described. Japanese defenders fought nearly to the last man—at Iwo Jima, of 21,000 Japanese soldiers, only 216 were captured. Carrier-based aircraft providing air cover far from land was a capability developed in the 1930s but only became decisive in the 1940s. The specialized landing craft (like the LCVP 'Higgins Boat') were developed specifically for WWII. The 'new weapons of unprecedented destructive power' were the atomic bombs dropped on Hiroshima and Nagasaki in August 1945.",
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
        explanation: "This was the People's Crusade of 1096, the chaotic first wave of the First Crusade. Peter the Hermit, a charismatic preacher, and Walter Sans Avoir (Walter the Penniless) led perhaps 30,000 poorly armed peasants and minor knights toward the Holy Land. The massacres of 'local populations blamed for ancient wrongs' were the Rhineland pogroms—attacks on Jewish communities in Speyer, Worms, Mainz, and Cologne that killed thousands. Byzantine Emperor Alexios I Komnenos rushed them across the Bosporus to get them away from Constantinople. They were annihilated at Civetot by the Seljuk Turks. The 'proper armies arriving months later' were the knights of the First Crusade—Godfrey of Bouillon, Raymond of Toulouse, Bohemond of Taranto—who would capture Jerusalem in 1099. The distinction between peasant rabble and professional heavy cavalry with crossbows identifies the medieval period around 1050-1350.",
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
        explanation: "This was the Vicksburg Campaign of 1863, General Ulysses S. Grant's masterpiece during the American Civil War. Vicksburg, the 'Gibraltar of the Confederacy,' controlled the Mississippi River from 200-foot bluffs. Grant's daring gambit—running Admiral David Porter's ironclads past the batteries at night, marching his army down the Louisiana side, then crossing below the city—was considered reckless by many subordinates. The subsequent siege saw both armies dig elaborate trench systems that presaged WWI warfare. Ironclad gunboats identify the 1860s specifically: they first saw combat in 1862 (the Monitor vs. Virginia), dominated river warfare through the decade, and were replaced by steel-hulled ships afterward. The surrender on July 4, 1863—the day after Gettysburg—marked the Confederacy's irreversible decline.",
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
        explanation: "This was the Mongol Siege of Baghdad in 1258, one of history's most destructive events. Hulagu Khan, grandson of Genghis Khan, led the assault against Caliph al-Musta'sim, the 37th Abbasid Caliph. The Mongols included Chinese and Persian siege engineers—a capability unique to the Mongol period (1210-1280), as earlier steppe peoples couldn't take walled cities. The Abbasid Caliphate had ruled since 750 CE (hence 'five centuries'). Al-Musta'sim was reportedly rolled in a carpet and trampled by horses—the Mongol method of executing royalty without spilling blood on the ground. Estimates of the dead range from 200,000 to over a million. The destruction of Baghdad's irrigation canals turned fertile land into desert for centuries. The House of Wisdom, containing irreplaceable manuscripts, was destroyed—accounts say the Tigris ran black with ink from discarded books.",
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
        explanation: "This was the Winter War (1939-1940), when Finland fought the Soviet Union to a standstill. Stalin expected victory in weeks; instead, Finnish troops under Marshal Carl Gustaf Mannerheim held out for over three months. Finnish ski troops with Suomi submachine guns devastated Soviet columns trapped on forest roads. The improvised incendiary bottles were named 'Molotov cocktails' as a sardonic tribute to Soviet Foreign Minister Vyacheslav Molotov—the tactic became famous in this war. The Soviet army's incompetence stemmed directly from Stalin's Great Purge of 1937-1938, which had executed most experienced officers. The weapons combination—bolt-action rifles (like the Mosin-Nagant) alongside submachine guns—identifies the 1930s-1940s; earlier armies lacked submachine guns, later ones used assault rifles. Hitler drew fatally wrong conclusions from Soviet performance, contributing to his decision to invade in 1941.",
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
        explanation: "This was the Battle of Bosworth Field on August 22, 1485, ending the Wars of the Roses and the Plantagenet dynasty. Henry Tudor landed with a small force of French mercenaries and Welsh supporters against King Richard III, who had the larger army. The Stanleys—Lord Thomas Stanley and Sir William Stanley—commanded a third of Richard's army but held back until the outcome was clear, then charged Richard's flank. Richard III became the last English king to die in battle; his body was found in 2012 under a Leicester parking lot with battle wounds matching chronicle accounts. Full plate armor identifies 1400-1550—earlier knights wore mail, later firearms made heavy armor obsolete. Longbows fading while firearms improved indicates the 1470s-1490s transition. Henry VII would establish the Tudor dynasty that ruled until 1603.",
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
        explanation: "This was the Greek War of Independence (1821-1829), when Greece broke free from Ottoman rule after nearly 400 years (since the fall of Constantinople in 1453). The romantic volunteers included Lord Byron, the famous poet, who died of fever at Missolonghi in 1824 without seeing significant combat—his death made him a martyr and galvanized European support. The three great powers were Britain, France, and Russia, whose combined fleet destroyed the Ottoman-Egyptian navy at Navarino in 1827—the last major battle between wooden sailing ships with broadside cannon. Smoothbore flintlock muskets (standard 1700-1840) and sailing warships (dominant until steam navies emerged in the 1850s) place this firmly in the early 19th century. The new Greek state was indeed much smaller than historic Greek territory—Greeks in Asia Minor, Crete, and northern regions remained under Ottoman rule for decades more.",
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
        explanation: "This was Edward I's conquest of Wales (1277-1283). Llywelyn ap Gruffudd, the last native Prince of Wales, ambushed and killed the Earl of Gloucester in 1282, but Edward returned with overwhelming force. The 'Iron Ring' of castles—Caernarfon, Conwy, Harlech, Beaumaris, and others—were designed by Master James of St. George, the greatest military architect of the age. These concentric castles with round towers represented cutting-edge design from 1180-1350: round towers resisted mining better than square ones, and earlier castles lacked the sophisticated interlocking fields of fire. Crossbows as the primary missile weapon (1100-1350) rather than longbows is significant—the English longbow only became dominant after about 1340 at Crécy. Llywelyn was killed in a skirmish in December 1282; his brother Dafydd was executed in 1283.",
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
        explanation: "This was the Battle of the Little Bighorn on June 25, 1876. Lieutenant Colonel George Armstrong Custer led five companies of the 7th Cavalry against a village of Lakota Sioux and Northern Cheyenne led by Sitting Bull and Crazy Horse—perhaps 7,000 people with 1,500-2,000 warriors. Custer's men carried Springfield Model 1873 single-shot carbines, while many warriors had Winchester repeating rifles obtained through trade, giving them a significant rate-of-fire advantage. All 210 men with Custer were killed; his body was found with two bullet wounds. The battle was the most famous Indigenous victory against the U.S. Army, but the government's response was overwhelming force—within a year, most bands had surrendered. Single-shot breech-loading carbines as standard cavalry weapons (1865-1890) while repeaters were available through trade is specifically characteristic of the 1870s.",
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
        explanation: "This was the Battle of Fehrbellin on June 28, 1675, where Frederick William, the 'Great Elector' of Brandenburg, shattered Swedish invincibility. The Swedish Empire had dominated northern Europe since the 1630s, but Frederick William caught their army crossing the Rhin Canal and attacked while they were divided. The weapons details place this precisely: matchlock muskets with pikes (standard 1500-1700, before socket bayonets eliminated pikes) and cavalry using the caracole (firing pistols at range rather than charging), which was common 1550-1680 before aggressive shock tactics returned. Sweden remained powerful for decades—they would fight the Great Northern War (1700-1721)—but Fehrbellin began the shift. Brandenburg-Prussia would eventually become the dominant German power and unify Germany in 1871.",
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
        explanation: "This was the Great Siege of Malta in 1565, when the Knights of St. John (the Hospitallers) held off the Ottoman Empire. Grand Master Jean de Valette, age 70, led about 6,000 defenders against perhaps 40,000 Ottoman troops including elite Janissaries. Fort St. Elmo fell after a month of brutal fighting—all 1,500 defenders were killed, but they cost the Ottomans perhaps 8,000 casualties. The trace italienne fortifications (low, thick walls with angled bastions developed 1500-1530) absorbed bombardment that would have leveled medieval walls. The Janissaries' arquebus-and-pike tercio tactics dominated 1530-1630. The Knights ruled Malta until Napoleon expelled them in 1798 ('another two centuries'), which works backward to the 1560s-1590s. The capital city Valletta, built after the siege, was named for the Grand Master.",
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
        explanation: "This was the Mongol invasion of Europe in 1241, culminating in the Battle of Mohi. Subutai, perhaps history's greatest general, coordinated multiple armies across Poland and Hungary simultaneously while Batu Khan led the main force. King Béla IV of Hungary and the combined Hungarian-Croat army of 25,000 were destroyed at Mohi; both kings of Poland had already died at Legnica two days earlier. The Mongols used fireworks and smoke screens—technologies unknown to Europeans—adding to the terror. Chain mail hauberks with great helms place this at 1150-1300, before plate armor became standard. The coordinated multi-column invasion with messenger networks across hundreds of miles was uniquely possible with Mongol organization. The death of Great Khan Ögedei in December 1241 forced the Mongol withdrawal, as princes had to return for the succession. Europe was saved by dynastic politics, not military resistance.",
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
        explanation: "This was the Battle of Kircholm on September 27, 1605, one of the greatest cavalry victories in history. Grand Hetman Jan Karol Chodkiewicz led 3,600 Polish-Lithuanian cavalry—including the famous Winged Hussars—against 11,000 Swedish infantry under Charles IX's commander. The Hussars' charge shattered the Swedish formations in barely 20 minutes; Sweden lost over 8,000 killed while Polish casualties were under 100. The Hussars used 16-foot lances and wore distinctive 'wings' (wooden frames with feathers) that created terrifying noise at full gallop. Matchlock muskets with pike formations (standard 1500-1700) versus cavalry lancers (obsolete in Western Europe by 1600 but devastating in Eastern Europe) precisely identifies the early 17th century. The Polish-Lithuanian Commonwealth at this time fielded arguably the best cavalry in the world.",
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
        explanation: "This was the Battle of Belgrade on August 16, 1717. Prince Eugene of Savoy, perhaps the era's greatest general, faced a desperate situation: his 40,000-man besieging army was itself about to be crushed by a 150,000-strong Ottoman relief force under Grand Vizier Halil Pasha. Eugene's night attack through fog achieved complete surprise—fighting erupted among the tents in such confusion that neither side could form proper lines. By morning, the Ottomans were in full retreat. Flintlock muskets (standard after 1680-1700) with socket bayonets (adopted 1690s-1700s) identify the early 18th century. Night attacks were extremely rare before radio communication because commanders couldn't control their troops in darkness—Eugene's gamble was a measure of how dire his situation was. Belgrade's fall secured the Habsburg frontier for a generation.",
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
        explanation: "This was the Battle of Brody (June 23-30, 1941), the largest tank battle to that date. Soviet mechanized corps threw nearly 2,500 tanks against German Army Group South's 1st Panzer Group in a desperate counterattack after Operation Barbarossa's launch. The Soviet tank mix—obsolete T-26 light tanks, BT series with unreliable Christie suspensions, plus modern KV-1 and T-34 heavy tanks—reflects the transitional 1940-1942 period. The Germans had fewer tanks but the Junkers Ju 87 Stuka dive bombers (prominent 1939-1943 before cannon-armed ground attack aircraft replaced them) devastated Soviet armor from above. Poor Soviet coordination, undertrained crews, and mechanical breakdowns turned numerical superiority into catastrophe—over 2,000 tanks lost in a week. The scale of armor involved (thousands of tanks in one battle) was only possible from 1941 onward.",
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
        explanation: "This was the First Battle of Shimonoseki Straits in 1863, when the Chōshū domain attempted to close the strait to foreign shipping during Japan's turbulent final years of Tokugawa rule. The USS Wyoming (a steam-powered sloop with rifled Dahlgren guns) destroyed Chōshū's sailing vessels and bombarded shore batteries in a one-sided engagement. The technological mismatch was stark: steam propulsion (militarily decisive 1850s-1860s) allowed maneuver regardless of wind, while rifled naval guns (replacing smoothbores 1855-1870) could hit accurately at ranges smoothbore cannon couldn't reach. A larger multinational fleet returned in 1864, delivering a crushing defeat that convinced Japanese reformers that modernization was urgent. Within five years, the Meiji Restoration would transform Japan.",
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
        explanation: "This was the Siege of Antwerp in September-October 1914, during the opening weeks of WWI. The Brialmont forts—reinforced concrete with steel cupolas, built in the 1880s-1900s—were considered state-of-the-art and expected to hold for months. Germany's 'Big Bertha' (42cm) and Škoda 30.5cm siege howitzers, transported by rail (too heavy for any animal team), demolished them in days. The shells used delayed-action fuses—a new technology that let them penetrate concrete before detonating. Fort Loncin's magazine explosion killed 350 men instantly. The rapid fall shocked military observers worldwide: the age of fixed fortifications seemed over. Super-heavy railway artillery was developed specifically in the 1900s-1910s to crack modern concrete—earlier guns couldn't achieve the necessary calibers. This technology combination pinpoints 1914.",
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
        explanation: "This was the Battle of Ain Jalut on September 3, 1260—the battle that stopped the Mongol advance into Africa and saved Egypt. Mamluk Sultan Qutuz and his general Baybars faced a Mongol force under Kitbuqa (a Nestorian Christian commanding a Mongol army—the empire's diversity was remarkable). The Mamluks used the Mongols' own tactics against them: Baybars led a feigned retreat that drew Kitbuqa into pursuit, then the main Mamluk force counterattacked. Kitbuqa was killed; the Mongols retreated. The Mamluk military system—purchasing Turkic and Circassian boys and training them from childhood as elite cavalry—reached peak effectiveness in the 13th-14th centuries. The Mongol conquests occurred 1210-1280; this battle marked their western limit. Baybars would later seize the throne and become one of history's great sultans.",
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
        explanation: "This was the Battle of Taku Forts on August 21, 1860, during the Second Opium War. A combined British-French force stormed the fortifications guarding the Hai River approach to Beijing. The technological mismatch was decisive: British Armstrong rifled breech-loaders could hit at ranges Chinese smoothbore cannon couldn't match, while infantry with Enfield rifles outranged the defenders' mixed weaponry. The storming was still brutal—hand-to-hand fighting at the walls—but the outcome was never in doubt. The fall of the Taku Forts opened the road to Beijing; the Anglo-French force would soon burn the Summer Palace. Rifled guns replacing smoothbores (1850s-1870s) and muzzle-loading rifles as standard infantry weapons (1850-1870, before breech-loaders) precisely identifies this period.",
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
        explanation: "This was the Battle of Spion Kop on January 24, 1900, during the Second Boer War. British forces under General Charles Warren seized the summit at night but discovered at dawn that they were overlooked by higher Boer positions on three sides. Boer marksmen with Mauser magazine rifles and smokeless powder ammunition picked off British soldiers from 500+ yards—the victims couldn't even see where fire was coming from. The rocky ground prevented digging adequate trenches. Among the stretcher-bearers that day was a young journalist named Winston Churchill; the medical officer was Mahatma Gandhi. Magazine rifles (standard from the 1880s-1890s) combined with smokeless powder (replacing black powder 1880s-1890s) created a new killing equation: rapid, accurate fire from invisible positions. This preview of WWI trench warfare went largely unheeded.",
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
        explanation: "This was the Battle of Inchon on September 15, 1950, General Douglas MacArthur's masterstroke during the Korean War. Inchon's harbor had 30-foot tides, narrow channels, and seawalls instead of beaches—the Joint Chiefs considered it too risky. MacArthur insisted, arguing that the very difficulty of the landing guaranteed surprise. He was right. The X Corps landed against minimal opposition, seized Seoul within two weeks, and cut North Korean supply lines to the south. The trapped North Korean army collapsed. Specialized landing craft (developed for WWII's Pacific island-hopping) and mixed jet/propeller air cover (the 1945-1955 transition period—F9F Panthers flew alongside F4U Corsairs) precisely date this to the early 1950s.",
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
        explanation: "This was the Battle of Lauffeld on July 2, 1747, during the War of the Austrian Succession. Marshal Maurice de Saxe led French forces against the Allied army under the Duke of Cumberland. The fighting centered on fortified villages—Lauffeld changed hands multiple times in brutal house-to-house combat, a contrast to the open-field linear tactics the era preferred. Both armies suffered heavy casualties (perhaps 20,000 combined) for no decisive result; the fortress of Maastricht fell anyway after a subsequent siege. Flintlock muskets with socket bayonets in linear formations were standard 1700-1850. Armies of 90,000 men in a single engagement were rare before the 18th century (logistics couldn't support them) but became even larger in the Napoleonic era. This army size at the peak of linear tactics indicates the mid-18th century.",
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
        explanation: "This was the Battle of Rossbach on November 5, 1757, Frederick the Great's most famous victory. A combined French and Imperial army of 42,000 under Soubise and Hildburghausen attempted a flanking march in full view of Frederick's 22,000 Prussians. Frederick let them march, then struck while they were strung out in column. General Friedrich Wilhelm von Seydlitz's cavalry charge scattered the enemy before they could form battle lines; the whole engagement lasted barely 90 minutes. French casualties exceeded 5,000; Prussian losses were under 550. Flintlock muskets with socket bayonets in three-rank linear formations were standard 1700-1850. Cavalry saber charges remained effective in the 18th century—earlier pikemen could stop cavalry, later rifle firepower made such charges suicidal. Frederick's tactical genius made Rossbach a model studied by military academies for generations.",
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
        explanation: "This was the Bombardment of Alexandria on July 11, 1882. A British squadron under Admiral Frederick Seymour bombarded Egyptian fortifications in response to anti-European riots and the nationalist movement led by Ahmed Urabi. Eight British ironclads—including HMS Inflexible with 16-inch guns—systematically destroyed forts whose smoothbore cannon couldn't effectively reply. The bombardment lasted all day; by evening, fires burned across the city. Britain would occupy Egypt for the next 70 years. Ironclad warships with rifled turret guns were dominant naval technology 1860-1900—earlier ships were wooden, later ones had all-steel construction. The technological gap between modern naval guns and obsolete shore batteries was most pronounced in the 1860s-1880s, before most nations modernized coastal defenses.",
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
        explanation: "This was the Siege of Port Arthur (1904-1905) during the Russo-Japanese War. Japanese General Nogi Maresuke's Third Army besieged the Russian naval base for 154 days at a cost of over 57,000 Japanese casualties—Nogi lost both his sons in the assaults. The Russian defenders under General Anatoly Stessel held concrete forts with interlocking machine gun fields. The assault on 203 Meter Hill alone cost 17,000 Japanese lives. Military observers from every major power watched this preview of WWI trench warfare: machine guns in concrete emplacements (becoming standard 1890s-1900s), barbed wire entanglements, quick-firing artillery (developed 1890s), and searchlights for night defense. All these technologies were new since the 1890s. When Port Arthur finally surrendered, it demonstrated that modern fortifications could resist for months even against determined assault.",
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
        explanation: "This was the Battle of Myeongnyang on October 26, 1597, one of history's most remarkable naval victories. Admiral Yi Sun-sin, with only 13 ships remaining after a Japanese surprise attack that destroyed most of the Korean fleet, faced 133 Japanese warships in the Myeongnyang Strait. Yi positioned his ships where the treacherous whirlpool currents would work against the Japanese. As the tide shifted, his fleet attacked the disorganized Japanese, sinking 31 ships without losing any. The Korean panokseon warships combined cannon with archers—a mix characteristic of East Asian naval warfare 1550-1650. Yi Sun-sin is considered one of history's greatest admirals, undefeated in over 20 naval engagements. He died at the Battle of Noryang in 1598, shot by a Japanese arquebus.",
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
        explanation: "This was the Battle of Okehazama on June 12, 1560, the victory that launched Oda Nobunaga's rise to power. Imagawa Yoshimoto led 25,000 warriors toward Kyoto; Nobunaga had only about 2,500. Rather than defend his castle, Nobunaga attacked Yoshimoto's camp during a thunderstorm. The surprise was total—Yoshimoto was killed before he could don his armor, reportedly thinking the commotion was his own men celebrating. Matchlock arquebuses had arrived in Japan via Portuguese traders in 1543; describing them as 'new' and 'just beginning to spread' indicates about 15-25 years after introduction—precisely the late 1550s-1560s. Within 22 years, Nobunaga would control most of Japan. Traditional weapons (spears, swords, bows) as the main arms with limited firearms confirms this early transition period, before the mass matchlock warfare of the 1570s-1600s.",
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
        explanation: "This was the Siege of Badajoz in April 1812, during Wellington's Peninsular War campaign. Wellington needed to take the fortress before French Marshal Soult could relieve it. The assault on the night of April 6 was catastrophic: 40 separate attacks on the main breaches failed, with over 3,500 casualties in a few hours. Officers died in waves—the 'forlorn hope' (first assault party) was nearly annihilated. Success came only when escalade parties found weakly defended points. The following three-day sack was one of the worst atrocities by British troops—Wellington wept viewing the aftermath. Heavy siege artillery (18-24 pounders) transported by armies was standard 1700-1860. Assault columns with fascines and ladders, plus sophisticated defenses (chevaux-de-frise, command-detonated mines), were Napoleonic-era warfare (1792-1815).",
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
        explanation: "This was the Battle of Maritsa (also called Chernomen) on September 26, 1371. Serbian King Vukašin and his brother King John Uglješa led perhaps 20,000 crusaders against Ottoman positions; the night before battle, the camp reportedly celebrated too enthusiastically. Ottoman commander Lala Şahin Pasha attacked before dawn with perhaps 5,000 men, including early Janissaries—the elite slave-soldier corps (devshirme system, prominent from the 1360s-1400s). Both Serbian kings died—Vukašin in combat, Uglješa likely drowned in the Maritsa River. The disaster ended serious resistance to Ottoman expansion in the Balkans for a generation. The absence of gunpowder weapons—the attack relied on cold steel and surprise—indicates warfare before firearms became common in the region (roughly before 1400).",
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
        explanation: "This was the Battle of Lützen on November 16, 1632, where King Gustavus Adolphus of Sweden—the 'Lion of the North'—met his death. Gustavus had revolutionized warfare: lighter muskets, shallower formations (6 ranks instead of 30), and mobile artillery that could reposition during battle (a revolutionary 1620s-1630s innovation). Fighting Albrecht von Wallenstein's Imperials in dense fog, Gustavus led a cavalry charge and became separated from his guards. He was shot multiple times and killed, his body found stripped of armor. The Swedish army, unaware of his death for hours, fought on and won. But Sweden, without its genius king, struggled to maintain its position through the remaining sixteen years of the Thirty Years' War (1618-1648). His military reforms shaped European warfare for the next century.",
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
        explanation: "This was the Battle of Carrhae in 53 BCE, Rome's worst defeat since Cannae. Marcus Licinius Crassus, the third member of the First Triumvirate with Caesar and Pompey, led seven legions into Mesopotamia seeking military glory to match his partners. Parthian general Surena commanded only 10,000 horse archers and 1,000 cataphracts, but his camel trains carried limitless arrows. The Roman legionaries formed testudo (turtle) formations, shields locked overhead, waiting for the Parthians to exhaust their ammunition. It never happened. Crassus's son Publius died leading a desperate cavalry charge. Crassus himself was killed during truce negotiations—legend says the Parthians poured molten gold down his throat, mocking his famous wealth. Of 40,000 Romans, only 10,000 escaped. Roman heavy infantry (pilum, gladius, scutum) facing Parthian horse archers with composite bows identifies the late Republic period.",
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
        explanation: "This was the Battle of Cynoscephalae ('Dog's Heads,' named for the hills) in 197 BCE, where Rome's flexible legions defeated the Macedonian phalanx. Roman consul Titus Quinctius Flamininus faced Philip V of Macedon on broken, fog-covered terrain. The phalanx, which Alexander the Great's army had used to conquer an empire 'a century and a half earlier' (334-323 BCE), was devastatingly effective on level ground—the 18-foot sarissa pikes created an impenetrable wall. But when gaps opened on the uneven terrain, an unnamed tribune led his men into the phalanx's exposed flank. The pikemen, unable to use their unwieldy weapons in close quarters, were slaughtered. The 'wars ending two decades before' that refined Roman manipular tactics were the Punic Wars against Carthage (ending 201 BCE). Cynoscephalae proved the legion superior to the phalanx on anything but perfect terrain.",
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
        explanation: "This was the Battle of Grunwald (also called Tannenberg) on July 15, 1410, the greatest defeat of a crusading military order. The Teutonic Knights under Grand Master Ulrich von Jungingen faced a Polish-Lithuanian alliance led by King Władysław II Jagiełło and Grand Duke Vytautas. Lithuanian light cavalry employed the feigned retreat that had destroyed European armies at Legnica in 1241—the Teutonic Knights remembered, but their commander pursued anyway. Von Jungingen and most of the order's leadership died in the final melee. Early bronze bombards with crude on-site-mixed powder (characteristic 1380-1430) were present but not decisive. Military-religious orders of knight-brothers reached their peak in the 13th-14th centuries; 'two centuries of conquest' dates their founding to the early 1200s. The order never recovered—within a century, it would become a secular duchy.",
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
        explanation: "This was the Battle of Fornovo on July 6, 1495, fought as Charles VIII of France retreated from his easy conquest of Naples. A coalition of Italian states—Venice, Milan, the Papal States—caught him at the Taro River crossing. Charles's French gendarmes (heavy cavalry) smashed through the Italian center in a charge that became legendary, while his horse-drawn mobile artillery (a revolutionary 1490s innovation—earlier guns needed slow oxen) created havoc. But the Italians captured the French baggage train with immense loot from Naples. Both sides claimed victory—France because Charles escaped, Italy because they recovered the plunder. The Italians fighting for ransom and glory rather than destruction reflects medieval values that would vanish by 1520 as gunpowder warfare grew more lethal. Fornovo marks the transition between medieval and early modern warfare.",
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
        explanation: "This was the Battle of Lepanto on October 7, 1571, the largest naval battle since antiquity. Don John of Austria commanded the Holy League fleet against the Ottoman navy under Ali Pasha. Over 400 galleys clashed in the Gulf of Patras. The six Venetian galleasses—hybrid ships mounting broadside cannon—disrupted Ottoman formations before the main engagement. Cervantes (later author of Don Quixote) fought aboard the Marquesa, losing use of his left hand. The Ottomans lost over 200 ships and 30,000 men; the Christians lost 17 ships and 7,500 men. Galleys (oar-powered ramming ships) and arquebus-armed marines dominated Mediterranean naval warfare from 1520-1580. Galleasses were an experimental 1560s-1570s design, transitional toward broadside sailing warships. The Ottoman navy rebuilt within a year—Lepanto's significance was psychological, breaking the myth of Ottoman invincibility at sea.",
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
        explanation: "This was the Battle of Arsuf on September 7, 1191, Richard the Lionheart's tactical masterpiece during the Third Crusade. Richard led his army south along the coast from Acre to Jaffa while Saladin's horse archers harassed continuously from the landward side. Richard's iron discipline kept his knights from charging prematurely—the Hospitallers on the vulnerable rear endured hours of arrow fire. When the Knights Hospitaller finally charged (possibly against orders), Richard committed his entire cavalry in a coordinated mass charge that shattered Saladin's center. Belt-hook crossbows (drawn by leg strength, standard 1000-1250) and heavy mail covering the entire body (pre-1300, before plate armor) identify the High Crusader period. The coastal march with fleet supply was specifically the Third Crusade's strategic situation (1189-1192).",
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
        explanation: "This was the Battle of Sekigahara on October 21, 1600, which unified Japan under Tokugawa Ieyasu. After Toyotomi Hideyoshi's death left an infant heir, two factions formed: Ieyasu's 'Eastern Army' and Ishida Mitsunari's 'Western Army.' Both sides fielded about 80,000 men, but loyalties were uncertain. Kobayakawa Hideaki commanded 15,000 Western troops but had secretly agreed to defect. When his betrayal came—attacking his own side's flank—the Western Army collapsed. Mass matchlock arquebus infantry (standard in Japan from the 1560s-1600s) were largely ineffective in the fog and rain, which extinguished the slow matches. The Tokugawa shogunate established afterward would rule Japan for 268 years until the Meiji Restoration in 1868. Armies assembled from lords of questionable loyalty was characteristic of the late Sengoku period (1560-1615).",
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
        explanation: "This was the Battle of Towton on Palm Sunday, March 29, 1461, the bloodiest battle ever fought on English soil. Edward of York (soon Edward IV) faced the Lancastrian army of Henry VI in a driving snowstorm. The Yorkists had the wind at their backs—their arrows flew farther, forcing the Lancastrians to advance into the storm. Fighting lasted nearly ten hours. When the Duke of Norfolk's reinforcements struck the Lancastrian flank, the line broke. Fleeing men drowned in the swollen River Cock or were cut down in their heavy plate armor. Estimates suggest 20,000-28,000 dead—perhaps 1% of England's population. Full plate harnesses were standard for wealthy fighters 1400-1470. Longbows with 100-150 pound draw weights were at their peak in the 15th century; by 1550, firearms had replaced them. Towton epitomized the Wars of the Roses' savagery.",
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
        explanation: "This was the Battle of Diu on February 3, 1509, when Portuguese viceroy Francisco de Almeida destroyed a combined Egyptian-Gujarati fleet. The Portuguese had perhaps 18 ships against over 100, but their carracks mounted heavy bronze cannon in broadside batteries—a capability only recently reliable enough for naval use (late 1400s-early 1500s). The Indian Ocean naval tradition emphasized boarding; ships were designed to carry soldiers, not heavy guns. The Portuguese stood off at range and destroyed enemies who couldn't effectively reply. The victory secured Portuguese control of Indian Ocean trade routes for a century. This was among the first demonstrations that broadside sailing warships could defeat any number of traditional vessels—a revolution that would define naval warfare for 350 years.",
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
        explanation: "This was the Battle of Nagashino on June 29, 1575, where Oda Nobunaga revolutionized Japanese warfare. Nobunaga deployed 3,000 arquebusiers behind wooden palisades and a stream—the arquebuses were matchlock designs introduced by Portuguese traders in 1543 ('just thirty years earlier'). Takeda Katsuyori, whose father's cavalry had been invincible, ordered charge after charge against the prepared position. The rotating volley fire—ranks alternating shooting and reloading—maintained continuous fire. The famed Takeda cavalry was annihilated; estimates suggest 10,000 of 15,000 died, including most senior commanders. Nagashino proved that massed gunpowder infantry with proper defenses could destroy any cavalry. Within seven years, Nobunaga would control most of Japan. The rotating volley technique was independently developed in Europe around the same time, becoming standard doctrine by the 1590s-1600s.",
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
        explanation: "This was the Battle of Bloody Marsh on July 7, 1742, when Georgia's founder James Oglethorpe repelled a Spanish invasion. Spanish forces from Florida landed about 2,000 troops on St. Simons Island; Oglethorpe had perhaps 650 regulars, militia, and allied Yamacraw warriors. When the Spanish column advanced through marshland on a narrow trail, Oglethorpe's ambush was devastating—the confined terrain prevented the Spanish from deploying their superior numbers. Spanish casualties are disputed but likely several hundred; the invasion collapsed. Flintlock muskets with paper cartridges (standard 1690-1850) and elaborate colorful uniforms (characteristic of 18th-century armies) identify the period. The battle secured Georgia's southern frontier and established the border between British and Spanish America for a generation.",
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
        explanation: "This was the Battle of Bouvines on July 27, 1214, which established France as the dominant power in medieval Europe. King Philip II Augustus of France faced a coalition of Emperor Otto IV, Count Ferrand of Flanders, and King John of England's mercenaries. Philip was unhorsed during the battle and nearly killed before his bodyguards rescued him. The French knights broke Otto's center; the Emperor fled, abandoning his imperial eagle standard. Ferrand was captured (held for ransom for 13 years), and John's continental ambitions were ruined—the resulting English baronial revolt produced Magna Carta the following year. Flat-topped great helms (emerging 1180-1200) and mail hauberks without plate armor indicate the early 13th century. Fighting for ransom rather than destruction reflects High Medieval values before gunpowder changed warfare's economics.",
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
        explanation: "This was the First Battle of Panipat on April 21, 1526, where Babur founded the Mughal Empire. Babur, a Timurid prince descended from both Timur and Genghis Khan, had spent years fighting in Central Asia before turning toward India. His 12,000 veterans faced Sultan Ibrahim Lodi's estimated 100,000 troops and 100 war elephants. Babur chained his cannon together and placed matchlock-armed infantry behind them—a tactic combining Central Asian wagon-fort traditions with Ottoman-style gunpowder warfare (characteristic of the early 16th century). The elephants, encountering firearms for the first time, panicked at the noise and smoke—a common reaction in the early gunpowder era (1500s-1530s) before armies adapted. Ibrahim Lodi died in the fighting. The Mughal dynasty Babur established would rule until 1857, 'three centuries' later.",
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
        explanation: "This was the Battle of Hattin on July 4, 1187, the greatest disaster in Crusader history. King Guy of Lusignan marched 20,000 men across waterless terrain to relieve the siege of Tiberias, ignoring advice from experienced commanders like Raymond of Tripoli. Saladin positioned his army between the Crusaders and the water sources at the Sea of Galilee. By the time battle was joined, the Crusaders were dying of thirst. The True Cross (Christianity's holiest relic, carried into battle) was captured; King Guy was captured; most of the army was killed or enslaved. Mail hauberks with flat-topped helmets and kite shields were standard Crusader equipment 1150-1250. Unarmored horses indicate pre-1300. Within three months, Saladin captured Jerusalem—the city the First Crusade had taken 'nearly a century' earlier in 1099.",
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
        explanation: "This was the Battle of Ramillies on May 23, 1706, the Duke of Marlborough's most complete victory. Marlborough caught the French army under Marshal Villeroi with its flanks unsecured on open ground near Namur. While feinting at the French left, Marlborough concentrated his cavalry against the right. When his horsemen broke through, they rolled up the French line from the flank. The pursuit was relentless—France lost over 15,000 casualties and prisoners; the Allies lost 3,600. Nearly all of Spanish Netherlands fell within weeks. Socket bayonets 'recently becoming universal' indicates 1700-1720—they replaced plug bayonets and pikes during this transition. Three-rank linear formations were standard 1700-1800. Cavalry remaining decisive at the operational level (pursuit destroying broken armies) was characteristic of 18th-century warfare before rifles increased infantry firepower.",
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
        explanation: "This was the Battle of Cunaxa in 401 BCE, immortalized in Xenophon's Anabasis. Prince Cyrus the Younger hired 10,000 Greek mercenaries to help seize the Persian throne from his brother Artaxerxes II. The Greek phalanx was invincible on their part of the field—the scythed chariots (used by Persian armies primarily in the 5th-4th centuries BCE) were defeated when disciplined hoplites simply opened lanes and let them pass harmlessly through. But Cyrus, instead of waiting for the Greeks to win, led a reckless cavalry charge directly at Artaxerxes and was killed. With Cyrus dead, the cause was lost. The hoplite panoply (bronze helmet, aspis shield, thrusting spear) dominated Greek warfare from ~700 BCE until Alexander's reforms ~330 BCE; described as dominant 'for over two centuries' places this after 500 BCE. The Greek mercenaries' legendary 'March of the Ten Thousand' home inspired Alexander's later invasion of Persia.",
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
        explanation: "This was the Battle of Dara in 530 CE, where the young general Belisarius made his reputation. Only 25 years old, Belisarius faced a Sasanian Persian army twice the size of his own. His system of interrupted trenches channeled the Persian cataphract cavalry charges into killing zones. When the Persian cataphracts (fully armored riders on armored horses, reaching peak effectiveness 300-700 CE) charged with their two-handed kontos lances (requiring no shield—characteristic of Persian and Byzantine cavalry), the trenches disrupted their formation. A concealed cavalry force struck the decisive blow from a hidden position on a hill. Belisarius would go on to reconquer North Africa and Italy for the Byzantine Empire. The sophisticated trench engineering represents late Roman military science at its finest.",
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
        explanation: "This was the Battle of Pydna on June 22, 168 BCE, which ended the Macedonian kingdom that Alexander the Great's successors had ruled for 150 years. Roman consul Lucius Aemilius Paullus faced King Perseus of Macedon's 40,000-man army, built around the sarissa phalanx that had 'conquered an empire two centuries earlier' under Alexander (334-323 BCE). The battle began accidentally when a runaway horse triggered a skirmish. On level ground, the 18-foot sarissa pikes created an impenetrable wall. But when the phalanx advanced across rough terrain near Mount Olympus, gaps opened. Roman legionaries pushed into the gaps with their gladii (short swords) and scuta (curved shields)—weapons 'perfected over two centuries' since Rome adopted them around 350 BCE. At close quarters, the long pikes were useless. Perseus was captured and paraded through Rome. Macedonia became a Roman province.",
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
        explanation: "This was the Battle of Mühlberg on April 24, 1547, where Holy Roman Emperor Charles V crushed the Schmalkaldic League of Protestant princes. Elector John Frederick of Saxony believed the Elbe River protected his position; Charles's Spanish tercios (pike-and-arquebus formations developed during the Italian Wars, 1490s-1500s, and dominant until the 1630s) found a ford and crossed before John Frederick could react. The battle was brief—John Frederick was captured, his face slashed by a lance. Titian's famous equestrian portrait shows Charles in armor at the moment of triumph. The religious settlement seemed final, but 'another century' of religious conflict culminated in the Thirty Years' War (1618-1648). The Reformation era (1520s-1648, ending with the Peace of Westphalia) was defined by such warfare between Catholic and Protestant powers.",
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
        explanation: "This was the Battle of Castillon on July 17, 1453, the battle that ended the Hundred Years' War. The English commander John Talbot, Earl of Shrewsbury, led his men-at-arms in a mounted charge against French positions protected by earthworks and 300 field guns. The Bureau brothers' artillery (using reliable corned powder, which replaced serpentine powder in the early-to-mid 15th century) massacred the charging cavalry. Talbot, age 80, was killed when his horse was shot and fell on him. This was the first major battle where field artillery (as opposed to siege artillery) defeated a cavalry charge—a revolutionary development of the 1440s-1450s that announced the end of the armored knight's dominance. Three months later, Constantinople fell to Ottoman guns. 1453 marked the end of medieval warfare.",
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
        explanation: "This was the Battle of Nicopolis on September 25, 1396, the last major crusade of the medieval era. French and Burgundian knights under John of Nevers joined Hungarian King Sigismund against Ottoman Sultan Bayezid I. The French demanded the honor of leading the charge, despite Sigismund's warnings that Bayezid had hidden his main force behind a hill. The knights easily scattered Ottoman light cavalry and infantry, then charged uphill—directly into Bayezid's sipahi heavy cavalry and Janissaries (the slave-soldier corps established in the 1360s, before they adopted firearms in the 15th-16th centuries). The exhausted crusaders were annihilated. John of Nevers was captured; his enormous ransom impoverished Burgundy. Full plate armor 'just becoming common' indicates the 1380s-1400s—earlier knights wore mail with plate additions; by 1420-1430, full plate was universal.",
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
        explanation: "This was the Battle of Mohács on August 29, 1526, which destroyed the medieval Kingdom of Hungary. King Louis II, only 20 years old, faced Sultan Suleiman the Magnificent's 50,000-strong army, including Janissary arquebusiers and modern artillery. The Hungarian feudal cavalry charged in the traditional manner—and were slaughtered by disciplined Ottoman gunfire. The battle lasted barely two hours. Louis drowned fleeing across a swollen stream, weighed down by his armor. Seven bishops, 500 nobles, and perhaps 14,000 soldiers died. Ottoman firearms and artillery reached peak advantage over opponents in the early 16th century (1500s-1530s); later, other powers caught up. Hungary was partitioned: the Ottomans held the center for 'nearly two centuries' (until 1699), the Habsburgs took the west, and Transylvania became an Ottoman vassal.",
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
        explanation: "This was the Siege of Famagusta (1570-1571), where Venetian commander Marcantonio Bragadin held out for nearly 11 months against an Ottoman army under Lala Kara Mustafa Pasha. Venice had held Cyprus for 'nearly a century' since 1489. The garrison of 7,000 faced perhaps 200,000 besiegers. When only 1,800 defenders remained and walls built in the 'older medieval style' (vulnerable to artillery; trace italienne bastions provided better defense) were rubble, Bragadin negotiated surrender with safe passage guaranteed. Mustafa broke the agreement: Bragadin was tortured for days, then flayed alive, his skin stuffed with straw and sent to Constantinople. The atrocity contributed to the fury at 'the great naval battle months later'—Lepanto in October 1571. Arquebus-armed infantry (standard infantry firearm 1520-1600) on both sides identifies the period.",
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
        explanation: "This was the Battle of Plassey on June 23, 1757, where Robert Clive's British East India Company defeated Nawab Siraj ud-Daulah of Bengal. The battle was decided more by politics than fighting—Mir Jafar, commanding much of the Nawab's army, had secretly agreed to betray him in exchange for the throne. When the monsoon rain fell, the Company's gun crews kept their powder dry under tarpaulins while the Nawab's artillery fell silent with wet powder. Most of the 50,000-strong Bengali army never engaged. Siraj ud-Daulah fled and was murdered days later. Flintlock muskets with socket bayonets (standard 1700-1850) and disciplined sepoy volleys defeated the larger but disorganized opposition. The Company became effective rulers of Bengal—transforming 'from merchants into sovereigns' began the British conquest of India.",
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
        explanation: "This was the Battle of Falkirk on July 22, 1298, where Edward I of England avenged the disaster at Stirling Bridge the year before. William Wallace's Scottish army, lacking cavalry and noble support, formed schiltrons—dense circular pike formations that had won at Stirling. Edward's cavalry charged but couldn't break the hedgehog of pikes. Then Edward ordered his Welsh longbowmen forward. Longbow draw weights of 80-100 pounds were characteristic of the late 13th-early 14th century (war bows later reached 150+ pounds). The Scots couldn't charge to silence the archers without breaking formation and being ridden down; they died in place under the arrow storm. Knights in mail with early plate additions (rather than full plate) indicates the late 13th century transition. Schiltron pike tactics were a recent Scottish innovation of the 1290s—they would influence pike warfare for centuries.",
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
        explanation: "This was the Battle of Rocroi on May 19, 1643, which ended Spanish military supremacy in Europe. The 21-year-old Duke of Enghien (later the Great Condé) commanded French forces against the Spanish Army of Flanders under Francisco de Melo. The Spanish tercios—pike-and-musket formations that had dominated European warfare 'for 150 years' since their development in the Italian Wars—were invincible from the front. But when Enghien's cavalry won on one wing, they wheeled into the tercios' flanks rather than pursuing. No tercio had ever been broken in pitched battle before; that day, several were destroyed. The surviving tercios surrendered with honor, allowed to march away with arms. Matchlock muskets (dominant 1550-1680) with flintlocks 'existing but not standard' indicates the 1620s-1660s transition. Within a generation, linear formations replaced the tercio entirely.",
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
        explanation: "This was the Battle of Tewkesbury on May 4, 1471, the battle that effectively ended the House of Lancaster. Edward IV crushed Queen Margaret of Anjou's army; her son Edward, Prince of Wales (the Lancastrian heir), was killed in the battle or murdered shortly after—chronicles differ. The Duke of Somerset led a premature charge from the strong Lancastrian position behind hedges, and Edward's counterattack broke the entire army. Soldiers violated sanctuary in Tewkesbury Abbey to kill fugitives. Full plate armor was standard for wealthy fighters 1400-1550. The pollax (hammer, spike, and axe blade optimized for armored combat) was the premier weapon of the 15th century. Handguns as 'primitive' secondary weapons indicates the early gunpowder transition. Henry VI was murdered in the Tower weeks later, ending the Lancastrian line.",
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
        explanation: "This was the Battle of Dien Bien Phu (March-May 1954), where General Vo Nguyen Giap's Viet Minh destroyed the French garrison in a remote valley. French commander General Henri Navarre had established the base hoping to draw Giap into a conventional battle where French firepower would be decisive. Giap's soldiers disassembled artillery and carried it through mountains on bicycles and backs, then dug it into reverse slopes where French counterbattery fire couldn't reach. The airstrip was cratered within days; air supply by parachute couldn't meet the garrison's needs. After 57 days, the 13,000-man garrison surrendered. Air supply as sole logistics for a major base was feasible with 1940s transport aircraft—earlier planes couldn't carry enough, later helicopters would change the equation. France withdrew from Indochina within months; the war America inherited began.",
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
        explanation: "This was the Battle of Ia Drang Valley in November 1965, the first major engagement between U.S. and North Vietnamese Army (NVA) forces. Lieutenant Colonel Hal Moore's 1st Battalion, 7th Cavalry landed at LZ X-Ray and found three NVA regiments. For three days, Moore's 450 men fought desperately against 2,000+ NVA soldiers who charged to 'grab them by the belt buckle'—getting close enough that American firepower couldn't be used without hitting friendlies. B-52 strikes, helicopter gunships, and artillery broke the attacks. Both sides claimed victory; both drew conclusions that shaped the war—America that firepower could win, the NVA that they could survive it. Turbine-powered UH-1 'Huey' helicopters (operational early 1960s) enabled air assault tactics. Helicopter gunships (developed 1962-1965 for Vietnam) provided close support. This was the first war fought with air assault as primary doctrine.",
        tags: ["pitched-battle", "20th-century", "asia"]
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
        explanation: "This was the Battle of Hue during the Tet Offensive (January-February 1968). On January 31, NVA and Viet Cong forces seized most of the former imperial capital, including the ancient Citadel—a 19th-century fortress—and held it for 26 days. U.S. Marines and South Vietnamese troops retook the city block by block in brutal house-to-house fighting. Air and artillery support was limited to avoid destroying the historic city. American M14 battle rifles (7.62x51mm, designed for longer range) faced NVA AK-47 assault rifles (7.62x39mm) in close urban combat where neither weapon was ideal. Mass graves revealed the massacre of thousands of civilians by the occupiers. Tet was a military defeat for the NVA but a political victory—American public opinion turned against the war. The rifle matchup (heavier battle rifles vs. assault rifles with curved magazines) was characteristic of 1960s Cold War conflicts.",
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
        explanation: "This was the Battle of the Valley of Tears on the Golan Heights during the Yom Kippur War (October 6-9, 1973). Syria attacked on Yom Kippur with over 1,400 tanks against roughly 180 Israeli tanks defending the strategic heights. The Israeli 7th Armored Brigade, commanded by Colonel Avigdor Ben-Gal, fought for four days without sleep, engaging at maximum range where their Centurions' superior optics and fire control gave them an advantage over Syrian T-55s and T-62s. Crews whose tanks were destroyed joined surviving vehicles. By October 9, the Israelis had fewer than 20 operational tanks—but the Syrians, having lost over 500 tanks, withdrew. The valley earned its name from the burned-out wrecks that filled it. Centurions and Pattons facing T-55s and T-62s was the characteristic tank matchup of Middle Eastern wars from 1967-1982; the Western tanks' superior fire control at range was a specific Cold War-era advantage.",
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
        explanation: "This was the Battle of Goose Green on May 28-29, 1982, during the Falklands War. Lieutenant Colonel 'H' Jones led 2nd Battalion, Parachute Regiment against an Argentine garrison three times their size. Jones was killed leading a charge against a machine gun position and received a posthumous Victoria Cross. The Paras took Goose Green after 14 hours of fighting. Meanwhile, Argentine Exocet missiles sank HMS Sheffield, Atlantic Conveyor, and other ships—proving modern surface fleets were vulnerable to anti-ship missiles in ways not seen since WWII. Britain's 8,000-mile power projection to retake colonial islands was unusual in the post-WWII era of decolonization. The Argentine junta fell within days of the war's end.",
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
        explanation: "This was the Battle of 73 Easting on February 26, 1991, during the Gulf War. Captain H.R. McMaster's Eagle Troop, 2nd Armored Cavalry Regiment—nine M1A1 Abrams tanks and twelve Bradley fighting vehicles—stumbled into the Iraqi Republican Guard's Tawakalna Division in a sandstorm. The M1A1s' thermal sights could see through the storm; the Iraqi T-72s were blind. In 23 minutes, Eagle Troop destroyed over 80 Iraqi vehicles while losing only one Bradley. The six-week air campaign before the ground assault used F-117 stealth aircraft (first used operationally 1989) and precision-guided bombs hitting individual buildings. Thermal imaging letting tanks see through darkness and smoke was decisive late-1980s-1990s technology. The '100-hour ground war' destroyed the Iraqi army as a fighting force.",
        tags: ["armored-warfare", "20th-century", "middle-east"]
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
        explanation: "This was the Battle of Isandlwana on January 22, 1879, the worst defeat the British Army suffered in the Victorian era. Lord Chelmsford's column of 1,800 men camped at Isandlwana without forming a defensive perimeter. Lieutenant Colonel Henry Pulleine was killed along with over 1,300 British and allied troops when 20,000 Zulu warriors under King Cetshwayo's commanders swept over the camp. The Zulu 'chest and horns' formation—developed by Shaka Zulu in the early 19th century—enveloped the scattered defenders. Single-shot Martini-Henry breech-loaders (standard 1865-1890) killed thousands of Zulus, but ammunition distribution failed. That afternoon, 150 men at Rorke's Drift held off 4,000 Zulus for 12 hours—the contrast illustrating that breech-loaders behind prepared defenses were nearly invincible. Eleven Victoria Crosses were awarded for Rorke's Drift.",
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
        explanation: "This was the Battle of Adwa on March 1, 1896, where Ethiopia became the only African nation to defeat a European colonial power and remain independent. Emperor Menelik II gathered perhaps 100,000 warriors against General Oreste Baratieri's 18,000 Italian troops. The Italians advanced in three columns with poor maps and worse coordination; Ethiopian forces destroyed each column in detail. Over 6,000 Italians died; 4,000 were captured. Menelik had purchased modern rifles from France and Russia—his army wasn't fighting with spears against magazine rifles, but with magazine rifles of their own. The defeat shocked Europe during the 'scramble for Africa' (1880-1914). Ethiopia remained independent until Mussolini's invasion in 1935-36, and even then required poison gas to subdue. Magazine rifles (bolt-action, multiple rounds) replacing single-shot breech-loaders as standard identifies the 1880s-1890s.",
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
        explanation: "This was the Battle of Omdurman on September 2, 1898, where General Kitchener reconquered Sudan for Britain. The Mahdist state had existed since Muhammad Ahmad declared himself the Mahdi in 1881 and destroyed General Gordon's force at Khartoum in 1885 ('over a decade earlier'). Kitchener's Maxim guns firing 500 rounds per minute slaughtered the Mahdist charges—11,000 Sudanese died for 48 British killed. Winston Churchill participated in the 21st Lancers' famous charge, 'the last meaningful cavalry charge by the British Army.' The Lancers' 400 men charged 2,500 Dervishes, losing 70 men in two minutes—a dramatic last gasp of cavalry shock tactics in the machine gun age. The one-sided casualty ratios demonstrated the industrial firepower gap at its most extreme.",
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
        explanation: "This was the Battle of Talas in July 751, where the Abbasid Caliphate defeated Tang China—the only time these two great empires ever fought. General Gao Xianzhi led Tang forces to support a local ruler against Abbasid expansion along the Silk Road. When Karluk Turkish cavalry switched sides during the battle, the Tang line collapsed. The defeat ended Chinese influence in Central Asia permanently. Legend says Chinese papermakers captured at Talas taught the Arabs papermaking, spreading the technology westward to Europe—though this may be apocryphal. Crossbows and halberds were characteristic Tang infantry weapons (618-907 CE). The Arab/Islamic expansion 'sweeping eastward in a century of conquest' identifies the Umayyad/early Abbasid period (632-750s). This frontier clash defined which civilization would dominate the Silk Road cities for centuries.",
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
        explanation: "This was the Battle of Yarmouk in August 636, the decisive battle of the early Islamic conquests. Khalid ibn al-Walid commanded the Arab forces against the Byzantine army of Emperor Heraclius—the same emperor who had just defeated Persia in a 26-year war that exhausted both empires. The armies faced each other across the Yarmouk River for days in August heat. When Arab auxiliaries in the Byzantine army defected and a sandstorm blinded the Byzantines, their cataphract cavalry (fully armored riders on armored horses, peak use 300-700 CE) were overwhelmed. Within a decade, Byzantium lost Syria, Palestine, Egypt, and North Africa—provinces held for 600 years. The Arab armies 'united under a new faith' just four years after Muhammad's death (632) achieved one of history's most rapid and permanent territorial transformations.",
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
        explanation: "This was the Battle of Tours (or Poitiers) in October 732, where Charles Martel ('the Hammer') stopped the Umayyad advance into Western Europe. Abd al-Rahman al-Ghafiqi led a raiding force from Muslim Spain across the Pyrenees; they had already destroyed the Visigothic Kingdom and were pillaging wealthy Frankish monasteries. Charles's Frankish infantry, fighting in dense formations with mail armor and spears, stood 'like a wall of ice' against Umayyad cavalry charges for seven days. When their camp (and plunder) was threatened, the Umayyads broke off; Abd al-Rahman was killed in the confusion. Infantry in mail as the primary arm, with heavy cavalry 'not yet dominant,' indicates the early medieval transition (500-800 CE). The Umayyad expansion 'in less than a century' (from 632) marks this as the early 8th century—the limit of Arab expansion into Western Europe.",
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
        explanation: "This was the Battle of Ankara on July 20, 1402, where Timur (Tamerlane) captured Ottoman Sultan Bayezid I—the only Ottoman sultan ever captured in battle. Timur's empire stretched from India to Anatolia; he consciously emulated Genghis Khan's conquests 'a century and a half earlier' (1210-1280). Bayezid's army included Janissary slave-soldiers and early Ottoman bombards, but when Anatolian vassals defected to Timur mid-battle, the flanks collapsed. Bayezid died in captivity (legends say in an iron cage, though historians doubt this). The Ottoman Empire nearly disintegrated in the civil war that followed; the 'Interregnum' lasted until 1413. The combination of early bombards with steppe horse archers indicates the late 14th-early 15th century transition when gunpowder was present but not yet dominant.",
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
        explanation: "This was the Battle of Teutoburg Forest (also called the Varian Disaster) in 9 CE. Publius Quinctilius Varus led three legions (XVII, XVIII, XIX) into the Germanic forests; Arminius, a Romanized Germanic chieftain who held Roman citizenship, organized the ambush. The legions were caught strung out along a narrow path in rain and mud; fighting lasted three days as the column disintegrated. Varus fell on his sword. Augustus reportedly wandered his palace crying 'Varus, give me back my legions!' The three eagle standards were lost—Rome's greatest shame—and recovered only decades later. The pilum, gladius, and scutum were Roman equipment 300 BCE-300 CE, but eagle standards as near-religious objects were specifically Imperial features (after 27 BCE). Rome never seriously attempted to conquer beyond the Rhine again.",
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
        explanation: "This was the Battle of Adrianople on August 9, 378 CE, when Gothic cavalry destroyed a Roman army and killed Emperor Valens. The Goths had been admitted as refugees fleeing the Huns; Roman officials' abuse drove them to revolt. Valens attacked without waiting for reinforcements under his co-emperor Gratian. The Roman infantry pushed back the Gothic foot, but when Gothic cavalry returned from foraging, they struck the Roman flank. The packed infantry couldn't maneuver; two-thirds of the army died. Valens's body was never found. The oval shields and spears (replacing earlier scutum and pilum) indicate late Roman equipment (250-500 CE). Heavy cavalry defeating Roman infantry so decisively was characteristic of the 4th-5th century transition from infantry to cavalry dominance. The Western Empire had 'less than a century remaining'—it fell in 476 CE.",
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
        explanation: "This was the Battle of the Catalaunian Plains (also called Châlons) in June 451 CE, where Attila the Hun was finally stopped. The Roman general Aetius ('the last of the Romans') assembled a coalition including the Visigoths under King Theodoric I, Burgundians, Franks, and other Germanic peoples 'settled within imperial territory' as federates—the characteristic 5th-century arrangement. Attila's Hunnic horse archers and Germanic allies attacked the coalition. Theodoric was killed, but his son Thorismund rallied the Visigoths and nearly trapped Attila's army. Attila withdrew—possibly the only significant defeat he ever suffered. He died two years later, and his empire fragmented among quarreling sons. Composite bow horse archers threatening Rome indicates the 4th-5th century. The Western Empire had 'only decades remaining'—it fell in 476 CE.",
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
        explanation: "This was the Battle of Ayacucho on December 9, 1824, the battle that ended Spanish colonial rule in South America. General Antonio José de Sucre commanded the liberation forces against Viceroy José de la Serna's royalist army at over 10,000 feet altitude in the Peruvian Andes. When the royalist cavalry inexplicably withdrew instead of counterattacking, their infantry line collapsed. Sucre captured the Viceroy himself. Within months, the last Spanish strongholds in South America surrendered, ending 'three centuries' of colonial rule (since Pizarro's conquest in the 1530s). Smoothbore flintlock muskets in linear formations (standard 1700-1840) and the South American independence context (1810-1825, following the Napoleonic disruption of Spain) date this precisely. Simón Bolívar's dream of a united South America would fail, but the colonial era was over.",
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
        explanation: "This was the Battle of Assaye on September 23, 1803, which Arthur Wellesley (the future Duke of Wellington) later called the finest thing he ever did in battle—higher praise than Waterloo. Wellesley's 7,000 troops attacked a Maratha army of 40,000 with 100 guns served by European-trained crews. He spotted the enemy crossing a river and attacked immediately rather than wait for support. The 74th Highlanders lost their commander and 400 men but pressed on. Wellesley had two horses shot from under him. The Marathas fought well—their European-trained artillery was particularly good—but disciplined volleys and bayonet charges took the guns. Flintlock muskets with bayonets (1700-1840) and a trading company's private army fighting Indian confederations with European-trained artillery identifies the East India Company expansion era (1750s-1820s).",
        tags: ["pitched-battle", "19th-century", "south-asia"]
    },
    {
        id: "campaign_101",
        title: "The Chariot Clash",
        actualYear: -1274,
        difficulty: "hard",
        description: `Two great empires met in battle near a fortified city on a contested frontier. Both commanded vast armies built around the same weapon system: two-wheeled war chariots crewed by a driver, an archer, and sometimes a shield-bearer, drawn by two horses.

The invading king led perhaps 20,000 soldiers with 2,000 chariots. He divided his force into four divisions and advanced along the coast. The defending empire had assembled an even larger force—perhaps 40,000 men with 3,500 chariots—and concealed them behind the city.

The invader's advance guard reported the enemy had retreated north. The king pressed forward with just one division, eager to reach the city. It was a trap. The hidden army struck the strung-out column, and chariots swept through the camp, scattering soldiers who hadn't yet formed for battle.

The king rallied his household troops and counterattacked. Reinforcements arrived just in time to prevent disaster. By evening, both armies had fought to exhaustion. The invader claimed total victory; the defender claimed the same. A treaty was signed years later—the oldest surviving international peace agreement—and the two empires divided the contested region between them.`,
        hints: [
            { cost: 20, text: "Two-wheeled war chariots as the primary striking arm were dominant in Near Eastern warfare from roughly 1700 BCE to 1200 BCE, before cavalry replaced them.", explanation: "The chariot warfare helps date this battle." },
            { cost: 25, text: "Large empires capable of fielding thousands of chariots existed in the Near East primarily during the Late Bronze Age (1600-1200 BCE).", explanation: "The scale of chariot armies helps narrow the date." }
        ],
        explanation: "This was the Battle of Kadesh in 1274 BCE, between Pharaoh Ramesses II of Egypt and King Muwatalli II of the Hittite Empire. It's the earliest battle for which detailed tactical accounts survive. Ramesses was ambushed when Hittite chariots hidden behind Kadesh struck his strung-out column. Egyptian reliefs show Ramesses personally leading the counterattack. Both sides claimed victory; the eventual peace treaty (preserved in both Egyptian and Hittite versions) is the oldest surviving international agreement. Two-wheeled chariots as the primary striking arm dominated Near Eastern warfare 1700-1200 BCE; cavalry replaced them during the Iron Age transition. Empires fielding thousands of chariots existed only during the Late Bronze Age.",
        tags: ["pitched-battle", "ancient", "middle-east"]
    },
    {
        id: "campaign_102",
        title: "The Wooden Walls",
        actualYear: -480,
        difficulty: "medium",
        description: `A vast invasion force—later accounts claimed millions, though 200,000 is more realistic—had crossed into a peninsula, burning cities and scattering defenders. The invaders' fleet of perhaps 800 warships accompanied the army along the coast. Only one city-state's navy remained intact: 200 triremes, slender oar-powered warships with bronze rams.

The defending admiral lured the enemy fleet into a narrow strait where numbers couldn't tell. The triremes were rowed by free citizens, 170 oars per ship arranged in three banks. They fought by ramming—driving the bronze-sheathed prow through enemy hulls—or by boarding after disabling an enemy with oar-strikes.

An oracle had promised the city would be saved by "wooden walls." Some citizens had stayed behind walls; they died when the invaders took the citadel. The admiral understood: the wooden walls were the ships.

In the narrow waters, the larger fleet couldn't maneuver. The defenders' better seamanship let them ram enemy ships from the flank, then back away before counterattack. By evening, the invading fleet had lost perhaps 200 ships to 40 defenders. The invasion force withdrew the next year.`,
        hints: [
            { cost: 20, text: "Triremes (three-banked oared warships) were the dominant Mediterranean warship from roughly 700 BCE to 300 BCE. Later navies used larger quinqueremes.", explanation: "The ship type helps date this battle." },
            { cost: 25, text: "Bronze rams as the primary naval weapon, with boarding as secondary, characterized Mediterranean naval warfare before the development of shipboard artillery.", explanation: "The combat style helps confirm the ancient timeframe." }
        ],
        explanation: "This was the Battle of Salamis in 480 BCE, where the Greek fleet under Themistocles of Athens destroyed the Persian navy of Xerxes I. The oracle's 'wooden walls' prophecy is recorded by Herodotus. The Greeks lured the Persians into the narrow strait between Salamis and the mainland, where Persian numerical superiority was neutralized. Xerxes watched from a throne on shore as his fleet was destroyed. He withdrew to Persia, leaving an army that was defeated at Plataea the following year. Triremes (three-banked oars, bronze rams) dominated Mediterranean warfare from 700-300 BCE. The style of combat—ramming and oar-breaking rather than artillery—confirms the pre-Hellenistic period.",
        tags: ["naval", "ancient", "mediterranean"]
    },
    {
        id: "campaign_103",
        title: "The River Ambush",
        actualYear: 955,
        difficulty: "hard",
        description: `For decades, raiders from the eastern steppes had terrorized the heartland of a continent. Their light cavalry, armed with powerful composite bows, could devastate farming communities, defeat armored knights through mobility and archery, and retreat before any pursuit. Tribute payments bought only temporary respite.

A new king determined to end the raids permanently. When the raiders invaded with perhaps 8,000 horsemen, he gathered an army of approximately 10,000—mostly heavy cavalry equipped with mail armor, shields, lances, and swords. Light cavalry and infantry supported them, but this was primarily a mounted army.

The king caught the raiders at a river crossing. They had just ravaged a major religious center and were laden with plunder. The raiders attempted their usual tactic: feigned retreat to draw the heavy cavalry into a disordered pursuit, then wheel and counterattack with arrows.

But the king had learned. He kept his cavalry in tight formation, advancing steadily rather than charging recklessly. When the raiders' arrows failed to break the formation, they had no answer. The heavy cavalry rode them down. The pursuit continued for days; few raiders escaped. The steppe people never raided the kingdom again.`,
        hints: [
            { cost: 20, text: "Heavy cavalry in mail armor with lances facing light horse archers with composite bows was a characteristic matchup from roughly 500-1200 CE across the Eurasian borderlands.", explanation: "The cavalry types help date this battle." },
            { cost: 25, text: "Steppe raiders terrorizing Central Europe before being defeated by organized heavy cavalry describes events of the 9th-10th centuries specifically.", explanation: "The historical pattern helps narrow the date." }
        ],
        explanation: "This was the Battle of Lechfeld on August 10, 955, where King Otto I of Germany crushed the Magyar (Hungarian) raiders who had terrorized Central Europe for decades. The Magyars had raided as far as France and Italy; Lechfeld ended their threat permanently. Otto's disciplined heavy cavalry refused to break formation during Magyar feigned retreats. The pursuit was merciless—Magyar leaders were executed, and few warriors returned home. Within decades, the Magyars settled, converted to Christianity, and founded the Kingdom of Hungary. Heavy cavalry in mail facing steppe horse archers was characteristic of 500-1200 CE. The specific pattern of steppe raiders being permanently defeated identifies the 10th century.",
        tags: ["pitched-battle", "10th-century", "europe"]
    },
    {
        id: "campaign_104",
        title: "The Muddy Field",
        actualYear: 1346,
        difficulty: "medium",
        description: `A raiding army found itself cornered, its retreat to ships blocked by a larger pursuing force. The raiders numbered perhaps 12,000; the pursuers brought over 30,000, including the finest heavy cavalry in Christendom.

The raiders took position on a ridge, dismounting their knights and men-at-arms to fight on foot. Their key weapon was the longbow—a six-foot stave of yew requiring years of training and immense physical strength, capable of penetrating mail armor at 200 yards. Perhaps 7,000 archers formed the bulk of their army.

The pursuing army attacked uphill across rain-soaked ground. Their crossbowmen opened the battle but were outranged and outshot by the longbows. Then the heavy cavalry charged—knights in full mail with plate reinforcements, mounted on armored destriers, the most expensive military technology of the age.

The mud slowed the horses. The arrows came in storms—perhaps 30,000 per minute at the peak. Horses fell screaming; knights crashed to the ground and couldn't rise in their heavy armor. Those who reached the English line were killed by dismounted men-at-arms. The pursuing king was wounded; his army lost over 10,000 dead, including hundreds of nobles.`,
        hints: [
            { cost: 20, text: "Longbows requiring years of training and capable of penetrating mail at range were the dominant English weapon from roughly 1300-1450, before firearms replaced them.", explanation: "The longbow technology helps date this battle." },
            { cost: 25, text: "Heavy cavalry in mail with plate reinforcements (but not full plate harnesses) was characteristic of the early-to-mid 14th century, during the transition from mail to plate.", explanation: "The armor technology helps narrow the date." }
        ],
        explanation: "This was the Battle of Crécy on August 26, 1346, the first major English victory of the Hundred Years' War. Edward III's 12,000 troops defeated Philip VI of France's 30,000+. The English longbowmen—commoners who trained from childhood—slaughtered the flower of French chivalry. Perhaps 1,500 French knights and nobles died, including King John of Bohemia (blind, he charged anyway). The battle proved that disciplined infantry with missile weapons could defeat heavy cavalry. Longbows dominated English armies 1300-1450. Mail with plate reinforcements (not full plate, which came later) identifies the early-to-mid 14th century transition period.",
        tags: ["pitched-battle", "14th-century", "europe"]
    },
    {
        id: "campaign_105",
        title: "The Archer King",
        actualYear: 1415,
        difficulty: "medium",
        description: `A young king invaded a neighboring kingdom to press his claim to its throne. Disease and attrition reduced his army from 12,000 to barely 6,000 during a siege and subsequent march. A much larger army—perhaps 20,000—moved to block his retreat to the coast.

The king took position between two dense woods that protected his flanks. His dismounted men-at-arms, in full plate armor, held the center. On the wings, thousands of archers with longbows hammered sharpened stakes into the ground before them, pointing outward to stop cavalry charges.

The larger army attacked across a freshly plowed field turned to deep mud by autumn rain. Their armored knights trudged forward, sinking to their knees. The longbow arrows couldn't easily penetrate the finest plate armor, but they killed horses and struck gaps at joints and visors. When the exhausted, mud-caked knights finally reached the English line, they were cut down by men-at-arms with swords, axes, and mauls.

The king captured so many noble prisoners that when a (false) alarm suggested a counterattack, he ordered prisoners executed rather than risk them being freed. Over 6,000 of the larger army died; the invaders lost perhaps 500.`,
        hints: [
            { cost: 20, text: "Full plate armor reaching its peak effectiveness was characteristic of the early 15th century (roughly 1400-1450), before firearms began making heavy armor impractical.", explanation: "The armor technology helps date this battle." },
            { cost: 25, text: "Longbows used en masse with sharpened stakes for defense was a specifically English tactic of the Hundred Years' War (1337-1453).", explanation: "The tactical combination helps narrow the date." }
        ],
        explanation: "This was the Battle of Agincourt on October 25, 1415, Henry V of England's most famous victory. His 6,000 starving, dysentery-ridden troops destroyed a French army three times their size. The French dead included three dukes, ninety counts, and over 1,500 knights. The mud was so deep that armored knights who fell couldn't rise. The controversial prisoner massacre reflected the brutal realities of medieval warfare. Full plate armor reaching peak effectiveness identifies the early 15th century (1400-1450). Longbows with stakes as an English Hundred Years' War tactic (1337-1453) confirms the period.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_108",
        title: "The Desert Crossing",
        actualYear: 1591,
        difficulty: "hard",
        description: `An army of perhaps 4,000 soldiers crossed a vast desert—a journey of over 1,000 miles taking 135 days—to attack a wealthy empire known for its gold, salt, and learning. The invaders brought 2,500 matchlock-armed infantry and 500 mounted arquebusiers, plus eight cannon. Thousands of camels carried water, supplies, and ammunition.

The empire they attacked had dominated the region for a century. Its army numbered perhaps 40,000, including infantry, cavalry, and war canoes on the great river. But their weapons were traditional: swords, spears, bows, and throwing javelins. They had never faced gunpowder weapons.

The defenders attempted to stampede cattle into the invading formation. The matchlocks killed the cattle; the massed fire then tore into the advancing infantry. The cavalry charges melted away before the arquebus volleys. Within hours, the empire's army was destroyed.

The victors captured the empire's legendary cities and their wealth. But they couldn't hold the territory; the desert crossing was too difficult to repeat with sufficient force. The empire fragmented into successor states.`,
        hints: [
            { cost: 20, text: "Matchlock arquebuses as the standard infantry weapon, with mounted arquebusiers as elite cavalry, was characteristic of the late 16th century (1550-1620).", explanation: "The firearm technology helps date this battle." },
            { cost: 25, text: "African empires encountering gunpowder weapons for the first time occurred primarily in the 16th-17th centuries as European and North African powers expanded.", explanation: "The gunpowder introduction helps narrow the date." }
        ],
        explanation: "This was the Battle of Tondibi on March 13, 1591, where a Moroccan army destroyed the Songhai Empire. Sultan Ahmad al-Mansur sent Judar Pasha with 4,000 men across the Sahara Desert—one of history's most remarkable military logistics feats. The Songhai under Askia Ishaq II had never faced gunpowder weapons. Their cattle stampede failed; their massed charges were cut down by arquebus fire. Timbuktu and Gao fell soon after. The Songhai Empire, which had dominated West Africa for a century, fragmented permanently. Matchlock arquebuses as standard infantry weapons with mounted arquebusiers identifies the late 16th century (1550-1620). First gunpowder encounters in sub-Saharan Africa occurred primarily in this period.",
        tags: ["pitched-battle", "16th-century", "africa"]
    },
    {
        id: "campaign_109",
        title: "The Burning Capital",
        actualYear: 1767,
        difficulty: "hard",
        description: `A magnificent capital city—temples with golden spires, royal palaces, and monasteries housing centuries of art and literature—was besieged for over a year before it fell. The city had been the greatest power in its region for four centuries.

The besieging army, from a kingdom to the west, had grown to perhaps 40,000. They built stockades around the city and waited for starvation to do its work. The defenders, weakened by famine and internal divisions, numbered barely 10,000.

Both armies used similar weapons: matchlock muskets, swords, spears, and war elephants—animals that could carry small cannon on their backs and terrify enemy troops. But firearms were not yet dominant; elephants and traditional weapons still played major roles.

When the walls were finally breached, the attackers destroyed everything. Temples were burned; golden Buddha images melted; libraries and records were destroyed. The royal family was captured and deported. Tens of thousands died or were enslaved.

The city was abandoned. The survivors founded a new capital downstream, beginning a slow recovery that would take decades.`,
        hints: [
            { cost: 20, text: "Matchlock muskets alongside war elephants with back-mounted cannon was characteristic of mainland Southeast Asian warfare from roughly 1600-1800.", explanation: "The weapons combination helps date this battle." },
            { cost: 25, text: "War elephants as a significant military force persisted in Southeast Asia into the 18th century, longer than anywhere else in the world.", explanation: "The elephant warfare helps narrow the timeframe." }
        ],
        explanation: "This was the Fall of Ayutthaya on April 7, 1767, when Burmese forces under Hsinbyushin destroyed the Thai capital. Ayutthaya had been one of the world's great cities for 417 years—larger than contemporary Paris or London. The Burmese burned temples, melted golden statues, and destroyed irreplaceable chronicles and art. The royal family was deported; thousands were killed or enslaved. The city was abandoned and never rebuilt. General Taksin escaped and founded a new capital at Thonburi (later Bangkok). Matchlock muskets alongside war elephants with back-mounted cannon identifies 1600-1800 Southeast Asian warfare. Elephants remaining militarily significant into the 18th century was unique to this region.",
        tags: ["siege", "18th-century", "asia"]
    },
    {
        id: "campaign_110",
        title: "The Steel Ships",
        actualYear: 1905,
        difficulty: "medium",
        description: `A fleet that had sailed 18,000 miles—around an entire continent and across two oceans—met an enemy fleet in narrow straits. The approaching fleet had 11 battleships; the waiting fleet had only 4, but they were modern designs with superior speed and gunnery.

The battleships were armored with steel plates up to 12 inches thick. Their main guns—12-inch rifles in rotating turrets—could fire explosive shells weighing nearly a thousand pounds over 10 miles. Rangefinders and fire control systems allowed aimed fire at unprecedented distances.

The waiting admiral had drilled his crews relentlessly. His ships crossed the approaching fleet's path in a maneuver that let all their guns bear while limiting enemy response. The gunnery was devastating—hits at ranges previously thought impossible.

Within hours, the approaching fleet was destroyed. Of 38 ships, 21 were sunk, 7 captured, and 6 interned in neutral ports. Only 3 escaped. The victors lost 3 torpedo boats. It was the most decisive naval battle since the age of sail, fought entirely with modern weapons: wireless telegraphy, rangefinders, and long-range gunnery.`,
        hints: [
            { cost: 20, text: "Steel-armored battleships with 12-inch guns in rotating turrets, wireless telegraphy, and optical rangefinders characterize naval warfare from roughly 1890-1920.", explanation: "The naval technology helps date this battle." },
            { cost: 25, text: "The pre-dreadnought battleship era—before HMS Dreadnought (1906) made all earlier designs obsolete—was approximately 1890-1906.", explanation: "The battleship generation helps narrow the date." }
        ],
        explanation: "This was the Battle of Tsushima on May 27-28, 1905, where Admiral Togo Heihachiro's Japanese fleet annihilated the Russian Baltic Fleet under Admiral Rozhestvensky during the Russo-Japanese War. The Russians had sailed 18,000 miles around Africa (the Suez Canal was closed to them) to reach the Pacific. Togo 'crossed the T'—maneuvering so all his guns could fire while only the Russians' forward guns could reply. Japanese gunnery was superior at every range. Russia lost 21 ships sunk, over 4,000 killed, and 6,000 captured—the most decisive naval battle since Trafalgar. Steel battleships with 12-inch turret guns, wireless, and rangefinders characterize 1890-1920 naval warfare. Pre-dreadnought designs (before 1906) identify this as the early 20th century.",
        tags: ["naval", "20th-century", "asia"]
    },
    {
        id: "campaign_111",
        title: "The Gothic King's Fall",
        actualYear: 552,
        difficulty: "hard",
        description: `An aging empire, its glory faded, launched one final campaign to reclaim its lost western provinces. The emperor sent an elderly eunuch—an unlikely general—with a small but elite force to finish a war that had dragged on for nearly two decades.

The barbarian king who held the province commanded the last great army of his people: perhaps 15,000 warriors, built around heavy lancers who charged in wedge formations. These were fearsome cavalry, armored in mail and wielding long spears. The king believed one decisive charge would shatter the empire's infantry.

The imperial general had fewer troops—perhaps 20,000—but cunning beyond measure. He chose narrow ground between two hills, placing 8,000 archers on the slopes. His cavalry he dismounted to form an infantry center, denying the enemy the satisfaction of a cavalry duel.

When the barbarian lancers charged, arrows darkened the sky. The king himself was struck in the first moments, mortally wounded. His cavalry, seeing their leader fall, broke and fled. The general's forces pursued relentlessly. By nightfall, the barbarian army was destroyed, and the king was found dying in a thicket.`,
        hints: [
            { cost: 20, text: "Byzantine combined-arms tactics—dismounted cavalry with massed archers—characterized 6th century imperial warfare.", explanation: "The tactical approach helps date this battle." },
            { cost: 25, text: "The Gothic Wars in Italy, as Byzantium attempted to reconquer the Western Roman provinces, lasted from 535-554 CE.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Taginae (Busta Gallorum) in June or July 552, where Byzantine general Narses destroyed the Ostrogothic Kingdom. King Totila, who had nearly driven the Byzantines from Italy, died from an arrow wound early in the battle. Narses—a 74-year-old eunuch who had never commanded in the field before this campaign—proved a tactical genius. His 8,000 archers devastated the Gothic cavalry charges. The Ostrogothic Kingdom fell within months; Italy returned to imperial rule, though it would be lost again to the Lombards within a generation. Byzantine combined-arms tactics (dismounted cavalry, massed archers) and the Gothic Wars (535-554) precisely date this battle.",
        tags: ["pitched-battle", "6th-century", "europe"]
    },
    {
        id: "campaign_112",
        title: "The River of Princes",
        actualYear: 1223,
        difficulty: "hard",
        description: `Refugees from distant lands brought terrifying news: a new enemy had appeared from the east, destroying every army in its path. The great princes of the region assembled the largest army in generations—perhaps 80,000 warriors—to meet this unknown threat.

The enemy sent ambassadors offering peace; the princes executed them. The enemy sent a second embassy; those too were killed. There would be no negotiation.

The invaders numbered only 20,000, but they were something never before seen: horse archers with extraordinary discipline, fighting in coordinated units of 10, 100, and 1,000. They could shoot accurately at full gallop, and their composite bows outranged anything the princes possessed. Their heavy cavalry wore lamellar armor of lacquered leather.

The enemy feigned retreat for nine days, drawing the allied army further and further from its base. Strung out over miles, exhausted and disorganized, the allies finally caught the enemy at a river crossing—exactly where the invaders wanted them.

The slaughter was total. Of the princes who led the army, six were captured and executed in a peculiar manner: placed beneath wooden boards while the victors feasted atop them, crushing them slowly. The survivors fled; nothing stood between the invaders and the heartland.`,
        hints: [
            { cost: 20, text: "Mongol decimal military organization (units of 10, 100, 1000) and disciplined horse archery was characteristic of 13th-century steppe warfare.", explanation: "The military organization helps date this battle." },
            { cost: 25, text: "The first Mongol incursion into Eastern Europe occurred in 1223, nearly two decades before the main invasion.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of the Kalka River on May 31, 1223, where Mongol generals Jebe and Subutai destroyed a coalition of Kievan Rus' princes and Cuman (Kipchak) allies. Mstislav the Bold of Galicia led the charge; Mstislav III of Kiev held a fortified camp but surrendered after three days, only to be executed—the Mongols placed boards over the princes and feasted on top of them, crushing them to death (spilling royal blood on the ground was taboo). This was merely a reconnaissance raid; the main Mongol invasion came in 1237-1240. Mongol decimal organization and horse archery characterizes 13th-century steppe warfare. The 1223 incursion precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "eastern-europe"]
    },
    {
        id: "campaign_113",
        title: "The Spice Monopoly",
        actualYear: 1509,
        difficulty: "hard",
        description: `A small nation from the far west had sent ships around an entire continent to seize control of the fabulously wealthy spice trade. Their heavily armed carracks—high-castled ships mounting dozens of cannon—had defeated every fleet sent against them. Now the established powers of the trade combined to destroy the interlopers.

The allied fleet was enormous: 100 dhows and 12 heavy ships from a great sultanate, joined by a dozen vessels from a wealthy trading city-state. Many of these ships carried soldiers rather than heavy guns, planning to board and overwhelm the enemy.

The western fleet had only 18 ships, but each was a floating fortress. Their cannon fired rapidly through gunports, allowing continuous broadsides. Crucially, their smaller vessels could maneuver in shallow waters where the heavy allied ships could not follow.

The battle turned on firepower. The westerners' gunnery shattered the allied fleet; when ships tried to close for boarding, cannon cut them apart. The allied commander was killed when a cannonball struck his ship. Within hours, the combined fleet was destroyed.

The victory gave the western nation a monopoly on the spice trade that would last a century, transforming them from a poor kingdom into one of the world's wealthiest empires.`,
        hints: [
            { cost: 20, text: "Carracks with broadside cannon defeating dhows and traditional vessels was characteristic of early Portuguese expansion in the Indian Ocean (1498-1550).", explanation: "The ship types help date this battle." },
            { cost: 25, text: "The Mamluk Sultanate's attempts to expel Portuguese from the Indian Ocean occurred between 1505-1509, before the Ottomans conquered Egypt.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Diu on February 3, 1509, where Portuguese Viceroy Francisco de Almeida destroyed a combined Mamluk-Gujarati fleet. The Mamluks had sent a fleet from Egypt via the Red Sea to challenge Portuguese control of Indian Ocean trade; Sultan Mahmud of Gujarat provided additional ships. Almeida's cannon-armed carracks devastated the allied fleet—the Mamluk commander Amir Husain was killed. Portugal's spice monopoly was secured for decades. Carracks with broadside cannon versus traditional dhows characterized early Portuguese Indian Ocean expansion (1498-1550). Mamluk naval attempts against Portugal (1505-1509) precisely date this battle.",
        tags: ["naval", "16th-century", "asia"]
    },
    {
        id: "campaign_114",
        title: "The Bridge Defense",
        actualYear: 1297,
        difficulty: "hard",
        description: `An occupying army of perhaps 10,000—including heavy cavalry, the finest in Europe—faced a rebel force of similar size but composed almost entirely of common infantry. The rebels were armed with twelve-foot spears, forming dense circular formations they called schiltrons.

The two armies met at a river crossing. A narrow wooden bridge was the only way across; beyond it, a causeway led through marshy ground. The occupiers' commander was warned not to cross—the terrain would neutralize his cavalry advantage. He crossed anyway.

As the heavy cavalry funneled across the bridge and onto the causeway, the rebels advanced. In the confined space, the knights couldn't maneuver. Horses stumbled in the marsh. The spearmen pushed forward relentlessly, stabbing at horses and unhorsed knights alike.

When the bridge collapsed—or was cut—the army was split in two. The cavalry on the far side was annihilated; those still across watched helplessly. The occupation's commander was killed and flayed; his skin was made into sword belts. For a brief time, the kingdom was free.`,
        hints: [
            { cost: 20, text: "Schiltron formations—dense circles of spearmen—were a Scottish innovation of the 1290s, designed specifically to counter heavy cavalry.", explanation: "The infantry formation helps date this battle." },
            { cost: 25, text: "English heavy cavalry being defeated by Scottish spearmen occurred during the Wars of Scottish Independence (1296-1328).", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Stirling Bridge on September 11, 1297, where William Wallace and Andrew Moray destroyed an English army under John de Warenne, Earl of Surrey. Hugh de Cressingham, the English treasurer, was killed; Scots reportedly made a sword belt from his skin. The narrow bridge and causeway neutralized English cavalry superiority. Wallace was knighted and became Guardian of Scotland. The victory was short-lived—Edward I returned and won at Falkirk the next year. Schiltron formations were a Scottish innovation of the 1290s. English-Scottish warfare identifies the Wars of Scottish Independence (1296-1328).",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_115",
        title: "The King's Gambit",
        actualYear: 1314,
        difficulty: "medium",
        description: `A castle, symbol of occupation, was besieged by rebels and would fall if not relieved. The occupying king led an army of perhaps 20,000—including 2,500 heavy cavalry, the largest such force ever assembled in this land—to break the siege.

The rebels, perhaps 7,000 strong, chose their ground carefully: a narrow front between a stream and dense forest, with pits dug to break cavalry charges. Their king had learned from earlier defeats—his spearmen would not charge but would hold formation and let the cavalry destroy themselves.

The heavy cavalry charged. Horses stumbled in the pits; spears unhorsed riders; the marshy ground by the stream bogged down the attack. The rebel cavalry, held in reserve, struck at the decisive moment. When the mass of camp followers appeared on a nearby hill, the exhausted occupiers believed fresh troops had arrived.

The army collapsed in rout. The occupying king fled the field—narrowly escaping capture—and lost his shield and privy seal. The kingdom won its independence, recognized by treaty fourteen years later.`,
        hints: [
            { cost: 20, text: "Heavy cavalry charges defeated by prepared infantry positions with obstacles was the characteristic tactical lesson of 14th century European warfare.", explanation: "The tactical pattern helps date this battle." },
            { cost: 25, text: "Large English cavalry forces being defeated by Scottish spearmen occurred specifically in the Wars of Scottish Independence (1296-1328).", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Bannockburn on June 23-24, 1314, where Robert the Bruce destroyed Edward II's English army. The English had the largest cavalry force ever deployed in Scotland—and lost it in the boggy ground Bruce had chosen. Edward fled, losing the Great Seal of England. The Declaration of Arbroath (1320) and Treaty of Edinburgh-Northampton (1328) secured Scottish independence. Heavy cavalry charges defeated by prepared positions with obstacles was the characteristic lesson of 14th-century warfare. English-Scottish cavalry-infantry battles identify the Wars of Scottish Independence (1296-1328).",
        tags: ["pitched-battle", "14th-century", "europe"]
    },
    {
        id: "campaign_116",
        title: "The Kingdom's Last King",
        actualYear: 1665,
        difficulty: "hard",
        description: `A great African kingdom, Christian for nearly two centuries, had grown wealthy from copper and the slave trade. But its European trading partners had become rivals, and territorial disputes had festered for decades. The king marched with perhaps 20,000 warriors to settle matters by force.

The African army included soldiers armed with European matchlock muskets—purchased over generations of trade—alongside traditional warriors with swords, spears, and shields. But ammunition was limited, and the firearms were aging.

The European force was smaller—perhaps 6,000, including 450 European musketeers with artillery—but their weapons were superior and their ammunition plentiful. Two cannon anchored their line.

The battle was brutal. The African musketeers ran low on powder and shot. The king led charge after charge, his royal umbrella marking his position. When he fell—killed or captured, then beheaded—his army collapsed. His head was sent to the European governor as a trophy; his body was buried in a church.

The kingdom fragmented into civil war and never recovered. Within a generation, it existed only in name, its people sold into slavery by the very trade that had once enriched them.`,
        hints: [
            { cost: 20, text: "African kingdoms using European matchlock muskets acquired through trade, facing European colonial forces with superior firepower, was characteristic of 17th-century West-Central Africa.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "The Kingdom of Kongo's conflicts with Portugal intensified after 1622 and reached crisis in the 1660s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Mbwila (Ulanga) on October 29, 1665, where Portuguese forces destroyed the Kingdom of Kongo. King António I led the Kongolese army against Governor André Vidal de Negreiros's smaller but better-equipped force. António was killed and beheaded; his head was displayed in Luanda. The battle ended Kongo as a unified power—civil wars fragmented it for the next century. The slave trade, which had enriched the kingdom, now consumed it. African kingdoms using trade-acquired matchlocks against European colonial forces was characteristic of 17th-century West-Central Africa. Kongo-Portuguese conflict peaked in the 1660s.",
        tags: ["pitched-battle", "17th-century", "africa"]
    },
    {
        id: "campaign_117",
        title: "The Plains Above the City",
        actualYear: 1759,
        difficulty: "medium",
        description: `A fortified city on a great river seemed impregnable. Cliffs rose hundreds of feet from the water; the only approaches were heavily defended. An amphibious force had besieged the city for months without success.

The attacking commander gambled everything on a night assault. Small boats carried soldiers to a narrow path up the cliffs, far from the main defenses. By dawn, 4,500 men had formed battle lines on the plains above the city.

Both commanders were young—the attacker 32, the defender 47. Both would die in the battle. The defending force hastily marched out to meet the threat: perhaps 4,500 men, mostly colonial militia rather than European regulars.

The attackers waited in silence as the defenders approached. At 40 yards, they delivered a single devastating volley, then charged with bayonets. The battle lasted perhaps 15 minutes. Both commanders were mortally wounded. The city surrendered days later, and a continent changed hands.`,
        hints: [
            { cost: 20, text: "Flintlock muskets with bayonets in linear formations, emphasizing disciplined volleys, was the standard European infantry doctrine from roughly 1700-1840.", explanation: "The infantry tactics help date this battle." },
            { cost: 25, text: "Colonial warfare between European powers in North America occurred primarily from 1689-1763, ending with the transfer of major territories.", explanation: "The colonial context helps narrow the date." }
        ],
        explanation: "This was the Battle of the Plains of Abraham on September 13, 1759, where General James Wolfe's British forces defeated the Marquis de Montcalm's French army outside Quebec City. Wolfe's daring night ascent of the cliffs achieved complete surprise. Both commanders died—Wolfe on the field, Montcalm the next morning. Quebec's fall effectively ended French power in North America; the Treaty of Paris (1763) confirmed British control of Canada. Flintlock muskets with bayonets in linear formations (1700-1840) and colonial warfare between European powers in North America (1689-1763) precisely identify the period.",
        tags: ["pitched-battle", "18th-century", "americas"]
    },
    {
        id: "campaign_118",
        title: "The Turning Point",
        actualYear: 1777,
        difficulty: "medium",
        description: `An army advanced from the north, intending to split the rebellious colonies in two. The plan was sound, but reinforcements never arrived—one supporting army was diverted elsewhere, another never left its base.

The northern army of 7,000 found itself surrounded by a force that grew larger by the day—eventually perhaps 15,000 militia and regulars. The rebels had learned from European advisors: they built fortifications, employed riflemen as skirmishers, and used their knowledge of terrain.

Two pitched battles were fought. In the first, the advancing army won tactically but lost irreplaceable officers and men. In the second, rebel marksmen specifically targeted officers; a key general was killed leading a desperate counterattack. The army retreated to a fortified camp and waited for relief that never came.

Surrounded, supplies exhausted, and with no hope of rescue, the army surrendered. It was the first time an entire British army had laid down its arms—a shock that convinced a major European power to enter the war openly on the rebels' side.`,
        hints: [
            { cost: 20, text: "Riflemen used as skirmishers alongside linear musket infantry was a developing tactic of the late 18th century, before rifles became standard issue.", explanation: "The infantry tactics help date this battle." },
            { cost: 25, text: "Colonial rebellion against a major European power, with intervention by rival European powers, characterized the American Revolutionary period (1775-1783).", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Saratoga Campaign of September-October 1777, where General John Burgoyne surrendered 6,000 British soldiers to General Horatio Gates and Benedict Arnold (who was wounded at the decisive second battle). The victory convinced France to openly ally with the Americans, transforming a colonial rebellion into a world war. Burgoyne's surrender shocked Britain—Parliament later offered major concessions, too late to prevent independence. Riflemen as skirmishers alongside linear musket formations was a developing late 18th-century tactic. The American Revolution (1775-1783) was the defining colonial rebellion of the era.",
        tags: ["campaign", "18th-century", "americas"]
    },
    {
        id: "campaign_119",
        title: "The Emperor's Masterpiece",
        actualYear: 1805,
        difficulty: "medium",
        description: `Two empires allied against an upstart conqueror who had crowned himself emperor. Their combined armies—perhaps 85,000 men—held a strong position on high ground. The conqueror had only 68,000, but he had a plan.

He deliberately weakened his right flank, inviting attack. The allies took the bait, sending tens of thousands against what seemed a vulnerable position. As they advanced, they weakened their center.

The conqueror had hidden his main striking force behind a hill. At the crucial moment, they swept up and through the weakened center, splitting the allied army in two. The fog lifted to reveal French columns pouring across the heights. The allied right was cut off; their left was routed.

By evening, the allies had lost 27,000 men killed, wounded, or captured—including dozens of standards and hundreds of cannon. The conqueror lost 9,000. One allied emperor fled the field in tears. A peace treaty dissolved a centuries-old empire. Military academies would study this battle for generations as the perfect example of the decisive maneuver.`,
        hints: [
            { cost: 20, text: "Large armies maneuvering in corps-sized formations, with decisive battles fought in a single day, was characteristic of Napoleonic warfare (1796-1815).", explanation: "The operational scale helps date this battle." },
            { cost: 25, text: "An emperor commanding armies personally against coalitions of traditional monarchies was unique to the Napoleonic period.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Austerlitz on December 2, 1805—the 'Battle of the Three Emperors'—Napoleon's greatest victory. Emperor Francis I of Austria and Tsar Alexander I of Russia faced Napoleon. The Allied attack on Napoleon's right (held by Davout's corps) weakened the Pratzen Heights; Soult's corps stormed the heights at the decisive moment. Austria sued for peace; the Holy Roman Empire, founded in 800 CE, was dissolved. Military academies still study Austerlitz as the model of decisive battle. Napoleonic corps-level warfare (1796-1815) and emperors commanding personally against coalitions identify the period precisely.",
        tags: ["pitched-battle", "19th-century", "europe"]
    },
    {
        id: "campaign_120",
        title: "The Lake of Fire",
        actualYear: 1363,
        difficulty: "hard",
        description: `Two rival warlords, both claiming to lead the rebellion against foreign rulers, met in the largest naval battle in human history. The defending warlord had 200,000 men in smaller, more maneuverable boats. The attacking warlord brought 650,000 men in massive tower ships—floating fortresses three decks high, connected by chains to prevent enemy ships from passing between them.

The battle raged for 36 days on a great freshwater lake. The defender's smaller boats couldn't break through the chained tower ships, but the attacker's massive vessels couldn't catch the nimble craft. Fireships—boats packed with burning oil and launched into the enemy fleet—became decisive. The chains that protected the tower ships now trapped them.

When the wind shifted, the defender launched his fireships into the packed, chained fleet. The conflagration consumed hundreds of vessels. The attacking warlord was killed—shot through the eye by a stray arrow during the chaos. His army collapsed; survivors surrendered or drowned.

The victor united the realm within five years, founding a dynasty that would rule for nearly three centuries. The battle—perhaps 200,000 killed—remained the largest naval engagement until the 20th century.`,
        hints: [
            { cost: 20, text: "Tower ships connected by chains, fought with fireships and arrows, was characteristic of Chinese naval warfare from roughly 1100-1400 CE.", explanation: "The naval technology helps date this battle." },
            { cost: 25, text: "Warlords fighting to succeed the Mongol Yuan dynasty occurred specifically during the mid-14th century (1350s-1368).", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Lake Poyang in 1363, where Zhu Yuanzhang defeated Chen Youliang in the largest naval battle in history until modern times. Chen's fleet of giant tower ships, chained together for stability, became deathtraps when Zhu's fireships set them ablaze. Chen was killed by an arrow; over 200,000 men may have died. Zhu went on to found the Ming Dynasty in 1368, ruling as the Hongwu Emperor. Tower ships with chains and fireships characterized Chinese naval warfare 1100-1400 CE. The warlord conflicts following Yuan collapse occurred in the 1350s-1360s.",
        tags: ["naval", "14th-century", "asia"]
    },
    {
        id: "campaign_121",
        title: "The Burning City",
        actualYear: 1812,
        difficulty: "medium",
        description: `The greatest army ever assembled—perhaps 600,000 men from a dozen nations—invaded a vast empire. The defenders retreated, refusing decisive battle, burning crops and villages behind them. The invaders followed, their supply lines stretching ever thinner.

Finally, before the old capital city, the defenders stood. Perhaps 120,000 faced 130,000 in a brutal day of frontal assaults. The defenders held earthwork fortifications; the attackers battered them with artillery and infantry charges.

The casualties were staggering: 70,000 killed or wounded between both sides—the bloodiest single day of these wars. The defenders retreated; the invaders entered the capital. But it was empty. That night, the city burned—set alight by its own people rather than let the invaders shelter there.

With no supplies, no peace treaty, and winter approaching, the invaders began their retreat. Of 600,000 who had crossed the frontier, perhaps 100,000 returned. It was the beginning of the end for the conqueror's empire.`,
        hints: [
            { cost: 20, text: "Armies of 600,000 men from multiple nations, supported by massive artillery bombardments, was only possible during the Napoleonic era (1796-1815).", explanation: "The army scale helps date this battle." },
            { cost: 25, text: "Scorched-earth retreats before invading armies, culminating in the burning of a major capital, was the specific Russian strategy against Napoleon.", explanation: "The strategic pattern helps narrow the date." }
        ],
        explanation: "This was the Battle of Borodino on September 7, 1812, the bloodiest day of the Napoleonic Wars. Marshal Kutuzov's Russian army fought Napoleon's Grande Armée to a standstill outside Moscow. Russia lost 44,000; France perhaps 35,000—but Russia could replace its losses, Napoleon couldn't. Moscow burned; Napoleon waited a month for a surrender that never came. The winter retreat destroyed the Grande Armée—of 600,000 who invaded, fewer than 100,000 returned. Napoleonic-scale armies (1796-1815) and the Russian scorched-earth strategy identify this campaign precisely.",
        tags: ["pitched-battle", "19th-century", "europe"]
    },
    {
        id: "campaign_122",
        title: "The Sunni Sultan's Victory",
        actualYear: 1514,
        difficulty: "hard",
        description: `Two great Islamic powers clashed over territory and religion—the western empire was Sunni, the eastern was Shia, and each considered the other heretical. The western sultan marched an army of perhaps 100,000 into the eastern highlands, despite warnings that supply lines would fail.

The western army had a decisive advantage: field artillery and infantry armed with matchlock arquebuses. Their janissary infantry, trained from childhood, were among the world's finest. Their cannons were chained together in a line, with wagons forming a barricade.

The eastern shah had superb cavalry—horse archers and lancers who had conquered a vast territory in a decade—but no firearms. His Qizilbash warriors, fanatically loyal and wearing distinctive red headgear, believed their faith made them invincible.

The Qizilbash charged. The arquebuses and artillery shattered them. Wave after wave of cavalry broke against the guns. The shah himself was wounded and nearly captured. By evening, the eastern army was destroyed; the western forces occupied the enemy capital within weeks.

Yet the victory proved hollow: the sultan couldn't hold the mountainous territory, and the religious war would continue for two more centuries.`,
        hints: [
            { cost: 20, text: "Janissaries with matchlock arquebuses behind chained artillery, facing cavalry armies without firearms, was the characteristic Ottoman tactical superiority from roughly 1450-1600.", explanation: "The military technology helps date this battle." },
            { cost: 25, text: "Ottoman-Safavid religious wars began with the Safavid dynasty's founding (1501) and continued through the early 17th century.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Chaldiran on August 23, 1514, where Ottoman Sultan Selim I crushed Shah Ismail I's Safavid army. The Ottoman janissaries' matchlocks and cannon devastated the Qizilbash cavalry charges. Selim captured Tabriz but couldn't hold Persia—the logistical difficulties were insurmountable. The Sunni-Shia divide deepened into permanent hostility. Ismail, previously considered divinely protected, lost his aura of invincibility and became a recluse. Janissaries with arquebuses behind chained guns (1450-1600) facing cavalry without firearms, and the early Ottoman-Safavid wars (1501-1639), precisely date this battle.",
        tags: ["pitched-battle", "16th-century", "middle-east"]
    },
    {
        id: "campaign_123",
        title: "The Mountain Miracle",
        actualYear: 1121,
        difficulty: "hard",
        description: `A small Christian kingdom in the mountains had been reduced to near-extinction by waves of invaders. For decades, its rulers had paid tribute to survive. The young king—only 17 when crowned—decided to fight. He spent years preparing, building a professional army and recruiting allied warriors from the northern steppes.

The invading coalition was massive: chronicles claim 400,000 warriors from a dozen emirates, though 100,000-200,000 is more likely. They intended to destroy the Christian kingdom entirely. The king had perhaps 40,000—including 15,000 Cuman horse archers from the steppes.

The king chose broken terrain that neutralized the enemy's numbers. He sent 200 warriors in a suicidal deception: they pretended to negotiate surrender, then attacked the enemy commanders' tent. The chaos spread through the enemy camp.

Meanwhile, the main army attacked from multiple directions. The Cuman horse archers harassed the flanks while heavily armored knights struck the center. The coalition army, unable to deploy properly in the difficult terrain, broke and fled. The pursuit was merciless—the chronicles say the dead couldn't be counted.

The kingdom entered a golden age, its territory tripling over the following decades.`,
        hints: [
            { cost: 20, text: "Cuman horse archers—Turkic nomads from the Pontic steppe—served as mercenaries in Eastern European and Caucasian armies primarily from 1050-1240 CE.", explanation: "The mercenary type helps date this battle." },
            { cost: 25, text: "Georgian expansion against fragmented Seljuk successor states occurred during the early 12th century, peaking in the 1120s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Didgori on August 12, 1121, where King David IV 'the Builder' of Georgia destroyed a massive Seljuk coalition. David's 40,000—including 15,000 Cuman mercenaries—routed perhaps 200,000 Seljuks. The 200-man suicide squad that attacked during 'negotiations' threw the Seljuk camp into chaos. Georgia's 'golden age' followed: David captured Tbilisi (1122) and tripled his territory. The battle is celebrated as Georgia's greatest military victory. Cuman horse archers (1050-1240) and Georgian expansion against Seljuk fragments (early 12th century) precisely date this battle.",
        tags: ["pitched-battle", "12th-century", "caucasus"]
    },
    {
        id: "campaign_124",
        title: "The Emperor's Surrender",
        actualYear: 1870,
        difficulty: "hard",
        description: `A new power, forged from a confederation of states, provoked war with its western neighbor—an empire that considered itself Europe's premier military power. The empire's army was larger, but the confederation's was faster to mobilize, better led, and equipped with superior artillery.

Within weeks, one imperial army was besieged in a fortress city. Another army, 120,000 strong with the emperor himself present, marched to relieve it. The confederation intercepted them near the frontier.

The trap closed with devastating efficiency. The confederation's artillery—breech-loading steel guns that outranged the empire's bronze muzzle-loaders—dominated the battlefield. The imperial army was pushed into a loop of the river, squeezed into an ever-smaller perimeter. Cavalry charges failed to break out.

The emperor, ill and in despair, personally surrendered with 83,000 soldiers—the largest capitulation in modern European history. The empire collapsed; the confederation proclaimed its own empire in the enemy's palace. The new power would dominate the continent for decades.`,
        hints: [
            { cost: 20, text: "Breech-loading steel artillery outranging bronze muzzle-loaders was a decisive technological advantage unique to the 1860s-1870s transition.", explanation: "The artillery technology helps date this battle." },
            { cost: 25, text: "A German confederation defeating a French empire occurred specifically in 1870-1871, creating the German Empire.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Sedan on September 1-2, 1870, where the Prussian-led German armies under Moltke the Elder trapped Napoleon III's Army of Châlons. Krupp's breech-loading steel artillery devastated the French, whose bronze muzzle-loaders couldn't reply effectively. Napoleon III surrendered personally—the only French emperor ever captured in battle since Francis I at Pavia. The Second French Empire collapsed; the German Empire was proclaimed at Versailles. Breech-loading steel versus bronze muzzle-loading artillery was the 1860s-1870s transition. German unification under Prussian leadership and French defeat occurred in 1870-1871.",
        tags: ["pitched-battle", "19th-century", "europe"]
    },
    {
        id: "campaign_125",
        title: "The Eastern Encirclement",
        actualYear: 1914,
        difficulty: "hard",
        description: `Two vast armies invaded enemy territory simultaneously, advancing on diverging axes. Each sought to encircle and destroy enemy forces before they could concentrate. The stakes were existential—each side believed defeat here meant losing the war.

The defending army, initially outnumbered, had a critical advantage: interior lines and a superb railway network. As one invading army pressed forward through forests and lakes, the defenders concentrated against the other invading army first, crushing it in a week-long battle of encirclement.

Then they turned. The first invading army, strung out over sixty miles with poor communications, stumbled into a trap. Wireless intercepts revealed enemy positions; the defenders maneuvered two armies into the invaders' flanks. In five days, the invading army was surrounded and annihilated: 92,000 captured, 30,000 killed, two generals dead.

The victory saved the empire—for now. But four years of brutal warfare lay ahead, and the empire would ultimately collapse. The battle became legend, its name later appropriated for propaganda purposes.`,
        hints: [
            { cost: 20, text: "Wireless intercepts and railway-based strategic mobility, combined with massive infantry armies, characterized the opening campaigns of World War I (1914).", explanation: "The military technology helps date this battle." },
            { cost: 25, text: "Encirclement battles on the Eastern Front in 1914 were decisive in ways the Western Front's trench stalemate was not.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Tannenberg, August 26-30, 1914, where Hindenburg and Ludendorff destroyed the Russian Second Army under Samsonov (who committed suicide). The Germans used intercepted Russian wireless messages sent uncoded. The victory made Hindenburg a national hero—the battle was renamed 'Tannenberg' to symbolically avenge the Teutonic Knights' defeat there in 1410. Russia lost 92,000 captured and 30,000 killed; Germany lost 12,000. Wireless intercepts and railway mobility in massive infantry battles characterize early WWI. Eastern Front encirclements in 1914 differed markedly from Western Front stalemate.",
        tags: ["pitched-battle", "20th-century", "europe"]
    },
    {
        id: "campaign_126",
        title: "The Meat Grinder",
        actualYear: 1916,
        difficulty: "medium",
        description: `The attacking power believed it could "bleed white" its enemy by assaulting a fortress city the enemy could not abandon. The fortress had symbolic value beyond strategy—it had never fallen to enemy assault. Artillery would do the killing; infantry would hold ground.

The bombardment began with 1,200 guns—including massive 420mm howitzers—firing a million shells in the first day alone. The defenders' positions were obliterated; survivors fought from shell craters. Fort after fort fell, their concrete crushed by shells never imagined when they were built.

But the defenders fed in reinforcements along a single road, refusing to yield. The battle became a war of attrition on a scale never seen: 700,000 casualties over ten months, nearly equal on both sides. Villages were captured, lost, and recaptured dozens of times. The same ground was fought over until nothing remained but churned mud and bones.

By year's end, the attackers had gained almost nothing and lost their strategic reserve. The defenders had held—barely. "They shall not pass" became a national motto. The battle became a symbol of futile slaughter.`,
        hints: [
            { cost: 20, text: "Massive artillery bombardments with 420mm howitzers destroying concrete fortifications characterized WWI siege warfare (1914-1918).", explanation: "The artillery scale helps date this battle." },
            { cost: 25, text: "Battles lasting months with hundreds of thousands of casualties for minimal territorial gain were unique to the Western Front of WWI.", explanation: "The battle pattern helps narrow the date." }
        ],
        explanation: "This was the Battle of Verdun, February-December 1916, where German Chief of Staff Falkenhayn tried to 'bleed France white.' General Pétain organized the defense along the Voie Sacrée (Sacred Road). France suffered 377,000 casualties; Germany 337,000—for a few miles of cratered moonscape. 'Ils ne passeront pas' (They shall not pass) became France's rallying cry. The battle epitomized WWI's industrial slaughter. 420mm howitzers destroying concrete forts and months-long battles for minimal gains were unique to WWI's Western Front (1914-1918).",
        tags: ["siege", "20th-century", "europe"]
    },
    {
        id: "campaign_127",
        title: "The Dreadnought Clash",
        actualYear: 1916,
        difficulty: "hard",
        description: `The world's two greatest battle fleets finally met: 28 dreadnoughts and 9 battlecruisers against 16 dreadnoughts and 5 battlecruisers. Each fleet represented billions in national treasure and years of construction. Neither commander wanted to risk his fleet—but neither could afford to refuse battle.

The battleships mounted 12-inch to 15-inch guns in multiple turrets, protected by armor up to 13 inches thick. Fire control systems calculated range and deflection; shells could hit targets at ranges over 10 miles. Cordite propellant charges and high-explosive shells made each hit potentially fatal.

The battle sprawled across hundreds of square miles of grey sea. Visibility was poor; formations became confused. Battlecruisers—fast but lightly armored—proved fatally vulnerable: three exploded when shells penetrated their magazines. But the main fleets never fully engaged; each commander feared torpedo attack as darkness fell.

The smaller fleet lost fewer ships but retreated to port and never seriously challenged the larger fleet again. Strategically, nothing changed: the blockade continued, the fleet-in-being remained. It was the last great battleship duel of the war—and perhaps of history.`,
        hints: [
            { cost: 20, text: "Dreadnought battleships with 12-15 inch guns in multiple turrets, plus battlecruisers, were the capital ships of roughly 1906-1945.", explanation: "The ship types help date this battle." },
            { cost: 25, text: "The only major fleet engagement between dreadnought battleships occurred during World War I, when both sides were reluctant to risk their fleets.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Jutland on May 31-June 1, 1916, the only major dreadnought fleet action of WWI. Admiral Jellicoe's British Grand Fleet faced Admiral Scheer's German High Seas Fleet. Britain lost more ships (14 vs 11) and men (6,094 vs 2,551), but Germany retreated and never again seriously contested British control of the North Sea. Three British battlecruisers exploded when shells reached their magazines—their armor was inadequate. Dreadnoughts (1906-1945) with 12-15 inch guns in turrets and the single WWI fleet engagement precisely identify this battle.",
        tags: ["naval", "20th-century", "europe"]
    },
    {
        id: "campaign_128",
        title: "The Last Sword Charge",
        actualYear: 1877,
        difficulty: "hard",
        description: `A nation undergoing rapid modernization faced rebellion from the very warrior class that had once ruled it. These warriors—trained from birth in sword, bow, and spear—refused to accept that their era was ending. Their leader, once the nation's most powerful general, raised an army of 40,000 in his home province.

The government's response was an army of conscript peasants, armed with modern rifles and trained in Western tactics. The rebels had superior individual skill and fanatical courage, but the conscripts had artillery, Gatling guns, and unlimited ammunition.

For seven months, the rebellion burned. The rebels won early battles through sheer ferocity, but attrition favored the government. The final stand came on a forested hill overlooking the castle where the rebellion began. Only 400 rebels remained against 30,000 government troops.

At dawn, after a night of farewells, the survivors charged down the hill with swords drawn. The Gatling guns cut them down in minutes. The rebel leader was wounded, then took his own life in the traditional manner. The warrior class—which had ruled for seven centuries—ended on that hillside.`,
        hints: [
            { cost: 20, text: "Gatling guns and breech-loading rifles against traditional sword-armed warriors characterized the final samurai resistance of the 1870s.", explanation: "The weapon contrast helps date this battle." },
            { cost: 25, text: "Samurai rebellions against the Meiji government occurred between 1874-1877, as Japan rapidly industrialized.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Shiroyama on September 24, 1877, the final battle of the Satsuma Rebellion. Saigo Takamori—the 'Last Samurai'—led his final 400 warriors in a sword charge against 30,000 Imperial troops armed with Gatling guns and modern artillery. Saigo was wounded and committed seppuku (or was beheaded by a retainer—accounts differ). The Meiji government's conscript army proved that modern weapons trumped samurai skill. The warrior class's military monopoly, lasting since the 12th century, ended that morning. Gatling guns versus traditional warriors (1870s) and anti-Meiji samurai rebellions (1874-1877) precisely date this battle.",
        tags: ["pitched-battle", "19th-century", "asia"]
    },
    {
        id: "campaign_129",
        title: "The Buried Army",
        actualYear: -260,
        difficulty: "hard",
        description: `Two of the seven warring kingdoms had been locked in attrition for three years over a strategic mountain pass. The attacking kingdom had unified and militarized its society; every man was a soldier, every farmer a potential conscript. The defending kingdom was larger but less organized.

The defending army—perhaps 450,000 men—held fortified positions in the mountains. Their supplies ran low; their commander was young and inexperienced, having replaced a cautious veteran. The attacking kingdom's greatest general arrived with fresh troops and a brutal plan.

The attacker feigned retreat, drawing the defenders out of their fortifications. When they pursued, concealed cavalry cut their supply lines. Trapped in open ground without food, 450,000 men faced starvation or surrender.

After 46 days, they surrendered. What happened next became the most infamous atrocity in ancient history: the general ordered all 400,000 prisoners executed—buried alive or beheaded—keeping only 240 young boys to send home as witnesses. The defending kingdom never recovered; within forty years, all six rivals would be conquered by the victor.`,
        hints: [
            { cost: 20, text: "Mass infantry armies numbering hundreds of thousands, equipped with bronze weapons and crossbows, were characteristic of Warring States China (475-221 BCE).", explanation: "The army scale helps date this battle." },
            { cost: 25, text: "The wars of unification that ended the Warring States period occurred primarily between 260-221 BCE, culminating in the Qin conquest.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Changping in 260 BCE, where Qin general Bai Qi annihilated the army of Zhao. The Zhao commander Zhao Kuo—inexperienced and rash—replaced the cautious Lian Po and led his army into a trap. After 46 days without food, 400,000 Zhao soldiers surrendered; Bai Qi ordered them all executed to prevent future resistance. Only 240 boys were spared. Zhao never recovered; Qin unified China in 221 BCE. Mass infantry with crossbows characterizes Warring States warfare (475-221 BCE). Qin's wars of conquest (260-221 BCE) precisely date this battle.",
        tags: ["pitched-battle", "ancient", "asia"]
    },
    {
        id: "campaign_130",
        title: "The Steel Storm",
        actualYear: 1943,
        difficulty: "hard",
        description: `The largest tank battle in history erupted as the invaders attempted to pinch off a massive salient in the enemy line. Both sides knew it was coming: the defenders had months to prepare fortifications, minefields, and anti-tank defenses in depth.

The attackers committed their newest tanks: heavy vehicles with thick sloped armor and powerful 88mm guns. But the defenders had also upgraded—their medium tanks now mounted guns capable of penetrating the heavy tanks at combat range.

The offensive began with 900,000 attackers against 1.3 million defenders. Within days, it bogged down in the defensive belts. Tanks dueled at point-blank range; minefields channeled attacks into kill zones. The attritional math was devastating: the attackers lost tanks they couldn't replace; the defenders' factories produced more.

After two weeks, the attackers withdrew. They had lost 200,000 men and hundreds of tanks. More importantly, they had lost the strategic initiative permanently. From this point on, they would only retreat—all the way back to their own capital.`,
        hints: [
            { cost: 20, text: "Tiger heavy tanks with 88mm guns facing T-34 medium tanks in massive armored battles was specific to 1943-1945 Eastern Front combat.", explanation: "The tank types help date this battle." },
            { cost: 25, text: "Defensive preparations including deep minefields and anti-tank guns in depth were perfected on the Eastern Front by 1943.", explanation: "The defensive tactics help narrow the date." }
        ],
        explanation: "This was the Battle of Kursk, July-August 1943, the largest tank battle in history. Hitler's Operation Citadel attacked the Kursk salient with 900,000 men including new Tiger and Panther tanks. The Soviets under Zhukov and Vasilevsky had prepared defenses eight lines deep with thousands of anti-tank guns and millions of mines. German losses—200,000 casualties and 500+ tanks—were irreplaceable. The Soviets lost more but could replace them. After Kursk, the Wehrmacht never regained the initiative. Tiger tanks with 88mm guns facing T-34s in massive armored battles identifies 1943-1945 Eastern Front combat.",
        tags: ["pitched-battle", "20th-century", "europe"]
    },
    {
        id: "campaign_131",
        title: "The Boy King's Crusade",
        actualYear: 1444,
        difficulty: "hard",
        description: `A young king—barely twenty years old—led the last great crusade against the expanding eastern empire. The crusaders had assembled perhaps 20,000 men: Hungarian heavy cavalry, Polish knights, Wallachian light horse, and Papal contingents. They advanced deep into enemy territory, winning battles and burning cities.

The sultan sued for peace, offering generous terms. The king's advisors urged him to accept; the papal legate urged him to fight on. The king chose war—and broke the truce he had sworn.

The sultan force-marched his army from distant campaigns, covering impossible distances. The crusaders found themselves facing 60,000 men where they expected a beaten enemy. The young king, ignoring advice to retreat, ordered a cavalry charge directly at the sultan's position.

He almost succeeded. The king's cavalry broke through the Janissary infantry and reached the sultan's bodyguard. Then the king fell—killed or captured and beheaded. His head was displayed on a pike. The crusader army was annihilated. No major crusade would ever march east again.`,
        hints: [
            { cost: 20, text: "Janissary infantry with early firearms facing European heavy cavalry was characteristic of 15th-century Ottoman warfare.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "Major crusading expeditions against the Ottomans occurred in the 1390s-1440s, before Constantinople fell and such efforts became hopeless.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Varna on November 10, 1444, where Sultan Murad II destroyed the Crusade of Varna. King Władysław III of Poland and Hungary—only 20 years old—broke a sworn truce to continue the crusade. When his cavalry charge reached Murad's bodyguard, the king was killed and beheaded; his head was preserved in honey and sent to the Ottoman capital. Cardinal Cesarini, who had urged breaking the truce, was also killed. Hungary lost its king and never recovered its strength; the Ottomans faced no serious European opposition until Vienna in 1529. Janissaries with early firearms (1380s-1500) and pre-1453 crusading identify this battle.",
        tags: ["pitched-battle", "15th-century", "balkans"]
    },
    {
        id: "campaign_132",
        title: "The Moldavian Surprise",
        actualYear: 1475,
        difficulty: "hard",
        description: `A small principality, wedged between two great empires, faced invasion by the mightiest army in the world. The sultan sent 120,000 men to punish the prince who had dared to raid imperial territory and impale prisoners.

The prince had only 40,000 men, mostly peasant levies with limited armor. But he knew his land—the forests, the swamps, the narrow valleys. He refused open battle, harassing the massive army as it struggled through winter mud.

When the invaders camped in a foggy valley, the prince attacked at dawn. His light cavalry swept in from multiple directions; trumpets and drums created confusion about the attackers' numbers. The imperial army, unable to form proper battle lines in the fog, panicked. The rout was total—perhaps 45,000 killed, including several pashas.

The sultan mounted a larger expedition the following year and eventually forced submission. But the prince's legend grew. He would fight dozens of battles, never losing, and be remembered as his nation's greatest hero.`,
        hints: [
            { cost: 20, text: "Light cavalry with limited firearms facing Ottoman armies characterized Eastern European frontier warfare from roughly 1400-1600.", explanation: "The military style helps date this battle." },
            { cost: 25, text: "Moldavian-Ottoman conflicts were most intense in the late 15th century, before the principality became an Ottoman vassal.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Vaslui on January 10, 1475, where Stephen III 'the Great' of Moldavia destroyed an Ottoman army under Hadim Suleiman Pasha. Stephen's 40,000 men ambushed 120,000 Ottomans in a foggy valley; perhaps 45,000 Turks died. Pope Sixtus IV called Stephen 'Athlete of Christ.' The sultan's revenge expedition in 1476 forced Stephen to submit, but he continued resisting until his death in 1504. Light cavalry raids and ambush tactics against Ottoman armies characterized 15th-century Eastern European warfare. Moldavian independence struggles peaked in the 1470s.",
        tags: ["pitched-battle", "15th-century", "eastern-europe"]
    },
    {
        id: "campaign_133",
        title: "The River Crossing Massacre",
        actualYear: 1697,
        difficulty: "hard",
        description: `A major imperial army—perhaps 80,000 strong—attempted to cross a river at the end of a long campaign season. Their enemies, whom they believed to be in winter quarters, suddenly appeared with 50,000 men.

The attacking general was Europe's finest commander, veteran of dozens of victories. He struck while the imperial army was half-across the river, its forces divided and unable to support each other.

The troops still on the near bank were annihilated. The sultan's guard fought desperately around the baggage train; the imperial treasury, the sultan's harem, and the seal of state were all captured. Perhaps 30,000 men died, including the grand vizier. The sultan himself barely escaped by swimming his horse across the river.

The disaster forced the empire to accept peace, ending a war that had begun with an attempt to capture the enemy capital fifteen years earlier. The victorious general would become the age's most celebrated soldier.`,
        hints: [
            { cost: 20, text: "Large Ottoman armies with Janissary infantry and sipahi cavalry facing European forces with flintlock muskets characterized late 17th-century Balkan warfare.", explanation: "The military composition helps date this battle." },
            { cost: 25, text: "The Great Turkish War (1683-1699) saw the Ottomans pushed out of Hungary and forced to accept major territorial losses.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Zenta on September 11, 1697, where Prince Eugene of Savoy caught Sultan Mustafa II crossing the Tisza River. Eugene attacked as the Ottoman army was split by the river; the trapped forces were annihilated. Over 30,000 Ottomans died including Grand Vizier Elmas Mehmed Pasha; the sultan's treasury and harem were captured. The Treaty of Karlowitz (1699) followed, the first treaty where the Ottomans ceded major European territory. Flintlock-era European armies versus traditional Ottoman forces characterized the 1680s-1700s. The Great Turkish War (1683-1699) precisely dates this battle.",
        tags: ["pitched-battle", "17th-century", "balkans"]
    },
    {
        id: "campaign_134",
        title: "The Mamluk Sunset",
        actualYear: 1517,
        difficulty: "hard",
        description: `The greatest slave-soldier dynasty in history—which had ruled for nearly three centuries and defeated the Mongols—faced a new enemy with a decisive technological advantage. The invaders had already conquered the dynasty's Syrian provinces; now they marched on the capital itself.

The dynasty's warriors were superb cavalry, trained from childhood in horsemanship and archery. But they despised firearms as beneath their dignity. The invaders, by contrast, had massed artillery and thousands of infantry armed with matchlock arquebuses.

Outside the ancient capital, perhaps 20,000 cavalry charged the invaders' line. The sultan led the charge himself, a descendant of slave-soldiers who had risen to rule an empire. The arquebus volleys shattered each wave; the cavalry couldn't close. The sultan was captured and hanged from a gate of his own city.

The ancient dynasty ended that day. The invaders would rule the conquered lands for four centuries, and the holy cities of Islam passed to their control.`,
        hints: [
            { cost: 20, text: "Mamluk cavalry refusing to adopt firearms against arquebus-armed opponents was specific to their final defeats in the 1510s.", explanation: "The technological asymmetry helps date this battle." },
            { cost: 25, text: "The Ottoman conquest of the Mamluk Sultanate occurred in 1516-1517, adding Egypt and the Hejaz to the empire.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Ridaniya on January 22, 1517, where Ottoman Sultan Selim I destroyed the Mamluk Sultanate. Sultan Tuman bay II's Mamluk cavalry, who scorned firearms, were slaughtered by Janissary arquebuses. Tuman bay was captured and hanged at the Zuweila Gate in Cairo. The Mamluks had ruled since 1250 and defeated the Mongols at Ain Jalut; their contempt for gunpowder weapons destroyed them. The Ottomans gained Egypt, the Hejaz (with Mecca and Medina), and the title of Caliph. Mamluk cavalry versus arquebus infantry was specific to 1516-1517. Ottoman conquest of Egypt precisely dates this battle.",
        tags: ["pitched-battle", "16th-century", "middle-east"]
    },
    {
        id: "campaign_135",
        title: "The Diamond Throne's Fall",
        actualYear: 1565,
        difficulty: "hard",
        description: `The wealthiest Hindu empire in the subcontinent—famous for its temples, its diamond mines, and its military might—faced a coalition of five sultanates united by faith and fear. The empire's army of perhaps 140,000 included the finest heavy cavalry in India and hundreds of war elephants.

The sultanates assembled 80,000 men but possessed a crucial advantage: field artillery served by Ottoman-trained gunners. The imperial general, a brilliant commander who had won many victories, chose to stand and fight near the capital rather than use his cavalry's mobility.

The battle was close. The imperial heavy cavalry nearly broke through; the sultanates' artillery was running low on powder. Then two Muslim generals in imperial service—commanding 70,000 troops—switched sides in the midst of battle. The betrayal was total.

The imperial army was annihilated. The capital—one of the world's largest and wealthiest cities—was looted for six months. The temples were demolished, the treasuries emptied. An empire that had flourished for two centuries was utterly destroyed.`,
        hints: [
            { cost: 20, text: "Ottoman-trained artillery in Indian warfare, combined with war elephants and heavy cavalry, was characteristic of 16th-century Deccan conflicts.", explanation: "The military technologies help date this battle." },
            { cost: 25, text: "The Deccan sultanates' coalition against Hindu kingdoms peaked in the 1560s-1570s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Talikota (Rakshasa-Tangadi) on January 26, 1565, where a coalition of Deccan sultanates destroyed the Vijayanagara Empire. The sultanates—Ahmadnagar, Bijapur, Golconda, Bidar, and Berar—united against Hindu Vijayanagara. Rama Raya, the imperial regent, was captured and beheaded on the battlefield; two Muslim generals in his service switched sides mid-battle. Vijayanagara, then among the world's largest cities, was sacked for months. Ottoman-trained artillery in Deccan warfare and the sultanate coalition characterize the 1560s-1570s.",
        tags: ["pitched-battle", "16th-century", "asia"]
    },
    {
        id: "campaign_136",
        title: "The Rajput Last Stand",
        actualYear: 1576,
        difficulty: "hard",
        description: `The greatest of the Mughal emperors sought to crush the last independent Rajput kingdom. His general led 10,000 men—a mix of Mughal cavalry and Rajput vassals who had submitted—against a king who refused to bow.

The Rajput king had only 3,000 warriors, including his famed cavalry and war elephants. But these were the finest warriors in India, raised from birth for war, their honor bound to death before surrender.

The battle was fought in a mountain pass. The Rajput king, riding his war elephant, led charge after charge into the Mughal lines. At one point he nearly reached the Mughal commander. But weight of numbers told; the Rajputs were slowly overwhelmed.

The king was wounded but escaped—carried from the field by his loyal horse, who died of wounds after bearing him to safety. He never submitted, fighting from jungle hideouts until his death years later. The Mughals never broke his spirit; his legend inspired resistance for centuries.`,
        hints: [
            { cost: 20, text: "Mughal armies combining Central Asian cavalry tactics with Indian war elephants characterized 16th-17th century subcontinental warfare.", explanation: "The military composition helps date this battle." },
            { cost: 25, text: "Mughal expansion into Rajputana under Akbar occurred primarily in the 1560s-1580s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Haldighati on June 18, 1576, where Mughal forces under Man Singh I fought Maharana Pratap of Mewar. Pratap's 3,000 Rajputs faced 10,000 Mughals in a mountain pass. Pratap, riding his legendary horse Chetak, nearly killed Man Singh before being wounded. Chetak carried Pratap to safety, then died. Pratap never submitted to Akbar, waging guerrilla war until his death in 1597. Mughal-Rajput warfare with cavalry and elephants characterized 16th-century India. Akbar's Rajputana campaigns (1560s-1580s) precisely date this battle.",
        tags: ["pitched-battle", "16th-century", "asia"]
    },
    {
        id: "campaign_137",
        title: "The Cossack Stand",
        actualYear: 1621,
        difficulty: "hard",
        description: `A young sultan, eager for glory, led the largest Ottoman army in a generation—perhaps 150,000 men—north to crush a kingdom that had dared to interfere in his vassal states. The defending army was smaller—perhaps 65,000—but included the finest heavy cavalry in Europe and thousands of fierce steppe warriors.

The kingdom had built a fortified camp near a fortress town. For over a month, the Ottomans assaulted the earthworks. The Janissaries, the sultan's elite infantry, attacked again and again; each time they were repulsed with heavy losses. The steppe warriors—wild horsemen with unpronounceable names—launched constant raids that disrupted Ottoman supply lines.

The young sultan, humiliated by his inability to break through, finally accepted peace. The kingdom kept its independence; the steppe warriors gained legendary status. But the real significance was strategic: this was the last time the Ottomans seriously threatened central Europe from the east.`,
        hints: [
            { cost: 20, text: "Cossack light cavalry combined with Polish winged hussars represented the distinctive military system of the 17th-century Polish-Lithuanian Commonwealth.", explanation: "The military forces help date this battle." },
            { cost: 25, text: "Ottoman campaigns against Poland-Lithuania occurred primarily in the 1620s and 1670s.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Khotin (Chocim) from September 2-October 9, 1621, where Polish-Lithuanian and Cossack forces under Grand Hetman Jan Karol Chodkiewicz stopped Sultan Osman II's invasion. The 35-day siege of the Polish camp cost the Ottomans 40,000 casualties. Chodkiewicz died during the battle but his army held. Osman II's humiliating peace contributed to his overthrow and murder the following year. Polish hussars with Cossack light cavalry was the distinctive 17th-century Commonwealth military system. Ottoman-Polish conflicts peaked in the 1620s and 1670s.",
        tags: ["siege", "17th-century", "eastern-europe"]
    },
    {
        id: "campaign_138",
        title: "The River Stakes",
        actualYear: 938,
        difficulty: "hard",
        description: `A small kingdom, barely a generation old, faced its third invasion from the great empire to the north. Twice before, the invaders had conquered the land; twice the people had driven them out. Now the empire sent its largest fleet yet—thousands of ships carrying tens of thousands of soldiers.

The kingdom's general devised a desperate plan. He studied the tidal patterns of the river where the imperial fleet would anchor. Iron-tipped wooden stakes were driven into the riverbed at low tide, invisible when the water rose.

The imperial fleet sailed upriver with the tide. The defending army made a fighting retreat, drawing the invaders deeper. Then, as the tide turned, the defenders counterattacked. The imperial ships, trying to withdraw, were impaled on the hidden stakes. Stranded and immobile, they were destroyed by fire ships and boarding parties. The imperial general was captured and beheaded.

The empire abandoned its claims. The kingdom would remain independent for the next thousand years.`,
        hints: [
            { cost: 20, text: "River stake traps against naval invasions were used in Vietnamese warfare from the 10th through 13th centuries.", explanation: "The distinctive tactic helps date this battle." },
            { cost: 25, text: "Vietnamese independence from Chinese rule was established in the 10th century after centuries of domination.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Bạch Đằng River in 938, where Ngô Quyền destroyed the Southern Han fleet and established Vietnamese independence. Iron-tipped stakes driven into the riverbed at low tide impaled the Chinese ships when the tide fell; the stranded fleet was annihilated. General Liu Hongcao was killed. Vietnam remained independent for over a thousand years (with brief interruptions). The stake trap was used again in 981 and 1288 against later invaders. Vietnamese stake-trap tactics (10th-13th centuries) and the establishment of independence from China precisely date this battle.",
        tags: ["naval", "10th-century", "asia"]
    },
    {
        id: "campaign_139",
        title: "The Pass of the Dying Sultan",
        actualYear: 1566,
        difficulty: "hard",
        description: `The greatest sultan of the empire—conqueror of three continents, lawgiver, builder of mosques—led his thirteenth and final campaign at age 71. His target was a small fortress in a marshy valley, held by 2,300 defenders. The sultan brought 100,000 men.

The fortress should have fallen in days. Instead, the old count who commanded it turned it into a death trap. Every assault was repulsed with heavy losses; sorties caught sappers in their trenches; the marshes bred disease. The siege dragged on for a month.

The sultan died in his tent of old age before the fortress fell—but his death was kept secret. The grand vizier forged orders, strangled the sultan's physician to ensure silence, and continued the siege. When the walls finally collapsed, the count led a final sortie, dying sword in hand. The remaining defenders detonated the powder magazine, killing thousands of Janissaries.

The empire captured a ruin filled with corpses. The sultan's body was carried home in secret; his death wasn't announced until his son was safely on the throne.`,
        hints: [
            { cost: 20, text: "Ottoman siege warfare with Janissary infantry and heavy artillery against European trace italienne fortifications was characteristic of 16th-century conflicts.", explanation: "The military technologies help date this battle." },
            { cost: 25, text: "Suleiman the Magnificent's campaigns extended from the 1520s to the 1560s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Siege of Szigetvár from August 5 to September 8, 1566, where Croatian-Hungarian forces under Count Nikola Šubić Zrinski held off Sultan Suleiman the Magnificent's army. Suleiman died on September 6, two days before the fortress fell; Grand Vizier Sokollu Mehmed Pasha concealed his death. Zrinski led a final charge and was killed; the survivors detonated the magazine, killing 3,000 Janissaries. The Ottomans lost 20,000-30,000 men for a worthless ruin. Ottoman siege warfare against European fortifications characterized 16th-century warfare. Suleiman's reign (1520-1566) precisely dates this battle.",
        tags: ["siege", "16th-century", "europe"]
    },
    {
        id: "campaign_140",
        title: "The Swiss Avalanche",
        actualYear: 1476,
        difficulty: "hard",
        description: `The most powerful duke in Europe—richer than most kings, commander of the finest army money could buy—invaded a confederation of mountain peasants and townsmen. He had conquered province after province; surely these rustic pikemen would crumble before his Burgundian knights and artillery.

The Swiss had other plans. Their infantry—dense columns of pikemen wielding 18-foot spears—advanced in echelon, singing hymns. The duke's artillery fired but couldn't stop the advance. His cavalry charged but couldn't break the hedge of pike points. The Burgundian infantry, mercenaries from many lands, had no answer for the disciplined Swiss columns.

The battle became a rout. The duke's camp was overrun; his treasury—including the great diamonds of Burgundy—was captured by peasants who didn't know their value. Hundreds of nobles were killed; thousands of soldiers died in the freezing lake as they fled.

The duke survived to fight again, but his legend of invincibility was shattered. Within a year, he would be dead and his realm divided among his enemies.`,
        hints: [
            { cost: 20, text: "Swiss pike columns advancing in echelon against Burgundian cavalry and artillery was characteristic of the Burgundian Wars (1474-1477).", explanation: "The tactical system helps date this battle." },
            { cost: 25, text: "The Swiss Confederacy's decisive defeats of Burgundy established their military reputation that would dominate European warfare for 50 years.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Grandson on March 2, 1476, where the Swiss Confederacy routed Charles the Bold of Burgundy. The Swiss pike squares, advancing in echelon formation, were unstoppable; Charles's cavalry and artillery couldn't break them. The Burgundians fled across frozen Lake Neuchâtel; many drowned. Charles lost his treasury, including the great Sancy diamond. Two more defeats followed—Morat and Nancy—and Charles died in 1477. Swiss pike tactics (1470s-1520s) and the Burgundian Wars (1474-1477) precisely date this battle.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_141",
        title: "The Duke's Frozen Corpse",
        actualYear: 1477,
        difficulty: "hard",
        description: `The great duke who had sought to build a kingdom between the great powers returned for his revenge. Twice the mountain confederation had humiliated him; now, with a rebuilt army, he besieged a town that had defied him.

The confederation's army arrived in January—perhaps 20,000 strong. The duke, weakened by months of siege and desertions, had perhaps 10,000. His advisors urged caution; he demanded battle.

The Swiss infantry attacked in their signature style: dense columns of pikemen, flanked by halberdiers, advancing to the sound of drums. The duke's cavalry charged but couldn't penetrate the forest of pikes. When the second Swiss column struck the flank, the Burgundian army broke.

The duke was last seen riding toward the enemy with a handful of knights. His naked body was found two days later in a frozen stream, skull split by a halberd, face half-eaten by wolves. His signet ring confirmed the identity. The great duchy died with him, divided between his rivals.`,
        hints: [
            { cost: 20, text: "Halberdiers and pikemen in dense formations defeating heavy cavalry characterized Swiss warfare from roughly 1470-1520.", explanation: "The infantry weapons help date this battle." },
            { cost: 25, text: "The death of Charles the Bold ended Burgundy as an independent power in the 1470s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Nancy on January 5, 1477, where Swiss and Lorrainer forces destroyed Charles the Bold's army. Charles's body was found two days later, frozen in a stream with his head split open. His death ended the Burgundian state—France seized the duchy, while the Low Countries passed to the Habsburgs through his daughter. Swiss pike and halberd tactics (1470s-1520s) and Charles's death (1477) precisely date this battle.",
        tags: ["pitched-battle", "15th-century", "europe"]
    },
    {
        id: "campaign_142",
        title: "The First Gunpowder Victory",
        actualYear: 1503,
        difficulty: "hard",
        description: `Two great kingdoms—once united, now divided—fought for control of a wealthy southern realm. Their armies met near a vineyard-covered hillside, perhaps 6,000 on each side. But the attacking army had a new weapon deployed in a new way.

The defending army advanced uphill in the traditional manner: heavy cavalry in gleaming armor, Swiss pikemen renowned as the finest infantry in Europe. They expected the enemy arquebusiers to break as cavalry always broke missile troops.

Instead, the arquebusiers stood behind a ditch and a wooden palisade. Their fire was devastating—not the scattered shots of skirmishers, but disciplined volleys that shattered the cavalry charge. The Swiss pikemen, invincible in open battle, couldn't close with an enemy behind fortifications and continuous gunfire.

The defending commander was killed. His army fled. For the first time in history, firearms—not cavalry, not pikes—had won a major battle. A new age of warfare had begun.`,
        hints: [
            { cost: 20, text: "Arquebusiers behind field fortifications defeating Swiss pikemen marked the beginning of gunpowder infantry dominance, roughly 1500-1520.", explanation: "The tactical revolution helps date this battle." },
            { cost: 25, text: "The Italian Wars between France and Spain lasted from 1494-1559, with the first decade seeing rapid military innovation.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Cerignola on April 28, 1503, the first battle in history decided by gunpowder small arms. Spanish commander Gonzalo Fernández de Córdoba placed his arquebusiers behind a ditch and palisade; their fire destroyed the French cavalry and Swiss pike charges. The Duke of Nemours was killed leading the French. Córdoba, 'the Great Captain,' pioneered the tactics that would evolve into the tercio. Arquebusiers defeating Swiss pikes (1500-1520) and the Italian Wars (1494-1559) precisely date this battle.",
        tags: ["pitched-battle", "16th-century", "europe"]
    },
    {
        id: "campaign_143",
        title: "The Gate Between Worlds",
        actualYear: 1644,
        difficulty: "hard",
        description: `A great empire, weakened by rebellion and famine, faced invasion from beyond its northern wall. The wall's commander—the empire's last hope—held the crucial pass with 80,000 troops. But the rebel army that had captured the capital was also marching toward him. Caught between two enemies, he made a fateful choice.

The commander offered allegiance to the northern invaders—nomadic cavalry who had long raided the empire's borders. In exchange, they would help him destroy the rebels and avenge his emperor, who had hanged himself as rebels stormed the palace.

The combined force met the rebel army at the pass. The rebels had 100,000 men but expected only the pass garrison. When the northern horsemen suddenly charged from concealment, the rebel army collapsed in panic.

The commander thought he was using the barbarians; instead, they used him. Within a year, they had seized the capital and declared a new dynasty. The commander, realizing too late his mistake, rebelled and was killed. The new rulers would govern for nearly three centuries.`,
        hints: [
            { cost: 20, text: "Manchu banner cavalry with composite bows and early firearms characterized the conquest period of 1618-1683.", explanation: "The military forces help date this battle." },
            { cost: 25, text: "The Ming-Qing transition occurred in 1644, when rebels captured Beijing and the Manchus intervened.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Shanhai Pass on May 27, 1644, where General Wu Sangui allied with the Manchus to defeat Li Zicheng's rebel army. Li had captured Beijing and driven the Chongzhen Emperor to suicide. Wu, caught between Li and the Manchus, chose to let the Manchus through the Great Wall. The Manchu cavalry routed Li's rebels; the Qing dynasty took Beijing within weeks. Wu later rebelled (the Revolt of the Three Feudatories) and was crushed. Manchu banner cavalry (1618-1683) and the Ming-Qing transition (1644) precisely date this battle.",
        tags: ["pitched-battle", "17th-century", "asia"]
    },
    {
        id: "campaign_144",
        title: "The Long Turkish War's Chaos",
        actualYear: 1596,
        difficulty: "hard",
        description: `Two vast empires had fought for a decade over a fortress frontier. A new sultan, eager for glory, personally led 100,000 men to besiege a key fortress. A Christian relief army of 50,000 approached—a rare coalition of imperial troops, German princes, and Transylvanian cavalry.

The battle lasted three days. On the first, the Christians attacked the Ottoman camp but were repulsed. On the second, both sides maneuvered. On the third, the Christians broke through the Ottoman lines and overran the camp. The sultan fled; the battle seemed won.

Then the Christians stopped to loot. Scattered across the camp, drunk on captured wine and weighed down with plunder, they were helpless when the Ottoman sipahi cavalry rallied and counterattacked. The victory became a catastrophe—perhaps 30,000 Christians killed in the sudden reversal.

Both sides claimed victory. The war dragged on for another decade, ending in exhausted stalemate. But the sultan's survival meant the Ottoman frontier held for another century.`,
        hints: [
            { cost: 20, text: "Large Ottoman armies with Janissary arquebusiers facing Habsburg coalition forces characterized the Long Turkish War (1593-1606).", explanation: "The military context helps date this battle." },
            { cost: 25, text: "Three-day battles with dramatic reversals were characteristic of the chaotic warfare of the 1590s-1600s Balkan frontier.", explanation: "The battle pattern helps narrow the date." }
        ],
        explanation: "This was the Battle of Mezőkeresztes on October 24-26, 1596, during the Long Turkish War. Sultan Mehmed III's Ottomans initially routed when Archduke Maximilian's coalition forces overran their camp. But the Christian soldiers stopped to loot; Ottoman sipahi cavalry counterattacked and annihilated the disorganized victors. Both sides lost roughly 20,000-30,000 men. The war continued until the Peace of Zsitvatorok (1606). Janissary-era Ottoman armies versus Habsburg coalitions characterized the Long Turkish War (1593-1606).",
        tags: ["pitched-battle", "16th-century", "europe"]
    },
    {
        id: "campaign_145",
        title: "The Portuguese Disaster",
        actualYear: 1578,
        difficulty: "hard",
        description: `A young king, obsessed with crusading glory, led his nation's entire nobility into Africa to restore a deposed sultan. He landed 18,000 men—the flower of Portuguese chivalry—and marched inland against all advice.

The Moroccan army that met him numbered 50,000, including thousands of arquebusiers and cavalry. The Portuguese formed a square, but their formation was too large and unwieldy. The African cavalry circled them, harrying, exhausting, picking off stragglers.

When the Portuguese finally broke, the slaughter was total. The young king was killed—his body never found. Two Moroccan sultans also died in the fighting (one from illness, one in combat), giving the battle its strange name in local memory: the Battle of Three Kings.

Portugal lost its king, its heir, and most of its nobility in a single afternoon. Within two years, the Spanish king claimed the vacant throne. Portugal would not be independent again for sixty years.`,
        hints: [
            { cost: 20, text: "Moroccan arquebusiers and cavalry defeating European heavy cavalry was characteristic of the late 16th-century North African frontier.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "Portuguese crusading expeditions to Morocco occurred from the 1410s to 1578, ending in decisive defeat.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Alcácer Quibir (Battle of Three Kings) on August 4, 1578, where Moroccan Sultan Abd al-Malik destroyed King Sebastian I of Portugal's crusading army. Three kings died: Sebastian (killed), Abd al-Malik (died of illness during the battle), and the pretender Muhammad II (drowned fleeing). Portugal lost 8,000 dead and 15,000 captured, including most of its nobility. The ransom bankrupted the nation; Philip II of Spain claimed the throne in 1580. Portuguese crusading in Morocco ended forever. Moroccan firearms defeating European cavalry characterized the late 16th century.",
        tags: ["pitched-battle", "16th-century", "africa"]
    },
    {
        id: "campaign_146",
        title: "The Heretic Crusade",
        actualYear: 1213,
        difficulty: "hard",
        description: `A crusade was proclaimed—not against Muslims, but against Christians deemed heretics. The target was a wealthy southern region whose people followed a dualist faith that rejected the material world. Northern knights flooded in, eager for land and salvation.

The local count, nominally Catholic, allied with a powerful neighboring king to resist. Together they besieged a town held by the crusaders. The king brought 2,000 Aragonese cavalry—the finest heavy horse in Christendom.

The crusader leader had only 900 cavalry and 700 infantry. But he was a tactical genius. When the king's cavalry charged in disorder, the crusader knights struck in a disciplined wedge. The king himself was pulled from his horse and killed—stabbed through the gaps in his armor.

The count fled; the kingdom abandoned the heretics. Within a generation, the wealthy southern culture was destroyed, its language suppressed, its faith exterminated. The crusade had succeeded through one perfect cavalry charge.`,
        hints: [
            { cost: 20, text: "Heavy cavalry with mail armor and couched lances, fighting in close formation, dominated European warfare from roughly 1100-1300.", explanation: "The cavalry type helps date this battle." },
            { cost: 25, text: "The Albigensian Crusade against the Cathars in southern France lasted from 1209-1229.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Muret on September 12, 1213, where Simon de Montfort (father of the English rebel) destroyed a combined Aragonese-Occitan army. King Peter II of Aragon—hero of Las Navas de Tolosa just a year before—was killed when his cavalry charged in disorder. Raymond VI of Toulouse fled. The Cathar heresy and Occitan culture were doomed; northern French language and customs replaced them. Heavy cavalry with couched lances in mail armor characterized 1100-1300 warfare. The Albigensian Crusade (1209-1229) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_147",
        title: "The Crusader King Captured",
        actualYear: 1250,
        difficulty: "hard",
        description: `The saintly king of a great western kingdom launched a crusade to conquer the wealthy delta land that was the heart of Muslim power. His army captured the port city after a long siege, then marched inland toward the great capital.

The Muslim defenders were in disarray—their sultan dying, their emirs feuding. But the crusaders advanced too fast, leaving their fleet behind. When they attacked a fortified town at the junction of two rivers, the Muslims counterattacked.

The king's brother led a cavalry charge into the town that succeeded too well—the knights scattered to loot and were trapped in narrow streets. Muslim cavalry destroyed them. The king's army, weakened and diseased, attempted to retreat but found the river route blocked.

The king himself was captured—a humiliation unprecedented in centuries. His ransom bankrupted his kingdom. He would crusade again decades later and die of disease before the walls of another African city. The great crusading age was ending.`,
        hints: [
            { cost: 20, text: "Crusader heavy cavalry with surcoats over mail facing Egyptian Mamluk-style cavalry characterized mid-13th century warfare in the Levant.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "Major French crusades to Egypt occurred in 1249-1250 and again in 1270.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Mansurah and subsequent disaster in February-April 1250, during the Seventh Crusade. King Louis IX of France captured Damietta and advanced on Cairo; at Mansurah, his brother Robert of Artois led a rash charge and was killed. The retreating crusaders were trapped and forced to surrender—Louis IX was captured. His ransom of 400,000 livres nearly bankrupted France. Louis died on crusade again in 1270 at Tunis. Crusader cavalry with surcoats over mail facing Egyptian forces characterized mid-13th century warfare. The Seventh Crusade (1248-1254) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "middle-east"]
    },
    {
        id: "campaign_148",
        title: "The Last Hohenstaufen",
        actualYear: 1268,
        difficulty: "hard",
        description: `A boy of sixteen—last heir of a dynasty that had ruled for centuries—invaded a southern kingdom to reclaim his grandfather's throne. He brought German knights and Italian allies; the usurper who held his kingdom had the backing of the pope.

The usurper's army was larger and positioned behind a river. The boy-prince attacked anyway, his German cavalry crashing into the enemy line. The first division broke and fled; the second followed. Victory seemed certain.

But the usurper had hidden his reserve behind a hill. As the prince's cavalry scattered in pursuit, the fresh troops struck. The prince's army was annihilated in minutes. The prince himself was captured fleeing.

Two months later, the boy was publicly beheaded in the marketplace—the pope's blessing on his execution. His dynasty ended; the usurper's line ruled for two centuries. It was the last time a Hohenstaufen tried to reclaim the imperial heritage.`,
        hints: [
            { cost: 20, text: "German heavy cavalry with great helms facing Italian/Angevin forces was characteristic of the Hohenstaufen-Angevin conflicts of the 1260s.", explanation: "The military forces help date this battle." },
            { cost: 25, text: "The struggle for Sicily between Hohenstaufen claimants and Charles of Anjou occurred in 1266-1268.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Tagliacozzo on August 23, 1268, where Charles I of Anjou defeated Conradin, the last Hohenstaufen. Conradin's German cavalry broke two Angevin divisions, but Charles's hidden reserve under Erard de Valéry counterattacked and routed the disordered Germans. Conradin was captured and beheaded in Naples on October 29, 1268—he was sixteen. The Hohenstaufen dynasty ended; the Angevins ruled southern Italy until the Sicilian Vespers (1282). German heavy cavalry with great helms characterized 1260s warfare. The Hohenstaufen-Angevin conflict (1266-1268) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_149",
        title: "The Sultanate Broken",
        actualYear: 1243,
        difficulty: "hard",
        description: `The most powerful state in Anatolia—heir to the Seljuks who had once threatened Constantinople—faced invasion from the steppes. The invaders had already destroyed dozens of kingdoms; now they demanded submission and tribute.

The sultan refused and gathered his army: perhaps 80,000 men, including heavy cavalry, infantry, and thousands of Georgian and Armenian auxiliaries. The invaders had perhaps 30,000—the usual army of horse archers and heavy lancers that had conquered half the world.

The two armies met in a mountain pass. The sultan's army formed battle lines, but when the invaders' horse archers began their encirclement and arrow storm, panic spread. The Georgian auxiliaries fled first; the rest followed. The sultan himself barely escaped.

The sultanate became a vassal state, its independence ended forever. The invaders would dominate Anatolia for a century, until their own empire fragmented and new powers—the Ottomans among them—rose from the chaos.`,
        hints: [
            { cost: 20, text: "Mongol cavalry tactics—horse archer encirclement with heavy cavalry reserve—shattered conventional armies from China to Europe between roughly 1210-1280.", explanation: "The tactical pattern helps date this battle." },
            { cost: 25, text: "The Mongol invasion of Anatolia, which reduced the Seljuk Sultanate of Rum to vassalage, occurred in the 1240s.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Köse Dağ on June 26, 1243, where Mongol commander Baiju defeated Sultan Kaykhusraw II of the Seljuk Sultanate of Rum. The Seljuks had perhaps 80,000 men; the Mongols perhaps 30,000. The sultan's army panicked when Mongol horse archers began their encirclement; the rout was total. The sultanate became a Mongol vassal and never recovered independence. The Mongols dominated Anatolia until the Ilkhanate fragmented in the 1330s; the Ottomans rose from the chaos. Mongol cavalry tactics (1210-1280) and the invasion of Anatolia precisely date this battle.",
        tags: ["pitched-battle", "13th-century", "middle-east"]
    },
    {
        id: "campaign_150",
        title: "The Usurper Slain",
        actualYear: 1266,
        difficulty: "hard",
        description: `A French prince, invited by the pope to seize a southern kingdom from its excommunicated ruler, crossed the mountains in winter with 30,000 men. The usurper—illegitimate son of a great emperor—awaited him with a similar force.

The usurper chose strong ground: his army held a ridge with a river protecting his front. The French would have to cross and attack uphill. But the usurper's German cavalry was impatient; they charged down the slope to meet the French crossing.

In the riverbed, the Germans' heavier armor proved a liability. The French cavalry, lighter and more numerous, surrounded them. The usurper led charge after charge trying to break through; each time he was repulsed. Finally, his horse killed beneath him, he was cut down fighting on foot.

The pope's champion had won. But his harsh rule provoked rebellion within twenty years; on one evening, every French soldier on the island was massacred, and the kingdom was lost forever.`,
        hints: [
            { cost: 20, text: "German imperial cavalry with great helms and full mail facing French Angevin forces characterized the 1260s Italian conflicts.", explanation: "The military forces help date this battle." },
            { cost: 25, text: "The papal-backed conquest of southern Italy from the Hohenstaufen occurred in 1265-1266.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Benevento on February 26, 1266, where Charles I of Anjou defeated and killed King Manfred of Sicily. Manfred, illegitimate son of Frederick II, held strong ground but his German cavalry charged prematurely. The battle in the riverbed favored the lighter French horse; Manfred died fighting on foot after his horse was killed. Charles's harsh rule provoked the Sicilian Vespers (1282), when the French were massacred and Sicily passed to Aragon. German imperial cavalry with great helms characterized 1260s warfare. Charles's conquest (1265-1266) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_151",
        title: "The Earl's Triumph",
        actualYear: 1264,
        difficulty: "hard",
        description: `A mighty earl—brother-in-law to the king yet his greatest enemy—led a rebellion in the name of reform. The king's party controlled the wealthiest regions; the earl held the commons and the lesser barons. Civil war erupted across the realm.

The decisive battle came beneath an old hill fort. The king's son led a devastating cavalry charge that scattered the rebels' London contingent—but he pursued too far, losing control of the battle. Meanwhile, the earl's disciplined knights crashed into the king's center.

The king's horse was killed beneath him. Fighting on foot, surrounded, he was forced to surrender. His brother was captured; his son returned from pursuit to find the battle lost. For the next year, the earl ruled the kingdom in the captive king's name—the first English parliament met under his direction.

But the king's son escaped and raised an army. Within a year, the earl would be dead, his body mutilated, his reforms seemingly destroyed—yet his legacy would shape government for centuries.`,
        hints: [
            { cost: 20, text: "English baronial cavalry fighting in the mid-13th century used mail armor with surcoats and early great helms.", explanation: "The equipment helps date this battle." },
            { cost: 25, text: "The Second Barons' War in England occurred from 1264-1267, with parliament's role permanently expanded.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Lewes on May 14, 1264, where Simon de Montfort defeated King Henry III. Prince Edward's cavalry routed the Londoners but pursued too far; de Montfort destroyed the royal center. Henry was captured; Edward became a hostage. De Montfort summoned the first English parliament including commoners in 1265. Edward escaped and killed de Montfort at Evesham later that year, but parliamentary representation endured. English baronial cavalry with mail and surcoats characterized mid-13th century warfare. The Second Barons' War (1264-1267) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_152",
        title: "The Earl's Fall",
        actualYear: 1265,
        difficulty: "hard",
        description: `The great earl who had defeated and captured the king now faced the king's vengeful son. The prince had escaped captivity and raised an army in the western marches. The earl's forces were scattered; his son was bringing reinforcements from the east.

The prince moved with devastating speed. First he intercepted and destroyed the reinforcements at a river crossing—the earl's son was captured. Then he force-marched through the night to trap the earl himself.

The earl found himself surrounded at a small town, his army outnumbered and exhausted. He could have fled; instead, he chose to fight and die. His cavalry charged uphill into the royalist line and was annihilated.

The earl was killed, his body dismembered—hands, feet, and head cut off, his genitals stuffed in his mouth. Yet his cause outlived him: the parliament he had created would grow to rule the kingdom. Even in death, he had changed England forever.`,
        hints: [
            { cost: 20, text: "English cavalry charges uphill against prepared positions were characteristic of desperate battles in the Barons' Wars.", explanation: "The tactical situation helps date this battle." },
            { cost: 25, text: "The royalist victory that ended Simon de Montfort's rule occurred in 1265.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Evesham on August 4, 1265, where Prince Edward destroyed Simon de Montfort's army. Edward had first destroyed de Montfort's son's army at Kenilworth, then trapped the earl at Evesham. De Montfort reportedly said 'May God have mercy on our souls, for our bodies are theirs.' His body was mutilated; his head was sent to Roger Mortimer's wife. Yet the Provisions of Oxford and parliamentary representation survived. English baronial warfare with charges and counter-charges characterized the 1260s. The Second Barons' War's climax (1265) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    },
    {
        id: "campaign_153",
        title: "The Latin Emperor Falls",
        actualYear: 1205,
        difficulty: "hard",
        description: `A new empire, barely a year old, faced catastrophe. The crusaders who had sacked the greatest Christian city and established their own emperor now confronted a resurgent enemy from the north—fierce warriors who had never accepted Latin rule.

The new emperor led 300 knights and several thousand infantry to suppress a rebellion. The northern army was larger—perhaps 14,000—and included thousands of the fearsome mounted warriors who fought with curved swords and composite bows.

The emperor, overconfident from easy victories against disorganized resistance, attacked without reconnaissance. His cavalry charge scattered the enemy center, but the wings held. When the emperor's knights pursued too far, the enemy encircled them.

The emperor himself was captured—an unthinkable humiliation. He was taken to the enemy capital and never seen again; stories claimed he was executed, his skull made into a drinking cup. The Latin Empire never recovered its strength; within sixty years, the true heirs would reclaim their capital.`,
        hints: [
            { cost: 20, text: "Frankish crusader cavalry facing Cuman-style horse archers in Balkan warfare characterized the early 13th century.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "The Latin Empire of Constantinople, established by the Fourth Crusade, lasted from 1204-1261.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Adrianople on April 14, 1205, where Bulgarian Tsar Kaloyan destroyed the army of Latin Emperor Baldwin I. Baldwin led 300 knights against 14,000 Bulgarians and Cumans; his cavalry pursuit left his infantry exposed. Baldwin was captured and never seen again—legend says Kaloyan had his skull made into a drinking cup. The Latin Empire was fatally weakened; the Byzantines recaptured Constantinople in 1261. Frankish cavalry facing Cuman horse archers characterized early 13th-century Balkan warfare. The Latin Empire period (1204-1261) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "balkans"]
    },
    {
        id: "campaign_154",
        title: "The Sikh Artillery",
        actualYear: 1849,
        difficulty: "hard",
        description: `The greatest native army remaining in the subcontinent faced the power that had conquered all others. Two years earlier, they had fought the invaders to a bloody draw; now war had resumed over a disputed succession.

The native army had excellent artillery—European-trained gun crews who had learned from the best. Their heavy cavalry was legendary; their infantry fought in disciplined formations. But the invading army had more troops, more guns, and commanders who had never lost a campaign.

The battle began in jungle-covered ground that nullified the invaders' advantages. The native guns tore gaps in the attacking infantry. At nightfall, the issue was undecided—both armies had lost heavily, and the native army still held its positions.

But the invaders' reinforcements arrived overnight. The next morning's renewed assault broke the native line. The kingdom surrendered within a month; the famous diamond was sent as a gift to the invaders' queen. The last great native power had fallen.`,
        hints: [
            { cost: 20, text: "Native armies with European-trained artillery facing British-Indian forces characterized the final conquests of the 1840s.", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "The Second Anglo-Sikh War (1848-1849) ended Sikh independence and brought the Punjab under British rule.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Chillianwala on January 13, 1849, one of the bloodiest battles in British Indian history. Hugh Gough's British-Indian army attacked Sher Singh's Sikhs in thick jungle; the Sikh artillery devastated the attackers. The British lost 2,300 casualties—more than at many famous victories. The battle was inconclusive, but the British won decisively at Gujarat a month later. The Koh-i-Noor diamond went to Queen Victoria. European-trained native artillery facing British forces characterized the 1840s. The Second Anglo-Sikh War (1848-1849) precisely dates this battle.",
        tags: ["pitched-battle", "19th-century", "asia"]
    },
    {
        id: "campaign_155",
        title: "The Bloody Nightfall",
        actualYear: 1859,
        difficulty: "hard",
        description: `Two great European empires clashed over the liberation of an oppressed nation. One empire defended the existing order; the other sought to redraw the map. Their combined armies—perhaps 250,000 men—met on a baking summer day in the northern plains.

The battle was chaos. Generals lost control of their troops; divisions attacked without orders or support. The new rifled muskets killed at ranges that made massed formations suicidal, but neither side had adjusted their tactics. Medical services were overwhelmed—tens of thousands of wounded lay in the fields without care.

By nightfall, over 30,000 men were dead or wounded. A neutral observer—a Swiss businessman—was so horrified by the suffering that he would devote his life to organizing relief for war's victims. His organization, founded four years later, would become history's most famous humanitarian institution.

The defending empire accepted peace within weeks. A new nation was born; the map of Europe was redrawn. But the real legacy was the red cross on a white background—symbol of mercy born from slaughter.`,
        hints: [
            { cost: 20, text: "Rifled muskets devastating massed formations, combined with inadequate medical services, characterized the transitional warfare of 1855-1865.", explanation: "The military technology helps date this battle." },
            { cost: 25, text: "The wars of Italian unification, which reshaped the peninsula's map, occurred primarily from 1859-1870.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Solferino on June 24, 1859, where French and Sardinian forces defeated Austria during the Second Italian War of Independence. Over 300,000 men fought; 30,000+ became casualties. Henry Dunant, a Swiss businessman, witnessed the aftermath and wrote 'A Memory of Solferino,' leading to the founding of the International Committee of the Red Cross in 1863. Rifled muskets devastating formations and inadequate medical services characterized the 1855-1865 transition. Italian unification (1859-1870) precisely dates this battle.",
        tags: ["pitched-battle", "19th-century", "europe"]
    },
    {
        id: "campaign_156",
        title: "The Ironclad Ram",
        actualYear: 1866,
        difficulty: "hard",
        description: `Two fleets of ironclads met in the narrow sea—the first major battle between armored warships. One fleet had more ships and heavier guns; the other had faster, more maneuverable vessels commanded by an aggressive admiral.

The smaller fleet attacked in a wedge formation, ignoring conventional line tactics. Their flagship rammed an enemy ironclad amidships, nearly cutting it in two—the first ship sunk by ramming in modern naval warfare. The enemy fleet's formation dissolved into chaos.

But victory was won at a cost. The ramming ship lost its bowsprit and was badly damaged. Several ships on both sides were hit repeatedly but their armor held. The battle proved that ironclads were nearly impervious to the guns of the era—ramming seemed the only way to sink them.

Navies worldwide drew the wrong lesson: for the next forty years, every warship was built with a ram bow. It was a tactical dead end, but no one knew it yet.`,
        hints: [
            { cost: 20, text: "Early ironclads with broadside guns and ram bows were characteristic of naval warfare from roughly 1860-1880.", explanation: "The ship types help date this battle." },
            { cost: 25, text: "The Austro-Prussian War of 1866 included a major naval battle in the Adriatic.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Lissa on July 20, 1866, where Austrian Rear Admiral Wilhelm von Tegetthoff defeated the Italian fleet. Tegetthoff's flagship Ferdinand Max rammed and sank the Italian Re d'Italia—the first ironclad sunk by ramming. Italy had more and larger ships, but Austrian aggression won the day. Navies built ram bows for decades afterward, though ramming would prove impractical. Early broadside ironclads with rams characterized 1860-1880 naval warfare. The Austro-Prussian War (1866) precisely dates this battle.",
        tags: ["naval", "19th-century", "europe"]
    },
    {
        id: "campaign_157",
        title: "The Afghan Disaster",
        actualYear: 1880,
        difficulty: "hard",
        description: `A brigade of 2,500 soldiers marched to relieve a besieged city in the mountains. They were confident—well-trained, well-armed with modern breech-loading rifles. The local tribesmen they would face were dismissed as primitives.

The tribesmen had other ideas. Perhaps 25,000 warriors waited in the hills—many armed with captured rifles, others with jezails whose long barrels outranged the invaders' weapons. They had learned how to fight modern armies.

The brigade formed square on a dusty plain. The tribesmen attacked in waves, pressing closer and closer. Ammunition ran low; the artillery was overrun. When the square finally broke, the rout was total. Two-thirds of the brigade was killed, including the commanding general.

Only a legendary march by a relief column—300 miles in 20 days—saved the survivors and prevented a wider disaster. The invaders would eventually prevail, but they had learned that the mountain tribes were not to be underestimated.`,
        hints: [
            { cost: 20, text: "British-Indian forces with Martini-Henry rifles facing Afghan jezails characterized the Second Anglo-Afghan War (1878-1880).", explanation: "The weapons help date this battle." },
            { cost: 25, text: "Major British defeats in Afghanistan occurred in 1842 and 1880.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Maiwand on July 27, 1880, where Ayub Khan's Afghans destroyed a British-Indian brigade under Brigadier George Burrows. Of 2,500 soldiers, over 1,700 were killed. General Frederick Roberts's legendary march from Kabul—300 miles in 20 days—relieved Kandahar and defeated Ayub Khan. The battle inspired a fictional veteran: Dr. Watson of Sherlock Holmes. Martini-Henry rifles versus Afghan jezails characterized the 1878-1880 war. The Second Anglo-Afghan War precisely dates this battle.",
        tags: ["pitched-battle", "19th-century", "asia"]
    },
    {
        id: "campaign_158",
        title: "The Farmer Sharpshooters",
        actualYear: 1881,
        difficulty: "hard",
        description: `A small frontier republic of farmers and herders defied a great empire. The empire had just won a war against a powerful native kingdom; surely these rustic colonists would submit quickly.

The colonists thought otherwise. They gathered on a flat-topped hill overlooking the imperial camp, perhaps 400 men with hunting rifles. The imperial force of 350 regulars, including a naval brigade, marched up the hill in formation.

It was a massacre. The colonists, expert marksmen from childhood, fired from cover. The imperial soldiers, advancing in close order, were cut down before they could close. Three times they attacked; three times they were repulsed. The commanding general was killed leading the final charge.

The empire, humiliated, granted the republic its independence—for a time. Twenty years later, a far larger war would finally bring the colonists under imperial rule. But this hill became their national symbol of resistance.`,
        hints: [
            { cost: 20, text: "Boer marksmen with hunting rifles defeating British regulars characterized the First Boer War (1880-1881).", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "British defeats to Boer commandos occurred primarily in 1881 and 1899-1900.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Majuba Hill on February 27, 1881, where Boer farmers destroyed a British force under Major General George Colley. The Boers—400 excellent marksmen—held the hilltop against 350 British soldiers who attacked uphill in formation. Colley was killed; 92 British died versus 1 Boer killed. Britain granted Transvaal independence in the Pretoria Convention. Boer marksmanship defeating British regulars characterized the First Boer War (1880-1881). This humiliation contributed to British determination in the Second Boer War (1899-1902).",
        tags: ["pitched-battle", "19th-century", "africa"]
    },
    {
        id: "campaign_159",
        title: "The Liberator's Victory",
        actualYear: 1819,
        difficulty: "hard",
        description: `A revolutionary army—exhausted, half-naked, having just crossed frozen mountain passes thought impassable—descended into a fertile valley. The royalist garrison expected no threat; the revolutionaries were supposed to be trapped on the other side of the mountains.

The surprise was total. The revolutionary cavalry struck the royalist advance guard before they could form. The royalist commander hastily gathered 3,000 men, but his troops were scattered across the province. The revolutionaries had only 2,800, but they were concentrated and led by a genius.

The battle lasted barely two hours. The revolutionary cavalry shattered the royalist center; the infantry completed the rout. The royalist commander fled; the capital was undefended. Within three days, the revolutionaries controlled an entire viceroyalty.

The victory made the revolutionary leader's reputation. He would free five more nations before dying in poverty and exile, bitter that his dream of a unified continent had failed.`,
        hints: [
            { cost: 20, text: "Revolutionary cavalry with lances and sabers defeating Spanish royalist forces characterized the South American wars of independence (1810-1825).", explanation: "The military matchup helps date this battle." },
            { cost: 25, text: "Campaigns crossing the Andes to liberate New Granada occurred in 1819.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Boyacá on August 7, 1819, where Simón Bolívar destroyed the Spanish royalist army and liberated New Granada (Colombia). Bolívar's 2,800 men, having crossed the Andes in an epic march, surprised Colonel José María Barreiro's 3,000 royalists. The battle lasted two hours; Spanish losses were 200 killed and 1,600 captured. Bogotá fell three days later. Bolívar would liberate Venezuela, Ecuador, Peru, and Bolivia, but died in 1830, disappointed by South America's fragmentation. Revolutionary cavalry defeating royalists characterized the 1810-1825 independence wars.",
        tags: ["pitched-battle", "19th-century", "americas"]
    },
    {
        id: "campaign_160",
        title: "The Night March to Cairo",
        actualYear: 1882,
        difficulty: "hard",
        description: `A great power intervened to protect its vital strategic interest—a canal that connected two seas. The local army, led by a nationalist colonel, had seized power and threatened foreign investments. A fleet bombarded the port city; now an army would finish the job.

The invaders landed 40,000 men and advanced along the canal. The nationalist army—perhaps 20,000 strong with artillery—dug in behind earthworks. Frontal assault would be costly.

The invading commander chose a night march. His army advanced in silence across the desert, guided by naval officers with compasses. At dawn, they struck the earthworks from an unexpected direction. The defenders, caught by surprise, fought bravely but were overwhelmed in minutes.

The colonel was captured and exiled. The great power would occupy the country for seventy years, controlling the canal that was the lifeline of its empire.`,
        hints: [
            { cost: 20, text: "British Indian Army forces with Martini-Henry rifles and artillery defeating Egyptian forces characterized the 1882 intervention.", explanation: "The military composition helps date this battle." },
            { cost: 25, text: "The British occupation of Egypt, securing the Suez Canal, began in 1882 and lasted until 1956.", explanation: "The strategic context helps narrow the date." }
        ],
        explanation: "This was the Battle of Tel el-Kebir on September 13, 1882, where General Garnet Wolseley's British forces destroyed Ahmed Urabi's Egyptian nationalist army. Wolseley's night march achieved complete surprise; the battle lasted barely 30 minutes. Urabi was captured and exiled to Ceylon. Britain occupied Egypt to secure the Suez Canal, nominally maintaining Egyptian sovereignty while controlling the country until 1956. British-Indian forces with Martini-Henrys defeating Egyptian troops characterized the 1882 campaign.",
        tags: ["pitched-battle", "19th-century", "africa"]
    },
    {
        id: "campaign_161",
        title: "The Habsburg Succession",
        actualYear: 1278,
        difficulty: "hard",
        description: `A new dynasty was rising. A count from the western mountains had been elected king of a vast but chaotic realm. To secure his power, he needed to break the strongest prince in the east—a golden king who ruled rich lands along a great river.

The eastern king had defied every attempt to curb his power. Now the western king gathered allies: Hungarian cavalry, German knights, and his own Swiss mountaineers. Perhaps 30,000 men faced a similar number across a river plain.

The battle was decided by cavalry. The western king's heavy horse broke the eastern line, but the eastern king's knights fought back fiercely. In the press, the eastern king was unhorsed and killed—murdered, some said, by knights with old grudges.

The western dynasty claimed the eastern lands and would rule them for over six centuries. A family that began as minor counts would become emperors, ruling domains on which the sun never set.`,
        hints: [
            { cost: 20, text: "Heavy cavalry with mail and early plate, fighting with couched lances and swords, dominated Central European warfare from roughly 1200-1350.", explanation: "The cavalry equipment helps date this battle." },
            { cost: 25, text: "The Habsburg acquisition of Austria through battle occurred in 1278.", explanation: "The political context helps narrow the date." }
        ],
        explanation: "This was the Battle of Dürnkrut (Marchfeld) on August 26, 1278, where Rudolf I of Habsburg defeated Ottokar II of Bohemia. Ottokar, the 'Golden King,' was killed—possibly murdered by personal enemies after his capture. The Habsburgs gained Austria, Styria, and Carinthia, beginning their 640-year rule. Heavy cavalry with mail and early plate characterized late 13th-century Central European warfare. The Habsburg acquisition of Austria (1278) precisely dates this battle.",
        tags: ["pitched-battle", "13th-century", "europe"]
    }
];
