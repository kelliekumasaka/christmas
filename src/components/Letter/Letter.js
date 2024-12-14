import React from 'react';
import './Letter.css';
// import { useFetchComments } from '../../api/hooks';

function Letter() {
  // const [name, setName] = useState('')
  // const [comment, setComment] = useState('')
  // // use hook to get 
  // const { currComment } = useFetchComments()

  // const submitHandler = (event) => {
  //   // call fs to write doc
  //   event.preventDefault();
  //   console.log(name, comment);
    
  // }

  return (
    <>
      <div id='hello'>
        <p>
          Merry Christmas everybody! Like a second string quarterback coming straight off the bench to lead the game winning drive, this Christmas card is brought to you by the one and only <span style={{textDecoration: 'line-through'}}>Geno Smith</span> Nyle Miura! It’s been a hectic but ultimately memorable first year as part of the Kumasaka family. As you can see, they’re already putting me to work (<span style={{textDecoration: 'line-through'}}>help me</span>). But I think it’s the least I can do for welcoming me into their family. 
          <br/><br/>
          The biggest event we did together this year was our trip to Korea and Japan! In Korea, we explored Seoul, took some pictures wearing traditional Hanboks, visited some KDrama landmarks, and ate tons. And in Japan, we explored Tokyo/Osaka, visited TeamLab Planets, hit baseballs in a batting cage, shopped, and had delicious omakase. I sometimes hear about how going on trips with a group of friends/family can be very telling about the stability of those relationships. And I’m happy to inform that the trip did not tear our family apart!
          <br/><br/>
          Now as for the individuals, Kellie has refused to provide me with any further information. So this is purely based on what I know…
        </p>
        <h3>BHK (AKA Dub)</h3>
        <p>
        When I think of my father in law, I think of three things: running, golf, and Seattle sports. He recently completed a half marathon in the blazing California heat. Honestly props to that. He’s in better shape than I am! When he’s not running, he’s usually out on the golf course. Not sure if this is an exaggeration but it seemed like he was out of state on a golf trip at least once a month. And once again, we were able to mourn together the decline of the 2024 Mariner’s season where they failed to make the playoffs again. At least it’s Football and Hockey season now (if you want to buy Kraken tickets, reach out to him).
        </p>
        <h3>SMK (AKA Mub)</h3>
        <p>
        As for my wonderful mother in law, it’s also been a very busy 2024. From her continuation in her K-Drama watch club, to also killing it on the golf course! And not to mention all the holidays and dinners she’s labored for so that her family and loved ones can enjoy a meal together. When I think of her, the word “gratitude” is the first that comes to mind. Since this was her first year as an empty nester, I’m sure it’s been a much quieter year overall. Although, we still come over often for some not-so-friendly games of Shanghai Rummy, which includes a lot of yelling. So maybe it’s not that quiet after all.
        </p>
        <h3>LTK</h3>
        <p>
        Another year has gone by of Lisa just doing her thing in Portland. Other than picking up lunches for her senior medical staff members, I imagine her day to day is some combination of walking her big dog Kaia (seriously this dog is bigger than Kellie), research, helping save lives, and receiving zero compensation. One of the best stories from this year involved her and I in Korea. Us and Kellie were on our way to the Hanbok photoshoot. When the bus arrived, Kellie proceeded to get on the bus, but Lisa and I were denied entry because we had coffees in hand. There was a slight delay in panic and before we knew it, the doors had closed, Kellie was on the bus alone as it drove away, and Lisa and I were chasing it on the streets of Seoul! It was probably the sweatiest I was all trip, and I don’t think either of us will be forgetting that moment anytime soon.
        </p>
        <h3>JKK</h3>
        <p>
        Since Jill is following a very similar course to Lisa, I thought maybe I could copy and paste Lisa’s Christmas letter from two years ago here… But in all seriousness, I know she is also continuing to kill it down in Portland. I believe she has some kind of big test coming up in early 2025 that she’s stressing about. But the rest of us have full confidence in her! In our most recent trip to Japan, we spent a lot of time eating, exploring, and shopping together. One funny story from Japan (that I’m not sure she’s aware of), was that she bought this specific pair of jeans from a store called “GU”. She seemed really excited about it. After she had gone back to the states, Kellie and I were still in Japan and had decided to stop by “GU” one more time. I ended up buying the same exact pair that she had (I now know I fit a women’s XXL pants in Japan). I’m sure she’ll love hearing about that and twinning with me in the future!
        </p>

        <h3>NHM and KHK(M)</h3>
        <p>
        And lastly, nothing too crazy has happened for us in 2024… I guess we got married so that’s something. But in all seriousness, it’s been a crazy busy year. We mini-mooned at an awesome spa hotel in Leavenworth, travelled to several places such as Texas, KC, California, Korea, and Japan. We’re already on apartment #2. Currently we’re living in Columbia City which has been great! It’s been nice being close to the in-laws (but not too close ya know?). We’ve settled at a new church called Seattle Upper Room. And in between on the day to day, we’re both still working from home which means we spend a loooooot of time together. It’s been a great year to say the least!

        </p>

        <h3>Luna</h3>
        <p>
        It’s sad not seeing her as often, but she seems to be doing well! Whenever you first walk into the house, she’s so excited to see you for like the first 2 minutes. Then nothing… you’re kind of just there. Godspeed Luna.
        </p>
        <p>
          And with that, Merry Christmas and Happy New Year. See you in 2025!
        </p>
        <p style={{textAlign: 'center'}}>Love,</p>
        <p style={{textAlign: 'center'}}>The Kumasaka/Miura family</p>
      </div>
      {/* <form onSubmit={submitHandler}>
        <input placeholder='Name' id='user' onChange={(event) => setName(event.target.value)} name='user' value={name}/>
        <input placeholder='Comment' id='comment' onChange={(event) => setComment(event.target.value)}  name='comment' value={comment}/>
        <button type='submit'>Submit</button>
      </form> */}
    </>
  );
}

export default Letter;