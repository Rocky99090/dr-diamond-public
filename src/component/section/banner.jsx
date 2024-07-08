import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKey, apiUrl, handleRedirect, img } from "../../env/credentials";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroThree from "./hero/hero";
const BannerSection = () => {
    const offset = 0;
    const [currentMatches, setMatches] = useState([]);
    const [firstMatches, setFirstMatches] = useState('INDIAN PREMIERE LEAGUE');
    const [filteredMatchesByDate, setFilteredMatchesByDate] = useState([]);
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
    const findMatchByDate = (filteredMatches) => {
        console.log(filteredMatches)
        const today = new Date();
        const todayStr = formatIndianTime(today)
    
        // Calculate the next day and the day after next
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        const nextDayStr = formatIndianTime(nextDay)
    
        const dayAfterNext = new Date(today);
        dayAfterNext.setDate(today.getDate() + 2);
        const dayAfterNextStr = formatIndianTime(dayAfterNext)
    
        // Filter matches based on today's date
        const todayMatches = filteredMatches.filter(match => {
            console.log('match.matchDate:', match.matchDate);
            console.log('todayStr:', todayStr);
            return match.matchDate === todayStr;
        });
    
        if (todayMatches.length > 0) {
            return todayMatches;
        }
    
        // If there are no matches for today, check the next day
        const nextDayMatches = filteredMatches.filter(match => match.matchDate === nextDayStr);
    
        if (nextDayMatches.length > 0) {
            return nextDayMatches;
        }
    
        // If there are no matches for the next day, check the day after next
        const dayAfterNextMatches = filteredMatches.filter(match => match.matchDate === dayAfterNextStr);
       
    
        return dayAfterNextMatches;
    };
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(apiUrl, {
              params: {
                apikey: apiKey,
              }
            });
            console.log(response)
            // Check if response is not null
            if (response?.data?.data) {
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
            console.log(formattedMatches)
              const teams = {
                "IPL": ["Chennai Super Kings [CSK]", "Delhi Capitals [DC]", "Kolkata Knight Riders [KKR]", "Mumbai Indians [MI]", "Punjab Kings [PBKS]", "Rajasthan Royals [RR]", "Royal Challengers Bengaluru [RCB]", "Sunrisers Hyderabad [SRH]", "Gujarat Titans [GT]", "Lucknow Super Giants [LSG]"],
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
      
                  // Log the match date and tomorrow's date (for debugging purposes)
                  console.log("Match date:", matchDate);
      
                  // Check if the match is associated with the selected teams and if the match date is before or on tomorrow
                  const isTeamMatch = selectedTeams.includes(match.teamName1) || selectedTeams.includes(match.teamName2);
                  let isDateValid = matchDate && matchDate <= tomorrow;
                  if (!isDateValid) {
                    isDateValid = matchDate && matchDate <= tomorrow;
                  }
                  // Log the date condition result (for debugging purposes)
                  console.log("Date condition result:", isDateValid);
      
                  // Return true if the match is associated with the selected teams and the match date is valid
                  return isTeamMatch && isDateValid;
                });
      
                return filteredMatches;
              }
      
              // Usage
              const iplCategory = "IPL"; // Specify the category you want to use for filtering (e.g., "ipl" or "mainTeams")
      
              const iplFilteredMatches = filterMatchesByTeamCategory(formattedMatches, iplCategory);
              console.log('iplFilteredMatches:', iplFilteredMatches);
              setMatches(iplFilteredMatches);
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
      
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one match at a time
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        arrows: false, // Disable navigation arrows
    };
    const matchesToDisplay = currentMatches.slice(0, 2);

    const renderMatch = (match, index) => {
        const {
            logoTeamOne,
            teamName1,
            logoTeamTwo,
            teamName2,
            team1Score,
            wicketsTeamOne,
            oversTeamOne,
            team2Score,
            wicketsTeamTwo,
            oversTeamTwo,
            matchDate
        } = match;

        return (
            <div key={index} className="slide">
                <div className="banner-content text-center">
                    <h4 className="fw-normal theme-color mb-4">{`Match ${index + 1}`}</h4>
                    <span className="fw-normal theme-color mb-4">{matchDate}</span>
                    <h2>
                        {teamName1}
                        <p>
                            {wicketsTeamOne ? (
                                <p>
                                    Score: {team1Score}/{wicketsTeamOne} in {oversTeamOne} overs
                                </p>
                            ) : (
                                <p>{team1Score}</p>
                            )}
                        </p>
                        vs {teamName2}
                        <p>
                            {wicketsTeamTwo ? (
                                <p>
                                    Score: {team2Score}/{wicketsTeamTwo} in {oversTeamTwo} overs
                                </p>
                            ) : (
                                <p>{team2Score}</p>
                            )}
                        </p>
                    </h2>
                    <div onClick={handleRedirect} className="default-button reverse-effect">
<span>Whatsapp Now <i class="icofont-whatsapp"></i></span>
                    </div>
                </div>
                <div className="banner-thumb d-flex justify-content-between align-items-center">
                    <div className="banner-thumb-img">
                        <img className="img-banner" src={logoTeamOne} alt="Team One Logo" />
                    </div>
                    <div className="banner-thumb-img">
                        <img className="img-banner" src={logoTeamTwo} alt="Team Two Logo" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Fragment>
            {matchesToDisplay.length>0?
        <section className="banner-section padding-top" style={{ backgroundImage: matchesToDisplay.length>0?'url(/assets/images/banner/main-banner.png)':'url(/assets/images/banner/main-banner.png)' }}>
            <div className="container">
                {matchesToDisplay.length === 1 ? (
                    // Render a single match directly if there is only one match
                    renderMatch(matchesToDisplay[0], 0)
                ) : (
                    // Otherwise, use the slider to handle multiple matches
                    <Slider {...sliderSettings}>
                        {matchesToDisplay.map((match, index) => renderMatch(match, index))}
                    </Slider>
                )}
            </div>
        </section>:
        <HeroThree />}
        </Fragment>
    );
};

export default BannerSection;
