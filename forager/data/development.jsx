// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const messages = {
    warning: {
        header: "WARNING",
        icon: "/icons/icon_warning.svg",
        message: "This is a toxic species, proceed with caution.",
        color: "red",
    },
    attention: {
        header: "ATTENTION!",
        icon: "/icons/icon_warning.svg",
        message:
            "Our system can make mistakes! Remember to verify important information and use your own judgment to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake.",
        color: "red",
    },
};

const yourMushroom = {
    capShape: "Flat",
    capColor: "Brown",
    capTexture: "Smooth",
    gillType: "Free",
    gillColor: "White",
    stemShape: "Slender",
    stemColor: "White",
    stemRing: "Absent",
    habitat: "?"
};

const distinguishingFeatures = {
    capShape: "Cap Shape",
    capColor: "Cap Color",
    capTexture: "Cap Texture",
    gillType: "Gill Type",
    gillColor: "Gill Color",
    stemShape: "Stem Shape",
    stemColor: "Stem Color",
    stemRing: "Stem Ring",
    habitat: "Habitat"
};

const knownMushroom = {
    capShape: "Flat",
    capColor: "Yellow",
    capTexture: "Smooth",
    gillType: "Free",
    gillColor: "White",
    stemShape: "Slender",
    stemColor: "White",
    stemRing: "Absent",
    habitat: "Near oak/beech"
};

const mushroomData = {
    mushrooms: [
        {
            name: "Your Photo",
            imageSrc: "/images/your_mushroom.png",
            toxic: false,
            isFavorite: false
        },
        {
            name: "Death Cap",
            imageSrc: "/images/death_cap.png",
            toxic: true,
            isFavorite: false
        },
        {
            name: "Paddy Straw",
            imageSrc: "/images/paddy_straw.png",
            toxic: false,
            isFavorite: true,
            matchPercent: "90%",
            matchColor: "#73D89F"
        },
        {
            name: "Destroying Angel",
            imageSrc: "/images/destroying_angel.png",
            toxic: true,
            isFavorite: false,
            matchPercent: "80%",
            matchColor: "#FF6666"
        },
        {
            name: "False Death Cap",
            imageSrc: "/images/false_death.png",
            toxic: true,
            isFavorite: false,
            matchPercent: "70%",
            matchColor: "#FF7E7E"
            
        },
        {
            name: "Puffball",
            imageSrc: "/images/puffball.png",
            toxic: false,
            isFavorite: false,
            matchPercent: "60%",
            matchColor: "#A5A5A5"
        }
    ]
}

export const filterData = {
    tags: ["Favorites", "Recent"],
    Regions: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    Categories: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };
  
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {messages, dummyData, filterData, yourMushroom, distinguishingFeatures, knownMushroom, mushroomData}; // Requires import {warningMessage, dummyData} from './data/development.js';
