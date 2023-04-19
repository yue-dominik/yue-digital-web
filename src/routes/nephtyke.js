import * as React from 'react';
import { InfoSection  } from '../components/info-section';
export const Nephtyke = () =>{
    return (
        <div className='page-content'>
            <InfoSection title={"About Game"}>
                Nephtyke is a story-driven Manga RPG with a Queue-based battle system. Players can enjoy the game’s story by reading a manga. However, when a battle would occur within the story, players cannot continue reading the story, and instead get to experience that battle directly through a queue-based battle system. Nephtyke’s battle system lets the players direct the flow of the battle making the characters act in battle based on their liking. In battle, each character's action is displayed as a dynamically generated manga panel. Once the battle is over, the game takes the panels generated during the battle and creates new pages to allow the player to further continue reading the story.
            </InfoSection>
            <InfoSection title={"Manga RPG"}>
                Just like a normal manga, Nephtyke as a Manga RPG is divided into volumes and chapters. Players can read each chapter to enjoy the story, while each battle within the story is enjoyed through the game’s battle system. Through battles, players get personalized battle pages to fill in the missing story parts.
                Additionally, each battle has missions which allow players to unlock challenge battles, omake chapters, and upgrade points, letting them enjoy the game’s intricate battle system beyond just the regular story.
                Using upgrade points, players can make the characters stronger or unlock more actions to make the dynamically generated pages further to their liking. The Challenge battles are additional battles designed for those who wish to test their skills. Finally, the omake chapters are unlockable short stories which would give players insight into Nephtyke’s characters daily lives.
            </InfoSection>
            <InfoSection title={"Queue-based battle system"}>
                Nephtyke has a queue-based battle system, which is a twist on a classical turn-based RPG battle system. Instead of dividing the game in turns, and having each character act as a reaction to what happened previously, the flow of battle is divided into chunks of time represented as Time Points.
                At the start of a turn, each character is assigned the same amount of Time Points, and based on it they can queue-up a certain amount of actions to execute. Once all the actions have been queued up, characters execute the queued-up actions based on their combined order.
                Each battle action is shown as a dynamically generated panel, based on the the characters that are present in the action, and which action was selected for them. The game stores each of the generated panels so that it could create new manga pages at the end of the battle.
                As the players are tasked with deciding the action upfront, they would not be reacting to the battle’s flow, instead they would be directing it, giving them the feeling of being a Battle Director for a Manga.
                At the end of the battle, the game generates new manga pages using the dynamically generated panels throughout the battle and adding it to the story pages allowing the players to enjoy the story further with personalized battle pages which are the result of their effort.
            </InfoSection>
            <InfoSection title={"Story"}>
                Nephtykes story follows Sorel, a young Tectodian who made a promise to his deceased mother that he would protect their village in her stead. He continues to guard his village for years from the assaults from the neighboring Tectos Kingdom, but one day, a grander duty falls upon Sorel as a mysterious group of mercenaries attempts to kidnap one of the villagers.
            </InfoSection>
        </div>
    )
}