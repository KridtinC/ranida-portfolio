import { SkillDetailProps, YearDetailProps } from "../pages/info/Info";

const EducationsInfo: YearDetailProps[] = [
    {
        years: "2016-2019",
        title: `B.F.A Media Arts, 1st class honors\n(Graphic Design Major)\nGPA 3.78`,
        description: `King Mongkut’s University of\nTechnology Thonburi`
    },
    {
        years: "2013-2015",
        title: `Senior high school\nSciences-Mathematics (Computer)`,
        description: "Horwang School",
    },
    {
        years: "2009-2012",
        title: `Junior high school\nPhraharuthai Donmueang School,`,
    }
]

const ExperiencesInfo: YearDetailProps[] = [
    {
        years: "2021",
        title: "Art director",
        description: "Rise Creative Space, Advertising Agency",
    },
    {
        years: "2020-2021",
        title: "Graphic Designer",
        description: "Calm Outdoors, Clothing Brand",
    },
    {
        years: "2019",
        title: "Graphic Designer (Internship)",
        description: "Practical Design Studio, Graphic Studio",
    },
    {
        years: "2019",
        title: "Graphic Designer",
        description: "Haroon Mosque Shop Makeover Project",
    },
    {
        years: "2018",
        title: "Graphic Designer and Administrator",
        description: "Readery, Online Bookstore",
    }
]

const SkillsInfo: SkillDetailProps[] = [
    {
        title: "CREATIVE SKILLS",
        skillList: ["BRANDING", "ILLUSTRATION", "ADVERTISING", "UX/UI DESIGN"]
    },
    {
        title: "SOFTWARE SKILLS",
        skillList: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe Lightroom", "Figma"]
    },
    {
        title: "LANGUAGE",
        skillList: ["Thai (Mother Tongue)", "English (Upper Intermediate)", "Japanese (Beginner)"]
    }
]

export {
    EducationsInfo,
    ExperiencesInfo,
    SkillsInfo
}