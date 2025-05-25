export const bosses = {
    '10': `
        <h1>Gancanagh</h1>
        <img width=364 height=208 src="bosses/gancanagh.jpg"/><br>
        <b>Authoritative Shriek:</b> Watch electrified mandragoras. These will do cirle AoEs. Dodge these.<br>
        <b>Mandrastorm:</b> Proximity AoE. Be around 1.5 squares away from the boss.<br>
        After <b>Mandrastorm</b>, mandragoras get marked with a 1, 2 or 3 marker. Dodge from a higher number to a lower number.<br><br>
        AoE size example<br>
        <img width=400 height=400 src="bosses/gancanagh-arena-1.jpg"/>
    `,
    '20': `
        <h1>Cloning Node</h1>
        <img width=347 height=208 src="bosses/cloningnode.jpg"/><br>
        <b>Offensive command:</b> Tethers dragons. Tethered dragons will use <b>Flame Breath</b>, a cone AoE.<br>
        Initial pattern: Y shape. Move next to a dragon that does not have a tethered dragon opposite of it.<br>
        <img width=300 height=300 src="bosses/cloningnode-arena-1.jpg"/>
        <img width=300 height=300 src="bosses/cloningnode-arena-2.jpg"/><br><br>
        Following patterns: Move to the gap. Then, move to where the lone tether was.<br>
        <img width=300 height=300 src="bosses/cloningnode-arena-3.jpg"/>
        <img width=300 height=300 src="bosses/cloningnode-arena-4.jpg"/>
        <img width=300 height=300 src="bosses/cloningnode-arena-5.jpg"/>
        <img width=300 height=300 src="bosses/cloningnode-arena-6.jpg"/><br>
    `,
    '30': `
        <h1>Tiamat Clone</h1>
        <img width=581 height=222 src="bosses/tiamatclone.jpg"/><br>
        <b>Creature of Darkness:</b> Spawns adds that move to the back of the arena, with two safe spots.<br>
        <b>Dark Wyrmtail:</b> Cleaves the center and spawns adds that move from the center to the sides.<br>
        <b>Dark Wyrmwing:</b> Cleaves the sides and spawns adds that move from the sides to the other side.<br>
        <b>Dark Megaflare:</b> Dodge AoEs. AoEs spawn adds which you need to dodge together with the AoEs.<br>
        <b>Whei Morn:</b> If targeted, wait for an AoE to spawn under you. Then, move away to dodge the chasing four hits.<br><br>
        Dark Wyrmtail and Dark Wyrmwing<br>
        <img width=300 height=300 src="bosses/tiamatclone-arena-1.jpg"/>
        <img width=300 height=300 src="bosses/tiamatclone-arena-2.jpg"/>
    `,
    '40': `
        <h1>Twintania Clone</h1>
        <img width=448 height=203 src="bosses/twintaniaclone.jpg"/><br>
        <b>Twister:</b> Spawns a small tornado under everyone. Kills you & everyone near you if touched. Be moving when the cast ends and shortly after it has ended.<br><br>
        <b>Meracydian Cyclone:</b> Spawns lingering AoEs. Will periodically drop another AoE under each player (4x) and follow with a knockback from the center.<br>
        Drop the AoEs in a way that leaves space for the knockback. You can stack two AoEs. (Drop one, wait for another to drop on top of it and then move)<br><br>
        <b>Twisting Dive:</b> Twintania moves to the outside of the arena and dashes through the center with a large, wide line AoE. A twister is dropped in the meantime, so be moving when the cast completes.<br><br>
        An example <b>Meracydian Cyclone</b> pattern and a way to dodge <b>Twisting Dive</b><br>
        <img width=300 height=300 src="bosses/twintaniaclone-arena-1.jpg"/>
        <img width=300 height=300 src="bosses/twintaniaclone-arena-2.jpg"/>
    `,
    '50': `
        <h1>Servomechanical Chimera 14X</h1>
        <img width=360 height=190 src="bosses/chimera.jpg"/><br>
        <b>Songs of Ice and Thunder:</b> <b>The Ram's Voice</b> (medium point-blank AoE) followed by <b>The Dragon's Voice</b> (large donut AoE)<br>
        <b>Songs of Thunder and Ice:</b> Similar to <b>Songs of Ice and Thunder</b>, but reversed<br><br>
        <b>Leftbreathed Thunder:</b> Large 180 degree AoE to the left. You can ignore the element.<br>
        <b>Rightbreathed Thunder:</b> Similar to <b>Leftbreathed Thunder</b>, but to the right. You can ignore the element.<br><br>
        <b>Thunderous Cold:</b> Proximity tether to a random player. Dashes to this player, and follows with <b>The Dragon's voice</b> and <b>The Ram's Voice</b>.<br>
        <b>Cold Thunder:</b> Similar to <b>Thunderous Cold</b>, but reversed.<br><br>
        <b>Cacophony:</b> Spawns an orb that tethers to each party member. Avoid colliding with the orb. The orb will detonate by itself after 9 seconds.<br>
    `,
    '60': `
        <h1>Servomechanical Minotaur 16</h1>
        <img width=340 height=195 src="bosses/minotaur.jpg"/><br>
        <b>Octuple Swipe:</b> Telegraphs eight swipes and uses the swipes in the shown order afterwards.<br>
        You can pick two swipe spots and preposition between these. Then, you only have to focus on two cleaves.<br><br>
        <b>Bullish Swing:</b> Large point-blank AoE.<br>
        <b>Bullish Swipe:</b> Large 90 degree cone AoE.<br>
        <b>Disorienting Groan:</b> Significant knockback from the center.<br>
        <b>Thundercall:</b> Spawns orbs that explode in a small point-blank AoE when the next <b>Octuple Swipe</b> starts.
    `,
    '70': `
        <h1>Aeturna</h1>
        <img width=360 height=210 src="bosses/aeturna.jpg"/><br>
        <b>Steel Claw:</b> Tankbuster.<br>
        <b>Ferocity:</b> Proximity tether to a random player. The boss will dash to this player.<br>
        <b>Preternatural Turn:</b> Point blank if not glowing. Donut if glowing blue.<br>
        <b>Roar:</b> Spawns crystals, which will do an attack together with the next <b>Preternatural Turn</b>.<br><br>
        If the boss does a point-blank AoE, the crystals will do an outward cone AoE at the same time.<br>
        If the boss does a donut AoE, the crystals will instead do a point-blank AoE at the same time.<br><br>
        Safespots for the point-blank AoE (not glowing) and the donut AoE (glowing)<br>
        <img width=300 height=300 src="bosses/aeturna-arena-1.jpg" />
        <img width=300 height=300 src="bosses/aeturna-arena-2.jpg" />
    `,
    '80': `
        <h1>Proto-Kaliya</h1>
        <img width=387 height=199 src="bosses/protokaliya.jpg"/><br>
        <b>Resonance:</b> Cone AoE tankbuster.<br>
        <b>Barofield:</b> Creates an instant death circle in the center and a DoT zone ring the edge.<br>
        <b>Nanospore Jet:</b> Spawns magnet adds that will eventually tether players with either a positive or a negative charge.<br><br>
        <b>Centralized nerve gas:</b> Wide cone AoE to the front.<br>
        <b>Leftward nerve gas:</b> 180 degree AoE to the left and back.<br>
        <b>Rightward nerve gas:</b> 180 degree AoE to the right and back.<br>
        To dodge these, stand in front and dodge to either side for <b>Centralized nerve gas</b>. Be careful of the lines from the adds.<br><br>
        <b>Nerve gas ring:</b> Donut AoE. You will need to use the magnets to end up in the safe spot, without touching the center.<br>
        The adds will also shoot a line AoE during this attack, but there is enough time to dodge it after the magnet.<br><br>
        Magnet example<br>
        <img width=300 height=300 src="bosses/protokaliya-arena-1.jpg" />
        <img width=300 height=300 src="bosses/protokaliya-arena-2.jpg" />
        <img width=300 height=300 src="bosses/protokaliya-arena-3.jpg" />
    `,
    '90': `
        <h1>Administrator</h1>
        <img width=452 height=223 src="bosses/administrator.jpg"/><br>
        <b>Support Systems:</b> Spawns adds for the next mechanic.<br>
        The adds will use the following AoEs:
        <ul style="margin-top: 0; margin-bottom: 0;">
            <li><b>Egg:</b> Large cone</li>
            <li><b>Cube:</b> Line</li>
            <li><b>Sphere:</b> Large donut</li>
        </ul><br>
        <b>Interception Sequence:</b> Spawns an egg and several cubes at the edges, and a sphere in the arena.<br>
        Each add gets a number: 1, 2 or 3. The AoEs from the adds will resolve in this order.<br><br>
        Dodging example<br>
        <img width=300 height=300 src="bosses/administrator-arena-1.jpg" />
        <img width=300 height=300 src="bosses/administrator-arena-2.jpg" />
        <img width=300 height=300 src="bosses/administrator-arena-3.jpg" /><br><br>
        <b>Cross lasers:</b> Cross AoEs from the boss. Do not be in line with the triangles.<br>
        <b>Peripheral lasers:</b> Donut AoE under the boss.<br>
        <b>Laserstream:</b> Raidwide.<br><br>
        <b>Parallel execution:</b> Spawns multiple cubes which fire line AoEs that move through the arena.<br>
        You will need to dodge these while circle AoEs are repeatedly placed under you.<br><br>
        <b>Salvo Script:</b> Spawns cubes that only leave 4 tiles (the corners, 1 step inwards) safe.<br>
        Two eggs will also spawn on the edges, which shoot cones that cover 3 of the 4 safe tiles.<br>
        If the eggs face both face the center, the safe spot will be between the eggs.<br>
        If the eggs face each other, the safe spot will be next to the egg facing the center, away from the other egg.<br><br>
        Safespot examples with the eggs facing the center and the eggs facing each other<br>
        <img width=300 height=300 src="bosses/administrator-arena-4.jpg" />
        <img width=300 height=300 src="bosses/administrator-arena-5.jpg" />
    `,
    '99': `
        <h1>Excalibur</h1>
        <img width=362 height=198 src="bosses/excalibur.jpg"/><br>
        <b>Paradoxum:</b> Grants everyone a hot or cold debuff. Getting hit by an attack with a matching element will be instant death.<br>
        <b>Caliburni 1:</b> Shoots swords in a 90 degree cone from the front. These will fly back after the first <b>Thermal Divide</b>. This version of <b>Caliburni</b> is used only once at the start of the fight.<br>
        <b>Thermal Divide:</b> Stand on the side that does not match your debuff.<br><br>
        <b>Solid Souls' Caliber:</b> Point-blank AoE followed by telegraphed AoEs.<br>
        <b>Empty Souls' Caliber:</b> Donut AoE followed by telegraphed AoEs.<br><br>
        <b>Caliburni 2:</b> Shoots swords in a cone from the front, left back and right back. These fly back later. 2 sets of swords will get an elemental effect.<br>
        <b>Frostforge / Flameforge:</b> You need to use the swords from <b>Caliburni</b> to end up with the opposite element to live the upcoming attack.<br><br>
        <b>If you already have the opposite element, stand in a cyan spot to avoid all the swords.<br>
        Else, stand in the path of the swords of the element that you need. (which will be opposite to the cast name & opposite to your debuff)</b><br>
        <img width=300 height=300 src="bosses/excalibur-arena-1.jpg" />
        <img width=300 height=300 src="bosses/excalibur-arena-2.jpg" /><br><br>
        <b>Exflammeus:</b> Dodge expanding AoEs.<br>
        <b>Exglacialis:</b> Dodge star AoEs. You can stand still in the highlighted spot in the arena to automatically dodge all of these AoEs.<br>
        <img src="bosses/excalibur-arena-3.jpg" />
    `
}