import * as React from 'react';
import { InfoSection  } from '../components/info-section';

export const NephtykeVideo = () =>{
    return <div className='page-content'>
        <InfoSection title="Sample Video">
            <div className='video-wrapper'>
                <iframe className='video' src="https://www.youtube.com/embed/tgbNymZ7vqY" />
            </div>
        </InfoSection>
    </div>
}

