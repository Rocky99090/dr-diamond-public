import { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";
import axios from "axios";
import { apiKey, apiUrl, handleRedirect, img } from "../../env/credentials";
import { Pagination, Stack, Typography } from "@mui/material";
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
    const [menCurrentMatches, setMenMatches] = useState([]);
    const [womenCurrentMatches, setWomenMatches] = useState([]);
    const [firstMatches, setFirstMatches] = useState('IPL');
    const [secondMatches, setSecondMatches] = useState("Women's Matches");
    const [thirdMatches, setThirdMatches] = useState("Men's Matches");
    function formatIndianTime(dateString) {
        // Convert the date string to a Date object
        const date = new Date(dateString);
        
        // Define arrays to help with month formatting
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Extract day, month, and year
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        

        // Format the date and time
        const formattedDate = `${day} ${month}, ${year}`;
        
        return formattedDate;
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(apiUrl, {
              params: {
                apikey: apiKey,
              }
            });
      
            // Check if response is not null
            if (response?.data?.data) {
              console.log(response.data);
              const formattedMatches = response.data.data.map(match => ({
                logoTeamOne: match?.t1img ? match.t1img : img,
                series: match?.series ? match.series : 'Unknown',
                teamTag1: match?.t1 ? match.t1 : 'Unknown',
                teamName1: match?.t1 ? match.t1 : 'Unknown',
                team1Score: match?.t1s ? match.t1s : "Still To Bat",
                team2Score: match?.t2s ? match.t2s : "Still To Bat",
                status1: match?.status ? match.status : '',
                logoTeamTwo: match?.t2img ? match.t2img : img,
                teamTag2: match?.t2 ? match.t2 : 'Unknown',
                teamName2: match?.t2 ? match.t2 : 'Unknown',
                matchDate: match?.dateTimeGMT ? formatIndianTime(match.dateTimeGMT) : ''
              }));
      
              const teams = {
                "IPL": ["Chennai Super Kings [CSK]", "Delhi Capitals [DC]", "Kolkata Knight Riders [KKR]", "Mumbai Indians [MI]", "Punjab Kings [PBKS]", "Rajasthan Royals [RR]", "Royal Challengers Bengaluru [RCB]", "Sunrisers Hyderabad [SRH]", "Gujarat Titans [GT]", "Lucknow Super Giants [LSG]"],
                "Women": ["Pakistan Women [PAKW]", "India Women [INDW]","Bangladesh Women [BANW]","Sri Lanka Women [SLW]"],
                "Men": ["New Zealand [NZ]", "India [IND]","Bangladesh [BAN]","Sri Lanka [SL]","Australia [AUS]","South Africa [RSA]"],
                // Add more team categories as needed
              };
      
              function filterMatchesByTeamCategory(formattedMatches, category) {
                // Get the list of teams based on the specified category
                const selectedTeams = teams[category];
      
                // Filter matches based on whether both teams in a match are in the selectedTeams array
                // Get the current date and set the time to 00:00:00 to avoid any time comparison issues
                const today = new Date();
                today.setHours(0, 0, 0, 0);
      
                // Add one day to the current date to get tomorrow's date
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
      
                // Filter matches based on the provided teams and date condition
                const filteredMatches = formattedMatches.filter(match => {
                  // Check if the match date is provided and parse the match date
                  const matchDate = match.matchDate ? new Date(match.matchDate) : null;
      
                  // Check if the match is associated with the selected teams and if the match date is before or on tomorrow
                  const isTeamMatch = selectedTeams.includes(match.teamName1) || selectedTeams.includes(match.teamName2);
                  const isDateValid = matchDate && matchDate <= tomorrow;
      
                  // Return true if the match is associated with the selected teams and the match date is valid
                  return isTeamMatch && isDateValid;
                });
      
                return filteredMatches;
              }
      
              // Usage
              const iplCategory = "IPL"; // Specify the category you want to use for filtering (e.g., "ipl" or "mainTeams")
              const womenCategory = "Women"; // Specify the category you want to use for filtering (e.g., "ipl" or "mainTeams")
              const menCategory = "Men"; // Specify the category you want to use for filtering (e.g., "ipl" or "mainTeams")
      
              const iplFilteredMatches = filterMatchesByTeamCategory(formattedMatches, iplCategory);
              const womenFilteredMatches = filterMatchesByTeamCategory(formattedMatches, womenCategory);
              const menFilteredMatches = filterMatchesByTeamCategory(formattedMatches, menCategory);
      
              setMatches(formattedMatches);
              setWomenMatches(womenFilteredMatches);
              setMenMatches(menFilteredMatches);
              console.log(womenFilteredMatches)
              console.log(menFilteredMatches)
            } else {
              // Handle the case when response is null or data is not available
              console.log("No data available in the response");
            }
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
        <Fragment>
        {currentMatches.length>0 &&
            (
            <section className="match-section padding-top padding-bottom">
                 <div className="container">
                    <div className="section-header">
                    <Typography variant='h4' className="custom-heading" color={"black"}>All Matches</Typography>
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
                            oversTeamTwo,
                            matchDate
                            
                        } = match;
                        return (  
                               
                               <div className="col-12" key={index}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info"><span className="fw-bold">{series}</span></p>
                                                <p className="match-team-info" style={{marginRight:"2em"}}>{matchDate}</p>
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
                                                    <div className="col-xl-4 col-md-12 order-md-3 align-to-end">
                                                        <div className="match-game-info">
                                                            <h4>{teamName2}</h4>
                                                            {wicketsTeamTwo?
                                                            <span className="fw-bold">
                                                            Score: {team2Score}/{wicketsTeamTwo} in {oversTeamTwo} overs</span>
                                                        :<span className="fw-bold" style={{color:"white"}}>{team2Score}</span>}
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
                                 <Stack color={'whitesmoke'} spacing={2}>

                                    <   Pagination
                                    count={pageCount}
                                    page={currentPage}
                                    onChange={handleChangePage} 
                                    variant="outlined" color="primary" />
                                    </Stack> 
                        </div>


                        <div className="button-wrapper text-center mt-5">
                        <div onClick={handleRedirect} className="default-button reverse-effect"><span>Whatsapp Now <i class="icofont-whatsapp"></i></span> </div>
                      </div>
                    </div>
                </div>
            </section>)}
            </Fragment>
    );
};

export default MatchSection;