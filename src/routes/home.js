import * as React from 'react';
import { InfoSection  } from '../components/info-section';

export const Home = ({ locale }) => {
    const jaSource = {
        title: 'ワイユーイーデジタル',
        text: 'ワイユーイーデジタルは東京ベース、漫画RPGを開発するの開発グループ'
    }
    const enSource = {
        title: 'About Y.U.E. Digital',
        text: 'Y.U.E. Digital is a Tokyo-based group developing a Manga RPG called Nephtyke.'
    }

    const source = locale === 'ja' ? jaSource : enSource;
    return <div className='page-content'>
        <InfoSection title={source.title}>
            {source.text}
        </InfoSection>
    </div>
}

