import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <div >
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="withluis1"
        options={{ height: 380 }}
      />
      
    </div>
  );
};

export default TwitterFeed;
