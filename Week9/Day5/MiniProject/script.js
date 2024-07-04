const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
    //function that will create all DOM elements for the cards


   
    const robotContainer = document.getElementById('robotContainer');

    function createRobotCard(robot) {
        const robotCard = document.createElement('div');
        robotCard.className = 'robotCard';

        const robotImage = document.createElement('img');
        robotImage.src = robot.image;
        robotImage.alt = robot.name;

        const robotName = document.createElement('h3');
        robotName.textContent = robot.name;

        const robotMail = document.createElement('p');
        robotMail.textContent = robot.email;

        robotCard.appendChild(robotImage);
        robotCard.appendChild(robotName);
        robotCard.appendChild(robotMail);

        robotContainer.appendChild(robotCard);
        return robotCard;

    };

     //make a forEach loop to display all the cards:

     /*robots.forEach(robot => {
        const robotCard = createRobotCard(robot);
        robotContainer.appendChild(robotCard);
     })*/
    const robotCards = robots.map(createRobotCard);


    //filter:
    const robotInput = document.getElementById('robotInput');

   robotInput.addEventListener('input', function(event){
        event.preventDefault();
        const searchValue = robotInput.value.toLowerCase();
        //console.log(searchValue);
        robots.forEach((robot, index) => {
            if (robot.name.toLowerCase().includes(searchValue)){
                robotCards[index].style.display = '';
                //console.log(robot.email);
            }
            else {
                robotCards[index].style.display = 'none';
                //console.log("not found");
            }
        })

    }

)


