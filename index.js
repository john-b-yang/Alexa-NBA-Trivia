/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [{
    "How many championships did Los Angeles Lakers legend Kobe Bryant win?": [
        "5",
        "3",
        "4",
        "2",
        "6"
    ]
}, {
    "What draft class was Lebron James part of?": [
        "Class of 2003",
        "Class of 1998",
        "Class of 2007",
        "Class of 2000"
    ]
}, {
    "Where was the 2007 All Star Game held?": [
        "Los Angeles",
        "New Orleans",
        "Phoenix",
        "New York"
    ]
}, {
    "Who is the NBA's leader in three pointers made?": [
        "Ray Allen",
        "Stephen Curry",
        "Reggie Miller",
        "Klay Thompson"
    ]
}, {
    "Which Houston Rockets legend coined the move The Dream Shake": [
        "Hakeem Olajuwon",
        "Yao Ming",
        "Dwight Howard",
        "Tracy McGrady"
    ]
}, {
    "Of the following former Thunder players, who is still playing for Oklahoma City?": [
        "Russell Westbrook",
        "Kevin Durant",
        "James Harden",
        "Reggie Jackson",
        "Serge Ibaka"
    ]
}, {
    "Who is the all time leader in blocks": [
        "Hakeem Olajuwon",
        "Kareem Abdul Jabbar",
        "Anthony Davis",
        "Dikembe Mutumbo"
    ]
}, {
    "Which former NBA player goes by the nickname Big Diesel": [
        "Shaquille O'Neal",
        "Rasheed Wallace",
        "Ben Wallace",
        "Wilt Chamberlain"
    ]
}, {
    "Which NBA team boasts the most NBA championships?": [
        "Boston Celtics",
        "Los Angeles Lakers",
        "Miami Heat",
        "Golden State Warriors"
    ]
}, {
    "Who won the 2010 NBA Finals?": [
        "Los Angeles Lakers",
        "Cleveland Cavaliers",
        "Orlando Magic",
        "Denver Nuggets"
    ]
}, {
    "Where were the Los Angeles Lakers originally based?": [
        "Minneapolis, Minnesota",
        "Detroit, Michigan",
        "Rochester, New York",
        "Baltimore, Maryland"
    ]
}, {
    "Wilt Chamberlain set the single game scoring record of 100 points. Which player has the second highest total points in a single game?": [
        "Kobe Bryant",
        "Lebron James",
        "Stephen Curry",
        "Carmelo Anthony"
    ]
}, {
    "Who is the winningest coach in NBA history?": [
        "Phil Jackson",
        "Pat Riley",
        "Red Auerbach",
        "Doc Rivers"
    ]
}, {
    "Who was guarding Michael Jordan when he scored a buzzer beater in Game 6 to beat Cleveland in the 1989 playoffs?": [
        "Craig Elho",
        "Charles Barkley",
        "Steve Kerr",
        "Gary Payton"
    ]
}, {
    "How Long is a regulation NBA game?": [
        "40 minutes",
        "48 minutes",
        "60 minutes",
        "56 minutes"
    ]
}, {
    "How long is the shot clock for NBA teams?": [
        "24 seconds",
        "35 seconds",
        "30 seconds",
        "16 seconds"
    ]
}, {
    "Which former player was the inspiration for the NBA logo?": [
        "Jerry West",
        "Wilt Chamberlain",
        "Elgin Baylor",
        "Oscar Robertson",
        "Bill Russell"
    ]
}, {
    "Which one of these players went directly from high school to the NBA": [
        "Monta Ellis",
        "John Wall",
        "Kevin Durant",
        "Klay Thompson"
    ]
}, {
    "Who was the NBA's 2016 Rookie of the Year?": [
        "Karl Anthony Towns",
        "D'Angelo Russell",
        "Kristaps Porzingis",
        "Jahlil Okafor"
    ]
}, {
    "What was the former team name of the New Orleans Pelicans?": [
        "Hornets",
        "Royals",
        "Bullets",
        "Hurricanes"
    ]
}, {
    "In what season did the NBA adopt the 3-point shot?": [
        "1979",
        "1969",
        "1991",
        "1985"
    ]
}, {
    "Which Spurs legend, famously named Ice, was called so because he never seemed to sweat?": [
        "George Gervin",
        "Thomas Robinson",
        "Tim Duncan",
        "Kawhi Leonard"
    ]
}, {
    "How long does an NBA team have to get the ball across halfcourt?": [
        "8 seconds",
        "24 seconds",
        "30 seconds",
        "16 seconds"
    ]
}, {
    "Which manufacturer makes the official NBA game ball?": [
        "Spalding",
        "Wilson",
        "Nike",
        "Adidas"
    ]
}, {
    "Of the two Splash Brothers, who has a better career three point percentage?": [
        "Stephen Curry",
        "Klay Thompson"
    ]
}, {
    "Who was the winner of the 2016 NBA Slam Dunk Contest?": [
        "Zach Lavine",
        "Aaron Gordon",
        "Giannis Antetoukounmpo",
        "Andre Drummond"
    ]
}, {
    "Of the following players, who has won an NCAA college basketball title and an Olympic Medal?": [
        "Magic Johnson",
        "Kevin Durant",
        "Carmelo Anthony",
        "Larry Bird"
    ]
}, {
    "In the 2010 Cleveland versus Magic Eastern Comference Finals, in which game did Lebron James score a game winning buzzer beater?": [
        "Game 2",
        "Game 3",
        "Game 4",
        "Game 1"
    ]
}, {
    "First with the Timberwolves, then the Celtics, this power forward was one of the greatest trash talkers and post scoreres in the game": [
        "Kevin Garnett",
        "Robert Parish",
        "Kevin Love",
        "Scottie Pippen"
    ]
}, {
    "Often hailed as the greatest one two punch, Kobe Bryant and which NBA player won multiple titles together in the early two thousands?": [
        "Shaquille O'Neal",
        "Pau Gasol",
        "Derek Fisher",
        "Andrew Bynum"
    ]
}, {
    "Malace in the Palace, Panda Friend, and Metta World Peace. Who was this swingman who played for the Pacers and Rockets before going on to win an NBA title with the Lakers?": [
        "Ron Artest",
        "Trevor Ariza",
        "Shannon Brown",
        "Javale McGee"
    ]
}, {
    "Malace in the Palace occurred between the Detroit Pistons and which other team?": [
        "Indiana Pacers",
        "Portland Trail Blazers",
        "Charlotte Hornets",
        "Phoenix Suns"
    ]
}, {
    "This Fremont State product went on to win the NBA Most Improved Player Award and led his team to the Eastern Conference Finals in 2013. Who is he?": [
        "Paul George",
        "Kemba Walker",
        "John Wall",
        "Jeremy Lin"
    ]
}, {
    "Thirteen points in thirty three seconds. Who shocked the Spurs and stole the game in spectacular fashion during this 2007 regular season game?": [
        "Tracy McGrady",
        "Kobe Bryant",
        "Vince Carter",
        "Steve Nash"
    ]
}, {
    "In 2011, comminssioner David Stern blocked a trade between Pau Gasol and which player that prevented the Los Angeles Lakers from forming a super team?": [
        "Chris Paul",
        "Chris Bosh",
        "Dwight Howard",
        "Demarcus Cousins"
    ]
}, {
    "During the 2017 Regular Season, Stephen Curry set the record for most three pointers made in one game with an astounding thirteen from beyond the arc. Which player comes in second for most threes in a game?": [
        "Dontyell Marshall",
        "Ray Allen",
        "Jalen Rose",
        "Paul Pierce"
    ]
}, {
    "Which former Toronto Raptor will block you on Twitter if you post 81 on his feed, in reference to the 81 points Kobe Bryant scored on him?": [
        "Jalen Rose",
        "Chris Bosh",
        "Vince Carter",
        "Kyle Lowry"
    ]
}, {
    "The 2008 Boston Celtics, one of the greatest NBA super teams, featured a Big Four of Paul Pierce, Kevin Garnett, Ray Allen, and which other player?": [
        "Rajon Rondo",
        "Isaiah Thomas",
        "Delonte West",
        "Avery Bradley"
    ]
}, {
    "Who is the all time leader in points scored?": [
        "Kareem Abdul-Jabbar",
        "Michael Jordan",
        "Kobe Bryant",
        "Lebron James"
    ]
}, {
    "What team won the very first NBA game?": [
        "New York Knicks",
        "Philadelphia Warriors",
        "Chicago Stags",
        "Toronoto Huskies"
    ]
}, {
    "Which NBA player scored 100 points on March 2, 1962?": [
        "Wilt Chamberlain",
        "Oscar Robertson",
        "Elgin Baylor",
        "Kareem Abdul-Jabbar"
    ]
}, {
    "Who was the first player in NBA history to be selected MVP by a unanimous vote?": [
        "Stephen Curry",
        "Magic Johnson",
        "Michael Jordan",
        "Steve Nash"
    ]
}, {
    "Who is the NBA leader in all time assists?": [
        "John Stockton",
        "Jason Kidd",
        "Gary Payton",
        "Chris Paul"
    ]
}, {
    "What kind of shot did Joe Fulks create to score 63 points in one game in 1949": [
        "Jump Shot",
        "Fade Away",
        "Turn Around",
        "Hook Shot"
    ]
}, {
    "The unguardable shot, also known as the sky hook, was architectured by this UCLA graduate and six time NBA champion": [
        "Kareem Abdul Jabbar",
        "Shaquille O'Neal",
        "Michael Jordan",
        "Bill Russell"
    ]
}, {
    "What team owns the longest winning streak in NBA history?": [
        "Los Angeles Lakers",
        "Miami Heat",
        "Boston Celtics",
        "Golden State Warriors"
    ]
}, {
    "Who is the all time leading scorer in men's college basketball?": [
        "Pete Maravich",
        "Larry Bird",
        "Kevin Durant",
        "John Wall"
    ]
}, {
    "Who was the first woman to dunk in an WNBA playoff game?": [
        "Brittney Griner",
        "Lisa Leslie",
        "Tamika Catchings",
        "Elena Della Donne"
    ]
}, {
    "What team was Kawhi Leonard originally drafted by before being traded immediately to the Spurs?": [
        "Indiana Pacers",
        "Milwaukee Bucks",
        "Brooklyn Nets",
        "Minnesota Timberwolves"
    ]
}, {
    "Which player retired abruptly on November 7, 1991": [
        "Magic Johnson",
        "Dominique Wilkins",
        "Clyde Drexler",
        "Larry Bird"
    ]
}, {
    "Who was Dwight Howard's Kryptonite and winner of the 2009 NBA Dunk Contest?": [
        "Nate Robinson",
        "Zach Lavine",
        "Blake Griffin",
        "Terrence Ross"
    ]
}, {
    "Which team was Pau Gasol originally drafted by during the 2001 NBA Draft?": [
        "Atlanta Hawks",
        "Memphis Grizzlies",
        "Los Angeles Lakers",
        "San Antonio Spurs"
    ]
}, {
    "The starting lineup for the 1996 Chicago Bulls included Scottie Pippen, Michael Jordan, Dennis Rodman, Toni Kukoc and which other player?": [
        "Robert Parish",
        "Horace Grant",
        "Steve Kerr",
        "Ron Harper"
    ]
}, {
    "The starting lineup for the 2015 Golden State Warriors included Stephen Curry, Klay Thompson, Harrison Barnes, Draymond Green, and which other player?": [
        "Andrew Bogut",
        "Andre Iguodala",
        "David Lee",
        "Shaun Livingston"
    ]
}, {
    "In the 2015 NBA Championship series featuring the Cleveland Cavaliers and Golden State Warriors, who was awarded the NBA Finals MVP Award?": [
        "Andre Iguodala",
        "Stephen Curry",
        "Lebron James",
        "Klay Thompson"
    ]
}, {
    "How many points did Kobe Bryant score in his first NBA game?": [
        "0",
        "15",
        "20",
        "6"
    ]
}, {
    "Who is the only basketball coach to have won both NCAA and NBA Championships?": [
        "Larry Brown",
        "Red Auerbach",
        "Adolph Rupp",
        "Pat Riley"
    ]
}, {
    "Where were the Detroit Pistons originally based?": [
        "Fort Wayne, Indiana",
        "Lansing, Michigan",
        "Austin, Texas",
        "Akron, Ohio"
    ]
}, {
    "Which NBA player was nicknamed Chocolate Thunder?": [
        "Dominique Wilkins",
        "Shaquille O'Neal",
        "Shawn Kemp",
        "Aaron Gordon"
    ]
}, {
    "This Number 1 Draft Pick selected by the Wizards was later embarrassed by Steven A. Smith after he was traded away from the Lakers for Pau Gasol": [
        "Kwame Brown",
        "Anthony Bennett",
        "Lamar Odom",
        "Carmelo Anthony"
    ]
}, {
    "Of the following, all except for one player was selected for the NBA All Star game more than twelve times": [
        "Allen Iverson",
        "Moses Malone",
        "Karl Malone",
        "Tim Duncan"
    ]
}, {
    "Who holds the record for most blocked shots?": [
        "Hakeem Olajuwon",
        "Dikembe Mutumbo",
        "David Robinson",
        "Shaquille O'Neal"
    ]
}, {
    "Who was the only player to have been awarded MVP in both the NBA and ABA?": [
        "Julius Erving",
        "Kareem Abdul Jabbar",
        "Bob McAdoo",
        "Elgin Baylor"
    ]
}, {
    "Which NBA team won eight consecutive championships from 1959 to 1966?": [
        "Boston Celtics",
        "Minneapolis Lakers",
        "Philedelphia Warriors",
        "Baltimore Bullets"
    ]
}, {
    "The 1966 Texas Western Miners made history by being the first NCAA college basketball team with an all African American lineup to win an NCAA Championship. Which team did they beat in the championship game?": [
        "Kentucky Wildcats",
        "Iowa Hawkeyes",
        "Duke Blue Devils",
        "UCLA Bruins"
    ]
}, {
    "The Answer led the Philadelphia Sixers single handedly to the 2001 NBA Finals, but eventually fell to the Lakers in the championship series in five games. Who is this player?": [
        "Allen Iverson",
        "Vince Carter",
        "Steve Nash",
        "Kobe Bryant"
    ]
}, {
    "In the 2000 Olympics during a game between USA and France, this Toronto Raptors player jumped over an opponent before dunking the ball. Who is he?": [
        "Vince Carter",
        "Tracy McGrady",
        "Kevin Garnett",
        "Gary Payton"
    ]
}, {
    "In 1965, this St. Louis Hawks player became the inaugural member of the 20000 career points club. What was his name?": [
        "Bob Petit",
        "Cliff Hagan",
        "Bob McAdoo",
        "Jerry West"
    ]
}, {
    "What was Kareem Abdul Jabbar's original name?": [
        "Lewis Alcindor",
        "Devin Mcdonald",
        "Larry Whitehouse",
        "Robert Gordon"
    ]
}, {
    "Which team did Wilt Chamberlain score his record 100 points against?": [
        "New York Knicks",
        "Baltimore Bullets",
        "Cleveland Cavaliers",
        "Philadelphia Warriors"
    ]
}, {
    "Patrick Ewing is most recognized as a member of the New York Knicks. Which team did he finish his career with?": [
        "Orlando Magic",
        "Utah Jazz",
        "Charlotte Hornets",
        "Portland Trail Blazer"
    ]
}, {
    "In the 1984 NBA Draft, Hakeem Olajuwon was drafted first and Michael Jordan was drafted third. Who was the second pick by the Trail Blazers?": [
        "Sam Bowie",
        "Charles Barkley",
        "Sam Perkins",
        "John Stockton"
    ]
}, {
    "In which African country was Hakeem Olajuwon born?": [
        "Nigeria",
        "South Africa",
        "Mali",
        "Togo"
    ]
}, {
    "Which player scored the most points in a single season at 4029 points?": [
        "Wilt Chamberlain",
        "Michael Jordan",
        "Kobe Bryant",
        "Kareem Abdul Jabbar"
    ]
}, {
    "Throughout the course of the 1981-1982 season, one NBA team scored at least 100 points every game. Which team was it?": [
        "Denver Nuggets",
        "Chicago Bulls",
        "Los Angeles Lakers",
        "Boston Celtics"
    ]
}, {
    "Who is the highest paid NBA player in league history?": [
        "Kevin Garnett",
        "Michael Jordan",
        "Lebron James",
        "Dirk Nowitzki"
    ]
}, {
    "Who is the tallest player in NBA history?": [
        "Manute Bol",
        "Yao Ming",
        "Kareem Abdul Jabbar",
        "Shawn Bradley"
    ]
}, {
    "An acrobatic, human highlight film, which point guard was the first to be nicknamed White Chocolate?": [
        "Jason Williams",
        "Steve Nash",
        "Jason Kidd",
        "Allen Iverson"
    ]
}, {
    "Known fondly as the Big O, this Milwaukee Buck is so far the only player to average a triple double for the season in NBA history": [
        "Oscar Robertson",
        "Michael Redd",
        "Ray Allen",
        "Otis Thorpe"
    ]
}, {
    "The 2014-2015 Atlanta Hawks were one of nine teams in NBA History to have an all time high 4 team members selected to the NBA All Star game. Three of them were Al Horford, Paul Millsap, and Kyle Korver. Who was the fourth?": [
        "Jeff Teague",
        "Dwight Howard",
        "DeMarre Carroll",
        "Joe Johnson"
    ]
}, {
    "Derrick Rose won the NBA Rookie of the Year award in 2009. How many years did it take for him to win his first and only MVP award?": [
        "2",
        "3",
        "4",
        "5"
    ]
}];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== "amzn1.ask.skill.5f2db6f5-8fe1-4eff-b0de-4c8c2e0248a1") {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({
                requestId: event.request.requestId
            }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId +
        ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId +
        ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId +
        ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId +
        ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString() +
        " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index) {
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++) {
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT) {
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++) {
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of " +
                GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + " points. " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. " +
        "For example, say one, two, three, or four. To start a new game at any time, say, start game. " +
        "To repeat the last question, say, repeat. " +
        "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . " +
        "Would you like to keep playing?";
    var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
