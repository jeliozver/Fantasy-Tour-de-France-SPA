import React from 'react';

const HowTo = () => {
  return (
    <section id="info-container">
      <h1>How to play Fantasy Tour de France</h1>
      <article>
        <h2>Basics</h2>
        <p>
          Fantasy Tour de France lets you pick a team of riders to compete while the race progresses. You score points based on how well your riders qualify after each stage is completed. You can change your team along the way to pick the best riders for different types of stage.
        </p>

        <p>
          Transfers will be locked for a couple of hours between 15:00-20:00 on each day there is an ongoing stage.
        </p>
      </article>
      <article>
        <h2>Scoring Information</h2>
        <h3>Top 10 finish in a stage:</h3>
        <p>
          20, 15, 12, 8, 6, 5, 4, 3, 2, 1 points for the first 10 riders in the stage classification
        </p>
        <p>
          20, 18, 16, 14, 12, 10, 8, 6, 4, 2 points for each rider you have of the top ten teams in a team time trial
        </p>
      </article>
      <article>
        <h2>Rider Types</h2>
        <p>
          Your team consists of eight riders. You can pick any 8 riders within your budget which is 180 points. The riders in the game are classified into six types.
        </p>
        <p>The rider types are as follows:</p>
        <ul>
          <li>
            <span>All-Rounder: </span>
            They are best equipped to do well overall in the longer, multi-stage races. They tend to be good at everything, with an emphasis on climbing and time trials, which are the disciplines that allow riders to gain most time over their rivals in a big tour.
          </li>
          <li>
            <span>Classics specialist: </span>
            They are the kings of one-day races. They tend to be very good at hilly stages, but can certainly win flat or mountain stages as well.
          </li>
          <li>
            <span>Sprinter: </span>
            They are your riders for flat stages where there is a high posibility of bunch sprint at the end of the stage. They can finish a race very explosively by accelerating quickly to a high speed.
          </li>
          <li>
            <span>Climber: </span>
            They are the kings of the mountains. They tend to be very good on highly inclined roads, such as those found among hills or mountains. Climbers tend to have a lot of endurance and specifically developed muscles for long hard climbs. They also tend to have a slim, lightweight physique, but some can become good climbers through concerted training.
          </li>
          <li>
            <span>Time-Trialist: </span>
            A time trialist is a rider who can maintain high speeds for long periods of time, to maximize performance during inarticleidual or team time trials. The term cronoman, or chronoman, is also used to refer to a time trialist
          </li>
          <li>
            <span>Domestique: </span>
            They are riders who works for the benefit of their team and leader, rather than trying to win the race. In French, domestique translates as "servant". They also tend to make up the breakaway groups that are a feature of all professional bike racing.
          </li>
        </ul>
      </article>
      <article>
        <h2>Stage Types</h2>
        <p>There are five stage and they are as follows:</p>
        <ul>
          <li>
            <span>Flat: </span>
            They tend to be raced on relatively flat terrain, which makes it difficult for small groups or individual cyclists to break away from the peloton—there are no big hills to slow it down. Some teams are organized around a single specialized sprinter, and in the final kilometres of a sprint stage, these teams jockey for position at the front of the peloton. In the final few hundred metres, a succession of riders "lead out" their sprinter, riding very hard while he stays in their slipstream. Just before the line—200 metres away is about the maximum—the sprinter launches himself around his final lead-out man in an all-out effort for the line.
          </li>
          <li>
            <span>Hilly: </span>
            These stages are more difficult than flat stages, but not as difficult as the mountain stages. They are often well-suited for a breakaway. Occasionally, the distinction between medium mountain and mountain in stage classification, decided by race officials, can be controversial.
          </li>
          <li>
            <span>Mountain: </span>
            Mountain stages often cause big "splits" in the finishing times, especially when the stage actually ends at the top of a mountain. For this reason, the mountain stages are considered the deciding factor in most Tours. The slower speeds mean that the aerodynamic advantage gained by slipstreaming is much smaller. Furthermore, lighter riders generate more power per kilogram than heavier riders thus, the sprinters tend to suffer a lot in this type of stages. Typically, the leader rider will attack very hard when there are only a few kilometres to go, trying to put time into his main rivals. Gaps of two and even three minutes can be created over just a few kilometres by hard attacks.
          </li>
          <li>
            <span>Individual Time Trial: </span>
            Individual Time Trial (ITT) is a stage type in which cyclists race alone against the clock on flat or rolling terrain, or up a mountain road. They are also referred to as "the race of truth", as winning depends only on each rider's strength and endurance, and not on help provided by teammates and others riding ahead and creating a slipstream. Starting times are at equal intervals, usually one or two minutes apart. The starting sequence is usually based on the finishing times in preceding races (or preceding stages in the case of a multi-stage race) with the highest ranked cyclist starting last. Starting later gives the racer the advantage of knowing what time they need to beat (and also makes the event more interesting to spectators). Competitors are not permitted to draft (ride in the slipstream) behind each other. Any help between riders is forbidden. The rider with the fastest time is declared the winner.
          </li>
          <li>
            <span>Team Time Trial: </span>
            Team Time Trial (TTT) is a stage type in which teams of cyclists race against the clock. The winning team in a TTT is determined by the comparing the times of (usually) the fourth-finishing rider in each team. This means that each team will try to get their first four (at least) riders across the finish line in a tight group: it is actually a disadvantage for any rider to finish far in advance of the fourth rider, as by staying back a faster rider can help the fourth rider to get a quicker time. Teams start at equal intervals, usually two, three or four minutes apart. The highest ranked teams will normally start later. Later starters have the advantage of knowing what times they need to beat (and this also makes the event more interesting to spectators).
          </li>
        </ul>
      </article>
    </section>
  );
};

export default HowTo;