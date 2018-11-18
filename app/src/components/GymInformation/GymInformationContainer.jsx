import React, { Component } from 'react';

class GymInformationContainer extends Component {
    render() {
        return(
            <div>
                <h2>Coach Kubi</h2>
                <p>
                    My name is Keith Kubiesa,I have a personal training background and in 2012 obtained my CSCS (Certified Strength & Conditioning Specialist) 
                    from the NSCA (National Strength & Conditioning Association). I was a NCAA golfer, pro-am snowboarder, and enthusiastic highly motivated rock climber. 
                    My life journey has been spent performing athletically at a high level and most recently helping others do the same through my experiences.
                </p>
                <p>
                    I am currently the Head Coach for the University of Wisconsin-Madison Climbing team and Strength coach for team PBC racing (triathlon team). 
                    Other organizations I work with include; The MWC (Madison Womens Climbers), Edgewood Golf, UW Hoofers, Apex Adventure Alliance, 
                    and the Tyrol Basin Snowboard Team. I have had clients qualify and compete at USA climbing Nationals, USA snowboarding Nationals as well as 
                    members of the high school state golf champion team.
                </p>
                <p>
                    I work with clients to clarify goals, visualize them and build a road map toward achieving them. Strength training, mental awareness, 
                    recovery methods and nutrition are some of the tools and techniques I provide to help you get there.
                </p>
                <h2>Pricing</h2>
                <table border="1px" cellPadding="10px">
                <tbody>
                    <tr>
                        <td>10 class punch card</td>
                        <td>$120</td>
                        <td>
                            <p>
                                This is good for any of the scheduled 15 dollar classes. No need to sign up for any of the classes just drop on in. No expiration date.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Montly Class Membership</td>
                        <td>$120</td>
                        <td>
                            <p>
                                You can use this for any and all of the drop in classes on the schedule. Benefits include 10% off personal training. This is a monthly membership 
                                and payments will reoccur each month until Summit Strength & Fitness is notified to cancel the membership.                            
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Youth Climbing Team</td>
                        <td>$65</td>
                        <td>
                            <p>
                                It’s our goal to provide to the future Summit Climbing team professional coaching, a private facility, and inspiration to work hard 
                                and have just as much fun (2x per week coached, unlimited open gym time per gym schedule). 
                            </p>
                            <p>
                                The 35 dollar enrollment fee will cover a one on one assessment with one of our coaches to go over the skills, terminology, 
                                rules, expectations, etc. This assessment will be scheduled between yourself and one of our coaches.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Personalized Training Plan for returning Client</td>
                        <td>$75</td>
                        <td>
                            <p>
                                This is a six week plan created to target your weaknesses and maintain your strengths. Available for climbing specific, sport specific, or 
                                general fitness. The plan will be created around the resources available to you, your time commitment, and your goals. Included is an end of the 
                                week communication w/ coach Kubi (email, phone, Skype your preference) in which the plan will be modified if necessary based on your progress. 
                                Add on's include a discounted private session at Summit with coach Kubi at any point before or during your plan.
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default GymInformationContainer;
