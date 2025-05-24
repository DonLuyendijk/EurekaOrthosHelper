export const bosses = {
    '10': `
        <h1>Gancanagh</h1>
        <img src=\"bosses/gancanagh.jpg\"/><br>
        <b>Authoritative Shriek:</b> Watch electrified mandragoras. These will do cirle AoEs. Dodge these.<br>
        <b>Mandrastorm:</b> Proximity AoE. Be around 1.5 squares away from the boss.<br>
        After <b>Mandrastorm</b>, mandragoras get marked with a 1, 2 or 3 marker. Dodge from a higher number to a lower number.<br><br>
        AoE size example<br>
        <img width=400 height=400 src=\"bosses/gancanagh-arena-1.jpg\"/>
    `,
    '20': `
        <h1>Cloning Node</h1>
        <img src=\"bosses/cloningnode.jpg\"/><br>
        <b>Offensive command:</b> Tethers dragons. Tethered dragons will use <b>Flame Breath</b>, a cone AoE.<br>
        Initial pattern: Y shape. Move next to a dragon that does not have a tethered dragon opposite of it.<br>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-1.jpg\"/>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-2.jpg\"/><br><br>
        Following patterns: Move to the gap. Then, move to where the lone tether was.<br>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-3.jpg\"/>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-4.jpg\"/>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-5.jpg\"/>
        <img width=300 height=300 src=\"bosses/cloningnode-arena-6.jpg\"/><br>
    `,
    '30': `
        <h1>Tiamat Clone</h1>
        <img width=727 height=277 src=\"bosses/tiamatclone.jpg\"/><br>
        <b>Creature of Darkness:</b> Spawns adds that move to the back of the arena, with two safe spots.<br>
        <b>Dark Wyrmtail:</b> Cleaves the center and spawns adds that move from the center to the sides.<br>
        <b>Dark Wyrmwing:</b> Cleaves the sides and spawns adds that move from the sides to the other side.<br>
        <b>Dark Megaflare:</b> Dodge AoEs. AoEs spawn adds which you need to dodge together with the AoEs.<br>
        <b>Whei Morn:</b> If targeted, wait for an AoE to spawn under you. Then, move away to dodge the chasing four hits.<br><br>
        Dark Wyrmtail and Dark Wyrmwing<br>
        <img width=300 height=300 src=\"bosses/tiamatclone-arena-1.jpg\"/>
        <img width=300 height=300 src=\"bosses/tiamatclone-arena-2.jpg\"/>
    `,
    '40': `
        <h1>Twintania Clone</h1>
        <img src=\"bosses/twintaniaclone.jpg\"/><br>
        <b>Twister:</b> Spawns a small tornado under everyone. Kills you & everyone near you if touched. Be moving when the cast ends and shortly after it has ended.<br><br>
        <b>Meracydian Cyclone:</b> Spawns lingering AoEs. Will periodically drop another AoE under each player (4x) and follow with a knockback from the center.<br>
        Drop the AoEs in a way that leaves space for the knockback. You can stack two AoEs. (Drop one, wait for another to drop on top of it and then move)<br><br>
        <b>Twisting Dive:</b> Twintania moves to the outside of the arena and dashes through the center with a large, wide line AoE. A twister is dropped in the meantime, so be moving when the cast completes.<br><br>
        An example <b>Meracydian Cyclone</b> pattern and a way to dodge <b>Twisting Dive</b><br>
        <img width=300 height=300 src=\"bosses/twintaniaclone-arena-1.jpg\"/>
        <img width=300 height=300 src=\"bosses/twintaniaclone-arena-2.jpg\"/>
    `,
    '50': `
        <h1>Servomechanical Chimera 14X</h1>
        <img width=360 height=190 src=\"bosses/chimera.jpg\"/><br>
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
        <img width=340 height=195 src=\"bosses/minotaur.jpg\"/><br>
        <b>Octuple Swipe:</b> Telegraphs eight swipes and uses the swipes in the shown order afterwards.<br>
        You can pick two swipe spots and preposition between these. Then, you only have to focus on two cleaves.<br><br>
        <b>Bullish Swing:</b> Large point-blank AoE.<br>
        <b>Bullish Swipe:</b> Large 90 degree cone AoE.<br>
        <b>Disorienting Groan:</b> Significant knockback from the center.<br>
        <b>Thundercall:</b> Spawns orbs that explode in a small point-blank AoE when the next <b>Octuple Swipe</b> starts.
    `,
    '70': `
        <h1>Aeturna</h1>
        <img width=360 height=210 src=\"bosses/aeturna.jpg\"/><br>
        <b>Steel Claw:</b> Tankbuster.<br>
        <b>Ferocity:</b> Proximity tether to a random player. Dashes to this player.<br>
    `
}