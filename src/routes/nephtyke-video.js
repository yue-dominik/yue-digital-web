import * as React from 'react';
import { InfoSection  } from '../components/info-section';

export const NephtykeVideo = ({ locale }) =>{
    return <div className='page-content'>
        <InfoSection title="Sample Video">
            <div className='video-wrapper'>
                <iframe className='video' src={
                    locale === 'ja' ? 'https://www.youtube.com/embed/of3U7epBX_U' : 'https://www.youtube.com/embed/cPe-BmypocI'
                } />
            </div>
        </InfoSection>
    </div>
}

