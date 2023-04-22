import * as React from 'react';
import { InfoSection  } from '../components/info-section';
export const Nephtyke = ({locale}) =>{

    const jaSource = {
        aboutTitle: 'ゲームについて',
        aboutText: `ネフタイクは、バトルシステムを備えたキューベースのストーリー重視のマンガ RPG です。プレイヤーは、マンガを読むという形でゲームのストーリーを楽しむことができます。しかし、ストーリー内でバトルが発生した場合、プレイヤーは読み進めず、代わりにキューベースのバトルシステムを通じてそのバトルを直接体験することができます。ネフタイクのバトルシステムは、プレイヤーがバトルの流れを指示し、キャラクターを自分の好みに合わせて行動させることができます。バトルでは、各キャラクターのアクションが、動的に生成されるマンガのコマとして表示されます。バトルが終了すると、バトル中に生成されたコマをすべて回収して新しいページが作成され、プレイヤーはストーリーを読み進めることができます。`,
        mangaTitle: 'マンガRPG',
        mangaText: `
マンガRPGとしてのネフタイクは、通常のマンガと同じように、巻と章に分かれています。プレイヤーは各章を読んでストーリーを楽しみ、ストーリー内の各バトルはゲームのバトルシステムを通じて楽しむことができます。バトルでは、プレイヤーに合わせたバトルページが用意され、プレイヤーがストーリーの足りない部分を補うことで、プレイヤーひとりひとりの個性が表れたストーリーとなります。
また、各バトルにはチャレンジバトルや番外編、アップグレードポイントをアンロックすることができるミッションがあり、通常のストーリーモードだけでなく、ゲームの複雑なバトルシステムをお楽しみいただけます。
アップグレードポイントを使用することで、キャラクターの強化や、アクションを増やしたりして、動的に生成されるページをより自分好みにすることができます。チャレンジバトルは、実力を試したいプレイヤーのための追加バトルです。さらに番外編は、アンロック可能なショートストーリーで、ネフタイクのキャラクターの日常を知ることができます。
`,
        battleTitle: 'キューベースバトルシステム',
        battleText: `
ネフタイクのバトルシステムは、従来のターンベースのRPGバトルシステムをアレンジしたキューベースを採用しています。各ターンは、キャラクターが複数のアクションを実行できる時間のかたまりを表します。各キャラクターのアクションを順番に決定するのではなく、プレイヤーが事前にアクションを決めておくことで、より戦術的なバトルが可能になり、プレイヤーはマンガのストーリーのバトルディレクターとして楽しむことができます。
ターンが始まると、各キャラクターにはタイムポイントが付与され、これに基づいて一定のアクションをキューに入れることができます。各キャラクターに付与されるタイムポイントの量は、より速いアクションほど消費するタイムポイントが少なく、速いキャラクターは同じターンでより多くのアクションを実行できます。すべてのアクションをキューに入れ終わると、キャラクターはキューに基づいてアクションを実行します。
各バトルアクションは、攻撃キャラクターと防御キャラクター、そしてどのアクションを選択したかをもとに、生成されたコマとして表示され、バトル終了時に新しいマンガページを生成できるように、各コマを保存します。バトル終了後に、バトル中に生成されたコマを使用して新しいマンガページが生成され、ストーリーページに追加されることで、プレイヤーは自分の努力の結果である、自分だけのバトルページでさらにストーリーを楽しむことができます。
`,
        storyTitle: 'ストーリー',
        storyText: `
ネフタイクのストーリーは、亡き母に代わって村を守ると約束したテクトド人の青年ソレルが主人公です。彼は何年もの間、隣国テクトス王国からの襲撃から村を守り続けていましたが、ある日、謎の傭兵集団が村人の一人を誘拐しようとしたことから、ソレルに重大な任務が課されます。
`,
    }
    const enSource = {
        aboutTitle: 'About Game',
        aboutText: `Nephtyke is a story-driven Manga RPG with a Queue-based battle system. Players can enjoy the game’s story in the form of reading a manga. However, when a battle would occur within the story, players cannot continue reading, and instead get to experience that battle directly through a queue-based battle system. Nephtyke’s battle system lets the players direct the flow of the battle, making the characters act based on their liking. In battle, each character's action is displayed as a dynamically generated manga panel. Once the battle is over, the game takes all the panels generated during the battle and creates new pages to allow the player to continue reading the story.
`,
        mangaTitle: 'Manga RPG',
        mangaText: `
Just like a normal manga, Nephtyke as a Manga RPG is divided into volumes and chapters. Players can read each chapter to enjoy the story, while each battle within the story is enjoyed through the game’s battle system. In battles, players get personalized battle pages to fill in the missing story parts crafting a unique experience for each player..
Additionally, each battle has missions which allow players to unlock challenge battles, extra chapters, and upgrade points, letting them enjoy the game’s intricate battle system beyond just the regular story mode.
Using upgrade points, players can make the characters stronger or unlock more actions to make the dynamically generated pages further to their liking. The Challenge battles are additional battles designed for those who wish to test their skills. Finally, the extra chapters are unlockable short stories which give players insight into Nephtyke’s characters daily lives.
`,
        battleTitle: 'Queue-based Battle System',
        battleText: `
Nephtyke has a queue-based battle system, which is a twist on a classical turn-based RPG battle system. Each turn represents a chunk of time within which characters can perform multiple actions. Instead of deciding each character’s action when it’s their turn to act, the player queues-up action upfront, adding a more tactical approach to the battle and giving the player the feeling of acting as a Battle Director for the manga’s story.
At the start of a turn, each character is assigned Time Points, based on which they can queue-up a certain amount of actions to execute. The amount of Time Points each character is granted, but faster actions consume less Time Points, meaning faster characters would perform more actions in the same turn. Once all the actions have been queued up, characters execute the queued-up actions based on their combined order.
Each battle action is shown as a dynamically generated panel, based on the attacking and defending characters, and which action was selected for them. The game stores each of the generated panels so that it could generate new manga pages at the end of the battle.
At the end of the battle, the game generates new manga pages using the dynamically generated panels throughout the battle and adding it to the story pages allowing the players to enjoy the story further with personalized battle pages which are the result of their effort.
        `,
        storyTitle: 'Story',
        storyText: `
Nephtykes story follows Sorel, a young Tectodian who made a promise to his deceased mother that he would protect their village in her stead. He continues to guard his village for years from the assaults from the neighboring Tectos Kingdom, but one day, a grander duty falls upon Sorel as a mysterious group of mercenaries attempts to kidnap one of the villagers.        
`,
    }


    const source = locale === 'ja' ? jaSource : enSource;

    return (
        <div className='page-content'>
            <InfoSection title={source.aboutTitle}>
                {source.aboutText}
            </InfoSection>
            <InfoSection title={source.mangaTitle}>
                {source.mangaText}
            </InfoSection>
            <InfoSection title={source.battleTitle}>
                {source.battleText}
            </InfoSection>
            <InfoSection title={source.storyTitle}>
                {source.storyText}
            </InfoSection>
        </div>
    )
}