import Hero from "@/components/Hero";
import MyLectures from "@/components/MyLectures";
import WhatIOffer from "@/components/WhatIOffer";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MyLectures />
      <Testimonials />
      <WhatIOffer />
      <Testimonials
        id="testimonials-offer"
        limit={4}
        itemsOverride={[
          {
            id: 101,
            name: "שלומית תבור",
            role: "",
            content:
              "תודה לד\"ר טלי סופרין רינגולד. ההרצאה היתה מאלפת! למדנו על עוד חידושים מדעיים מדהימים לטובת האנושות.",
          },
          {
            id: 102,
            name: "מלכה קורן",
            role: "אחראית מרכז תרבות חבצלת",
            content:
              "תודה ד\"ר טלי יקרה על הרצאה שרוממה את מוחותינו ונפשותינו לגבהים של מעלה... עולם הגנטיקה הפך עבורנו, וותיקי חבצלת, למציאות ידידותית ונגישה בזכות הרצאתך המרתקת... היי ברוכה🌸",
          },
          {
            id: 103,
            name: "סולנז'",
            role: "",
            content:
              "תודה לד\"ר טלי סופרין רינגולד. הייתה הרצאה מרתקת. מרצה מקצועית ושולטת היטב בחומר.",
          },
          {
            id: 104,
            name: "ריבה",
            role: "",
            content:
              "ישבתי מרותקת בהרצאה של ד״ר טלי סופרין רינגולד!!! היה מרתק ומעניין ביותר!!!",
          },
        ]}
      />
      <AboutMe />
      <Gallery />
      <Contact />
    </>
  );
}
