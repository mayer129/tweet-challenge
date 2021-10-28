import Tweet from "../components/tweet";
import "./styles.css";

export default function App() {
  /* EDIT ME SO I CONTAIN ALL OF THE DATA
   * THAT IS RENDERED FOR EACH TWEET
   */
  const tweets = [];
  tweets.push(
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Lady Gaga in a large pink dress"
      tweetText="No sleep, bus, club, another club, another club, another club, plane, next place, no sleep, another club, another club…"
      profileName="Lady Gaga"
      username="@ladygaga"
      date="31 May 2017"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://i.ytimg.com/vi/BedWowuRdyU/maxresdefault.jpg"
      imgAlt="Mengis"
      tweetText="bing"
      profileName="Darth Mengis"
      username="@mengis"
      date="31 May 2018"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://pyxis.nymag.com/v1/imgs/4e7/109/9ca3a0b4352ca3ff74b89cb208ceda6ab5-kidney-bean.jpg"
      imgAlt="A bean"
      tweetText="I played minecraft with my friends"
      profileName="Bean"
      username="@beanZ"
      date="12 April 2021"
      isVerified={false}
    />
  );
  /* EDIT ME SO I DISPLAY A COLUMN OF TWEETS */
  return tweets;
}
