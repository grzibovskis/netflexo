const menu = [
    {
        id: 1,
        title: "Star Wars: Episode I - The Phantom Menace",
        category: "StarWars",
        year: "1999",
        img: "./images/starwars/sw1.jpg",
        desc: `Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory. `,
    },
    {
        id: 2,
        title: "Star Wars: Episode II - Attack of the Clones",
        category: "StarWars",
        year: "2002",
        img: "./images/starwars/sw2.jpg",
        desc: `Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.`,
    },
    {
        id: 3,
        title: "Star Wars: Episode III - Revenge of the Sith",
        category: "StarWars",
        year: "2005",
        img: "./images/starwars/sw3.jpg",
        desc: `Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.`,
    },
    {
        id: 4,
        title: "Solo: A Star Wars Story",
        category: "StarWars",
        year: "2018",
        img: "./images/starwars/sw4.jpg",
        desc: `Board the Millennium Falcon and journey to a galaxy far, far away in an epic action-adventure that will set the course of one of the Star Wars saga's most unlikely heroes.`,
    },
    {
        id: 5,
        title: "Rogue One: A Star Wars Story",
        category: "StarWars",
        year: "2016",
        img: "./images/starwars/sw5.jpg",
        desc: `In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.`,
    },
    {
        id: 6,
        title: "Star Wars: Episode IV - A New Hope",
        category: "StarWars",
        year: "1977",
        img: "./images/starwars/sw6.jpg",
        desc: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
    },
    {
        id: 7,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        category: "StarWars",
        year: "1980",
        img: "./images/starwars/sw7.jpg",
        desc: `After the Rebels are overpowered by the Empire, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.`,
    },
    {
        id: 8,
        title: "Star Wars: Episode VI - Return of the Jedi",
        category: "StarWars",
        year: "1983",
        img: "./images/starwars/sw8.jpg",
        desc: `After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.`,
    },
    {
        id: 9,
        title: "Star Wars: Episode VII - The Force Awakens",
        category: "StarWars",
        year: "2015",
        img: "./images/starwars/sw9.jpg",
        desc: `As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.`,
    },
    {
        id: 10,
        title: "Star Wars: Episode VIII - The Last Jedi",
        category: "StarWars",
        year: "2017",
        img: "./images/starwars/sw10.jpg",
        desc: `The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.`,
    },
    {
        id: 11,
        title: "Star Wars: Episode IX - The Rise of Skywalker",
        category: "StarWars",
        year: "2019",
        img: "./images/starwars/sw11.jpg",
        desc: `In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.`,
    },
    {
        id: 12,
        title: "Inglourious Basterds",
        category: "Action",
        year: "2009",
        img: "./images/otherfilms/1.jpg",
        desc: `In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.`,
    },
    {
        id: 13,
        title: "Snatch",
        category: "Action",
        year: "2000",
        img: "./images/otherfilms/2.jpg",
        desc: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    },
    {
        id: 14,
        title: "One Flew Over the Cuckoo's Nest",
        category: "Drama",
        year: "1975",
        img: "./images/otherfilms/3.jpg",
        desc: `In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.`,
    },
    {
        id: 15,
        title: "The Green Mile",
        category: "Drama",
        year: "1999",
        img: "./images/otherfilms/4.jpg",
        desc: `The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.`,
    },
    {
        id: 16,
        title: "The Usual Suspects",
        category: "Drama",
        year: "1995",
        img: "./images/otherfilms/5.jpg",
        desc: `A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.`,
    },
    {
        id: 17,
        title: "Whiplash",
        category: "Music",
        year: "2014",
        img: "./images/otherfilms/6.jpg",
        desc: `A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.`,
    },
    {
        id: 18,
        title: "American Beauty",
        category: "Drama",
        year: "1999",
        img: "./images/otherfilms/7.jpg",
        desc: `A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.`,
    },
    {
        id: 20,
        title: "A Beautiful Mind",
        category: "Drama",
        year: "2001",
        img: "./images/otherfilms/8.jpg",
        desc: `After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.`,
    },
    {
        id: 21,
        title: "The Big Lebowski",
        category: "Comedy",
        year: "1998",
        img: "./images/otherfilms/9.jpg",
        desc: `Ultimate L.A. slacker Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.`,
    },
    {
        id: 22,
        title: "Superbad",
        category: "Comedy",
        year: "2007",
        img: "./images/otherfilms/10.jpg",
        desc: `Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.`,
    },
    {
        id: 23,
        title: "Die Hard",
        category: "Action",
        year: "1988",
        img: "./images/otherfilms/11.jpg",
        desc: `A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.`,
    },
    {
        id: 24,
        title: "The Hateful Eight",
        category: "Action",
        year: "2015",
        img: "./images/otherfilms/12.jpg",
        desc: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.`,
    },
    {
        id: 25,
        title: "Interstellar",
        category: "Sci-Fi",
        year: "2015",
        img: "./images/otherfilms/13.jpg",
        desc: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
    },
    {
        id: 26,
        title: "Joker",
        category: "Action",
        year: "2019",
        img: "./images/otherfilms/14.jpg",
        desc: `A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.year}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                    </div>
                </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item){
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    }, ['all'])
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category} >${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category) {
                    return menuItem
                }
            });
            if(category === 'all') {
                displayMenuItems(menu);
            }else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
