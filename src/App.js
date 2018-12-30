import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Child } from './Child.js';

const loop = [
  {  //count 0
    text: `In first-world countries such as the United States children can gain an education without much question and have to worry little of issues such as human trafficking. However, many children across the globe are out of school due to various reasons, including social factors, child marriage, distance to school, wars/conflicts, modern slavery, extreme poverty, and violence at or on the way to school.
  Getting an education allows people to better provide for their families when they are older and live healthier, more stable lives. When paid a stable income, people can better support their local communities and contribute to economic prosperity of their entire nation. Educated people will also more likely start businesses and generate jobs. Global education can even help to combat overpopulation and climate change.
  Despite the necessity of an education, 750 million adults worldwide are still illiterate. One of the most gruesome issues that often goes unseen is human trafficking. Children especially are victims of human trafficking, as about 33% of enslaved people today are under 18 years of age. Moreover, women suffer higher rates of human trafficking, as 70% of victims are female. One of the reason that modern slavery persists today, despite it being illegal everywhere, is that governments fail to enforce their laws, and long-standing traditions keep people from escaping slavery. An estimated 100,409 labor trafficking victims have been identified as of 2017, yet only 7045 convictions had occurred that year. Also, in 2018, there are still 18 countries that weren’t States Parties to the Protocol to Prevent, Suppress, and Punish Trafficking In Persons.
  This story focuses on human trafficking that had persisted for a long time in Nepal. Today Nepal is still a small country that faces political instability and severe poverty, with half of the population earning less than $2 a day. The human enslavement issue was combatted at first by multiple non-government organizations (NGOs) and eventually by the government. In 2015, the world promised to give every child a quality education by 2030. This goal can only be met if governments and their citizens in all parts of the world contribute to making this goal a reality. The following story is based on the lives of real people and is meant to express the grave aspects that human trafficking inflicts on its victims.`
  ,
    b1: "Continue",
    b2: "",
    b3: ""
  },

  {  //count 1
    text: `You live in a small village in Nepal that’s part of of the Tharu community. You are lucky to have a supportive family and the privilege to attend a local school to which you have been going for two years. Over those two years you’ve already gained some knowledge on how to read and write.
One day, when you are only nine years old, your parents take you to the annual Maghe Festival that marks the beginning of the new year in the Tharu tradition. At this festival, village leaders are selected, and families can gather and make plans for the upcoming year. Behind all the feasting and celebrating, though, hides a much darker practice that has been taking place for years: kamlari, a form of modern child slavery. Your parents usher you to follow them towards a broker that’s standing away from the main celebration. Your parents begin talking to the stranger, but you are clueless as to what they are talking about. Eventually, your mother and father kneel beside you and give you the unsettling news that they will have to send you off as a kamlari for a sum of money they urgently need.
You soon break down into tears, understanding how kamlaris are often sent miles from their home and seldom get to visit their families. At the same time, your mother begins crying as well, for she was also a kamlari as a child. You know this human transaction could likely happen, but you didn’t want to believe it; your parents have recently had little money to care for you, and they only want to ensure you have a roof over your head and food to eat. You feel it is unfair how your older siblings get to stay at home and finish their education. All you wish for at the moment is to get out of this situation and finish your schooling.`
,
    b1: "Continue",
    b2: "",
    b3: ""
  },

  {  //count 2
    text: `The next day you arrive at Kathmandu, the capital city of Nepal. When you arrive at your new master’s house, however, you receive no warm welcome. The first day you arrive your master orders you conduct several tedious tasks such as cleaning their house, washing their dishes, and caring for their children. That day you are not allowed to stop working until midnight.
  Having hoped that the following days would be less tiresome, you are disappointed to find that your long sessions of labor will not be ending any time soon. Most days you end up working from dawn to dusk and are subject to complete control by your master, of which he frequently takes advantage and abuses you physically and emotionally. The thought of going to school has hardly passed your mind, as your master lied about possibly sending you to a local school. In fact, you are kept completely isolated in your master’s house because he doesn’t want to risk prosecution for keeping a kamlari. You’re uncertain if you will even be able to reunite with your family at the Maghe Festival the following year.
  These times are looking very grim, and you consider making a plan to escape this house. Will you make such an effort, or will you endure this life for yet more time?`
  ,
    b1: "Run Away",
    b2: "Stay",
    b3: "Start Over"
  },

  {  //count 3
    text: `You decide to make plans to escape your current life as a slave and find your way back to your village. You’ve recently discovered that there is another bonded Kamlari living in a house close to yours, and there have been a few opportunities to meet with her in secret. She happens to be trying to escape from her employers grasp as well, and she mentions how her older brother has been trying to help her escape. You mention how you’re trying to escape as well, and you live in a village close to hers’ in the Tharu Community.
  Finally, you choose to run away with your new friend and her brother early in the morning and attempt to find your way back to your home. The journey to Kathmandu had been longer than you’d remembered, and there were several twists and turns in the road. Fortunately, your friend and her brother have a map to navigate home, and you manage to find your way back to your home village after a long segment of travelling.
  When you turn and enter the doorway of your home, exhausted, your parents rush to hug you but are soon disappointed to realize you left your master’s residence without permission. You were sent away at the Maghe Festival because your parents couldn’t afford to take care of you. You feel guilty now for returning and contemplate as to whether you should now convince your parents to let you stay or take you back to Kathmandu. If you return to your master, you fear having to endure the harsh treatment of a slave for years and being punished by your master for escaping. On the other hand, you’re not sure if your parents can feed you well enough or send you back to school. Do you take the long road back to your master’s house or convince your parents to let you stay home?`
  ,
    b1: "Stay Home",
    b2: "Return to Master",
    b3: "Start Over"
  },

  {  //count 4
    text: `You are able to to convince your parents to let you stay home after describing in detail the horrors you faced as a kamlari. However, you are not able to go to school as regularly as you had before; your parents often need you to do chores around the house and other work outside the house as well. Your current life is certainly better than as a kamlari, laboring from dawn to dusk, but you only wish to be in the classroom more often. Out of disgust for the human trafficking system that has existed you later campaign as an activist to stop child labor in Nepal. As an adult later in life you knock on doors, organize rallies, and even contact local government officials to aid in rescuing those still trapped in the kamlari system. Eventually you hope to eradicate the human bondage system for good.`
    ,
    b1: "",
    b2: "",
    b3: "Start Over"
  }, 

  {  //count 5
    text: `You make the nerve-racking but brave decision to return to you life as a modern-day slave. When you arrive your master punishes you for leaving, and you resume your work in the miserable household. You experience this grueling work and treatment for another two year until you are fortunate enough to be rescued by a non-governmental organization called the Nepal Youth Foundation. Relieved to be rescued from your domestic servitude, their Empowering Freed Kamlaris program is able to provide you with leadership training, literacy classes, and vocational education in order to help you be prepared to enter a career. Upon being freed, you are able to make up the schooling you missed and eventually graduate high school. You are glad your life was put back on track by the NYF program and feel more confident in your ability to become an independent person in the future.`
    ,
    b1: "",
    b2: "",
    b3: "Start Over"
  }, 6, 7, 8, 9, 10, 11, 12, 13,

  {  //count 14
    text: `You decide to put up with being a Kamlari for a few more years. You feel this is the best path to take to help your parents’ financial situation, but you’ll still have to put up with unbearable working hours and treatment.
Fortunately, one day your situation takes a brighter turn when the executive director of a non-profit organization dedicated to freeing Kamlari shows up at your master’s door. She argued several times with your master to have you released from your Kamlari bondage and even returned multiple times after failing to convince him. The leader of the charity organization eventually threatens a lawsuit against you master, citing how the high court declared human bondage illegal. She also says she can enroll you in a literacy class and even a vocational program.
After more debating, the charity leader eventually compromised that she would not file a lawsuit if you get sent to her school for part of the day. You are very excited to hear that you may get another chance to get a childhood education, yet your master only reluctantly agreed to allow you to go to school again and threatens worse treatment and abuse if you choose to do so.You want to get back into a classroom environment more than ever, but the treatment you have been receiving is already unbearable. Do you accept the charity leader’s schooling offer or tell her that you’ll pass on the opportunity?`
,
    b1: "Take Class",
    b2: "Reject Class",
    b3: "Start Over"
  },

  {  //count 15
    text:  `You decide to attend the charity’s school in order to continue your interrupted education. Many of the other students were also rescued kamlari. Together you are able to continue your studying of reading and writing and make up the schooling you lost when sent away as a kamlari.
 It turns out your master is too scared to punish you with worse abuse out of fear from receiving a lawsuit. You do, though, still have to do your daily work in the house and the field but for less hours than before. This life continues for about two more years until you are finally freed from being a kamlari for good! Upon arriving home, you are granted a scholarship by a non-governmental organization called Room to Read and are back to being enrolled in school. You become a member of Room to Read’s Girls’ Education Program and are able to pick back up on your literary skills. The Girls’ Education Program has supported about 5,000 girls in Nepal alone and is given in other countries as well(Room to Read). Being a child laborer was a major roadblock in your educational path, but you were able to overcome it and are now far less likely to live in impoverished conditions in the future.`
 ,
    b1: "",
    b2: "",
    b3: "Start Over"
  },

  {  //count 16
    text: `You decide that it’s too much of a risk to attend the school with the threat of worse treatment by your master. The charity worker offers once more the chance to go to her school, but you reaffirm that you’re not interested in the offer, and she reluctantly leaves your house. You resume your grueling work for several more months until you’re eventually able to visit your family at the Maghe Festival. However, you have to return back to the Nepal capital shortly after your visit home. You’re not sure how many more years you’ll have to endure life as a child laborer, and you begin to deeply miss your old life and being able to go to school. You’re hoping that a second social worker will come around to give you another chance at attending school, for you’re beginning to regret your refusal of the previous charity. All you can do at the moment is wait and hope that you are rescued from being a kamlari, but your not sure whether that will even happen or how many years until it will.`
    ,
    b1: "",
    b2: "",
    b3: "Start Over"
  },

];

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.progress = this.progress.bind(this);
  }

  progress(newCount) {
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div className="App">
        <Child onClick={this.progress} count={this.state.count} text={loop[this.state.count]}/>
      </div>
    );
  }
}

export default Parent;