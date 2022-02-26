## /v1/scp

- Easily retrieve data on any SCP item.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `item` | `integer` | The SCP number to search. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "status": 200,
    "item": "SCP-005",
    "class": "Safe",
    "description": "In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined.",
    "procedures": "SCP-005 poses no immediate risk in any direct sense. Even so, its unique functions require special measures be taken to restrict access and manipulation of the object. Approval of at least one (1) Level 4 personnel is required for the removal of the object from its containment area.",
    "imageSrc": "https://scp-wiki.wdfiles.com/local--files/scp-005/SCP-005.jpg"
  },
  "timestamps": {
    "date": "11/24/2021, 8:37:20 PM",
    "unix": 1637786240
  }
}
```

## /v1/scp/branches

- Get all SCP Foundation branches.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "branches": {
    "base": {
      "logo": "https://scp-int.wdfiles.com/local--files/main/scp-logo-en-400.png",
      "about": null
    },
    "pride": {
      "logo": "https://i.kym-cdn.com/photos/images/facebook/001/386/104/41d.png",
      "about": null
    },
    "international": {
      "logo": "https://scp-wiki.wdfiles.com/local--files/scp-international/scp-logo-int.png",
      "about": "The International Translation Archive contains translations of SCP articles, tales, canons and other articles from all the different branches."
    },
    "russian": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-ru-400.png",
      "about": "Фонд SCP существует и действует подпольно и тайно, сдерживая аномалии, чтобы гарантировать нормальное состояние."
    },
    "spanish": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-es-400.png",
      "about": "La Fundación SCP existe y opera de manera clandestina y secreta conteniendo anomalías para asegurar la normalidad."
    }
  },
  "timestamps": {
    "date": "11/24/2021, 8:40:31 PM",
    "unix": 1637786432
  }
}
```

## /v1/scp/personnel

- Fetch all SCP foundation personnel.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "personnel": [
    {
      "name": "Dr. Daniel Asheworth",
      "about": "Thaumaturgist and self-proclaimed alchemist. Stubborn, temperamental, and sometimes arrogant, though usually useful just enough to escape disciplinary action. Born from an unknown American mother and an unknown Polish father in the late 1950s. One of few people in the Foundation capable of prolonging their youth through anomalous means.\n\nLead of the Damien Nowak Case. Believed to once have had been a temporary member of the Wanderers' Library and Wilson's Wildlife Solutions, Daniel Asheworth has proven numerous times to be a useful asset in Site-120's Director Council."
    },
    {
      "name": "Dr. Katherine Sinclair",
      "about": "Acting head - and one of only two members - of the Occult Studies and Thaumatology division at Site-87 in Sloth's Pit, Wisconsin. Has been involved in numerous incidents, including the assault on Sloth's Pit by the now defunct Group of Interest Satyr's Reign, and the 2014 Christmas Incident. Has burn scars on her forearms from a botched flame ritual."
    },
    {
      "name": "Dr. Johannes Sorts",
      "about": "Memetic specialist and field researcher, with a doctorate in art history. Caucasian, late 30s, unshaven with greying brown hair. Slightly overweight, usually wears a grey cap. Obsessive, cowardly and paranoid in mundane situations, but solid and focused when presented with memetic or information based hazards. Multiple disciplinary reports due to poor choice of action under pressure, including the shooting of a guard while under my influence. Currently under psychiatric evaluation and restricted to safer projects."
    },
    {
      "name": "Dr. Thaddeus Xyank",
      "about": "Presently low-level but extremely significant Foundation researcher. Specializes in temporal anomalies. Somewhat arrogant and long-winded, but considered an up-and-coming genius."
    }
  ],
  "timestamps": {
    "date": "2/26/2022, 7:54:07 PM",
    "unix": 1645905248
  }
}
```

## /v1/scp/taskforces

- Get all SCP Foundation task forces.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": [
    {
      "MTF Alpha-1": {
        "name": "MTF Alpha-1 (\"Red Right Hand\")",
        "description": "Task Force Mission: Mobile Task Force Alpha-1 is a task force that reports directly to the O5 Council and is used in situations that require the strictest operational security. The task force consists of the Foundation's best and most loyal operatives. Further information regarding MTF Alpha-1 is classified Level 5.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/Alpha1.png/small.jpg"
      }
    },
    {
      "MTF Alpha-4": {
        "name": "MTF Alpha-4 (\"Pony Express\")",
        "description": "Task Force Mission: Mobile Task Force Alpha-4 consists primarily of personnel trained to act as undercover employees and specialize in tracking, intercepting, and securing anomalous objects sent through postal and package delivery services worldwide.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/Alpha4.png/small.jpg"
      }
    },
    {
      "MTF Alpha-9": {
        "name": "MTF Alpha-9 (\"Last Hope\")",
        "description": "Task Force Mission: The reborn Omega-7. A Mobile Task Force explicitly intended to train and utilize humanoid SCP objects in the field.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/alpha9alt.png/small.jpg"
      }
    },
    {
      "MTF Beta-4": {
        "name": "MTF Beta-4 (\"Castaways\")",
        "description": "Task Force Mission: MTF Beta-4 is a task force created with the sole purpose of assisting and monitoring GoI-466 (Wilson's Wildlife Solutions) in their interactions with local fauna-based anomalies.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/beta4.png/small.jpg"
      }
    }
  ],
  "timestamps": {
    "date": "11/24/2021, 8:42:36 PM",
    "unix": 1637786557
  }
}
```

