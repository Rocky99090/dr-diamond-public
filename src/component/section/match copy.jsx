import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";
import axios from "axios";
import { apiKey, apiUrl, img } from "../../env/credentials";
const title = "All matches schedule";
const subtitle = "Anywhere, Anytime";
const btnText = "Browse All Matches";
const Upcomingtitle = "Upcoming Matches";
const Previoutitle = "Previous Matches";

let MatchInfoListOne = [
    {
        imageone: 'assets/images/match/teamsm/teamsm-1.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-2.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
]
let MatchInfoListTwo = [
    {
        imageone: 'assets/images/match/teamsm/teamsm-1.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-2.png',
        alt2: 'game list name',
        title: 'call of duty TOURNAMENT',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
    },
    {
        imageone: 'assets/images/match/teamsm/teamsm-3.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-4.png',
        alt2: 'game list name',
        title: 'LEAGUE BATTLE tournament',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3600',
    },
    {
        imageone: 'assets/images/match/teamsm/teamsm-5.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-6.png',
        alt2: 'game list name',
        title: 'pubg classic tournament',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3400',
    },
]

let MatchInfoListThree = [
    {
        imageone: 'assets/images/match/teamsm/teamsm-7.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-8.png',
        alt2: 'game list name',
        result: '4 - 2',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
    },
    {
        imageone: 'assets/images/match/teamsm/teamsm-9.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-10.png',
        alt2: 'game list name',
        result: '3 - 1',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3600',
    },
    {
        imageone: 'assets/images/match/teamsm/teamsm-11.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-12.png',
        alt2: 'game list name',
        result: '0 - 0',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3400',
    },
]


const MatchSection = () => {
        
    const offset = 0;
    const [currentMatches, setMatches] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              apikey: apiKey,
            }
          });
          console.log(response.data)
          const formattedMatches = response.data.data.map(match => ({
            logoTeamOne: match&&match.t1img? match.t1img:img,
            series:match&&match.series? match.series:'Unknown',
            teamTag1: match&&match.t1? match.t1:'Unknown',
            teamName1: match&&match.t1? match.t1:'Unknown',
            team1Score: match&&match.t1s?match.t1s:"Still To Bat",
            team2Score: match&&match.t2s?match.t2s:"Still To Bat",
            status1 : match&&match.status?match.status:'',
            logoTeamTwo: match&&match.t2img? match.t2img:img,
            teamTag2: match&&match.t2? match.t2:'Unknown',
            teamName2: match&&match.t2? match.t2:'Unknown',
            
          }));
          const iplTeams = ["Chennai Super Kings [CSK]", "Delhi Capitals [DC]", "Kolkata Knight Riders [KKR]", "Mumbai Indians [MI]", "Punjab Kings [PBKS]", "Rajasthan Royals [RR]", "Royal Challengers Bengaluru [RCB]", "Sunrisers Hyderabad [SRH]","Gujarat Titans [GT]","Lucknow Super Giants [LSG]"];

          // Filter out matches where status is "Match not started" and team names do not match IPL teams
          const filteredMatches = formattedMatches.filter(match => match.status1 !== "Match not started" && iplTeams.includes(match.teamName1) && iplTeams.includes(match.teamName2));
        
          setMatches(filteredMatches);
          console.log(filteredMatches)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const itemsPerPage = 3; // Number of matches per page
    const pageCount = Math.ceil(currentMatches.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
            <section className="match-section padding-top padding-bottom" style= {{backgroundImage: "url(/assets/images/match/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row mb-5">
                        {
                    currentMatches.slice(startIndex, endIndex).map((match, index) => {
                        const {
                            logoTeamOne,
                            teamTag1,
                            teamName1,
                            logoTeamTwo,
                            time,
                            date,
                            series,
                            teamTag2,
                            teamName2,
                            team1Score,
                            team2Score,
                            status1,
                            wicketsTeamOne,
                            wicketsTeamTwo,
                            oversTeamOne,
                            oversTeamTwo
                            
                        } = match;
                        return (     <div className="col-12" key={index}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info"><span className="fw-bold">{series}</span></p>
                                                <p className="match-prize">{status1} </p>
                                            </div>
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={logoTeamOne}  /></a>
                                                                </li>
                                                                <li className="text-center">
                                                                    <img className="w-75 w-md-100" src="assets/images/match/vs.png" alt="vs" />
                                                                </li>
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={logoTeamTwo}/></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1 ">
                                                    <div className="match-game-info">
                                                            <h4>{teamName1}</h4>
                                                            {wicketsTeamOne?
                                                            <span className="fw-bold">
                                                            Score: {team1Score}/{wicketsTeamOne} in {oversTeamOne} overs</span>
                                                        :<span className="fw-bold" style={{color:"white"}}>{team1Score}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-12 order-md-3" style={{textAlignLast:'end'}}>
                                                        <div className="match-game-info">
                                                            <h4>{teamName2}</h4>
                                                            {wicketsTeamTwo?
                                                            <span className="fw-bold">
                                                            Score: {team2Score}/{wicketsTeamTwo} in {oversTeamTwo} overs</span>
                                                        :<span className="fw-bold" style={{color:"white"}}>{team2Score}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-md-2 order-md-3">
                                                        <div className="match-game-social d-flex flex-wrap align-items-center justify-content-center">
                                                            <ul className="match-social-list ">
                                                                {/* <SocialMedia /> */}
                                                                <li>
                                                                    <a href="#" className="default-button reverse-effect"><span>GetId</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                  );
                                                })
                                            }
                        </div>

                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Upcomingtitle}</h3>
                                    <div className="row g-3 MatchStyleOne">
                                        {MatchInfoListTwo.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                            <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center"><img src={val.imageone} alt={val.alt1} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single"><img src={val.imagetwo} alt={val.alt2} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/team-single">{val.title}</Link>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <SocialMedia />
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Previoutitle}</h3>
                                    <div className="row g-3 MatchStyleTwo">
                                        {MatchInfoListThree.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                            <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center">
                                                                            <img src={val.imageone} alt={val.alt1} />
                                                                        </Link>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single">
                                                                            <img src={val.imagetwo} alt={val.alt2} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/team-single">{val.result}</Link></h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <SocialMedia />
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default MatchSection;