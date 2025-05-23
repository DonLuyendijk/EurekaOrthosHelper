export const enemies = [
  {
    name: 'Grenade',
    image: '/enemies/grenade.jpg',
    notes: '<b>Big Burst:</b> Small point-blank AoE.',
    startFloor: 3,
    endFloor: 5,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Behemoth',
    image: '/enemies/behemoth.jpg',
    notes: '<b>Wild Horn:</b> Knockback<br><b>Ecliptic Meteor:</b> Huge roomwide enrage used at 40% HP. Can be LoS-ed.',
    startFloor: 5,
    endFloor: 7,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Sawtooth',
    image: '/enemies/sawtooth.jpg',
    notes: '<b>Mean Thrash:</b> Small rear cone. Used if someone is behind.',
    startFloor: 18,
    endFloor: 19,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthodemolisher',
    image: '/enemies/demolisher.jpg',
    notes: '<b>Self-detonate:</b> Large self-destruct used at 30% HP. Can be LoS-ed or skipped by killing.',
    startFloor: 21,
    endFloor: 22,
    mainlyDangerousWhenSolo: true
  },
  {
    name: 'Orthoknight',
    image: '/enemies/knight.jpg',
    notes: '<b>Electromagnetism:</b> Draw-in. Quickly followed by a small point-blank AoE. Get away after being sucked in.',
    startFloor: 21,
    endFloor: 22,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Lesser dragon (Patrol)',
    image: '/enemies/lesser-dragon.jpg',
    notes: '<b>Swinge:</b> Huge cone AoE.',
    startFloor: 24,
    endFloor: 26,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Vanara (Patrol)',
    image: '/enemies/vanara.jpg',
    notes: '<b>Scythe Tail:</b> Small point-blank AoE. Follows up with a lethal combo if you get hit.',
    startFloor: 27,
    endFloor: 29,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthoiksalion',
    image: '/enemies/iksalion.jpg',
    notes: '<b>Tailwind:</b> Grants a damage up buff to another enemy.',
    startFloor: 31,
    endFloor: 33,
    mainlyDangerousWhenSolo: true,
  },
  {
    name: 'Orthospider',
    image: '/enemies/spider.jpg',
    notes: '<b>Particle Collision:</b> Small point-blank AoE. Follows up with a lethal attack if you get hit.',
    startFloor: 32,
    endFloor: 35,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthotaur',
    image: '/enemies/taur.jpg',
    notes: '<b>111-tonze Swing:</b> Small point-blank AoE.<br><b>11-tonze Swipe:</b> Medium cone AoE.',
    startFloor: 35,
    endFloor: 38,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthochimera',
    image: '/enemies/chimera.jpg',
    notes: '<b>The Ram\'s Voice:</b> Medium point-blank AoE.<br><b>The Dragon\'s Voice:</b> Large donut AoE.',
    startFloor: 36,
    endFloor: 39,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthoray (Patrol)',
    image: '/enemies/ray.jpg',
    notes: '<b>Forearming:</b> Huge 180 degree front cone AoE.<br><b>Atmospheric Displacement:</b> Medium point-blank AoE.',
    startFloor: 36,
    endFloor: 39,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthoempuse',
    image: '/enemies/empuse.jpg',
    notes: '<b>Kneeling Snath:</b> Knockback. Don\'t get knocked into more enemies or traps .',
    startFloor: 37,
    endFloor: 39,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Bergthurs',
    image: '/enemies/bergthurs.jpg',
    notes: '<b>Elbow Drop:</b> Fast small rear cone AoE. Only used if someone is behind.',
    startFloor: 41,
    endFloor: 44,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Acheron (Patrol)',
    image: '/enemies/acheron.jpg',
    notes: '<b>Quake:</b> Huge roomwide AoE. Can be LoS-ed or interrupted.',
    startFloor: 41,
    endFloor: 44,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Spriggan',
    image: '/enemies/spriggan.jpg',
    notes: '<b>Haste:</b> Grants haste to self and will do high damage autos.',
    startFloor: 42,
    endFloor: 45,
    mainlyDangerousWhenSolo: true,
  },
  {
    name: 'Hedetet',
    image: '/enemies/hedetet.jpg',
    notes: '<b>Sticky Web:</b> Stacking slow. Will ruin your parse.',
    startFloor: 43,
    endFloor: 46,
    mainlyDangerousWhenSolo: true,
  },
  {
    name: 'Kelpie (Patrol)',
    image: '/enemies/kelpie.jpg',
    notes: '<b>Gallop:</b> Dash to a player. Can be LoS-ed, but not necessary. Followed by <b>Bloody Puddle.<br>Bloody Puddle:</b> Medium point-blank AoE.',
    startFloor: 44,
    endFloor: 46,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Goobbue',
    image: '/enemies/goobbue.jpg',
    notes: '<b>Inhale:</b> Draw-in. Followed by a fast frontal cone AoE. Pay attention to the draw-in, then run behind.',
    startFloor: 45,
    endFloor: 47,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Mudman',
    image: '/enemies/mudman.jpg',
    notes: '<b>Stump:</b> AoE heavy. Do not pull with other enemies.',
    startFloor: 46,
    endFloor: 49,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Hoarhound',
    image: '/enemies/hoarhound.jpg',
    notes: '<b>Abyssal Cry:</b> Huge roomwide AoE followed by instant kill. Can be LoS-ed.',
    startFloor: 46,
    endFloor: 49,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Gelato',
    image: '/enemies/gelato.jpg',
    notes: '<b>Explosion:</b> Huge roomwide enrage used at 30% HP. Can be LoS-ed or skipped by killing.',
    startFloor: 47,
    endFloor: 49,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Ice Sprite',
    image: '/enemies/icesprite.jpg',
    notes: '<b>Hypothermal Combustion:</b> Small point-blank AoE used after death. Do not forget.',
    startFloor: 51,
    endFloor: 59,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Ymir',
    image: '/enemies/ymir.jpg',
    notes: '<b>Gelid Charge:</b> Counterattacks. Do not hit with physical attacks, including auto-attacks.',
    startFloor: 51,
    endFloor: 54,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Rockfin (Patrol)',
    image: '/enemies/rockfin.jpg',
    notes: '<b>Aqua Spear:</b> Dashes towards a player. Needs to be LoS-ed to survive.',
    startFloor: 51,
    endFloor: 54,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Yabby (Patrol)',
    image: '/enemies/yabby.jpg',
    notes: '<b>Scuttling Skewer:</b> Inflicts heavy. Followed by <b>Tail Screw.<br>Tail Screw:</b> Small AoE which does 99% of your HP. Move away as soon as you get heavy to avoid this.',
    startFloor: 54,
    endFloor: 56,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Big Claw',
    image: '/enemies/bigclaw.jpg',
    notes: '<b>Crab Dribble:</b> Very fast small rear cone AoE. Only used if someone is behind.',
    startFloor: 55,
    endFloor: 58,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Zaratan',
    image: '/enemies/zaratan.jpg',
    notes: '<b>Sewer Water:</b> Medium 180 degree front cone AoE followed by a large 180 medium rear cone AoE. Easiest to dodge when close.',
    startFloor: 55,
    endFloor: 58,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Monk',
    image: '/enemies/monk.jpg',
    notes: '<b>Sucker:</b> Draw-in. Followed by <b>Water III.<br>Water III:</b> Medium point-blank AoE. Run out immediately after being sucked in.',
    startFloor: 55,
    endFloor: 58,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Stingray',
    image: '/enemies/stingray.jpg',
    notes: '<b>Body Slam:</b> Instant knockback point-blank AoE. Knocks you in the direction you are walking. No cast bar.<br><b>Electric Whorl:</b> Huge donut AoE. Cannot be LoS-ed.<br><b>Expulsion:</b> Medium point-blank AoE.',
    startFloor: 57,
    endFloor: 59,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Diplocaulus',
    image: '/enemies/diplocaulus.jpg',
    notes: '<b>Peculiar Light:</b> Inflicts vulnerability up on players and evasion up on enemies. Do not pull with other enemies.',
    startFloor: 61,
    endFloor: 64,
    mainlyDangerousWhenSolo: true
  },
  {
    name: 'Cobra (Patrol)',
    image: '/enemies/cobra.jpg',
    notes: '<b>Whip Back:</b> Fast rear cone AoE. Only used if someone is behind.',
    startFloor: 61,
    endFloor: 64,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Drake',
    image: '/enemies/drake.jpg',
    notes: '<b>Smoldering Scales:</b> Counterattacks. Do not hit with physical attacks, including auto-attacks.',
    startFloor: 64,
    endFloor: 66,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Palleon',
    image: '/enemies/palleon.jpg',
    notes: '<b>Sticky Tongue:</b> Draw-in. Followed by <b>Body Press.<br>Body Press:</b> Small point-blank AoE. Run out after being drawn in. If stunned, this will be used after being unstunned.',
    startFloor: 67,
    endFloor: 69,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthoninja (Patrol)',
    image: '/enemies/ninja.jpg',
    notes: '<b>Assassinate:</b> Instantly kills players who are below 20% HP.',
    startFloor: 61,
    endFloor: 69,
    mainlyDangerousWhenSolo: true
  },
  {
    name: '<u>Gowrow (Patrol) (Extra dangerous)</u>',
    image: '/enemies/gowrow.jpg',
    notes: '<b>Ripper Claw:</b> Small frontal cone AoE without castbar. Used when he brings his arm back.<br><b>Tail Smash:</b> Small rear cone AoE without castbar. Used when he raises his tail.',
    startFloor: 63,
    endFloor: 66,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Falak',
    image: '/enemies/falak.jpg',
    notes: '<b>Electric Cachexia:</b> Huge donut AoE. Used only if someone is far.',
    startFloor: 67,
    endFloor: 69,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Toco Toco',
    image: '/enemies/tocotoco.jpg',
    notes: '<b>Slowcall:</b> Small frontal cone AoE. Inflicts slow.',
    startFloor: 71,
    endFloor: 73,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Primelephas',
    image: '/enemies/primelephas.jpg',
    notes: '<b>Rout:</b> Dashes to a player. Followed by <b>Rear.<br>Rear:</b> Small point-blank AoE. If stunned, this will be used after being unstunned.',
    startFloor: 71,
    endFloor: 73,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Coeurl',
    image: '/enemies/coeurl.jpg',
    notes: '<b>Wide Blaster:</b> Huge, wide frontal cone AoE.<br><b>Tail Swing:</b> Huge (but not as wide) rear cone AoE. Only used if someone is behind.',
    startFloor: 71,
    endFloor: 74,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Kunoichi (Patrol)',
    image: '/enemies/kunoichi.jpg',
    notes: '<b>Assassinate:</b> Instantly kills players who are below 20% HP.',
    startFloor: 71,
    endFloor: 79,
    mainlyDangerousWhenSolo: true
  },
  {
    name: '<u>Thunderbeast (Patrol) (Extra dangerous)</u>',
    image: '/enemies/thunderbeast.jpg',
    notes: '<b>Scythe Tail:</b> Small point-blank AoE without castbar. Used after pausing for a bit. Pay extra attention to this.<br><b>Spark:</b> Large donut AoE. Only used if someone is far.',
    startFloor: 73,
    endFloor: 76,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Gulo Gulo (Extra dangerous)</u>',
    image: '/enemies/gulogulo.jpg',
    notes: '<b>The Killing Paw:</b> Frontal cone AoE. Will repeat this attack once afterwards. May \'store\' this attack and use it later when interrupted, stunned or slowed. Can allegedly also store the attack without CC effects.',
    startFloor: 73,
    endFloor: 76,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Kargas',
    image: '/enemies/kargas.jpg',
    notes: '<b>Winds of Winter:</b> Huge roomwide AoE used after approximately 30 seconds. LoS or stun to survive.',
    startFloor: 75,
    endFloor: 77,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Sasquatch (Extra dangerous)</u>',
    image: '/enemies/sasquatch.jpg',
    notes: '<b>Ripe Banana & Chest Thump:</b> Enormous point-blank AoE used only out of combat. LoS or be very far away to survive. Be extremely careful when navigating around and pulling this enemy.<br><b>Streak:</b> Knockback, used on pull.',
    startFloor: 76,
    endFloor: 79,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Flamebeast',
    image: '/enemies/flamebeast.jpg',
    notes: '<b>Blistering Roar:</b> Huge, wide line AoE.',
    startFloor: 77,
    endFloor: 79,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Skatene',
    image: '/enemies/skatene.jpg',
    notes: '<b>Chirp:</b> Medium point-blank AoE which inflicts sleep. Will follow up with a lethal attack if you get hit.',
    startFloor: 77,
    endFloor: 79,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Corse (Patrol)',
    image: '/enemies/corse.jpg',
    notes: '<b>Glass Punch:</b> Small frontal cone AoE.',
    startFloor: 81,
    endFloor: 84,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Persona',
    image: '/enemies/persona.jpg',
    notes: '<b>Dark II:</b> Medium frontal cone AoE. Telegraphed, but it might get you if you run away.',
    startFloor: 81,
    endFloor: 83,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Gourmand (Patrol)',
    image: '/enemies/gourmand.jpg',
    notes: '<b>Inhale:</b> Draw-in. Followed by a fast frontal cone AoE. Pay attention to the draw-in, then run behind.',
    startFloor: 84,
    endFloor: 86,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Catoblepas (Extra dangerous)</u>',
    image: '/enemies/catoblepas.jpg',
    notes: '<b>Demon Eye:</b> Room-wide gaze which inflicts a 20 second petrify. Also used out of combat, be extra careful.',
    startFloor: 81,
    endFloor: 84,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Hecteyes',
    image: '/enemies/hecteyes.jpg',
    notes: '<b>Catharsis:</b> Enormous point-blank AoE, longer than max cast range. Be no closer than max melee so that you have time to run out.<br><b>Hex Eye:</b> Gaze',
    startFloor: 81,
    endFloor: 83,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Pudding',
    image: '/enemies/pudding.jpg',
    notes: '<b>Dark II:</b> Enormous frontal cone AoE. Be close so you can easily dodge it.',
    startFloor: 84,
    endFloor: 86,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Spartoi',
    image: '/enemies/spartoi.jpg',
    notes: '<b>Umbra Smash:</b> Jumps to a random player. Followed by <b>Triple Trial.<br>Triple Trial:</b> Medium frontal cone AoE.',
    startFloor: 85,
    endFloor: 88,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Specter (Patrol) (Extra dangerous)</u>',
    image: '/enemies/specter.jpg',
    notes: '<b>Left Sweep:</b> Huge 210 degree AoE to the left.<br><b>Right Sweep:</b> Huge 210 degree AoE to the right.<br><b>Surrounding Burst:</b> Large point-blank AoE.<br><b>Ringing Burst:</b> Huge donut AoE.<br>Alternates sweeps & bursts. Stay close for easier dodging and run away for surrounding burst.',
    startFloor: 86,
    endFloor: 89,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Wraith (Extra dangerous)</u>',
    image: '/enemies/wraith.jpg',
    notes: '<b>Scream:</b> Enormous point-blank AoE. Run away when you see the cast and do not stop until you see the telegraph and you are far enough.',
    startFloor: 86,
    endFloor: 89,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Pegasus',
    image: '/enemies/pegasus.jpg',
    notes: '<b>Gallop:</b> Dash to a player. Can be LoS-ed, but not necessary. Followed by <b>Nicker.<br>Nicker:</b> Large point-blank AoE.<br><b>Rear Hoof:</b> Knockback.',
    startFloor: 86,
    endFloor: 89,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Ahriman',
    image: '/enemies/ahriman.jpg',
    notes: '<b>Blustering Blink:</b> Line AoE. Telegraphed, but large.',
    startFloor: 87,
    endFloor: 89,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Mining Drone',
    image: '/enemies/miningdrone.jpg',
    notes: '<b>Run Amok:</b> 4 knockbacks Followed by <b>Aetherochemical Cannon.<br>Aetherochemical Cannon: </b>Huge 180 degree cone AoE.<br>Constantly alternates these attacks.',
    startFloor: 91,
    endFloor: 93,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Orthosystem γ (Patrol) (Extra dangerous)</u>',
    image: '/enemies/systemy.jpg',
    notes: '<b>High Voltage:</b> Enormous point-blank AoE, longer than max cast range. Can be interrupted.<br><b>Repelling cannons: </b> Medium point-blank AoE.<br><b>Ring Cannon:</b> Large donut AoE.',
    startFloor: 91,
    endFloor: 94,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthosystem α',
    image: '/enemies/systema.jpg',
    notes: '<b>Aetherochemical Laser α:</b> Large frontal cone AoE.',
    startFloor: 91,
    endFloor: 93,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthodrone',
    image: '/enemies/drone.jpg',
    notes: '<b>Self-detonate:</b> Small point-blank AoE used after death. Do not forget.',
    startFloor: 91,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Motherbit',
    image: '/enemies/motherbit.jpg',
    notes: '<b>Citadel Buster:</b> Frontal line AoE. Make sure you know where the front is, as it can be difficult to see.',
    startFloor: 93,
    endFloor: 95,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Servomechanical Orthotaur (Patrol)',
    image: '/enemies/mechanicaltaur.jpg',
    notes: '<b>32-tonze Swipe:</b> Huge cone AoE.<br><b>Zoom In:</b> Dashes at a player. Followed by <b>128-tonze Swing.<br>128-tonze Swing:</b> Medium point-blank AoE.',
    startFloor: 93,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Servomechanical Orthochimera (Patrol)</u>',
    image: '/enemies/mechanicalchimera.jpg',
    notes: '<b>The Ram\'s Voice:</b> Medium point-blank AoE.<br><b>The Dragon\'s Voice:</b> Large donut AoE.<br><b>The Dragon\'s Breath:</b> Huge cone AoE to front and left.<br><b>Engulfing Ice:</b> Huge cone AoE to front and right.<br><b>The Scorpion\'s Sting:</b> Small rear cone AoE.<br>Stay behind. Run out for Ram\'s voice and to the side for Scorpion\'s sting.',
    startFloor: 95,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Mithridates',
    image: '/enemies/mithridates.jpg',
    notes: '<b>Laserblade:</b> Huge 270 degree cone AoE.',
    startFloor: 95,
    endFloor: 97,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Sphinx',
    image: '/enemies/sphinx.jpg',
    notes: '<b>Swinge:</b> Large cone AoE.',
    startFloor: 94,
    endFloor: 96,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Orthonaught',
    image: '/enemies/naught.jpg',
    notes: '<b>Rotoswipe:</b> Short, wide cone AoE.',
    startFloor: 96,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Zaghnal (Extra dangerous)</u>',
    image: '/enemies/zaghnal.jpg',
    notes: '<b>Beastly Roar:</b> Enormous point-blank AoE used only out of combat. Be very far away to survive. Be extremely careful when navigating around and pulling this enemy.<br><b>Pounce Errant:</b> Knockbacks other nearby players, used on pull.',
    startFloor: 93,
    endFloor: 95,
    mainlyDangerousWhenSolo: false
  },
  {
    name: 'Durga',
    image: '/enemies/durga.jpg',
    notes: '<b>Diffusion Ray:</b> Large cone AoE. Stay close for easier dodging.<br><b>Brainjack:</b> Unavoidable confusion.',
    startFloor: 96,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
  {
    name: '<u>Fitter (Extra dangerous)</u>',
    image: '/enemies/fitter.jpg',
    notes: '<b>Unholy:</b> Enormous point-blank AoE used only out of combat. Be very far away to survive. Be extremely careful when navigating around and pulling this enemy.<br><b>Might be bugged & could have a hidden cast bar when Lethargy is active.</b>',
    startFloor: 96,
    endFloor: 98,
    mainlyDangerousWhenSolo: false
  },
];