## /v1/scp/personnel

- Fetch all SCP foundation personnel.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "personnel": [
    {
      "name": "Dr. Daniel Asheworth",
      "about": "Thaumaturgist and self-proclaimed alchemist. Stubborn, temperamental, and sometimes arrogant, though usually useful just enough to escape disciplinary action. Born from an unknown American mother and an unknown Polish father in the late 1950s. One of few people in the Foundation capable of prolonging their youth through anomalous means.\n\nLead of the Damien Nowak Case. Believed to once have had been a temporary member of the Wanderers' Library and Wilson's Wildlife Solutions, Daniel Asheworth has proven numerous times to be a useful asset in Site-120's Director Council."
    },
    {
      "name": "Dr. Katherine Sinclair",
      "about": "Acting head - and one of only two members - of the Occult Studies and Thaumatology division at Site-87 in Sloth's Pit, Wisconsin. Has been involved in numerous incidents, including the assault on Sloth's Pit by the now defunct Group of Interest Satyr's Reign, and the 2014 Christmas Incident. Has burn scars on her forearms from a botched flame ritual."
    },
    {
      "name": "Dr. Johannes Sorts",
      "about": "Memetic specialist and field researcher, with a doctorate in art history. Caucasian, late 30s, unshaven with greying brown hair. Slightly overweight, usually wears a grey cap. Obsessive, cowardly and paranoid in mundane situations, but solid and focused when presented with memetic or information based hazards. Multiple disciplinary reports due to poor choice of action under pressure, including the shooting of a guard while under my influence. Currently under psychiatric evaluation and restricted to safer projects."
    },
    {
      "name": "Dr. Thaddeus Xyank",
      "about": "Presently low-level but extremely significant Foundation researcher. Specializes in temporal anomalies. Somewhat arrogant and long-winded, but considered an up-and-coming genius."
    }
  ],
  "timestamps": {
    "date": "2/26/2022, 7:54:07 PM",
    "unix": 1645905248
  }
}
```

## /v1/scp/sites

- Fetch all SCP foundation sites.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "sites": [
    {
      "name": "Site-01",
      "alias": "Protected Site-01, Overwatch HQ",
      "description": "Site-01 is a safe zone that acts as a data backup for all major Foundation facilities worldwide as well as a secure meeting facility for O5 Council members and other high-ranking Foundation personnel. As with all Protected Sites, no anomalies of any kind are allowed in proximity of Site-01. The location of Site-01 is strictly classified."
    },
    {
      "name": "Site-06-3",
      "alias": "Humanoid Containment Site-06-3",
      "description": "Site-06-3 is a containment facility that is currently located in the Lorraine region of France. Formerly located in the United States (Site-06) and Germany (Site-06-2), this facility was moved to its current location following the decommission and demolition of the aforementioned previous facilities. Site-06-3 employs a multi-national staff and houses numerous low-risk human and humanoid entities, most notably several former Foundation personnel. Objects contained at this facility include: SCP-069, SCP-706, SCP-1669, and SCP-1702."
    },
    {
      "name": "Site-11",
      "alias": null,
      "description": "Site-11 is a large-scale Foundation facility located in the mid-western United States consisting of an entire self-sustaining community including residential housing, commercial businesses, and industrial/manufacturing facilities as well as an extensive underground containment and research complex. The Foundation maintains strict tracking of all personnel and civilians within Site-11 and as such, the facility is often used as a safe location for personnel requiring additional security and protection. Objects contained at this facility include: SCP-986 and SCP-4332."
    },
    {
      "name": "Site-15",
      "alias": null,
      "description": "Site-15 is a Foundation facility located on the United States west coast that specializes in the containment and study of electric, electronic, and computer-based anomalies. The primary storage and containment wings of Site-15 are electromagnetically isolated to prevent any interaction between anomalous electronics and the outside world. Objects contained at this facility include: SCP-079, SCP-719, SCP-896, and SCP-5241."
    }
  ],
  "categories": {},
  "timestamps": {
    "date": "2/26/2022, 7:55:55 PM",
    "unix": 1645905356
  }
}
```

## /v1/scp/areas

