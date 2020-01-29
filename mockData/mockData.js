var db = require("../models");

function createMock(){
        var mockData = {
        "Users": [
                {"userName": "Ken",
                "password": "password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"userName": "Casey",
                "password": "password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"userName": "Oren",
                "password": "password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"userName": "Jerome",
                "password": "password",
                "createdAt": Date(), 
                "updatedAt": Date()
                }
        ],
        "AvatarClasses": [
                {"career": "treasurer",
                "socialClass": "authority",
                "img": "/images/authorityClass/treasurer.png",
                "careerDescriptions" : "This position is often appointed by either the Kingdom's Ruler or members of the Advisory Council. In the absence of a Royalty Class, it is also common for this position to be elected by representatives from different districts. The Advisory Treasurer acts as the primary financial advisor to the kingdom. They hold responsibility over all major trade, production and kingdom affairs in regards to expenses and negotiations on behalf of the Government. They also delegate to Sheriffs for tax collection. Typically, this position is given to a member of the Nobility Class, often from a Wealthier Family with close ties to the Royal Family or members of the Council.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "executioner",
                "socialClass": "authority",
                "img": "/images/authorityClass/executioner.png",
                "careerDescriptions": "This position is possibly one of the most challenging to hold within the upper classes of a medieval society. They are typically ex-military and large in stature, wielding a prominent weapon for quick and precise kills (usually a weapon that would be impractical to wield efficiently in any other setting). Their soul duty is to carry out death sentences on convicted criminals following the conclusion of a trial or decree by the royal family. It is a position of great responsibility and loyalty to justice as, in many cases, an executioner will not be made aware of the laws violated or the process of the criminals sentencing until the actual moment these are read by an upper member of the advisory class in the moment the sentencing is to be carried out (often before a crowd or audience).",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "town-crier",
                "socialClass": "authority",
                "img": "/images/authorityClass/town-crier.png",
                "careerDescriptions" : "This position is one of surprisingly high responsibility as they will often act as the voice for both the Royal class and Authority class, making formal announcements on a daily basis. This includes announcing new laws, recent news (typically regarding a violation of laws), sentencing, trials and competitions to occur, to name only but a few. They are also best known for announcing different times of the day by which many businesses and workers base their schedule by. There is at least one crier per district within a city or town.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "sheriff",
                "socialClass": "authority",
                "img": "/images/authorityClass/sheriff.png",
                "careerDescriptions" : "This position, though not a respected one among the lower classes, primarily involves a responsibility to conduct tax collection, report shortcomings and correct the violation of regulations or financial laws. They also act as census keepers and maintain records of all citizens in assigned districts. Though technically a member of the Authority Class, acting directly under the Advisory Treasurer, Sheriffs often tend to be mistaken for members of the Tradesman/Merchant Class due to their close affiliation and familiarity. In fact, a majority of their time is often spent visiting merchants and store owners throughout their designated regions, which (for larger settlements or kingdoms) can often mean a great deal of traveling. Sheriffs also coordinate with parts of the Military, often making their rounds with an armed guard to avoid unnecessary conflict, especially when collecting taxes. This is also a helpful tool for intimidation. As they work closely with the Advisory Treasurer, it is also common for a Sheriff to embark on outside assignments for the purpose of conduction trade and negotiations outside the kingdom on behalf of the Treasurer, should they be unable to attend themselves. This is highly common with smaller deals and transactions with the exception of a Sheriff who is in line for the position of Advisory Treasurer, in which case they will often travel with the treasurer to shadow and observe their practices. Also it is worth noting that, as a member of the Authority Class, Sheriffs have unlimited access to private records and civilian restricted areas (with only but a few exceptions).",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bishop",
                "socialClass": "clergy",
                "img": "/images/clergyClass/bishop.png",
                "careerDescriptions" : "This position (often elected by either the different branch leaders of the Clergy or, in some cases, the leading members of government within a Kingdom or Settlement), is considered the highest position within the Clergy, representing every branch. This position holds a great deal of responsibility as it calls upon extensive knowledge, experience and intellect.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "dean",
                "socialClass": "clergy",
                "img": "/images/clergyClass/dean.png",
                "careerDescriptions": "This position is appointed to a Priest by the Bishop and holds the responsibility of acting as a leader and representative to the other members of their religious branch. A Dean is also responsible for organizing religious practices and holds authority over their respective Paladin militant force.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "paladin",
                "socialClass": "clergy",
                "img": "/images/clergyClass/paladin.png",
                "careerDescriptions" : "Due to the clergy's separation from direct military and government practices, many branches have a personalized militant group named Paladins. These are often trained from young scribes who wish to devote themselves completely to their faith without serving as a Priest. They operate under the direct supervision of a Dean but mostly act as a source of protection and enforcement against religious persecution. They hold no official authority with exception to what the Clergy permits within their ranks, so in many cases, they are seen either training or guarding places of religious significance.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "priest",
                "socialClass": "clergy",
                "img": "/images/clergyClass/priest.png",
                "careerDescriptions" : "This position is appointed by a Dean or Bishop and holds the responsibility of conducting spiritual and religious ceremonies/practices. Priests dedicate their lives to worship and study, strictly living by the written word of their chosen religion. Many Priests either remain within their respective church/temple to serve the Clergy directly or choose to act as a missionary, traveling the world and educating others of their faith.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "scribe",
                "socialClass": "clergy",
                "img": "/images/clergyClass/scribe.png",
                "careerDescriptions" : "This position, though regarded with respect, is considered the lowest within the Clergy, often held by the youngest members of their respective branch. Typically, scribes are individuals who were adopted by the Clergy either from abandonment as an infant or given by their family in early childhood for the sake of religious sacrifice and selfless dedication. Scribes often act as priests in training, spending their days studying and copying religious texts, assisting with the duties and chores within the Church/Temple and holding great responsibility for aiding and assisting their assigned priests with whatever they require. From many perspectives, a scribe can be viewed as an apprentice of the divine. Similar to Priests, Scribes of the adolescent variety will occasionally embark on religious journeys for the sake of a charged duty or in search of knowledge. In many instances, performing such a task will often grant a Scribe the position of Priest or Paladin upon completion.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "artisan",
                "socialClass": "merchant",
                "img": "/images/merchantClass/artisan.png",
                "careerDescriptions" : "This position is often held by an individual who practices or is highly skilled in a craft, also referred to as a Master Craftsman. This is a role that requires years of practice, experience and a strong collection of time dedicated as an apprentice and then a Journeyman before it can be achieved. In large cities, this position is highly desirable as practicing a craft on a Master level can be highly lucrative and rewarding. In smaller villages, towns and cities, Master Craftsman are less common, but those that are present keep quite busy, often providing a large variety of services to the locals and even fulfilling orders and requests from other nearby regions. The different crafts include, but are not restricted to, the following: Blacksmithing, Tailoring, Architecture, Stone Masonry and Carpentry.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "apprentice",
                "socialClass": "merchant",
                "img": "/images/merchantClass/apprentice.png",
                "careerDescriptions" : "This position is given to an individual studying a trade from a skilled master. Apprenticeship is a sort of bonded servitude in which a young child is given to a master of a trade. The master is usually highly skilled at their job having dedicated a majority of their life to the craft. The child then learns the trade from the master and in return, does the master's grunt work. A Craft Apprentice typically has to pay a large sum of money just to start and their apprenticeship will often last about 7 years. In rare cases, if a craft is in short supply, the kingdom ruler or settlement leadership will offer an artisan the starting wage as a means of investing or improving the economy long term as new styles of development are in constant need, as is the continuation of traditional methods to maintain the market.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "merchant",
                "socialClass": "merchant",
                "img": "/images/merchantClass/merchant.png",
                "careerDescriptions" : "These individuals set up businesses in towns, villages and cities, often renting space from the local government or acquiring a street vendor's permit. The most commonly traded items are salt, iron, textiles, stones, silk and spices that are purchased from farmers and manufacturers such as artisans who produce cloth, shoes, beer, glass and other goods that required more expertise. Women ply several of these crafts, and in some, like weaving, tailoring and brewing, they play the leading role. Traveling merchants tend to be somewhat common and hold contracts with local city merchants for specific goods that cannot be produced within the kingdom.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "herbalist",
                "socialClass": "merchant",
                "img": "/images/merchantClass/herbalist.png",
                "careerDescriptions" : "This position, also occasionally named alchemist, works with various herbs, spices and concoctions to devise remedies and toxins of all varying sorts. It calls upon a strong understanding of nature, health and different aspects of both plants and human bodies. They typically work alongside hunters and merchants to collect materials and sell their product but on occasion they will also act independently and even travel to distant lands in order to expand their knowledge and collection of samples. Unfortunately, in many instances, this position holds a negative connotation for being swindlers, passing potions and charms under false, or otherwise impossible, claims for the sake of profit. However, in other instances they have been seen as healers of the sick and wounded. In either form, it is a role of great risk but also great reward.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "journeyman",
                "socialClass": "merchant",
                "img": "/images/merchantClass/journeyman.png",
                "careerDescriptions" : "This position is given to an individual who has completed an apprenticeship (generally 7 years) at a trade or handicraft and is certified to work at it assisting or under another, typically a Master Craftsman. Unlike an apprentice, journeyman work for a daily wage, often from within their Master's Shop or traveling throughout the different regions either with or on behalf of their Master for various jobs. A journeyman is the step before one day becoming a master themselves (a title that requires appointment by a kingdom ruler, provided they pay the right fees and dues). On rare occasions, a journeyman may be granted the title of 'Craftsman', allowing them to conduct independent work and coordinate their own business, under the direct employ of a Noble Household, Military, Authority Class or the Royal Family themselves (in rare cases of significant talent).",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bannerman",
                "socialClass": "military",
                "img": "/images/militaryClass/bannerman.png",
                "careerDescriptions" : "This position is often considered an honorable one as they hold great responsibility in battle of carrying the kingdom's colors and banners while focusing on providing bonuses to moral for surrounding troops. They rarely participate in actual combat until their ranks are within a closing distance to those of an enemy force, and even then they keep to the rear. They are often equipped in light or medium armor along with a melee weapon or shield (both of which they rarely use). Primarily they rally surrounding allies and inspire courage, to give support throughout a battle. They occasionally carry additional supplies and provide 1st aid if possible. Banner-men are often promoted from Squires who displayed limited combat potential or have yet to complete and official soldier Training. Outside of combat, they can be seen within castle keeps or on border walls along-side guards.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "cavalry",
                "socialClass": "military",
                "img": "/images/militaryClass/cavalry.png",
                "careerDescriptions" : "Trained in a similar fashion as Foot-Soldiers, Cavalry hold a specialty in mounted close-range combat (with some exceptions), often equipped with unique weapons constructed for the specific purpose of utilizing a mount's speed, size and fighting capabilities. In most battles, Cavalry will lead the charge in nearly every initial wave, breaking enemy lines and laying waste to a large percentage of ground troops. Outside combat, they often tend-to and oversee the grounds on which their horses are kept, along with the horses themselves. Cavalry soldiers are only as good as their mount, so maintaining their health and a strict schedule of training (physical and behavioral) can make all the difference in their overall potential.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "soldier",
                "socialClass": "military",
                "img": "/images/militaryClass/soldier.png",
                "careerDescriptions" : "This position, also referred to as Foot-Soldier, holds a primary focus on ground infantry and close combat, making up the majority within a Military Battalion. Soldiers are highly trained individuals who excel with using various weapons and shields, incorporating numerous combat maneuvers/tactics while coordinating as a unit under the command of a Vintenar. Soldiers are often equipped with Heavy or Medium Armor and occasionally a shield (if not a two-handed weapon). Though not the most acrobatic or mobile of troops, what they lack in movement, they more than make up for with a strong proficiency in Defensive and Offensive stances and abilities, making them a deadly force to encounter in close combat.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "constable",
                "socialClass": "military",
                "img": "/images/militaryClass/constable.png",
                "careerDescriptions" : "This position is separated into two types: The Advisory Constable and Battalion Constable. Advisory: This position holds the highest rank within the Military, acting as leader, primary war council and often holds the 4th Seat within the Authority Class (Advisory Council). In the presence of a Royalty Class, this position is assigned by the Kingdom Ruler or elected by the Advisory Council. In the absence of a Royalty Class, they are either elected by the Advisory Council or by the Military's Battalion Constables. Battalion: This position is the 2nd highest within the Military, answering to the Advisory Constable and the Advisory Council. Overall, each individual who carries this position commands a full Battalion, often varying in size depending on the Kingdom or Settlement, but averaging anywhere from 100 to 1,000 soldiers each. Their immediate officers for Delegating tasks are known as Vintenars.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "squire",
                "socialClass": "military",
                "img": "/images/militaryClass/squire.png",
                "careerDescriptions" : "Typically found between the ages of 12-17, these military personnel primarily assist soldiers and members of the Royal Family or Authority Class, almost like servants, with their day-to-day needs such as preparing and serving meals, tending to the grounds, maintaining equipment, cleaning and countless other grewling tasks. They receive regular training daily but rarely participate in fighting or military exercises unless absolutely necessary, in which case they merely provide additional support. In a charge, only about 1/4th of the oldest military squires will follow troops into combat acting as runners for supplies. The others will remain behind to prepare for the battalion's return. Around the age of 18, they are tested and trained further before military placement, often to discern their strengths and weaknesses. Ultimately, becoming a soldier is their primary goal and focus, however this can vary depending on their reason for becoming a squire to begin with. The appointment to Squire is considered an honorable one, viewed as a stepping stone to becoming a soldier (something many from the lower classes would view as a golden opportunity). However, for some, it is a job for the sake of honoring a debt or excusing a sentence (often for a minor crime committed as a young child). It is also common for peasant families to surrender their children to the military, in the hopes of giving them a better life. This can also be said for orphanages, that hold a similar policy for children who grow too old for adoption.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "town-guard",
                "socialClass": "military",
                "img": "/images/militaryClass/town-guard.png",
                "careerDescriptions" : "",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "vintenar",
                "socialClass": "military",
                "img": "/images/militaryClass/vintenar.png",
                "careerDescriptions" : "Position just below that of a Constable, Vintenars act as Captains, commanding specific regiments and divisions of the military, each with particular responsibilities and specialties. An Example of this would be the Foot-Soldier Division or the Archery Division (each commanded by a different Vintenar). They are free to promote soldiers from within their unit, assigning a Sergeant to act as individual Team leaders, or on some occasions, they will assign many depending on the Battalion's size. Unlike Constables, Vintenars are known for following their soldiers into combat, giving immediate orders and acting as primary command. Due to the significance of this roll, Vintenars are often promoted to their position from within their own regiment/division as they require a great deal of personal experience not just with their teams but with the specialty that team performs. In the Foot-Soldier Example above, a Vintenar of that division would be required to know Foot-Soldier maneuvers and combat strategies in order to perform on a battlefield, especially in the instance that the division is separated from the main Battalion (which can easily occur during a major battle). This position requires a close familiarity with one's division both on a personal level and a tactical one as their expertise are often called upon by Battalion Constables, marking the difference between life and death in times of war.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "nobleman",
                "socialClass": "nobility",
                "img": "/images/nobilityClass/nobleman.png",
                "careerDescriptions" : "Nobles are often highly educated and proper, having been raised for the intended purpose of living a life of significance either in the eyes of their family or the eyes of society (which are often one in the same). Nobles are also well travelled and typically fluent in different languages and cultures, however the exact opposite can be just as common, if not more so in many instances as the life of a Noble outside their own walls and protection can be a risky venture. Nobles wear obvious high quality clothing and live in the richest of settings. This often has a positive effect on their reputation and influence but also tends to draw unwanted attention. As such, it is quite common for a Noble family to have private security in addition to the private staff who reside within their residence, often tending to their every need. In short, Nobles live a luxurious life of splendor and beauty but also of constant suspicion and caution.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "noblewoman",
                "socialClass": "nobility",
                "img": "/images/nobilityClass/noblewoman.png",
                "careerDescriptions" : "Nobles are often highly educated and proper, having been raised for the intended purpose of living a life of significance either in the eyes of their family or the eyes of society (which are often one in the same). Nobles are also well travelled and typically fluent in different languages and cultures, however the exact opposite can be just as common, if not more so in many instances as the life of a Noble outside their own walls and protection can be a risky venture. Nobles wear obvious high quality clothing and live in the richest of settings. This often has a positive effect on their reputation and influence but also tends to draw unwanted attention. As such, it is quite common for a Noble family to have private security in addition to the private staff who reside within their residence, often tending to their every need. In short, Nobles live a luxurious life of splendor and beauty but also of constant suspicion and caution.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bard",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/bard.png",
                "careerDescriptions" : "This position is one of entertainment and talent. Bards, or Performers as they are typically called, are best noted for expressing their creativity for the sake of entertaining those around them. This is often done through acting, singing, musical instruments, dance, story telling and, on rare occasion, magic tricks/illusions. Typically, these individuals are highly charismatic by trade, often relying on the handouts of others as a source of income. Some Performers are also hired by various businesses and even members of the upper classes in the instance that the performer is highly proficient and talented. In rare instances, performers will be offered long-term employment. An example of this being a Lute player, hired by a local Tavern to entertain the patrons at night or during celebrations. These levels of employment also typically include a form of housing and food in exchange for services.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bailiff",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/bailiff.png",
                "careerDescriptions" : "This position refers to one who has been hired by a Land and/or Business Holder. Bailiffs are in charge of giving jobs, often to members of the peasantry class, overseeing labor, and taking care of maintenance by hiring skilled craftsmen to perform specific jobs. Essentially, they act on behalf of the Land or Business Holder as a middle man, managing property and insuring productivity. With Landholders, they are typically only found working with either a large plot of land or multiple. With Business Holders, they are most commonly found managing Inns, restaurants and establishments with personnel and a variety of services. Many Nobles will often hire a Bailiff to monitor and maintain a designated estate and organize the staff (much like a Butler). This role is considered the highest position within the Peasantry Class.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "beggar",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/beggar.png",
                "careerDescriptions" : "Considered the lowest of all classes, this can seem more like an unfortunate title than an actual position as very few tend to hold this by choice. They are very similar to Laborers, in that these individuals are typically without any particular skill, talent or education. However, unlike laborers, Beggars tend to suffer from an illness or physical affliction of some kind, often preventing them from standard employment. Thus, they get by surviving off scraps and handouts. It is not uncommon for a beggar to have previously held employment within a Military or equally dangerous line of work where a crippling physical injury is considered a typical occupational hazard. Because Beggars are overlooked by most, even other members of the peasantry class, they are particularly adept at acquiring information or remaining unnoticed except by business holders of course.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "cook",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/cook.png",
                "careerDescriptions" : "Though it seems relatively simple, the position of Cook is an important one, especially among the higher classes who often employ these individuals to live within their Manors or Castles (choosing the most proficient and experienced). It is also a highly significant position for many businesses such as Inns, Taverns, Bakeries, Specialty Restaurants and Markets. Independent Cooks will also occasionally establish their own business selling from a stand or becoming a Business Holder for themselves (in these instances, they will form personal contracts with land holders for farm-related goods). Mostly, Cooks oversee kitchens and prepare meals utilizing culinary expertise and Alchemy. Those within a kitchen by hire, typically obtain employment through a Bailiff and/or Business Holders, either of which they will work closely with on a daily basis. In many cities, towns and villages, it is not uncommon for Food to hold a strong significance, establishing that region's reputation and thus drastically changing their economic position for better or worse.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "farmer",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/farmer.png",
                "careerDescriptions" : "The position of Farmer, also referred to as land laborer or hind, is highly significant to the economy of any kingdom or settlement. In many situations, a Hind will be hired by Bailiffs or Land Holders for a permanent position of employment, granting free housing, food and utilities on the plot of land itself in exchange for work and less pay (if any). Others work privately, taking jobs within their skill set but remaining independent. The success of this position relies heavily on ones physical capabilities and skills with various farm related tasks. In smaller rural villages with a focus on farming, this position will often be held by a majority of the population. It is rare for a Hind to live within large cities as they would require a significant commute. Only with small exceptions will a Hind work for a member of the upper class, usually in the instance that they require maintenance for their garden. Also worth noting, like Maids and Cooks, Hinds are almost always hired by Bailiffs.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "hunter",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/hunter.png",
                "careerDescriptions" : "This position is one that calls heavily on a variety of skill sets and proficiencies, though yields very little financial reward or overall work. These individuals are typically employed by either common people who have encountered issues with local wildlife, or occasionally Business Holders, Merchants or Cooks who sell or work with specific meats or plants that cannot be obtained from local farms. Hunters may also occasionally find employment, surprisingly, from the bailiffs of noble families, often when members of that household have requested something exotic or dangerous. This position holds a significant level of risk but teaches a great deal of self sustaining skills and talents as Hunters will spend much of their time exploring the land through dangerous forests and regions. It is also common for a Hunter to gain employment as a guide through forests, mountains and various terrains.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "jester",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/jester.png",
                "careerDescriptions" : "",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "maid",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/maid.png",
                "careerDescriptions" : "This position holds a responsibility for cleaning, providing care, serving and maintaining work establishments, most often through repetitive physical activity. This position often involves being assigned specific duties and tasks such as kitchen maid or bar maid. Typically, older maids are assigned the more honorable tasks whereas younger ones are assigned the more laborious and physically demanding duties (assignment is often based on experience more than status by age). Like cooks, they work closely with whomever hires them (typically a Business Holder or Bailiff). They are also quite frequent in Manors and Castles working practically as servants to the upper classes in exchange for a small wage along with housing, clothes and food provided. When working for an Inn or Tavern, they will typically rent a room or have one assigned within the establishment.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "king",
                "socialClass": "royal",
                "img": "/images/royalClass/king.png",
                "careerDescriptions" : "This position, mostly an inherited one through direct bloodlines, often stands as the highest figure of authority holding the final and ultimate say on all actions and decisions within the kingdom. For most, it is a position of great power and aspiration but also great sacrifice as the crown can be quite heavy and the throne quite lonely. As it is a lifetime position, surrendered in the King's death or late retirement, the role can prove to be a dangerous one, paintings a clear and obvious target not only for the kingdom's enemies, rivals and even allies but also to the king's own family in some instances. The king's subjects can also pose a threat should there be suffering, poverty or too far of a gap in the equality of classes within the kingdom's territory (leading to an uprising). It is a job of significant responsibility and often overwhelming control (corrupting even).",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "prince",
                "socialClass": "royal",
                "img": "/images/royalClass/prince.png",
                "careerDescriptions" : "This position is an inherited one, nearly always given to the direct descendants of a King and/or Queen. On average, this is ranked by Birth, the highest position beginning with the first born and gradually decreases with every birth that follows. The further down the ranking goes, the less of a chance that Royal Family member will have of ever becoming King or Queen as such a position is usually passed down sequentially per tradition. As such, they instead aspire to holding alternative positions and/or titles of authority within the government, typically acting as Lords or Ladies who oversee smaller villages and cities within the Kingdom's Territory (if such establishments exist). In these instances, they will often reside within a Keep, Manor or small Fortress/Castle (significantly smaller in size to that of the King & Queen) where they govern and rule under the direction and will of whomever sits on the throne. Though this position comes with limited power, it does allow for some creative freedom in local ruling with regards to different levels of development and can even serve as evidence to their capabilities in a position of higher authority. On rare occasions, the appointment of heir to the throne has actually been changed to a Lord or Lady of this standing after they proved themselves a far more capable ruler than their sibling of higher birth. Noticeably, the life of a Prince or Princess can be a competitive one.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "queen",
                "socialClass": "royal",
                "img": "/images/royalClass/queen.png",
                "careerDescriptions" : "This position is often earned through marriage. The Queen acts as the aiding female sovereign or monarch and wife or consort to the king. In most cases, these unions are arranged for the sake of forming alliances and negotiating between different kingdoms or prominent houses. In many society settings of male dominance, she is known to support and provide council to the King on all public and even economic matters as well as host gatherings and events to appease the higher classes. Her role is often one that provides balance and partnership with the king as their joined union serves to unite the land and its people. Depending on the Kingdom and their policies, the Queen will occasionally hold power to assume the throne in the King's absence rather than The Hand (1st seat of the Advisory Council). On rare occasions, the roles of King and Queen are reversed, typically within slightly more advanced civilizations. In these instances, she acts as the primary Ruler, often passing the position through her direct lineage rather than that of the king's.",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "princess",
                "socialClass": "royal",
                "img": "/images/royalClass/princess.png",
                "careerDescriptions" : "This position is an inherited one, nearly always given to the direct descendants of a King and/or Queen. On average, this is ranked by Birth, the highest position beginning with the first born and gradually decreases with every birth that follows. The further down the ranking goes, the less of a chance that Royal Family member will have of ever becoming King or Queen as such a position is usually passed down sequentially per tradition. As such, they instead aspire to holding alternative positions and/or titles of authority within the government, typically acting as Lords or Ladies who oversee smaller villages and cities within the Kingdom's Territory (if such establishments exist). In these instances, they will often reside within a Keep, Manor or small Fortress/Castle (significantly smaller in size to that of the King & Queen) where they govern and rule under the direction and will of whomever sits on the throne. Though this position comes with limited power, it does allow for some creative freedom in local ruling with regards to different levels of development and can even serve as evidence to their capabilities in a position of higher authority. On rare occasions, the appointment of heir to the throne has actually been changed to a Lord or Lady of this standing after they proved themselves a far more capable ruler than their sibling of higher birth. Noticeably, the life of a Prince or Princess can be a competitive one.",
                "createdAt": Date(), 
                "updatedAt": Date()
                }
        ],                
        "Avatars": [
                {"name": "Paul The Money Man",
                "age": 30,
                "personality": "test_personality",
                "backstory": "test_backstory",
                "details": "test_details",
                "AvatarClassesId": 1,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "Bishop Mike The Perv",
                "age": 22,
                "personality": "test_personality2",
                "backstory": "test_backstory2",
                "details": "test_details2",
                "AvatarClassesId": 5,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "Bob Marley",
                "age": 33,
                "personality": "test_personality3",
                "backstory": "test_backstory3",
                "details": "test_details3",
                "AvatarClassesId": 13,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "Jarhead Jack",
                "age": 44,
                "personality": "test_personality4",
                "backstory": "test_backstory4",
                "details": "test_details4",
                "AvatarClassesId": 17,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "Clark the Prick",
                "age": 55,
                "personality": "test_personality5",
                "backstory": "test_backstory5",
                "details": "test_details5",
                "AvatarClassesId": 22,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "Jacob",
                "age": 66,
                "personality": "test_personality6",
                "backstory": "test_backstory6",
                "details": "test_details6",
                "AvatarClassesId": 26,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "King David",
                "age": 77,
                "personality": "test_personality7",
                "backstory": "test_backstory7",
                "details": "test_details7",
                "AvatarClassesId": 33,
                "createdAt": Date(), 
                "updatedAt": Date()
                }
        ],

        "UsersAvatars":[
                {"UserId":1,
                "AvatarId":3
                },       
                
                {"UserId":2,
                "AvatarId":7
                } ,

                {"UserId":3,
                "AvatarId":5
                },

                {"UserId":4,
                "AvatarId":2
                }
        ]
};
        db.Users.bulkCreate(mockData.Users).then(function(dbExample) {
                console.log(`STORED Users!!`);
                db.AvatarClasses.bulkCreate(mockData.AvatarClasses).then(function(dbExample) {
                        console.log(`STORED AvatarClasses!!`);
                        db.Avatars.bulkCreate(mockData.Avatars).then(function(dbExample) {
                                console.log(`STORED Avatars!!`);
                                db.UsersAvatars.bulkCreate(mockData.UsersAvatars,{ individualHooks: true }).then(function(response){
                                        console.log("new avatar here!",(response))
                                })
                        });
                });
        });

}
module.exports = createMock;