- Fetch all SCP foundation areas.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "areas": [
    {
      "name": "Area-02",
      "alias": "Armed Reliquary and Containment Area-02",
      "description": "Area-02 is a remote facility whose primary purpose is to contain highly dangerous, hostile, or otherwise hazardous anomalies, including multiple Keter-class objects. In addition to a battalion-strength security detachment, Area-02 is also equipped with multiple nuclear fail-safes as a final option in the case of a catastrophic breach or loss of containment."
    },
    {
      "name": "Area-12",
      "alias": "Biological Research Area-12",
      "description": "Area-12 is a containment and research facility located on remote federal land in the Midwestern United States. Area-12 contains both live specimens of anomalous biological entities as well as samples of biohazardous or otherwise dangerous biological anomalies for study."
    },
    {
      "name": "Area-14",
      "alias": "Armed Biological Containment Area-14",
      "description": "Area-14 is a dedicated containment facility located in the Ruby Mountains of Nevada, USA. Area-14 is primarily used for large-scale, dangerous, and/or hostile anomalous entities and as such is staffed with a regiment-strength security detachment as well as heavy weapons, armored vehicles, and air support."
    },
    {
      "name": "Area-27",
      "alias": "Reliquary Area-27",
      "description": "Area-27 is an underground facility operating beneath the Saint Notre-Dame Cathedral Basilica in Ontario, Canada. Area-27's main purpose is to serve as both headquarters for the Department of Tactical Theology and as emergency quartering in the case of a large-scale K-Class Scenario. The site is also capable of containing primarily religiously-orientated anomalies and the development of theological weaponry."
    },
    {
      "name": "Area-32",
      "alias": "Lunar Area-32",
      "description": "Comprised of several floors beneath the surface of Mare Imbrium and built around the ninth destination point of SCP-120, Lunar Area-32 is a facility used to contain immobile anomalies present on the lunar surface, or anomalies that are significantly less hazardous to contain beyond Earth’s atmosphere."
    },
    {
      "name": "Area-179",
      "alias": null,
      "description": "Formerly Provisional Containment Area-179, created for the containment of SCP-1179, this facility is located in Pennsylvania, United States. In addition to storing and researching recovered anomalous objects, the Area also supervises nearby Sites such as Site-5076-1."
    }
  ],
  "timestamps": {
    "date": "2/26/2022, 7:56:48 PM",
    "unix": 1645905409
  }
}
```

## /v1/scp/all

- Fetch all SCP foundation data.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "personnel": [
    {
      "name": "Dr. Daniel Asheworth",
      "about": "Thaumaturgist and self-proclaimed alchemist. Stubborn, temperamental, and sometimes arrogant, though usually useful just enough to escape disciplinary action. Born from an unknown American mother and an unknown Polish father in the late 1950s. One of few people in the Foundation capable of prolonging their youth through anomalous means.\n\nLead of the Damien Nowak Case. Believed to once have had been a temporary member of the Wanderers' Library and Wilson's Wildlife Solutions, Daniel Asheworth has proven numerous times to be a useful asset in Site-120's Director Council."
    },
    {
      "name": "Doctors Thomas, Trevor and Tristan Bailey",
      "about": "Identical triplets employed by the Foundation. Sons of Tyler Bailey, inventor of the Multi-Universal Transit Array. Employed by the Foundation for an unknown period of time (employee records and personal accounts differ), and look anywhere between 20 and 40 as a side effect of constantly crossing universal barriers.\n\nTrevor Bailey is the former head of the Department of Multi-Universal Affairs, before being demoted to a desk job at Site-19 for mishandling of a Keter-class anomaly. Tom “Bombadill” Bailey is currently the commissioner of Site-1483 (within the Antarctic Empire), following a career spent exploring alternate universes. Tristan Bailey is a physicist, diplomat and designer of a multi-universal translator. Formerly assigned to [REDACTED], currently stationed at Site-87."
    },
    {
      "name": "Dr. Django Bridge",
      "about": "Foundation Archivist. Quiet but influential, with a touch of both melancholy and whimsy. Extraordinary memory. On a first-name basis with Dr. Bright, and has frequently acted as an informal assistant for him."
    },
    {
      "name": "Dr. Jack Bright",
      "about": "Director of Foundation Personnel. Somewhat amoral. Extremely loyal to the Foundation. May be ridiculous, may be terrifying; is certainly blunt. Attached to SCP-963, and is therefore immortal, using the body of whatever SCP-963 has last touched."
    },
    {
      "name": "Dr. Jeremiah Cimmerian",
      "about": "An ethics committee liaison that takes his job only somewhat seriously. He never thought his doctorate in English Literature or his minor in philosophy would actually help him stay employed, but the former got him recruited into the Foundation as a researcher and the latter secured his employment in the long term. Has an unusual interest in puns and the ethical treatment of humanoids."
    },
    {
      "name": "Dr. Alto Clef",
      "about": "Enigmatic and genre-savvy. A highly adaptable, clever liar. Former Global Occult Coalition (GOC) operative, specializing in reality benders. Also former file clerk. Undergone anomalous alterations that provide resistance to reality shifts and prevent his face from being photographed. Has a long and checkered history, a flair for the dramatic, and a somewhat hidden streak of self-hatred. Reformed misogynist. Most rumors about him are exaggerated or off-point."
    },
    {
      "name": "Dr. Kain \"Pathos\" Crow",
      "about": "Cross-disciplinary wunderkind researcher, specializing particularly in biochemistry and robotics. Rarely, if ever, seen in public. May or may not have been permanently transformed into a dog-like body as the result of a particular anomalous event."
    },
    {
      "name": "Dr. Dan XXXXXXX",
      "about": "Insufferable, emotive genius with a big-picture-centric set of principles. Former marine. Lead researcher on an SCP too dangerous to keep around, but couldn't make the O5 Council see it that way. Took matters into his own hands, getting dozens of people killed, getting his decommissioning request accepted, and getting a death sentence (in that order)."
    },
    {
      "name": "Dr. Michael Edison",
      "about": "Level-3 Researcher, current head of the Foundation's Inter-Site Testing Initiative (ISTI). Dr. Edison has received disciplinary action on multiple occasions due to a repeated pattern of unsanctioned and ill-conceived behavior. These behaviors have resulted in temporary reassignment to the Site-XX Antarctic base. His current assignment at Site 19 is contingent on approval from his assigned therapist."
    },
    {
      "name": "Dr. Chelsea \"Photosynthetic\" Elliott",
      "about": "Plant specialist, both anomalous and non-anomalous. Dedicated, friendly, prone to tunnel vision. Often in the field; excessively 'hands-on' in her lab and field research, leading to a number of injuries. Scars cover her hands and arms."
    },
    {
      "name": "Dr. Justine 'Jay' Everwood",
      "about": "GoI specialist, very well-read and knowledgeable on the many groups of interests the Foundation faces. Is particularly interested in Dr. Wondertainment and Wilson's Wildlife Solutions. Is generally approachable but is often lost in thought, be they mundane or fantastical."
    },
    {
      "name": "Dr. Joe Fynegan",
      "about": "Expert on ARBH Class Event Scenarios, AKA \"Insect Hell\" extinction-level events."
    },
    {
      "name": "Dr. Charles Gears (\"COG\")",
      "about": "A man strangely lacking in emotional response (to the point of lacking a startle response) and possessing unusual levels of logic and intellect. Former Euclid-class object specialist before having his area of study expanded. Has been deeply involved with research regarding a truly shocking number of SCP objects both major and minor. A figure of great influence in recent Foundation history."
    },
    {
      "name": "Dr. Simon Glass",
      "about": "Head of Psychology. Trusted with performing psychological evaluations of highly ranked Foundation personnel. Very empathetic. Sometimes considered \"soft\" — and that's true, for a Foundation researcher, but he's still well-trusted. In the course of his interviews, he has gained knowledge of more and more terrible secrets, yet still holds on to both his sanity and empathy."
    },
    {
      "name": "Dr. Frederick Heiden",
      "about": "Neurology specialist. Anxious, uncertain, empathic, focused on logic. Involved in a number of highly classified projects, despite initially being barred from any non-Safe-classed objects."
    },
    {
      "name": "Doctor Hoygull",
      "about": "Sapient seagull. Head of the Foundation's Avian Division, commanding MTF-Eta-4, \"Begone Thoth\"."
    },
    {
      "name": "Dr. Everett King:",
      "about": "One of the Foundation's most experienced mathematicians, Doctor King's reputation has nevertheless been overtaken by his testing record involving unusual results. Despite this, he regularly contributes to internal Foundation intellectual periodicals."
    },
    {
      "name": "Dr. Mark Kiryu",
      "about": "Senior researcher and director of an anomalous items processing lab. Upon initial recruitment, had a successful career as a therapist (licensed psychologist). Worked extensively with SCP-1457 in his first years with the Foundation but doesn't talk about that, and has spearheaded several projects involving sapient SCP entities. Cheery attitude and a good listener; looks out for his coworkers and interns like a bit of a mother hen sometimes. Has a ceramic seahorse and potted bamboo on his desk."
    },
    {
      "name": "Dr. Zyn Kiryu",
      "about": "Highly prolific researcher. Involved in a number of classified Foundation projects. Obsessive, driven, often not eating or sleeping in favor of finishing tasks. Finished her schooling through an accelerated program after joining the Foundation. Initially closed-off and withdrawn, but opened up due to a latent ambitious streak. She often volunteers to handle new Foundation member intake, hoping to give new members a positive introduction to an often deeply horrifying organization. Has a private flair for poetry. Has accidentally inherited the absent Dr. Kondraki's affiliation with anomalous butterflies, including SCP-408 after Kondraki's disappearance."
    },
    {
      "name": "Dr. Adam Leeward",
      "about": "Emotionally confused and ethically conflicted humanoid containment specialist from Site-11, living in Site-81. May or may not have made a few mistakes, may or may not have cleaned up a few mistakes. Not without the standard degree of coldness in personality traits, but with a few (sometimes painful) soft spots."
    },
    {
      "name": "Dr. Sophia Light",
      "about": "Biologist, surgeon and Site Director with far, far too many secrets. A likeable yet frightening person. Blunt, determined, calculating; good under pressure. Putting effort into remaining friendly and open (and emotionally stable). Bears minor facial scarring, and an old injury in her left hand sometimes impairs its functionality. Somewhat traumatic childhood; caretakers forced her to learn outdoor survival by leaving her stranded in the African wilderness for days on end. Joined the Foundation after a classified anomalous incident that killed eleven people, including her then-fiancee. Currently or formerly romantically linked with Troy Lament."
    },
    {
      "name": "Dr. Judith Low",
      "about": "Senior Advisor at the Department of History. Specialises in the religious practices known as Sarkicism, and involved in the containment of SCP-2133, SCP-2191 and SCP-2480."
    },
    {
      "name": "Dr. Connor MacWarren",
      "about": "Active researcher focusing on the development of anomalous technologies on top of being one of the board of directors at Site-98 in Philadelphia. Currently oversees his own department specializing in extradimensional anomalies. Humble, sarcastic, irritable, and absolutely loathes having to repeat himself every time anyone mishears his dry jokes. Former member of the Marine Corps. with a highly-prolific GOC agent for a father, now estranged."
    },
    {
      "name": "Dr. Everett Mann",
      "about": "Unconventional medical researcher with few scruples and a specialty in unusual forms of surgery. Jokingly referred to as a \"mad scientist\". (He objects to the term \"mad scientist\", claiming that \"mad doctor\" would be more accurate, and further that the difference should be plain to anyone with a proper academic background to speak of.) Willing to do monstrous things in the name of research. Possesses a dramatic moustache. Due to his upbringing, his cultural and popular knowledges are woefully out of date, leading to anachronistic and ridiculous situations."
    },
    {
      "name": "Dr. Jaime Marlowe",
      "about": "Average researcher, specializing in space-time, extra-dimensional, visual, spatial, and cognitohazardous anomalies. Previously described as \"painfully, painfully, painfully average\", notable more for minor interpersonal incidents and inappropriate outbursts when under stress. Marlowe's profile has slightly increased due to apparent unexplained connections to unrelated anomalous events which only appear to have increased in frequency."
    },
    {
      "name": "Dr. Placeholder McDoctorate",
      "about": "Head of the 'Pataphysics Department. Initially hired by the I.T. department, promoted to Department Head in 1996 for notable performance in the containment of SCP-5241. Promoted to Site Director, then personally requested reassignment to the 'Pataphysics Department. Promoted to Department Head for notable developments in Theoretical 'Pataphysics, then founded the Archetypicals Division. At some point, had his name retroactively abstracted by SCP-INTEGER."
    },
    {
      "name": "Dr. Riven Mercer",
      "about": "Veterinary-focused researcher, second-in-command of Kiryu Labs. Handles personnel allocation for incoming anomalous item caches, often goes on outside assignments. Good with animals, owns a grumpy bearded dragon lizard who lives in the lab."
    },
    {
      "name": "Dr. Katherine Sinclair",
      "about": "Acting head - and one of only two members - of the Occult Studies and Thaumatology division at Site-87 in Sloth's Pit, Wisconsin. Has been involved in numerous incidents, including the assault on Sloth's Pit by the now defunct Group of Interest Satyr's Reign, and the 2014 Christmas Incident. Has burn scars on her forearms from a botched flame ritual."
    },
    {
      "name": "Dr. Johannes Sorts",
      "about": "Memetic specialist and field researcher, with a doctorate in art history. Caucasian, late 30s, unshaven with greying brown hair. Slightly overweight, usually wears a grey cap. Obsessive, cowardly and paranoid in mundane situations, but solid and focused when presented with memetic or information based hazards. Multiple disciplinary reports due to poor choice of action under pressure, including the shooting of a guard while under my influence. Currently under psychiatric evaluation and restricted to safer projects."
    },
    {
      "name": "Dr. Thaddeus Xyank",
      "about": "Presently low-level but extremely significant Foundation researcher. Specializes in temporal anomalies. Somewhat arrogant and long-winded, but considered an up-and-coming genius."
    }
  ],
  "branches": {
    "base": {
      "logo": "https://scp-int.wdfiles.com/local--files/main/scp-logo-en-400.png",
      "about": null
    },
    "pride": {
      "logo": "https://i.kym-cdn.com/photos/images/facebook/001/386/104/41d.png",
      "about": null
    },
    "international": {
      "logo": "https://scp-wiki.wdfiles.com/local--files/scp-international/scp-logo-int.png",
      "about": "The International Translation Archive contains translations of SCP articles, tales, canons and other articles from all the different branches."
    },
    "russian": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-ru-400.png",
      "about": "Фонд SCP существует и действует подпольно и тайно, сдерживая аномалии, чтобы гарантировать нормальное состояние."
    },
    "korean": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-ko-400.png",
      "about": "SCP 재단은 정상을 보장하기 위해 변칙성을 격리하면서 은밀하고 비밀리에 존재하고 운영합니다."
    },
    "chinese": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-cn-400.png",
      "about": "SCP基金会秘密地和秘密地存在和运作，包含异常以确保正常。"
    },
    "french": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-fr-400.png",
      "about": "La Fondation SCP existe et opère clandestinement et secrètement, contenant des anomalies pour assurer la normalité."
    },
    "polish": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-pl-400.png",
      "about": "Fundacja SCP istnieje i działa potajemnie i potajemnie, zawierając anomalie w celu zapewnienia normalności."
    },
    "spanish": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-es-400.png",
      "about": "La Fundación SCP existe y opera de manera clandestina y secreta conteniendo anomalías para asegurar la normalidad."
    },
    "thai": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-th-400.png",
      "about": "สถาบัน SCP ดำรงอยู่และดำเนินการอย่างลับๆ ซ่อนๆ โดยมีความผิดปกติเพื่อให้แน่ใจว่าเป็นเรื่องปกติ"
    },
    "japanese": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-jp-400.png",
      "about": "SCP財団は秘密裏に存在し、秘密裏に運営されており、正常性を確保するための異常が含まれています。"
    },
    "german": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-de-400.png",
      "about": "Die SCP Foundation existiert und operiert heimlich und heimlich und enthält Anomalien, um die Normalität zu gewährleisten."
    },
    "italian": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-it-400.png",
      "about": "La Fondazione SCP esiste e opera in modo clandestino e segreto, contenendo anomalie per garantire la normalità."
    },
    "ukrainian": {
      "logo": "https://scp-wiki.wdfiles.com/local--files/scp-international/scp-logo-ua-400.png",
      "about": "Фонд SCP існує і діє таємно і таємно, містить аномалії для забезпечення нормальності."
    },
    "portuguese": {
      "logo": "https://scp-wiki.wdfiles.com/local--files/scp-international/scp-logo-pt-400.png",
      "about": "A SCP Foundation existe e opera clandestina e secretamente, contendo anomalias para garantir a normalidade."
    },
    "czech": {
      "logo": "https://scp-int.wdfiles.com/local--files/main/scp-logo-cs-400.png",
      "about": "Nadace SCP existuje a působí tajně a tajně a obsahuje anomálie k zajištění normality."
    },
    "traditionalChinese": {
      "logo": "https://scp-int.wdfiles.com/local--files/main/scp-logo-zh-400.png",
      "about": "SCP基金會秘密地和秘密地存在和運作，包含異常以確保正常。"
    }
  },
  "areas": [
    {
      "name": "Area-02",
      "alias": "Armed Reliquary and Containment Area-02",
      "description": "Area-02 is a remote facility whose primary purpose is to contain highly dangerous, hostile, or otherwise hazardous anomalies, including multiple Keter-class objects. In addition to a battalion-strength security detachment, Area-02 is also equipped with multiple nuclear fail-safes as a final option in the case of a catastrophic breach or loss of containment."
    },
    {
      "name": "Area-12",
      "alias": "Biological Research Area-12",
      "description": "Area-12 is a containment and research facility located on remote federal land in the Midwestern United States. Area-12 contains both live specimens of anomalous biological entities as well as samples of biohazardous or otherwise dangerous biological anomalies for study."
    },
    {
      "name": "Area-14",
      "alias": "Armed Biological Containment Area-14",
      "description": "Area-14 is a dedicated containment facility located in the Ruby Mountains of Nevada, USA. Area-14 is primarily used for large-scale, dangerous, and/or hostile anomalous entities and as such is staffed with a regiment-strength security detachment as well as heavy weapons, armored vehicles, and air support."
    },
    {
      "name": "Area-27",
      "alias": "Reliquary Area-27",
      "description": "Area-27 is an underground facility operating beneath the Saint Notre-Dame Cathedral Basilica in Ontario, Canada. Area-27's main purpose is to serve as both headquarters for the Department of Tactical Theology and as emergency quartering in the case of a large-scale K-Class Scenario. The site is also capable of containing primarily religiously-orientated anomalies and the development of theological weaponry."
    },
    {
      "name": "Area-32",
      "alias": "Lunar Area-32",
      "description": "Comprised of several floors beneath the surface of Mare Imbrium and built around the ninth destination point of SCP-120, Lunar Area-32 is a facility used to contain immobile anomalies present on the lunar surface, or anomalies that are significantly less hazardous to contain beyond Earth’s atmosphere."
    },
    {
      "name": "Area-179",
      "alias": null,
      "description": "Formerly Provisional Containment Area-179, created for the containment of SCP-1179, this facility is located in Pennsylvania, United States. In addition to storing and researching recovered anomalous objects, the Area also supervises nearby Sites such as Site-5076-1."
    }
  ],
  "sites": [
    {
      "name": "Site-01",
      "alias": "Protected Site-01, Overwatch HQ",
      "description": "Site-01 is a safe zone that acts as a data backup for all major Foundation facilities worldwide as well as a secure meeting facility for O5 Council members and other high-ranking Foundation personnel. As with all Protected Sites, no anomalies of any kind are allowed in proximity of Site-01. The location of Site-01 is strictly classified."
    },
    {
      "name": "Site-06-3",
      "alias": "Humanoid Containment Site-06-3",
      "description": "Site-06-3 is a containment facility that is currently located in the Lorraine region of France. Formerly located in the United States (Site-06) and Germany (Site-06-2), this facility was moved to its current location following the decommission and demolition of the aforementioned previous facilities. Site-06-3 employs a multi-national staff and houses numerous low-risk human and humanoid entities, most notably several former Foundation personnel. Objects contained at this facility include: SCP-069, SCP-706, SCP-1669, and SCP-1702."
    },
    {
      "name": "Site-11",
      "alias": null,
      "description": "Site-11 is a large-scale Foundation facility located in the mid-western United States consisting of an entire self-sustaining community including residential housing, commercial businesses, and industrial/manufacturing facilities as well as an extensive underground containment and research complex. The Foundation maintains strict tracking of all personnel and civilians within Site-11 and as such, the facility is often used as a safe location for personnel requiring additional security and protection. Objects contained at this facility include: SCP-986 and SCP-4332."
    },
    {
      "name": "Site-15",
      "alias": null,
      "description": "Site-15 is a Foundation facility located on the United States west coast that specializes in the containment and study of electric, electronic, and computer-based anomalies. The primary storage and containment wings of Site-15 are electromagnetically isolated to prevent any interaction between anomalous electronics and the outside world. Objects contained at this facility include: SCP-079, SCP-719, SCP-896, and SCP-5241."
    },
    {
      "name": "Site-17",
      "alias": null,
      "description": "Site-17 is a major Foundation facility primarily focused on the containment and study of low-risk humanoid entities. As per this focus, Site-17's permanent site staff includes a large number of medical and psychiatric professionals. Objects contained at this facility include: SCP-073, SCP-105, SCP-114, SCP-191, SCP-343, SCP-1005, SCP-2020, SCP-2240, SCP-4051, and SCP-4820."
    },
    {
      "name": "Site-19",
      "alias": null,
      "description": "Site-19 is the largest Foundation facility currently in operation, housing hundreds of Safe- and Euclid-class anomalies. Objects contained at this facility include: SCP-055, SCP-131, SCP-173, SCP-387, SCP-668, SCP-931, SCP-1123, SCP-2598, SCP-3107, SCP-4057, SCP-6096, and SCP-6186."
    },
    {
      "name": "Site-23",
      "alias": null,
      "description": "Site-23 houses a number of metamorphic or transfiguring biological objects and entities. Objects contained at this facility include: SCP-038 and SCP-113."
    },
    {
      "name": "Site-28",
      "alias": "Provisional Containment Site-28",
      "description": "Site-28 is located in the SoHo neighborhood of New York City, New York, United States, and was initially established to contain SCP-602. Since then, this facility has been expanded into a full-fledged Foundation containment facility specializing in anomalous artwork and artifacts. Objects contained at this facility also include: SCP-1229 and SCP-1388."
    },
    {
      "name": "Site-36",
      "alias": null,
      "description": "Formerly Provisional Site-36, this facility is located in India and serves as both a regional containment site as well as a support facility for field personnel operating in the area. Objects contained at this facility include: SCP-089 and SCP-1135."
    },
    {
      "name": "Site-38",
      "alias": null,
      "description": "Site-38 is a containment site in rural Tennessee, United States, primarily focused on the study of Group of Interest 388-Alpha, \"Alexylva University\". Objects contained at this facility include: SCP-961, SCP-1080, SCP-1893, and SCP-1082."
    },
    {
      "name": "Site-43",
      "alias": "Research and Containment Site-43",
      "description": "Site-43 is situated on the southeastern shore of Lake Huron, one kilometre below sea level in Ipperwash Provincial Park, Ontario, Canada. It comprises containment wings for low- to medium-risk anomalies, research divisions arranged in a pseudoacademic structure, and abatement refineries for esoteric substances. Objects contained at this facility include: SCP-5056, SCP-5109, SCP-5243, SCP-5382, SCP-5494 and SCP-5520."
    },
    {
      "name": "Site-45",
      "alias": "Research Site-45",
      "description": "Site-45 is a clandestine armed research facility located off the coast of Western Australia under the Indian Ocean. Here, research and temporary containment of anomalous objects are conducted under guard and away from a civilian populace. Site-45 also serves as a staging point for MTF operations within the Pacific and Indian Oceans."
    },
    {
      "name": "Site-54",
      "alias": "Integrated Containment Site-54",
      "description": "Site-54 is a containment facility located in, around, and beneath the city of Leipzig, Germany. Specialising in the containment of those anomalies deemed 'partially uncontainable', the Site's staff are heavily armed, highly trained, and permanently on edge. Featuring an extensive rapid-response vehicle hangar (with transport both normal and anomalous) and wide array of holding cells, Site-54 is generally considered to be the Foundation site both best-prepared for the worst to happen, and the location at which said worst is most likely to occur."
    },
    {
      "name": "Site-56",
      "alias": null,
      "description": "Established in the Black Rock Desert of Nevada, May 1972, Site-56 was intended to serve as the base of operations for the enactment of the Kraken Protocol within the American Southwest. Over time, Site-56 took on increasing responsibilities, eventually transitioning into a full-fledged containment and administration site, responsible for select offsite anomalies such as SCP-5994 and SCP-5952. However, recent Overwatch audits suggest its expansion has surpassed its budgetary and logistical limitations, and personnel frequently cite its \"labyrinthine\" structure as a detriment to day-to-day operations."
    },
    {
      "name": "Site-62",
      "alias": "Dimensional Site-62",
      "description": "Formerly Provisional Site-62, this facility was initially built around SCP-004. The facility was eventually expanded to house other objects requiring high-security Dimensional Containment, back up critical Foundation data, and provide an external reference point for detecting and reporting reality shifts."
    },
    {
      "name": "Site-64",
      "alias": "Storage Site-64",
      "description": "Located approximately 0.5 km below Forest Park, northwest of Portland, Oregon, Site-64 is primarily a low to medium security storage facility, and is mainly used to house minor anomalous items, and Safe/Euclid class objects confiscated from the anomalous art community and anomalous electronics industry based in Portland and Vancouver."
    },
    {
      "name": "Site-66",
      "alias": "Biological Containment Site-66, Bio-Site-66",
      "description": "Originally built as Provisional Site-66 around SCP-1479, this facility was eventually expanded to contain and research biological and organic anomalies."
    },
    {
      "name": "Site-73",
      "alias": null,
      "description": "Site-73 is a facility converted from an office building in Texas, designed for the containment and study of inert, Safe-class, or otherwise benign anomalous objects, including the analysis and storage of deceased specimens. The Site also manages satellite facilities such as Storage Location 73-E."
    },
    {
      "name": "Site-76",
      "alias": "Reliquary Research and Containment Site-76",
      "description": "Site-76 is a major containment site located in the United States of America, housing a large number of anomalous objects presumed to be man-made."
    },
    {
      "name": "Site-77",
      "alias": "Storage Site-77",
      "description": "One of the Foundation's largest storage facilities, Site-77 was initially built in 1924 in southern Italy and served as an Italian facility until the second World War, when it was damaged by Allied bombing and subsequently destroyed by a containment breach. Site-77 was taken over by the Foundation and rebuilt in 1944."
    },
    {
      "name": "Site-81",
      "alias": "Research and Containment Site-81",
      "description": "Located beneath Lake Monroe in Bloomington, Indiana, Site-81 is the primary hub for anomalous activity in the United States Midwest. Initially founded as an expeditionary site to monitor SCP-2812, Site-81 has since grown to become one of the largest sites in the region. Located within is the Foundation's Classifications Department, as well as a massive Mobile Task Force deployment outpost."
    },
    {
      "name": "Site-87",
      "alias": "Research Site-87",
      "description": "Site-87 is a research site, established in September 1976 to oversee containment of a minor anomaly in the town of Sloth's Pit, Wisconsin, USA (pop. 17,291 as of 2020). In that same month, researchers discovered that Sloth's Pit was a highly active Nexus, an inhabited zone with a high concentration of anomalous phenomena. Site-87's civilian front is S & C Plastics, and it possesses its own Task Force— Sigma-10, \"The Sloth's Arm\", for containment of anomalies within city limits. Citizens of Sloth's Pit are considered E-Class Personnel, and have knowledge of the Foundation insofar as 'a research organization is monitoring the town'. The primary goal of Site-87 is to research and catalog anomalies in Sloth's Pit, such as SCP-4040; however, it is also the headquarters of the Department of Multi-Universal Affairs, Nexological Studies, and serves as regional command for the Midwestern USA."
    },
    {
      "name": "Site-88",
      "alias": "Humanoid Containment Site-88",
      "description": "Humanoid Containment Site-88 is located in central Baldwin County, Alabama. The site houses many humanoid SCP objects, along with several high value anomalous items. While research is not a primary focus of the site, the site has the capacity for it, and has seen many research projects related to its occupants."
    },
    {
      "name": "Site-91",
      "alias": "Xenobiological Research and Containment Site-91",
      "description": "Established as Provisional Site-91 in 1986 shortly after the discovery of SCP-4612 in the substructure below a manor known as Eckhart House in Yorkshire, England. The Site was fully commissioned by Overwatch command the following year and was expanded into a full containment facility, research lab and library focused on the containment and analysis of xenobiological specimens, with a secondary focus of the development of thaumaturgical countermeasures and containment of thaumaturgical artifacts. Serves as the primary station for MTF-Beta-777 (“Hecate’s Spear”)."
    },
    {
      "name": "Site-95",
      "alias": "Biological Research and Containment Site-95, Bio-Site-95",
      "description": "Site-95 is a small but well equipped site used to contain and research biological and organic anomalies."
    },
    {
      "name": "Site-98",
      "alias": "Dimensional Research Site-98",
      "description": "Site-98 serves as the forefront of Foundation technology. Stationed in the city of Philadelphia, Site-98 is responsible for the bleeding-edge technological developments and innovations that help the Foundation contain, analyze, and research the various anomalous threats that endanger the world. Site-98 is often considered as the most technologically-advanced research facility in the Foundation."
    },
    {
      "name": "Site-103",
      "alias": "Biological Containment Site-103",
      "description": "Site-103 has extensive facilities for the containment and research of plant and plant-based anomalies."
    },
    {
      "name": "Site-104",
      "alias": "Biological Research Site-104",
      "description": "Formerly Provisional Site-104, this facility is operated under the guise of a wildlife preserve and is designed for study of and experimentation on biological anomalies with wide-ranging effects."
    },
    {
      "name": "Site-120",
      "alias": "Research and Reliquary Dimensional Containment Site-120",
      "description": "Built atop SCP-5292 near the city of Częstochowa, Poland, Site-120 specializes in thaumaturgic, ontokinetic, and theological anomalies, utilizing unusual containment methods to deal with them. Being one of the few Sites actively encouraging the usage of the anomalous, it acts as the main observation point for the Free Port of Esterberg."
    },
    {
      "name": "Site-228",
      "alias": null,
      "description": "Site-228 is a major Central European containment facility, and one of the first Foundation facilities to be located in Hungary. It was originally designed for humanoid containment, but following modernization it is now also capable of containing sapient non-humanoid entities."
    },
    {
      "name": "Site-246",
      "alias": null,
      "description": "Site-246 is located beneath Lake Superior, and was formerly the regional command of the American Midwest prior to its relocation to Site-87. The Site was used as the Headquarters for MTF-Delta-3 (\"Solomon's Hand\") as part of the Special Asset Task Force Program, but the Task Force was disbanded following the defection of the special asset. The Site is now only used as a training center and underwater research facility."
    }
  ],
  "siteCategories": {},
  "timestamps": {
    "date": "2/26/2022, 7:57:15 PM",
    "unix": 1645905435
  }
}
```